import { CommonExportFullTransactionsByAddressParams, CommonGetFullTransactionsByAddressParams } from '../common';
export type NetworkType = '1' | '8453' | '42161' | '137' | (string & NonNullable<unknown>);
export type GetFullTransactionsByAddressParams = {
    network: NetworkType;
} & CommonGetFullTransactionsByAddressParams;
export type AxiosGetFullTransactionsByAddressParams = {
    protocol: 'ethereum';
} & GetFullTransactionsByAddressParams;
export type ExportFullTransactionsByAddressParams = {
    network: NetworkType;
} & CommonExportFullTransactionsByAddressParams;
