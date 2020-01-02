# Legacy API and Data Export Calls

> **Note:** Not All older requests are still available, some may require a number of configuration changes when constructing `ChastiKey` to access the older. Below are the remaining legacy requests that have not been replaced with the newer API release requests.

## What's available

- These are low or non cached lookups
  - `[API] [legacy]` [CheckLock](#checklock)
  - `[API] [legacy]` [ListLocks](#listlocks)
  - `[Export] [legacy]` [CompletedLocks](#completedlocks)
  - `[Export] [legacy]` [DateFirstKeyheld](#datefirstkeyheld)
  - `[Export] [legacy]` [KeyholderTotalLocksManaged](#keyholdertotallocksmanaged)

### CheckLock

Retrieves the specified user's lock.

- API Versions Available: `v0.2`, `v0.3`, `v0.4`
- ChastiKey Side Caching: `[ Yes ]` `[ 60 Seconds ]`
- Authentication: `None`
- Proxy Required: `No`

Available Options:

| Key      | Required? | Accepts Type(s) | Default |
| -------- | :-------: | --------------- | ------- |
| username |    Yes    | `string`        |         |
| lockid   |    Yes    | `string`        |         |

API Usage:

```js
// Reminder: Uses promises

new ChastiKey().CheckLock.get({ username: 'username', lockid: '123456' })
new ChastiKey().CheckLock.getByUsername('username', '123456')
```

Example Response:

```js
{
  status: 200,
  message: 'Success',
  timestampGenerated: 1576949189,
  locks: [
    {
      isLocked: true
      isUnlocked: false
      isAbandoned: false
      totalTimeLocked: 2259018.6779999733
      lockID: 1574690326
      lockDeleted: 0
      lockedBy: "KeyholderName"
      lockFrozen: 0
      timestampExpectedUnlock: 1577368726
      timestampLocked: 1574690326
      timestampUnlocked: 0
      status: "Locked"
      combination: ""
    }
  ],

  // Computed Values
  getLocked: [ ...Filtered locked locks only ]
}
```

#### Available Computed Values / Helpers

**`ListLocksResponse.getLocked`: Array<`ListLocksLock`>**  
**`ListLocksLock.isLocked`: boolean**  
**`ListLocksLock.isUnlocked`: boolean**  
**`ListLocksLock.isAbandoned`: boolean**  
**`ListLocksLock.totalTimeLocked`: number**

---

### ListLocks

Retrieves the specified user's locks.

- API Versions Available: `v0.2`, `v0.3`, `v0.4`
- ChastiKey Side Caching: `[ Yes ]` `[ 60 Seconds ]`
- Authentication: `None`
- Proxy Required: `No`

Available Options:

| Key         | Required? | Accepts Type(s) | Default |
| ----------- | :-------: | --------------- | :-----: |
| username    |    Yes    | `string`        |         |
| showdeleted |    No     | `boolean`       |   `0`   |

API Usage:

```js
// Reminder: Uses promises

new ChastiKey().ListLocks.get({ username: 'username' })
new ChastiKey().ListLocks.getByUsername('username')
```

Example Response:

```js
{
  response: {
    status: 200,
    message: "the request has succeeded",
    timestampGenerated: 1576970577
  },
  locks: [
    {
      lockID: 1574690326,
      lockDeleted: 0,
      lockedBy: 'KeyholderName',
      lockFrozen: 0,
      timestampExpectedUnlock: 1577368726,
      timestampLocked: 1574690326,
      timestampUnlocked: 0,
      status: 'Locked',
      combination: '',
      // Computed Values
      isLocked: true,
      isUnlocked: false,
      isAbandoned: false,
      totalTimeLocked: 2280251
    }
  ],

  // Computed Values
  getLocked: [ ...Filtered locked locks only ]
}
```

#### Available Computed Values / Helpers

**`ListLocksResponse.getLocked`: Array<`ListLocksLock`>**  
**`ListLocksLock.isLocked`: boolean**  
**`ListLocksLock.isUnlocked`: boolean**  
**`ListLocksLock.isAbandoned`: boolean**  
**`ListLocksLock.totalTimeLocked`: number**

---

> **Note:** While some Data Exports will say `v1.0` they are actually older legacy exports, newer ones will be under the `api/v0.5` endpoint, these newer ones supersede the older `json/v1.0` and contain most if not all of the same data with less requests required.

### CompletedLocks

Retrieves the current data export JSON of completed locks.

- API Versions Available: `v1.0` (`json/v1.0` is legacy)
- ChastiKey Side Refreshed: `[ Yes ]` `[ 15 Minutes ]`
- Authentication: `None`
- Proxy Required: `Not on v1.0`

API Usage:

```ts
const completedResp = await new ChastiKey().CompletedLocks.get()

completedResp // => { locks: Array<CompletedLocksLock>, search: HelperFunc }
```

#### Available Computed Values / Helpers

**`.search( { searchBy: RegExp | value }, ... )`**

---

### DateFirstKeyheld

Retrieves the current data export JSON for Date First keyheld for all public keyholders.

- API Versions Available: `v1.0` (`json/v1.0` is legacy)
- ChastiKey Side Refreshed: `[ Yes ]` `[ 15 Minutes ]`
- Authentication: `None`
- Proxy Required: `Not on v1.0`

API Usage:

```ts
const dfkh = await new ChastiKey().DateFirstKeyheld.get()

dfkh // => { keyholders: Array<DateFirstKeyheldEntry>, search: HelperFunc }
```

#### Available Computed Values / Helpers

**`.search( { searchBy: RegExp | value }, ... )`**

---

### KeyholderTotalLocksManaged

Retrieves the current data export JSON for Keyholder total locks managed counts.

- API Versions Available: `v1.0` (`json/v1.0` is legacy)
- ChastiKey Side Refreshed: `[ Yes ]` `[ 15 Minutes ]`
- Authentication: `None`
- Proxy Required: `Not on v1.0`

API Usage:

```ts
const khtlm = await new ChastiKey().KeyholderTotalLocksManaged.get()

khtlm // => { keyholders: Array<KeyholderTotalLocksManagedEntry>, search: HelperFunc }
```

#### Available Computed Values / Helpers

**`.search( { searchBy: RegExp | value }, ... )`**

---
