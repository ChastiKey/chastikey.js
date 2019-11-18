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
const ListLocks_1 = require("./ListLocks");
ava_1.default('[ Direct ] Test fetch ListLocks -> ListLocks.get({ params })', (t) => __awaiter(void 0, void 0, void 0, function* () {
    const ll = new ListLocks_1.ListLocks();
    const resp = yield ll.get({ username: 'emma', showdeleted: true });
    t.is(resp.locks.length > 0, true);
}));
ava_1.default('[ Direct ] Test fetch ListLocks failure -> ListLocks.get({ params })', (t) => __awaiter(void 0, void 0, void 0, function* () {
    const resp = yield new ListLocks_1.ListLocks().get({ username: 'Emm-a' });
    t.is(resp.status, 400);
}));
ava_1.default('[ Direct ] Test fetch by username -> ListLocks.getByUsername( <username> )', (t) => __awaiter(void 0, void 0, void 0, function* () {
    const resp = yield new ListLocks_1.ListLocks().getByUsername('Emma');
    t.is(resp.status, 200);
}));
//# sourceMappingURL=ListLocks.spec.js.map