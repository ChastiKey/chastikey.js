import test from 'ava'
import { ChastiKey } from '../ChastiKey'

test('Test fetch CheckLock -> CheckLock.get({ params })', async t => {
  const ck = new ChastiKey()
  const resp = await ck.CheckLock.get({ username: 'Emma', lockid: '1562291263' })
  t.is(resp.locks.length > 0, true)
})

test('Test fetch CheckLock -> CheckLock.getByUsername( <username>, <lockid> )', async t => {
  const ck = new ChastiKey()
  const resp = await ck.CheckLock.getByUsername('Emma', '1562291263')
  t.is(resp.locks.length > 0, true)
})
