import { CheckLock } from './api/CheckLock'
import { CompletedLocks } from './api/CompletedLocks'
import { ListLocks } from './api/ListLocks'
import { Ticker } from './api/Ticker'
import { DateFirstKeyheld } from './api/DateFirstKeyheld'
import { KeyholderTotalLocksManaged } from './api/KeyholderTotalLocksManaged'
import { RunningLocks } from './api/RunningLocks'
import { LockeeData } from './api/LockeeData'
import { Combinations } from './api/Combinations'

export type ChastiKeyEndpoint =
  // API
  | 'combinations.php' // <= v0.5
  | 'checklock.php' // <= v0.4
  | 'listlocks.php' // <= v0.4
  | 'listlocks2.php' // <= v0.4
  | 'lockeedata.php' // = v0.5
  // Exports
  | 'completed_locks.json'
  | 'date_first_keyheld.json'
  | 'keyholders_total_locks_managed.json'
  | 'running_locks.json'

export interface IChastiKeyRequestConfig {
  baseURL?: string
  repo?: 'api' | 'json'
  apiVersion?: 'v0.2' | 'v0.3' | 'v0.4' | 'v0.5' | 'v1.0' | ''
  clientID?: string
  clientSecret?: string
}

/**
 * Options when constructing `ChastiKey`
 * @export
 * @interface IChastiKeyConfig
 */
export interface IChastiKeyConfig {
  api?: IChastiKeyRequestConfig
  export?: IChastiKeyRequestConfig

  // * This is for fallback commands where the newer API no longer supports these calls
  legacy?: {
    api?: IChastiKeyRequestConfig
    export?: IChastiKeyRequestConfig
  }
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
  public apiConfig: IChastiKeyConfig = {
    api: {
      baseURL: 'https://chastikey.com',
      repo: 'api',
      apiVersion: 'v0.5'
    },
    export: {
      baseURL: 'https://chastikey.com',
      repo: 'json',
      apiVersion: 'v1.0'
    },
    legacy: {
      api: {
        baseURL: 'https://chastikey.com',
        repo: 'api',
        apiVersion: 'v0.4'
      },
      export: {
        baseURL: 'https://chastikey.com',
        repo: 'json',
        apiVersion: 'v1.0'
      }
    }
  }

  // * ////////////////////////
  // * API Calls
  // * ////////////////////////

  /**
   * CheckLock queries
   * @memberof ChastiKey
   */
  public CheckLock = new CheckLock(this.apiConfig.legacy.api)

  /**
   * Combinations queries
   * @memberof ChastiKey
   */
  public Combinations = new Combinations(this.apiConfig.api)

  /**
   * ListLocks queries
   * @memberof ChastiKey
   */
  public ListLocks = new ListLocks(this.apiConfig.legacy.api)

  /**
   * Ticker queries
   * @memberof ChastiKey
   */
  public Ticker = new Ticker(this.apiConfig.legacy.api)

  /**
   * LockeeData queries
   * @memberof ChastiKey
   */
  public LockeeData = new LockeeData(this.apiConfig.api)

  // * ////////////////////////
  // * Data Exports
  // * ////////////////////////

  /**
   * **Cached Completed Locks**
   *
   * - Cached: `15 Minutes`
   * - Requirement: `ActiveInApp <= 2 weeks`
   * @memberof ChastiKey
   */
  public CompletedLocks = new CompletedLocks(this.apiConfig.legacy.export)

  /**
   * **Cached Date First keyheld for all public keyholders**
   *
   * - Cached: `15 Minutes`
   * @memberof ChastiKey
   */
  public DateFirstKeyheld = new DateFirstKeyheld(this.apiConfig.legacy.export)

  /**
   * **Retrieves the current data export JSON for Keyholder total locks managed counts.**
   *
   * - Cached: `15 Minutes`
   * @memberof ChastiKey
   */
  public KeyholderTotalLocksManaged = new KeyholderTotalLocksManaged(this.apiConfig.legacy.export)

  /**
   * **Retrieves the current data export JSON for Running Locks**
   *
   * - Cached: `15 Minutes`
   * @memberof ChastiKey
   */
  public RunningLocks = new RunningLocks(this.apiConfig.legacy.export)

  /**
   *Creates an instance of ChastiKey.
   * @param {IChastiKeyConfig} [options]
   * @memberof ChastiKey
   */
  constructor(overrides?: IChastiKeyConfig) {
    if (overrides) {
      // Legacy Config Overrides
      if (overrides.hasOwnProperty('legacy')) {
        if (overrides.legacy.hasOwnProperty('api')) Object.assign(this.apiConfig.legacy.api, overrides.legacy.api)
        if (overrides.legacy.hasOwnProperty('export')) Object.assign(this.apiConfig.legacy.api, overrides.legacy.api)
      }
      // Current Config Overrides
      if (overrides.hasOwnProperty('api')) Object.assign(this.apiConfig.api, overrides.api)
      if (overrides.hasOwnProperty('export')) Object.assign(this.apiConfig.export, overrides.export)
    }
  }
}

export default ChastiKey
