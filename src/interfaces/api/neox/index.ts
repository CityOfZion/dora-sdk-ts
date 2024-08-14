export interface Address {
  creator_address_hash: string | null
  creation_tx_hash: string | null
  token: Token | null
  coin_balance: string
  exchange_rate: string | null
  implementation_address: string | null
  block_number_balance_updated_at: number
  hash: string
  implementation_name: string | null
  name: string | null
  is_contract: boolean
  private_tags: AddressTag[]
  watchlist_names: WatchlistName[]
  public_tags: AddressTag[]
  is_verified: boolean
  has_beacon_chain_withdrawals: boolean
  has_custom_methods_read: boolean
  has_custom_methods_write: boolean
  has_decompiled_code: boolean
  has_logs: boolean
  has_methods_read: boolean
  has_methods_write: boolean
  has_methods_read_proxy: boolean
  has_methods_write_proxy: boolean
  has_token_transfers: boolean
  has_tokens: boolean
  has_validated_blocks: boolean
}

export interface AddressTag {
  address_hash: string
  display_name: string
  label: string
}

export interface Token {
  address: string
  circulating_market_cap: string
  icon_url: string | null
  name: string
  decimals: string
  symbol: string
  type: string
  holders: string
  exchange_rate: string
  total_supply: string
}

export interface WatchlistName {
  display_name: string
  label: string
}
