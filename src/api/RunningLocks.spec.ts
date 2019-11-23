import test from 'ava'
import { RunningLocks } from './RunningLocks'
import { RunningLocksResponse } from '../objects'

// Since this is a BIG export, put the data here to save sending the same query over
const khtlm = new RunningLocks({ repo: 'json', apiVersion: 'v1.0' })
var resp: RunningLocksResponse

test.before('Test fetch RunningLocks -> RunningLocks.get()', async t => {
  resp = await khtlm.get()
  t.is(resp.locks.length > 0, true)
})

test('Test RunningLocks Search -> RunningLocks.search( { username: /^e/i })', async t => {
  const searchResults = resp.search({ username: /^e/i })
  t.is(searchResults.length > 0, true)
})
