import * as Objects from '../objects'
import { APIBase } from '../APIBase'
import { IChastiKeyParam } from '../ChastiKey'

interface ILockeeDataGetParams extends IChastiKeyParam {
  username: string
  discordid?: string
  showdeleted?: number
}

/**
 * **Query the API for the specified user**
 * @export
 * @class LockeeData
 * @extends {APIBase}
 */
export class LockeeData extends APIBase {
  protected repo = 'api'

  /**
   * **Fetches the specified user's locks & Basic account data/stats**
   * @param {ILockeeDataGetParams} params
   * @returns {Promise<Objects.LockeeDataResponse>}
   * @memberof LockeeData
   */
  public async get(params: ILockeeDataGetParams): Promise<Objects.LockeeDataResponse> {
    return new Objects.LockeeDataResponse(
      await this.request<Objects.LockeeDataResponse, ILockeeDataGetParams>('lockeedata.php', params)
    )
  }

  // /**
  //  * **(Alternative) Fetches the specified user's locks**
  //  * @param {string} username
  //  * @param {number} [showdeleted]
  //  * @returns
  //  * @memberof LockeeData
  //  */
  // public async getByUsername(username: string, showdeleted?: number) {
  //   return this.get({ username, showdeleted: showdeleted })
  // }
}
