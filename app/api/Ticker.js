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
const APIBase_1 = require("../APIBase");
class Ticker extends APIBase_1.APIBase {
    getURL(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const opts = Object.assign({
                startDate: null,
                fileExt: null,
                addTimestamp: null
            }, params.optional);
            const tickerType = params.type === 'Keyholder' ? '1' : '2';
            const un = `&un=${params.username}`;
            const r = `&r=${params.show5StarRating ? '1' : '0'}`;
            const ts = opts.addTimestamp ? `&ts=${Date.now()}` : '';
            const ext = opts.fileExt ? `&ext=.${opts.fileExt}` : '';
            const fd = opts.startDate
                ? `&fd=${opts.startDate.year || '2016'}-${opts.startDate.month || '01'}-${opts.startDate.day || '01'}`
                : '';
            return `https://chastikey.com/tickers/ticker.php?ty=${tickerType}${ts}${un}${fd}${r}${ext}`;
        });
    }
}
exports.Ticker = Ticker;
//# sourceMappingURL=Ticker.js.map