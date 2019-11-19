import test from 'ava'
import { ListLocks } from './ListLocks'

test('Test fetch ListLocks -> ListLocks.get({ params })', async t => {
  const ll = new ListLocks()
  const resp = await ll.get({ username: 'emma', showdeleted: true })
  t.is(resp.locks.length > 0, true)
})

test('Test fetch ListLocks failure -> ListLocks.get({ params })', async t => {
  const resp = await new ListLocks().get({ username: 'Emm-a' })
  t.is(resp.status, 400)
})

test('Test fetch by username -> ListLocks.getByUsername( <username> )', async t => {
  const resp = await new ListLocks().getByUsername('Emma')
  t.is(resp.status, 200)
})

// test('Test fetch by DiscordID -> ListLocks.getByDiscordID( <discord_id> )', async t => {
//   const resp = await new ListLocks().getByDiscordID('000')
//   t.is(resp.status, 200)
// })
