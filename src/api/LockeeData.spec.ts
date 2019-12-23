require('dotenv').config()
import test from 'ava'
import { ChastiKey } from '../ChastiKey'

test('Test fetch LockeeData -> LockeeData.get({ params })', async t => {
  const ck = new ChastiKey({
    clientID: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRET,
    rapidAPIKey: process.env.rapidAPIKey
  })
  const resp = await ck.LockeeData.get({ username: 'emma' })
  t.is(resp.locks.length > 0, true)
})

// test('Test fetch LockeeData -> LockeeData.getByUsername( <username> )', async t => {
//   const ck = new ChastiKey({
//     api: {
//       clientID: process.env.CLIENTID,
//       clientSecret: process.env.CLIENTSECRET
//     }
//   })
//   const resp = await ck.LockeeData.getByUsername('emma')
//   t.is(resp.locks.length > 0, true)
// })
