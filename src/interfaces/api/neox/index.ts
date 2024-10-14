export interface Address {
  hash: string
  creator_address_hash?: string
  creation_tx_hash?: string
  token?: Token
  coin_balance?: string
  exchange_rate?: string
  implementation_address?: string
  block_number_balance_updated_at?: number
  implementation_name?: string
  name?: string
  is_contract?: boolean
  private_tags?: AddressTag[]
  watchlist_names?: WatchlistName[]
  public_tags?: AddressTag[]
  is_verified?: boolean
  has_beacon_chain_withdrawals?: boolean
  has_custom_methods_read?: boolean
  has_custom_methods_write?: boolean
  has_decompiled_code?: boolean
  has_logs?: boolean
  has_methods_read?: boolean
  has_methods_write?: boolean
  has_methods_read_proxy?: boolean
  has_methods_write_proxy?: boolean
  has_token_transfers?: boolean
  has_tokens?: boolean
  has_validated_blocks?: boolean
}

export interface AddressParam {
  hash: string
  implementation_name: string
  is_contract: boolean
  is_verified: boolean
  name: string
  private_tags: AddressTag[]
  public_tags: AddressTag[]
  watchlist_names: WatchlistName[]
}

export interface AddressTag {
  address_hash: string
  display_name: string
  label: string
}

export interface Block {
  base_fee_per_gas: string
  burnt_fees: string
  burnt_fees_percentage: number
  difficulty: string
  extra_data: string
  gas_limit: string
  gas_target_percentage: number
  gas_used: string
  gas_used_percentage: number
  hash: string
  height: number
  miner: AddressParam
  nonce: string
  parent_hash: string
  priority_fee: string
  rewards: Reward[]
  size: number
  state_root: string
  timestamp: string
  total_difficulty: string
  tx_count: number
  tx_fees: string
  type: string
  uncles_hashes: string[]
  withdrawals_count: number
}

export interface Blocks {
  items: Block[]
}

export interface DecodedInput {
  method_call: string
  method_id: string
  parameters: DecodedInputParameter[]
}

export interface DecodedInputParameter {
  name: string
  type: string
  value: string
}

export interface Fee {
  type: string
  value: string
}

export interface Reward {
  reward: number
  type: string
}

export interface Token {
  address: string
  symbol: string
  name: string
  decimals: string
  type: string
  holders: string
  exchange_rate: string
  total_supply: string
  circulating_market_cap?: string
  icon_url?: string
}

export interface Tokens {
  items: Token[]
}

export interface TokenTransfer {
  block_hash: string
  from: AddressParam
  log_index: string
  method: string
  timestamp: string
  to: AddressParam
  token: Token
  total: TotalERC1155 | TotalERC1155Batch | TotalERC20 | TotalERC721
  tx_hash: string
  type: string
}

export interface TotalERC1155 {
  decimals: string
  value: string
}

export type TotalERC1155Batch = TotalERC1155[]

export interface TotalERC20 {
  decimals: string
  value: string
}

export interface TotalERC721 {
  token_id: string
}

export interface Transaction {
  timestamp: string
  fee: Fee
  gas_limit: number
  block: number
  status: 'ok' | 'error'
  method: string
  confirmations: number
  type: number
  exchange_rate: string
  to: AddressParam
  tx_burnt_fee: string
  max_fee_per_gas: string
  result: string
  hash: string
  gas_price: string
  priority_fee: string
  base_fee_per_gas: string
  from: AddressParam
  token_transfers: TokenTransfer[]
  tx_types: string[]
  gas_used: string
  created_contract: AddressParam
  position: number
  nonce: number
  has_error_in_internal_txs: boolean
  decoded_input: DecodedInput
  token_transfers_overflow: boolean
  raw_input: string
  value: string
  max_priority_fee_per_gas: string
  revert_reason: string
  confirmation_duration: number[]
  tx_tag: string
}

export interface WatchlistName {
  display_name: string
  label: string
}

export interface Stats {
  total_blocks: string
  total_addresses: string
  total_transactions: string
  average_block_time: number
  coin_price: string
  total_gas_used: string
  transactions_today: string
  gas_used_today: string
  gas_prices: {
    average: number
    fast: number
    slow: number
  }
  static_gas_price: string
  market_cap: string
  network_utilization_percentage: number
}
