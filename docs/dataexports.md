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
    timestampGenerated: 1578009002
  },
  locks: [
    {
      userID: 12345,
      username: "LockeeUsername",
      discordID: "0000000000000000000",
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
      timerHidden: 0,
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
      totalTimeFrozen: 1854286,
      trustKeyholder: 1,
      yellowCards: -9
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
**`RunningLocksLock.totalTimeFrozenCurrent: number`**

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
      userID: 12345,
      username: "Username",
      discordID: "0000000000000000000",
      averageKeyholderRating: 5,
      averageLockeeRating: 5,
      averageTimeLockedInSeconds: 210168,
      buildNumberInstalled: 241,
      cumulativeSecondsLocked: 22488021,
      dateFirstKeyheld: "12/02/2019",
      displayInStats: 1,
      followersCount: 0,
      followingCount: 1,
      joined: "2018-11-17 12:11:45",
      keyholderLevel: 2,
      lockeeLevel: 1,
      longestCompletedLockInSeconds: 2444291,
      mainRole: "Lockee",
      noOfLocksFlaggedAsTrusted: 0,
      noOfKeyholderRatings: 31,
      noOfLockeeRatings: 41,
      noOfLocksManagingNow: 0,
      noOfLocksManagingNowFixed: 0,
      noOfLocksManagingNowVariable: 0,
      noOfSharedLocks: 3,
      noOfSharedLocksFixed: 1,
      noOfSharedLocksVariable: 2,
      secondsLockedInCurrentLock: 3631204,
      status: "Offline",
      timestampFirstKeyheld: 1549955584,
      timestampJoined: 1542456705,
      timestampLastActive: 1595806977,
      totalLocksManaged: 33,
      totalNoOfCompletedLocks: 106,
      totalNoOfLocks: 107,
      twitterUsername: "",
      versionInstalled: "2.6.1"
    },
    ...
  ]
}
```

#### Available Computed Values / Helpers

**`UserDataResponse.search( { searchBy: RegExp | value }, ... )`**  
**`UserData.isVerified`: boolean**
