export class LockeeDataResponse {
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
   * @type {LockeeData}
   */
  public data: LockeeData

  /**
   * ChastiKey App locks
   * @type {Array<LockeeDataLock>}
   */
  public locks: Array<LockeeDataLock> = []

  // ----------------------------

  /**
   * Array of Locked Locks
   * @readonly
   * @type {number}
   */
  public get getLocked(): Array<LockeeDataLock> {
    return this.locks.filter(l => l.status !== 'UnlockedReal' && l.status !== 'UnlockedFake' && l.deleted === 0)
  }

  /**
   * Find the time (in seconds) since the last lock ended. Returns null if currently locked.
   * @readonly
   * @type {number}
   */
  public get timeSinceLastLocked(): number {
    if (this.getLocked.length === 0 && this.locks.length > 0) {
      const lastUnlocked = this.locks
        .filter(l => l.status === 'UnlockedReal')
        .reduce((prev, cur) => (prev.timestampUnlocked > cur.timestampUnlocked ? prev : cur))

      return Date.now() / 1000 - lastUnlocked.timestampUnlocked
    } else return null
  }

  constructor(init?: Partial<LockeeDataResponse>) {
    if (init) {
      Object.assign(this.response, init.response || {})

      this.data = new LockeeData(init.locks ? init.data || {} : {})
      this.locks = init.hasOwnProperty('locks') ? (this.locks = init.locks.map(l => new LockeeDataLock(l))) : this.locks
    }
  }
}

export class LockeeData {
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
   * Average lockee rating from past locks
   * @type {number}
   */
  public averageRating: number

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
   * Date Time of ChastiKey account creation
   * @type {string}
   */
  public joined: string

  /**
   * Lockee Experience Level
   *
   * - `1` Novice
   * - `2` Intermediate
   * - `3` Experienced
   * - `4` Devoted
   * @type {(1 | 2 | 3 | 4)}
   */
  public lockeeLevel: 1 | 2 | 3 | 4

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
   * Number of ratings from Keyholders in past locks
   * @type {number}
   */
  public noOfRatings: number

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
   * ChastiKey App version last used
   * @type {string}
   */
  public versionInstalled: string

  // ----------------------------

  /**
   * Computed Lockee Experience level
   * @readonly
   * @type {string}
   */
  public get lockeeExperienceLevel(): string {
    if (this.lockeeLevel === 4) return 'Devoted'
    if (this.lockeeLevel === 3) return 'Experienced'
    if (this.lockeeLevel === 2) return 'Intermediate'
    if (this.lockeeLevel === 1) return 'Novice'
    // Fallback
    return 'Novice'
  }
  public get isVerified(): boolean {
    return this.discordID ? true : false
  }

  constructor(init?: Partial<LockeeData>) {
    Object.assign(this, init || {})
  }
}

export class LockeeDataLock {
  /**
   * ChastiKey lock ID
   * @type {number}
   */
  public lockID: number

  /**
   * Keyholder's username
   *
   * **Note:** This may be hidden if the Keyholder has their App Stats disabled!
   * @type {string}
   */
  public lockedBy: string

  /**
   * Name of lock as set by the Keyholder
   *
   * **Note:** This will be an empty string if the lock is unnamed
   * @type {string}
   */
  public lockName: string

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
   * - `0` Human Keyholder
   * - `1` Bot Hailey
   * - `2` Bot Blaine
   * - `3` Bot Zoe
   * - `4` Bot Chase
   * @type {(0 | 1 | 2 | 3 | 4)}
   */
  public botChosen: 0 | 1 | 2 | 3 | 4

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
   * Lock Combination set upon loading the lock & visible again once the lock has ended
   *
   * **Tip:** See `combinationInt` for the numerical version of this
   * @type {string}
   */
  public combination: string

  /**
   * Deleted state
   *
   * **Tip:** See `isDeleted` for the computed boolean version of this value
   * @type {number}
   */
  public deleted: number

  /**
   * Discard Cards Pile as recorded from interacting with the lock in drawing card
   * @type {string}
   */
  public discardPile: string

  /**
   * `Variable Lock Only` Double up cards remaining
   *
   * **Note:** Will return `-9` if card info is hidden
   * @type {number}
   */
  public doubleUpCards: number

  /**
   * Numerical value for fixed lock type
   *
   * **Tip:** See `isFixed` for the computed boolean version of this value
   * @type {number}
   */
  public fixed: number

  /**
   * `Variable Lock Only` Freeze cards remaining
   *
   * **Note:** Will return `-9` if card info is hidden
   * @type {number}
   */
  public freezeCards: number

  /**
   * `Variable Lock Only` Green cards remaining
   *
   * **Note:** Will return `-9` if card info is hidden
   * @type {number}
   */
  public greenCards: number

  /**
   * `Variable Lock Only` Green cards picked
   * @type {number}
   */
  public greenCardsPicked: number

  /**
   * Numerical value for lock frozen status
   *
   * **Tip:** See `isFrozen` for the computed boolean version of this value
   * @type {number}
   */
  public lockFrozen: number

  /**
   * `Variable Lock Only` Numerical value for lock frozen by card status
   *
   * **Tip:** See `isFrozenByCard` for the computed boolean version of this value
   * @type {number}
   */
  public lockFrozenByCard: number

  /**
   * Numerical value for lock frozen by Keyholder status
   *
   * **Tip:** See `isFrozenByKeyholder` for the computed boolean version of this value
   * @type {number}
   */
  public lockFrozenByKeyholder: number

  /**
   * Lock Log ID for making requests to LogData
   * @type {number}
   */
  public logID: number

  /**
   * `Variable Lock Only` Numerical value for multiple greens required status

   * **Tip:** See `isMultipleGreensRequired` for the computed boolean version of this value
   * @type {number}
   */
  public multipleGreensRequired: number

  /**
   * `Variable Lock Only` Count of turns made over the lock's lifetime
   * @type {number}
   */
  public noOfTurns: number

  /**
   * `Variable Lock Only` Red cards remaining
   *
   * **Note:** Will return `-9` if card info is hidden
   * @type {number}
   */
  public redCards: number

  /**
   * Decimal hour for the card pick frequency - Fixed locks will show just 24
   * @type {number}
   */
  public regularity: number

  /**
   * `Variable Lock Only` Reset cards remaining
   *
   * **Note:** Will return `-9` if card info is hidden
   * @type {number}
   */
  public resetCards: number

  /**
   * State of the lock
   * @type {('UnlockedReal' | 'Locked' | 'ReadyToUnlock' | 'UnlockedFake')}
   */
  public status: 'UnlockedReal' | 'Locked' | 'ReadyToUnlock' | 'UnlockedFake'

  /**
   * Numerical value for lock timer hidden status
   *
   * **Tip:** See `isTimerHidden` for the computed boolean version of this value
   * @type {number}
   */
  public timerHidden: number

  /**
   * Timestamp the lock was deleted from the ChastiKey App
   * @type {number}
   */
  public timestampDeleted: number

  /**
   * Timestamp the lock is expected to unlock - this can change
   * @type {number}
   */
  public timestampExpectedUnlock: number

  /**
   * Timestamp of the last interaction
   * @type {number}
   */
  public timestampLastPicked: number

  /**
   * Timestamp the lock was declared locked in the ChastiKey App
   * @type {number}
   */
  public timestampLocked: number

  /**
   * `Variable Lock Only` Timestamp when the next card draw will be available
   * @type {number}
   */
  public timestampNextPick: number

  /**
   * Timestamp the lock was declared unlocked in the ChastiKey App
   * @type {number}
   */
  public timestampUnlocked: number

  /**
   * Total time ths lock has been frozen
   * @type {number}
   */
  public totalTimeFrozen: number

  /**
   * Numerical value for trusted keyholder status
   *
   * **Tip:** See `isTrustedKeyholder` for the computed boolean version of this value
   * @type {number}
   */
  public trustKeyholder: number

  /**
   * `Variable Lock Only` Yellow cards remaining
   *
   * **Note:** Will return `-9` if card info is hidden
   * @type {number}
   */
  public yellowCards: number

  // ----------------------------

  public get isCardInfoHidden(): boolean {
    return this.cardInfoHidden === 1
  }
  public get isCumulative(): boolean {
    return this.cumulative === 1
  }
  public get isNonCumulative(): boolean {
    return this.cumulative === 0
  }
  public get combinationInt(): number {
    return this.combination ? Number(this.combination) : null
  }
  public get isDeleted(): boolean {
    return this.deleted === 1
  }

  /**
   * Computed discarded state
   *
   * Discarded is when a lock is Deleted a secondary time from the ChastiKey App
   * @readonly
   * @type {boolean}
   */
  public get isDiscarded(): boolean {
    return this.deleted === 1 && this.timestampUnlocked === 0
  }
  public get isFixed(): boolean {
    return this.fixed === 1
  }
  public get isFrozen(): boolean {
    return this.lockFrozen === 1
  }
  public get isFrozenByCard(): boolean {
    return this.lockFrozenByCard === 1
  }
  public get isFrozenByKeyholder(): boolean {
    return this.lockFrozenByKeyholder === 1
  }
  public get isLocked(): boolean {
    return this.status !== 'UnlockedReal' && this.status !== 'UnlockedFake'
  }
  public get isMultipleGreensRequired(): boolean {
    return this.multipleGreensRequired === 1
  }
  public get isTimerHidden(): boolean {
    return this.timerHidden === 1
  }
  public get isTrustedKeyholder(): boolean {
    return this.trustKeyholder === 1
  }
  public get isUnlocked(): boolean {
    return this.status === 'UnlockedReal' || this.status === 'UnlockedFake'
  }

  /**
   * Computed total time locked regardless of lock state
   * @readonly
   * @type {number}
   */
  public get totalTimeLocked(): number {
    return this.isLocked ? Date.now() / 1000 - this.timestampLocked : this.timestampUnlocked - this.timestampLocked
  }

  constructor(init?: Partial<LockeeDataLock>) {
    Object.assign(this, init || {})
  }
}
