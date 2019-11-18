import { ListLocks } from './api/ListLocks';
import { Ticker } from './api/Ticker';
export declare type ChastiKeyEndpoint = 'combinations.php' | 'listlocks.php' | 'listlocks2.php';
export interface IChastiKeyOptions {
    baseURL?: string;
    repo?: 'api' | 'json';
    apiVersion?: 'v0.2' | 'v0.3' | 'v0.4' | 'v1.0' | '';
}
export interface IChastiKeyParam {
    [key: string]: boolean | number | string;
}
export interface IChastiKeyLegacyResponse {
    response: Array<{
        status: 200 | 204 | 400;
        message: string;
        timestampGenerated: number;
    }>;
}
export declare class ChastiKey {
    config: IChastiKeyOptions;
    constructor(options?: IChastiKeyOptions);
    ListLocks: ListLocks;
    Ticker: Ticker;
}
