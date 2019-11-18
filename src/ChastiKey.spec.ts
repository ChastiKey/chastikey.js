import test from 'ava'
import { ChastiKey } from './ChastiKey'

test('Creating a new ChastiKey instance for requests', t => {
  const ck = new ChastiKey()
  t.is(typeof ck.config, 'object')
})

test('Test fetch ListLocks', async t => {
  const ck = new ChastiKey()
  const resp = await ck.ListLocks.get({ username: 'emma', showdeleted: true })
  t.is(resp.locks.length > 0, true)
})

test('Test fetch failure throws', async t => {
  const ck = new ChastiKey()

  await t.throwsAsync(async () => {
    // Chnage the API
    ck.config.apiVersion = ''
    ck.config.baseURL = 'https://chastikey.com/ap'

    // Test after API change
    t.is(ck.ListLocks.config.apiVersion, '')
    t.is(ck.ListLocks.config.baseURL, 'https://chastikey.com/ap')

    // Test Fetch that throws
    await ck.ListLocks.get({ username: 'Emma' })
  })
})
