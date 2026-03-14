import { COZ_API_URL } from '../../constants'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'
import type {
  Address,
  Block,
  Blocks,
  Stats,
  Transaction,
  AxiosActivityHistoryParams,
  ActivityHistoryParams,
  ExportActivityHistoryParams
} from '../../interfaces/api/neox'
import { ActivityHistoryResponse } from '../../interfaces/api/common'
import { RestConfig } from '../../interfaces'

const defaultRestConfig: RestConfig = {
  url: COZ_API_URL,
  endpoint: '/api/neox'
}

export class NeoXRESTApi {
  private axiosApiV2: AxiosInstance

  protected axios: AxiosInstance

  public constructor(
    restConfig: RestConfig = defaultRestConfig,
    axiosConfig?: AxiosRequestConfig
  ) {
    const baseURL = `${restConfig.url}${restConfig.endpoint}`

    if (axiosConfig === undefined) {
      axiosConfig = { baseURL }
    } else {
      axiosConfig['baseURL'] = baseURL
    }

    this.axios = axios.create(axiosConfig)
    this.axiosApiV2 = axios.create({ baseURL: `${COZ_API_URL}/api/v2` })
  }

  async getAddress(addressHash: string, network = 'mainnet'): Promise<Address> {
    return await this.get(network, 'addresses', addressHash)
  }

  async getBlock(
    blockNumberOrHash: string,
    network = 'mainnet'
  ): Promise<Block> {
    return await this.get(network, 'blocks', blockNumberOrHash)
  }

  async getBlocks(network = 'mainnet'): Promise<Blocks> {
    return await this.get(network, 'blocks')
  }

  async getStats(network = 'mainnet'): Promise<Stats> {
    return await this.get(network, 'stats')
  }

  async getTokens(network = 'mainnet') {
    return await this.get(network, 'tokens')
  }

  async getTransaction(
    transactionHash: string,
    network = 'mainnet'
  ): Promise<Transaction> {
    return await this.get(network, 'transactions', transactionHash)
  }

  async getFullTransactionsByAddress(
    params: ActivityHistoryParams
  ): Promise<ActivityHistoryResponse> {
    const { data } = await this.axiosApiV2.post<
      ActivityHistoryResponse,
      AxiosResponse<ActivityHistoryResponse>,
      AxiosActivityHistoryParams
    >('/unified/activity-history', {
      pageLimit: 50,
      ...params,
      protocol: 'neox'
    })

    return data
  }

  async exportFullTransactionsByAddress(
    params: ExportActivityHistoryParams
  ): Promise<string> {
    const { data } = await this.axiosApiV2.post<string>(
      '/unified/activity-history-csv',
      { ...params, protocol: 'neox' }
    )

    return data
  }

  private async get(...args: unknown[]) {
    const endpoint = args.join('/')
    const { data } = await this.axios.get(`/${endpoint}`)
    return data
  }
}

export const NeoXREST = new NeoXRESTApi()
