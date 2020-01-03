require('dotenv').config()
import test from 'ava'
import { ChastiKey } from '../ChastiKey'
import { SimulationDataResponse } from '../objects'

var resp: SimulationDataResponse = null

test.before('Test fetch SimulationData -> SimulationData.get({ params })', async t => {
  const ck = new ChastiKey({
    clientID: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRET,
    rapidAPIKey: process.env.RAPIDAPIKEY
  })
  resp = await ck.SimulationData.get({ MinMinutes: 60, MaxMinutes: 600 })
})

test('Test SimulationData Has Data -> SimulationDataResponse', async t => {
  t.is(resp.response.status === 200, true)
  t.is(resp.locks.length > 0, true)
})
