import test from 'ava'
import { ChastiKey } from './ChastiKey'

test('Creating a new ChastiKey instance for requests', t => {
  const ck = new ChastiKey()
  t.is(typeof ck.apiConfig, 'object')
})

test('Test fetch ListLocks', async t => {
  const ck = new ChastiKey()
  const resp = await ck.ListLocks.get({ username: 'emma', showdeleted: true })
  t.is(resp.locks.length > 0, true)
})
