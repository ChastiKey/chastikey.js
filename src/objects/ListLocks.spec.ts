import test from 'ava'
import { ListLocksResponse, ListLocksLock } from '.'

// Used later
var getterTests = new ListLocksLock({
  lockID: 132412341,
  lockDeleted: 1,
  lockedBy: 'KeyholderName',
  lockFrozen: 0,
  timestampLocked: 1544224742,
  timestampUnlocked: 1544227504,
  status: 'UnlockedReal',
  combination: '561'
})

test('Initialize ListLocksResponse class with nothing', t => {
  const ll = new ListLocksResponse()
  t.is(ll.message, `Error! If you're seeing this ChastiKey has not responded an error.`)
})

test('Initialize ListLocksResponse class with data', t => {
  const ll = new ListLocksResponse({
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
  } as any)
  t.is(ll.message, `Success`)
})

test('Initialize ListLocksLock class with nothing', t => {
  const lll = new ListLocksLock()
  t.is(lll.lockID, undefined)
})

test('Initialize ListLocksLock class with data, testing getters', t => {
  t.is(getterTests.lockID, 132412341)
})

test('ListLocksLock getter => .isAbandoned', t => {
  t.is(getterTests.isAbandoned, false)
})
test('ListLocksLock getter => .isUnlocked', t => {
  t.is(getterTests.isUnlocked, true)
})
test('ListLocksLock getter => .isLocked', t => {
  t.is(getterTests.isLocked, false)
})
test('ListLocksLock getter => .totalTimeLocked', t => {
  t.is(getterTests.totalTimeLocked, 1544227504 - 1544224742)
})
