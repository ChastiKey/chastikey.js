export enum IRunningLocksSearchParam {
  userID = 'userID',
  username = 'username',
  discordID = 'discordID',
  lockID = 'lockID',
  lockedBy = 'lockedBy',
  lockName = 'lockName',
  sharedLockID = 'sharedLockID',
  sharedLockQRCode = 'sharedLockQRCode',
  sharedLockURL = 'sharedLockURL',
  botChosen = 'botChosen',
  cardInfoHidden = 'cardInfoHidden',
  cumulative = 'cumulative',
  doubleUpCards = 'doubleUpCards',
  fixed = 'fixed',
  freezeCards = 'freezeCards',
  greenCards = 'greenCards',
  greenCardsPicked = 'greenCardsPicked',
  lockFrozen = 'lockFrozen',
  lockFrozenByCard = 'lockFrozenByCard',
  lockFrozenByKeyholder = 'lockFrozenByKeyholder',
  logID = 'logID',
  multipleGreensRequired = 'multipleGreensRequired',
  noOfTurns = 'noOfTurns',
  redCards = 'redCards',
  regularity = 'regularity',
  resetCards = 'resetCards',
  status = 'status',
  timerHidden = 'timerHidden',
  timestampExpectedUnlock = 'timestampExpectedUnlock',
  timestampFrozenByCard = 'timestampFrozenByCard',
  timestampFrozenByKeyholder = 'timestampFrozenByKeyholder',
  timestampLastPicked = 'timestampLastPicked',
  timestampLocked = 'timestampLocked',
  timestampNextPick = 'timestampNextPick',
  totalTimeFrozen = 'totalTimeFrozen',
  trustKeyholder = 'trustKeyholder',
  yellowCards = 'yellowCards'
}

export class RunningLocksResponse {
  public response = {
    /**
     * Response Information of API request
     */
    status: 0 as 0 | 200 | 204 | 400,
    message: '<pending request>' as string,
    timestampGenerated: 0 as number
  }

  /**
   * Locks from Data Export
   * @type {Array<RunningLocksLock>}
   * @memberof RunningLocksResponse
   */
  public locks: Array<RunningLocksLock> = []

  constructor(init?: RunningLocksResponse) {
    // Map response
    Object.assign(this.response, init.response || {})

    // Init any RunningLocksLock Objects
    if (init) this.locks = init.hasOwnProperty('locks') ? init.locks.map(l => new RunningLocksLock(l)) : this.locks
  }

  public search(...filters: Array<{ [key in IRunningLocksSearchParam]?: RegExp | number | string }>) {
    var filtered: Array<RunningLocksLock> = this.locks

    filters.forEach(f => {
      for (const k in f) {
        const typeFixedKey = k as IRunningLocksSearchParam
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

export class RunningLocksLock {
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
   * ChastiKey lock ID
   * @type {number}
   * @memberof ListLocksLock
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
  public get isMultipleGreensRequired(): boolean {
    return this.multipleGreensRequired === 1
  }
  public get isTimerHidden(): boolean {
    return this.timerHidden === 1
  }
  public get isTrustedKeyholder(): boolean {
    return this.trustKeyholder === 1
  }

  /**
   * Computed total time locked regardless of lock state
   * @readonly
   * @type {number}
   */
  public get totalTimeLocked(): number {
    return Date.now() / 1000 - this.timestampLocked
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

  constructor(init?: Partial<RunningLocksLock>) {
    Object.assign(this, init)
  }
}
