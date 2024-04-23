/******************************************************************************
 * Copyright 2020 IEXEC BLOCKCHAIN TECH                                       *
 *                                                                            *
 * Licensed under the Apache License, Version 2.0 (the "License");            *
 * you may not use this file except in compliance with the License.           *
 * You may obtain a copy of the License at                                    *
 *                                                                            *
 *     http://www.apache.org/licenses/LICENSE-2.0                             *
 *                                                                            *
 * Unless required by applicable law or agreed to in writing, software        *
 * distributed under the License is distributed on an "AS IS" BASIS,          *
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.   *
 * See the License for the specific language governing permissions and        *
 * limitations under the License.                                             *
 ******************************************************************************/

import {
	Address,
} from '@graphprotocol/graph-ts'

import {
	Account,
	Token,
	Balance,
	Transfer,
	Approval,
} from '../../generated/schema'

import {
	ERC20,
	Transfer as TransferEvent,
	Approval as ApprovalEvent,
} from '../../generated/RLC/ERC20'

import {
	constants,
	decimals,
	events,
	transactions,
} from '@amxx/graphprotocol-utils'

function fetchToken(addr: Address) : Token {
	let token = Token.load(addr.toHex())
	if (token == null) {
		let contract = ERC20.bind(addr)
		token          = new Token(addr.toHex())
		token.name     = contract.name()
		token.symbol   = contract.symbol()
		token.decimals = contract.decimals()
		token.save()
	}
	return token as Token
}

export function handleTransfer(event: TransferEvent): void {
	let token = fetchToken(event.address)
	let from  = new Account(event.params.from.toHex())
	let to    = new Account(event.params.to.toHex())
	from.save()
	to.save()

	let ev         = new Transfer(events.id(event))
	ev.transaction = transactions.log(event).id
	ev.timestamp   = event.block.timestamp
	ev.token       = token.id
	ev.from        = from.id
	ev.to          = to.id
	ev.value       = decimals.toDecimals(event.params.value, token.decimals)

	if (from.id != constants.ADDRESS_ZERO) {
		let id      = token.id.concat('-').concat(from.id)
		let balance = Balance.load(id)
		// first time balance is seen
		if (balance == null) {
			let balance     = new Balance(id)
			balance.token   = token.id
			balance.account = from.id
			balance.value   = balance.id
			balance.save()
			// read from contract
			let value = new decimals.Value(balance.id, token.decimals)
			value.set(ERC20.bind(event.address).balanceOf(event.params.from))
		} else {
			let value = new decimals.Value(balance.id, token.decimals)
			value.decrement(event.params.value)
		}
		ev.fromBalance = id;
	}

	if (to.id != constants.ADDRESS_ZERO) {
		let id      = token.id.concat('-').concat(to.id)
		let balance = Balance.load(id)
		// first time balance is seen
		if (balance == null) {
			let balance     = new Balance(id)
			balance.token   = token.id
			balance.account = to.id
			balance.value   = balance.id
			balance.save()
			// read from contract
			let value = new decimals.Value(balance.id, token.decimals)
			value.set(ERC20.bind(event.address).balanceOf(event.params.to))
		} else {
			let value = new decimals.Value(balance.id, token.decimals)
			value.increment(event.params.value)
		}
		ev.toBalance = id;
	}
	ev.save()
}

export function handleApproval(event: ApprovalEvent): void {
	let token   = fetchToken(event.address)
	let owner   = new Account(event.params.owner.toHex())
	let spender = new Account(event.params.spender.toHex())
	owner.save()
	spender.save()

	let ev         = new Approval(events.id(event))
	ev.transaction = transactions.log(event).id
	ev.timestamp   = event.block.timestamp
	ev.token       = token.id
	ev.owner       = owner.id
	ev.spender     = spender.id
	ev.value       = decimals.toDecimals(event.params.value, token.decimals)
	ev.save()
}
