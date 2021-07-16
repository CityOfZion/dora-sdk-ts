import {DORA_URL} from "../../constants";
import axios from "axios";
import {
  AssetResponse,
  BalanceResponse,
  BlockResponse,
  BlocksResponse,
  ContractResponse,
  ContractsResponse,
  GetAllNodesResponse, HeightResponse,
  LogResponse,
  TransactionResponse,
  TransactionsResponse, TransferHistoryResponse
} from "../../interfaces/api/neo";

export class NeoRest {
  static readonly DORA_ROOT = DORA_URL + '/api/v1/neo3'

  static async asset(assetHash: string, network = "mainnet"): Promise<AssetResponse> {
    const method = "asset"
    const res = await axios.get(`${this.DORA_ROOT}/${network}/${method}/${assetHash}`)
    return res.data
  }

  static async assets(page: number = 1, network = "mainnet"): Promise<any> {
    const method = "assets"
    const res = await axios.get(`${this.DORA_ROOT}/${network}/${method}/${page}`)
    return res.data
  }

  static async balance(address: string, network = "mainnet"): Promise<BalanceResponse> {
    const method = "balance"
    const res = await axios.get(`${this.DORA_ROOT}/${network}/${method}/${address}`)
    return res.data
  }

  static async block(blockHeight: number, network = "mainnet"): Promise<BlockResponse> {
    const method = "block"
    const res = await axios.get(`${this.DORA_ROOT}/${network}/${method}/${blockHeight}`)
    return res.data

  }

  static async blocks(page: number = 1, network = "mainnet"): Promise<BlocksResponse> {
    const method = "blocks"
    const res = await axios.get(`${this.DORA_ROOT}/${network}/${method}/${page}`)
    return res.data
  }

  static async contract(contractHash: string, network = "mainnet"): Promise<ContractResponse> {
    const method = "contract"
    const res = await axios.get(`${this.DORA_ROOT}/${network}/${method}/${contractHash}`)
    return res.data
  }

  static async contracts(page: number, network = "mainnet"): Promise<ContractsResponse> {
    const method = "contracts"
    const res = await axios.get(`${this.DORA_ROOT}/${network}/${method}/${page}`)
    return res.data
  }

  static async contractStats(contractHash: string, network = "mainnet"): Promise<Object> {
    const method = "contract_stats"
    const res = await axios.get(`${this.DORA_ROOT}/${network}/${method}/${contractHash}`)
    return res.data
  }

  static async getAllNodes(network = "mainnet"): Promise<GetAllNodesResponse> {
    const method = "get_all_nodes"
    const res = await axios.get(`${this.DORA_ROOT}/${network}/${method}`)
    return res.data
  }

  static async height(network = "mainnet"): Promise<HeightResponse> {
    const method = "height"
    const res = await axios.get(`${this.DORA_ROOT}/${network}/${method}`)
    return res.data
  }

  static async log(txid: string, network = "mainnet"): Promise<LogResponse> {
    const method = "log"
    const res = await axios.get(`${this.DORA_ROOT}/${network}/${method}/${txid}`)
    return res.data
  }

  static async transaction(txid: string, network = "mainnet"): Promise<TransactionResponse> {
    const method = "transaction"
    const res = await axios.get(`${this.DORA_ROOT}/${network}/${method}/${txid}`)
    return res.data
  }

  static async transactions(page: number = 1, network = "mainnet"): Promise<TransactionsResponse> {
    const method = "transactions"
    const res = await axios.get(`${this.DORA_ROOT}/${network}/${method}/${page}`)
    return res.data
  }

  static async transferHistory(address: string, page: number = 1, network = "mainnet"): Promise<TransferHistoryResponse> {
    const method = "transfer_history"
    const res = await axios.get(`${this.DORA_ROOT}/${network}/${method}/${address}/${page}`)
    return res.data
  }
}