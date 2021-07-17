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
  HeightResponse,
  InvocationStatsResponse,
  LogResponse,
  StorageResponse,
  TransactionAbstractsResponse,
  TransactionResponse,
  TransactionsResponse,
  TransferHistoryResponse
} from '../../interfaces/api/neo_legacy'
import { AXIOS_DORA } from '../../constants'

export class NeoLegacyREST {
  static axios = AXIOS_DORA('v2')

  static async addressStats(
    address: string,
    network = 'mainnet'
  ): Promise<AddressStatsResponse> {
    const method = 'address_stats'
    return await this.get(network, method, address)
  }

  static async asset(
    assetHash: string,
    network = 'mainnet'
  ): Promise<AssetResponse> {
    const method = 'asset'
    return await this.get(network, method, assetHash)
  }

  static async assets(
    page: number = 1,
    network = 'mainnet'
  ): Promise<AssetsResponse> {
    const method = 'assets'
    return await this.get(network, method, page)
  }

  static async balance(
    address: string,
    network = 'mainnet'
  ): Promise<BalanceResponse> {
    const method = 'balance'
    return await this.get(network, method, address)
  }

  static async block(
    blockHash: string,
    network = 'mainnet'
  ): Promise<BlockResponse> {
    const method = 'block'
    return await this.get(network, method, blockHash)
  }

  static async blocks(
    page: number = 1,
    network = 'mainnet'
  ): Promise<BlocksResponse> {
    const method = 'blocks'
    return await this.get(network, method, page)
  }

  static async contract(
    contractHash: string,
    network = 'mainnet'
  ): Promise<ContractResponse> {
    const method = 'contract'
    return await this.get(network, method, contractHash)
  }

  static async contracts(
    page: number,
    network = 'mainnet'
  ): Promise<ContractsResponse> {
    const method = 'contracts'
    return await this.get(network, method, page)
  }

  static async contractTransfers(
    contractHash: string,
    page: number = 1,
    network = 'mainnet'
  ): Promise<ContractTransfersResponse> {
    const method = 'contract_transfers'
    return await this.get(network, method, contractHash, page)
  }

  static async getAddressAbstracts(
    address: string,
    page = 1,
    network = 'mainnet'
  ): Promise<GetAddressAbstractsResponse> {
    const method = 'get_address_abstracts'
    return await this.get(network, method, address, page)
  }

  static async getAllNodes(network = 'mainnet'): Promise<GetAllNodesResponse> {
    const method = 'get_all_nodes'
    return await this.get(network, method)
  }

  static async height(network = 'mainnet'): Promise<HeightResponse> {
    const method = 'height'
    return await this.get(network, method)
  }

  static async invocationStats(
    network = 'mainnet'
  ): Promise<InvocationStatsResponse> {
    const method = 'invocation_stats'
    return await this.get(network, method)
  }

  static async log(
    contractHash: string,
    network = 'mainnet'
  ): Promise<LogResponse> {
    const method = 'log'
    return await this.get(network, method, contractHash)
  }

  static async storage(
    blockHash: string,
    network = 'mainnet'
  ): Promise<StorageResponse> {
    const method = 'storage'
    return await this.get(network, method, blockHash)
  }

  static async transaction(
    txid: string,
    network = 'mainnet'
  ): Promise<TransactionResponse> {
    const method = 'transaction'
    return await this.get(network, method, txid)
  }

  static async transactions(
    page: number = 1,
    network = 'mainnet'
  ): Promise<TransactionsResponse> {
    const method = 'transactions'
    return await this.get(network, method, page)
  }

  static async transactionAbstracts(
    txid: string,
    network = 'mainnet'
  ): Promise<TransactionAbstractsResponse> {
    const method = 'transaction_abstracts'
    return await this.get(network, method, txid)
  }

  static async transferHistory(
    address: string,
    page: number = 1,
    network = 'mainnet'
  ): Promise<TransferHistoryResponse> {
    const method = 'transfer_history'
    return await this.get(network, method, address, page)
  }

  private static async get(...args: any[]) {
    const endpoint = args.join('/')
    const { data } = await this.axios.get(`/${endpoint}`)
    return data
  }
}
