import {
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
import { DORA_URL } from '../../constants'
import axios from 'axios'

export class NeoLegacyREST {
  static readonly DORA_ROOT = DORA_URL + '/api/v1/neo2'

  static async addressStats(
    address: string,
    network = 'mainnet'
  ): Promise<AddressStatsResponse> {
    const method = 'address_stats'
    const { data } = await axios.get(
      `${this.DORA_ROOT}/${network}/${method}/${address}`
    )
    return data
  }

  static async asset(
    assetHash: string,
    network = 'mainnet'
  ): Promise<AssetResponse> {
    const method = 'asset'
    const { data } = await axios.get(
      `${this.DORA_ROOT}/${network}/${method}/${assetHash}`
    )
    return data
  }

  static async assets(
    page: number = 1,
    network = 'mainnet'
  ): Promise<AssetsResponse> {
    const method = 'assets'
    const { data } = await axios.get(
      `${this.DORA_ROOT}/${network}/${method}/${page}`
    )
    return data
  }

  static async balance(
    address: string,
    network = 'mainnet'
  ): Promise<BalanceResponse> {
    const method = 'balance'
    const { data } = await axios.get(
      `${this.DORA_ROOT}/${network}/${method}/${address}`
    )
    return data
  }

  static async block(
    blockHash: string,
    network = 'mainnet'
  ): Promise<BlockResponse> {
    const method = 'block'
    const { data } = await axios.get(
      `${this.DORA_ROOT}/${network}/${method}/${blockHash}`
    )
    return data
  }

  static async blocks(
    page: number = 1,
    network = 'mainnet'
  ): Promise<BlocksResponse> {
    const method = 'blocks'
    const { data } = await axios.get(
      `${this.DORA_ROOT}/${network}/${method}/${page}`
    )
    return data
  }

  static async contract(
    contractHash: string,
    network = 'mainnet'
  ): Promise<ContractResponse> {
    const method = 'contract'
    const { data } = await axios.get(
      `${this.DORA_ROOT}/${network}/${method}/${contractHash}`
    )
    return data
  }

  static async contracts(
    page: number,
    network = 'mainnet'
  ): Promise<ContractsResponse> {
    const method = 'contracts'
    const { data } = await axios.get(
      `${this.DORA_ROOT}/${network}/${method}/${page}`
    )
    return data
  }

  static async contractTransfers(
    contractHash: string,
    page: number = 1,
    network = 'mainnet'
  ): Promise<ContractTransfersResponse> {
    const method = 'contract_transfers'
    const { data } = await axios.get(
      `${this.DORA_ROOT}/${network}/${method}/${contractHash}/${page}`
    )
    return data
  }

  static async getAddressAbstracts(
    address: string,
    page = 1,
    network = 'mainnet'
  ): Promise<GetAddressAbstractsResponse> {
    const method = 'get_address_abstracts'
    const { data } = await axios.get(
      `${this.DORA_ROOT}/${network}/${method}/${address}/${page}`
    )
    return data
  }

  static async getAllNodes(network = 'mainnet'): Promise<GetAllNodesResponse> {
    const method = 'get_all_nodes'
    const { data } = await axios.get(`${this.DORA_ROOT}/${network}/${method}`)
    return data
  }

  static async height(network = 'mainnet'): Promise<HeightResponse> {
    const method = 'height'
    const { data } = await axios.get(`${this.DORA_ROOT}/${network}/${method}`)
    return data
  }

  static async invocationStats(
    network = 'mainnet'
  ): Promise<InvocationStatsResponse> {
    const method = 'invocation_stats'
    const { data } = await axios.get(`${this.DORA_ROOT}/${network}/${method}`)
    return data
  }

  static async log(
    contractHash: string,
    network = 'mainnet'
  ): Promise<LogResponse> {
    const method = 'log'
    const { data } = await axios.get(
      `${this.DORA_ROOT}/${network}/${method}/${contractHash}`
    )
    return data
  }

  static async storage(
    blockHash: string,
    network = 'mainnet'
  ): Promise<StorageResponse> {
    const method = 'storage'
    const { data } = await axios.get(
      `${this.DORA_ROOT}/${network}/${method}/${blockHash}`
    )
    return data
  }

  static async transaction(
    txid: string,
    network = 'mainnet'
  ): Promise<TransactionResponse> {
    const method = 'transaction'
    const { data } = await axios.get(
      `${this.DORA_ROOT}/${network}/${method}/${txid}`
    )
    return data
  }

  static async transactions(
    page: number = 1,
    network = 'mainnet'
  ): Promise<TransactionsResponse> {
    const method = 'transactions'
    const { data } = await axios.get(
      `${this.DORA_ROOT}/${network}/${method}/${page}`
    )
    return data
  }

  static async transactionAbstracts(
    txid: string,
    network = 'mainnet'
  ): Promise<TransactionAbstractsResponse> {
    const method = 'transaction_abstracts'
    const { data } = await axios.get(
      `${this.DORA_ROOT}/${network}/${method}/${txid}`
    )
    return data
  }

  static async transferHistory(
    address: string,
    page: number = 1,
    network = 'mainnet'
  ): Promise<TransferHistoryResponse> {
    const method = 'transfer_history'
    const { data } = await axios.get(
      `${this.DORA_ROOT}/${network}/${method}/${address}/${page}`
    )
    return data
  }
}
