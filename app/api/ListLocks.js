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
const Objects = require("../objects/");
const APIBase_1 = require("../APIBase");
class ListLocks extends APIBase_1.APIBase {
    get(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Objects.ListLocksResponse(yield this.request('listlocks2.php', params));
        });
    }
    getByUsername(username, showdeleted, bot) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get({ username: username, showdeleted: showdeleted !== undefined ? showdeleted : false, bot: bot });
        });
    }
}
exports.ListLocks = ListLocks;
//# sourceMappingURL=ListLocks.js.map