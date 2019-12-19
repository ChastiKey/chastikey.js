export class ListLocksResponse {
  public status: 200 | 204 | 400 = 400
  public message: string = `Error! If you're seeing this ChastiKey has not responded an error.`
  public timestampGenerated: number = Date.now() / 1000

  public locks: Array<ListLocksLock> = []

  constructor(init?: Partial<ListLocksResponse>) {
    if (init) {
      //  [ v0.4 <= Only ] Transfer Response out of Array
      if (Array.isArray((init as any).response)) {
        const legacyResp = (init as any).response[0]
        this.status = legacyResp.status
        this.message = legacyResp.message
        this.timestampGenerated = legacyResp.timestampGenerated
      } else {
        this.status = init.status
        this.message = init.message
        this.timestampGenerated = init.timestampGenerated
      }

      // Init any ListLock Objects
      if (init.locks) this.locks = init.locks.map(l => new ListLocksLock(l))
    }
  }

  public get getLocked(): Array<ListLocksLock> {
    return this.locks.filter(l => l.isLocked)
  }
}

export class ListLocksLock {
  /**
   * ChastiKey lock ID
   * @type {number}
   * @memberof ListLocksLock
   */
  public lockID: number
  /**
   * Deleted state
   *
   * `0 = false`
   * `1 = true`
   *
   * @type {number}
   * @memberof ListLocksLock
   */
  public lockDeleted: number
  /**
   * Keyholder's username
   *
   * **Note:** This may be hidden if the Keyholder has their App Stats disabled!
   * @type {string}
   * @memberof ListLocksLock
   */
  public lockedBy: string
  /**
   * ChastiKey Discard pile (Variable locks only)
   *
   * @type {(string | Array<String>)}
   * @memberof ListLocksLock
   */
  public discardPile: string | Array<String>
  /**
   * Frozen state (Keyholder or Card)
   *
   * `0 = false`
   * `1 = true`
   *
   * @type {number}
   * @memberof ListLocksLock
   */
  public lockFrozen: number
  /**
   * Unix timestamp (seconds) that the lock was deleted from the app
   * @type {number}
   * @memberof ListLocksLock
   */
  public timestampDeleted: number
  /**
   * Unix timestamp (seconds) that the lock had its last card pick (variable only)
   * @type {number}
   * @memberof ListLocksLock
   */
  public timestampLastPicked: number
  /**
   * Unix timestamp (seconds) that the lock was created
   * @type {number}
   * @memberof ListLocksLock
   */
  public timestampLocked: number
  /**
   * Unix timestamp (seconds) that the lock finished for real
   * @type {number}
   * @memberof ListLocksLock
   */
  public timestampUnlocked: number
  /**
   * Unix timestamp (seconds) that the lock at the time of this request should unlock
   * @type {number}
   * @memberof ListLocksLock
   */
  public timestampExpectedUnlock: number
  /**
   * State of the lock
   * @type {('UnlockedReal' | 'Locked' | 'ReadyToUnlock')}
   * @memberof ListLocksLock
   */
  public status: 'UnlockedReal' | 'Locked' | 'ReadyToUnlock'
  /**
   * Lock combination
   *
   * **Note:** Only populated if the lock has completed for real
   * @type {string}
   * @memberof ListLocksLock
   */
  public combination: string
  /**
   * Computed Locked State
   * @readonly
   * @type {boolean}
   * @memberof ListLocksLock
   */
  public get isLocked(): boolean {
    return this.timestampUnlocked === 0
  }
  /**
   * Computed Unlocked state
   * @readonly
   * @type {boolean}
   * @memberof ListLocksLock
   */
  public get isUnlocked(): boolean {
    return this.status === 'UnlockedReal'
  }
  /**
   * Computed abandoned state
   *
   * **Note:** Only possible in newer versions of the API! Will return false if not available.
   * @readonly
   * @type {boolean}
   * @memberof ListLocksLock
   */
  public get isAbandoned(): boolean {
    return this.lockDeleted === 1 && this.timestampUnlocked === 0
  }
  /**
   * Computed total time locked regardless of lock state
   * @readonly
   * @type {number}
   * @memberof ListLocksLock
   */
  public get totalTimeLocked(): number {
    return this.isLocked ? Date.now() / 1000 - this.timestampLocked : this.timestampUnlocked - this.timestampLocked
  }

  constructor(init?: Partial<ListLocksLock>) {
    Object.assign(this, init || {})
    // Parse discard pile to array of strings instead of CSV
    if (init) {
      if (init.discardPile !== undefined)
        if (typeof init.discardPile !== 'string') this.discardPile = String(init.discardPile).split(',')
    }
  }
}
