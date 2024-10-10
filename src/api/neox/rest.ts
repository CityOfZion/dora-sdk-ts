import type { RestConfig } from '../../interfaces'
import { DORA_URL } from '../../constants'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import axios from 'axios'
import type {
  Address,
  Block,
  Blocks,
  Stats,
  Transaction
} from '../../interfaces/api/neox'

const DefaultNeoXRestConfig: RestConfig = {
  doraUrl: DORA_URL,
  endpoint: '/api/neox'
}

export class NeoXRESTApi {
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

  private async get(...args: unknown[]) {
    const endpoint = args.join('/')
    const { data } = await this.axios.get(`/${endpoint}`)
    return data
  }
}

export const NeoXREST = new NeoXRESTApi()
