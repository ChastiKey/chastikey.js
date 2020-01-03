import test from 'ava'
import { ChastiKey } from '../ChastiKey'
import { CompletedLocksResponse } from '../objects'

// Since this is a BIG export, put the data here to save sending the same query over
const ck = new ChastiKey()
var resp: CompletedLocksResponse

test.before('Test fetch CompletedLocks -> CompletedLocks.get()', async t => {
  resp = await ck.CompletedLocks.get()
  t.is(resp.locks.length > 0, true)
})

test('Test CompletedLocks Search -> CompletedLocks.search( { username: /^e/i }, { build: 133 } )', async t => {
  const searchResults = resp.search({ username: /^e/i }, { build: 133 })
  t.is(searchResults.length > 0, true)
})
