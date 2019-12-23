require('dotenv').config()
import test from 'ava'
import { ChastiKey } from '../ChastiKey'

test('Test fetch KeyholderData -> KeyholderData.get({ params })', async t => {
  const ck = new ChastiKey({
    clientID: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRET,
    rapidAPIKey: process.env.RAPIDAPIKEY
  })
  const resp = await ck.KeyholderData.get({ username: 'MistressAlyona' })
  t.is(resp.locks.length > 0, true)
})

// test('Test fetch KeyholderData -> KeyholderData.getByUsername( <username> )', async t => {
//   const ck = new ChastiKey({
//     api: {
//       clientID: process.env.CLIENTID,
//       clientSecret: process.env.CLIENTSECRET
//     }
//   })
//   const resp = await ck.KeyholderData.getByUsername('emma')
//   t.is(resp.locks.length > 0, true)
// })
