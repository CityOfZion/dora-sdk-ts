import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import type { Address, Block, Blocks, Stats, Transaction, GetFullTransactionsByAddressParams, ExportFullTransactionsByAddressParams } from '../../interfaces/api/neox';
import { GetFullTransactionsByAddressResponse } from '../../interfaces/api/common';
import { RestConfig } from '../../interfaces';
export declare class NeoXRESTApi {
    private axiosApiV2;
    protected axios: AxiosInstance;
    constructor(restConfig?: RestConfig, axiosConfig?: AxiosRequestConfig);
    getAddress(addressHash: string, network?: string): Promise<Address>;
    getBlock(blockNumberOrHash: string, network?: string): Promise<Block>;
    getBlocks(network?: string): Promise<Blocks>;
    getStats(network?: string): Promise<Stats>;
    getTokens(network?: string): Promise<any>;
    getTransaction(transactionHash: string, network?: string): Promise<Transaction>;
    getFullTransactionsByAddress(params: GetFullTransactionsByAddressParams): Promise<GetFullTransactionsByAddressResponse>;
    exportFullTransactionsByAddress(params: ExportFullTransactionsByAddressParams): Promise<string>;
    private get;
}
export declare const NeoXREST: NeoXRESTApi;
