# API Calls

## `[GET]` CheckLock

Retrieves the specified user's lock.

- API Versions Available: `v0.2`, `v0.3`, `v0.4`
- ChastiKey Side Caching: `[ Yes ]` `[ 60 Seconds ]`
- Authentication: `None`
- Proxy Required: `Not on <= v0.4`

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

## `[POST]` Combinations

Retrieves the specified user's past combinations.

- API Versions Available: `v0.5`
- ChastiKey Side Caching: `[ No ]`
- Authentication: `clientID` + `clientSecret` + `rapidAPIKey`
- Proxy Required: `Yes`

Available Options:

| Key       | Accepts Type(s) |
| --------- | --------------- |
| username  | `string`        |
| discordid | `string`        |

API Usage:

```js
// Reminder: Uses promises

const ck = new ChastiKey({
  clientID: 'xxxx',
  clientSecret: 'xxxx',
  rapidAPIKey: 'xxxx'
})

ck.Combinations.get({ username: 'Username' })
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

## `[GET]` ListLocks

Retrieves the specified user's locks.

- API Versions Available: `v0.2`, `v0.3`, `v0.4`
- ChastiKey Side Caching: `[ Yes ]` `[ 60 Seconds ]`
- Authentication: `None`
- Proxy Required: `Not on <= v0.4`

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

## `[POST]` LockeeData

Retrieves the specified user's lockee data _(Locks + Stats)_.

- API Versions Available: `v0.5`
- ChastiKey Side Caching: `[ No ]`
- Authentication: `clientID` + `clientSecret` + `rapidAPIKey`
- Proxy Required: `Yes`

Available Options:

| Key        | Required? | Accepts Type(s) | Default |
| ---------- | :-------: | --------------- | :-----: |
| username   |    Yes    | `string`        |         |
| discordid  |    No     | `string`        |         |
| showdelete |    No     | `number`        |   `1`   |

API Usage:

```js
// Reminder: Uses promises

const ck = new ChastiKey({
  clientID: 'xxxx',
  clientSecret: 'xxxx'
})

ck.LockeeData.get({
  username: 'username'
})
```

Example Response:

```js
{
  "response": {
    "status": 200,
    "message": "the request has succeeded",
    "timestampGenerated": 1577059905
  },
  "data": {
    "userID": 12345,
    "username": "Username",
    "discordID": "146439529824256000",
    "displayInStats": 1,
    "includeInAPI": 0,
    "averageRating": 5,
    "averageTimeLockedInSeconds": 166339,
    "buildNumberInstalled": 142,
    "cumulativeSecondsLocked": 14138854,
    "joined": "2018-11-17 12:11:45",
    "lockeeLevel": 2,
    "longestCompletedLockInSeconds": 2434326,
    "mainRole": "Lockee",
    "noOfRatings": 41,
    "secondsLockedInCurrentLock": 2369579,
    "status": "Offline",
    "timestampJoined": 1542456705,
    "timestampLastActive": 1576986948,
    "totalNoOfCompletedLocks": 84,
    "totalNoOfLocks": 85,
    "versionInstalled": "2.5.0.alpha.7"
  },
  "locks": [
    {
      "lockID": 1562291263,
      "lockedBy": "KeyholderName",
      "lockName": "",
      "sharedLockID": "<hidden>",
      "sharedLockQRCode": "<hidden>",
      "sharedLockURL": "<hidden>",
      "botChosen": 0,
      "cardInfoHidden": 1,
      "cumulative": 0,
      "combination": "3451",
      "deleted": 0,
      "discardPile": "",
      "doubleUpCards": -9,
      "fixed": 0,
      "freezeCards": -9,
      "greenCards": -9,
      "greenCardsPicked": 0,
      "lockFrozen": 0,
      "lockFrozenByCard": 0,
      "lockFrozenByKeyholder": 0,
      "multipleGreensRequired": 1,
      "noOfTurns": 0,
      "redCards": -9,
      "regularity": 3,
      "resetCards": -9,
      "status": "UnlockedReal",
      "timerHidden": 0,
      "timestampDeleted": 0,
      "timestampExpectedUnlock": 0,
      "timestampLastPicked": 1562428783,
      "timestampLocked": 1562291263,
      "timestampNextPick": 0,
      "timestampUnlocked": 1562442820,
      "totalTimeFrozen": 0,
      "trustKeyholder": 1,
      "yellowCards": -9
    }
  ]
}
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
