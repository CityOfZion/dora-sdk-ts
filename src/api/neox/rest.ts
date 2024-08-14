import type { RestConfig } from '../../interfaces'
import { DORA_URL } from '../../constants'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import axios from 'axios'
import type { Address } from '../../interfaces/api/neox'

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

  private async get(...args: unknown[]) {
    const endpoint = args.join('/')
    const { data } = await this.axios.get(`/${endpoint}`)
    return data
  }
}

export const NeoXREST = new NeoXRESTApi()
