import { CommonGetFullTransactionsByAddressParams } from '../common'

export type GetFullTransactionsByAddressParams = {
  network: '1' | '8453' | '42161' | '137' | (string & NonNullable<unknown>)
} & CommonGetFullTransactionsByAddressParams

export type AxiosGetFullTransactionsByAddressParams = {
  protocol: 'ethereum'
} & GetFullTransactionsByAddressParams
