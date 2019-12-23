# Data Exports

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

**`completedResp.search( { searchBy: RegExp | value }, ... )`**

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

**`dfkh.search( { searchBy: RegExp | value }, ... )`**

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

**`khtlm.search( { searchBy: RegExp | value }, ... )`**

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

**`rl.search( { searchBy: RegExp | value }, ... )`**

Usage Example(s):

```ts
rl.search({ username: /^e/i })
```
