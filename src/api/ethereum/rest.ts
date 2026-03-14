import { COZ_API_URL } from '../../constants'
import type { AxiosInstance, AxiosResponse } from 'axios'
import axios from 'axios'
import {
  AxiosActivityHistoryParams,
  ExportActivityHistoryParams,
  ActivityHistoryParams
} from '../../interfaces/api/ethereum'
import { ActivityHistoryResponse } from '../../interfaces/api/common'

export class EthereumRESTApi {
  private axiosApiV2: AxiosInstance

  constructor() {
    this.axiosApiV2 = axios.create({ baseURL: `${COZ_API_URL}/api/v2` })
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
      protocol: 'ethereum'
    })

    return data
  }

  async exportFullTransactionsByAddress(
    params: ExportActivityHistoryParams
  ): Promise<string> {
    const { data } = await this.axiosApiV2.post<string>(
      '/unified/activity-history-csv',
      { ...params, protocol: 'ethereum' }
    )

    return data
  }
}

export const EthereumREST = new EthereumRESTApi()
