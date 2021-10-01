import {
  AddressAbstractEntry,
  Asset,
  ContractInvocationStats,
  Balance,
  Block,
  NodeMetaData,
  TransferAbstract,
  TypedResponse,
  Witness
} from '../common'
import { Contract, Manifest, NEF, Token, Transaction } from './interface'

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
  nonce: string
  index: number
  primary: number
  nextconsensus: string
  witness: Witness[]
  tx: Transaction[]
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

export interface GetAddressAbstractsResponse {
  total_pages: number
  total_entries: number
  page_size: number
  page_number: number
  entries: AddressAbstractEntry[]
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
