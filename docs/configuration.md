# Configuration

## Configuration options

> Note: Only the `clientID`, `clientSecret` and `rapidAPIKey` are required for `v0.5` requests.

| Key                | Type(s)   | Default                    | Description                             |
| ------------------ | --------- | -------------------------- | --------------------------------------- |
| `baseURL`          | `string`  | `https://chastikey.com`    | Base ChastiKey API URL                  |
| `clientID`         | `string`  |                            | Obtained in the ChastiKey App           |
| `clientSecret`     | `string`  |                            | Obtained in the ChastiKey App           |
| `rapidAPIHost`     | `string`  | `chastikey.p.rapidapi.com` | Proxy for newer requests                |
| `rapidAPIKey`      | `string`  |                            | RapidAPI App Key                        |
| `useRapidAPIProxy` | `boolean` | `false`                    | Force legacy requests to use Proxy      |
| `useNoProxy`       | `boolean` | `false`                    | Force all requests to **not** use Proxy |
| `apiVersion`       | `object`  | _`see below option notes`_ |

**Options extra notes**

**`baseURL`**  
This is the default url for ChastiKey requests, there's no need to pass or modify this at present.

**`clientID`**  
A new requirement for all `v0.5` requests. Obtained from the current Alpha version of the ChastiKey App.

**`clientSecret`**  
A new requirement for all `v0.5` requests. Obtained from the current Alpha version of the ChastiKey App.

**`rapidAPIHost`**  
Some implementations of the Wrapper at this time (due to ChastiKey server security) will require proxying requests, for this I've setup a RapidAPI portal to proxy requests. (Note: if needing to make requests from a web browser, you'll need to proxy due to browser security).

**Note:** This is set already inside the wrapper and requires no modification at present.

**`rapidAPIKey`**  
You can obtain an application key here: https://rapidapi.com/

**Note:** You will still also need a `clientID` and `clientSecret`.

**`useRapidAPIProxy`**  
Pass and set this to `true` if you wish to force all requests from this wrapper to use the proxy.

**`useNoProxy`**  
Only use this if you want to skip the proxy all together and try requests directly to ChastiKey's API.

**`apiVersion`**  
These only need to be changed if you want to use a different version of the API's endpoint. However, please note that not all endpoints are/were available on all versions.

```js
{
  apiVersion: {
      // API
      CheckLock: 'v0.4',
      Combinations: 'v0.5',
      KeyholderData: 'v0.5',
      ListLocks: 'v0.4',
      LockeeData: 'v0.5',
      // Exports
      CompletedLocks: 'v1.0',
      DateFirstKeyheld: 'v1.0',
      KeyholderTotalLocksManaged: 'v1.0',
      RunningLocks: 'v1.0'
    }
}
```

# Example how to use configuration

```js
const ck = new ChastiKey({
  clientID: 'xxxx',
  clientSecret: 'xxxx',
  rapidAPIKey: 'xxxx'
})
```
