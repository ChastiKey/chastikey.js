export enum ILockeeDataLocksSearchParam {
  lockGroupID = 'lockGroupID',
  lockID = 'lockID',
  lockedBy = 'lockedBy',
  lockName = 'lockName',
  sharedLockID = 'sharedLockID',
  sharedLockQRCode = 'sharedLockQRCode',
  sharedLockURL = 'sharedLockURL',
  autoResetFrequencyInSeconds = 'autoResetFrequencyInSeconds',
  autoResetsPaused = 'autoResetsPaused',
  botChosen = 'botChosen',
  build = 'build',
  cardInfoHidden = 'cardInfoHidden',
  cumulative = 'cumulative',
  combination = 'combination',
  deleted = 'deleted',
  discardPile = 'discardPile',
  doubleUpCards = 'doubleUpCards',
  fixed = 'fixed',
  freezeCards = 'freezeCards',
  greenCards = 'greenCards',
  greenCardsPicked = 'greenCardsPicked',
  lockFrozen = 'lockFrozen',
  lockFrozenByCard = 'lockFrozenByCard',
  lockFrozenByKeyholder = 'lockFrozenByKeyholder',
  logID = 'logID',
  maximumAutoResets = 'maximumAutoResets',
  multipleGreensRequired = 'multipleGreensRequired',
  noOfTimesAutoReset = 'noOfTimesAutoReset',
  noOfTimesCardReset = 'noOfTimesCardReset',
  noOfTimesFullReset = 'noOfTimesFullReset',
  noOfTurns = 'noOfTurns',
  redCards = 'redCards',
  regularity = 'regularity',
  resetCards = 'resetCards',
  status = 'status',
  stickyCards = 'stickyCards',
  test = 'test',
  timerHidden = 'timerHidden',
  timestampDeleted = 'timestampDeleted',
  timestampExpectedUnlock = 'timestampExpectedUnlock',
  timestampFrozenByCard = 'timestampFrozenByCard',
  timestampFrozenByKeyholder = 'timestampFrozenByKeyholder',
  timestampLastAutoReset = 'timestampLastAutoReset',
  timestampLastCardReset = 'timestampLastCardReset',
  timestampLastFullReset = 'timestampLastFullReset',
  timestampLastPicked = 'timestampLastPicked',
  timestampLocked = 'timestampLocked',
  timestampNextPick = 'timestampNextPick',
  timestampRealLastPicked = 'timestampRealLastPicked',
  timestampUnlocked = 'timestampUnlocked',
  totalTimeFrozen = 'totalTimeFrozen',
  trustKeyholder = 'trustKeyholder',
  yellowCards = 'yellowCards'
}

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

  public search(...filters: Array<{ [key in ILockeeDataLocksSearchParam]?: RegExp | number | string }>) {
    var filtered: Array<LockeeDataLock> = this.locks

    filters.forEach(f => {
      for (const k in f) {
        const typeFixedKey = k as ILockeeDataLocksSearchParam
        filtered = filtered.filter(l => {
          return typeof f[typeFixedKey] === 'object'
            ? new RegExp(f[typeFixedKey] as string).test(l[typeFixedKey] as string)
            : l[typeFixedKey] === f[typeFixedKey]
        })
      }
    })

    return filtered
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
   * The Lock ID is used to identify locks that are grouped together such as Fakes and Real locks.
   * @type {number}
   */
  public lockGroupID: number

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
   * If the lock has an auto reset, this is the frequency in seconds of the auto reset
   * @type {number}
   */
  public autoResetFrequencyInSeconds: number

  /**
   * If auto reset functionality is paused
   * @type {number}
   */
  public autoResetsPaused: number

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
   * ChastiKey App build number
   * @type {number}
   */
  public build: number

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
   * Maximum number of auto resets
   * @type {number}
   */
  public maximumAutoResets: number

  /**
   * `Variable Lock Only` Numerical value for multiple greens required status

   * **Tip:** See `isMultipleGreensRequired` for the computed boolean version of this value
   * @type {number}
   */
  public multipleGreensRequired: number

  /**
   * Count of lock auto resets
   * @type {number}
   */
  public noOfTimesAutoReset: number

  /**
   * Count of lock resets by a card
   * @type {number}
   */
  public noOfTimesCardReset: number

  /**
   * Count of complete lock resets
   * @type {number}
   */
  public noOfTimesFullReset: number

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
   * `Variable Lock Only` Sticky cards remaining
   *
   * **Note:** Will return `-9` if card info is hidden
   * @type {number}
   */
  public stickyCards: number

  /**
   * Numerical value for lock type where 1 is a lock flagged as a 'Test Lock' when it was loaded in
   * the ChastiKey App
   *
   * @type {number}
   */
  public test: number

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
   * `Variable Lock Only` Timestamp the lock was frozen by a card pick
   * @type {number}
   */
  public timestampFrozenByCard: number

  /**
   * Timestamp the lock was frozen by the keyholder
   * @type {number}
   */
  public timestampFrozenByKeyholder: number

  /**
   * Timestamp the lock was last auto reset
   * @type {number}
   */
  public timestampLastAutoReset: number

  /**
   * `Variable Lock Only` Timestamp of the last reset from a card
   *
   *
   * @type {number}
   */
  public timestampLastCardReset: number

  /**
   * Timestamp of the last full reset
   * @type {number}
   */
  public timestampLastFullReset: number

  /**
   * `Variable Lock Only` Timestamp of the last interaction
   * @type {number}
   */
  public timestampLastPicked: number

  /**
   * `Variable Lock Only` Timestamp the lock was declared locked in the ChastiKey App
   * @type {number}
   */
  public timestampLocked: number

  /**
   * Timestamp when the next card draw will be available
   *
   * `Variable Lock Only`
   * @type {number}
   */
  public timestampNextPick: number

  /**
   * `Variable Lock Only` imestamp the last real pick was performed (when there are )
   * @type {number}
   */
  public timestampRealLastPicked: number

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
  public get isTest(): boolean {
    return this.test === 1
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

  /**
   * Computed timestamp of the current Freeze (Card or Keyholder frozen)
   * @readonly
   * @type {number}
   */
  public get totalTimeFrozenCurrent(): number {
    if (this.timestampFrozenByKeyholder) return Date.now() / 1000 - this.timestampFrozenByKeyholder
    if (this.timestampFrozenByCard) return Date.now() / 1000 - this.timestampFrozenByCard
    return 0
  }

  constructor(init?: Partial<LockeeDataLock>) {
    Object.assign(this, init || {})
  }
}
