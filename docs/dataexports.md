# Data Exports

## What's available

- These are low or non cached lookups
  - `[new]` `[auth req]` [RunningLocks](#runninglocks)
  - `[new]` `[auth req]` [UserData](#userdata)

### RunningLocks

Retrieves the current data export JSON for Running Locks.

- API Versions Available: `v0.5`
- ChastiKey Side Refreshed: `[ Yes ]` `[ 15 Minutes ]`
- Authentication: `clientID` + `clientSecret` + `rapidAPIKey`
- Proxy Required: `Yes`

API Usage:

```js
// Reminder: Uses promises

const rl = new ChastiKey({
  clientID: 'xxxx',
  clientSecret: 'xxxx',
  rapidAPIKey: 'xxxx'
})

rl.RunningLocks.get()
```

Example Response:

```js
{
response: {
  status: 200,
  message: "the request has succeeded",
  timestampGenerated: 1577973006
},
locks: [
    {
      userID: 00000,
      username: "Username",
      discordID: "",
      lockID: 0,
      lockedBy: "",
      lockName: "",
      sharedLockID: "",
      sharedLockQRCode: "",
      sharedLockURL: "",
      botChosen: 0,
      cardInfoHidden: 0,
      cumulative: 0,
      doubleUpCards: 0,
      fixed: 0,
      freezeCards: 0,
      greenCards: 1,
      greenCardsPicked: 0,
      lockFrozenByCard: 0,
      lockFrozenByKeyholder: 0,
      multipleGreensRequired: 0,
      noOfTurns: 1,
      redCards: 0,
      regularity: 24,
      resetCards: 0,
      timerHidden: 0,
      timestampLocked: 1522095804,
      trustKeyholder: 0,
      yellowCards: 0
    },
    ...
  ]
}
```

#### Available Computed Values / Helpers

**`RunningLocksResponse.search( { searchBy: RegExp | value }, ... )`**  
**`RunningLocksLock.isCardInfoHidden: boolean`**  
**`RunningLocksLock.isCumulative: boolean`**  
**`RunningLocksLock.isNonCumulative: boolean`**  
**`RunningLocksLock.isFixed: boolean`**  
**`RunningLocksLock.isFrozen: boolean`**  
**`RunningLocksLock.isFrozenByCard: boolean`**  
**`RunningLocksLock.isFrozenByKeyholder: boolean`**  
**`RunningLocksLock.isMultipleGreensRequired: boolean`**  
**`RunningLocksLock.isTimerHidden: boolean`**  
**`RunningLocksLock.isTrustedKeyholder: boolean`**  
**`RunningLocksLock.totalTimeLocked: number`**

### UserData

Retrieves the current data export JSON for public User data.

- API Versions Available: `v0.5`
- ChastiKey Side Refreshed: `[ Yes ]` `[ 15 Minutes ]`
- Authentication: `clientID` + `clientSecret` + `rapidAPIKey`
- Proxy Required: `Yes`

API Usage:

```js
// Reminder: Uses promises

const ud = new ChastiKey({
  clientID: 'xxxx',
  clientSecret: 'xxxx',
  rapidAPIKey: 'xxxx'
})

ud.UserData.get()
```

Example Response:

```js
{
  response: {
    status: 200,
    message: "the request has succeeded",
    timestampGenerated: 1577757568
  },
  users: [
    {
      userID: 00000,
      username: "Username",
      discordID: "00000000000000000",
      averageKeyholderRating: 0,
      averageLockeeRating: 0,
      averageTimeLockedInSeconds: 0,
      buildNumberInstalled: 133,
      cumulativeSecondsLocked: 0,
      dateFirstKeyheld: "01\/01\/1970",
      joined: "2019-01-01 01:23:45",
      keyholderLevel: 0,
      lockeeLevel: 0,
      longestCompletedLockInSeconds: 0,
      mainRole: "Lockee",
      noOfLocksFlaggedAsTrusted: 0,
      noOfKeyholderRatings: 0,
      noOfLockeeRatings: 2,
      noOfLocksManagingNow: 0,
      noOfLocksManagingNowFixed: 0,
      noOfLocksManagingNowVariable: 0,
      noOfSharedLocks: 0,
      noOfSharedLocksFixed: 0,
      noOfSharedLocksVariable: 0,
      secondsLockedInCurrentLock: 0,
      status: "Offline",
      timestampFirstKeyheld: 0,
      timestampJoined: 1556238855,
      timestampLastActive: 1576821587,
      totalLocksManaged: 0,
      totalNoOfCompletedLocks: 0,
      totalNoOfLocks: 0,
      versionInstalled: "2.4.3"
    },
    ...
  ]
}
```

#### Available Computed Values / Helpers

**`UserDataResponse.search( { searchBy: RegExp | value }, ... )`**  
**`UserData.isVerified`: boolean**
