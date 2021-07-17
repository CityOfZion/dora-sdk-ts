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
    const { data } = await this.axios.get(`/${network}/${method}/${assetHash}`)
    return data
  }

  static async assets(page: number = 1, network = 'mainnet'): Promise<any> {
    const method = 'assets'
    const { data } = await this.axios.get(`/${network}/${method}/${page}`)
    return data
  }

  static async balance(
    address: string,
    network = 'mainnet'
  ): Promise<BalanceResponse> {
    const method = 'balance'
    const { data } = await this.axios.get(`/${network}/${method}/${address}`)
    return data
  }

  static async block(
    blockHeight: number,
    network = 'mainnet'
  ): Promise<BlockResponse> {
    const method = 'block'
    const { data } = await this.axios.get(
      `/${network}/${method}/${blockHeight}`
    )
    return data
  }

  static async blocks(
    page: number = 1,
    network = 'mainnet'
  ): Promise<BlocksResponse> {
    const method = 'blocks'
    const { data } = await this.axios.get(`/${network}/${method}/${page}`)
    return data
  }

  static async contract(
    contractHash: string,
    network = 'mainnet'
  ): Promise<ContractResponse> {
    const method = 'contract'
    const { data } = await this.axios.get(
      `/${network}/${method}/${contractHash}`
    )
    return data
  }

  static async contracts(
    page: number,
    network = 'mainnet'
  ): Promise<ContractsResponse> {
    const method = 'contracts'
    const { data } = await this.axios.get(`/${network}/${method}/${page}`)
    return data
  }

  static async contractStats(
    contractHash: string,
    network = 'mainnet'
  ): Promise<Object> {
    const method = 'contract_stats'
    const { data } = await this.axios.get(
      `/${network}/${method}/${contractHash}`
    )
    return data
  }

  static async getAllNodes(network = 'mainnet'): Promise<GetAllNodesResponse> {
    const method = 'get_all_nodes'
    const { data } = await this.axios.get(`/${network}/${method}`)
    return data
  }

  static async height(network = 'mainnet'): Promise<HeightResponse> {
    const method = 'height'
    const { data } = await this.axios.get(`/${network}/${method}`)
    return data
  }

  static async log(txid: string, network = 'mainnet'): Promise<LogResponse> {
    const method = 'log'
    const { data } = await this.axios.get(`/${network}/${method}/${txid}`)
    return data
  }

  static async transaction(
    txid: string,
    network = 'mainnet'
  ): Promise<TransactionResponse> {
    const method = 'transaction'
    const { data } = await this.axios.get(`/${network}/${method}/${txid}`)
    return data
  }

  static async transactions(
    page: number = 1,
    network = 'mainnet'
  ): Promise<TransactionsResponse> {
    const method = 'transactions'
    const { data } = await this.axios.get(`/${network}/${method}/${page}`)
    return data
  }

  static async transferHistory(
    address: string,
    page: number = 1,
    network = 'mainnet'
  ): Promise<TransferHistoryResponse> {
    const method = 'transfer_history'
    const { data } = await this.axios.get(
      `/${network}/${method}/${address}/${page}`
    )
    return data
  }
}
