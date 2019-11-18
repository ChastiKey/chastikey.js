import * as Objects from '../objects/'
import { APIBase } from '../APIBase'
import { IChastiKeyParam } from '../Chastikey'

interface IListLocksGetParams extends IChastiKeyParam {
  username?: string
  // discord_id?: string
  bot?: string
  showdeleted?: boolean
}

export class ListLocks extends APIBase {
  /**
   * **Fetches the specified user's locks**
   *
   * - Cached: `60 seconds server side`
   *
   * @param {IListLocksGetParams} params
   * @returns {Promise<Objects.ListLocksResponse>}
   * @memberof ListLocks
   */
  public async get(params: IListLocksGetParams): Promise<Objects.ListLocksResponse> {
    return new Objects.ListLocksResponse(
      await this.request<Objects.ListLocksResponse, IListLocksGetParams>('listlocks2.php', params)
    )
  }

  public async getByUsername(username: string, showdeleted?: boolean, bot?: string) {
    return this.get({ username: username, showdeleted: showdeleted !== undefined ? showdeleted : false, bot: bot })
  }

  // public async getByDiscordID(discord_id: string, showdeleted?: boolean, bot?: string) {
  //   return this.get({ discord_id: discord_id, showdeleted: showdeleted !== undefined ? showdeleted : false, bot: bot })
  // }
}
