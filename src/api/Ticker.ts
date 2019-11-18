import { APIBase } from '../APIBase'

export interface ITickerGetParams {
  username: string
  type: 'Keyholder' | 'Lockee'
  show5StarRating: boolean
  optional?: {
    startDate?: { day: string; month: string; year: string }
    fileExt?: 'jpg' | 'png' | 'gif'
    addTimestamp?: boolean
  }
}

export class Ticker extends APIBase {
  /**
   * **Generates the Ticker URL**
   * @param {string} username
   * @param {('Keyholder' | 'Lockee')} type
   * @param {boolean} show5StarRating
   * @param {ITickerGetParams} params
   * @returns
   * @memberof Ticker
   */
  public async getURL(params: ITickerGetParams) {
    const opts = Object.assign(
      {
        startDate: null,
        fileExt: null,
        addTimestamp: null
      },
      params.optional
    )
    // Break url into parts for easier building
    const tickerType = params.type === 'Keyholder' ? '1' : '2'
    const un = `&un=${params.username}`
    const r = `&r=${params.show5StarRating ? '1' : '0'}`
    const ts = opts.addTimestamp ? `&ts=${Date.now()}` : ''
    const ext = opts.fileExt ? `&ext=.${opts.fileExt}` : ''
    const fd = opts.startDate
      ? `&fd=${opts.startDate.year || '2016'}-${opts.startDate.month || '01'}-${opts.startDate.day || '01'}`
      : ''

    return `https://chastikey.com/tickers/ticker.php?ty=${tickerType}${ts}${un}${fd}${r}${ext}`
  }
}
