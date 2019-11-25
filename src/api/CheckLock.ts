import * as Objects from '../objects/'
import { APIBase } from '../APIBase'
import { IChastiKeyParam } from '../ChastiKey'

interface ICheckLockGetParams extends IChastiKeyParam {
  username: string
  lockid: string
  bot?: string | undefined
}

/**
 * **Query the API for the specified user lock**
 *
 * - Cached: `60 seconds server side`
 * @export
 * @class CheckLock
 * @extends {APIBase}
 */
export class CheckLock extends APIBase {
  /**
   * **Fetches the specified lock**
   * @param {ICheckLockGetParams} params
   * @returns {Promise<Objects.CheckLockResponse>}
   * @memberof CheckLock
   */
  public async get(params: ICheckLockGetParams): Promise<Objects.CheckLockResponse> {
    return new Objects.CheckLockResponse(
      await this.request<Objects.CheckLockResponse, ICheckLockGetParams>('checklock.php', params)
    )
  }

  /**
   * **(Alternative) Fetches the specified lock**
   * @param {string} username
   * @param {string} lockid
   * @param {string} [bot]
   * @returns
   * @memberof CheckLock
   */
  public async getByUsername(username: string, lockid: string, bot?: string) {
    return this.get({ username: username, lockid: lockid, bot: bot })
  }
}
