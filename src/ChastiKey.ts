import { CheckLock } from './api/CheckLock'
import { CompletedLocks } from './api/CompletedLocks'
import { ListLocks } from './api/ListLocks'
import { Ticker } from './api/Ticker'

export type ChastiKeyEndpoint =
  // API
  | 'combinations.php'
  | 'checklock.php'
  | 'listlocks.php'
  | 'listlocks2.php'
  // Exports
  | 'completed_locks.json'

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
  public apiConfig: IChastiKeyOptions = {
    baseURL: `https://chastikey.com`,
    repo: 'api',
    apiVersion: 'v0.3'
  }

  public exportConfig: IChastiKeyOptions = {
    baseURL: `https://chastikey.com`,
    repo: 'json',
    apiVersion: 'v1.0'
  }

  /**
   *Creates an instance of ChastiKey.
   * @param {IChastiKeyOptions} [options]
   * @memberof ChastiKey
   */
  constructor(options?: IChastiKeyOptions, exportConfig?: IChastiKeyOptions) {
    // When the First param is passed
    if (options !== undefined) {
      if (options.repo === 'api') {
        // Merge any optional props
        if (options) Object.assign(this.apiConfig, options)
      }
      if (options.repo === 'json') {
        // Merge any optional props
        if (options) Object.assign(this.exportConfig, options)
      }
    }

    // When Second param is passed it's specifically for the export config
    if (exportConfig !== undefined) Object.assign(this.exportConfig, options)
  }

  // * ////////////////////////
  // * API Calls
  // * ////////////////////////

  /**
   * ListLocks queries
   * @memberof ChastiKey
   */
  public ListLocks = new ListLocks(this.apiConfig)

  /**
   * CheckLock queries
   * @memberof ChastiKey
   */
  public CheckLock = new CheckLock(this.apiConfig)

  /**
   * Ticker queries
   * @memberof ChastiKey
   */
  public Ticker = new Ticker(this.apiConfig)

  // * ////////////////////////
  // * Data Exports
  // * ////////////////////////

  /**
   * Ticker queries
   * @memberof ChastiKey
   */
  public CompletedLocks = new CompletedLocks(this.exportConfig)
}
