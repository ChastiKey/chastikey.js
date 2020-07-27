export class SimulationDataResponse {
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
   * @type {Array<SimulationDataLock>}
   */
  public locks: Array<SimulationDataLock> = []

  constructor(init?: Partial<SimulationDataResponse>) {
    if (init) {
      Object.assign(this.response, init.response || {})

      this.locks = init.hasOwnProperty('locks')
        ? (this.locks = init.locks.map(l => new SimulationDataLock(l)))
        : this.locks
    }
  }
}

export class SimulationDataLock {
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
   * Name of lock as set by the Keyholder
   *
   * **Note:** This will be an empty string if the lock is unnamed or lock is not shared to the API
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
   * Maximum number of automatic resets defined for lock
   * @type {number}
   */
  public maxAutoResets: number

  /**
   * `Variable Lock Only` Maximum Double up Cards
   * @type {number}
   */
  public maxDoubleUps: number

  /**
   * `Variable Lock Only` Maximum Freeze Cards
   * @type {number}
   */
  public maxFreezes: number

  /**
   * `Variable Lock Only` Maximum Green Cards
   * @type {number}
   */
  public maxGreens: number

  /**
   * `Variable Lock Only` Maximum Red Cards
   * @type {number}
   */
  public maxReds: number

  /**
   * `Variable Lock Only` Maximum Reset Cards
   * @type {number}
   */
  public maxResets: number

  /**
   * `Variable Lock Only` Maximum Yellow Cards
   * @type {number}
   */
  public maxYellows: number

  /**
   * `Variable Lock Only` Maximum Yellow Add Cards
   * @type {number}
   */
  public maxYellowsAdd: number

  /**
   * `Variable Lock Only` Maximum Yellow Remove Cards
   * @type {number}
   */
  public maxYellowsMinus: number

  /**
   * `Variable Lock Only` Minimum Double up Cards
   * @type {number}
   */
  public minDoubleUps: number

  /**
   * `Variable Lock Only` Minimum Freeze Cards
   * @type {number}
   */
  public minFreezes: number

  /**
   * `Variable Lock Only` Minimum Green Cards
   * @type {number}
   */
  public minGreens: number

  /**
   * `Variable Lock Only` Minimum Red Cards
   * @type {number}
   */
  public minReds: number

  /**
   * `Variable Lock Only` Minimum Reset Cards
   * @type {number}
   */
  public minResets: number

  /**
   * `Variable Lock Only` Minimum Yellow Cards
   * @type {number}
   */
  public minYellows: number

  /**
   * `Variable Lock Only` Minimum Yellow Add Cards
   * @type {number}
   */
  public minYellowsAdd: number

  /**
   * `Variable Lock Only` Minimum Yellow Remove Cards
   * @type {number}
   */
  public minYellowsMinus: number

  /**
   * `Variable Lock Only` Numerical value for multiple greens required status

   * **Tip:** See `isMultipleGreensRequired` for the computed boolean version of this value
   * @type {number}
   */
  public multipleGreensRequired: number

  /**
   * Decimal hour for the card pick frequency - Fixed locks will show just 24
   * @type {number}
   */
  public regularity: number

  /**
   * Simulation of Average Minutes Locked
   * @type {number}
   */
  public simulationAverageMinutesLocked: number

  /**
   * Simulation of Best Case Minutes Locked
   * @type {number}
   */
  public simulationBestCaseMinutesLocked: number

  /**
   * Simulation of Worst Case Minutes Locked
   * @type {number}
   */
  public simulationWorstCaseMinutesLocked: number

  constructor(init?: Partial<SimulationDataLock>) {
    Object.assign(this, init || {})
  }
}
