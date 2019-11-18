import { ChastiKeyEndpoint, IChastiKeyOptions } from './ChastiKey';
export declare class APIBase {
    config: IChastiKeyOptions;
    constructor(conf?: IChastiKeyOptions);
    get baseURLBuilt(): string;
    protected paramsBuilder(params?: any): string;
    protected request<T, I>(endpoint: ChastiKeyEndpoint, params?: I): Promise<T>;
}
