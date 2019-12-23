import * as Objects from '../objects'
import { APIBase } from '../APIBase'
import { IChastiKeyParam } from '../ChastiKey'

interface ICombinationsGetParams extends IChastiKeyParam {
  username: string
  discordid?: string
  showdeleted?: number
}

/**
 * **Query the API for the specified user**
 * @export
 * @class Combinations
 * @extends {APIBase}
 */
export class Combinations extends APIBase {
  protected repo = 'api'

  /**
   * **Fetches the specified user's locks & Basic account data/stats**
   * @param {ICombinationsGetParams} params
   * @returns {Promise<Objects.CombinationsResponse>}
   * @memberof Combinations
   */
  public async get(params: ICombinationsGetParams): Promise<Objects.CombinationsResponse> {
    return new Objects.CombinationsResponse(
      await this.request<Objects.CombinationsResponse, ICombinationsGetParams>('combinations.php', params)
    )
  }

  // /**
  //  * **(Alternative) Fetches the specified user's locks**
  //  * @param {string} username
  //  * @param {number} [showdeleted]
  //  * @returns
  //  * @memberof Combinations
  //  */
  // public async getByUsername(username: string, showdeleted?: number) {
  //   return this.get({ username, showdeleted: showdeleted })
  // }
}
