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
   * @type {Array<KeyholderDataLock>}
   */
  public locks: Array<KeyholderDataLock> = []

  constructor(init?: Partial<KeyholderDataResponse>) {
    if (init) {
      Object.assign(this.response, init.response || {})

      this.data = new KeyholderData(init.locks ? init.data || {} : {})
      this.locks = init.hasOwnProperty('locks')
        ? (this.locks = init.locks.map(l => new KeyholderDataLock(l)))
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

  // ----------------------------

  public get isVerified(): boolean {
    return this.discordID ? true : false
  }

  constructor(init?: Partial<KeyholderData>) {
    Object.assign(this, init || {})
  }
}

export class KeyholderDataLock {
  /**
   * ChastiKey lock ID
   * @type {number}
   */
  public lockID: number

  /**
   * Shared ID of the Lock
   *
   * **Note:** This will show `<hidden>` if the Keyholder has not marked the lock public to the API
   * @type {string}
   */
  public sharedLockID: string

  /**
   * QR Code data
   *
   * **Note:** This will show `<hidden>` if the Keyholder has not marked the lock public to the API
   * @type {string}
   */
  public sharedLockQRCode: string

  /**
   * Shared URL for viewing/loading the lock
   *
   * **Note:** This will show `<hidden>` if the Keyholder has not marked the lock public to the API
   * @type {string}
   */
  public sharedLockURL: string

  /**
   * Numerical value for if users can be in other locks when loading this lock
   * @type {number}
   */
  public blockUsersAlreadyLocked: number

  /**
   * Numerical status value for if Card info is hidden by the Keyholder
   *
   * **Tip:** See `isCardInfoHidden` for the computed boolean version of this value
   * @type {number}
   */
  public cardInfoHidden: number

  /**
   * Numerical value for cumulative lock type
   *
   * **Tip:** See `isCumulative` for the computed boolean version of this value
   * @type {number}
   */
  public cumulative: number

  /**
   * Numerical value for fixed lock type
   *
   * **Tip:** See `isFixed` for the computed boolean version of this value
   * @type {number}
   */
  public fixed: number

  /**
   * Numerical value for trust requirement forced
   *
   * **Tip:** See `isForceTrust` for the computed boolean version of this value
   * @type {number}
   */
  public forceTrust: number

  /**
   * Numerical value if keys are disabled
   *
   * **Tip:** See `isKeysDisabled` for the computed boolean version of this value
   * @type {number}
   */
  public keyDisabled: number

  /**
   * Array of lockees currently locked
   * @type {Array<KeyholderDataLockLockee>}
   */
  public lockees: Array<KeyholderDataLockLockee> = []

  /**
   * `Variable Lock Only` Maximum Double up Cards
   * @type {number}
   */
  public maxDoubleUps: number

  /**
   * `Variable Lock Only` Maximum Freeze Cards
   * @type {number}
   */
  public maxFreezes: number

  /**
   * `Variable Lock Only` Maximum Green Cards
   * @type {number}
   */
  public maxGreens: number

  /**
   * `Fixed Lock Only` Maximum Minutes
   * @type {number}
   */
  public maxMinutes: number

  /**
   * `Variable Lock Only` Maximum Red Cards
   * @type {number}
   */
  public maxReds: number

  /**
   * `Variable Lock Only` Maximum Reset Cards
   * @type {number}
   */
  public maxResets: number

  /**
   * Maximum Number of Users
   * @type {number}
   */
  public maxUsers: number

  /**
   * `Variable Lock Only` Maximum Yellow Cards
   * @type {number}
   */
  public maxYellows: number

  /**
   * `Variable Lock Only` Maximum Yellow Add Cards
   * @type {number}
   */
  public maxYellowsAdd: number

  /**
   * `Variable Lock Only` Maximum Yellow Remove Cards
   * @type {number}
   */
  public maxYellowsMinus: number

  /**
   * `Variable Lock Only` Minimum Double up Cards
   * @type {number}
   */
  public minDoubleUps: number

  /**
   * `Variable Lock Only` Minimum Freeze Cards
   * @type {number}
   */
  public minFreezes: number

  /**
   * `Variable Lock Only` Minimum Green Cards
   * @type {number}
   */
  public minGreens: number

  /**
   * `Fixed Lock Only` Minimum Minutes
   * @type {number}
   */
  public minMinutes: number

  /**
   * `Variable Lock Only` Minimum Red Cards
   * @type {number}
   */
  public minReds: number

  /**
   * `Variable Lock Only` Minimum Reset Cards
   * @type {number}
   */
  public minResets: number

  /**
   * Minimum ChastiKey App version required to load lock
   * @type {number}
   */
  public minVersionRequired: string

  /**
   * `Variable Lock Only` Minimum Yellow Cards
   * @type {number}
   */
  public minYellows: number

  /**
   * `Variable Lock Only` Minimum Yellow Add Cards
   * @type {number}
   */
  public minYellowsAdd: number

  /**
   * `Variable Lock Only` Minimum Yellow Remove Cards
   * @type {number}
   */
  public minYellowsMinus: number

  /**
   * `Variable Lock Only` Numerical value for multiple greens required status

   * **Tip:** See `isMultipleGreensRequired` for the computed boolean version of this value
   * @type {number}
   */
  public multipleGreensRequired: number

  /**
   * Decimal hour for the card pick frequency - Fixed locks will show just 24
   * @type {number}
   */
  public regularity: number

  /**
   * If a Direct Message before loading lock is required
   * @type {number}
   */
  public requireDM: number

  /**
   * Simulation of Average Minutes Locked
   * @type {number}
   */
  public simulationAverageMinutesLocked: number

  /**
   * Simulation of Best Case Minutes Locked
   * @type {number}
   */
  public simulationBestCaseMinutesLocked: number

  /**
   * Simulation of Worst Case Minutes Locked
   * @type {number}
   */
  public simulationWorstCaseMinutesLocked: number

  /**
   * Numerical value for lock timer hidden status
   *
   * **Tip:** See `isTimerHidden` for the computed boolean version of this value
   * @type {number}
   */
  public timerHidden: number

  // ----------------------------

  public get isForceTrust(): boolean {
    return this.forceTrust === 1
  }
  public get isKeysDisabled(): boolean {
    return this.keyDisabled === 1
  }
  public get isCardInfoHidden(): boolean {
    return this.cardInfoHidden === 1
  }
  public get isCumulative(): boolean {
    return this.cumulative === 1
  }
  public get isNonCumulative(): boolean {
    return this.cumulative === 0
  }
  public get isFixed(): boolean {
    return this.fixed === 1
  }
  public get isTimerHidden(): boolean {
    return this.timerHidden === 1
  }
  public get isMultipleGreensRequired(): boolean {
    return this.multipleGreensRequired === 1
  }

  constructor(init?: Partial<KeyholderDataLock>) {
    Object.assign(this, init || {})
    // Initialize Lock Lockees
    this.lockees = init.lockees.map(l => new KeyholderDataLockLockee(l))
  }
}

export class KeyholderDataLockLockee {
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
   * ChastiKey lock ID
   * @type {number}
   */
  public lockID: number

  constructor(init?: Partial<KeyholderDataLockLockee>) {
    Object.assign(this, init || {})
  }
}
