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
	Bytes,
	store,
} from '@graphprotocol/graph-ts'

import {
	Account,
	AccessControl,
	RoleID,
	Role,
	AccountRole,
	RoleGranted,
	RoleRevoked,
} from '../../generated/schema'

import {
	RoleAdminChanged as RoleAdminChangedEvent,
	RoleGranted      as RoleGrantedEvent,
	RoleRevoked      as RoleRevokedEvent,
} from '../../generated/eRLC-kyc/AccessControl'

import {
	events,
	transactions,
} from '@amxx/graphprotocol-utils'

function fetchRole(address: Address, role: Bytes): Role {
	let accesscontrol     = new AccessControl(address.toHex())
	accesscontrol.save()

	let roleid            = new RoleID(role.toHex())
	roleid.save()

	let role              = new Role(accesscontrol.id.concat('').concat(roleid.id))
	role.accesscontrol    = accesscontrol.id
	role.roleid           = roleid.id
	role.save()

	return role as Role
}

export function handleRoleGranted(event: RoleGrantedEvent): void {
	let account           = new Account(event.params.account.toHex())
	let sender            = new Account(event.params.sender.toHex())
	account.save()
	sender.save()

	let role              = fetchRole(event.address, event.params.role)
	let pair              = new AccountRole(account.id.concat('-').concat(role.id))
	pair.account          = account.id
	pair.role             = role.id
	pair.save()

	let ev                = new RoleGranted(events.id(event))
	ev.transaction        = transactions.log(event).id
	ev.timestamp          = event.block.timestamp
	ev.account            = account.id
	ev.role               = role.id
	ev.sender             = sender.id
	ev.save()
}

export function handleRoleRevoked(event: RoleRevokedEvent): void {
	let account           = new Account(event.params.account.toHex())
	let sender            = new Account(event.params.sender.toHex())
	account.save()
	sender.save()

	let role              = fetchRole(event.address, event.params.role)
	store.remove('AccountRole', account.id.concat('-').concat(role.id))

	let ev                = new RoleRevoked(events.id(event))
	ev.transaction        = transactions.log(event).id
	ev.timestamp          = event.block.timestamp
	ev.account            = account.id
	ev.role               = role.id
	ev.sender             = sender.id
	ev.save()
}

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
	let admin             = fetchRole(event.address, event.params.newAdminRole)
	let role              = fetchRole(event.address, event.params.role)
	role.admin            = admin.id
	role.save()
}
