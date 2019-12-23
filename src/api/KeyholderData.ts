import * as Objects from '../objects'
import { APIBase } from '../APIBase'
import { IChastiKeyParam } from '../ChastiKey'

interface IKeyholderDataGetParams extends IChastiKeyParam {
  username: string
  discordid?: string
}

/**
 * **Query the API for the specified user**
 * @export
 * @class KeyholderData
 * @extends {APIBase}
 */
export class KeyholderData extends APIBase {
  protected repo = 'api'

  /**
   * **Fetches the specified user's locks & Basic account data/stats**
   * @param {IKeyholderDataGetParams} params
   * @returns {Promise<Objects.KeyholderDataResponse>}
   * @memberof KeyholderData
   */
  public async get(params: IKeyholderDataGetParams): Promise<Objects.KeyholderDataResponse> {
    return new Objects.KeyholderDataResponse(
      await this.request<Objects.KeyholderDataResponse, IKeyholderDataGetParams>('keyholderdata.php', params)
    )
  }

  // /**
  //  * **(Alternative) Fetches the specified user's locks**
  //  * @param {string} username
  //  * @param {number} [showdeleted]
  //  * @returns
  //  * @memberof KeyholderData
  //  */
  // public async getByUsername(username: string, showdeleted?: number) {
  //   return this.get({ username, showdeleted: showdeleted })
  // }
}
