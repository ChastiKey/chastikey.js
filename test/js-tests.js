const test = require('ava')
const { ChastiKey } = require('../app/ChastiKey')

test('Creating a new ChastiKey instance for requests', t => {
  const ck = new ChastiKey()
  t.is(typeof ck.apiConfig, 'object')
})

test('Test fetch ListLocks', t => {
  const ck = new ChastiKey()
  return ck.ListLocks.get({ username: 'emma', showdeleted: true })
    .then(resp => {
      t.is(resp.locks.length > 0, true)
    })
})
