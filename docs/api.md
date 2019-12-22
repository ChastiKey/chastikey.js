# API Calls

## What's available

- These are low or non cached lookups
  - [CheckLock](#checklock)
  - [Combinations](#combinations)
  - [ListLocks](#listlocks)
  - [LockeeData](#lockeedata)

## Configuration options

| Key                  | Accepts Type(s) | Default                 | Available/Example      |
| -------------------- | --------------- | ----------------------- | ---------------------- |
| `api.baseURL`        | `string`        | `https://chastikey.com` |
| `api.repo`           | `string`        | `api`                   | `api`                  |
| `api.version`        | `string`        | `v0.5`                  | `v0.5`                 |
| `legacy.api.baseURL` | `string`        | `https://chastikey.com` |
| `legacy.api.repo`    | `string`        | `api`                   | `api`                  |
| `legacy.api.version` | `string`        | `v0.4`                  | `v0.2`, `v0.3`, `v0.4` |

**Example how to use the above configurations:**

```js
const ck = new ChastiKey({ api: { version } })
```

---

## CheckLock

Retrieves the specified user's lock.

- API Versions Available: `v0.2`, `v0.3`, `v0.4`
- ChastiKey Side Caching: `[ Yes ]` `[ 60 Seconds ]`
- Authentication: `None`

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

## Combinations

Retrieves the specified user's past combinations.

- API Versions Available: `v0.5`
- ChastiKey Side Caching: `[ No ]`
- Authentication: `clientID` + `clientSecret`

Available Options:

| Key       | Accepts Type(s) |
| --------- | --------------- |
| username  | `string`        |
| discordid | `string`        |

API Usage:

```js
// Reminder: Uses promises

new ChastiKey({
  api: {
    clientID: 'xxxx',
    clientSecret: 'xxxx'
  }
}).Combinations.get({ username: 'emma' })
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
    lockID: 1574634654,
    lockedBy: "KeyholderName",
    lockName: "",
    combination: "8106",
    timestampUnlocked: 1574650402,
    // Computed Values
    combinationInt: 8106
    }
  ]
}
```

#### Available Computed Values / Helpers

**`CombinationLock.combinationInt`: number**

---

## ListLocks

Retrieves the specified user's locks.

- API Versions Available: `v0.2`, `v0.3`, `v0.4`
- ChastiKey Side Caching: `[ Yes ]` `[ 60 Seconds ]`
- Authentication: `None`

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
