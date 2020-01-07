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
import { UserData } from './api/UserData'
import { SimulationData } from './api/SimulationData'
import { LogData } from './api/LogData'

export type ChastiKeyEndpoint =
  // Legacy API
  | 'listlocks2.php' // <= v0.4
  | 'checklock.php' // <= v0.4
  // Newer API
  | 'combinations.php' // <= v0.5
  | 'lockeedata.php' // = v0.5
  | 'logdata.php' // = v0.5
  | 'keyholderdata.php' // = v0.5
  | 'simulationdata.php' // = v0.5
  // Legacy Exports
  | 'completed_locks.json' // = v1.0
  | 'date_first_keyheld.json' //  v1.0
  | 'keyholders_total_locks_managed.json' //  v1.0
  // Newer Exports
  | 'runninglocks.php' // = v0.5
  | 'userdata.php' // = v0.5

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
    LogData?: string
    CompletedLocks?: string
    DateFirstKeyheld?: string
    KeyholderTotalLocksManaged?: string
    RunningLocks?: string
    SimulationData?: string
    UserData?: string
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
      LogData: 'v0.5',
      RunningLocks: 'v0.5',
      SimulationData: 'v0.5',
      UserData: 'v0.5',
      // Exports (Below, These are Legacy and under an older endpoint)
      CompletedLocks: 'v1.0',
      DateFirstKeyheld: 'v1.0',
      KeyholderTotalLocksManaged: 'v1.0'
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
   * LogData queries
   * @memberof ChastiKey
   */
  public LogData = new LogData(this.apiConfig)

  /**
   * Retrieves the current data export JSON for Running Locks
   *
   * - Cached: `15 Minutes`
   * @memberof ChastiKey
   */
  public RunningLocks = new RunningLocks(this.apiConfig)

  /**
   * Locks shared that fall within the specified simulated Min/Max times
   * @memberof ChastiKey
   */
  public SimulationData = new SimulationData(this.apiConfig)

  /**
   * Ticker queries
   * @memberof ChastiKey
   */
  public Ticker = new Ticker(this.apiConfig)

  /**
   * Retrieves the current data export JSON for public user/stats data
   *
   * - Cached: `15 Minutes`
   * @memberof ChastiKey
   */
  public UserData = new UserData(this.apiConfig)

  // * ////////////////////////
  // * Data Exports
  // * ////////////////////////

  /**
   * Cached Completed Locks
   *
   * - Cached: `15 Minutes`
   * - Requirement: `ActiveInApp <= 2 weeks`
   * @memberof ChastiKey
   */
  public CompletedLocks = new CompletedLocks(this.apiConfig)

  /**
   * Cached Date First keyheld for all public keyholders
   *
   * - Cached: `15 Minutes`
   * @memberof ChastiKey
   */
  public DateFirstKeyheld = new DateFirstKeyheld(this.apiConfig)

  /**
   * Retrieves the current data export JSON for Keyholder total locks managed counts.
   *
   * - Cached: `15 Minutes`
   * @memberof ChastiKey
   */
  public KeyholderTotalLocksManaged = new KeyholderTotalLocksManaged(this.apiConfig)

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
