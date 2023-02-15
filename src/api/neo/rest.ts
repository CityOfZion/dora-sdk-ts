import type {
  AddressTransactionsResponse,
  AddressTXFullResponse,
  AssetResponse,
  BalanceResponse,
  BlockResponse,
  BlocksResponse,
  ContractResponse,
  ContractsResponse,
  GetAddressAbstractsResponse,
  GetAllNodesResponse,
  HeightResponse,
  InvocationStatsResponse,
  LogResponse,
  TransactionResponse,
  TransactionsResponse,
  TransferHistoryResponse,
  VoterResponse
} from '../../interfaces/api/neo'
import type { RestConfig } from "../../interfaces";
import {DORA_URL} from '../../constants'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import axios from 'axios'

const DefaultRestConfig: RestConfig = {
  doraUrl: DORA_URL,
  endpoint: '/api/v1/neo3'
}


export class NeoRest {
  protected axios: AxiosInstance;
  public constructor(restConfig: RestConfig = DefaultRestConfig, axiosConfig?: AxiosRequestConfig) {
    if (typeof axiosConfig === 'undefined') {
      axiosConfig = { baseURL: restConfig.doraUrl + restConfig.endpoint };
    } else {
      axiosConfig["baseURL"] = restConfig.doraUrl + restConfig.endpoint;
    }
    this.axios = axios.create(axiosConfig)
  }

  async addressTransactions(
    address: string,
    page = 1,
    network = 'mainnet'
  ): Promise<AddressTransactionsResponse> {
    const method = 'address_transactions'
    return await this.get(network, method, address, page)
  }

  async addressTXFull(
    address: string,
    page = 1,
    network = 'mainnet'
  ): Promise<AddressTXFullResponse> {
    const method = 'address_txfull'
    return await this.get(network, method, address, page)
  }

  async asset(
    assetHash: string,
    network = 'mainnet'
  ): Promise<AssetResponse> {
    const method = 'asset'
    return await this.get(network, method, assetHash)
  }

  async assets(page: number = 1, network = 'mainnet'): Promise<any> {
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

  async block(
    blockHeight: number,
    network = 'mainnet'
  ): Promise<BlockResponse> {
    const method = 'block'
    return await this.get(network, method, blockHeight)
  }

  async blocks(
    page: number = 1,
    network = 'mainnet'
  ): Promise<BlocksResponse> {
    const method = 'blocks'
    return await this.get(network, method, page)
  }

  async committee(network = 'mainnet'): Promise<BalanceResponse> {
    const method = 'committee'
    return await this.get(network, method)
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
  ): Promise<Object> {
    const method = 'contract_stats'
    return await this.get(network, method, contractHash)
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

  async height(network = 'mainnet'): Promise<HeightResponse> {
    const method = 'height'
    return await this.get(network, method)
  }

  async invocationStats(
    network = 'mainnet'
  ): Promise<InvocationStatsResponse> {
    const method = 'invocation_stats'
    return await this.get(network, method)
  }

  async log(txid: string, network = 'mainnet'): Promise<LogResponse> {
    const method = 'log'
    return await this.get(network, method, txid)
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

  async transferHistory(
    address: string,
    page: number = 1,
    network = 'mainnet'
  ): Promise<TransferHistoryResponse> {
    const method = 'transfer_history'
    return await this.get(network, method, address, page)
  }

  async voter(
    address: string,
    network = 'mainnet'
  ): Promise<VoterResponse> {
    const method = 'voter'
    return await this.get(network, method, address)
  }

  private async get(...args: any[]) {
    const endpoint = args.join('/')
    const { data } = await this.axios.get(`/${endpoint}`)
    return data
  }
}
