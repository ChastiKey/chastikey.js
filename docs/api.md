# API Calls

## What's available

- These are low or non cached lookups
  - `[new]` `[auth]` [Combinations](#combinations)
  - `[new]` `[auth]` [LockeeData](#lockeedata)
  - `[new]` `[auth]` [LogData](#logdata)
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
      lockGroupID: 1592094164
      lockID: 1592094164,
      lockedBy: "KeyholderName",
      lockName: "",
      combination: "8106",
      test: 0,
      timestampUnlocked: 1574650402,
      // Computed Values
      combinationInt: 8106
    }
  ]
}
```

#### Available Computed Values / Helpers

**`CombinationLock.combinationInt`: number**  
**`CombinationLock.isTest`: boolean**

---

### LockeeData

Retrieves the specified user's lockee data _(Locks + Stats)_.

- API Versions Available: `v0.5`
- ChastiKey Side Caching: `[ No ]`
- Authentication: `clientID` + `clientSecret` + `rapidAPIKey`
- Proxy Required: `Yes`

Available Options:

| Key         | Required? | Accepts Type(s)    | Default |
| ----------- | :-------: | ------------------ | :-----: |
| username    |    \*     | `string`           |         |
| discordid   |    \*     | `string`           |         |
| showdeleted |    No     | `number` `boolean` |         |

`* username or discordid is required`

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
  response: {
    status: 200,
    message: "the request has succeeded",
    timestampGenerated: 1577059905
  },
  data: {
    userID: 12345,
    username: "LockeeUsername",
    discordID: "0000000000000000000000",
    displayInStats: 1,
    averageRating: 5,
    averageTimeLockedInSeconds: 210147,
    buildNumberInstalled: 241,
    cumulativeSecondsLocked: 22485783,
    followersCount: 0,
    followingCount: 1,
    joined: "2018-11-17 12:11:45",
    lockeeLevel: 1,
    longestCompletedLockInSeconds: 2444291,
    mainRole: "Lockee",
    noOfRatings: 41,
    secondsLockedInCurrentLock: 3628966,
    status: "Available",
    timestampJoined: 1542456705,
    timestampLastActive: 1595806977,
    totalNoOfCompletedLocks: 106,
    totalNoOfLocks: 107,
    twitterUsername: "",
    versionInstalled: "2.6.1"
  },
  locks: [
    {
      lockGroupID: 1592178631,
      lockID: 159217863101,
      lockedBy: "KeyholderUsername",
      lockName: "",
      sharedLockID: "<hidden>",
      sharedLockQRCode: "<hidden>",
      sharedLockURL: "<hidden>",
      autoResetFrequencyInSeconds: 0,
      autoResetsPaused: 0,
      botChosen: 0,
      build: 198,
      cardInfoHidden: 1,
      cumulative: 0,
      combination: "",
      deleted: 0,
      discardPile: "Sticky,Red,Green",
      doubleUpCards: -9,
      fixed: 0,
      freezeCards: -9,
      greenCards: -9,
      greenCardsPicked: 1,
      lockFrozen: 0,
      lockFrozenByCard: 0,
      lockFrozenByKeyholder: 0,
      logID: 1592178632,
      maximumAutoResets: 0,
      multipleGreensRequired: 1,
      noOfTimesAutoReset: 0,
      noOfTimesCardReset: 7,
      noOfTimesFullReset: 0,
      noOfTurns: 123,
      redCards: -9,
      regularity: 6,
      resetCards: -9,
      status: "Locked",
      stickyCards: -9,
      test: 0,
      timerHidden: 0,
      timestampDeleted: 0,
      timestampExpectedUnlock: 0,
      timestampFrozenByCard: 0,
      timestampFrozenByKeyholder: 1595593260,
      timestampLastAutoReset: 0,
      timestampLastCardReset: 1595764912,
      timestampLastFullReset: 0,
      timestampLastPicked: 1595806977,
      timestampLocked: 1592178631,
      timestampNextPick: 1595828577,
      timestampRealLastPicked: 1595806977,
      timestampUnlocked: 0,
      totalTimeFrozen: 1854286,
      trustKeyholder: 1,
      yellowCards: -9
    }
  ]
}
```

#### Available Computed Values / Helpers

**`LockeeDataResponse.getLocked`: Array<`LockeeDataLock`>**  
**`LockeeDataResponse.timeSinceLastLocked`: number | null**  
**`LockeeDataResponse.search( { searchBy: RegExp | value }, ... )`: Array<`LockeeDataLock`>**  
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
**`LockeeDataLock.isTest`: boolean**  
**`LockeeDataLock.isTimerHidden`: boolean**  
**`LockeeDataLock.isTrustedKeyholder`: boolean**  
**`LockeeDataLock.isUnlocked`: boolean**  
**`LockeeDataLock.totalTimeLocked`: number**  
**`LockeeDataLock.totalTimeFrozenCurrent`: number**

---

### LogData

Retrieves the specified user's lock log.

- API Versions Available: `v0.5`
- ChastiKey Side Caching: `[ No ]`
- Authentication: `clientID` + `clientSecret` + `rapidAPIKey`
- Proxy Required: `Yes`

Available Options:

| Key       | Required? | Accepts Type(s) | Default |
| --------- | :-------: | --------------- | :-----: |
| username  |    \*     | `string`        |         |
| discordid |    \*     | `string`        |         |
| lockid    |    Yes    | `number`        |         |
| logid     |    Yes    | `number`        |         |

`* username or discordid is required`

API Usage:

```js
// Reminder: Uses promises

const ck = new ChastiKey({
  clientID: 'xxxx',
  clientSecret: 'xxxx',
  rapidAPIKey: 'xxxx'
})

ck.LogData.get({
  username: 'username',
  lockid: 123456789,
  logid: 135790246
})
```

Example Response:

```js
{
  response: {
    status: 200,
    message: "the request has succeeded",
    timestampGenerated: 1578241424
  },
  query: {
    discordID: "",
    limit: 0,
    lockID: 1577141888,
    logID: 1577141892,
    since: 0,
    username: "Username"
  },
  log: [
    {
      id: 16094,
      action: "StartedLock",
      actionedBy: "Lockee",
      hidden: 0,
      result: "",
      timestamp: 1577141890
    },
    ...
  ]
}
```

#### Available Computed Values / Helpers

None at this time.

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
| username  |    \*     | `string`        |         |
| discordid |    \*     | `string`        |         |

`* username or discordid is required`

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
  response: {
    status: 200,
    message: "the request has succeeded",
    timestampGenerated: 1577059905
  },
  data: {
    userID: 12345,
    username: "KeyholderUsername",
    discordID: "0000000000000000000000",
    displayInStats: 1,
    averageRating: 4.9,
    buildNumberInstalled: 241,
    dateFirstKeyheld: "08/11/2019",
    followersCount: 13,
    followingCount: 16,
    joined: "2019-10-28 14:12:41",
    keyholderLevel: 4,
    mainRole: "Keyholder",
    noOfLocksFlaggedAsTrusted: 21,
    noOfLocksManagingNow: 21,
    noOfLocksManagingNowFixed: 3,
    noOfLocksManagingNowVariable: 18,
    noOfRatings: 379,
    noOfSharedLocks: 27,
    noOfSharedLocksFixed: 6,
    noOfSharedLocksVariable: 21,
    status: null,
    timestampFirstKeyheld: 1573232138,
    timestampJoined: 1572271961,
    timestampLastActive: 1595801119,
    totalLocksManaged: 587,
    twitterUsername: "",
    versionInstalled: "2.6.1"
  },
  locks: [
    {
      lockID: 24680,
      lockName: "Lock Name",
      sharedLockID: "<hidden>",
      sharedLockQRCode: "<hidden>",
      sharedLockURL: "<hidden>",
      autoResetFrequencyInSeconds: -9,
      blockUsersAlreadyLocked: 0,
      cardInfoHidden: 1,
      cumulative: 1,
      fixed: 0,
      forceTrust: 1,
      keyDisabled: 0,
      lockees: [
        {
          userID: 12345,
          username: "LockeeName",
          lockGroupID: 1586714600,
          lockID: 1586714600,
          build: 164
        },
      ],
      maxAutoResets: -9,
      maxDoubleUps: -9,
      maxFreezes: -9,
      maxGreens: -9,
      maxMinutes: 0,
      maxReds: -9,
      maxResets: -9,
      maxUsers: 0,
      maxYellows: -9,
      maxYellowsAdd: -9,
      maxYellowsMinus: -9,
      minDoubleUps: -9,
      minFreezes: -9,
      minGreens: -9,
      minMinutes: 0,
      minReds: -9,
      minResets: -9,
      minVersionRequired: "2.5.0.alpha.1",
      minYellows: -9,
      minYellowsAdd: -9,
      minYellowsMinus: -9,
      multipleGreensRequired: 1,
      regularity: 24,
      requireDM: 1,
      simulationAverageMinutesLocked: -9,
      simulationBestCaseMinutesLocked: -9,
      simulationWorstCaseMinutesLocked: -9,
      timerHidden: 0    
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
  response: {
    status: 200,
    message: "the request has succeeded",
    timestampGenerated: 1578007927
  },
  locks: [
    {
      userID: -9,
      username: "<hidden>",
      discordID: "",
      lockName: "",
      sharedLockID: "<hidden>",
      sharedLockQRCode: "<hidden>",
      sharedLockURL: "<hidden>",
      autoResetFrequencyInSeconds: 0,
      maxAutoResets: 0,
      maxDoubleUps: 1,
      maxFreezes: 1,
      maxGreens: 5,
      maxReds: 12,
      maxResets: 1,
      maxYellows: 5,
      maxYellowsAdd: 0,
      maxYellowsMinus: 0,
      minDoubleUps: 1,
      minFreezes: 0,
      minGreens: 3,
      minReds: 10,
      minResets: 1,
      minYellows: 3,
      minYellowsAdd: 0,
      minYellowsMinus: 0,
      multipleGreensRequired: 0,
      regularity: 6,
      simulationAverageMinutesLocked: 420374,
      simulationBestCaseMinutesLocked: 1800,
      simulationWorstCaseMinutesLocked: 8005
    },
    ...
  ]
}

```

#### Available Computed Values / Helpers

None at this time.

---
