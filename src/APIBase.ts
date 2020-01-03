import Axios, { AxiosResponse } from 'axios'
import { ChastiKeyEndpoint, IChastiKeyConfig } from './ChastiKey'
import { FetchError } from './errors'

export class APIBase {
  protected readonly name: string
  protected readonly runningInNode = typeof self === 'undefined'
  protected readonly repo: string
  public config: IChastiKeyConfig

  private get version() {
    return (this.config.apiVersion as { [key: string]: string })[this.name]
  }

  constructor(config: IChastiKeyConfig) {
    this.config = config
  }

  /**
   * Builds the API URL with the specified version
   * @readonly
   * @type {string}
   * @memberof ChastiKey
   */
  public get baseURLBuilt(): string {
    return `${this.config.baseURL}/${this.repo}/${this.version}/`
  }

  /**
   * Builds a proper query from Array of parameters passed.
   *
   * From:
   * ```
   * { username: 'Emma', showdeleted: true }
   * ```
   *
   * To:
   * ```
   * ?username=Emma&showdeleted=1
   * ```
   * @protected
   * @param {Array<IChastiKeyQueryParam>} params
   * @returns
   * @memberof ChastiKey
   */

  protected paramsBuilder(params?: any) {
    var queryStr = ''

    Object.keys(params).forEach((key, i) => {
      const valueType = typeof params[key]
      var valueTransformed

      // Convert boolean to int
      if (valueType === 'boolean') valueTransformed = params[key] ? 1 : 0
      // Any other values assume as a string
      else valueTransformed = params[key]

      // Check to ensure its not undefined
      if (params[key] !== undefined) queryStr += i > 0 ? `&${key}=${valueTransformed}` : `?${key}=${valueTransformed}`
    })

    return queryStr
  }

  /**
   * **Request handling from `chastikey.js` `<->` `ChastiKey`**
   * @protected
   * @template T
   * @template I
   * @param {string} url - URL of the API Endpoint to request
   * @param {I} [params]
   * @returns
   * @memberof ChastiKey
   */
  protected async request<T, I = any>(endpoint: ChastiKeyEndpoint, params?: I | any) {
    try {
      // * Newer requests will require a ClientID and Secret from the ChastiKey App
      if (this.version === 'v0.5') {
        // Throw error if clientID and or clientSecret clientID are missing
        if (!this.config.clientID || !this.config.clientSecret) {
          throw new Error('This is a newer request that requires a clientID and clientSecret to retrieve data!')
        }

        // If running in the web the wrapper will need to use RapidAPI as a proxy thus requires an app key
        if (!this.config.rapidAPIKey) {
          throw new Error(
            'This will not work without setting a rapidAPIKey due to CORS configuration on the ChastiKey API.'
          )
        }

        // Base Headers
        var headers = {
          'content-type': 'application/json',
          accept: 'application/json',
          clientID: this.config.clientID,
          clientSecret: this.config.clientSecret
        }

        // When the config is not required to try direct queries to ChastiKey's API
        if (!this.config.useNoProxy) {
          // Switch the base of the request over to RapidAPI
          this.config.baseURL = `https://${this.config.rapidAPIHost}`
          // Set RapidAPI headers
          Object.assign(headers, {
            'x-rapidapi-host': this.config.rapidAPIHost,
            'x-rapidapi-key': this.config.rapidAPIKey
          })
        }

        // Make request to ChastiKey
        const response = (await Axios(`${this.baseURLBuilt}${endpoint}`, {
          method: 'POST',
          headers,
          data: params
        })) as AxiosResponse<T>
        // On Response from Server (non-404)
        return response.data
      }
      // * Legacy Requests use this one
      else {
        // Make request to ChastiKey
        const response = (await Axios.get(
          params !== undefined
            ? `${this.baseURLBuilt}${endpoint}${typeof params !== 'string' ? this.paramsBuilder(params) : params}`
            : `${this.baseURLBuilt}${endpoint}`
        )) as AxiosResponse<T>
        // On Response from Server (non-404)
        return response.data
      }
    } catch (error) {
      throw new FetchError(error.response ? error.response.status : 999, error.message)
    }
  }

  protected async requestDataExport<T>(endpoint: ChastiKeyEndpoint) {
    try {
      // Make request to ChastiKey
      const response = (await Axios.get(`${this.baseURLBuilt}${endpoint}`)) as AxiosResponse<Array<T>>
      // On Response from Server (non-404)
      return response.data
    } catch (error) {
      throw new FetchError(error.response ? error.response.status : 999, error.message)
    }
  }
}
