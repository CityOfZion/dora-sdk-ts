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
  GetAddressAbstractsResponse,
  GetAllNodesResponse,
  GetClaimableResponse,
  GetUnclaimedResponse,
  HeightResponse,
  InvocationStatsResponse,
  LogResponse,
  StorageResponse,
  TransactionAbstractsResponse,
  TransactionResponse,
  TransactionsResponse,
  TransferHistoryResponse,
  AxiosGetFullTransactionsByAddressParams,
  GetFullTransactionsByAddressParams,
  ExportFullTransactionsByAddressParams
} from '../../interfaces/api/neo_legacy'
import type { RestConfig } from '../../interfaces'
import { DORA_URL } from '../../constants'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'
import { GetFullTransactionsByAddressResponse } from '../../interfaces/api/common'

const DefaultLegacyRestConfig: RestConfig = {
  doraUrl: DORA_URL,
  endpoint: '/api/v1/neo2'
}

export class NeoLegacyRESTApi {
  private axiosDoraV2: AxiosInstance

  protected axios: AxiosInstance

  public constructor(
    restConfig: RestConfig = DefaultLegacyRestConfig,
    axiosConfig?: AxiosRequestConfig
  ) {
    if (typeof axiosConfig === 'undefined') {
      axiosConfig = { baseURL: restConfig.doraUrl + restConfig.endpoint }
    } else {
      axiosConfig['baseURL'] = restConfig.doraUrl + restConfig.endpoint
    }

    this.axios = axios.create(axiosConfig)
    this.axiosDoraV2 = axios.create({ baseURL: `${DORA_URL}/api/v2` })
  }

  async addressStats(
    address: string,
    network = 'mainnet'
  ): Promise<AddressStatsResponse> {
    const method = 'address_stats'
    return await this.get(network, method, address)
  }

  async asset(assetHash: string, network = 'mainnet'): Promise<AssetResponse> {
    const method = 'asset'
    return await this.get(network, method, assetHash)
  }

  async assets(page: number = 1, network = 'mainnet'): Promise<AssetsResponse> {
    const method = 'assets'
    return await this.get(network, method, page)
  }

  async balance(
    address: string,
    network = 'mainnet'
  ): Promise<BalanceResponse> {
    const method = 'balance'
    return await this.get(network, method, address)
  }

  async block(blockHash: string, network = 'mainnet'): Promise<BlockResponse> {
    const method = 'block'
    return await this.get(network, method, blockHash)
  }

  async blocks(page: number = 1, network = 'mainnet'): Promise<BlocksResponse> {
    const method = 'blocks'
    return await this.get(network, method, page)
  }

  async contract(
    contractHash: string,
    network = 'mainnet'
  ): Promise<ContractResponse> {
    const method = 'contract'
    return await this.get(network, method, contractHash)
  }

  async contracts(
    page: number,
    network = 'mainnet'
  ): Promise<ContractsResponse> {
    const method = 'contracts'
    return await this.get(network, method, page)
  }

  async contractStats(
    contractHash: string,
    network = 'mainnet'
    // eslint-disable-next-line @typescript-eslint/ban-types
  ): Promise<Object> {
    const method = 'contract_stats'
    return await this.get(network, method)
  }

  async contractTransfers(
    contractHash: string,
    page: number = 1,
    network = 'mainnet'
  ): Promise<ContractTransfersResponse> {
    const method = 'contract_transfers'
    return await this.get(network, method, contractHash, page)
  }

  async getAddressAbstracts(
    address: string,
    page = 1,
    network = 'mainnet'
  ): Promise<GetAddressAbstractsResponse> {
    const method = 'get_address_abstracts'
    return await this.get(network, method, address, page)
  }

  async getAllNodes(network = 'mainnet'): Promise<GetAllNodesResponse> {
    const method = 'get_all_nodes'
    return await this.get(network, method)
  }

  async getClaimable(
    address: string,
    network = 'mainnet'
  ): Promise<GetClaimableResponse> {
    const method = 'get_claimable'
    return await this.get(network, method, address)
  }

  async getUnclaimed(
    address: string,
    network = 'mainnet'
  ): Promise<GetUnclaimedResponse> {
    const method = 'get_unclaimed'
    return await this.get(network, method, address)
  }

  async height(network = 'mainnet'): Promise<HeightResponse> {
    const method = 'height'
    return await this.get(network, method)
  }

  async invocationStats(network = 'mainnet'): Promise<InvocationStatsResponse> {
    const method = 'invocation_stats'
    return await this.get(network, method)
  }

  async log(contractHash: string, network = 'mainnet'): Promise<LogResponse> {
    const method = 'log'
    return await this.get(network, method, contractHash)
  }

  async storage(
    blockHash: string,
    network = 'mainnet'
  ): Promise<StorageResponse> {
    const method = 'storage'
    return await this.get(network, method, blockHash)
  }

  async transaction(
    txid: string,
    network = 'mainnet'
  ): Promise<TransactionResponse> {
    const method = 'transaction'
    return await this.get(network, method, txid)
  }

  async transactions(
    page: number = 1,
    network = 'mainnet'
  ): Promise<TransactionsResponse> {
    const method = 'transactions'
    return await this.get(network, method, page)
  }

  async transactionAbstracts(
    txid: string,
    network = 'mainnet'
  ): Promise<TransactionAbstractsResponse> {
    const method = 'transaction_abstracts'
    return await this.get(network, method, txid)
  }

  async transferHistory(
    address: string,
    page: number = 1,
    network = 'mainnet'
  ): Promise<TransferHistoryResponse> {
    const method = 'transfer_history'
    return await this.get(network, method, address, page)
  }

  async getFullTransactionsByAddress(
    params: GetFullTransactionsByAddressParams
  ): Promise<GetFullTransactionsByAddressResponse> {
    const { data } = await this.axiosDoraV2.post<
      GetFullTransactionsByAddressResponse,
      AxiosResponse<GetFullTransactionsByAddressResponse>,
      AxiosGetFullTransactionsByAddressParams
    >('/unified/activity-history', {
      pageLimit: 30,
      ...params,
      protocol: 'neolegacy'
    })

    return data
  }

  async exportFullTransactionsByAddress(
    params: ExportFullTransactionsByAddressParams
  ): Promise<string> {
    const { data } = await this.axiosDoraV2.post<string>(
      '/unified/activity-history-csv',
      { ...params, protocol: 'neolegacy' }
    )

    return data
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private async get(...args: any[]) {
    const endpoint = args.join('/')
    const { data } = await this.axios.get(`/${endpoint}`)
    return data
  }
}

export const NeoLegacyREST = new NeoLegacyRESTApi()
