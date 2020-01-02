require('dotenv').config()
import test from 'ava'
import { ChastiKey } from '../ChastiKey'
import { RunningLocksResponse } from '../objects'

// Since this is a BIG export, put the data here to save sending the same query over
var resp: RunningLocksResponse

test.before('Test fetch RunningLocks -> RunningLocks.get()', async t => {
  const ck = new ChastiKey({
    clientID: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRET,
    rapidAPIKey: process.env.RAPIDAPIKEY
  })
  resp = await ck.RunningLocks.get()
})

test('Test RunningLocks Has Data -> RunningLocksResponse', async t => {
  t.is(resp.response.status === 200, true)
  t.is(resp.locks.length > 0, true)
})

test('Test RunningLocks Search -> RunningLocks.search( { username: /^e/i })', async t => {
  const searchResults = resp.search({ username: /^e/i })
  t.is(searchResults.length > 0, true)
})
