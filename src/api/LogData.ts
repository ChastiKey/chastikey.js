import * as Objects from '../objects'
import { APIBase } from '../APIBase'
import { IChastiKeyParam } from '../ChastiKey'

interface ILogDataGetParams extends IChastiKeyParam {
  username?: string
  discordid?: string
  logid?: number
  lockid?: number
}

/**
 * **Query the API for the specified user's Lock Log Data**
 * @export
 * @class LogData
 * @extends {APIBase}
 */
export class LogData extends APIBase {
  protected repo = 'api'
  protected name = 'LogData'

  /**
   * **Fetches the specified lock's log ata**
   * @param {ILogDataGetParams} params
   * @returns {Promise<Objects.LogDataResponse>}
   * @memberof LogData
   */
  public async get(params: ILogDataGetParams): Promise<Objects.LogDataResponse> {
    return new Objects.LogDataResponse(
      await this.request<Objects.LogDataResponse, ILogDataGetParams>('logdata.php', params)
    )
  }
}
