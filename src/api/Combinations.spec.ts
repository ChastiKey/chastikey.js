require('dotenv').config()
import test from 'ava'
import { ChastiKey } from '../ChastiKey'

test('Test fetch Combinations -> Combinations.get({ params })', async t => {
  const ck = new ChastiKey({
    clientID: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRET,
    rapidAPIKey: process.env.RAPIDAPIKEY
  })
  const resp = await ck.Combinations.get({ username: 'emma' })
  t.is(resp.response.status, 200)
  t.is(resp.locks.length > 0, true)
})

// test('Test fetch Combinations -> Combinations.getByUsername( <username> )', async t => {
//   const ck = new ChastiKey({
//     api: {
//       clientID: process.env.CLIENTID,
//       clientSecret: process.env.CLIENTSECRET
//     }
//   })
//   const resp = await ck.Combinations.getByUsername('emma')
//   t.is(resp.locks.length > 0, true)
// })
