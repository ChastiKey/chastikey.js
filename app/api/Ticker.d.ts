import { APIBase } from '../APIBase';
export interface ITickerGetParams {
    username: string;
    type: 'Keyholder' | 'Lockee';
    show5StarRating: boolean;
    optional?: {
        startDate?: {
            day: string;
            month: string;
            year: string;
        };
        fileExt?: 'jpg' | 'png' | 'gif';
        addTimestamp?: boolean;
    };
}
export declare class Ticker extends APIBase {
    getURL(params: ITickerGetParams): Promise<string>;
}
