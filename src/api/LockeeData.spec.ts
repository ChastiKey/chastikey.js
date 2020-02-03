require('dotenv').config()
import test from 'ava'
import { ChastiKey } from '../ChastiKey'
import { LockeeDataResponse } from '../objects'

var resp: LockeeDataResponse = null

test.before('Test fetch LockeeData -> LockeeData.get({ params })', async t => {
  const ck = new ChastiKey({
    clientID: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRET,
    rapidAPIKey: process.env.RAPIDAPIKEY
  })
  resp = await ck.LockeeData.get({ username: 'emma', showdeleted: true })
})

test('Test LockeeData Has Data -> LockeeDataResponse', async t => {
  t.is(resp.response.status === 200, true)
  t.is(resp.data.userID !== undefined, true)
})

test('Test LockeeData Search -> LockeeData.search( { fixed: 1 })', async t => {
  const searchResults = resp.search({ fixed: 1 })
  t.is(searchResults.length > 0, true)
})
