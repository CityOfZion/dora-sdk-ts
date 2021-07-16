import {
  AddressStatsResponse, AssetResponse,
  AssetsResponse,
  BalanceResponse,
  BlockResponse,
  BlocksResponse,
  ContractResponse,
  ContractsResponse,
  ContractTransfersResponse, GetAddressAbstractsResponse,
  GetAllNodesResponse,
  HeightResponse,
  InvocationStatsResponse,
  LogResponse,
  StorageResponse,
  TransactionAbstractsResponse,
  TransactionResponse,
  TransactionsResponse,
  TransferHistoryResponse
} from "../../interfaces/api/neo_legacy";
import {DORA_URL} from "../../constants";
import axios from "axios";

export class NeoLegacyREST {
  static readonly DORA_ROOT = DORA_URL + '/api/v1/neo2'

  static async addressStats(address: string, network = "mainnet"): Promise<AddressStatsResponse> {
    const method = "address_stats"
    console.log(`${this.DORA_ROOT}/${network}/${method}/${address}`)
    const res = await axios.get(`${this.DORA_ROOT}/${network}/${method}/${address}`)
    return res.data as AddressStatsResponse

  }

  static async asset(assetHash: string, network = "mainnet"): Promise<AssetResponse> {
    const method = "asset"
    const res = await axios.get(`${this.DORA_ROOT}/${network}/${method}/${assetHash}`)
    return res.data as AssetResponse
  }

  static async assets(page: number = 1, network = "mainnet"): Promise<AssetsResponse> {
    const method = "assets"
    const res = await axios.get(`${this.DORA_ROOT}/${network}/${method}/${page}`)
    return res.data as AssetsResponse
  }

  static async balance(address: string, network = "mainnet"): Promise<BalanceResponse> {
    const method = "balance"
    const res = await axios.get(`${this.DORA_ROOT}/${network}/${method}/${address}`)
    return res.data as BalanceResponse

  }

  static async block(blockHash: string, network = "mainnet"): Promise<BlockResponse> {
    const method = "block"
    const res = await axios.get(`${this.DORA_ROOT}/${network}/${method}/${blockHash}`)
    return res.data as BlockResponse

  }

  static async blocks(page: number = 1, network = "mainnet"): Promise<BlocksResponse> {
    const method = "blocks"
    const res = await axios.get(`${this.DORA_ROOT}/${network}/${method}/${page}`)
    return res.data as BlocksResponse
  }

  static async contract(contractHash: string, network = "mainnet"): Promise<ContractResponse> {
    const method = "contract"
    const res = await axios.get(`${this.DORA_ROOT}/${network}/${method}/${contractHash}`)
    return res.data as ContractResponse
  }

  static async contracts(page: number, network = "mainnet"): Promise<ContractsResponse> {
    const method = "contracts"
    const res = await axios.get(`${this.DORA_ROOT}/${network}/${method}/${page}`)
    return res.data as ContractsResponse
  }

  static async contractTransfers(contractHash: string, page: number = 1, network = "mainnet"): Promise<ContractTransfersResponse> {
    const method = "contract_transfers"
    const res = await axios.get(`${this.DORA_ROOT}/${network}/${method}/${contractHash}/${page}`)
    return res.data as ContractTransfersResponse
  }

  static async getAddressAbstracts(address: string, page = 1, network = "mainnet"): Promise<GetAddressAbstractsResponse> {
    const method = "get_address_abstracts"
    const res = await axios.get(`${this.DORA_ROOT}/${network}/${method}/${address}/${page}`)
    return res.data as GetAddressAbstractsResponse
  }

  static async getAllNodes(network = "mainnet"): Promise<GetAllNodesResponse> {
    const method = "get_all_nodes"
    const res = await axios.get(`${this.DORA_ROOT}/${network}/${method}`)
    return res.data as GetAllNodesResponse
  }

  static async height(network = "mainnet"): Promise<HeightResponse> {
    const method = "height"
    const res = await axios.get(`${this.DORA_ROOT}/${network}/${method}`)
    return res.data as HeightResponse
  }

  static async invocationStats(network = "mainnet"): Promise<InvocationStatsResponse> {
    const method = "invocation_stats"
    const res = await axios.get(`${this.DORA_ROOT}/${network}/${method}`)
    return res.data as InvocationStatsResponse
  }

  static async log(contractHash: string, network = "mainnet"): Promise<LogResponse> {
    const method = "log"
    const res = await axios.get(`${this.DORA_ROOT}/${network}/${method}/${contractHash}`)
    return res.data as LogResponse
  }

  static async storage(blockHash: string, network = "mainnet"): Promise<StorageResponse> {
    const method = "storage"
    const res = await axios.get(`${this.DORA_ROOT}/${network}/${method}/${blockHash}`)
    return res.data as StorageResponse
  }

  static async transaction(txid: string, network = "mainnet"): Promise<TransactionResponse> {
    const method = "transaction"
    const res = await axios.get(`${this.DORA_ROOT}/${network}/${method}/${txid}`)
    return res.data as TransactionResponse
  }

  static async transactions(page: number = 1, network = "mainnet"): Promise<TransactionsResponse> {
    const method = "transactions"
    const res = await axios.get(`${this.DORA_ROOT}/${network}/${method}/${page}`)
    return res.data as TransactionsResponse
  }

  static async transactionAbstracts(txid: string, network = "mainnet"): Promise<TransactionAbstractsResponse> {
    const method = "transaction_abstracts"
    const res = await axios.get(`${this.DORA_ROOT}/${network}/${method}/${txid}`)
    return res.data as TransactionAbstractsResponse
  }

  static async transferHistory(address: string, page: number = 1, network = "mainnet"): Promise<TransferHistoryResponse> {
    const method = "transfer_history"
    const res = await axios.get(`${this.DORA_ROOT}/${network}/${method}/${address}/${page}`)
    return res.data as TransferHistoryResponse
  }


}