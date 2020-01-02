# Data Exports

## What's available

- These are low or non cached lookups
  - `[legacy]` [CompletedLocks](#completedlocks)
  - `[legacy]` [DateFirstKeyheld](#datefirstkeyheld)
  - `[legacy]` [KeyholderTotalLocksManaged](#keyholdertotallocksmanaged)
  - `[new]` `[auth req]` [RunningLocks](#runninglocks)
  - `[new]` `[auth req]` [UserData](#userdata)

> **Note:** While some Data Exports will say `v1.0` they are actually older legacy exports, newer ones will be under the `api/v0.5` endpoint, these newer ones supersede the older `json/v1.0`.

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
