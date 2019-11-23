import test from 'ava'
import { ChastiKey } from './ChastiKey'

var ck: ChastiKey

test.before('Creating a new ChastiKey instance for requests', t => {
  ck = new ChastiKey()
  t.is(typeof ck.apiConfig, 'object')
})

test('Has .CheckLock', t => {
  t.is(typeof ck.CheckLock, 'object')
})
test('Has .ListLocks', t => {
  t.is(typeof ck.ListLocks, 'object')
})
test('Has .Ticker', t => {
  t.is(typeof ck.Ticker, 'object')
})
test('Has .CompletedLocks', t => {
  t.is(typeof ck.CompletedLocks, 'object')
})
test('Has .DateFirstKeyheld', t => {
  t.is(typeof ck.DateFirstKeyheld, 'object')
})
test('Has .KeyholderTotalLocksManaged', t => {
  t.is(typeof ck.KeyholderTotalLocksManaged, 'object')
})
test('Has .RunningLocks', t => {
  t.is(typeof ck.RunningLocks, 'object')
})

test('Test fetch ListLocks', async t => {
  const resp = await ck.ListLocks.get({ username: 'emma', showdeleted: true })
  t.is(resp.locks.length > 0, true)
})
