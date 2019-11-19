import * as Objects from '../objects/'
import { APIBase } from '../APIBase'
import { IChastiKeyParam } from '../ChastiKey'

interface ICheckLockGetParams extends IChastiKeyParam {
  username: string
  lockid: string
  bot?: string
}

export class CheckLock extends APIBase {
  /**
   * **Fetches the specified lock**
   *
   * - Cached: `60 seconds server side`
   *
   * @param {ICheckLockGetParams} params
   * @returns {Promise<Objects.CheckLockResponse>}
   * @memberof CheckLock
   */
  public async get(params: ICheckLockGetParams): Promise<Objects.CheckLockResponse> {
    return new Objects.CheckLockResponse(
      await this.request<Objects.CheckLockResponse, ICheckLockGetParams>('checklock.php', params)
    )
  }

  public async getByUsername(username: string, lockid: string, bot?: string) {
    return this.get({ username: username, lockid: lockid, bot: bot })
  }
}
