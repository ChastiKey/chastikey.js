export enum IDateFirstKeyheldSearchParam {
  username = 'username',
  locks_managed = 'locks_managed',
  date = 'date'
}

export class DateFirstKeyheldResponse {
  /**
   * Keyholders from Data Export
   * @type {Array<DateFirstKeyheldEntry>}
   * @memberof DateFirstKeyheldResponse
   */
  public keyholders: Array<DateFirstKeyheldEntry> = []

  constructor(init?: Array<DateFirstKeyheldEntry>) {
    // Init any DateFirstKeyheldEntry Objects
    if (init) this.keyholders = init.map(kh => new DateFirstKeyheldEntry(kh))
  }

  public search(...filters: Array<{ [key in IDateFirstKeyheldSearchParam]?: RegExp | number | string }>) {
    var filtered: Array<DateFirstKeyheldEntry> = this.keyholders

    filters.forEach(f => {
      for (const k in f) {
        const typeFixedKey = k as IDateFirstKeyheldSearchParam
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

export class DateFirstKeyheldEntry {
  public username: string
  public locks_managed: number
  public date: string

  constructor(init?: Partial<DateFirstKeyheldEntry>) {
    Object.assign(this, init)
  }
}
