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
const ChastiKey_1 = require("./ChastiKey");
ava_1.default('Creating a new ChastiKey instance for requests', t => {
    const ck = new ChastiKey_1.ChastiKey();
    t.is(typeof ck.config, 'object');
});
ava_1.default('Test fetch ListLocks', (t) => __awaiter(void 0, void 0, void 0, function* () {
    const ck = new ChastiKey_1.ChastiKey();
    const resp = yield ck.ListLocks.get({ username: 'emma', showdeleted: true });
    t.is(resp.locks.length > 0, true);
}));
ava_1.default('Test fetch failure throws', (t) => __awaiter(void 0, void 0, void 0, function* () {
    const ck = new ChastiKey_1.ChastiKey();
    yield t.throwsAsync(() => __awaiter(void 0, void 0, void 0, function* () {
        ck.config.apiVersion = '';
        ck.config.baseURL = 'https://chastikey.com/ap';
        t.is(ck.ListLocks.config.apiVersion, '');
        t.is(ck.ListLocks.config.baseURL, 'https://chastikey.com/ap');
        yield ck.ListLocks.get({ username: 'Emma' });
    }));
}));
//# sourceMappingURL=ChastiKey.spec.js.map