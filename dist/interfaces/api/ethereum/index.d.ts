import {
  CommonExportFullTransactionsByAddressParams,
  CommonGetFullTransactionsByAddressParams
} from '../common'
export type NetworkType =
  | '1'
  | '8453'
  | '42161'
  | '137'
  | (string & NonNullable<unknown>)
export type ActivityHistoryParams = {
  network: NetworkType
} & CommonGetFullTransactionsByAddressParams
export type GetFullTransactionsByAddressParams = ActivityHistoryParams
export type AxiosActivityHistoryParams = {
  protocol: 'ethereum'
} & ActivityHistoryParams
export type AxiosGetFullTransactionsByAddressParams = AxiosActivityHistoryParams
export type ExportActivityHistoryParams = {
  network: NetworkType
} & CommonExportFullTransactionsByAddressParams
export type ExportFullTransactionsByAddressParams = ExportActivityHistoryParams
