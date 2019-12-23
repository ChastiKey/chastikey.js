# Ticker

### `ChastiKey.Ticker`

Creates the URL string to the user's Ticker.

ChastiKey Side Caching: `[ No ]`

Available Options:

| Key                     | Required? | Accepts Type(s) | Available/Example                         |
| ----------------------- | :-------: | --------------- | ----------------------------------------- |
| username                |    Yes    | `string`        |
| type                    |    Yes    | `string`        | `Lockee`, `Keyholder`                     |
| show5StarRating         |    Yes    | `boolean`       |
| optional                |    No     | `object`        |
| `optional.startDate`    |    No     | `object`        | `{ day: '01', month: '01', year: '2019'}` |
| `optional.fileExt`      |    No     | `string`        | `jpg` ,`png` , `gif`                      |
| `optional.addTimestamp` |    No     | `boolean`       |                                           |

API Usage:

```ts
const ticker = new ChastiKey().Ticker.getURL({
  username: 'UsernameHere',
  type: 'Keyholder',
  show5StarRating: false,
  optional: { fileExt: 'png' }
})

ticker // => "https://chastikey.com/tickers/ticker.php?ty=1&un=UsernameHere&r=0&ext=.png"
```

---
