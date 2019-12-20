import Axios, { AxiosResponse } from 'axios'
import * as FormData from 'form-data'
import { ChastiKeyEndpoint, IChastiKeyRequestConfig } from './ChastiKey'
import { FetchError } from './errors'

export class APIBase {
  public config: IChastiKeyRequestConfig

  constructor(config: IChastiKeyRequestConfig) {
    this.config = config
  }

  /**
   * Builds the API URL with the specified version
   * @readonly
   * @type {string}
   * @memberof ChastiKey
   */
  public get baseURLBuilt(): string {
    return `${this.config.baseURL}/${this.config.repo}/${this.config.apiVersion}/`
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
  protected async request<T, I>(endpoint: ChastiKeyEndpoint, params?: I | any) {
    try {
      // * Newer requests will require a ClientID and Secret from the ChastiKey App
      if (this.config.apiVersion === 'v0.5') {
        // Build Multipart form data used by newer API version(s)
        const formData = new FormData()
        Object.keys(params).forEach(key => formData.append(key, params[key]))
        // Prep headers
        const headers = Object.assign(
          {
            clientID: this.config.clientID,
            clientSecret: this.config.clientSecret
          },
          formData.getHeaders()
        )
        // Make request to ChastiKey
        const response = (await Axios.post(`${this.baseURLBuilt}${endpoint}`, formData, {
          headers
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
