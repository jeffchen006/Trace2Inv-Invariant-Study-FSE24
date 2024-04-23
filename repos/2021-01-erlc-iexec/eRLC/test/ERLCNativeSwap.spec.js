const { accounts, contract, web3, config } = require("@openzeppelin/test-environment");
const { constants, ether, BN, time, expectEvent, expectRevert } = require("@openzeppelin/test-helpers");
const { expect } = require("chai");


const { abi, bytecode } = require ("rlc-faucet-contract/build/contracts/RLC.json");
const RLC      = contract.fromABI(abi, bytecode);
const ERLCSwap = contract.fromArtifact("ERLCNativeSwap");

describe("ERLCTokenSwap", async function () {
  const [ admin, kycadmin, kycuser1, kycuser2, user1, user2, other1, other2 ] = accounts;

  beforeEach(async function () {
    this.rlc  = await RLC.new({ from: admin });
    this.erlc = await ERLCSwap.new(
      "iExec KRLC Token", // name
      "KRLC",             // symbol
      9,                  // decimals
      0,                  // softcap
      [ admin ],          // admins
      [ kycadmin ],       // kycadmins
      { from: admin }
    );

    this.roles = {
      DEFAULT_ADMIN_ROLE: await this.erlc.DEFAULT_ADMIN_ROLE(),
      KYC_ADMIN_ROLE:     await this.erlc.KYC_ADMIN_ROLE(),
      KYC_MEMBER_ROLE:    await this.erlc.KYC_MEMBER_ROLE(),
    };

    this.conversionrate = await this.erlc.ConversionRate();
    this.value          = new BN("1000");

    await Promise.all(
      [ kycuser1, kycuser2, user1, user2 ]
      .map(to => this.rlc.transfer(to, this.value, { from: admin }))
    );

    await Promise.all(
      [ admin, kycuser1, kycuser2 ]
      .map(to => this.erlc.grantRole(this.roles.KYC_MEMBER_ROLE, to, { from: kycadmin }))
    );
  });

  it("initial state", async function () {
    expect(await this.rlc.name()).to.be.equal("iExec RLC Token");
    expect(await this.rlc.symbol()).to.be.equal("RLC");
    expect(await this.rlc.decimals()).to.be.bignumber.equal("9");
    expect(await this.rlc.totalSupply()).to.be.bignumber.equal("87000000000000000");
    expect(await this.erlc.name()).to.be.equal("iExec KRLC Token");
    expect(await this.erlc.symbol()).to.be.equal("KRLC");
    expect(await this.erlc.decimals()).to.be.bignumber.equal("9");
    expect(await this.erlc.totalSupply()).to.be.bignumber.equal("0");
  });

  describe("token movements", async function () {
    describe("deposit", async function () {
      describe("1-steps", async function () {
        it("missing kyc", async function () {
          const from  = user1;

          await expectRevert(this.erlc.deposit({ from, value: this.value.mul(this.conversionrate) }), "Receiver is missing KYC");
        });

        it("with kyc", async function () {
          const from  = kycuser1;

          expect(await this.erlc.balanceOf(from)).to.be.bignumber.equal("0");

          const { tx } = await this.erlc.deposit({ from, value: this.value.mul(this.conversionrate) });
          await expectEvent.inTransaction(tx, this.erlc, "Transfer", { from: constants.ZERO_ADDRESS, to: from, value: this.value });

          expect(await this.erlc.balanceOf(from)).to.be.bignumber.equal(this.value);
          expect(await web3.eth.getBalance(this.erlc.address)).to.be.bignumber.equal(this.value.mul(this.conversionrate));
        });

        it("receive", async function () {
          const from  = kycuser1;

          await web3.eth.sendTransaction({ from, to: this.erlc.address, value: this.value.mul(this.conversionrate), gas: 1000000 });

          expect(await this.erlc.balanceOf(from)).to.be.bignumber.equal(this.value);
          expect(await web3.eth.getBalance(this.erlc.address)).to.be.bignumber.equal(this.value.mul(this.conversionrate));
        });

        it("no leftover", async function () {
          const from  = kycuser1;

          expect(await this.erlc.balanceOf(from)).to.be.bignumber.equal("0");

          const balanceBefore = new BN(await web3.eth.getBalance(from));

          const { tx } = await this.erlc.deposit({ from, value: this.value.mul(this.conversionrate), gasPrice: 0 });
          await expectEvent.inTransaction(tx, this.erlc, "Transfer", { from: constants.ZERO_ADDRESS, to: from, value: this.value });

          const balanceAfter = new BN(await web3.eth.getBalance(from));

          expect(await this.erlc.balanceOf(from)).to.be.bignumber.equal(this.value);
          expect(await web3.eth.getBalance(this.erlc.address)).to.be.bignumber.equal(this.value.mul(this.conversionrate));
          expect(balanceBefore.sub(balanceAfter)).to.be.bignumber.equal(this.value.mul(this.conversionrate));
        });

        it("with leftover", async function () {
          const from  = kycuser1;

          expect(await this.erlc.balanceOf(from)).to.be.bignumber.equal("0");

          const balanceBefore = new BN(await web3.eth.getBalance(from));

          const { tx } = await this.erlc.deposit({ from, value: this.value.mul(this.conversionrate).add(new BN("133742")), gasPrice: 0 });
          await expectEvent.inTransaction(tx, this.erlc, "Transfer", { from: constants.ZERO_ADDRESS, to: from, value: this.value });

          const balanceAfter = new BN(await web3.eth.getBalance(from));

          expect(await this.erlc.balanceOf(from)).to.be.bignumber.equal(this.value);
          expect(await web3.eth.getBalance(this.erlc.address)).to.be.bignumber.equal(this.value.mul(this.conversionrate));
          expect(balanceBefore.sub(balanceAfter)).to.be.bignumber.equal(this.value.mul(this.conversionrate));
        });
      });
    });

    describe("transfer", async function () {
      beforeEach(async function () {
        await this.erlc.deposit({ from: kycuser1, value: this.value.mul(this.conversionrate) });
      });

      it("from missing kyc", async function () {
        await expectRevert(this.erlc.transfer(kycuser1, this.value, { from: user1 }), "Sender is missing KYC");
      });
      it("to missing kyc", async function () {
        await expectRevert(this.erlc.transfer(user1, this.value, { from: kycuser1 }), "Receiver is missing KYC");
      });
      it("with kyc", async function () {
        const { tx } = await this.erlc.transfer(kycuser2, this.value, { from: kycuser1 })
        await expectEvent.inTransaction(tx, this.erlc, "Transfer", { from: kycuser1, to: kycuser2, value: this.value });
      });
    });

    describe("withdraw", async function () {
      beforeEach(async function () {
        await this.erlc.deposit({ from: kycuser1, value: this.value.mul(this.conversionrate) });
      });

      it("with kyc", async function () {
        const from = kycuser1;

        expect(await this.erlc.balanceOf(from)).to.be.bignumber.equal(this.value);

        const balanceBefore = new BN(await web3.eth.getBalance(from));

        const { tx } = await this.erlc.withdraw(this.value, { from, gasPrice: 0 });
        await expectEvent.inTransaction(tx, this.erlc, "Transfer", { from: from, to: constants.ZERO_ADDRESS, value: this.value });

        const balanceAfter = new BN(await web3.eth.getBalance(from));

        expect(await this.erlc.balanceOf(from)).to.be.bignumber.equal("0");
        expect(balanceAfter.sub(balanceBefore)).to.be.bignumber.equal(this.value.mul(this.conversionrate));
      });

      it("without kyc", async function () {
        const from = kycuser1;

        expect(await this.erlc.balanceOf(from)).to.be.bignumber.equal(this.value);

        await this.erlc.revokeRole(this.roles.KYC_MEMBER_ROLE, from, { from: kycadmin });

        await expectRevert(this.erlc.withdraw(this.value, { from }), "Sender is missing KYC");

        // const { tx } = await this.erlc.withdraw(this.value, { from })
        // await expectEvent.inTransaction(tx, this.rlc,  "Transfer", { from: this.erlc.address, to: from,                   value: this.value });

        // expect(await this.erlc.balanceOf(from)).to.be.bignumber.equal("0");
      });
    });

    describe("recover & claim", async function () {
      beforeEach(async function () {
        const { tx } = await this.rlc.transfer(this.erlc.address, this.value, { from: kycuser1 });
        await expectEvent.inTransaction(tx, this.rlc, "Transfer", { from: kycuser1, to: this.erlc.address, value: this.value });
      });

      it("recover", async function () {
        const { tx } = await this.erlc.recover({ from: admin });
        await expectEvent.inTransaction(tx, this.erlc, "Transfer", { from: constants.ZERO_ADDRESS, to: admin, value: new BN(0) });
      });

      it("claim - working", async function () {
        const { tx } = await this.erlc.claim(this.rlc.address, admin, { from: admin });
        await expectEvent.inTransaction(tx, this.rlc, "Transfer", { from: this.erlc.address, to: admin, value: this.value });
      });

      it("recover - denied access", async function () {
        await expectRevert(this.erlc.recover({ from: kycuser1 }), "only-admin");
      });

      it("claim - denied access", async function () {
        await expectRevert(this.erlc.claim(this.rlc.address, kycuser1, { from: kycuser1 }), "only-admin");
      });
    });
  });

  describe("snapshots", async function () {
    it("without snapshot", async function () {
      expect(await this.erlc.totalSupply()).to.be.bignumber.equal("0");
      await expectRevert(this.erlc.totalSupplyAt(0), "ERC20Snapshot: id is 0");
      await expectRevert(this.erlc.totalSupplyAt(1), "ERC20Snapshot: nonexistent id");
      await expectRevert(this.erlc.totalSupplyAt(2), "ERC20Snapshot: nonexistent id");
    });

    describe("with snapshot", async function () {
      beforeEach(async function () {
        const { tx } = await this.erlc.snapshot({ from: admin })
        await expectEvent.inTransaction(tx, this.erlc, "Snapshot", { id: new BN("1") });
      });

      it("check", async function () {
        expect(await this.erlc.totalSupply()).to.be.bignumber.equal("0");
        await expectRevert(this.erlc.totalSupplyAt(0), "ERC20Snapshot: id is 0");
        expect(await this.erlc.totalSupplyAt(1)).to.be.bignumber.equal("0");
        await expectRevert(this.erlc.totalSupplyAt(2), "ERC20Snapshot: nonexistent id");
      });

      describe("with deposit", async function () {
        beforeEach(async function () {
          await this.erlc.deposit({ from: kycuser1, value: this.value.mul(this.conversionrate) });
        });

        it("check", async function () {
          expect(await this.erlc.totalSupply()).to.be.bignumber.equal(this.value);
          await expectRevert(this.erlc.totalSupplyAt(0), "ERC20Snapshot: id is 0");
          expect(await this.erlc.totalSupplyAt(1)).to.be.bignumber.equal("0");
          await expectRevert(this.erlc.totalSupplyAt(2), "ERC20Snapshot: nonexistent id");
        });

        it("resnapshot and check", async function () {
          const { tx } = await this.erlc.snapshot({ from: admin })
          await expectEvent.inTransaction(tx, this.erlc, "Snapshot", { id: new BN("2") });

          expect(await this.erlc.totalSupply()).to.be.bignumber.equal(this.value);
          await expectRevert(this.erlc.totalSupplyAt(0), "ERC20Snapshot: id is 0");
          expect(await this.erlc.totalSupplyAt(1)).to.be.bignumber.equal("0");
          expect(await this.erlc.totalSupplyAt(2)).to.be.bignumber.equal(this.value);
        });
      });
    });
  });

  async function checkRoleChange(contract, role, account, sender, fname, ename = null)
  {
    if (ename)
    {
      expectEvent(await contract[fname](role, account, { from: sender }), ename, { role, account, sender });
    }
    else
    {
      await expectRevert(contract[fname](role, account, { from: sender }), "AccessControl: sender must be an admin to");
    }
  }

  describe("role management", async function () {
    describe("role: kyc member", async function () {
      describe("grant", async function () {
        it("by default admin - no", async function () { await checkRoleChange(this.erlc, this.roles.KYC_MEMBER_ROLE, other2, admin,    "grantRole")                });
        it("by kyc admin - no",     async function () { await checkRoleChange(this.erlc, this.roles.KYC_MEMBER_ROLE, other2, kycadmin, "grantRole", "RoleGranted") });
        it("by kyc member - no",    async function () { await checkRoleChange(this.erlc, this.roles.KYC_MEMBER_ROLE, other2, kycuser1, "grantRole")                });
        it("by other - no",         async function () { await checkRoleChange(this.erlc, this.roles.KYC_MEMBER_ROLE, other2, other1,   "grantRole")                });
      });

      describe("revoke", async function () {
        beforeEach(async function () { await this.erlc.grantRole(this.roles.KYC_MEMBER_ROLE, other2, { from: kycadmin }) });
        it("by default admin - no", async function () { await checkRoleChange(this.erlc, this.roles.KYC_MEMBER_ROLE, other2, admin,    "revokeRole")                });
        it("by kyc admin - no",     async function () { await checkRoleChange(this.erlc, this.roles.KYC_MEMBER_ROLE, other2, kycadmin, "revokeRole", "RoleRevoked") });
        it("by kyc member - no",    async function () { await checkRoleChange(this.erlc, this.roles.KYC_MEMBER_ROLE, other2, kycuser1, "revokeRole")                });
        it("by other - no",         async function () { await checkRoleChange(this.erlc, this.roles.KYC_MEMBER_ROLE, other2, other1,   "revokeRole")                });
      });
    });

    describe("role: kyc admin", async function () {
      describe("grant", async function () {
        it("by default admin - no", async function () { await checkRoleChange(this.erlc, this.roles.KYC_ADMIN_ROLE, other2, admin,    "grantRole", "RoleGranted") });
        it("by kyc admin - no",     async function () { await checkRoleChange(this.erlc, this.roles.KYC_ADMIN_ROLE, other2, kycadmin, "grantRole")                });
        it("by kyc member - no",    async function () { await checkRoleChange(this.erlc, this.roles.KYC_ADMIN_ROLE, other2, kycuser1, "grantRole")                });
        it("by other - no",         async function () { await checkRoleChange(this.erlc, this.roles.KYC_ADMIN_ROLE, other2, other1,   "grantRole")                });
      });

      describe("revoke", async function () {
        beforeEach(async function () { await this.erlc.grantRole(this.roles.KYC_ADMIN_ROLE, other2, { from: admin }) });
        it("by default admin - no", async function () { await checkRoleChange(this.erlc, this.roles.KYC_ADMIN_ROLE, other2, admin,    "revokeRole", "RoleRevoked") });
        it("by kyc admin - no",     async function () { await checkRoleChange(this.erlc, this.roles.KYC_ADMIN_ROLE, other2, kycadmin, "revokeRole")                });
        it("by kyc member - no",    async function () { await checkRoleChange(this.erlc, this.roles.KYC_ADMIN_ROLE, other2, kycuser1, "revokeRole")                });
        it("by other - no",         async function () { await checkRoleChange(this.erlc, this.roles.KYC_ADMIN_ROLE, other2, other1,   "revokeRole")                });
      });
    });

    describe("role: admin", async function () {
      describe("grant", async function () {
        it("by default admin - no", async function () { await checkRoleChange(this.erlc, this.roles.DEFAULT_ADMIN_ROLE, other2, admin,    "grantRole", "RoleGranted") });
        it("by kyc admin - no",     async function () { await checkRoleChange(this.erlc, this.roles.DEFAULT_ADMIN_ROLE, other2, kycadmin, "grantRole")                });
        it("by kyc member - no",    async function () { await checkRoleChange(this.erlc, this.roles.DEFAULT_ADMIN_ROLE, other2, kycuser1, "grantRole")                });
        it("by other - no",         async function () { await checkRoleChange(this.erlc, this.roles.DEFAULT_ADMIN_ROLE, other2, other1,   "grantRole")                });
      });

      describe("revoke", async function () {
        beforeEach(async function () { await this.erlc.grantRole(this.roles.DEFAULT_ADMIN_ROLE, other2, { from: admin }) });
        it("by default admin - no", async function () { await checkRoleChange(this.erlc, this.roles.DEFAULT_ADMIN_ROLE, other2, admin,    "revokeRole", "RoleRevoked") });
        it("by kyc admin - no",     async function () { await checkRoleChange(this.erlc, this.roles.DEFAULT_ADMIN_ROLE, other2, kycadmin, "revokeRole")                });
        it("by kyc member - no",    async function () { await checkRoleChange(this.erlc, this.roles.DEFAULT_ADMIN_ROLE, other2, kycuser1, "revokeRole")                });
        it("by other - no",         async function () { await checkRoleChange(this.erlc, this.roles.DEFAULT_ADMIN_ROLE, other2, other1,   "revokeRole")                });
      });
    });
  });
});
