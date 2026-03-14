import { ExportFullTransactionsByAddressParams, GetFullTransactionsByAddressParams } from '../../interfaces/api/ethereum';
import { GetFullTransactionsByAddressResponse } from '../../interfaces/api/common';
export declare class EthereumRESTApi {
    private axiosApiV2;
    constructor();
    getFullTransactionsByAddress(params: GetFullTransactionsByAddressParams): Promise<GetFullTransactionsByAddressResponse>;
    exportFullTransactionsByAddress(params: ExportFullTransactionsByAddressParams): Promise<string>;
}
export declare const EthereumREST: EthereumRESTApi;
