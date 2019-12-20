import test from 'ava'
import { ChastiKey } from '../ChastiKey'
import { DateFirstKeyheldResponse } from '../objects'

// Since this is a BIG export, put the data here to save sending the same query over
const ck = new ChastiKey()
var resp: DateFirstKeyheldResponse

test.before('Test fetch DateFirstKeyheld -> DateFirstKeyheld.get()', async t => {
  resp = await ck.DateFirstKeyheld.get()
  t.is(resp.keyholders.length > 0, true)
})

test('Test DateFirstKeyheld Search -> DateFirstKeyheld.search( { username: /^e/i })', async t => {
  const searchResults = resp.search({ username: /^e/i })
  t.is(searchResults.length > 0, true)
})
