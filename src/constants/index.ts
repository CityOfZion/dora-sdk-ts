import type { AxiosInstance } from 'axios'
import axios from 'axios'

export const DORA_URL = 'https://dora.coz.io'

export const AXIOS_DORA = (version: string): AxiosInstance => {
  let endpoint: string = ''

  if (version === 'neoLegacy') {
    endpoint = '/api/v1/neo2'
  } else if (version === 'neo') {
    endpoint = '/api/v1/neo3'
  }

  return axios.create({
    baseURL: DORA_URL + endpoint
  })
}
