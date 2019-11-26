var ChastiKey=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=12)}([function(e,t,n){"use strict";var r=n(4),o=n(22),s=Object.prototype.toString;function i(e){return"[object Array]"===s.call(e)}function a(e){return null!==e&&"object"==typeof e}function c(e){return"[object Function]"===s.call(e)}function u(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===s.call(e)},isBuffer:o,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:a,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===s.call(e)},isFile:function(e){return"[object File]"===s.call(e)},isBlob:function(e){return"[object Blob]"===s.call(e)},isFunction:c,isStream:function(e){return a(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:u,merge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,o=arguments.length;r<o;r++)u(arguments[r],n);return t},deepMerge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]="object"==typeof n?e({},n):n}for(var r=0,o=arguments.length;r<o;r++)u(arguments[r],n);return t},extend:function(e,t,n){return u(t,(function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const o=n(20),s=n(38);t.APIBase=class{constructor(e){this.config={baseURL:"https://chastikey.com",repo:"api",apiVersion:"v0.4"},void 0!==e&&Object.assign(this.config,e)}get baseURLBuilt(){return`${this.config.baseURL}/${this.config.repo}/${this.config.apiVersion}/`}paramsBuilder(e){var t="";return Object.keys(e).forEach((n,r)=>{var o;o="boolean"===typeof e[n]?e[n]?1:0:e[n],void 0!==e[n]&&(t+=r>0?`&${n}=${o}`:`?${n}=${o}`)}),t}request(e,t){return r(this,void 0,void 0,(function*(){try{return(yield o.default.get(void 0!==t?`${this.baseURLBuilt}${e}${"string"!=typeof t?this.paramsBuilder(t):t}`:`${this.baseURLBuilt}${e}`)).data}catch(e){throw new s.FetchError(e.response?e.response.status:999,e.message)}}))}requestDataExport(e){return r(this,void 0,void 0,(function*(){try{return(yield o.default.get(`${this.baseURLBuilt}${e}`)).data}catch(e){throw new s.FetchError(e.response?e.response.status:999,e.message)}}))}}},function(e,t,n){"use strict";function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),r(n(15)),r(n(16)),r(n(17)),r(n(18)),r(n(3)),r(n(19))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.ListLocksResponse=class{constructor(e){if(this.status=400,this.message="Error! If you're seeing this ChastiKey has not responded an error.",this.timestampGenerated=Date.now()/1e3,this.locks=[],e){if(console.log(Array.isArray(e.response)),Array.isArray(e.response)){const t=e.response[0];this.status=t.status,this.message=t.message,this.timestampGenerated=t.timestampGenerated,console.log(this)}else this.status=e.status,this.message=e.message,this.timestampGenerated=e.timestampGenerated;e.locks&&(this.locks=e.locks.map(e=>new r(e)))}}get getLocked(){return this.locks.filter(e=>e.isLocked)}};class r{constructor(e){Object.assign(this,e||{}),e&&void 0!==e.discardPile&&"string"!=typeof e.discardPile&&(this.discardPile=String(e.discardPile).split(","))}get isLocked(){return 0===this.timestampUnlocked}get isUnlocked(){return"UnlockedReal"===this.status}get isAbandoned(){return 1===this.lockDeleted&&0===this.timestampUnlocked}get totalTimeLocked(){return this.isLocked?Date.now()/1e3-this.timestampLocked:this.timestampUnlocked-this.timestampLocked}}t.ListLocksLock=r},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";var r=n(0);function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var s;if(n)s=n(t);else if(r.isURLSearchParams(t))s=t.toString();else{var i=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),i.push(o(t)+"="+o(e))})))})),s=i.join("&")}if(s){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";(function(t){var r=n(0),o=n(28),s={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var a,c={adapter:(void 0!==t&&"[object process]"===Object.prototype.toString.call(t)?a=n(8):"undefined"!=typeof XMLHttpRequest&&(a=n(8)),a),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(s)})),e.exports=c}).call(this,n(27))},function(e,t,n){"use strict";var r=n(0),o=n(29),s=n(5),i=n(31),a=n(32),c=n(9);e.exports=function(e){return new Promise((function(t,u){var f=e.data,l=e.headers;r.isFormData(f)&&delete l["Content-Type"];var d=new XMLHttpRequest;if(e.auth){var p=e.auth.username||"",h=e.auth.password||"";l.Authorization="Basic "+btoa(p+":"+h)}if(d.open(e.method.toUpperCase(),s(e.url,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?i(d.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?d.response:d.responseText,status:d.status,statusText:d.statusText,headers:n,config:e,request:d};o(t,u,r),d=null}},d.onabort=function(){d&&(u(c("Request aborted",e,"ECONNABORTED",d)),d=null)},d.onerror=function(){u(c("Network Error",e,null,d)),d=null},d.ontimeout=function(){u(c("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var m=n(33),y=(e.withCredentials||a(e.url))&&e.xsrfCookieName?m.read(e.xsrfCookieName):void 0;y&&(l[e.xsrfHeaderName]=y)}if("setRequestHeader"in d&&r.forEach(l,(function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete l[t]:d.setRequestHeader(t,e)})),e.withCredentials&&(d.withCredentials=!0),e.responseType)try{d.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){d&&(d.abort(),u(e),d=null)})),void 0===f&&(f=null),d.send(f)}))}},function(e,t,n){"use strict";var r=n(30);e.exports=function(e,t,n,o,s){var i=new Error(e);return r(i,t,n,o,s)}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){t=t||{};var n={};return r.forEach(["url","method","params","data"],(function(e){void 0!==t[e]&&(n[e]=t[e])})),r.forEach(["headers","auth","proxy"],(function(o){r.isObject(t[o])?n[o]=r.deepMerge(e[o],t[o]):void 0!==t[o]?n[o]=t[o]:r.isObject(e[o])?n[o]=r.deepMerge(e[o]):void 0!==e[o]&&(n[o]=e[o])})),r.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],(function(r){void 0!==t[r]?n[r]=t[r]:void 0!==e[r]&&(n[r]=e[r])})),n}},function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(13);e.exports=r.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(14),o=n(39),s=n(40),i=n(41),a=n(42),c=n(43),u=n(44);class f{constructor(e,t){this.apiConfig={baseURL:"https://chastikey.com",repo:"api",apiVersion:"v0.4"},this.exportConfig={baseURL:"https://chastikey.com",repo:"json",apiVersion:"v1.0"},this.CheckLock=new r.CheckLock(this.apiConfig),this.ListLocks=new s.ListLocks(this.apiConfig),this.Ticker=new i.Ticker(this.apiConfig),this.CompletedLocks=new o.CompletedLocks(this.exportConfig),this.DateFirstKeyheld=new a.DateFirstKeyheld(this.exportConfig),this.KeyholderTotalLocksManaged=new c.KeyholderTotalLocksManaged(this.exportConfig),this.RunningLocks=new u.RunningLocks(this.exportConfig),void 0!==e&&("api"===e.repo&&e&&Object.assign(this.apiConfig,e),"json"===e.repo&&e&&Object.assign(this.exportConfig,e)),void 0!==t&&Object.assign(this.exportConfig,e)}}t.ChastiKey=f,t.default=f},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const o=n(2),s=n(1);class i extends s.APIBase{get(e){return r(this,void 0,void 0,(function*(){return new o.CheckLockResponse(yield this.request("checklock.php",e))}))}getByUsername(e,t,n){return r(this,void 0,void 0,(function*(){return this.get({username:e,lockid:t,bot:n})}))}}t.CheckLock=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(3);class o extends r.ListLocksResponse{}t.CheckLockResponse=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.username="username",e.sharedLockID="sharedLockID",e.regularity="regularity",e.multipleGreensRequired="multipleGreensRequired",e.timestampLocked="timestampLocked",e.timestampUnlocked="timestampUnlocked",e.fixed="fixed",e.cumulative="cumulative",e.initialGreenCards="initialGreenCards",e.initialRedCards="initialRedCards",e.initialYellowCards="initialYellowCards",e.initialDoubleUpCards="initialDoubleUpCards",e.initialResetCards="initialResetCards",e.noOfTurns="noOfTurns",e.version="version",e.build="build",e.rating="rating"}(t.ICompletedLocksSearchParam||(t.ICompletedLocksSearchParam={}));t.CompletedLocksResponse=class{constructor(e){this.locks=[],e&&(this.locks=e.map(e=>new r(e)))}search(...e){var t=this.locks;return e.forEach(e=>{for(const n in e){const r=n;t=t.filter(t=>"object"==typeof e[r]?new RegExp(e[r]).test(t[r]):t[r]===e[r])}}),t}};class r{constructor(e){Object.assign(this,e)}}t.CompletedLocksLock=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.username="username",e.locks_managed="locks_managed",e.date="date"}(t.IDateFirstKeyheldSearchParam||(t.IDateFirstKeyheldSearchParam={}));t.DateFirstKeyheldResponse=class{constructor(e){this.keyholders=[],e&&(this.keyholders=e.map(e=>new r(e)))}search(...e){var t=this.keyholders;return e.forEach(e=>{for(const n in e){const r=n;t=t.filter(t=>"object"==typeof e[r]?new RegExp(e[r]).test(t[r]):t[r]===e[r])}}),t}};class r{constructor(e){Object.assign(this,e)}}t.DateFirstKeyheldEntry=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.username="username",e.countLocksManaged="countLocksManaged"}(t.IKeyholderTotalLocksManagedSearchParam||(t.IKeyholderTotalLocksManagedSearchParam={}));t.KeyholderTotalLocksManagedResponse=class{constructor(e){this.keyholders=[],e&&(this.keyholders=e.map(e=>new r(e)))}search(...e){var t=this.keyholders;return e.forEach(e=>{for(const n in e){const r=n;t=t.filter(t=>"object"==typeof e[r]?new RegExp(e[r]).test(t[r]):t[r]===e[r])}}),t}};class r{constructor(e){Object.assign(this,e)}}t.KeyholderTotalLocksManagedEntry=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.username="username",e.sharedLockID="sharedLockID",e.regularity="regularity",e.multipleGreensRequired="multipleGreensRequired",e.timestampLocked="timestampLocked",e.timestampNow="timestampNow",e.secondsLocked="secondsLocked",e.fixed="fixed",e.cumulative="cumulative",e.noOfTurns="noOfTurns",e.version="version",e.build="build"}(t.IRunningLocksSearchParam||(t.IRunningLocksSearchParam={}));t.RunningLocksResponse=class{constructor(e){this.locks=[],e&&(this.locks=e.map(e=>new r(e)))}search(...e){var t=this.locks;return e.forEach(e=>{for(const n in e){const r=n;t=t.filter(t=>"object"==typeof e[r]?new RegExp(e[r]).test(t[r]):t[r]===e[r])}}),t}};class r{constructor(e){Object.assign(this,e)}}t.RunningLocksLock=r},function(e,t,n){e.exports=n(21)},function(e,t,n){"use strict";var r=n(0),o=n(4),s=n(23),i=n(10);function a(e){var t=new s(e),n=o(s.prototype.request,t);return r.extend(n,s.prototype,t),r.extend(n,t),n}var c=a(n(7));c.Axios=s,c.create=function(e){return a(i(c.defaults,e))},c.Cancel=n(11),c.CancelToken=n(36),c.isCancel=n(6),c.all=function(e){return Promise.all(e)},c.spread=n(37),e.exports=c,e.exports.default=c},function(e,t){
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},function(e,t,n){"use strict";var r=n(0),o=n(5),s=n(24),i=n(25),a=n(10);function c(e){this.defaults=e,this.interceptors={request:new s,response:new s}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=a(this.defaults,e)).method=e.method?e.method.toLowerCase():"get";var t=[i,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=a(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(r.merge(n||{},{method:e,url:t}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,o){return this.request(r.merge(o||{},{method:e,url:t,data:n}))}})),e.exports=c},function(e,t,n){"use strict";var r=n(0);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},function(e,t,n){"use strict";var r=n(0),o=n(26),s=n(6),i=n(7),a=n(34),c=n(35);function u(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return u(e),e.baseURL&&!a(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||i.adapter)(e).then((function(t){return u(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return s(t)||(u(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},function(e,t){var n,r,o=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(e){n=s}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var c,u=[],f=!1,l=-1;function d(){f&&c&&(f=!1,c.length?u=c.concat(u):l=-1,u.length&&p())}function p(){if(!f){var e=a(d);f=!0;for(var t=u.length;t;){for(c=u,u=[];++l<t;)c&&c[l].run();l=-1,t=u.length}c=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new h(e,t)),1!==u.length||f||a(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},function(e,t,n){"use strict";var r=n(9);e.exports=function(e,t,n){var o=n.config.validateStatus;!o||o(n.status)?e(n):t(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,n){"use strict";var r=n(0),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,s,i={};return e?(r.forEach(e.split("\n"),(function(e){if(s=e.indexOf(":"),t=r.trim(e.substr(0,s)).toLowerCase(),n=r.trim(e.substr(s+1)),t){if(i[t]&&o.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([n]):i[t]?i[t]+", "+n:n}})),i):i}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,s,i){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(s)&&a.push("domain="+s),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";var r=n(11);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class r extends Error{constructor(e,t){super(t),this.code=e,Object.setPrototypeOf(this,new.target.prototype)}}t.FetchError=r},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),s=n(2);class i extends o.APIBase{get(){return r(this,void 0,void 0,(function*(){return new s.CompletedLocksResponse(yield this.requestDataExport("completed_locks.json"))}))}}t.CompletedLocks=i},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const o=n(2),s=n(1);class i extends s.APIBase{get(e){return r(this,void 0,void 0,(function*(){return new o.ListLocksResponse(yield this.request("listlocks2.php",e))}))}getByUsername(e,t,n){return r(this,void 0,void 0,(function*(){return this.get({username:e,showdeleted:t,bot:n})}))}}t.ListLocks=i},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const o=n(1);class s extends o.APIBase{getURL(e){return r(this,void 0,void 0,(function*(){const t=Object.assign({startDate:null,fileExt:null,addTimestamp:null},e.optional),n="Keyholder"===e.type?"1":"2",r=`&un=${e.username}`,o=`&r=${e.show5StarRating?"1":"0"}`,s=t.addTimestamp?`&ts=${Date.now()}`:"",i=t.fileExt?`&ext=.${t.fileExt}`:"";return`https://chastikey.com/tickers/ticker.php?ty=${n}${s}${r}${t.startDate?`&fd=${t.startDate.year||"2016"}-${t.startDate.month||"01"}-${t.startDate.day||"01"}`:""}${o}${i}`}))}}t.Ticker=s},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),s=n(2);class i extends o.APIBase{get(){return r(this,void 0,void 0,(function*(){return new s.DateFirstKeyheldResponse(yield this.requestDataExport("date_first_keyheld.json"))}))}}t.DateFirstKeyheld=i},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),s=n(2);class i extends o.APIBase{get(){return r(this,void 0,void 0,(function*(){return new s.KeyholderTotalLocksManagedResponse(yield this.requestDataExport("keyholders_total_locks_managed.json"))}))}}t.KeyholderTotalLocksManaged=i},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),s=n(2);class i extends o.APIBase{get(){return r(this,void 0,void 0,(function*(){return new s.RunningLocksResponse(yield this.requestDataExport("running_locks.json"))}))}}t.RunningLocks=i}]);