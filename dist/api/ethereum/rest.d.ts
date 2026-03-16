import {
  ExportActivityHistoryParams,
  ActivityHistoryParams
} from '../../interfaces/api/ethereum'
import { ActivityHistoryResponse } from '../../interfaces/api/common'
export declare class EthereumRESTApi {
  private axiosApiV2
  constructor()
  getFullTransactionsByAddress(
    params: ActivityHistoryParams
  ): Promise<ActivityHistoryResponse>
  exportFullTransactionsByAddress(
    params: ExportActivityHistoryParams
  ): Promise<string>
}
export declare const EthereumREST: EthereumRESTApi
