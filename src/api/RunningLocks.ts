import * as Objects from '../objects/'
import { APIBase } from '../APIBase'
import { RunningLocksResponse } from '../objects/'

/**
 * **Retrieves the current data export JSON for Running Locks**
 *
 * - Cached: `15 Minutes`
 * - Requirement: `ActiveInApp <= 2 weeks`
 * @export
 * @class RunningLocks
 * @extends {APIBase}
 */
export class RunningLocks extends APIBase {
  /**
   * **Fetches the scheduled data export for running locks**
   * @returns {Promise<RunningLocksResponse>}
   * @memberof RunningLocks
   */
  public async get(): Promise<RunningLocksResponse> {
    return new RunningLocksResponse(
      await this.requestDataExport<Objects.RunningLocksLock>('running_locks.json')
    )
  }
}
