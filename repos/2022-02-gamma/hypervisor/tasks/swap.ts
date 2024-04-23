import { formatEther} from 'ethers/lib/utils'
import { task } from 'hardhat/config'
import { deployContract } from './utils'

task('deploy-swap', 'Deploy Swap contract')
  .addParam('owner', "your address")
  .addParam('token', "visr address")
  .setAction(async (cliArgs, { ethers, run, network }) => {
    // compile

    await run('compile')

    // get signer

    const signer = (await ethers.getSigners())[0]
    console.log('Signer')
    console.log('  at', signer.address)
    console.log('  ETH', formatEther(await signer.getBalance()))

    const _owner = ethers.utils.getAddress(cliArgs.owner);
    const _VISR = ethers.utils.getAddress(cliArgs.token);

    // TODO cli args
    // goerli
    const args = {
      _owner,
      _router: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
      _VISR,
    };

    console.log('Network')
    console.log('  ', network.name)
    console.log('Task Args')
    console.log(args)

    const swap = await deployContract(
      'Swap',
      await ethers.getContractFactory('Swap'),
      signer,
      Object.values(args)
    )

    await swap.deployTransaction.wait(5)
    await run('verify:verify', {
      address: swap.address,
      constructorArguments: Object.values(args),
    })

  }); 

  task('run-swap', 'Run Swap contract swap function')
  .addParam('token', 'token which to swap for VISR')
  .addParam('path', 'path to use')
  .addOptionalParam('send', 'flag for sending recipient or not')
  .setAction(async (cliArgs, { ethers, run, network }) => {
    // compile

    const signer = (await ethers.getSigners())[0]
    const swapAddress = "0x92f8964e7e261f872Cf4AAE01C7d845333aeB4C7";
    
    const swap = await ethers.getContractAt(
      'Swap',
      swapAddress,
      signer,
    )

    const _token = ethers.utils.getAddress(cliArgs.token);
    const _path = cliArgs.path;
    const _send = cliArgs.send == 'false' ? false : true;

    await swap.swap(_token, _path, _send);

  }); 
