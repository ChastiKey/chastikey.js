require('dotenv').config()
import test from 'ava'
import ChastiKey from './ChastiKey'

var ck: ChastiKey

test.before('Creating a new ChastiKey instance for requests', t => {
  ck = new ChastiKey()
  t.is(typeof ck.apiConfig, 'object')
})

test('Has .CheckLock', t => {
  t.is(typeof ck.CheckLock, 'object')
})

test('Has CheckLock', t => {
  t.is(typeof ck.CheckLock, 'object')
})
test('Has Combinations', t => {
  t.is(typeof ck.Combinations, 'object')
})
test('Has KeyholderData', t => {
  t.is(typeof ck.KeyholderData, 'object')
})
test('Has ListLocks', t => {
  t.is(typeof ck.ListLocks, 'object')
})
test('Has LockeeData', t => {
  t.is(typeof ck.LockeeData, 'object')
})
test('Has LogData', t => {
  t.is(typeof ck.LogData, 'object')
})
test('Has RunningLocks', t => {
  t.is(typeof ck.RunningLocks, 'object')
})
test('Has SimulationData', t => {
  t.is(typeof ck.SimulationData, 'object')
})
test('Has Ticker', t => {
  t.is(typeof ck.Ticker, 'object')
})
test('Has UserData', t => {
  t.is(typeof ck.UserData, 'object')
})
test('Has CompletedLocks', t => {
  t.is(typeof ck.CompletedLocks, 'object')
})
test('Has DateFirstKeyheld', t => {
  t.is(typeof ck.DateFirstKeyheld, 'object')
})
test('Has KeyholderTotalLocksManaged', t => {
  t.is(typeof ck.KeyholderTotalLocksManaged, 'object')
})

test('Test fetch ListLocks', async t => {
  const resp = await ck.ListLocks.get({ username: 'emma', showdeleted: true })
  t.is(resp.locks.length > 0, true)
})

test('Test fetch Failure', async t => {
  const ck = new ChastiKey({
    clientID: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRET,
    rapidAPIKey: process.env.RAPIDAPIKEY
  })
  const resp = await ck.LockeeData.get({ username: '0000-0000' })
  t.is(resp.response.status, 400)
})
