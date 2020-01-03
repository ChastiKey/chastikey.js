# API Calls

## What's available

- These are low or non cached lookups
  - `[new]` `[auth]` [Combinations](#combinations)
  - `[new]` `[auth]` [LockeeData](#lockeedata)
  - `[new]` `[auth]` [KeyholderData](#keyholderdata)
  - `[new]` `[auth]` [SimulatedData](#simulateddata)

### Combinations

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

### LockeeData

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
| showdelete |    No     | `number`        |         |

API Usage:

```js
// Reminder: Uses promises

const ck = new ChastiKey({
  clientID: 'xxxx',
  clientSecret: 'xxxx',
  rapidAPIKey: 'xxxx'
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

#### Available Computed Values / Helpers

**`LockeeDataResponse.getLocked`: Array<`LockeeDataLock`>**  
**`LockeeDataResponse.timeSinceLastLocked`: number | null**  
**`LockeeData.isVerified`: boolean**  
**`LockeeDataLock.isCardInfoHidden`: boolean**  
**`LockeeDataLock.isCumulative`: boolean**  
**`LockeeDataLock.isNonCumulative`: boolean**  
**`LockeeDataLock.combinationInt`: number**  
**`LockeeDataLock.isDeleted`: boolean**  
**`LockeeDataLock.isDiscarded`: boolean**  
**`LockeeDataLock.isFixed`: boolean**  
**`LockeeDataLock.isFrozen`: boolean**  
**`LockeeDataLock.isFrozenByCard`: boolean**  
**`LockeeDataLock.isFrozenByKeyholder`: boolean**  
**`LockeeDataLock.isLocked`: boolean**  
**`LockeeDataLock.isMultipleGreensRequired`: boolean**  
**`LockeeDataLock.isTimerHidden`: boolean**  
**`LockeeDataLock.isTrustedKeyholder`: boolean**  
**`LockeeDataLock.isUnlocked`: boolean**  
**`LockeeDataLock.totalTimeLocked`: number**

---

### KeyholderData

Retrieves the specified user's keyholder data _(Locks + Stats)_.

- API Versions Available: `v0.5`
- ChastiKey Side Caching: `[ No ]`
- Authentication: `clientID` + `clientSecret` + `rapidAPIKey`
- Proxy Required: `Yes`

Available Options:

| Key       | Required? | Accepts Type(s) | Default |
| --------- | :-------: | --------------- | :-----: |
| username  |    Yes    | `string`        |         |
| discordid |    No     | `string`        |         |

API Usage:

```js
// Reminder: Uses promises

const ck = new ChastiKey({
  clientID: 'xxxx',
  clientSecret: 'xxxx',
  rapidAPIKey: 'xxxx'
})

ck.KeyholderData.get({
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
    "userID": 00000,
    "username": "KeyholderUsername",
    "discordID": "00000000000000000",
    "displayInStats": 1,
    "includeInAPI": 0,
    "averageRating": 4.99,
    "buildNumberInstalled": 142,
    "dateFirstKeyheld": "01\/01\/2018",
    "joined": "2018-01-01 03:02:01",
    "keyholderLevel": 4,
    "mainRole": "Keyholder",
    "noOfLocksFlaggedAsTrusted": 50,
    "noOfLocksManagingNow": 52,
    "noOfLocksManagingNowFixed": 4,
    "noOfLocksManagingNowVariable": 48,
    "noOfRatings": 1500,
    "noOfSharedLocks": 30,
    "noOfSharedLocksFixed": 12,
    "noOfSharedLocksVariable": 24,
    "status": "Offline",
    "timestampFirstKeyheld": 0000000000,
    "timestampJoined": 0000000000,
    "timestampLastActive": 0000000000,
    "totalLocksManaged": 2000,
    "versionInstalled": "2.5.0.alpha.7"
  },
  "locks": [
    {
      "lockName": "",
      "sharedLockID": "1111AAAAAA22222",
      "sharedLockQRCode": "ChastiKey-Shareable-Lock-1111AAAAAA22222",
      "sharedLockURL": "https:\/\/chastikey.com\/sharedlock\/1111AAAAAA22222",
      "blockUsersAlreadyLocked": 0,
      "cardInfoHidden": 0,
      "cumulative": 1,
      "fixed": 0,
      "forceTrust": 1,
      "keyDisabled": 0,
      "lockees": [
        {
          "userID": 00000,
          "username": "LockeeUsername",
          "lockID": 1575546484
        }
      ],
      "maxDoubleUps": 15,
      "maxFreezes": 10,
      "maxGreens": 10,
      "maxMinutes": 0,
      "maxReds": 45,
      "maxResets": 15,
      "maxUsers": 0,
      "maxYellows": 0,
      "maxYellowsAdd": 0,
      "maxYellowsMinus": 0,
      "minDoubleUps": 10,
      "minFreezes": 10,
      "minGreens": 8,
      "minMinutes": 0,
      "minReds": 40,
      "minResets": 10,
      "minVersionRequired": "2.5.0.alpha.1",
      "minYellows": 0,
      "minYellowsAdd": 0,
      "minYellowsMinus": 0,
      "multipleGreensRequired": 1,
      "regularity": 0.25,
      "requireDM": 0,
      "simulationAverageMinutesLocked": 530065,
      "simulationBestCaseMinutesLocked": 2100,
      "simulationWorstCaseMinutesLocked": 10100,
      "timerHidden": 0
    }
  ]
}

```

#### Available Computed Values / Helpers

**`KeyholderData.isVerified`: boolean**  
**`KeyholderDataLock.isForceTrust`: boolean**  
**`KeyholderDataLock.isKeysDisabled`: boolean**  
**`KeyholderDataLock.isCardInfoHidden`: boolean**  
**`KeyholderDataLock.isCumulative`: boolean**  
**`KeyholderDataLock.isNonCumulative`: boolean**  
**`KeyholderDataLock.isFixed`: boolean**  
**`KeyholderDataLock.isTimerHidden`: boolean**  
**`KeyholderDataLock.isMultipleGreensRequired`: boolean**

---

### SimulationData

Retrieves API Locks from all keyholders that fall within the Min and/or Max simulated times.

- API Versions Available: `v0.5`
- ChastiKey Side Caching: `[ No ]`
- Authentication: `clientID` + `clientSecret` + `rapidAPIKey`
- Proxy Required: `Yes`

Available Options:

| Key        | Required? | Accepts Type(s) | Default |
| ---------- | :-------: | --------------- | :-----: |
| MinMinutes |    No     | `number`        |         |
| MaxMinutes |    No     | `number`        |         |

API Usage:

```js
// Reminder: Uses promises

const ck = new ChastiKey({
  clientID: 'xxxx',
  clientSecret: 'xxxx',
  rapidAPIKey: 'xxxx'

})

ck.SimulationData.get({
  MinMinutes: 60
  MaxMinutes: 600
})
```

Example Response:

```js
{
  "response": {
    "status": 200,
    "message": "the request has succeeded",
    "timestampGenerated": 1578007927
  },
  "locks": [
    {
      "userID": -9,
      "username": "<hidden>",
      "discordID": "",
      "lockName": "",
      "sharedLockID": "<hidden>",
      "sharedLockQRCode": "<hidden>",
      "sharedLockURL": "<hidden>",
      "maxDoubleUps": 1,
      "maxFreezes": 1,
      "maxGreens": 5,
      "maxReds": 12,
      "maxResets": 1,
      "maxYellows": 5,
      "maxYellowsAdd": 0,
      "maxYellowsMinus": 0,
      "minDoubleUps": 1,
      "minFreezes": 0,
      "minGreens": 3,
      "minReds": 10,
      "minResets": 1,
      "minYellows": 3,
      "minYellowsAdd": 0,
      "minYellowsMinus": 0,
      "multipleGreensRequired": 0,
      "regularity": 6,
      "simulationAverageMinutesLocked": 420374,
      "simulationBestCaseMinutesLocked": 1800,
      "simulationWorstCaseMinutesLocked": 8005
    },
    ...
  ]
}

```

#### Available Computed Values / Helpers

None at this time.

---
