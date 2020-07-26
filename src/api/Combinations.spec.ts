require('dotenv').config()
import test from 'ava'
import { ChastiKey } from '../ChastiKey'
import { CombinationsResponse } from '../objects'

// Store response outside .before in order to perofrm later tests
var resp: CombinationsResponse

test.before('Test fetch Combinations -> Combinations.get({ params })', async t => {
  const ck = new ChastiKey({
    clientID: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRET,
    rapidAPIKey: process.env.RAPIDAPIKEY
  })
  resp = await ck.Combinations.get({ username: 'emma' })
  t.is(resp.response.status, 200)
  t.is(resp.locks.length > 0, true)
})

test('Test Combinations Search -> Combinations.search( { build: /[0-9]{1,4}/ })', async t => {
  const searchResults = resp.search({ build: /[0-9]{1,4}/ })
  t.is(searchResults.length > 0, true)
})
