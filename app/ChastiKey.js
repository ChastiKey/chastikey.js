"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ListLocks_1 = require("./api/ListLocks");
const Ticker_1 = require("./api/Ticker");
class ChastiKey {
    constructor(options) {
        this.config = {
            baseURL: `https://chastikey.com`,
            repo: 'api',
            apiVersion: 'v0.3'
        };
        this.ListLocks = new ListLocks_1.ListLocks(this.config);
        this.Ticker = new Ticker_1.Ticker(this.config);
        if (options)
            Object.assign(this.config, options);
    }
}
exports.ChastiKey = ChastiKey;
//# sourceMappingURL=ChastiKey.js.map