import * as Objects from '../objects/'
import { APIBase } from '../APIBase'
import { CompletedLocksResponse } from '../objects/'

export class CompletedLocks extends APIBase {
  /**
   * **Fetches the specified lock**
   *
   * - Cached: `15 Minutes`
   *
   * @returns {Promise<CompletedLocksResponse>}
   * @memberof CompletedLocks
   */
  public async get(): Promise<CompletedLocksResponse> {
    return new CompletedLocksResponse(await this.requestDataExport<Objects.CompletedLocksLock>('completed_locks.json'))
  }
}
