import { DORA_URL } from '../../constants'
import type { AxiosInstance, AxiosResponse } from 'axios'
import axios from 'axios'
import {
  AxiosGetFullTransactionsByAddressParams,
  ExportFullTransactionsByAddressParams,
  GetFullTransactionsByAddressParams
} from '../../interfaces/api/ethereum'
import { GetFullTransactionsByAddressResponse } from '../../interfaces/api/common'

export class EthereumRESTApi {
  private axiosDoraV2: AxiosInstance

  constructor() {
    this.axiosDoraV2 = axios.create({ baseURL: `${DORA_URL}/api/v2` })
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
      protocol: 'ethereum'
    })

    return data
  }

  async exportFullTransactionsByAddress(
    params: ExportFullTransactionsByAddressParams
  ): Promise<string> {
    const { data } = await this.axiosDoraV2.post<string>(
      '/unified/activity-history-csv',
      { ...params, protocol: 'ethereum' }
    )

    return data
  }
}

export const EthereumREST = new EthereumRESTApi()
