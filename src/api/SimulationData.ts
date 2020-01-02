import * as Objects from '../objects'
import { APIBase } from '../APIBase'
import { IChastiKeyParam } from '../ChastiKey'

interface ISimulationDataGetParams extends IChastiKeyParam {
  MinMinutes?: number
  MaxMinutes?: number
}

/**
 * **Query the API Locks from all keyholders that fall within the Min and/or Max simulated times**
 * @export
 * @class SimulationData
 * @extends {APIBase}
 */
export class SimulationData extends APIBase {
  protected repo = 'api'

  /**
   * **Fetch Locks that fall within the simulated time ranges**
   * @param {ISimulationDataGetParams} params
   * @returns {Promise<Objects.SimulationDataResponse>}
   * @memberof SimulationData
   */
  public async get(params: ISimulationDataGetParams): Promise<Objects.SimulationDataResponse> {
    return new Objects.SimulationDataResponse(
      await this.request<Objects.SimulationDataResponse, ISimulationDataGetParams>('simulationdata.php', params)
    )
  }
}
