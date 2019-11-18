"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FetchError extends Error {
    constructor(code, message) {
        super(message);
        this.code = code;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.FetchError = FetchError;
//# sourceMappingURL=errors.js.map