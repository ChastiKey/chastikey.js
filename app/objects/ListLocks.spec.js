"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const _1 = require(".");
var getterTests = new _1.ListLocksLock({
    lockID: 132412341,
    lockDeleted: 1,
    lockedBy: 'KeyholderName',
    lockFrozen: 0,
    timestampLocked: 1544224742,
    timestampUnlocked: 1544227504,
    status: 'UnlockedReal',
    combination: '561'
});
ava_1.default('Initialize ListLocksResponse class with nothing', t => {
    const ll = new _1.ListLocksResponse();
    t.is(ll.message, `Error! If you're seeing this ChastiKey has not responded an error.`);
});
ava_1.default('Initialize ListLocksResponse class with data', t => {
    const ll = new _1.ListLocksResponse({
        response: [
            {
                status: 200,
                message: 'Success',
                timestampGenerated: 1573783624
            }
        ],
        locks: [
            {
                lockID: 132412341,
                lockDeleted: 1,
                lockedBy: 'KeyholderName',
                lockFrozen: 0,
                timestampLocked: 1544224742,
                timestampUnlocked: 1544227504,
                status: 'UnlockedReal',
                combination: '561'
            }
        ]
    });
    t.is(ll.message, `Success`);
});
ava_1.default('Initialize ListLocksLock class with nothing', t => {
    const lll = new _1.ListLocksLock();
    t.is(lll.lockID, undefined);
});
ava_1.default('Initialize ListLocksLock class with data, testing getters', t => {
    t.is(getterTests.lockID, 132412341);
});
ava_1.default('ListLocksLock getter => .isAbandoned', t => {
    t.is(getterTests.isAbandoned, false);
});
ava_1.default('ListLocksLock getter => .isUnlocked', t => {
    t.is(getterTests.isUnlocked, true);
});
ava_1.default('ListLocksLock getter => .isLocked', t => {
    t.is(getterTests.isLocked, false);
});
ava_1.default('ListLocksLock getter => .totalTimeLocked', t => {
    t.is(getterTests.totalTimeLocked, 1544227504 - 1544224742);
});
//# sourceMappingURL=ListLocks.spec.js.map