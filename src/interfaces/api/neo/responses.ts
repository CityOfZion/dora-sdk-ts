import {
  Asset,
  Balance,
  Block,
  NodeMetaData,
  TypedResponse,
  Witness
} from '../common'
import {Contract, Manifest, NEF, Token, Transaction} from './interface'
import {ContractInvocationStats, TransferAbstract} from '../neo_legacy'

export type AssetResponse = Token

export interface AssetsResponse {
  items: Asset[]
  totalCount: number
}

export type BalanceResponse = Balance[]

export interface BlockResponse {
  hash: string
  size: number
  version: number
  previousBlockHash: string
  merkleroot: string
  time: string
  index: number
  primary: number
  nextconsensus: string
  witness: Witness[]
  tx: string[]
  blocktime: number
  jsonsize: number
  txCount: number
}

export interface BlocksResponse {
  items: Block[]
  totalCount: number
}

export interface ContractResponse {
  block: number
  hash: string
  id: number
  manifest: Manifest
  nef: NEF
  time: string
  updatecounter: number
}

export interface ContractsResponse {
  items: Contract[]
  totalCount: number
}

export type GetAllNodesResponse = NodeMetaData[]

export interface HeightResponse {
  height: number
}

export type InvocationStatsResponse = ContractInvocationStats[]

export interface LogResponse {
  exception?: any
  gas_consumed: string
  notifications: Notification[]
  stack: TypedResponse[]
  time: string
  trigger: string
  txid: string
  vmstate: string
}

export type TransactionResponse = Transaction

export interface TransactionsResponse {
  items: Transaction[]
  totalCount: number
}

export interface TransferHistoryResponse {
  items: TransferAbstract[]
  totalCount: number
}
