import * as Objects from '../objects/'
import { APIBase } from '../APIBase'
import { UserDataResponse } from '../objects/'

/**
 * **Retrieves the current public user data export JSON**
 *
 * - Cached: `15 Minutes`
 * - Requirement: `ActiveInApp <= 2 weeks`
 * @export
 * @class UserData
 * @extends {APIBase}
 */
export class UserData extends APIBase {
  protected repo = 'api'

  /**
   * **Fetches the scheduled data export for current public user data**
   * @returns {Promise<UserDataResponse>}
   * @memberof UserData
   */
  public async get(): Promise<UserDataResponse> {
    return new UserDataResponse(await this.request<Objects.UserDataResponse>('userdata.php'))
  }
}
