export enum ICombinationsSearchParam {
  lockGroupID = 'lockGroupID',
  lockID = 'lockID',
  lockedBy = 'lockedBy',
  lockName = 'lockName',
  build = 'build',
  combination = 'combination',
  timestampUnlocked = 'timestampUnlocked',
  test = 'test'
}

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
      Object.assign(this.response, init.response || {})

      this.locks = init.hasOwnProperty('locks')
        ? (this.locks = init.locks.map(l => new CombinationLock(l)))
        : this.locks
    }
  }

  public search(...filters: Array<{ [key in ICombinationsSearchParam]?: RegExp | number | string }>) {
    var filtered: Array<CombinationLock> = this.locks

    filters.forEach(f => {
      for (const k in f) {
        const typeFixedKey = k as ICombinationsSearchParam
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

export class CombinationLock {
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
   * ChastiKey App build number
   * @type {number}
   */
  public build: number

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

  /**
   * Numerical value for lock type where 1 is a lock flagged as a 'Test Lock' when it was loaded in
   * the ChastiKey App
   *
   * @type {number}
   */
  public test: number

  // ----------------------------

  public get combinationInt(): number {
    return this.combination ? Number(this.combination) : null
  }
  public get isTest(): boolean {
    return this.test === 1
  }

  constructor(init?: Partial<CombinationLock>) {
    Object.assign(this, init || {})
  }
}
