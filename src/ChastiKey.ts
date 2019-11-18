import { ListLocks } from './api/ListLocks'
import { Ticker } from './api/Ticker'

export type ChastiKeyEndpoint = 'combinations.php' | 'listlocks.php' | 'listlocks2.php'

/**
 * Options when constructing `ChastiKey`
 * @export
 * @interface IChastiKeyOptions
 */
export interface IChastiKeyOptions {
  baseURL?: string
  repo?: 'api' | 'json'
  apiVersion?: 'v0.2' | 'v0.3' | 'v0.4' | 'v1.0' | ''
}

/**
 * Parameters base for API calls
 * @export
 * @interface IChastiKeyParam
 */
export interface IChastiKeyParam {
  [key: string]: boolean | number | string
}

/**
 * Legacy response for current popular API version where response is in an Array
 * @export
 * @interface IChastiKeyLegacyResponse
 */
export interface IChastiKeyLegacyResponse {
  response: Array<{ status: 200 | 204 | 400; message: string; timestampGenerated: number }>
}

/**
 * ### ChastiKey API Wrapper
 * @export
 * @class ChastiKey
 */
export class ChastiKey {
  public config: IChastiKeyOptions = {
    baseURL: `https://chastikey.com`,
    repo: 'api',
    apiVersion: 'v0.3'
  }

  /**
   *Creates an instance of ChastiKey.
   * @param {IChastiKeyOptions} [options]
   * @memberof ChastiKey
   */
  constructor(options?: IChastiKeyOptions) {
    // Merge any optional props
    if (options) Object.assign(this.config, options)
  }

  /**
   * ListLocks queries
   * @memberof ChastiKey
   */
  public ListLocks = new ListLocks(this.config)

  /**
   * Ticker queries
   * @memberof ChastiKey
   */
  public Ticker = new Ticker(this.config)
}
