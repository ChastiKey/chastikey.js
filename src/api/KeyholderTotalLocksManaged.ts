import * as Objects from '../objects/'
import { APIBase } from '../APIBase'
import { KeyholderTotalLocksManagedResponse } from '../objects/'

/**
 * **Retrieves the current data export JSON for Keyholder total locks managed counts.**
 *
 * - Cached: `15 Minutes`
 * @export
 * @class KeyholderTotalLocksManaged
 * @extends {APIBase}
 */
export class KeyholderTotalLocksManaged extends APIBase {
  protected repo = 'json'
  protected name = 'KeyholderTotalLocksManaged'

  /**
   * **Fetches the scheduled data export for keyholders total locks managed count**
   * @returns {Promise<KeyholderTotalLocksManagedResponse>}
   * @memberof KeyholderTotalLocksManaged
   */
  public async get(): Promise<KeyholderTotalLocksManagedResponse> {
    return new KeyholderTotalLocksManagedResponse(
      await this.requestDataExport<Objects.KeyholderTotalLocksManagedEntry>('keyholders_total_locks_managed.json')
    )
  }
}
