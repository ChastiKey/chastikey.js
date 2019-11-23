export enum IKeyholderTotalLocksManagedSearchParam {
  username = 'username',
  countLocksManaged = 'countLocksManaged'
}

export class KeyholderTotalLocksManagedResponse {
  /**
   * Keyholders from Data Export
   * @type {Array<KeyholderTotalLocksManagedEntry>}
   * @memberof KeyholderTotalLocksManagedResponse
   */
  public keyholders: Array<KeyholderTotalLocksManagedEntry> = []

  constructor(init?: Array<KeyholderTotalLocksManagedEntry>) {
    // Init any KeyholderTotalLocksManagedEntry Objects
    if (init) this.keyholders = init.map(kh => new KeyholderTotalLocksManagedEntry(kh))
  }

  public search(...filters: Array<{ [key in IKeyholderTotalLocksManagedSearchParam]?: RegExp | number | string }>) {
    var filtered: Array<KeyholderTotalLocksManagedEntry> = this.keyholders

    filters.forEach(f => {
      for (const k in f) {
        const typeFixedKey = k as IKeyholderTotalLocksManagedSearchParam
        filtered = filtered.filter(kh => {
          return typeof f[typeFixedKey] === 'object'
            ? new RegExp(f[typeFixedKey] as string).test(kh[typeFixedKey] as string)
            : kh[typeFixedKey] === f[typeFixedKey]
        })
      }
    })

    return filtered
  }
}

export class KeyholderTotalLocksManagedEntry {
  public username: string
  public countLocksManaged: number

  constructor(init?: Partial<KeyholderTotalLocksManagedEntry>) {
    Object.assign(this, init)
  }
}
