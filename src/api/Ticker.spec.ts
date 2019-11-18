import test from 'ava'
import { Ticker } from './ticker'

test('[Direct] Test get Ticker URL Lockee', async t => {
  const ticker = new Ticker()
  const lockee = await ticker.getURL({ username: 'Emma', type: 'Lockee', show5StarRating: true })
  t.is(lockee, 'https://chastikey.com/tickers/ticker.php?ty=2&un=Emma&r=1')
})

test('[Direct] Test get Ticker URL Keyholder', async t => {
  const ticker = new Ticker()
  const keyholder = await ticker.getURL({
    username: 'Emma',
    type: 'Keyholder',
    show5StarRating: false,
    optional: { fileExt: 'png' }
  })
  t.is(keyholder, 'https://chastikey.com/tickers/ticker.php?ty=1&un=Emma&r=0&ext=.png')
})
