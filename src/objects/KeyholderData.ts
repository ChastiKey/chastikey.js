export class KeyholderDataResponse {
  public response = {
    /**
     * Response Information of API request
     */
    status: 0 as 0 | 200 | 204 | 400,
    message: '<pending request>' as string,
    timestampGenerated: 0 as number
  }

  /**
   * ChastiKey App user account data & stats
   * @type {KeyholderData}
   */
  public data: KeyholderData

  /**
   * ChastiKey App locks
   * @type {Array<KeyholderDataRunningLock>}
   */
  public locks: Array<KeyholderDataRunningLock> = []

  constructor(init?: Partial<KeyholderDataResponse>) {
    if (init) {
      Object.assign(this.response, init.response)

      this.data = new KeyholderData(init.locks ? init.data || {} : {})
      this.locks = init.hasOwnProperty('locks')
        ? (this.locks = init.locks.map(l => new KeyholderDataRunningLock(l)))
        : this.locks
    }
  }
}

export class KeyholderData {
  /**
   * ChastiKey Account User ID
   * @type {number}
   */
  public userID: number

  /**
   * ChastiKey Account Username
   * @type {string}
   */
  public username: string

  /**
   * Discord ID - If account has been verified
   * @type {string}
   */
  public discordID: string

  /**
   * Numerical status value for Stats Enabled/Disabled in the ChastiKey App
   * @type {number}
   */
  public displayInStats: number

  /**
   * TODO: Further Documentation Required - Upcoming feature/functionality?
   * @type {number}
   */
  public includeInAPI: number

  /**
   * Average rating score
   * @type {number}
   */
  public averageRating: number

  /**
   * ChastiKey App build number last used
   * @type {number}
   */
  public buildNumberInstalled: number

  /**
   * String date when first keyheld a lockee
   * @type {string}
   */
  public dateFirstKeyheld: string

  /**
   * Date Time of ChastiKey account creation
   * @type {string}
   */
  public joined: string

  /**
   * Keyholder Experience Level
   *
   * - `1` Novice
   * - `2` Keyholder
   * - `3` Established
   * - `4` Renowned
   * @type {(1 | 2 | 3 | 4)}
   */
  public keyholderLevel: number

  /**
   * ChastiKey App main role selected
   * @type {string}
   */
  public mainRole: string

  /**
   * Number of Lockees who loaded a lock and flagged keyholder as trusted
   * @type {number}
   */
  public noOfLocksFlaggedAsTrusted: number

  /**
   * Number of lockees currently active
   * @type {number}
   */
  public noOfLocksManagingNow: number

  /**
   * Number of lockees currently active in fixed locks
   * @type {number}
   */
  public noOfLocksManagingNowFixed: number

  /**
   * Number of lockees currently active in variable locks
   * @type {number}
   */
  public noOfLocksManagingNowVariable: number

  /**
   * Number of ratings from lockees in past locks
   * @type {number}
   */
  public noOfRatings: number

  /**
   * Number of Shared locks in the ChastiKey App
   * @type {number}
   */
  public noOfSharedLocks: number

  /**
   * Number of Shared locks in the ChastiKey App that are fixed locks
   * @type {number}
   */
  public noOfSharedLocksFixed: number

  /**
   * Number of Shared locks in the ChastiKey App that are variable locks
   * @type {number}
   */
  public noOfSharedLocksVariable: number

  /**
   * ChastiKey App status
   *
   * - `Available` When the app is open
   * - `Offline` When the app is closed
   * @type {('Available' | 'Offline')}
   */
  public status: string

  /**
   * Timestamp when first keyheld a lockee
   * @type {number}
   */
  public timestampFirstKeyheld: number

  /**
   * Timestamp of ChastiKey account creation
   * @type {number}
   */
  public timestampJoined: number

  /**
   * Timestamp last active in the ChastiKey App
   * @type {number}
   */
  public timestampLastActive: number

  /**
   * Number of completed locks of lockees in the past
   * @type {number}
   */
  public totalLocksManaged: number

  /**
   * ChastiKey App version last used
   * @type {string}
   */
  public versionInstalled: string

  constructor(init?: Partial<KeyholderData>) {
    Object.assign(this, init || {})
  }
}

export class KeyholderDataRunningLock {
  public lockName: string
  public sharedLockID: string
  public sharedLockQRCode: string
  public sharedLockURL: string
  public blockUsersAlreadyLocked: number
  public cardInfoHidden: number
  public cumulative: number
  public fixed: number
  public forceTrust: number
  public keyDisabled: number
  public maxDoubleUps: number
  public maxFreezes: number
  public maxGreens: number
  public maxMinutes: number
  public maxReds: number
  public maxResets: number
  public maxUsers: number
  public maxYellows: number
  public maxYellowsAdd: number
  public maxYellowsMinus: number
  public minDoubleUps: number
  public minFreezes: number
  public minGreens: number
  public minMinutes: number
  public minReds: number
  public minResets: number
  public minVersionRequired: string
  public minYellows: number
  public minYellowsAdd: number
  public minYellowsMinus: number
  public multipleGreensRequired: number
  public regularity: number
  public requireDM: number
  public simulationAverageMinutesLocked: number
  public simulationBestCaseMinutesLocked: number
  public simulationWorstCaseMinutesLocked: number
  public timerHidden: number

  constructor(init?: Partial<KeyholderDataRunningLock>) {
    Object.assign(this, init || {})
  }
}
