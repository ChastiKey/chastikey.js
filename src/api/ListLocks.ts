import * as Objects from '../objects/'
import { APIBase } from '../APIBase'
import { IChastiKeyParam } from '../ChastiKey'

interface IListLocksGetParams extends IChastiKeyParam {
  username?: string
  // discord_id?: string
  showdeleted?: boolean
  bot?: string
}

/**
 * **Query the API for the specified user Locks (Legacy)**
 *
 * - Cached: `60 seconds server side`
 * @export
 * @class ListLocks
 * @extends {APIBase}
 */
export class ListLocks extends APIBase {
  protected repo = 'api'
  protected name = 'ListLocks'

  /**
   * **Fetches the specified user's locks**
   * @param {IListLocksGetParams} params
   * @returns {Promise<Objects.ListLocksResponse>}
   * @memberof ListLocks
   */
  public async get(params: IListLocksGetParams): Promise<Objects.ListLocksResponse> {
    return new Objects.ListLocksResponse(
      await this.request<Objects.ListLocksResponse, IListLocksGetParams>('listlocks2.php', params)
    )
  }

  /**
   * **(Alternative) Fetches the specified user's locks**
   * @param {string} username
   * @param {boolean} [showdeleted]
   * @param {string} [bot]
   * @returns
   * @memberof ListLocks
   */
  public async getByUsername(username: string, showdeleted?: boolean, bot?: string) {
    return this.get({ username: username, showdeleted: showdeleted, bot: bot })
  }
}
