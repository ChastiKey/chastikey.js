require('dotenv').config()
import test from 'ava'
import { ChastiKey } from '../ChastiKey'
import { UserDataResponse } from '../objects'

var resp: UserDataResponse = null

test.before('Test fetch UserData -> UserData.get({ params })', async t => {
  const ck = new ChastiKey({
    clientID: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRET,
    rapidAPIKey: process.env.RAPIDAPIKEY
  })
  resp = await ck.UserData.get()
  t.is(resp.users.length > 0, true)
})

test('Test UserData Search -> UserData.search( { username: /^e/i })', async t => {
  const searchResults = resp.search({ username: /^e/i })
  t.is(searchResults.length > 0, true)
})
