import test from 'ava'
import { DateFirstKeyheld } from './DateFirstKeyheld'
import { DateFirstKeyheldResponse } from '../objects'

// Since this is a BIG export, put the data here to save sending the same query over
const dfkh = new DateFirstKeyheld({ repo: 'json', apiVersion: 'v1.0' })
var resp: DateFirstKeyheldResponse

test.before('Test fetch DateFirstKeyheld -> DateFirstKeyheld.get()', async t => {
  resp = await dfkh.get()
  t.is(resp.keyholders.length > 0, true)
})

test('Test DateFirstKeyheld Search -> DateFirstKeyheld.search( { username: /^e/i })', async t => {
  const searchResults = resp.search({ username: /^e/i })
  t.is(searchResults.length > 0, true)
})
