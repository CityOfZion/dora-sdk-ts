import {
  Asset,
  ContractInvocationStats,
  Balance,
  Block,
  NodeMetaData,
  TransferAbstract,
  TypedResponse,
  Witness
} from '../common'
import {
  Contract,
  Manifest,
  NEF,
  Token,
  Transaction,
  TransactionEnhanced,
  Provenance
} from './interface'

export interface AddressTransactionsResponse {
  items: TransactionEnhanced[]
  totalCount: number
}

export type AddressTXFullResponse = AddressTransactionsResponse

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
  witnesses: Witness[]
  tx: Transaction[]
  blocktime: number
  jsonsize: number
  txCount: number
}

export interface BlocksResponse {
  items: Block[]
  totalCount: number
}

export interface Committee {
  scripthash: string
  name: string
  location: string
  website: string
  email: string
  github: string
  telegram: string
  twitter: string
  description: string
  logo: string
  votes: number
  pubkey: string
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
  exception?: unknown
  gas_consumed: string
  notifications: Notification[]
  stack: TypedResponse[]
  time: string
  trigger: string
  txid: string
  vmstate: string
}

export type TokenProvenanceResponse = Provenance[]


export type TransactionResponse = Transaction

export interface TransactionsResponse {
  items: Transaction[]
  totalCount: number
}

export interface TransferHistoryResponse {
  items: TransferAbstract[]
  totalCount: number
}

export interface VoterResponse {
  vote: string
  candidate: string
  candidatePubbkey: string
  balance: number
}

export interface ContractStatsResponse {
  [date: string]: number
}
