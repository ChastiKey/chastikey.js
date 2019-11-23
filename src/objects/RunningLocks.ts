export enum IRunningLocksSearchParam {
  username = 'username',
  sharedLockID = 'sharedLockID',
  regularity = 'regularity',
  multipleGreensRequired = 'multipleGreensRequired',
  timestampLocked = 'timestampLocked',
  timestampNow = 'timestampNow',
  secondsLocked = 'secondsLocked',
  fixed = 'fixed',
  cumulative = 'cumulative',
  noOfTurns = 'noOfTurns',
  version = 'version',
  build = 'build'
}

export class RunningLocksResponse {
  /**
   * Locks from Data Export
   * @type {Array<RunningLocksLock>}
   * @memberof RunningLocksResponse
   */
  public locks: Array<RunningLocksLock> = []

  constructor(init?: Array<RunningLocksLock>) {
    // Init any RunningLocksLock Objects
    if (init) this.locks = init.map(l => new RunningLocksLock(l))
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
  public username: string
  public sharedLockID: string
  public regularity: number
  public multipleGreensRequired: number
  public timestampLocked: number
  public timestampNow: number
  public secondsLocked: number
  public fixed: number
  public cumulative: number
  public noOfTurns: number
  public version: number
  public build: number

  constructor(init?: Partial<RunningLocksLock>) {
    Object.assign(this, init)
  }
}
