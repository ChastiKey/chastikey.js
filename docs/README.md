# Getting Started

> Note: Some requests will require a `clientID`, `clientSecret` obtained from the ChastiKey App Alpha & `rapidAPIKey` from RapidAPI.  
> [More info](https://ChastiKey.github.io/chastikey.js/#/configuration?id=configuration-options)

## Installing

### Existing Node.js project

**Yarn** (preferred & tested)

```sh
yarn add chastikey.js
```

**NPM**

```sh
npm i chastikey.js
```

### Web Page project

> Note: Only Chrome based browsers have been tested at this time.

Check [JSDelivr](https://www.jsdelivr.com/package/gh/ChastiKey/chastikey.js?path=dist) for builds available (Note: Only as of `>= 1.4.0`). Find it in the `/dist/` folder

```html
<script src="https://cdn.jsdelivr.net/gh/ChastiKey/chastikey.js/dist/ChastiKey.js"></script>
```

## Usage

### Javascript

```js
const { ChastiKey } = require('chastikey.js');
// Then you're ready for:
new ChastiKey().ListLocks.get( { ... } )
  .then(resp => ... )
  .catch(error => ... )
```

### Typescript

```js
import { ChastiKey } from 'chastikey.js'
// Then you're ready for:
new ChastiKey().ListLocks.get( { ... } )
  .then(resp => ... )
  .catch(error => ... )
```

### Web Page

Until some server side configuration is completed the webpacked version of `chastikey.js` will remain out of order.

<!--

```html
<script src="https://cdn.jsdelivr.net/gh/ChastiKey/chastikey.js@1.4.0/dist/ChastiKey.js"></script>
// Then you're ready for:
<script>
  new ChastiKey().ListLocks.get( ... )
    .then(resp => ... )
    .catch(error => ... )
</script>
``` -->
