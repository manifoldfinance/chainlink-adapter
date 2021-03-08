import { Requester } from '@chainlink/external-adapter'
import { Config } from '@chainlink/types'

export const DEFAULT_ENDPOINT = 'api'
export const DEFAULT_API_ENDPOINT = 'http://ercgas.org'

export const makeConfig = (prefix?: string): Config => {
  const config = Requester.getDefaultConfig(prefix, true)
  config.api = {
    ...config.api,
    baseURL: config.api.baseUrl || DEFAULT_API_ENDPOINT,
    params: {
      'api-key': config.apiKey,
    },
  }
  return config
}
