import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type {
  Address,
  Block,
  Blocks,
  Stats,
  Transaction,
  ActivityHistoryParams,
  ExportActivityHistoryParams
} from '../../interfaces/api/neox'
import { ActivityHistoryResponse } from '../../interfaces/api/common'
import { RestConfig } from '../../interfaces'
export declare class NeoXRESTApi {
  private axiosApiV2
  protected axios: AxiosInstance
  constructor(restConfig?: RestConfig, axiosConfig?: AxiosRequestConfig)
  getAddress(addressHash: string, network?: string): Promise<Address>
  getBlock(blockNumberOrHash: string, network?: string): Promise<Block>
  getBlocks(network?: string): Promise<Blocks>
  getStats(network?: string): Promise<Stats>
  getTokens(network?: string): Promise<any>
  getTransaction(
    transactionHash: string,
    network?: string
  ): Promise<Transaction>
  getFullTransactionsByAddress(
    params: ActivityHistoryParams
  ): Promise<ActivityHistoryResponse>
  exportFullTransactionsByAddress(
    params: ExportActivityHistoryParams
  ): Promise<string>
  private get;
}
export declare const NeoXREST: NeoXRESTApi
