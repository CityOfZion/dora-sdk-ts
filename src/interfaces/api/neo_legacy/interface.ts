import { TypedResponse, Witness } from '../common'

export interface ApplicationLog {
  gas_consumed: string
  logs: any[]
  notifications: Notification[]
  stack: any[]
  time: string
  trigger: string
  txid: string
  vmstate: string
}

export interface Asset {
  scripthash: string
  firstseen: number
  name: string
  symbol: string
  decimals: string
}

export interface ContractMetaData {
  hash: string
  name: string
  author: string
  block: number
  time: string
  asset_name: string
  symbol: string
  type: string
}

export interface ContractState {
  version: number
  hash: string
  script: string
  parameters: string[]
  returntype: string
  name: string
  code_version: string
  author: string
  email: string
  description: string
  properties: any
}

export interface ContractStorage {
  scripthash: string
  key: string
  state: string
  value: string
}

export interface ContractTransfer {
  blockindex: number
  timestamp: string
  txid: string
  transfer_from_address: string
  transfer_to_address: string
  asset_symbol: string
  asset_decimals: number
  amount: number
}

export interface ClaimableEvent {
  txid: string
  n: number
  value: number
  start_height: number
  end_height: number
  generated: number
  sys_fee: number
  unclaimed: number
}

export interface InputOutput {
  n: number
  asset: string
  value: string
  address: string
}

export interface Notification {
  contract: string
  state: TypedResponse
}

export interface TimedBalance {
  balance: number
  date: string
}

export interface Transaction {
  _id?: string
  attributes?: any[]
  block: number
  gas?: string
  jsonsize?: number
  net_fee?: string
  script?: string
  scripts?: Witness[]
  size: number
  sys_fee?: string
  time: string
  txid: string
  type: string
  version?: number
  vin?: []
  vout?: []
}
