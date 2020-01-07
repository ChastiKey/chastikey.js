import * as Objects from '../objects'
import { APIBase } from '../APIBase'
import { IChastiKeyParam } from '../ChastiKey'

interface ICombinationsGetParams extends IChastiKeyParam {
  username?: string
  discordid?: string
  showdeleted?: number
}

/**
 * **Query the API for the specified user's past unlock combinations**
 * @export
 * @class Combinations
 * @extends {APIBase}
 */
export class Combinations extends APIBase {
  protected repo = 'api'
  protected name = 'Combinations'

  /**
   * **Perform fetch**
   * @param {ICombinationsGetParams} params
   * @returns {Promise<Objects.CombinationsResponse>}
   * @memberof Combinations
   */
  public async get(params: ICombinationsGetParams): Promise<Objects.CombinationsResponse> {
    return new Objects.CombinationsResponse(
      await this.request<Objects.CombinationsResponse, ICombinationsGetParams>('combinations.php', params)
    )
  }
}
