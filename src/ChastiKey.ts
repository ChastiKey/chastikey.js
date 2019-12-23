import { CheckLock } from './api/CheckLock'
import { CompletedLocks } from './api/CompletedLocks'
import { ListLocks } from './api/ListLocks'
import { Ticker } from './api/Ticker'
import { DateFirstKeyheld } from './api/DateFirstKeyheld'
import { KeyholderTotalLocksManaged } from './api/KeyholderTotalLocksManaged'
import { RunningLocks } from './api/RunningLocks'
import { LockeeData } from './api/LockeeData'
import { Combinations } from './api/Combinations'
import { KeyholderData } from './api/KeyholderData'

export type ChastiKeyEndpoint =
  // API
  | 'combinations.php' // <= v0.5
  | 'checklock.php' // <= v0.4
  | 'listlocks2.php' // <= v0.4
  | 'lockeedata.php' // = v0.5
  | 'keyholderdata.php' // = v0.5
  // Exports
  | 'completed_locks.json'
  | 'date_first_keyheld.json'
  | 'keyholders_total_locks_managed.json'
  | 'running_locks.json'

/**
 * Options when constructing `ChastiKey`
 * @export
 * @interface IChastiKeyConfig
 */
export interface IChastiKeyConfig {
  baseURL?: string
  // For newer API calls - Setting these here will just copy down to .api and .export during init
  clientID?: string
  clientSecret?: string
  // For web calls - Proxy service
  rapidAPIHost?: string
  rapidAPIKey?: string
  useRapidAPIProxy?: boolean
  useNoProxy?: boolean
  // Version overrides
  apiVersion?: {
    CheckLock?: string
    Combinations?: string
    KeyholderData?: string
    ListLocks?: string
    LockeeData?: string
    CompletedLocks?: string
    DateFirstKeyheld?: string
    KeyholderTotalLocksManaged?: string
    RunningLocks?: string
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
    clientID: undefined,
    clientSecret: undefined,
    baseURL: 'https://chastikey.com',
    rapidAPIHost: 'chastikey.p.rapidapi.com',
    rapidAPIKey: undefined,
    useRapidAPIProxy: false,
    useNoProxy: false,

    apiVersion: {
      // API
      CheckLock: 'v0.4',
      Combinations: 'v0.5',
      KeyholderData: 'v0.5',
      ListLocks: 'v0.4',
      LockeeData: 'v0.5',
      // Exports
      CompletedLocks: 'v1.0',
      DateFirstKeyheld: 'v1.0',
      KeyholderTotalLocksManaged: 'v1.0',
      RunningLocks: 'v1.0'
    }
  }

  // * ////////////////////////
  // * API Calls
  // * ////////////////////////

  /**
   * CheckLock queries
   * @memberof ChastiKey
   */
  public CheckLock = new CheckLock(this.apiConfig)

  /**
   * Combinations queries
   * @memberof ChastiKey
   */
  public Combinations = new Combinations(this.apiConfig)

  /**
   * KeyholderData queries
   * @memberof ChastiKey
   */
  public KeyholderData = new KeyholderData(this.apiConfig)

  /**
   * ListLocks queries
   * @memberof ChastiKey
   */
  public ListLocks = new ListLocks(this.apiConfig)

  /**
   * LockeeData queries
   * @memberof ChastiKey
   */
  public LockeeData = new LockeeData(this.apiConfig)

  /**
   * Ticker queries
   * @memberof ChastiKey
   */
  public Ticker = new Ticker(this.apiConfig)

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
  public CompletedLocks = new CompletedLocks(this.apiConfig)

  /**
   * **Cached Date First keyheld for all public keyholders**
   *
   * - Cached: `15 Minutes`
   * @memberof ChastiKey
   */
  public DateFirstKeyheld = new DateFirstKeyheld(this.apiConfig)

  /**
   * **Retrieves the current data export JSON for Keyholder total locks managed counts.**
   *
   * - Cached: `15 Minutes`
   * @memberof ChastiKey
   */
  public KeyholderTotalLocksManaged = new KeyholderTotalLocksManaged(this.apiConfig)

  /**
   * **Retrieves the current data export JSON for Running Locks**
   *
   * - Cached: `15 Minutes`
   * @memberof ChastiKey
   */
  public RunningLocks = new RunningLocks(this.apiConfig)

  /**
   *Creates an instance of ChastiKey.
   * @param {IChastiKeyConfig} [options]
   * @memberof ChastiKey
   */
  constructor(overrides?: IChastiKeyConfig) {
    if (typeof overrides === 'object') {
      Object.assign(this.apiConfig, overrides)
      // If any version overrides set
      if (overrides.hasOwnProperty('apiVersion')) Object.assign(this.apiConfig.apiVersion, overrides.apiVersion)
    }
  }
}

export default ChastiKey
