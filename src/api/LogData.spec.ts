require('dotenv').config()
import test from 'ava'
import { ChastiKey } from '../ChastiKey'
import { LogDataResponse } from '../objects'

var resp: LogDataResponse = null

test.before('Test fetch LogData -> LogData.get({ params })', async t => {
  const ck = new ChastiKey({
    clientID: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRET,
    rapidAPIKey: process.env.RAPIDAPIKEY
  })
  resp = await ck.LogData.get({ username: 'Emma', logID: 1584193036, lockID: 1584193029 })
})

test('Test LogData Has Data -> LogDataResponse', async t => {
  t.is(resp.response.status === 200, true)
  t.is(resp.log.length > 0, true)
})
