# chastikey.js

[![travis-ci](https://img.shields.io/travis/ChastiKey/chastikey.js/master.svg?style=flat-square)](https://travis-ci.org/ChastiKey/chastikey.js)
[![travis-ci](https://img.shields.io/npm/v/chastikey.js.svg?style=flat-square)](https://www.npmjs.com/package/chastikey.js)

## How to install / use

**Yarn**

```sh
yarn add chastikey.js
```

**NPM**

```sh
npm i chastikey.js
```

**Web Page** (Only tested with Chrome to date - will require user feedback)

Check [JSDelivr](https://www.jsdelivr.com/package/gh/ChastiKey/chastikey.js?path=dist) for builds available (Note: Only as of `>= 1.4.0`). Find it in the `/dist/` folder

```html
<script src="https://cdn.jsdelivr.net/gh/ChastiKey/chastikey.js@1.4.0/dist/ChastiKey.js"></script>
```

---

## Usage

### `ChastiKey`

Available Options:

| Key                     | Accepts Type(s) | Default                 | Available/Example      |
| ----------------------- | --------------- | ----------------------- | ---------------------- |
| `api.baseURL`           | `string`        | `https://chastikey.com` |
| `api.repo`              | `string`        | `api`                   | `api`, `json`          |
| `api.apiVersion`        | `string`        | `v0.5`                  | `v0.5`                 |
| `export.baseURL`        | `string`        | `https://chastikey.com` |
| `export.repo`           | `string`        | `export`                | `api`, `json`          |
| `export.apiVersion`     | `string`        | `1.0`                   | `1.0`\*                |
| `legacy.api.baseURL`    | `string`        | `https://chastikey.com` |
| `legacy.api.repo`       | `string`        | `api`                   | `api`, `json`          |
| `legacy.api.apiVersion` | `string`        | `v0.4`                  | `v0.2`, `v0.3`, `v0.4` |

> **\*1.0** - is only for the JSON exports, NOT for regular lookups.

Importing & Setup quick examples:

```js
// ==================
// Examples for JS:
// ==================
const ChastiKey = require('chastikey.js');
// Then you're ready for:
new ChastiKey().ListLocks.get( ... )
```

```ts
// ==================
// Examples for TS:
// ==================
import { ChastiKey } from 'chastikey.js'
// Then you're ready for:
new ChastiKey().ListLocks.get( ... )
```

```html
<!--
// ==================
// Examples for HTML:
// ==================
-->
<script src="https://cdn.jsdelivr.net/gh/ChastiKey/chastikey.js@1.4.0/dist/ChastiKey.js"></script>
// Then you're ready for:
<script>
  new ChastiKey().ListLocks.get( ... )
</script>
```

---

### `ChastiKey.LockeeData`

> **`clientID + clientSecret Required`**

Retrieves the specified user's lockee data _(Locks + Stats)_.

ChastiKey Side Caching: `[ No ]`

Available Options:

| Key        | Required? | Accepts Type(s) | Default |
| ---------- | :-------: | --------------- | :-----: |
| username   |    Yes    | `string`        |         |
| discordid  |    No     | `string`        |         |
| showdelete |    No     | `number`        |   `1`   |

API Usage:

```ts
const ld = await new ChastiKey({ api: { clientID: 'xxxx', clientSecret: 'xxxx' } }).LockeeData.get({
  username: 'username'
})

ld // => { status: 200, data: LockeeData, locks: Array<LockeeDataLock>, ... }
```

#### [`LockeeData`] Available Computed Values / Helpers

**`clResp.getLocked`: Array<`LockeeDataLock`>**

#### [`LockeeData.locks`] Available Computed Values / Helpers

**`isCardInfoHidden`: boolean**
**`isCumulative`: boolean**
**`combinationInt`: number**
**`isDeleted`: boolean**
**`isDiscarded`: boolean**
**`isFixed`: boolean**
**`isFrozen`: boolean**
**`isFrozenByCard`: boolean**
**`isFrozenByKeyholder`: boolean**
**`isLocked`: boolean**
**`isMultipleGreensRequired`: boolean**
**`isTimerHidden`: boolean**
**`isTrustedKeyholder`: boolean**
**`isUnlocked`: boolean**
**`totalTimeLocked`: number**

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

##### `completedResp.search( { searchBy: RegExp | value }, ... )`

Usage Example(s):

```ts
completedResp.search({ username: /^e/i }, { build: 133 })
```

---

### `ChastiKey.DateFirstKeyheld`

Retrieves the current data export JSON for Date First keyheld for all public keyholders.

ChastiKey Side Caching: `[ Yes ]` `[ 15 Minutes ]`

Available Options: None

API Usage:

```ts
const dfkh = await new ChastiKey().DateFirstKeyheld.get()

dfkh // => { keyholders: Array<DateFirstKeyheldEntry>, search: HelperFunc }
```

#### [`DateFirstKeyheld`] Available Computed Values / Helpers

##### `dfkh.search( { searchBy: RegExp | value }, ... )`

Usage Example(s):

```ts
dfkh.search({ username: /^e/i })
```

---

### `ChastiKey.KeyholderTotalLocksManaged`

Retrieves the current data export JSON for Keyholder total locks managed counts.

ChastiKey Side Caching: `[ Yes ]` `[ 15 Minutes ]`

Available Options: None

API Usage:

```ts
const khtlm = await new ChastiKey().KeyholderTotalLocksManaged.get()

khtlm // => { keyholders: Array<KeyholderTotalLocksManagedEntry>, search: HelperFunc }
```

#### [`KeyholderTotalLocksManaged`] Available Computed Values / Helpers

##### `khtlm.search( { searchBy: RegExp | value }, ... )`

Usage Example(s):

```ts
khtlm.search({ username: /^e/i })
```

---

### `ChastiKey.RunningLocks`

Retrieves the current data export JSON for Running Locks.

ChastiKey Side Caching: `[ Yes ]` `[ 15 Minutes ]`

Available Options: None

API Usage:

```ts
const rl = await new ChastiKey().RunningLocks.get()

rl // => { keyholders: Array<RunningLocksLock>, search: HelperFunc }
```

#### [`RunningLocks`] Available Computed Values / Helpers

##### `rl.search( { searchBy: RegExp | value }, ... )`

Usage Example(s):

```ts
rl.search({ username: /^e/i })
```

---

## License

MIT
