import test from 'ava'
import { ChastiKey } from '../ChastiKey'
import { KeyholderTotalLocksManagedResponse } from '../objects'

// Since this is a BIG export, put the data here to save sending the same query over
const ck = new ChastiKey()
var resp: KeyholderTotalLocksManagedResponse

test.before('Test fetch KeyholderTotalLocksManaged -> KeyholderTotalLocksManaged.get()', async t => {
  resp = await ck.KeyholderTotalLocksManaged.get()
  t.is(resp.keyholders.length > 0, true)
})

test('Test KeyholderTotalLocksManaged Search -> KeyholderTotalLocksManaged.search( { username: /^e/i })', async t => {
  const searchResults = resp.search({ username: /^e/i })
  t.is(searchResults.length > 0, true)
})
