import type {
  AssetResponse,
  BalanceResponse,
  BlockResponse,
  BlocksResponse,
  ContractResponse,
  ContractsResponse,
  GetAllNodesResponse,
  HeightResponse,
  LogResponse,
  TransactionResponse,
  TransactionsResponse,
  TransferHistoryResponse
} from '../../interfaces/api/neo'
import { AXIOS_DORA } from '../../constants'

export class NeoRest {
  static axios = AXIOS_DORA('v3')

  static async asset(
    assetHash: string,
    network = 'mainnet'
  ): Promise<AssetResponse> {
    const method = 'asset'
    return await this.get(network, method, assetHash)
  }

  static async assets(page: number = 1, network = 'mainnet'): Promise<any> {
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
    blockHeight: number,
    network = 'mainnet'
  ): Promise<BlockResponse> {
    const method = 'block'
    return await this.get(network, method, blockHeight)
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

  static async contractStats(
    contractHash: string,
    network = 'mainnet'
  ): Promise<Object> {
    const method = 'contract_stats'
    return await this.get(network, method, contractHash)
  }

  static async getAllNodes(network = 'mainnet'): Promise<GetAllNodesResponse> {
    const method = 'get_all_nodes'
    return await this.get(network, method)
  }

  static async height(network = 'mainnet'): Promise<HeightResponse> {
    const method = 'height'
    return await this.get(network, method)
  }

  static async log(txid: string, network = 'mainnet'): Promise<LogResponse> {
    const method = 'log'
    return await this.get(network, method, txid)
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
