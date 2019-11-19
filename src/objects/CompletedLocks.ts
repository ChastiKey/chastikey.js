export enum ICompletedLocksSearchParam {
  username = 'username',
  sharedLockID = 'sharedLockID',
  regularity = 'regularity',
  multipleGreensRequired = 'multipleGreensRequired',
  timestampLocked = 'timestampLocked',
  timestampUnlocked = 'timestampUnlocked',
  fixed = 'fixed',
  cumulative = 'cumulative',
  initialGreenCards = 'initialGreenCards',
  initialRedCards = 'initialRedCards',
  initialYellowCards = 'initialYellowCards',
  initialDoubleUpCards = 'initialDoubleUpCards',
  initialResetCards = 'initialResetCards',
  noOfTurns = 'noOfTurns',
  version = 'version',
  build = 'build',
  rating = 'rating'
}

export class CompletedLocksResponse {
  /**
   * Locks from Data Export
   * @type {Array<CompletedLocksLock>}
   * @memberof CompletedLocksResponse
   */
  public locks: Array<CompletedLocksLock> = []

  constructor(init?: Array<CompletedLocksLock>) {
    // Init any CompletedLocksLock Objects
    if (init) this.locks = init.map(l => new CompletedLocksLock(l))
  }

  public search(...filters: Array<{ [key in ICompletedLocksSearchParam]?: RegExp | number | string }>) {
    var filtered: Array<CompletedLocksLock> = this.locks

    filters.forEach(f => {
      for (const k in f) {
        const typeFixedKey = k as ICompletedLocksSearchParam
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

export class CompletedLocksLock {
  public username: string
  public sharedLockID: string
  public regularity: number
  public multipleGreensRequired: number
  public timestampLocked: number
  public timestampUnlocked: number
  public fixed: number
  public cumulative: number
  public initialGreenCards: number
  public initialRedCards: number
  public initialYellowCards: number
  public initialDoubleUpCards: number
  public initialResetCards: number
  public noOfTurns: number
  public version: string
  public build: number
  public rating: number

  constructor(init?: Partial<CompletedLocksLock>) {
    Object.assign(this, init)
  }
}
