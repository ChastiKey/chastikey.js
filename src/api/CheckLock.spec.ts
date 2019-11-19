import test from 'ava'
import { CheckLock } from './CheckLock'

test('Test fetch CheckLock -> CheckLock.get({ params })', async t => {
  const ll = new CheckLock()
  const resp = await ll.get({ username: 'Emma', lockid: '1562291263' })
  t.is(resp.locks.length > 0, true)
})

test('Test fetch CheckLock -> CheckLock.getByUsername( <username>, <lockid> )', async t => {
  const ll = new CheckLock()
  const resp = await ll.getByUsername('Emma', '1562291263')
  t.is(resp.locks.length > 0, true)
})
