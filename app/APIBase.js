"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const errors_1 = require("./errors");
class APIBase {
    constructor(conf) {
        this.config = {
            baseURL: `https://chastikey.com`,
            repo: 'api',
            apiVersion: 'v0.4'
        };
        this.config = conf || this.config;
    }
    get baseURLBuilt() {
        return `${this.config.baseURL}/${this.config.repo}/${this.config.apiVersion}/`;
    }
    paramsBuilder(params) {
        var queryStr = '';
        Object.keys(params).forEach((key, i) => {
            const valueType = typeof params[key];
            var valueTransformed;
            if (valueType === 'boolean')
                valueTransformed = params[key] ? true : false;
            else
                valueTransformed = params[key];
            queryStr += i > 0 ? `&=${key}=${valueTransformed}` : `?${key}=${valueTransformed}`;
        });
        return queryStr;
    }
    request(endpoint, params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = (yield axios_1.default.get(`${this.baseURLBuilt}${endpoint}${typeof params !== 'string' ? this.paramsBuilder(params) : params}`));
                return response.data;
            }
            catch (error) {
                throw new errors_1.FetchError(error.response ? error.response.status : 999, error.message);
            }
        });
    }
}
exports.APIBase = APIBase;
//# sourceMappingURL=APIBase.js.map