import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import axios from 'axios'

export const DORA_URL = 'https://dora.coz.io'

export const AXIOS_DORA = (version: string, config?: AxiosRequestConfig): AxiosInstance => {
  let endpoint: string = ''

  if (version === 'neoLegacy') {
    endpoint = '/api/v1/neo2'
  } else if (version === 'neo') {
    endpoint = '/api/v1/neo3'
  }

  if (typeof config === 'undefined') {
    config = { baseURL: DORA_URL + endpoint};
  } else {
    config["baseURL"] = DORA_URL + endpoint;
  }

  return axios.create(config);
}
