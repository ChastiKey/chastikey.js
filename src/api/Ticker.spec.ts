import test from 'ava'
import { ChastiKey } from '../ChastiKey'

test('[Direct] Test get Ticker URL Lockee', async t => {
  const ck = new ChastiKey()
  const lockee = await ck.Ticker.getURL({ username: 'Emma', type: 'Lockee', show5StarRating: true })
  t.is(lockee, 'https://chastikey.com/tickers/ticker.php?ty=2&un=Emma&r=1')
})

test('[Direct] Test get Ticker URL Keyholder', async t => {
  const ck = new ChastiKey()
  const keyholder = await ck.Ticker.getURL({
    username: 'Emma',
    type: 'Keyholder',
    show5StarRating: false,
    optional: { fileExt: 'png' }
  })
  t.is(keyholder, 'https://chastikey.com/tickers/ticker.php?ty=1&un=Emma&r=0&ext=.png')
})
