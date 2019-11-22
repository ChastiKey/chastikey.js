# chastikey.js

[![travis-ci](https://img.shields.io/travis/ChastiKey/chastikey.js/master.svg?style=flat-square)](https://travis-ci.org/ChastiKey/chastikey.js)
[![travis-ci](https://img.shields.io/npm/v/chastikey.js.svg?style=flat-square)](https://www.npmjs.com/package/chastikey.js)

## How to install

Yarn

```sh
yarn add chastikey.js
```

NPM

```sh
npm i chastikey.js
```

---

## Usage

### `ChastiKey`

Available Options:

| Key        | Accepts Type(s) | Default                 | Available/Example                 |
| ---------- | --------------- | ----------------------- | --------------------------------- |
| baseURL    | `string`        | `https://chastikey.com` |
| repo       | `string`        | `api`                   | `api`, `json`                     |
| apiVersion | `string`        | `v0.4`                  | `v0.2`, `v0.3`, `v0.4`, (`1.0`\*) |

> **\*1.0** - is only for the JSON exports, NOT for regular lookups.

Importing & Setup:

```ts
// ==================
// Examples for JS:
// ==================
const { ChastiKey } from 'chastikey.js';
// Then you're ready for:
new ChastiKey()...

// ==================
var CK from 'chastikey.js';
// Then you're ready for:
new CK.ChastiKey()...

// ******************
// ******************

// ==================
// Examples for TS:
// ==================
import { ChastiKey } from 'chastikey.js'
// Then you're ready for:
new ChastiKey()...
```

---

### `ChastiKey.ListLocks`

Retrieves the specified user's locks.

ChastiKey Side Caching: `[ Yes ]` `[ 60 Seconds ]`

Available Options:

| Key         | Required? | Accepts Type(s) | Default |
| ----------- | :-------: | --------------- | ------- |
| username    |    Yes    | `string`        |         |
| showdeleted |    No     | `boolean`       | `false` |
| bot         |    No     | `string`        |         |

API Usage:

```ts
const ll = await new ChastiKey().ListLocks.get({ username: 'username' })
const ll = await new ChastiKey().ListLocks.getByUsername('username')

ll // => { status: 200, locks: Array<ListLocksLock>, ... }
```

#### [`ListLocks`] Available Computed Values / Helpers

**`clResp.getLocked`: Array<`ListLocksLock`>**

**`ListLocksLock.isLocked`: boolean**

**`ListLocksLock.isUnlocked`: boolean**

**`ListLocksLock.isAbandoned`: boolean**

**`ListLocksLock.totalTimeLocked`: number**

---

### `ChastiKey.CheckLock`

Retrieves the specified user's lock.

ChastiKey Side Caching: `[ Yes ]` `[ 60 Seconds ]`

Available Options:

| Key      | Required? | Accepts Type(s) | Default |
| -------- | :-------: | --------------- | ------- |
| username |    Yes    | `string`        |         |
| lockid   |    Yes    | `string`        |         |
| bot      |    No     | `string`        |         |

API Usage:

```ts
const clResp = await new ChastiKey().CheckLock.get({ username: 'username', lockid: '123456' })
const clResp = await new ChastiKey().CheckLock.getByUsername('username', '123456')

clResp // => { status: 200, locks: Array<ListLocksLock>, ... } // Yes, It does use the same ListLocksLock type
```

#### [`CheckLock`] Available Computed Values / Helpers

**`clResp.getLocked`: Array<`ListLocksLock`>**

**`ListLocksLock.isLocked`: boolean**

**`ListLocksLock.isUnlocked`: boolean**

**`ListLocksLock.isAbandoned`: boolean**

**`ListLocksLock.totalTimeLocked`: number**

---

### `ChastiKey.Ticker`

Creates the URL string to the user's Ticker.

ChastiKey Side Caching: `[ No ]`

Available Options:

| Key                     | Required? | Accepts Type(s) | Available/Example                         |
| ----------------------- | :-------: | --------------- | ----------------------------------------- |
| username                |    Yes    | `string`        |
| type                    |    Yes    | `string`        | `Lockee`, `Keyholder`                     |
| show5StarRating         |    Yes    | `boolean`       |
| optional                |    No     | `object`        |
| `optional.startDate`    |    No     | `object`        | `{ day: '01', month: '01', year: '2019'}` |
| `optional.fileExt`      |    No     | `string`        | `jpg` ,`png` , `gif`                      |
| `optional.addTimestamp` |    No     | `boolean`       |                                           |

API Usage:

```ts
const ticker = new ChastiKey().Ticker.getURL({
  username: 'UsernameHere',
  type: 'Keyholder',
  show5StarRating: false,
  optional: { fileExt: 'png' }
})

ticker // => "https://chastikey.com/tickers/ticker.php?ty=1&un=UsernameHere&r=0&ext=.png"
```

---

### `ChastiKey.CompletedLocks`

Retrieves the current data export JSON of completed locks.

ChastiKey Side Caching: `[ Yes ]` `[ 15 Minutes ]`

Available Options: None

API Usage:

```ts
const completedResp = await new ChastiKey().CompletedLocks.get()

completedResp // => { locks: Array<CompletedLocksLock>, search: HelperFunc }
```

#### [`CompletedLocks`] Available Computed Values / Helpers

#### `completedResp.search( { searchBy: RegExp | value }, ... )`

Usage Example(s):

```ts
resp.search({ username: /^e/i }, { build: 133 })
```

---

## License

MIT
