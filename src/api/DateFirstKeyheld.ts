import * as Objects from '../objects/'
import { APIBase } from '../APIBase'
import { DateFirstKeyheldResponse } from '../objects/'

/**
 * **Cached Date First keyheld for all public keyholders**
 *
 * - Cached: `15 Minutes`
 * @export
 * @class DateFirstKeyheld
 * @extends {APIBase}
 */
export class DateFirstKeyheld extends APIBase {
  protected repo = 'json'
  protected name = 'DateFirstKeyheld'

  /**
   * **Fetches the scheduled data export for date first keyheld**
   * @returns {Promise<DateFirstKeyheldResponse>}
   * @memberof DateFirstKeyheld
   */
  public async get(): Promise<DateFirstKeyheldResponse> {
    return new DateFirstKeyheldResponse(
      await this.requestDataExport<Objects.DateFirstKeyheldEntry>('date_first_keyheld.json')
    )
  }
}
