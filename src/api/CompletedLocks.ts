import * as Objects from '../objects/'
import { APIBase } from '../APIBase'
import { CompletedLocksResponse } from '../objects/'

/**
 * **Cached Completed Locks**
 *
 * - Cached: `15 Minutes`
 * - Requirement: `ActiveInApp <= 2 weeks`
 * @export
 * @class CompletedLocks
 * @extends {APIBase}
 */
export class CompletedLocks extends APIBase {
  /**
   * **Fetches the scheduled data export of completed locks**
   * @returns {Promise<CompletedLocksResponse>}
   * @memberof CompletedLocks
   */
  public async get(): Promise<CompletedLocksResponse> {
    return new CompletedLocksResponse(await this.requestDataExport<Objects.CompletedLocksLock>('completed_locks.json'))
  }
}
