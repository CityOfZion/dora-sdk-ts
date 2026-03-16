import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { RestConfig } from '../../interfaces'
import type { ActivityHistoryResponse } from '../../interfaces/api/common'
import type {
  AddressStatsResponse,
  AssetResponse,
  AssetsResponse,
  BalanceResponse,
  BlockResponse,
  BlocksResponse,
  ContractResponse,
  ContractsResponse,
  ContractTransfersResponse,
  ExportActivityHistoryParams,
  GetAddressAbstractsResponse,
  GetAllNodesResponse,
  ActivityHistoryParams,
  GetUnclaimedResponse,
  HeightResponse,
  InvocationStatsResponse,
  LogResponse,
  StorageResponse,
  TransactionAbstractsResponse,
  TransactionResponse,
  TransactionsResponse,
  TransferHistoryResponse
} from '../../interfaces/api/neo_legacy'
export declare class NeoLegacyRESTApi {
  private axiosApiV2
  protected axios: AxiosInstance
  constructor(restConfig?: RestConfig, axiosConfig?: AxiosRequestConfig)
  addressStats(address: string, network?: string): Promise<AddressStatsResponse>
  asset(assetHash: string, network?: string): Promise<AssetResponse>
  assets(page?: number, network?: string): Promise<AssetsResponse>
  balance(address: string, network?: string): Promise<BalanceResponse>
  block(blockHash: string, network?: string): Promise<BlockResponse>
  blocks(page?: number, network?: string): Promise<BlocksResponse>
  contract(contractHash: string, network?: string): Promise<ContractResponse>
  contracts(page: number, network?: string): Promise<ContractsResponse>
  contractStats(contractHash: string, network?: string): Promise<object>
  contractTransfers(
    contractHash: string,
    page?: number,
    network?: string
  ): Promise<ContractTransfersResponse>
  getAddressAbstracts(
    address: string,
    page?: number,
    network?: string
  ): Promise<GetAddressAbstractsResponse>
  getAllNodes(network?: string): Promise<GetAllNodesResponse>
  height(network?: string): Promise<HeightResponse>
  invocationStats(network?: string): Promise<InvocationStatsResponse>
  log(contractHash: string, network?: string): Promise<LogResponse>
  storage(blockHash: string, network?: string): Promise<StorageResponse>
  transaction(txid: string, network?: string): Promise<TransactionResponse>
  transactions(page?: number, network?: string): Promise<TransactionsResponse>
  transactionAbstracts(
    txid: string,
    network?: string
  ): Promise<TransactionAbstractsResponse>
  transferHistory(
    address: string,
    page?: number,
    network?: string
  ): Promise<TransferHistoryResponse>
  getUnclaimed(address: string, network?: string): Promise<GetUnclaimedResponse>
  getFullTransactionsByAddress(
    params: ActivityHistoryParams
  ): Promise<ActivityHistoryResponse>
  exportFullTransactionsByAddress(
    params: ExportActivityHistoryParams
  ): Promise<string>
  private get;
}
export declare const NeoLegacyREST: NeoLegacyRESTApi
