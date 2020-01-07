export class LogDataResponse {
  public response = {
    /**
     * Response Information of API request
     */
    status: 0 as 0 | 200 | 204 | 400,
    message: '<pending request>' as string,
    timestampGenerated: 0 as number
  }

  /**
   * Log Data Query
   * @type {LogData}
   */
  public query: LogDataQuery

  /**
   * ChastiKey App lock Log
   * @type {Array<LogDataLock>}
   */
  public log: Array<LogData> = []

  constructor(init?: Partial<LogDataResponse>) {
    if (init) {
      Object.assign(this.response, init.response || {})

      this.query = new LogDataQuery(init.hasOwnProperty('query') ? init.query : {})
      this.log = init.hasOwnProperty('log') ? init.log.map(l => new LogData(l)) : []
    }
  }
}

export class LogDataQuery {
  public discordID: string
  public limit: number
  public lockID: number
  public logID: number
  public since: number
  public username: string

  constructor(init?: Partial<LogDataQuery>) {
    Object.assign(this, init || {})
  }
}

export class LogData {
  public id: number
  public action: string
  public actionedBy: 'Keyholder' | 'Lockee'
  public hidden: number
  public result: number
  public timestamp: number

  constructor(init?: Partial<LogData>) {
    Object.assign(this, init || {})
  }
}
