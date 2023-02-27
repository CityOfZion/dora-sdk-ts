export interface AddressAbstractEntry {
  txid: string
  time: number
  block_height: number
  asset: string
  address_to: string
  address_from: string
  amount: number
}

export interface Asset {
  scripthash: string
  firstseen: number
  name: string
  symbol: string
  decimals: string
}

export interface Balance {
  asset: string
  asset_name: string
  symbol: string
  balance: number
}

export interface Block {
  hash: string
  size: number
  time: string
  index: number
  blocktime: number
  txCount: number
}

export interface ContractInvocationStats {
  name: string
  hash: string
  count: number
  change: string
}

export interface NodeMetaData {
  url: string
  height: number
}

export interface TransferAbstract {
  amount: string
  asset_name?: string
  block: number
  from: string
  scripthash: string
  symbol?: string
  time: string
  to: string
  transferindex: string
  txid: string
}

export interface TypedResponse {
  type: string
  value?: string
}

export interface Witness {
  invocation: string
  verification: string
}
