export class CombinationsResponse {
  public response = {
    /**
     * Response Information of API request
     */
    status: 0 as 0 | 200 | 204 | 400,
    message: '<pending request>' as string,
    timestampGenerated: 0 as number
  }

  /**
   * ChastiKey App locks
   * @type {Array<CombinationLock>}
   */
  public locks: Array<CombinationLock> = []

  constructor(init: Partial<CombinationsResponse>) {
    if (init) {
      Object.assign(this.response, init.response)

      this.locks = init.hasOwnProperty('locks')
        ? (this.locks = init.locks.map(l => new CombinationLock(l)))
        : this.locks
    }
  }
}

export class CombinationLock {
  /**
   * ChastiKey lock ID
   * @type {number}
   */
  public lockID: number

  /**
   * Keyholder's username
   *
   * **Note:** This may be hidden if the Keyholder has their App Stats disabled!   *
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
   * Lock Combination set upon loading the lock & visible again once the lock has ended
   *
   * **Tip:** See `combinationInt` for the numerical version of this
   * @type {string}
   */
  public combination: string

  /**
   * Timestamp the lock was declared unlocked in the ChastiKey App
   * @type {number}
   */
  public timestampUnlocked: number

  // ----------------------------

  public get combinationInt(): number {
    return this.combination ? Number(this.combination) : null
  }

  constructor(init?: Partial<CombinationLock>) {
    Object.assign(this, init || {})
  }
}
