import * as Objects from '../objects/';
import { APIBase } from '../APIBase';
import { IChastiKeyParam } from '../chastikey';
interface IListLocksGetParams extends IChastiKeyParam {
    username?: string;
    bot?: string;
    showdeleted?: boolean;
}
export declare class ListLocks extends APIBase {
    get(params: IListLocksGetParams): Promise<Objects.ListLocksResponse>;
    getByUsername(username: string, showdeleted?: boolean, bot?: string): Promise<Objects.ListLocksResponse>;
}
export {};
