export enum IUserDataSearchParam {
  userID = 'userID',
  username = 'username',
  discordID = 'discordID',
  averageKeyholderRating = 'averageKeyholderRating',
  averageLockeeRating = 'averageLockeeRating',
  averageTimeLockedInSeconds = 'averageTimeLockedInSeconds',
  buildNumberInstalled = 'buildNumberInstalled',
  cumulativeSecondsLocked = 'cumulativeSecondsLocked',
  dateFirstKeyheld = 'dateFirstKeyheld',
  joined = 'joined',
  keyholderLevel = 'keyholderLevel',
  lockeeLevel = 'lockeeLevel',
  longestCompletedLockInSeconds = 'longestCompletedLockInSeconds',
  mainRole = 'mainRole',
  noOfLocksFlaggedAsTrusted = 'noOfLocksFlaggedAsTrusted',
  noOfKeyholderRatings = 'noOfKeyholderRatings',
  noOfLockeeRatings = 'noOfLockeeRatings',
  noOfLocksManagingNow = 'noOfLocksManagingNow',
  noOfLocksManagingNowFixed = 'noOfLocksManagingNowFixed',
  noOfLocksManagingNowVariable = 'noOfLocksManagingNowVariable',
  noOfSharedLocks = 'noOfSharedLocks',
  noOfSharedLocksFixed = 'noOfSharedLocksFixed',
  noOfSharedLocksVariable = 'noOfSharedLocksVariable',
  secondsLockedInCurrentLock = 'secondsLockedInCurrentLock',
  status = 'status',
  timestampFirstKeyheld = 'timestampFirstKeyheld',
  timestampJoined = 'timestampJoined',
  timestampLastActive = 'timestampLastActive',
  totalLocksManaged = 'totalLocksManaged',
  totalNoOfCompletedLocks = 'totalNoOfCompletedLocks',
  totalNoOfLocks = 'totalNoOfLocks',
  versionInstalled = 'versionInstalled'
}

export class UserDataResponse {
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
   * @type {UserData}
   */
  public users: Array<UserData> = []

  constructor(init?: Partial<UserDataResponse>) {
    // Map response
    Object.assign(this.response, init.response || {})

    // Init any UserData Objects
    if (init) this.users = init.hasOwnProperty('users') ? init.users.map(u => new UserData(u)) : this.users
  }

  public search(...filters: Array<{ [key in IUserDataSearchParam]?: RegExp | number | string }>) {
    var filtered: Array<UserData> = this.users

    filters.forEach(f => {
      for (const k in f) {
        const typeFixedKey = k as IUserDataSearchParam
        filtered = filtered.filter(u => {
          return typeof f[typeFixedKey] === 'object'
            ? new RegExp(f[typeFixedKey] as string).test(u[typeFixedKey] as string)
            : u[typeFixedKey] === f[typeFixedKey]
        })
      }
    })

    return filtered
  }
}

export class UserData {
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
   * Average Keyholder rating
   * @type {number}
   */
  public averageKeyholderRating: number

  /**
   * Average Lockee rating
   * @type {number}
   */
  public averageLockeeRating: number

  /**
   * Average time locked in locks
   * @type {number}
   */
  public averageTimeLockedInSeconds: number

  /**
   * ChastiKey App build number last used
   * @type {number}
   */
  public buildNumberInstalled: number

  /**
   * Cumulative time locked in past + current lock (excludes abandoned)
   * @type {number}
   */
  public cumulativeSecondsLocked: number

  /**
   * String date when first keyheld a lockee
   * @type {string}
   */
  public dateFirstKeyheld: string

  /**
   * Numerical status value for Stats Enabled/Disabled in the ChastiKey App
   * @type {number}
   */
  public displayInStats: number

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
   * - `4` Distinguished
   * - `5` Renowned
   * @type {(1 | 2 | 3 | 4 | 5)}
   */
  public keyholderLevel: number

  /**
   * Lockee Experience Level
   *
   * - `1` Novice
   * - `2` Intermediate
   * - `3` Experienced
   * - `4` Devoted
   * @type {(1 | 2 | 3 | 4)}
   */
  public lockeeLevel: number

  /**
   * Longest Lockee Lock completed in seconds
   * @type {number}
   */
  public longestCompletedLockInSeconds: number

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
   * Number of ratings as a keyholder
   * @type {number}
   */
  public noOfKeyholderRatings: number

  /**
   * Number of ratings as a lockee
   * @type {number}
   */
  public noOfLockeeRatings: number

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
   * Number of seconds in current Lock
   * @type {number}
   */
  public secondsLockedInCurrentLock: number

  /**
   * ChastiKey App status
   *
   * - `Available` When the app is open
   * - `Offline` When the app is closed
   * @type {('Available' | 'Offline')}
   */
  public status: 'Available' | 'Offline' = 'Offline'

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
   * Total number of locks completed as a lockee
   * @type {number}
   */
  public totalNoOfCompletedLocks: number

  /**
   * Total number of locks (regardless of completion)
   * @type {number}
   */
  public totalNoOfLocks: number

  /**
   * Twitter Username
   * @type {string}
   */
  public twitterUsername: string

  /**
   * ChastiKey App version last used
   * @type {string}
   */
  public versionInstalled: string

  // ----------------------------

  public get isVerified(): boolean {
    return this.discordID ? true : false
  }

  constructor(init?: Partial<UserData>) {
    Object.assign(this, init || {})
  }
}
