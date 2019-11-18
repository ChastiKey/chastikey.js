"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListLocksResponse {
    constructor(init) {
        this.status = 400;
        this.message = `Error! If you're seeing this ChastiKey has not responded an error.`;
        this.timestampGenerated = Date.now() / 1000;
        this.locks = [];
        if (init) {
            if (Array.isArray(init.response)) {
                const legacyResp = init.response[0];
                this.status = legacyResp.status;
                this.message = legacyResp.message;
                this.timestampGenerated = legacyResp.timestampGenerated;
            }
            else {
                this.status = init.status;
                this.message = init.message;
                this.timestampGenerated = init.timestampGenerated;
            }
            if (init.locks)
                this.locks = init.locks.map(l => new ListLocksLock(l));
        }
    }
    get getLocked() {
        return this.locks.filter(l => l.isLocked);
    }
}
exports.ListLocksResponse = ListLocksResponse;
class ListLocksLock {
    constructor(init) {
        Object.assign(this, init || {});
    }
    get isLocked() {
        return this.timestampUnlocked === 0;
    }
    get isUnlocked() {
        return this.status === 'UnlockedReal';
    }
    get isAbandoned() {
        return this.lockDeleted === 1 && this.timestampUnlocked === 0;
    }
    get totalTimeLocked() {
        return this.isLocked ? Date.now() / 1000 - this.timestampLocked : this.timestampUnlocked - this.timestampLocked;
    }
}
exports.ListLocksLock = ListLocksLock;
//# sourceMappingURL=ListLocks.js.map