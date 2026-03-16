import type {
  AddressTransactionsResponse,
  AddressTXFullResponse,
  AssetResponse,
  AssetsResponse,
  BalanceResponse,
  BlockResponse,
  BlocksResponse,
  ContractResponse,
  ContractsResponse,
  ContractStatsResponse,
  HeightResponse,
  InvocationStatsResponse,
  LogResponse,
  TokenProvenanceResponse,
  TransactionResponse,
  TransactionsResponse,
  TransferHistoryResponse,
  VoterResponse,
  ActivityHistoryParams,
  ExportActivityHistoryParams
} from '../../interfaces/api/neo'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import { ActivityHistoryResponse } from '../../interfaces/api/common'
import { RestConfig } from '../../interfaces'
export declare class NeoRESTApi {
  private axiosApiV2
  protected axios: AxiosInstance
  constructor(restConfig?: RestConfig, axiosConfig?: AxiosRequestConfig)
  addressTransactions(
    address: string,
    page?: number,
    network?: string
  ): Promise<AddressTransactionsResponse>
  addressTXFull(
    address: string,
    page?: number,
    network?: string
  ): Promise<AddressTXFullResponse>
  asset(assetHash: string, network?: string): Promise<AssetResponse>
  assets(page?: number, network?: string): Promise<AssetsResponse>
  balance(address: string, network?: string): Promise<BalanceResponse>
  block(blockHeight: number, network?: string): Promise<BlockResponse>
  blocks(page?: number, network?: string): Promise<BlocksResponse>
  committee(network?: string): Promise<BalanceResponse>
  contract(contractHash: string, network?: string): Promise<ContractResponse>
  contracts(page: number, network?: string): Promise<ContractsResponse>
  contractStats(
    contractHash: string,
    network?: string
  ): Promise<ContractStatsResponse>
  height(network?: string): Promise<HeightResponse>
  invocationStats(network?: string): Promise<InvocationStatsResponse>
  log(txid: string, network?: string): Promise<LogResponse>
  tokenProvenance(
    contract: string,
    tokenId: string,
    network?: string
  ): Promise<TokenProvenanceResponse>
  transaction(txid: string, network?: string): Promise<TransactionResponse>
  transactions(page?: number, network?: string): Promise<TransactionsResponse>
  transferHistory(
    address: string,
    page?: number,
    network?: string
  ): Promise<TransferHistoryResponse>
  voter(address: string, network?: string): Promise<VoterResponse>
  getFullTransactionsByAddress(
    params: ActivityHistoryParams
  ): Promise<ActivityHistoryResponse>
  exportFullTransactionsByAddress(
    params: ExportActivityHistoryParams
  ): Promise<string>
  private get;
}
export declare const NeoN3REST: NeoRESTApi
