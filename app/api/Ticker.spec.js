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
const ava_1 = require("ava");
const ticker_1 = require("./ticker");
ava_1.default('[Direct] Test get Ticker URL Lockee', (t) => __awaiter(void 0, void 0, void 0, function* () {
    const ticker = new ticker_1.Ticker();
    const lockee = yield ticker.getURL({ username: 'Emma', type: 'Lockee', show5StarRating: true });
    t.is(lockee, 'https://chastikey.com/tickers/ticker.php?ty=2&un=Emma&r=1');
}));
ava_1.default('[Direct] Test get Ticker URL Keyholder', (t) => __awaiter(void 0, void 0, void 0, function* () {
    const ticker = new ticker_1.Ticker();
    const keyholder = yield ticker.getURL({
        username: 'Emma',
        type: 'Keyholder',
        show5StarRating: false,
        optional: { fileExt: 'png' }
    });
    t.is(keyholder, 'https://chastikey.com/tickers/ticker.php?ty=1&un=Emma&r=0&ext=.png');
}));
//# sourceMappingURL=Ticker.spec.js.map