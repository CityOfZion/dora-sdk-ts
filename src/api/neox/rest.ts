import type { RestConfig } from '../../interfaces'
import { DORA_URL } from '../../constants'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'
import type {
  Address,
  Block,
  Blocks,
  Stats,
  Transaction,
  AxiosGetFullTransactionsByAddressParams,
  GetFullTransactionsByAddressParams
} from '../../interfaces/api/neox'
import { GetFullTransactionsByAddressResponse } from '../../interfaces/api/common'

const DefaultNeoXRestConfig: RestConfig = {
  doraUrl: DORA_URL,
  endpoint: '/api/neox'
}

export class NeoXRESTApi {
  private axiosDoraV2: AxiosInstance

  protected axios: AxiosInstance

  public constructor(
    restConfig: RestConfig = DefaultNeoXRestConfig,
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
    params: GetFullTransactionsByAddressParams
  ): Promise<GetFullTransactionsByAddressResponse> {
    const { data } = await this.axiosDoraV2.post<
      GetFullTransactionsByAddressResponse,
      AxiosResponse<GetFullTransactionsByAddressResponse>,
      AxiosGetFullTransactionsByAddressParams
    >('/unified/activity-history', {
      pageLimit: 50,
      ...params,
      protocol: 'neox'
    })

    return data
  }

  private async get(...args: unknown[]) {
    const endpoint = args.join('/')
    const { data } = await this.axios.get(`/${endpoint}`)
    return data
  }
}

export const NeoXREST = new NeoXRESTApi()
