"use strict";(self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[]).push([[999],{8985:function(){},8004:function(e,c,t){t.d(c,{A3:function(){return S},AL:function(){return y},AV:function(){return M},Cc:function(){return b},EB:function(){return h},IN:function(){return I},Su:function(){return H},UR:function(){return N},Uv:function(){return L},WW:function(){return l},Wg:function(){return s},YD:function(){return C},Yd:function(){return g},Yj:function(){return U},aw:function(){return O},ik:function(){return P},kF:function(){return R},kx:function(){return k},my:function(){return D},o9:function(){return V},on:function(){return v},sX:function(){return z},t7:function(){return E},yy:function(){return x}});t(3248),t(8208);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const n=function(e){const c=[];let t=0;for(let n=0;n<e.length;n++){let a=e.charCodeAt(n);a<128?c[t++]=a:a<2048?(c[t++]=a>>6|192,c[t++]=63&a|128):55296===(64512&a)&&n+1<e.length&&56320===(64512&e.charCodeAt(n+1))?(a=65536+((1023&a)<<10)+(1023&e.charCodeAt(++n)),c[t++]=a>>18|240,c[t++]=a>>12&63|128,c[t++]=a>>6&63|128,c[t++]=63&a|128):(c[t++]=a>>12|224,c[t++]=a>>6&63|128,c[t++]=63&a|128)}return c},a=function(e){const c=[];let t=0,n=0;while(t<e.length){const a=e[t++];if(a<128)c[n++]=String.fromCharCode(a);else if(a>191&&a<224){const r=e[t++];c[n++]=String.fromCharCode((31&a)<<6|63&r)}else if(a>239&&a<365){const r=e[t++],i=e[t++],o=e[t++],s=((7&a)<<18|(63&r)<<12|(63&i)<<6|63&o)-65536;c[n++]=String.fromCharCode(55296+(s>>10)),c[n++]=String.fromCharCode(56320+(1023&s))}else{const r=e[t++],i=e[t++];c[n++]=String.fromCharCode((15&a)<<12|(63&r)<<6|63&i)}}return c.join("")},r={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,c){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=c?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let a=0;a<e.length;a+=3){const c=e[a],r=a+1<e.length,i=r?e[a+1]:0,o=a+2<e.length,s=o?e[a+2]:0,l=c>>2,u=(3&c)<<4|i>>4;let f=(15&i)<<2|s>>6,d=63&s;o||(d=64,r||(f=64)),n.push(t[l],t[u],t[f],t[d])}return n.join("")},encodeString(e,c){return this.HAS_NATIVE_SUPPORT&&!c?btoa(e):this.encodeByteArray(n(e),c)},decodeString(e,c){return this.HAS_NATIVE_SUPPORT&&!c?atob(e):a(this.decodeStringToByteArray(e,c))},decodeStringToByteArray(e,c){this.init_();const t=c?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let a=0;a<e.length;){const c=t[e.charAt(a++)],r=a<e.length,o=r?t[e.charAt(a)]:0;++a;const s=a<e.length,l=s?t[e.charAt(a)]:64;++a;const u=a<e.length,f=u?t[e.charAt(a)]:64;if(++a,null==c||null==o||null==l||null==f)throw new i;const d=c<<2|o>>4;if(n.push(d),64!==l){const e=o<<4&240|l>>2;if(n.push(e),64!==f){const e=l<<6&192|f;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const o=function(e){const c=n(e);return r.encodeByteArray(c,!0)},s=function(e){return o(e).replace(/\./g,"")},l=function(e){try{return r.decodeString(e,!0)}catch(c){console.error("base64Decode failed: ",c)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof t.g)return t.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=()=>u().__FIREBASE_DEFAULTS__,d=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",VUE_APP_FIREBASE_API_KEY:"AIzaSyDBX7HtC0qPslIoed38Wn2fib0DyoNt6b4",VUE_APP_FIREBASE_APP_ID:"1:839777244985:web:f515c2bbe257c69fe13ae8",VUE_APP_FIREBASE_AUTH_DOMAIN:"course-project-d74d4.firebaseapp.com",VUE_APP_FIREBASE_MESSAGE_SENDER_ID:"839777244985",VUE_APP_FIREBASE_PROJECT_ID:"course-project-d74d4",VUE_APP_FIREBASE_STORAGE_BUCKET:"course-project-d74d4.appspot.com",VUE_APP_I18N_FALLBACK_LOCALE:"en",VUE_APP_I18N_LOCALE:"ua",BASE_URL:"/vue-project/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},m=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const c=e&&l(e[1]);return c&&JSON.parse(c)},p=()=>{try{return f()||d()||m()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},h=e=>{var c,t;return null===(t=null===(c=p())||void 0===c?void 0:c.emulatorHosts)||void 0===t?void 0:t[e]},v=e=>{const c=h(e);if(!c)return;const t=c.lastIndexOf(":");if(t<=0||t+1===c.length)throw new Error(`Invalid host ${c} with no separate hostname and port!`);const n=parseInt(c.substring(t+1),10);return"["===c[0]?[c.substring(1,t-1),n]:[c.substring(0,t),n]},g=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config},z=e=>{var c;return null===(c=p())||void 0===c?void 0:c[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class V{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,c)=>{this.resolve=e,this.reject=c}))}wrapCallback(e){return(c,t)=>{c?this.reject(c):this.resolve(t),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(c):e(c,t))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e,c){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=c||"demo-project",a=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:a,exp:a+3600,auth_time:a,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e),o="";return[s(JSON.stringify(t)),s(JSON.stringify(i)),o].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function M(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(H())}function b(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function y(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function L(){const e=H();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function x(){try{return"object"===typeof indexedDB}catch(e){return!1}}function S(){return new Promise(((e,c)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(n);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(n),e(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var e;c((null===(e=a.error)||void 0===e?void 0:e.message)||"")}}catch(t){c(t)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const w="FirebaseError";class k extends Error{constructor(e,c,t){super(c),this.code=e,this.customData=t,this.name=w,Object.setPrototypeOf(this,k.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,N.prototype.create)}}class N{constructor(e,c,t){this.service=e,this.serviceName=c,this.errors=t}create(e,...c){const t=c[0]||{},n=`${this.service}/${e}`,a=this.errors[e],r=a?_(a,t):"Error",i=`${this.serviceName}: ${r} (${n}).`,o=new k(n,i,t);return o}}function _(e,c){return e.replace(A,((e,t)=>{const n=c[t];return null!=n?String(n):`<${t}?>`}))}const A=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e){for(const c in e)if(Object.prototype.hasOwnProperty.call(e,c))return!1;return!0}function I(e,c){if(e===c)return!0;const t=Object.keys(e),n=Object.keys(c);for(const a of t){if(!n.includes(a))return!1;const t=e[a],r=c[a];if(T(t)&&T(r)){if(!I(t,r))return!1}else if(t!==r)return!1}for(const a of n)if(!t.includes(a))return!1;return!0}function T(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function P(e){const c=[];for(const[t,n]of Object.entries(e))Array.isArray(n)?n.forEach((e=>{c.push(encodeURIComponent(t)+"="+encodeURIComponent(e))})):c.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return c.length?"&"+c.join("&"):""}function O(e){const c={},t=e.replace(/^\?/,"").split("&");return t.forEach((e=>{if(e){const[t,n]=e.split("=");c[decodeURIComponent(t)]=decodeURIComponent(n)}})),c}function R(e){const c=e.indexOf("?");if(!c)return"";const t=e.indexOf("#",c);return e.substring(c,t>0?t:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e,c){const t=new F(e,c);return t.subscribe.bind(t)}class F{constructor(e,c){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=c,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((c=>{c.next(e)}))}error(e){this.forEachObserver((c=>{c.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,c,t){let n;if(void 0===e&&void 0===c&&void 0===t)throw new Error("Missing Observer.");n=B(e,["next","error","complete"])?e:{next:e,error:c,complete:t},void 0===n.next&&(n.next=K),void 0===n.error&&(n.error=K),void 0===n.complete&&(n.complete=K);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}})),this.observers.push(n),a}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let c=0;c<this.observers.length;c++)this.sendOne(c,e)}sendOne(e,c){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{c(this.observers[e])}catch(t){"undefined"!==typeof console&&console.error&&console.error(t)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function B(e,c){if("object"!==typeof e||null===e)return!1;for(const t of c)if(t in e&&"function"===typeof e[t])return!0;return!1}function K(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function U(e){return e&&e._delegate?e._delegate:e}},4256:function(e,c,t){t.d(c,{us:function(){return _}});t(3248);var n=t(973),a=t(4108);function r(e,c){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);c&&(n=n.filter((function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var c=1;c<arguments.length;c++){var t=null!=arguments[c]?arguments[c]:{};c%2?r(Object(t),!0).forEach((function(c){s(e,c,t[c])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(c){Object.defineProperty(e,c,Object.getOwnPropertyDescriptor(t,c))}))}return e}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function s(e,c,t){return c=z(c),c in e?Object.defineProperty(e,c,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[c]=t,e}function l(e,c){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],c.indexOf(t)>=0||(a[t]=e[t]);return a}function u(e,c){if(null==e)return{};var t,n,a=l(e,c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],c.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function f(e){return d(e)||m(e)||p(e)||v()}function d(e){if(Array.isArray(e))return h(e)}function m(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function p(e,c){if(e){if("string"===typeof e)return h(e,c);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?h(e,c):void 0}}function h(e,c){(null==c||c>e.length)&&(c=e.length);for(var t=0,n=new Array(c);t<c;t++)n[t]=e[t];return n}function v(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function g(e,c){if("object"!==typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,c||"default");if("object"!==typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===c?String:Number)(e)}function z(e){var c=g(e,"string");return"symbol"===typeof c?c:String(c)}var V="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t.g?t.g:"undefined"!==typeof self?self:{},C={exports:{}};(function(e){(function(c){var t=function(e,c,n){if(!l(c)||f(c)||d(c)||m(c)||s(c))return c;var a,r=0,i=0;if(u(c))for(a=[],i=c.length;r<i;r++)a.push(t(e,c[r],n));else for(var o in a={},c)Object.prototype.hasOwnProperty.call(c,o)&&(a[e(o,n)]=t(e,c[o],n));return a},n=function(e,c){c=c||{};var t=c.separator||"_",n=c.split||/(?=[A-Z])/;return e.split(n).join(t)},a=function(e){return p(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,c){return c?c.toUpperCase():""})),e.substr(0,1).toLowerCase()+e.substr(1))},r=function(e){var c=a(e);return c.substr(0,1).toUpperCase()+c.substr(1)},i=function(e,c){return n(e,c).toLowerCase()},o=Object.prototype.toString,s=function(e){return"function"===typeof e},l=function(e){return e===Object(e)},u=function(e){return"[object Array]"==o.call(e)},f=function(e){return"[object Date]"==o.call(e)},d=function(e){return"[object RegExp]"==o.call(e)},m=function(e){return"[object Boolean]"==o.call(e)},p=function(e){return e-=0,e===e},h=function(e,c){var t=c&&"process"in c?c.process:c;return"function"!==typeof t?e:function(c,n){return t(c,e,n)}},v={camelize:a,decamelize:i,pascalize:r,depascalize:i,camelizeKeys:function(e,c){return t(h(a,c),e)},decamelizeKeys:function(e,c){return t(h(i,c),e,c)},pascalizeKeys:function(e,c){return t(h(r,c),e)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=v:c.humps=v})(V)})(C);var H=C.exports,M=["class","style"];function b(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,c){var t=c.indexOf(":"),n=H.camelize(c.slice(0,t)),a=c.slice(t+1).trim();return e[n]=a,e}),{})}function y(e){return e.split(/\s+/).reduce((function(e,c){return e[c]=!0,e}),{})}function L(e){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof e)return e;var n=(e.children||[]).map((function(e){return L(e)})),r=Object.keys(e.attributes||{}).reduce((function(c,t){var n=e.attributes[t];switch(t){case"class":c.class=y(n);break;case"style":c.style=b(n);break;default:c.attrs[t]=n}return c}),{attrs:{},class:{},style:{}});t.class;var o=t.style,s=void 0===o?{}:o,l=u(t,M);return(0,a.h)(e.tag,i(i(i({},c),{},{class:r.class,style:i(i({},r.style),s)},r.attrs),l),n)}var x=!1;try{x=!0}catch(A){}function S(){var e;!x&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}function w(e,c){return Array.isArray(c)&&c.length>0||!Array.isArray(c)&&c?s({},e,c):{}}function k(e){var c,t=(c={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":!0===e.flip,"fa-flip-horizontal":"horizontal"===e.flip||"both"===e.flip,"fa-flip-vertical":"vertical"===e.flip||"both"===e.flip},s(c,"fa-".concat(e.size),null!==e.size),s(c,"fa-rotate-".concat(e.rotation),null!==e.rotation),s(c,"fa-pull-".concat(e.pull),null!==e.pull),s(c,"fa-swap-opacity",e.swapOpacity),s(c,"fa-bounce",e.bounce),s(c,"fa-shake",e.shake),s(c,"fa-beat",e.beat),s(c,"fa-fade",e.fade),s(c,"fa-beat-fade",e.beatFade),s(c,"fa-flash",e.flash),s(c,"fa-spin-pulse",e.spinPulse),s(c,"fa-spin-reverse",e.spinReverse),c);return Object.keys(t).map((function(e){return t[e]?e:null})).filter((function(e){return e}))}function N(e){return e&&"object"===o(e)&&e.prefix&&e.iconName&&e.icon?e:n.K0.icon?n.K0.icon(e):null===e?null:"object"===o(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}var _=(0,a._M)({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,c){var t=c.attrs,r=(0,a.S6)((function(){return N(e.icon)})),o=(0,a.S6)((function(){return w("classes",k(e))})),s=(0,a.S6)((function(){return w("transform","string"===typeof e.transform?n.K0.transform(e.transform):e.transform)})),l=(0,a.S6)((function(){return w("mask",N(e.mask))})),u=(0,a.S6)((function(){return(0,n.Kk)(r.value,i(i(i(i({},o.value),s.value),l.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))}));(0,a.Kg)(u,(function(e){if(!e)return S("Could not find one or more icon(s)",r.value,l.value)}),{immediate:!0});var f=(0,a.S6)((function(){return u.value?L(u.value.abstract[0],{},t):null}));return function(){return f.value}}});(0,a._M)({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,c){var t=c.slots,r=n.Ej.familyPrefix,i=(0,a.S6)((function(){return["".concat(r,"-layers")].concat(f(e.fixedWidth?["".concat(r,"-fw")]:[]))}));return function(){return(0,a.h)("div",{class:i.value},t.default?t.default():[])}}}),(0,a._M)({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,c){var t=c.attrs,r=n.Ej.familyPrefix,o=(0,a.S6)((function(){return w("classes",[].concat(f(e.counter?["".concat(r,"-layers-counter")]:[]),f(e.position?["".concat(r,"-layers-").concat(e.position)]:[])))})),s=(0,a.S6)((function(){return w("transform","string"===typeof e.transform?n.K0.transform(e.transform):e.transform)})),l=(0,a.S6)((function(){var c=(0,n.q2)(e.value.toString(),i(i({},s.value),o.value)),t=c.abstract;return e.counter&&(t[0].attributes.class=t[0].attributes.class.replace("fa-layers-text","")),t[0]})),u=(0,a.S6)((function(){return L(l.value,{},t)}));return function(){return u.value}}})},2500:function(e,c,t){t.d(c,{C7:function(){return $e},IL:function(){return Ie},Ir:function(){return Ee},KV:function(){return Re},Md:function(){return xe},Nc:function(){return Le},S0:function(){return V},S6:function(){return Ne},Ul:function(){return o},YT:function(){return i},_I:function(){return f},_o:function(){return u},ao:function(){return l},cB:function(){return ge},cf:function(){return Fe},g3:function(){return be},g7:function(){return ze},gV:function(){return _},kH:function(){return N},kl:function(){return Te},kx:function(){return Be},nc:function(){return He},qo:function(){return C},sR:function(){return Ve},st:function(){return ye}});t(3248);var n=t(9096);let a,r;class i{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=a,!e&&a&&(this.index=(a.scopes||(a.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const c=a;try{return a=this,e()}finally{a=c}}else 0}on(){a=this}off(){a=this.parent}stop(e){if(this._active){let c,t;for(c=0,t=this.effects.length;c<t;c++)this.effects[c].stop();for(c=0,t=this.cleanups.length;c<t;c++)this.cleanups[c]();if(this.scopes)for(c=0,t=this.scopes.length;c<t;c++)this.scopes[c].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}function o(e){return new i(e)}function s(e,c=a){c&&c.active&&c.effects.push(e)}function l(){return a}function u(e){a&&a.cleanups.push(e)}class f{constructor(e,c,t,n){this.fn=e,this.trigger=c,this.scheduler=t,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,s(this,n)}get dirty(){if(2===this._dirtyLevel||3===this._dirtyLevel){this._dirtyLevel=1,V();for(let e=0;e<this._depsLength;e++){const c=this.deps[e];if(c.computed&&(d(c.computed),this._dirtyLevel>=4))break}1===this._dirtyLevel&&(this._dirtyLevel=0),C()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=v,c=r;try{return v=!0,r=this,this._runnings++,m(this),this.fn()}finally{p(this),this._runnings--,r=c,v=e}}stop(){var e;this.active&&(m(this),p(this),null==(e=this.onStop)||e.call(this),this.active=!1)}}function d(e){return e.value}function m(e){e._trackId++,e._depsLength=0}function p(e){if(e.deps.length>e._depsLength){for(let c=e._depsLength;c<e.deps.length;c++)h(e.deps[c],e);e.deps.length=e._depsLength}}function h(e,c){const t=e.get(c);void 0!==t&&c._trackId!==t&&(e.delete(c),0===e.size&&e.cleanup())}let v=!0,g=0;const z=[];function V(){z.push(v),v=!1}function C(){const e=z.pop();v=void 0===e||e}function H(){g++}function M(){g--;while(!g&&y.length)y.shift()()}function b(e,c,t){if(c.get(e)!==e._trackId){c.set(e,e._trackId);const t=e.deps[e._depsLength];t!==c?(t&&h(t,e),e.deps[e._depsLength++]=c):e._depsLength++}}const y=[];function L(e,c,t){H();for(const n of e.keys()){let t;n._dirtyLevel<c&&(null!=t?t:t=e.get(n)===n._trackId)&&(n._shouldSchedule||(n._shouldSchedule=0===n._dirtyLevel),n._dirtyLevel=c),n._shouldSchedule&&(null!=t?t:t=e.get(n)===n._trackId)&&(n.trigger(),n._runnings&&!n.allowRecurse||2===n._dirtyLevel||(n._shouldSchedule=!1,n.scheduler&&y.push(n.scheduler)))}M()}const x=(e,c)=>{const t=new Map;return t.cleanup=e,t.computed=c,t},S=new WeakMap,w=Symbol(""),k=Symbol("");function N(e,c,t){if(v&&r){let c=S.get(e);c||S.set(e,c=new Map);let n=c.get(t);n||c.set(t,n=x((()=>c.delete(t)))),b(r,n,void 0)}}function _(e,c,t,a,r,i){const o=S.get(e);if(!o)return;let s=[];if("clear"===c)s=[...o.values()];else if("length"===t&&(0,n.c7)(e)){const e=Number(a);o.forEach(((c,t)=>{("length"===t||!(0,n.aO)(t)&&t>=e)&&s.push(c)}))}else switch(void 0!==t&&s.push(o.get(t)),c){case"add":(0,n.c7)(e)?(0,n.cJ)(t)&&s.push(o.get("length")):(s.push(o.get(w)),(0,n.cF)(e)&&s.push(o.get(k)));break;case"delete":(0,n.c7)(e)||(s.push(o.get(w)),(0,n.cF)(e)&&s.push(o.get(k)));break;case"set":(0,n.cF)(e)&&s.push(o.get(w));break}H();for(const n of s)n&&L(n,4,void 0);M()}function A(e,c){var t;return null==(t=S.get(e))?void 0:t.get(c)}const E=(0,n.kX)("__proto__,__v_isRef,__isVue"),I=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(n.aO)),T=P();function P(){const e={};return["includes","indexOf","lastIndexOf"].forEach((c=>{e[c]=function(...e){const t=Le(this);for(let c=0,a=this.length;c<a;c++)N(t,"get",c+"");const n=t[c](...e);return-1===n||!1===n?t[c](...e.map(Le)):n}})),["push","pop","shift","unshift","splice"].forEach((c=>{e[c]=function(...e){V(),H();const t=Le(this)[c].apply(this,e);return M(),C(),t}})),e}function O(e){const c=Le(this);return N(c,"has",e),c.hasOwnProperty(e)}class R{constructor(e=!1,c=!1){this._isReadonly=e,this._shallow=c}get(e,c,t){const a=this._isReadonly,r=this._shallow;if("__v_isReactive"===c)return!a;if("__v_isReadonly"===c)return a;if("__v_isShallow"===c)return r;if("__v_raw"===c)return t===(a?r?pe:me:r?de:fe).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(t)?e:void 0;const i=(0,n.c7)(e);if(!a){if(i&&(0,n.Yz)(T,c))return Reflect.get(T,c,t);if("hasOwnProperty"===c)return O}const o=Reflect.get(e,c,t);return((0,n.aO)(c)?I.has(c):E(c))?o:(a||N(e,"get",c),r?o:Ee(o)?i&&(0,n.cJ)(c)?o:o.value:(0,n.Y9)(o)?a?Ve(o):ge(o):o)}}class D extends R{constructor(e=!1){super(!1,e)}set(e,c,t,a){let r=e[c];if(!this._shallow){const c=Me(r);if(be(t)||Me(t)||(r=Le(r),t=Le(t)),!(0,n.c7)(e)&&Ee(r)&&!Ee(t))return!c&&(r.value=t,!0)}const i=(0,n.c7)(e)&&(0,n.cJ)(c)?Number(c)<e.length:(0,n.Yz)(e,c),o=Reflect.set(e,c,t,a);return e===Le(a)&&(i?(0,n.mz)(t,r)&&_(e,"set",c,t,r):_(e,"add",c,t)),o}deleteProperty(e,c){const t=(0,n.Yz)(e,c),a=e[c],r=Reflect.deleteProperty(e,c);return r&&t&&_(e,"delete",c,void 0,a),r}has(e,c){const t=Reflect.has(e,c);return(0,n.aO)(c)&&I.has(c)||N(e,"has",c),t}ownKeys(e){return N(e,"iterate",(0,n.c7)(e)?"length":w),Reflect.ownKeys(e)}}class F extends R{constructor(e=!1){super(!0,e)}set(e,c){return!0}deleteProperty(e,c){return!0}}const B=new D,K=new F,U=new D(!0),$=e=>e,j=e=>Reflect.getPrototypeOf(e);function q(e,c,t=!1,a=!1){e=e["__v_raw"];const r=Le(e),i=Le(c);t||((0,n.mz)(c,i)&&N(r,"get",c),N(r,"get",i));const{has:o}=j(r),s=a?$:t?we:Se;return o.call(r,c)?s(e.get(c)):o.call(r,i)?s(e.get(i)):void(e!==r&&e.get(c))}function G(e,c=!1){const t=this["__v_raw"],a=Le(t),r=Le(e);return c||((0,n.mz)(e,r)&&N(a,"has",e),N(a,"has",r)),e===r?t.has(e):t.has(e)||t.has(r)}function W(e,c=!1){return e=e["__v_raw"],!c&&N(Le(e),"iterate",w),Reflect.get(e,"size",e)}function Y(e){e=Le(e);const c=Le(this),t=j(c),n=t.has.call(c,e);return n||(c.add(e),_(c,"add",e,e)),this}function Z(e,c){c=Le(c);const t=Le(this),{has:a,get:r}=j(t);let i=a.call(t,e);i||(e=Le(e),i=a.call(t,e));const o=r.call(t,e);return t.set(e,c),i?(0,n.mz)(c,o)&&_(t,"set",e,c,o):_(t,"add",e,c),this}function X(e){const c=Le(this),{has:t,get:n}=j(c);let a=t.call(c,e);a||(e=Le(e),a=t.call(c,e));const r=n?n.call(c,e):void 0,i=c.delete(e);return a&&_(c,"delete",e,void 0,r),i}function J(){const e=Le(this),c=0!==e.size,t=void 0,n=e.clear();return c&&_(e,"clear",void 0,void 0,t),n}function Q(e,c){return function(t,n){const a=this,r=a["__v_raw"],i=Le(r),o=c?$:e?we:Se;return!e&&N(i,"iterate",w),r.forEach(((e,c)=>t.call(n,o(e),o(c),a)))}}function ee(e,c,t){return function(...a){const r=this["__v_raw"],i=Le(r),o=(0,n.cF)(i),s="entries"===e||e===Symbol.iterator&&o,l="keys"===e&&o,u=r[e](...a),f=t?$:c?we:Se;return!c&&N(i,"iterate",l?k:w),{next(){const{value:e,done:c}=u.next();return c?{value:e,done:c}:{value:s?[f(e[0]),f(e[1])]:f(e),done:c}},[Symbol.iterator](){return this}}}}function ce(e){return function(...c){return"delete"!==e&&("clear"===e?void 0:this)}}function te(){const e={get(e){return q(this,e)},get size(){return W(this)},has:G,add:Y,set:Z,delete:X,clear:J,forEach:Q(!1,!1)},c={get(e){return q(this,e,!1,!0)},get size(){return W(this)},has:G,add:Y,set:Z,delete:X,clear:J,forEach:Q(!1,!0)},t={get(e){return q(this,e,!0)},get size(){return W(this,!0)},has(e){return G.call(this,e,!0)},add:ce("add"),set:ce("set"),delete:ce("delete"),clear:ce("clear"),forEach:Q(!0,!1)},n={get(e){return q(this,e,!0,!0)},get size(){return W(this,!0)},has(e){return G.call(this,e,!0)},add:ce("add"),set:ce("set"),delete:ce("delete"),clear:ce("clear"),forEach:Q(!0,!0)},a=["keys","values","entries",Symbol.iterator];return a.forEach((a=>{e[a]=ee(a,!1,!1),t[a]=ee(a,!0,!1),c[a]=ee(a,!1,!0),n[a]=ee(a,!0,!0)})),[e,t,c,n]}const[ne,ae,re,ie]=te();function oe(e,c){const t=c?e?ie:re:e?ae:ne;return(c,a,r)=>"__v_isReactive"===a?!e:"__v_isReadonly"===a?e:"__v_raw"===a?c:Reflect.get((0,n.Yz)(t,a)&&a in c?t:c,a,r)}const se={get:oe(!1,!1)},le={get:oe(!1,!0)},ue={get:oe(!0,!1)};const fe=new WeakMap,de=new WeakMap,me=new WeakMap,pe=new WeakMap;function he(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ve(e){return e["__v_skip"]||!Object.isExtensible(e)?0:he((0,n.An)(e))}function ge(e){return Me(e)?e:Ce(e,!1,B,se,fe)}function ze(e){return Ce(e,!1,U,le,de)}function Ve(e){return Ce(e,!0,K,ue,me)}function Ce(e,c,t,a,r){if(!(0,n.Y9)(e))return e;if(e["__v_raw"]&&(!c||!e["__v_isReactive"]))return e;const i=r.get(e);if(i)return i;const o=ve(e);if(0===o)return e;const s=new Proxy(e,2===o?a:t);return r.set(e,s),s}function He(e){return Me(e)?He(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Me(e){return!(!e||!e["__v_isReadonly"])}function be(e){return!(!e||!e["__v_isShallow"])}function ye(e){return He(e)||Me(e)}function Le(e){const c=e&&e["__v_raw"];return c?Le(c):e}function xe(e){return Object.isExtensible(e)&&(0,n.u6)(e,"__v_skip",!0),e}const Se=e=>(0,n.Y9)(e)?ge(e):e,we=e=>(0,n.Y9)(e)?Ve(e):e;class ke{constructor(e,c,t,n){this._setter=c,this.dep=void 0,this.__v_isRef=!0,this["__v_isReadonly"]=!1,this.effect=new f((()=>e(this._value)),(()=>Ae(this,2===this.effect._dirtyLevel?2:3))),this.effect.computed=this,this.effect.active=this._cacheable=!n,this["__v_isReadonly"]=t}get value(){const e=Le(this);return e._cacheable&&!e.effect.dirty||!(0,n.mz)(e._value,e._value=e.effect.run())||Ae(e,4),_e(e),e.effect._dirtyLevel>=2&&Ae(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Ne(e,c,t=!1){let a,r;const i=(0,n.mg)(e);i?(a=e,r=n.e_):(a=e.get,r=e.set);const o=new ke(a,r,i||!r,t);return o}function _e(e){var c;v&&r&&(e=Le(e),b(r,null!=(c=e.dep)?c:e.dep=x((()=>e.dep=void 0),e instanceof ke?e:void 0),void 0))}function Ae(e,c=4,t){e=Le(e);const n=e.dep;n&&L(n,c,void 0)}function Ee(e){return!(!e||!0!==e.__v_isRef)}function Ie(e){return Pe(e,!1)}function Te(e){return Pe(e,!0)}function Pe(e,c){return Ee(e)?e:new Oe(e,c)}class Oe{constructor(e,c){this.__v_isShallow=c,this.dep=void 0,this.__v_isRef=!0,this._rawValue=c?e:Le(e),this._value=c?e:Se(e)}get value(){return _e(this),this._value}set value(e){const c=this.__v_isShallow||be(e)||Me(e);e=c?e:Le(e),(0,n.mz)(e,this._rawValue)&&(this._rawValue=e,this._value=c?e:Se(e),Ae(this,4,e))}}function Re(e){return Ee(e)?e.value:e}const De={get:(e,c,t)=>Re(Reflect.get(e,c,t)),set:(e,c,t,n)=>{const a=e[c];return Ee(a)&&!Ee(t)?(a.value=t,!0):Reflect.set(e,c,t,n)}};function Fe(e){return He(e)?e:new Proxy(e,De)}function Be(e){const c=(0,n.c7)(e)?new Array(e.length):{};for(const t in e)c[t]=je(e,t);return c}class Ke{constructor(e,c,t){this._object=e,this._key=c,this._defaultValue=t,this.__v_isRef=!0}get value(){const e=this._object[this._key];return void 0===e?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return A(Le(this._object),this._key)}}class Ue{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function $e(e,c,t){return Ee(e)?e:(0,n.mg)(e)?new Ue(e):(0,n.Y9)(e)&&arguments.length>1?je(e,c,t):Ie(e)}function je(e,c,t){const n=e[c];return Ee(n)?n:new Ke(e,c,t)}},4108:function(e,c,t){t.d(c,{An:function(){return mt},Az:function(){return pt},Cg:function(){return et},E1:function(){return $},GE:function(){return Re},Gu:function(){return Nt},In:function(){return fe},K2:function(){return Ht},KE:function(){return ht},Kg:function(){return te},O:function(){return Rc},OA:function(){return Oe},QD:function(){return Ct},Ql:function(){return T},S6:function(){return en},Wz:function(){return st},YN:function(){return ge},Yb:function(){return Pe},Zl:function(){return gc},_M:function(){return Me},_O:function(){return Ie},_S:function(){return Pt},a:function(){return nt},a1:function(){return He},a6:function(){return i},ae:function(){return tt},c1:function(){return he},g1:function(){return xt},gX:function(){return at},gf:function(){return yt},gn:function(){return Se},h:function(){return cn},iS:function(){return G},mY:function(){return Lt},mi:function(){return $e},mk:function(){return q},mo:function(){return nn},o$:function(){return z},oF:function(){return je},oR:function(){return me},q6:function(){return ee},sX:function(){return xe},u2:function(){return Te},uS:function(){return Ce},uU:function(){return zc},wt:function(){return oe},wx:function(){return De}});t(3248);var n=t(2500),a=t(9096);function r(e,c,t,n){let a;try{a=n?e(...n):e()}catch(r){o(r,c,t)}return a}function i(e,c,t,n){if((0,a.mg)(e)){const i=r(e,c,t,n);return i&&(0,a.um)(i)&&i.catch((e=>{o(e,c,t)})),i}const s=[];for(let a=0;a<e.length;a++)s.push(i(e[a],c,t,n));return s}function o(e,c,t,n=!0){const a=c?c.vnode:null;if(c){let n=c.parent;const a=c.proxy,i=`https://vuejs.org/error-reference/#runtime-${t}`;while(n){const c=n.ec;if(c)for(let t=0;t<c.length;t++)if(!1===c[t](e,a,i))return;n=n.parent}const o=c.appContext.config.errorHandler;if(o)return void r(o,null,10,[e,a,i])}s(e,t,a,n)}function s(e,c,t,n=!0){console.error(e)}let l=!1,u=!1;const f=[];let d=0;const m=[];let p=null,h=0;const v=Promise.resolve();let g=null;function z(e){const c=g||v;return e?c.then(this?e.bind(this):e):c}function V(e){let c=d+1,t=f.length;while(c<t){const n=c+t>>>1,a=f[n],r=x(a);r<e||r===e&&a.pre?c=n+1:t=n}return c}function C(e){f.length&&f.includes(e,l&&e.allowRecurse?d+1:d)||(null==e.id?f.push(e):f.splice(V(e.id),0,e),H())}function H(){l||u||(u=!0,g=v.then(w))}function M(e){const c=f.indexOf(e);c>d&&f.splice(c,1)}function b(e){(0,a.c7)(e)?m.push(...e):p&&p.includes(e,e.allowRecurse?h+1:h)||m.push(e),H()}function y(e,c,t=(l?d+1:0)){for(0;t<f.length;t++){const c=f[t];if(c&&c.pre){if(e&&c.id!==e.uid)continue;0,f.splice(t,1),t--,c()}}}function L(e){if(m.length){const e=[...new Set(m)].sort(((e,c)=>x(e)-x(c)));if(m.length=0,p)return void p.push(...e);for(p=e,h=0;h<p.length;h++)p[h]();p=null,h=0}}const x=e=>null==e.id?1/0:e.id,S=(e,c)=>{const t=x(e)-x(c);if(0===t){if(e.pre&&!c.pre)return-1;if(c.pre&&!e.pre)return 1}return t};function w(e){u=!1,l=!0,f.sort(S);a.e_;try{for(d=0;d<f.length;d++){const e=f[d];e&&!1!==e.active&&r(e,null,14)}}finally{d=0,f.length=0,L(e),l=!1,g=null,(f.length||m.length)&&w(e)}}function k(e,c,...t){if(e.isUnmounted)return;const n=e.vnode.props||a.kx;let r=t;const o=c.startsWith("update:"),s=o&&c.slice(7);if(s&&s in n){const e=`${"modelValue"===s?"model":s}Modifiers`,{number:c,trim:i}=n[e]||a.kx;i&&(r=t.map((e=>(0,a.ct)(e)?e.trim():e))),c&&(r=t.map(a.wB))}let l;let u=n[l=(0,a.GM)(c)]||n[l=(0,a.GM)((0,a.AX)(c))];!u&&o&&(u=n[l=(0,a.GM)((0,a.c$)(c))]),u&&i(u,e,6,r);const f=n[l+"Once"];if(f){if(e.emitted){if(e.emitted[l])return}else e.emitted={};e.emitted[l]=!0,i(f,e,6,r)}}function N(e,c,t=!1){const n=c.emitsCache,r=n.get(e);if(void 0!==r)return r;const i=e.emits;let o={},s=!1;if(!(0,a.mg)(e)){const n=e=>{const t=N(e,c,!0);t&&(s=!0,(0,a.SU)(o,t))};!t&&c.mixins.length&&c.mixins.forEach(n),e.extends&&n(e.extends),e.mixins&&e.mixins.forEach(n)}return i||s?((0,a.c7)(i)?i.forEach((e=>o[e]=null)):(0,a.SU)(o,i),(0,a.Y9)(e)&&n.set(e,o),o):((0,a.Y9)(e)&&n.set(e,null),null)}function _(e,c){return!(!e||!(0,a.W8)(c))&&(c=c.slice(2).replace(/Once$/,""),(0,a.Yz)(e,c[0].toLowerCase()+c.slice(1))||(0,a.Yz)(e,(0,a.c$)(c))||(0,a.Yz)(e,c))}let A=null,E=null;function I(e){const c=A;return A=e,E=e&&e.type.__scopeId||null,c}function T(e,c=A,t){if(!c)return e;if(e._n)return e;const n=(...t)=>{n._d&&ft(-1);const a=I(c);let r;try{r=e(...t)}finally{I(a),n._d&&ft(1)}return r};return n._n=!0,n._c=!0,n._d=!0,n}function P(e){const{type:c,vnode:t,proxy:n,withProxy:r,props:i,propsOptions:[s],slots:l,attrs:u,emit:f,render:d,renderCache:m,data:p,setupState:h,ctx:v,inheritAttrs:g}=e;let z,V;const C=I(e);try{if(4&t.shapeFlag){const e=r||n,c=e;z=St(d.call(c,e,m,i,h,p,v)),V=u}else{const e=c;0,z=St(e.length>1?e(i,{attrs:u,slots:l,emit:f}):e(i,null)),V=c.props?u:O(u)}}catch(M){it.length=0,o(M,e,1),z=Ht(at)}let H=z;if(V&&!1!==g){const e=Object.keys(V),{shapeFlag:c}=H;e.length&&7&c&&(s&&e.some(a._w)&&(V=R(V,s)),H=yt(H,V))}return t.dirs&&(H=yt(H),H.dirs=H.dirs?H.dirs.concat(t.dirs):t.dirs),t.transition&&(H.transition=t.transition),z=H,I(C),z}const O=e=>{let c;for(const t in e)("class"===t||"style"===t||(0,a.W8)(t))&&((c||(c={}))[t]=e[t]);return c},R=(e,c)=>{const t={};for(const n in e)(0,a._w)(n)&&n.slice(9)in c||(t[n]=e[n]);return t};function D(e,c,t){const{props:n,children:a,component:r}=e,{props:i,children:o,patchFlag:s}=c,l=r.emitsOptions;if(c.dirs||c.transition)return!0;if(!(t&&s>=0))return!(!a&&!o||o&&o.$stable)||n!==i&&(n?!i||F(n,i,l):!!i);if(1024&s)return!0;if(16&s)return n?F(n,i,l):!!i;if(8&s){const e=c.dynamicProps;for(let c=0;c<e.length;c++){const t=e[c];if(i[t]!==n[t]&&!_(l,t))return!0}}return!1}function F(e,c,t){const n=Object.keys(c);if(n.length!==Object.keys(e).length)return!0;for(let a=0;a<n.length;a++){const r=n[a];if(c[r]!==e[r]&&!_(t,r))return!0}return!1}function B({vnode:e,parent:c},t){while(c){const n=c.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.el=e.el),n!==e)break;(e=c.vnode).el=t,c=c.parent}}const K="components",U="directives";function $(e,c){return W(K,e,!0,c)||e}const j=Symbol.for("v-ndc");function q(e){return(0,a.ct)(e)?W(K,e,!1)||e:e||j}function G(e){return W(U,e)}function W(e,c,t=!0,n=!1){const r=A||Tt;if(r){const t=r.type;if(e===K){const e=Jt(t,!1);if(e&&(e===c||e===(0,a.AX)(c)||e===(0,a.Yj)((0,a.AX)(c))))return t}const i=Y(r[e]||t[e],c)||Y(r.appContext[e],c);return!i&&n?t:i}}function Y(e,c){return e&&(e[c]||e[(0,a.AX)(c)]||e[(0,a.Yj)((0,a.AX)(c))])}const Z=e=>e.__isSuspense;function X(e,c){c&&c.pendingBranch?(0,a.c7)(e)?c.effects.push(...e):c.effects.push(e):b(e)}const J=Symbol.for("v-scx"),Q=()=>{{const e=zc(J);return e}};function ee(e,c){return ne(e,null,c)}const ce={};function te(e,c,t){return ne(e,c,t)}function ne(e,c,{immediate:t,deep:o,flush:s,once:l,onTrack:u,onTrigger:f}=a.kx){if(c&&l){const e=c;c=(...c)=>{e(...c),x()}}const d=Tt,m=e=>!0===o?e:ie(e,!1===o?1:void 0);let p,h,v=!1,g=!1;if((0,n.Ir)(e)?(p=()=>e.value,v=(0,n.g3)(e)):(0,n.nc)(e)?(p=()=>m(e),v=!0):(0,a.c7)(e)?(g=!0,v=e.some((e=>(0,n.nc)(e)||(0,n.g3)(e))),p=()=>e.map((e=>(0,n.Ir)(e)?e.value:(0,n.nc)(e)?m(e):(0,a.mg)(e)?r(e,d,2):void 0))):p=(0,a.mg)(e)?c?()=>r(e,d,2):()=>(h&&h(),i(e,d,3,[V])):a.e_,c&&o){const e=p;p=()=>ie(e())}let z,V=e=>{h=y.onStop=()=>{r(e,d,4),h=y.onStop=void 0}};if($t){if(V=a.e_,c?t&&i(c,d,3,[p(),g?[]:void 0,V]):p(),"sync"!==s)return a.e_;{const e=Q();z=e.__watcherHandles||(e.__watcherHandles=[])}}let H=g?new Array(e.length).fill(ce):ce;const M=()=>{if(y.active&&y.dirty)if(c){const e=y.run();(o||v||(g?e.some(((e,c)=>(0,a.mz)(e,H[c]))):(0,a.mz)(e,H)))&&(h&&h(),i(c,d,3,[e,H===ce?void 0:g&&H[0]===ce?[]:H,V]),H=e)}else y.run()};let b;M.allowRecurse=!!c,"sync"===s?b=M:"post"===s?b=()=>Oc(M,d&&d.suspense):(M.pre=!0,d&&(M.id=d.uid),b=()=>C(M));const y=new n._I(p,a.e_,b),L=(0,n.ao)(),x=()=>{y.stop(),L&&(0,a.aE)(L.effects,y)};return c?t?M():H=y.run():"post"===s?Oc(y.run.bind(y),d&&d.suspense):y.run(),z&&z.push(x),x}function ae(e,c,t){const n=this.proxy,r=(0,a.ct)(e)?e.includes(".")?re(n,e):()=>n[e]:e.bind(n,n);let i;(0,a.mg)(c)?i=c:(i=c.handler,t=c);const o=Dt(this),s=ne(r,i.bind(n),t);return o(),s}function re(e,c){const t=c.split(".");return()=>{let c=e;for(let e=0;e<t.length&&c;e++)c=c[t[e]];return c}}function ie(e,c,t=0,r){if(!(0,a.Y9)(e)||e["__v_skip"])return e;if(c&&c>0){if(t>=c)return e;t++}if(r=r||new Set,r.has(e))return e;if(r.add(e),(0,n.Ir)(e))ie(e.value,c,t,r);else if((0,a.c7)(e))for(let n=0;n<e.length;n++)ie(e[n],c,t,r);else if((0,a.I7)(e)||(0,a.cF)(e))e.forEach((e=>{ie(e,c,t,r)}));else if((0,a.oF)(e))for(const n in e)ie(e[n],c,t,r);return e}function oe(e,c){if(null===A)return e;const t=Xt(A)||A.proxy,n=e.dirs||(e.dirs=[]);for(let r=0;r<c.length;r++){let[e,i,o,s=a.kx]=c[r];e&&((0,a.mg)(e)&&(e={mounted:e,updated:e}),e.deep&&ie(i),n.push({dir:e,instance:t,value:i,oldValue:void 0,arg:o,modifiers:s}))}return e}function se(e,c,t,a){const r=e.dirs,o=c&&c.dirs;for(let s=0;s<r.length;s++){const l=r[s];o&&(l.oldValue=o[s].value);let u=l.dir[a];u&&((0,n.S0)(),i(u,t,8,[e.el,l,e,c]),(0,n.qo)())}}const le=Symbol("_leaveCb"),ue=Symbol("_enterCb");function fe(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Te((()=>{e.isMounted=!0})),Re((()=>{e.isUnmounting=!0})),e}const de=[Function,Array],me={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:de,onEnter:de,onAfterEnter:de,onEnterCancelled:de,onBeforeLeave:de,onLeave:de,onAfterLeave:de,onLeaveCancelled:de,onBeforeAppear:de,onAppear:de,onAfterAppear:de,onAppearCancelled:de},pe={name:"BaseTransition",props:me,setup(e,{slots:c}){const t=Pt(),a=fe();let r;return()=>{const i=c.default&&He(c.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){let e=!1;for(const c of i)if(c.type!==at){0,o=c,e=!0;break}}const s=(0,n.Nc)(e),{mode:l}=s;if(a.isLeaving)return ze(o);const u=Ve(o);if(!u)return ze(o);const f=ge(u,s,a,t);Ce(u,f);const d=t.subTree,m=d&&Ve(d);let p=!1;const{getTransitionKey:h}=u.type;if(h){const e=h();void 0===r?r=e:e!==r&&(r=e,p=!0)}if(m&&m.type!==at&&(!vt(u,m)||p)){const e=ge(m,s,a,t);if(Ce(m,e),"out-in"===l)return a.isLeaving=!0,e.afterLeave=()=>{a.isLeaving=!1,!1!==t.update.active&&(t.effect.dirty=!0,t.update())},ze(o);"in-out"===l&&u.type!==at&&(e.delayLeave=(e,c,t)=>{const n=ve(a,m);n[String(m.key)]=m,e[le]=()=>{c(),e[le]=void 0,delete f.delayedLeave},f.delayedLeave=t})}return o}}},he=pe;function ve(e,c){const{leavingVNodes:t}=e;let n=t.get(c.type);return n||(n=Object.create(null),t.set(c.type,n)),n}function ge(e,c,t,n){const{appear:r,mode:o,persisted:s=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:f,onEnterCancelled:d,onBeforeLeave:m,onLeave:p,onAfterLeave:h,onLeaveCancelled:v,onBeforeAppear:g,onAppear:z,onAfterAppear:V,onAppearCancelled:C}=c,H=String(e.key),M=ve(t,e),b=(e,c)=>{e&&i(e,n,9,c)},y=(e,c)=>{const t=c[1];b(e,c),(0,a.c7)(e)?e.every((e=>e.length<=1))&&t():e.length<=1&&t()},L={mode:o,persisted:s,beforeEnter(c){let n=l;if(!t.isMounted){if(!r)return;n=g||l}c[le]&&c[le](!0);const a=M[H];a&&vt(e,a)&&a.el[le]&&a.el[le](),b(n,[c])},enter(e){let c=u,n=f,a=d;if(!t.isMounted){if(!r)return;c=z||u,n=V||f,a=C||d}let i=!1;const o=e[ue]=c=>{i||(i=!0,b(c?a:n,[e]),L.delayedLeave&&L.delayedLeave(),e[ue]=void 0)};c?y(c,[e,o]):o()},leave(c,n){const a=String(e.key);if(c[ue]&&c[ue](!0),t.isUnmounting)return n();b(m,[c]);let r=!1;const i=c[le]=t=>{r||(r=!0,n(),b(t?v:h,[c]),c[le]=void 0,M[a]===e&&delete M[a])};M[a]=e,p?y(p,[c,i]):i()},clone(e){return ge(e,c,t,n)}};return L}function ze(e){if(ye(e))return e=yt(e),e.children=null,e}function Ve(e){return ye(e)?e.children?e.children[0]:void 0:e}function Ce(e,c){6&e.shapeFlag&&e.component?Ce(e.component.subTree,c):128&e.shapeFlag?(e.ssContent.transition=c.clone(e.ssContent),e.ssFallback.transition=c.clone(e.ssFallback)):e.transition=c}function He(e,c=!1,t){let n=[],a=0;for(let r=0;r<e.length;r++){let i=e[r];const o=null==t?i.key:String(t)+String(null!=i.key?i.key:r);i.type===tt?(128&i.patchFlag&&a++,n=n.concat(He(i.children,c,o))):(c||i.type!==at)&&n.push(null!=o?yt(i,{key:o}):i)}if(a>1)for(let r=0;r<n.length;r++)n[r].patchFlag=-2;return n}
/*! #__NO_SIDE_EFFECTS__ */function Me(e,c){return(0,a.mg)(e)?(()=>(0,a.SU)({name:e.name},c,{setup:e}))():e}const be=e=>!!e.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;const ye=e=>e.type.__isKeepAlive;RegExp,RegExp;function Le(e,c){return(0,a.c7)(e)?e.some((e=>Le(e,c))):(0,a.ct)(e)?e.split(",").includes(c):!!(0,a.QX)(e)&&e.test(c)}function xe(e,c){we(e,"a",c)}function Se(e,c){we(e,"da",c)}function we(e,c,t=Tt){const n=e.__wdc||(e.__wdc=()=>{let c=t;while(c){if(c.isDeactivated)return;c=c.parent}return e()});if(Ae(c,n,t),t){let e=t.parent;while(e&&e.parent)ye(e.parent.vnode)&&ke(n,c,t,e),e=e.parent}}function ke(e,c,t,n){const r=Ae(c,e,n,!0);De((()=>{(0,a.aE)(n[c],r)}),t)}function Ne(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function _e(e){return 128&e.shapeFlag?e.ssContent:e}function Ae(e,c,t=Tt,a=!1){if(t){const r=t[e]||(t[e]=[]),o=c.__weh||(c.__weh=(...a)=>{if(t.isUnmounted)return;(0,n.S0)();const r=Dt(t),o=i(c,t,e,a);return r(),(0,n.qo)(),o});return a?r.unshift(o):r.push(o),o}}const Ee=e=>(c,t=Tt)=>(!$t||"sp"===e)&&Ae(e,((...e)=>c(...e)),t),Ie=Ee("bm"),Te=Ee("m"),Pe=Ee("bu"),Oe=Ee("u"),Re=Ee("bum"),De=Ee("um"),Fe=Ee("sp"),Be=Ee("rtg"),Ke=Ee("rtc");function Ue(e,c=Tt){Ae("ec",e,c)}function $e(e,c,t,n){let r;const i=t&&t[n];if((0,a.c7)(e)||(0,a.ct)(e)){r=new Array(e.length);for(let t=0,n=e.length;t<n;t++)r[t]=c(e[t],t,void 0,i&&i[t])}else if("number"===typeof e){0,r=new Array(e);for(let t=0;t<e;t++)r[t]=c(t+1,t,void 0,i&&i[t])}else if((0,a.Y9)(e))if(e[Symbol.iterator])r=Array.from(e,((e,t)=>c(e,t,void 0,i&&i[t])));else{const t=Object.keys(e);r=new Array(t.length);for(let n=0,a=t.length;n<a;n++){const a=t[n];r[n]=c(e[a],a,n,i&&i[n])}}else r=[];return t&&(t[n]=r),r}function je(e,c,t={},n,a){if(A.isCE||A.parent&&be(A.parent)&&A.parent.isCE)return"default"!==c&&(t.name=c),Ht("slot",t,n&&n());let r=e[c];r&&r._c&&(r._d=!1),st();const i=r&&qe(r(t)),o=pt(tt,{key:t.key||i&&i.key||`_${c}`},i||(n?n():[]),i&&1===e._?64:-2);return!a&&o.scopeId&&(o.slotScopeIds=[o.scopeId+"-s"]),r&&r._c&&(r._d=!0),o}function qe(e){return e.some((e=>!ht(e)||e.type!==at&&!(e.type===tt&&!qe(e.children))))?e:null}const Ge=e=>e?Bt(e)?Xt(e)||e.proxy:Ge(e.parent):null,We=(0,a.SU)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ge(e.parent),$root:e=>Ge(e.root),$emit:e=>e.emit,$options:e=>nc(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,C(e.update)}),$nextTick:e=>e.n||(e.n=z.bind(e.proxy)),$watch:e=>ae.bind(e)}),Ye=(e,c)=>e!==a.kx&&!e.__isScriptSetup&&(0,a.Yz)(e,c),Ze={get({_:e},c){const{ctx:t,setupState:r,data:i,props:o,accessCache:s,type:l,appContext:u}=e;let f;if("$"!==c[0]){const n=s[c];if(void 0!==n)switch(n){case 1:return r[c];case 2:return i[c];case 4:return t[c];case 3:return o[c]}else{if(Ye(r,c))return s[c]=1,r[c];if(i!==a.kx&&(0,a.Yz)(i,c))return s[c]=2,i[c];if((f=e.propsOptions[0])&&(0,a.Yz)(f,c))return s[c]=3,o[c];if(t!==a.kx&&(0,a.Yz)(t,c))return s[c]=4,t[c];Je&&(s[c]=0)}}const d=We[c];let m,p;return d?("$attrs"===c&&(0,n.kH)(e,"get",c),d(e)):(m=l.__cssModules)&&(m=m[c])?m:t!==a.kx&&(0,a.Yz)(t,c)?(s[c]=4,t[c]):(p=u.config.globalProperties,(0,a.Yz)(p,c)?p[c]:void 0)},set({_:e},c,t){const{data:n,setupState:r,ctx:i}=e;return Ye(r,c)?(r[c]=t,!0):n!==a.kx&&(0,a.Yz)(n,c)?(n[c]=t,!0):!(0,a.Yz)(e.props,c)&&(("$"!==c[0]||!(c.slice(1)in e))&&(i[c]=t,!0))},has({_:{data:e,setupState:c,accessCache:t,ctx:n,appContext:r,propsOptions:i}},o){let s;return!!t[o]||e!==a.kx&&(0,a.Yz)(e,o)||Ye(c,o)||(s=i[0])&&(0,a.Yz)(s,o)||(0,a.Yz)(n,o)||(0,a.Yz)(We,o)||(0,a.Yz)(r.config.globalProperties,o)},defineProperty(e,c,t){return null!=t.get?e._.accessCache[c]=0:(0,a.Yz)(t,"value")&&this.set(e,c,t.value,null),Reflect.defineProperty(e,c,t)}};function Xe(e){return(0,a.c7)(e)?e.reduce(((e,c)=>(e[c]=null,e)),{}):e}let Je=!0;function Qe(e){const c=nc(e),t=e.proxy,r=e.ctx;Je=!1,c.beforeCreate&&cc(c.beforeCreate,e,"bc");const{data:i,computed:o,methods:s,watch:l,provide:u,inject:f,created:d,beforeMount:m,mounted:p,beforeUpdate:h,updated:v,activated:g,deactivated:z,beforeDestroy:V,beforeUnmount:C,destroyed:H,unmounted:M,render:b,renderTracked:y,renderTriggered:L,errorCaptured:x,serverPrefetch:S,expose:w,inheritAttrs:k,components:N,directives:_,filters:A}=c,E=null;if(f&&ec(f,r,E),s)for(const n in s){const e=s[n];(0,a.mg)(e)&&(r[n]=e.bind(t))}if(i){0;const c=i.call(t,t);0,(0,a.Y9)(c)&&(e.data=(0,n.cB)(c))}if(Je=!0,o)for(const n in o){const e=o[n],c=(0,a.mg)(e)?e.bind(t,t):(0,a.mg)(e.get)?e.get.bind(t,t):a.e_;0;const i=!(0,a.mg)(e)&&(0,a.mg)(e.set)?e.set.bind(t):a.e_,s=en({get:c,set:i});Object.defineProperty(r,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e})}if(l)for(const n in l)tc(l[n],r,t,n);if(u){const e=(0,a.mg)(u)?u.call(t):u;Reflect.ownKeys(e).forEach((c=>{gc(c,e[c])}))}function I(e,c){(0,a.c7)(c)?c.forEach((c=>e(c.bind(t)))):c&&e(c.bind(t))}if(d&&cc(d,e,"c"),I(Ie,m),I(Te,p),I(Pe,h),I(Oe,v),I(xe,g),I(Se,z),I(Ue,x),I(Ke,y),I(Be,L),I(Re,C),I(De,M),I(Fe,S),(0,a.c7)(w))if(w.length){const c=e.exposed||(e.exposed={});w.forEach((e=>{Object.defineProperty(c,e,{get:()=>t[e],set:c=>t[e]=c})}))}else e.exposed||(e.exposed={});b&&e.render===a.e_&&(e.render=b),null!=k&&(e.inheritAttrs=k),N&&(e.components=N),_&&(e.directives=_)}function ec(e,c,t=a.e_){(0,a.c7)(e)&&(e=sc(e));for(const r in e){const t=e[r];let i;i=(0,a.Y9)(t)?"default"in t?zc(t.from||r,t.default,!0):zc(t.from||r):zc(t),(0,n.Ir)(i)?Object.defineProperty(c,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):c[r]=i}}function cc(e,c,t){i((0,a.c7)(e)?e.map((e=>e.bind(c.proxy))):e.bind(c.proxy),c,t)}function tc(e,c,t,n){const r=n.includes(".")?re(t,n):()=>t[n];if((0,a.ct)(e)){const t=c[e];(0,a.mg)(t)&&te(r,t)}else if((0,a.mg)(e))te(r,e.bind(t));else if((0,a.Y9)(e))if((0,a.c7)(e))e.forEach((e=>tc(e,c,t,n)));else{const n=(0,a.mg)(e.handler)?e.handler.bind(t):c[e.handler];(0,a.mg)(n)&&te(r,n,e)}else 0}function nc(e){const c=e.type,{mixins:t,extends:n}=c,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(c);let l;return s?l=s:r.length||t||n?(l={},r.length&&r.forEach((e=>ac(l,e,o,!0))),ac(l,c,o)):l=c,(0,a.Y9)(c)&&i.set(c,l),l}function ac(e,c,t,n=!1){const{mixins:a,extends:r}=c;r&&ac(e,r,t,!0),a&&a.forEach((c=>ac(e,c,t,!0)));for(const i in c)if(n&&"expose"===i);else{const n=rc[i]||t&&t[i];e[i]=n?n(e[i],c[i]):c[i]}return e}const rc={data:ic,props:fc,emits:fc,methods:uc,computed:uc,beforeCreate:lc,created:lc,beforeMount:lc,mounted:lc,beforeUpdate:lc,updated:lc,beforeDestroy:lc,beforeUnmount:lc,destroyed:lc,unmounted:lc,activated:lc,deactivated:lc,errorCaptured:lc,serverPrefetch:lc,components:uc,directives:uc,watch:dc,provide:ic,inject:oc};function ic(e,c){return c?e?function(){return(0,a.SU)((0,a.mg)(e)?e.call(this,this):e,(0,a.mg)(c)?c.call(this,this):c)}:c:e}function oc(e,c){return uc(sc(e),sc(c))}function sc(e){if((0,a.c7)(e)){const c={};for(let t=0;t<e.length;t++)c[e[t]]=e[t];return c}return e}function lc(e,c){return e?[...new Set([].concat(e,c))]:c}function uc(e,c){return e?(0,a.SU)(Object.create(null),e,c):c}function fc(e,c){return e?(0,a.c7)(e)&&(0,a.c7)(c)?[...new Set([...e,...c])]:(0,a.SU)(Object.create(null),Xe(e),Xe(null!=c?c:{})):c}function dc(e,c){if(!e)return c;if(!c)return e;const t=(0,a.SU)(Object.create(null),e);for(const n in c)t[n]=lc(e[n],c[n]);return t}function mc(){return{app:null,config:{isNativeTag:a.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pc=0;function hc(e,c){return function(t,n=null){(0,a.mg)(t)||(t=(0,a.SU)({},t)),null==n||(0,a.Y9)(n)||(n=null);const r=mc(),i=new WeakSet;let o=!1;const s=r.app={_uid:pc++,_component:t,_props:n,_container:null,_context:r,_instance:null,version:tn,get config(){return r.config},set config(e){0},use(e,...c){return i.has(e)||(e&&(0,a.mg)(e.install)?(i.add(e),e.install(s,...c)):(0,a.mg)(e)&&(i.add(e),e(s,...c))),s},mixin(e){return r.mixins.includes(e)||r.mixins.push(e),s},component(e,c){return c?(r.components[e]=c,s):r.components[e]},directive(e,c){return c?(r.directives[e]=c,s):r.directives[e]},mount(a,i,l){if(!o){0;const u=Ht(t,n);return u.appContext=r,!0===l?l="svg":!1===l&&(l=void 0),i&&c?c(u,a):e(u,a,l),o=!0,s._container=a,a.__vue_app__=s,Xt(u.component)||u.component.proxy}},unmount(){o&&(e(null,s._container),delete s._container.__vue_app__)},provide(e,c){return r.provides[e]=c,s},runWithContext(e){const c=vc;vc=s;try{return e()}finally{vc=c}}};return s}}let vc=null;function gc(e,c){if(Tt){let t=Tt.provides;const n=Tt.parent&&Tt.parent.provides;n===t&&(t=Tt.provides=Object.create(n)),t[e]=c}else 0}function zc(e,c,t=!1){const n=Tt||A;if(n||vc){const r=n?null==n.parent?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:vc._context.provides;if(r&&e in r)return r[e];if(arguments.length>1)return t&&(0,a.mg)(c)?c.call(n&&n.proxy):c}else 0}function Vc(e,c,t,r=!1){const i={},o={};(0,a.u6)(o,gt,1),e.propsDefaults=Object.create(null),Hc(e,c,i,o);for(const n in e.propsOptions[0])n in i||(i[n]=void 0);t?e.props=r?i:(0,n.g7)(i):e.type.props?e.props=i:e.props=o,e.attrs=o}function Cc(e,c,t,r){const{props:i,attrs:o,vnode:{patchFlag:s}}=e,l=(0,n.Nc)(i),[u]=e.propsOptions;let f=!1;if(!(r||s>0)||16&s){let n;Hc(e,c,i,o)&&(f=!0);for(const r in l)c&&((0,a.Yz)(c,r)||(n=(0,a.c$)(r))!==r&&(0,a.Yz)(c,n))||(u?!t||void 0===t[r]&&void 0===t[n]||(i[r]=Mc(u,l,r,void 0,e,!0)):delete i[r]);if(o!==l)for(const e in o)c&&(0,a.Yz)(c,e)||(delete o[e],f=!0)}else if(8&s){const t=e.vnode.dynamicProps;for(let n=0;n<t.length;n++){let r=t[n];if(_(e.emitsOptions,r))continue;const s=c[r];if(u)if((0,a.Yz)(o,r))s!==o[r]&&(o[r]=s,f=!0);else{const c=(0,a.AX)(r);i[c]=Mc(u,l,c,s,e,!1)}else s!==o[r]&&(o[r]=s,f=!0)}}f&&(0,n.gV)(e,"set","$attrs")}function Hc(e,c,t,r){const[i,o]=e.propsOptions;let s,l=!1;if(c)for(let n in c){if((0,a.o5)(n))continue;const u=c[n];let f;i&&(0,a.Yz)(i,f=(0,a.AX)(n))?o&&o.includes(f)?(s||(s={}))[f]=u:t[f]=u:_(e.emitsOptions,n)||n in r&&u===r[n]||(r[n]=u,l=!0)}if(o){const c=(0,n.Nc)(t),r=s||a.kx;for(let n=0;n<o.length;n++){const s=o[n];t[s]=Mc(i,c,s,r[s],e,!(0,a.Yz)(r,s))}}return l}function Mc(e,c,t,n,r,i){const o=e[t];if(null!=o){const e=(0,a.Yz)(o,"default");if(e&&void 0===n){const e=o.default;if(o.type!==Function&&!o.skipFactory&&(0,a.mg)(e)){const{propsDefaults:a}=r;if(t in a)n=a[t];else{const i=Dt(r);n=a[t]=e.call(null,c),i()}}else n=e}o[0]&&(i&&!e?n=!1:!o[1]||""!==n&&n!==(0,a.c$)(t)||(n=!0))}return n}function bc(e,c,t=!1){const n=c.propsCache,r=n.get(e);if(r)return r;const i=e.props,o={},s=[];let l=!1;if(!(0,a.mg)(e)){const n=e=>{l=!0;const[t,n]=bc(e,c,!0);(0,a.SU)(o,t),n&&s.push(...n)};!t&&c.mixins.length&&c.mixins.forEach(n),e.extends&&n(e.extends),e.mixins&&e.mixins.forEach(n)}if(!i&&!l)return(0,a.Y9)(e)&&n.set(e,a.yA),a.yA;if((0,a.c7)(i))for(let f=0;f<i.length;f++){0;const e=(0,a.AX)(i[f]);yc(e)&&(o[e]=a.kx)}else if(i){0;for(const e in i){const c=(0,a.AX)(e);if(yc(c)){const t=i[e],n=o[c]=(0,a.c7)(t)||(0,a.mg)(t)?{type:t}:(0,a.SU)({},t);if(n){const e=Sc(Boolean,n.type),t=Sc(String,n.type);n[0]=e>-1,n[1]=t<0||e<t,(e>-1||(0,a.Yz)(n,"default"))&&s.push(c)}}}}const u=[o,s];return(0,a.Y9)(e)&&n.set(e,u),u}function yc(e){return"$"!==e[0]&&!(0,a.o5)(e)}function Lc(e){const c=e&&e.toString().match(/^\s*(function|class) (\w+)/);return c?c[2]:null===e?"null":""}function xc(e,c){return Lc(e)===Lc(c)}function Sc(e,c){return(0,a.c7)(c)?c.findIndex((c=>xc(c,e))):(0,a.mg)(c)&&xc(c,e)?0:-1}const wc=e=>"_"===e[0]||"$stable"===e,kc=e=>(0,a.c7)(e)?e.map(St):[St(e)],Nc=(e,c,t)=>{if(c._n)return c;const n=T(((...e)=>kc(c(...e))),t);return n._c=!1,n},_c=(e,c,t)=>{const n=e._ctx;for(const r in e){if(wc(r))continue;const t=e[r];if((0,a.mg)(t))c[r]=Nc(r,t,n);else if(null!=t){0;const e=kc(t);c[r]=()=>e}}},Ac=(e,c)=>{const t=kc(c);e.slots.default=()=>t},Ec=(e,c)=>{if(32&e.vnode.shapeFlag){const t=c._;t?(e.slots=(0,n.Nc)(c),(0,a.u6)(c,"_",t)):_c(c,e.slots={})}else e.slots={},c&&Ac(e,c);(0,a.u6)(e.slots,gt,1)},Ic=(e,c,t)=>{const{vnode:n,slots:r}=e;let i=!0,o=a.kx;if(32&n.shapeFlag){const e=c._;e?t&&1===e?i=!1:((0,a.SU)(r,c),t||1!==e||delete r._):(i=!c.$stable,_c(c,r)),o=c}else c&&(Ac(e,c),o={default:1});if(i)for(const a in r)wc(a)||null!=o[a]||delete r[a]};function Tc(e,c,t,i,o=!1){if((0,a.c7)(e))return void e.forEach(((e,n)=>Tc(e,c&&((0,a.c7)(c)?c[n]:c),t,i,o)));if(be(i)&&!o)return;const s=4&i.shapeFlag?Xt(i.component)||i.component.proxy:i.el,l=o?null:s,{i:u,r:f}=e;const d=c&&c.r,m=u.refs===a.kx?u.refs={}:u.refs,p=u.setupState;if(null!=d&&d!==f&&((0,a.ct)(d)?(m[d]=null,(0,a.Yz)(p,d)&&(p[d]=null)):(0,n.Ir)(d)&&(d.value=null)),(0,a.mg)(f))r(f,u,12,[l,m]);else{const c=(0,a.ct)(f),r=(0,n.Ir)(f);if(c||r){const n=()=>{if(e.f){const t=c?(0,a.Yz)(p,f)?p[f]:m[f]:f.value;o?(0,a.c7)(t)&&(0,a.aE)(t,s):(0,a.c7)(t)?t.includes(s)||t.push(s):c?(m[f]=[s],(0,a.Yz)(p,f)&&(p[f]=m[f])):(f.value=[s],e.k&&(m[e.k]=f.value))}else c?(m[f]=l,(0,a.Yz)(p,f)&&(p[f]=l)):r&&(f.value=l,e.k&&(m[e.k]=l))};l?(n.id=-1,Oc(n,t)):n()}else 0}}function Pc(){"boolean"!==typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&((0,a.Ke)().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const Oc=X;function Rc(e){return Dc(e)}function Dc(e,c){Pc();const t=(0,a.Ke)();t.__VUE__=!0;const{insert:r,remove:i,patchProp:o,createElement:s,createText:l,createComment:u,setText:f,setElementText:d,parentNode:m,nextSibling:p,setScopeId:h=a.e_,insertStaticContent:v}=e,g=(e,c,t,n=null,a=null,r=null,i=void 0,o=null,s=!!c.dynamicChildren)=>{if(e===c)return;e&&!vt(e,c)&&(n=J(e),G(e,a,r,!0),e=null),-2===c.patchFlag&&(s=!1,c.dynamicChildren=null);const{type:l,ref:u,shapeFlag:f}=c;switch(l){case nt:z(e,c,t,n);break;case at:V(e,c,t,n);break;case rt:null==e&&H(c,t,n,i);break;case tt:I(e,c,t,n,a,r,i,o,s);break;default:1&f?S(e,c,t,n,a,r,i,o,s):6&f?T(e,c,t,n,a,r,i,o,s):(64&f||128&f)&&l.process(e,c,t,n,a,r,i,o,s,ce)}null!=u&&a&&Tc(u,e&&e.ref,r,c||e,!c)},z=(e,c,t,n)=>{if(null==e)r(c.el=l(c.children),t,n);else{const t=c.el=e.el;c.children!==e.children&&f(t,c.children)}},V=(e,c,t,n)=>{null==e?r(c.el=u(c.children||""),t,n):c.el=e.el},H=(e,c,t,n)=>{[e.el,e.anchor]=v(e.children,c,t,n,e.el,e.anchor)},b=({el:e,anchor:c},t,n)=>{let a;while(e&&e!==c)a=p(e),r(e,t,n),e=a;r(c,t,n)},x=({el:e,anchor:c})=>{let t;while(e&&e!==c)t=p(e),i(e),e=t;i(c)},S=(e,c,t,n,a,r,i,o,s)=>{"svg"===c.type?i="svg":"math"===c.type&&(i="mathml"),null==e?w(c,t,n,a,r,i,o,s):_(e,c,a,r,i,o,s)},w=(e,c,t,n,i,l,u,f)=>{let m,p;const{props:h,shapeFlag:v,transition:g,dirs:z}=e;if(m=e.el=s(e.type,l,h&&h.is,h),8&v?d(m,e.children):16&v&&N(e.children,m,null,n,i,Fc(e,l),u,f),z&&se(e,null,n,"created"),k(m,e,e.scopeId,u,n),h){for(const c in h)"value"===c||(0,a.o5)(c)||o(m,c,null,h[c],l,e.children,n,i,X);"value"in h&&o(m,"value",null,h.value,l),(p=h.onVnodeBeforeMount)&&_t(p,n,e)}z&&se(e,null,n,"beforeMount");const V=Kc(i,g);V&&g.beforeEnter(m),r(m,c,t),((p=h&&h.onVnodeMounted)||V||z)&&Oc((()=>{p&&_t(p,n,e),V&&g.enter(m),z&&se(e,null,n,"mounted")}),i)},k=(e,c,t,n,a)=>{if(t&&h(e,t),n)for(let r=0;r<n.length;r++)h(e,n[r]);if(a){let t=a.subTree;if(c===t){const c=a.vnode;k(e,c,c.scopeId,c.slotScopeIds,a.parent)}}},N=(e,c,t,n,a,r,i,o,s=0)=>{for(let l=s;l<e.length;l++){const s=e[l]=o?wt(e[l]):St(e[l]);g(null,s,c,t,n,a,r,i,o)}},_=(e,c,t,n,r,i,s)=>{const l=c.el=e.el;let{patchFlag:u,dynamicChildren:f,dirs:m}=c;u|=16&e.patchFlag;const p=e.props||a.kx,h=c.props||a.kx;let v;if(t&&Bc(t,!1),(v=h.onVnodeBeforeUpdate)&&_t(v,t,c,e),m&&se(c,e,t,"beforeUpdate"),t&&Bc(t,!0),f?A(e.dynamicChildren,f,l,t,n,Fc(c,r),i):s||U(e,c,l,null,t,n,Fc(c,r),i,!1),u>0){if(16&u)E(l,c,p,h,t,n,r);else if(2&u&&p.class!==h.class&&o(l,"class",null,h.class,r),4&u&&o(l,"style",p.style,h.style,r),8&u){const a=c.dynamicProps;for(let c=0;c<a.length;c++){const i=a[c],s=p[i],u=h[i];u===s&&"value"!==i||o(l,i,s,u,r,e.children,t,n,X)}}1&u&&e.children!==c.children&&d(l,c.children)}else s||null!=f||E(l,c,p,h,t,n,r);((v=h.onVnodeUpdated)||m)&&Oc((()=>{v&&_t(v,t,c,e),m&&se(c,e,t,"updated")}),n)},A=(e,c,t,n,a,r,i)=>{for(let o=0;o<c.length;o++){const s=e[o],l=c[o],u=s.el&&(s.type===tt||!vt(s,l)||70&s.shapeFlag)?m(s.el):t;g(s,l,u,null,n,a,r,i,!0)}},E=(e,c,t,n,r,i,s)=>{if(t!==n){if(t!==a.kx)for(const l in t)(0,a.o5)(l)||l in n||o(e,l,t[l],null,s,c.children,r,i,X);for(const l in n){if((0,a.o5)(l))continue;const u=n[l],f=t[l];u!==f&&"value"!==l&&o(e,l,f,u,s,c.children,r,i,X)}"value"in n&&o(e,"value",t.value,n.value,s)}},I=(e,c,t,n,a,i,o,s,u)=>{const f=c.el=e?e.el:l(""),d=c.anchor=e?e.anchor:l("");let{patchFlag:m,dynamicChildren:p,slotScopeIds:h}=c;h&&(s=s?s.concat(h):h),null==e?(r(f,t,n),r(d,t,n),N(c.children||[],t,d,a,i,o,s,u)):m>0&&64&m&&p&&e.dynamicChildren?(A(e.dynamicChildren,p,t,a,i,o,s),(null!=c.key||a&&c===a.subTree)&&Uc(e,c,!0)):U(e,c,t,d,a,i,o,s,u)},T=(e,c,t,n,a,r,i,o,s)=>{c.slotScopeIds=o,null==e?512&c.shapeFlag?a.ctx.activate(c,t,n,i,s):O(c,t,n,a,r,i,s):R(e,c,s)},O=(e,c,t,n,a,r,i)=>{const o=e.component=It(e,n,a);if(ye(e)&&(o.ctx.renderer=ce),jt(o),o.asyncDep){if(a&&a.registerDep(o,F),!e.el){const e=o.subTree=Ht(at);V(null,e,c,t)}}else F(o,e,c,t,a,r,i)},R=(e,c,t)=>{const n=c.component=e.component;if(D(e,c,t)){if(n.asyncDep&&!n.asyncResolved)return void K(n,c,t);n.next=c,M(n.update),n.effect.dirty=!0,n.update()}else c.el=e.el,n.vnode=c},F=(e,c,t,r,i,o,s)=>{const l=()=>{if(e.isMounted){let{next:c,bu:t,u:n,parent:r,vnode:u}=e;{const t=jc(e);if(t)return c&&(c.el=u.el,K(e,c,s)),void t.asyncDep.then((()=>{e.isUnmounted||l()}))}let f,d=c;0,Bc(e,!1),c?(c.el=u.el,K(e,c,s)):c=u,t&&(0,a.Qv)(t),(f=c.props&&c.props.onVnodeBeforeUpdate)&&_t(f,r,c,u),Bc(e,!0);const p=P(e);0;const h=e.subTree;e.subTree=p,g(h,p,m(h.el),J(h),e,i,o),c.el=p.el,null===d&&B(e,p.el),n&&Oc(n,i),(f=c.props&&c.props.onVnodeUpdated)&&Oc((()=>_t(f,r,c,u)),i)}else{let n;const{el:s,props:l}=c,{bm:u,m:f,parent:d}=e,m=be(c);if(Bc(e,!1),u&&(0,a.Qv)(u),!m&&(n=l&&l.onVnodeBeforeMount)&&_t(n,d,c),Bc(e,!0),s&&ne){const t=()=>{e.subTree=P(e),ne(s,e.subTree,e,i,null)};m?c.type.__asyncLoader().then((()=>!e.isUnmounted&&t())):t()}else{0;const n=e.subTree=P(e);0,g(null,n,t,r,e,i,o),c.el=n.el}if(f&&Oc(f,i),!m&&(n=l&&l.onVnodeMounted)){const e=c;Oc((()=>_t(n,d,e)),i)}(256&c.shapeFlag||d&&be(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&Oc(e.a,i),e.isMounted=!0,c=t=r=null}},u=e.effect=new n._I(l,a.e_,(()=>C(f)),e.scope),f=e.update=()=>{u.dirty&&u.run()};f.id=e.uid,Bc(e,!0),f()},K=(e,c,t)=>{c.component=e;const a=e.vnode.props;e.vnode=c,e.next=null,Cc(e,c.props,a,t),Ic(e,c.children,t),(0,n.S0)(),y(e),(0,n.qo)()},U=(e,c,t,n,a,r,i,o,s=!1)=>{const l=e&&e.children,u=e?e.shapeFlag:0,f=c.children,{patchFlag:m,shapeFlag:p}=c;if(m>0){if(128&m)return void j(l,f,t,n,a,r,i,o,s);if(256&m)return void $(l,f,t,n,a,r,i,o,s)}8&p?(16&u&&X(l,a,r),f!==l&&d(t,f)):16&u?16&p?j(l,f,t,n,a,r,i,o,s):X(l,a,r,!0):(8&u&&d(t,""),16&p&&N(f,t,n,a,r,i,o,s))},$=(e,c,t,n,r,i,o,s,l)=>{e=e||a.yA,c=c||a.yA;const u=e.length,f=c.length,d=Math.min(u,f);let m;for(m=0;m<d;m++){const n=c[m]=l?wt(c[m]):St(c[m]);g(e[m],n,t,null,r,i,o,s,l)}u>f?X(e,r,i,!0,!1,d):N(c,t,n,r,i,o,s,l,d)},j=(e,c,t,n,r,i,o,s,l)=>{let u=0;const f=c.length;let d=e.length-1,m=f-1;while(u<=d&&u<=m){const n=e[u],a=c[u]=l?wt(c[u]):St(c[u]);if(!vt(n,a))break;g(n,a,t,null,r,i,o,s,l),u++}while(u<=d&&u<=m){const n=e[d],a=c[m]=l?wt(c[m]):St(c[m]);if(!vt(n,a))break;g(n,a,t,null,r,i,o,s,l),d--,m--}if(u>d){if(u<=m){const e=m+1,a=e<f?c[e].el:n;while(u<=m)g(null,c[u]=l?wt(c[u]):St(c[u]),t,a,r,i,o,s,l),u++}}else if(u>m)while(u<=d)G(e[u],r,i,!0),u++;else{const p=u,h=u,v=new Map;for(u=h;u<=m;u++){const e=c[u]=l?wt(c[u]):St(c[u]);null!=e.key&&v.set(e.key,u)}let z,V=0;const C=m-h+1;let H=!1,M=0;const b=new Array(C);for(u=0;u<C;u++)b[u]=0;for(u=p;u<=d;u++){const n=e[u];if(V>=C){G(n,r,i,!0);continue}let a;if(null!=n.key)a=v.get(n.key);else for(z=h;z<=m;z++)if(0===b[z-h]&&vt(n,c[z])){a=z;break}void 0===a?G(n,r,i,!0):(b[a-h]=u+1,a>=M?M=a:H=!0,g(n,c[a],t,null,r,i,o,s,l),V++)}const y=H?$c(b):a.yA;for(z=y.length-1,u=C-1;u>=0;u--){const e=h+u,a=c[e],d=e+1<f?c[e+1].el:n;0===b[u]?g(null,a,t,d,r,i,o,s,l):H&&(z<0||u!==y[z]?q(a,t,d,2):z--)}}},q=(e,c,t,n,a=null)=>{const{el:i,type:o,transition:s,children:l,shapeFlag:u}=e;if(6&u)return void q(e.component.subTree,c,t,n);if(128&u)return void e.suspense.move(c,t,n);if(64&u)return void o.move(e,c,t,ce);if(o===tt){r(i,c,t);for(let e=0;e<l.length;e++)q(l[e],c,t,n);return void r(e.anchor,c,t)}if(o===rt)return void b(e,c,t);const f=2!==n&&1&u&&s;if(f)if(0===n)s.beforeEnter(i),r(i,c,t),Oc((()=>s.enter(i)),a);else{const{leave:e,delayLeave:n,afterLeave:a}=s,o=()=>r(i,c,t),l=()=>{e(i,(()=>{o(),a&&a()}))};n?n(i,o,l):l()}else r(i,c,t)},G=(e,c,t,n=!1,a=!1)=>{const{type:r,props:i,ref:o,children:s,dynamicChildren:l,shapeFlag:u,patchFlag:f,dirs:d}=e;if(null!=o&&Tc(o,null,t,e,!0),256&u)return void c.ctx.deactivate(e);const m=1&u&&d,p=!be(e);let h;if(p&&(h=i&&i.onVnodeBeforeUnmount)&&_t(h,c,e),6&u)Z(e.component,t,n);else{if(128&u)return void e.suspense.unmount(t,n);m&&se(e,null,c,"beforeUnmount"),64&u?e.type.remove(e,c,t,a,ce,n):l&&(r!==tt||f>0&&64&f)?X(l,c,t,!1,!0):(r===tt&&384&f||!a&&16&u)&&X(s,c,t),n&&W(e)}(p&&(h=i&&i.onVnodeUnmounted)||m)&&Oc((()=>{h&&_t(h,c,e),m&&se(e,null,c,"unmounted")}),t)},W=e=>{const{type:c,el:t,anchor:n,transition:a}=e;if(c===tt)return void Y(t,n);if(c===rt)return void x(e);const r=()=>{i(t),a&&!a.persisted&&a.afterLeave&&a.afterLeave()};if(1&e.shapeFlag&&a&&!a.persisted){const{leave:c,delayLeave:n}=a,i=()=>c(t,r);n?n(e.el,r,i):i()}else r()},Y=(e,c)=>{let t;while(e!==c)t=p(e),i(e),e=t;i(c)},Z=(e,c,t)=>{const{bum:n,scope:r,update:i,subTree:o,um:s}=e;n&&(0,a.Qv)(n),r.stop(),i&&(i.active=!1,G(o,e,c,t)),s&&Oc(s,c),Oc((()=>{e.isUnmounted=!0}),c),c&&c.pendingBranch&&!c.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===c.pendingId&&(c.deps--,0===c.deps&&c.resolve())},X=(e,c,t,n=!1,a=!1,r=0)=>{for(let i=r;i<e.length;i++)G(e[i],c,t,n,a)},J=e=>6&e.shapeFlag?J(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el);let Q=!1;const ee=(e,c,t)=>{null==e?c._vnode&&G(c._vnode,null,null,!0):g(c._vnode||null,e,c,null,null,null,t),Q||(Q=!0,y(),L(),Q=!1),c._vnode=e},ce={p:g,um:G,m:q,r:W,mt:O,mc:N,pc:U,pbc:A,n:J,o:e};let te,ne;return c&&([te,ne]=c(ce)),{render:ee,hydrate:te,createApp:hc(ee,te)}}function Fc({type:e,props:c},t){return"svg"===t&&"foreignObject"===e||"mathml"===t&&"annotation-xml"===e&&c&&c.encoding&&c.encoding.includes("html")?void 0:t}function Bc({effect:e,update:c},t){e.allowRecurse=c.allowRecurse=t}function Kc(e,c){return(!e||e&&!e.pendingBranch)&&c&&!c.persisted}function Uc(e,c,t=!1){const n=e.children,r=c.children;if((0,a.c7)(n)&&(0,a.c7)(r))for(let a=0;a<n.length;a++){const e=n[a];let c=r[a];1&c.shapeFlag&&!c.dynamicChildren&&((c.patchFlag<=0||32===c.patchFlag)&&(c=r[a]=wt(r[a]),c.el=e.el),t||Uc(e,c)),c.type===nt&&(c.el=e.el)}}function $c(e){const c=e.slice(),t=[0];let n,a,r,i,o;const s=e.length;for(n=0;n<s;n++){const s=e[n];if(0!==s){if(a=t[t.length-1],e[a]<s){c[n]=a,t.push(n);continue}r=0,i=t.length-1;while(r<i)o=r+i>>1,e[t[o]]<s?r=o+1:i=o;s<e[t[r]]&&(r>0&&(c[n]=t[r-1]),t[r]=n)}}r=t.length,i=t[r-1];while(r-- >0)t[r]=i,i=c[i];return t}function jc(e){const c=e.subTree.component;if(c)return c.asyncDep&&!c.asyncResolved?c:jc(c)}const qc=e=>e.__isTeleport,Gc=e=>e&&(e.disabled||""===e.disabled),Wc=e=>"undefined"!==typeof SVGElement&&e instanceof SVGElement,Yc=e=>"function"===typeof MathMLElement&&e instanceof MathMLElement,Zc=(e,c)=>{const t=e&&e.to;if((0,a.ct)(t)){if(c){const e=c(t);return e}return null}return t},Xc={name:"Teleport",__isTeleport:!0,process(e,c,t,n,a,r,i,o,s,l){const{mc:u,pc:f,pbc:d,o:{insert:m,querySelector:p,createText:h,createComment:v}}=l,g=Gc(c.props);let{shapeFlag:z,children:V,dynamicChildren:C}=c;if(null==e){const e=c.el=h(""),l=c.anchor=h("");m(e,t,n),m(l,t,n);const f=c.target=Zc(c.props,p),d=c.targetAnchor=h("");f&&(m(d,f),"svg"===i||Wc(f)?i="svg":("mathml"===i||Yc(f))&&(i="mathml"));const v=(e,c)=>{16&z&&u(V,e,c,a,r,i,o,s)};g?v(t,l):f&&v(f,d)}else{c.el=e.el;const n=c.anchor=e.anchor,u=c.target=e.target,m=c.targetAnchor=e.targetAnchor,h=Gc(e.props),v=h?t:u,z=h?n:m;if("svg"===i||Wc(u)?i="svg":("mathml"===i||Yc(u))&&(i="mathml"),C?(d(e.dynamicChildren,C,v,a,r,i,o),Uc(e,c,!0)):s||f(e,c,v,z,a,r,i,o,!1),g)h?c.props&&e.props&&c.props.to!==e.props.to&&(c.props.to=e.props.to):Jc(c,t,n,l,1);else if((c.props&&c.props.to)!==(e.props&&e.props.to)){const e=c.target=Zc(c.props,p);e&&Jc(c,e,null,l,0)}else h&&Jc(c,u,m,l,1)}ct(c)},remove(e,c,t,n,{um:a,o:{remove:r}},i){const{shapeFlag:o,children:s,anchor:l,targetAnchor:u,target:f,props:d}=e;if(f&&r(u),i&&r(l),16&o){const e=i||!Gc(d);for(let n=0;n<s.length;n++){const r=s[n];a(r,c,t,e,!!r.dynamicChildren)}}},move:Jc,hydrate:Qc};function Jc(e,c,t,{o:{insert:n},m:a},r=2){0===r&&n(e.targetAnchor,c,t);const{el:i,anchor:o,shapeFlag:s,children:l,props:u}=e,f=2===r;if(f&&n(i,c,t),(!f||Gc(u))&&16&s)for(let d=0;d<l.length;d++)a(l[d],c,t,2);f&&n(o,c,t)}function Qc(e,c,t,n,a,r,{o:{nextSibling:i,parentNode:o,querySelector:s}},l){const u=c.target=Zc(c.props,s);if(u){const s=u._lpa||u.firstChild;if(16&c.shapeFlag)if(Gc(c.props))c.anchor=l(i(e),c,o(e),t,n,a,r),c.targetAnchor=s;else{c.anchor=i(e);let o=s;while(o)if(o=i(o),o&&8===o.nodeType&&"teleport anchor"===o.data){c.targetAnchor=o,u._lpa=c.targetAnchor&&i(c.targetAnchor);break}l(s,c,u,t,n,a,r)}ct(c)}return c.anchor&&i(c.anchor)}const et=Xc;function ct(e){const c=e.ctx;if(c&&c.ut){let t=e.children[0].el;while(t&&t!==e.targetAnchor)1===t.nodeType&&t.setAttribute("data-v-owner",c.uid),t=t.nextSibling;c.ut()}}const tt=Symbol.for("v-fgt"),nt=Symbol.for("v-txt"),at=Symbol.for("v-cmt"),rt=Symbol.for("v-stc"),it=[];let ot=null;function st(e=!1){it.push(ot=e?null:[])}function lt(){it.pop(),ot=it[it.length-1]||null}let ut=1;function ft(e){ut+=e}function dt(e){return e.dynamicChildren=ut>0?ot||a.yA:null,lt(),ut>0&&ot&&ot.push(e),e}function mt(e,c,t,n,a,r){return dt(Ct(e,c,t,n,a,r,!0))}function pt(e,c,t,n,a){return dt(Ht(e,c,t,n,a,!0))}function ht(e){return!!e&&!0===e.__v_isVNode}function vt(e,c){return e.type===c.type&&e.key===c.key}const gt="__vInternal",zt=({key:e})=>null!=e?e:null,Vt=({ref:e,ref_key:c,ref_for:t})=>("number"===typeof e&&(e=""+e),null!=e?(0,a.ct)(e)||(0,n.Ir)(e)||(0,a.mg)(e)?{i:A,r:e,k:c,f:!!t}:e:null);function Ct(e,c=null,t=null,n=0,r=null,i=(e===tt?0:1),o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:c,key:c&&zt(c),ref:c&&Vt(c),scopeId:E,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:A};return s?(kt(l,t),128&i&&e.normalize(l)):t&&(l.shapeFlag|=(0,a.ct)(t)?8:16),ut>0&&!o&&ot&&(l.patchFlag>0||6&i)&&32!==l.patchFlag&&ot.push(l),l}const Ht=Mt;function Mt(e,c=null,t=null,r=0,i=null,o=!1){if(e&&e!==j||(e=at),ht(e)){const n=yt(e,c,!0);return t&&kt(n,t),ut>0&&!o&&ot&&(6&n.shapeFlag?ot[ot.indexOf(e)]=n:ot.push(n)),n.patchFlag|=-2,n}if(Qt(e)&&(e=e.__vccOpts),c){c=bt(c);let{class:e,style:t}=c;e&&!(0,a.ct)(e)&&(c.class=(0,a.WN)(e)),(0,a.Y9)(t)&&((0,n.st)(t)&&!(0,a.c7)(t)&&(t=(0,a.SU)({},t)),c.style=(0,a.MN)(t))}const s=(0,a.ct)(e)?1:Z(e)?128:qc(e)?64:(0,a.Y9)(e)?4:(0,a.mg)(e)?2:0;return Ct(e,c,t,r,i,s,o,!0)}function bt(e){return e?(0,n.st)(e)||gt in e?(0,a.SU)({},e):e:null}function yt(e,c,t=!1){const{props:n,ref:r,patchFlag:i,children:o}=e,s=c?Nt(n||{},c):n,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&zt(s),ref:c&&c.ref?t&&r?(0,a.c7)(r)?r.concat(Vt(c)):[r,Vt(c)]:Vt(c):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:c&&e.type!==tt?-1===i?16:16|i:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&yt(e.ssContent),ssFallback:e.ssFallback&&yt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l}function Lt(e=" ",c=0){return Ht(nt,null,e,c)}function xt(e="",c=!1){return c?(st(),pt(at,null,e)):Ht(at,null,e)}function St(e){return null==e||"boolean"===typeof e?Ht(at):(0,a.c7)(e)?Ht(tt,null,e.slice()):"object"===typeof e?wt(e):Ht(nt,null,String(e))}function wt(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:yt(e)}function kt(e,c){let t=0;const{shapeFlag:n}=e;if(null==c)c=null;else if((0,a.c7)(c))t=16;else if("object"===typeof c){if(65&n){const t=c.default;return void(t&&(t._c&&(t._d=!1),kt(e,t()),t._c&&(t._d=!0)))}{t=32;const n=c._;n||gt in c?3===n&&A&&(1===A.slots._?c._=1:(c._=2,e.patchFlag|=1024)):c._ctx=A}}else(0,a.mg)(c)?(c={default:c,_ctx:A},t=32):(c=String(c),64&n?(t=16,c=[Lt(c)]):t=8);e.children=c,e.shapeFlag|=t}function Nt(...e){const c={};for(let t=0;t<e.length;t++){const n=e[t];for(const e in n)if("class"===e)c.class!==n.class&&(c.class=(0,a.WN)([c.class,n.class]));else if("style"===e)c.style=(0,a.MN)([c.style,n.style]);else if((0,a.W8)(e)){const t=c[e],r=n[e];!r||t===r||(0,a.c7)(t)&&t.includes(r)||(c[e]=t?[].concat(t,r):r)}else""!==e&&(c[e]=n[e])}return c}function _t(e,c,t,n=null){i(e,c,7,[t,n])}const At=mc();let Et=0;function It(e,c,t){const r=e.type,i=(c?c.appContext:e.appContext)||At,o={uid:Et++,vnode:e,type:r,parent:c,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new n.YT(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:c?c.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bc(r,i),emitsOptions:N(r,i),emit:null,emitted:null,propsDefaults:a.kx,inheritAttrs:r.inheritAttrs,ctx:a.kx,data:a.kx,props:a.kx,attrs:a.kx,slots:a.kx,refs:a.kx,setupState:a.kx,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=c?c.root:o,o.emit=k.bind(null,o),e.ce&&e.ce(o),o}let Tt=null;const Pt=()=>Tt||A;let Ot,Rt;{const e=(0,a.Ke)(),c=(c,t)=>{let n;return(n=e[c])||(n=e[c]=[]),n.push(t),e=>{n.length>1?n.forEach((c=>c(e))):n[0](e)}};Ot=c("__VUE_INSTANCE_SETTERS__",(e=>Tt=e)),Rt=c("__VUE_SSR_SETTERS__",(e=>$t=e))}const Dt=e=>{const c=Tt;return Ot(e),e.scope.on(),()=>{e.scope.off(),Ot(c)}},Ft=()=>{Tt&&Tt.scope.off(),Ot(null)};function Bt(e){return 4&e.vnode.shapeFlag}let Kt,Ut,$t=!1;function jt(e,c=!1){c&&Rt(c);const{props:t,children:n}=e.vnode,a=Bt(e);Vc(e,t,a,c),Ec(e,n);const r=a?qt(e,c):void 0;return c&&Rt(!1),r}function qt(e,c){const t=e.type;e.accessCache=Object.create(null),e.proxy=(0,n.Md)(new Proxy(e.ctx,Ze));const{setup:i}=t;if(i){const t=e.setupContext=i.length>1?Zt(e):null,s=Dt(e);(0,n.S0)();const l=r(i,e,0,[e.props,t]);if((0,n.qo)(),s(),(0,a.um)(l)){if(l.then(Ft,Ft),c)return l.then((t=>{Gt(e,t,c)})).catch((c=>{o(c,e,0)}));e.asyncDep=l}else Gt(e,l,c)}else Wt(e,c)}function Gt(e,c,t){(0,a.mg)(c)?e.type.__ssrInlineRender?e.ssrRender=c:e.render=c:(0,a.Y9)(c)&&(e.setupState=(0,n.cf)(c)),Wt(e,t)}function Wt(e,c,t){const r=e.type;if(!e.render){if(!c&&Kt&&!r.render){const c=r.template||nc(e).template;if(c){0;const{isCustomElement:t,compilerOptions:n}=e.appContext.config,{delimiters:i,compilerOptions:o}=r,s=(0,a.SU)((0,a.SU)({isCustomElement:t,delimiters:i},n),o);r.render=Kt(c,s)}}e.render=r.render||a.e_,Ut&&Ut(e)}{const c=Dt(e);(0,n.S0)();try{Qe(e)}finally{(0,n.qo)(),c()}}}function Yt(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(c,t){return(0,n.kH)(e,"get","$attrs"),c[t]}}))}function Zt(e){const c=c=>{e.exposed=c||{}};return{get attrs(){return Yt(e)},slots:e.slots,emit:e.emit,expose:c}}function Xt(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,n.cf)((0,n.Md)(e.exposed)),{get(c,t){return t in c?c[t]:t in We?We[t](e):void 0},has(e,c){return c in e||c in We}}))}function Jt(e,c=!0){return(0,a.mg)(e)?e.displayName||e.name:e.name||c&&e.__name}function Qt(e){return(0,a.mg)(e)&&"__vccOpts"in e}const en=(e,c)=>(0,n.S6)(e,c,$t);function cn(e,c,t){const n=arguments.length;return 2===n?(0,a.Y9)(c)&&!(0,a.c7)(c)?ht(c)?Ht(e,null,[c]):Ht(e,c):Ht(e,null,c):(n>3?t=Array.prototype.slice.call(arguments,2):3===n&&ht(t)&&(t=[t]),Ht(e,c,t))}const tn="3.4.18",nn=a.e_},7764:function(e,c,t){t.d(c,{Og:function(){return Ce},Ox:function(){return p},Q9:function(){return fe},Ub:function(){return E},W0:function(){return Se},Y7:function(){return be}});t(3248);var n=t(4108),a=t(9096),r=t(2500);
/**
* @vue/runtime-dom v3.4.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const i="http://www.w3.org/2000/svg",o="http://www.w3.org/1998/Math/MathML",s="undefined"!==typeof document?document:null,l=s&&s.createElement("template"),u={insert:(e,c,t)=>{c.insertBefore(e,t||null)},remove:e=>{const c=e.parentNode;c&&c.removeChild(e)},createElement:(e,c,t,n)=>{const a="svg"===c?s.createElementNS(i,e):"mathml"===c?s.createElementNS(o,e):s.createElement(e,t?{is:t}:void 0);return"select"===e&&n&&null!=n.multiple&&a.setAttribute("multiple",n.multiple),a},createText:e=>s.createTextNode(e),createComment:e=>s.createComment(e),setText:(e,c)=>{e.nodeValue=c},setElementText:(e,c)=>{e.textContent=c},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>s.querySelector(e),setScopeId(e,c){e.setAttribute(c,"")},insertStaticContent(e,c,t,n,a,r){const i=t?t.previousSibling:c.lastChild;if(a&&(a===r||a.nextSibling)){while(1)if(c.insertBefore(a.cloneNode(!0),t),a===r||!(a=a.nextSibling))break}else{l.innerHTML="svg"===n?`<svg>${e}</svg>`:"mathml"===n?`<math>${e}</math>`:e;const a=l.content;if("svg"===n||"mathml"===n){const e=a.firstChild;while(e.firstChild)a.appendChild(e.firstChild);a.removeChild(e)}c.insertBefore(a,t)}return[i?i.nextSibling:c.firstChild,t?t.previousSibling:c.lastChild]}},f="transition",d="animation",m=Symbol("_vtc"),p=(e,{slots:c})=>(0,n.h)(n.c1,V(e),c);p.displayName="Transition";const h={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},v=p.props=(0,a.SU)({},n.oR,h),g=(e,c=[])=>{(0,a.c7)(e)?e.forEach((e=>e(...c))):e&&e(...c)},z=e=>!!e&&((0,a.c7)(e)?e.some((e=>e.length>1)):e.length>1);function V(e){const c={};for(const a in e)a in h||(c[a]=e[a]);if(!1===e.css)return c;const{name:t="v",type:n,duration:r,enterFromClass:i=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:s=`${t}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:f=s,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:m=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=e,v=C(r),V=v&&v[0],H=v&&v[1],{onBeforeEnter:L,onEnter:S,onEnterCancelled:w,onLeave:k,onLeaveCancelled:_,onBeforeAppear:A=L,onAppear:E=S,onAppearCancelled:I=w}=c,T=(e,c,t)=>{b(e,c?f:s),b(e,c?u:o),t&&t()},P=(e,c)=>{e._isLeaving=!1,b(e,d),b(e,p),b(e,m),c&&c()},O=e=>(c,t)=>{const a=e?E:S,r=()=>T(c,e,t);g(a,[c,r]),y((()=>{b(c,e?l:i),M(c,e?f:s),z(a)||x(c,n,V,r)}))};return(0,a.SU)(c,{onBeforeEnter(e){g(L,[e]),M(e,i),M(e,o)},onBeforeAppear(e){g(A,[e]),M(e,l),M(e,u)},onEnter:O(!1),onAppear:O(!0),onLeave(e,c){e._isLeaving=!0;const t=()=>P(e,c);M(e,d),N(),M(e,m),y((()=>{e._isLeaving&&(b(e,d),M(e,p),z(k)||x(e,n,H,t))})),g(k,[e,t])},onEnterCancelled(e){T(e,!1),g(w,[e])},onAppearCancelled(e){T(e,!0),g(I,[e])},onLeaveCancelled(e){P(e),g(_,[e])}})}function C(e){if(null==e)return null;if((0,a.Y9)(e))return[H(e.enter),H(e.leave)];{const c=H(e);return[c,c]}}function H(e){const c=(0,a.gH)(e);return c}function M(e,c){c.split(/\s+/).forEach((c=>c&&e.classList.add(c))),(e[m]||(e[m]=new Set)).add(c)}function b(e,c){c.split(/\s+/).forEach((c=>c&&e.classList.remove(c)));const t=e[m];t&&(t.delete(c),t.size||(e[m]=void 0))}function y(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let L=0;function x(e,c,t,n){const a=e._endId=++L,r=()=>{a===e._endId&&n()};if(t)return setTimeout(r,t);const{type:i,timeout:o,propCount:s}=S(e,c);if(!i)return n();const l=i+"end";let u=0;const f=()=>{e.removeEventListener(l,d),r()},d=c=>{c.target===e&&++u>=s&&f()};setTimeout((()=>{u<s&&f()}),o+1),e.addEventListener(l,d)}function S(e,c){const t=window.getComputedStyle(e),n=e=>(t[e]||"").split(", "),a=n(`${f}Delay`),r=n(`${f}Duration`),i=w(a,r),o=n(`${d}Delay`),s=n(`${d}Duration`),l=w(o,s);let u=null,m=0,p=0;c===f?i>0&&(u=f,m=i,p=r.length):c===d?l>0&&(u=d,m=l,p=s.length):(m=Math.max(i,l),u=m>0?i>l?f:d:null,p=u?u===f?r.length:s.length:0);const h=u===f&&/\b(transform|all)(,|$)/.test(n(`${f}Property`).toString());return{type:u,timeout:m,propCount:p,hasTransform:h}}function w(e,c){while(e.length<c.length)e=e.concat(e);return Math.max(...c.map(((c,t)=>k(c)+k(e[t]))))}function k(e){return"auto"===e?0:1e3*Number(e.slice(0,-1).replace(",","."))}function N(){return document.body.offsetHeight}function _(e,c,t){const n=e[m];n&&(c=(c?[c,...n]:[...n]).join(" ")),null==c?e.removeAttribute("class"):t?e.setAttribute("class",c):e.className=c}const A=Symbol("_vod"),E={beforeMount(e,{value:c},{transition:t}){e[A]="none"===e.style.display?"":e.style.display,t&&c?t.beforeEnter(e):I(e,c)},mounted(e,{value:c},{transition:t}){t&&c&&t.enter(e)},updated(e,{value:c,oldValue:t},{transition:n}){!c===!t&&e.style.display===e[A]||(n?c?(n.beforeEnter(e),I(e,!0),n.enter(e)):n.leave(e,(()=>{I(e,!1)})):I(e,c))},beforeUnmount(e,{value:c}){I(e,c)}};function I(e,c){e.style.display=c?e[A]:"none"}const T=Symbol("");const P=/(^|;)\s*display\s*:/;function O(e,c,t){const n=e.style,r=(0,a.ct)(t),i=n.display;let o=!1;if(t&&!r){if(c&&!(0,a.ct)(c))for(const e in c)null==t[e]&&D(n,e,"");for(const e in t)"display"===e&&(o=!0),D(n,e,t[e])}else if(r){if(c!==t){const e=n[T];e&&(t+=";"+e),n.cssText=t,o=P.test(t)}}else c&&e.removeAttribute("style");A in e&&(e[A]=o?n.display:"",n.display=i)}const R=/\s*!important$/;function D(e,c,t){if((0,a.c7)(t))t.forEach((t=>D(e,c,t)));else if(null==t&&(t=""),c.startsWith("--"))e.setProperty(c,t);else{const n=K(e,c);R.test(t)?e.setProperty((0,a.c$)(n),t.replace(R,""),"important"):e[n]=t}}const F=["Webkit","Moz","ms"],B={};function K(e,c){const t=B[c];if(t)return t;let n=(0,a.AX)(c);if("filter"!==n&&n in e)return B[c]=n;n=(0,a.Yj)(n);for(let a=0;a<F.length;a++){const t=F[a]+n;if(t in e)return B[c]=t}return c}const U="http://www.w3.org/1999/xlink";function $(e,c,t,n,r){if(n&&c.startsWith("xlink:"))null==t?e.removeAttributeNS(U,c.slice(6,c.length)):e.setAttributeNS(U,c,t);else{const n=(0,a.Kg)(c);null==t||n&&!(0,a.Oy)(t)?e.removeAttribute(c):e.setAttribute(c,n?"":t)}}function j(e,c,t,n,r,i,o){if("innerHTML"===c||"textContent"===c)return n&&o(n,r,i),void(e[c]=null==t?"":t);const s=e.tagName;if("value"===c&&"PROGRESS"!==s&&!s.includes("-")){e._value=t;const n="OPTION"===s?e.getAttribute("value"):e.value,a=null==t?"":t;return n!==a&&(e.value=a),void(null==t&&e.removeAttribute(c))}let l=!1;if(""===t||null==t){const n=typeof e[c];"boolean"===n?t=(0,a.Oy)(t):null==t&&"string"===n?(t="",l=!0):"number"===n&&(t=0,l=!0)}try{e[c]=t}catch(u){0}l&&e.removeAttribute(c)}function q(e,c,t,n){e.addEventListener(c,t,n)}function G(e,c,t,n){e.removeEventListener(c,t,n)}const W=Symbol("_vei");function Y(e,c,t,n,a=null){const r=e[W]||(e[W]={}),i=r[c];if(n&&i)i.value=n;else{const[t,o]=X(c);if(n){const i=r[c]=ce(n,a);q(e,t,i,o)}else i&&(G(e,t,i,o),r[c]=void 0)}}const Z=/(?:Once|Passive|Capture)$/;function X(e){let c;if(Z.test(e)){let t;c={};while(t=e.match(Z))e=e.slice(0,e.length-t[0].length),c[t[0].toLowerCase()]=!0}const t=":"===e[2]?e.slice(3):(0,a.c$)(e.slice(2));return[t,c]}let J=0;const Q=Promise.resolve(),ee=()=>J||(Q.then((()=>J=0)),J=Date.now());function ce(e,c){const t=e=>{if(e._vts){if(e._vts<=t.attached)return}else e._vts=Date.now();(0,n.a6)(te(e,t.value),c,5,[e])};return t.value=e,t.attached=ee(),t}function te(e,c){if((0,a.c7)(c)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},c.map((e=>c=>!c._stopped&&e&&e(c)))}return c}const ne=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,ae=(e,c,t,n,r,i,o,s,l)=>{const u="svg"===r;"class"===c?_(e,n,u):"style"===c?O(e,t,n):(0,a.W8)(c)?(0,a._w)(c)||Y(e,c,t,n,o):("."===c[0]?(c=c.slice(1),1):"^"===c[0]?(c=c.slice(1),0):re(e,c,n,u))?j(e,c,n,i,o,s,l):("true-value"===c?e._trueValue=n:"false-value"===c&&(e._falseValue=n),$(e,c,n,u))};function re(e,c,t,n){if(n)return"innerHTML"===c||"textContent"===c||!!(c in e&&ne(c)&&(0,a.mg)(t));if("spellcheck"===c||"draggable"===c||"translate"===c)return!1;if("form"===c)return!1;if("list"===c&&"INPUT"===e.tagName)return!1;if("type"===c&&"TEXTAREA"===e.tagName)return!1;if("width"===c||"height"===c){const c=e.tagName;if("IMG"===c||"VIDEO"===c||"CANVAS"===c||"SOURCE"===c)return!1}return(!ne(c)||!(0,a.ct)(t))&&c in e}
/*! #__NO_SIDE_EFFECTS__ */
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;const ie=new WeakMap,oe=new WeakMap,se=Symbol("_moveCb"),le=Symbol("_enterCb"),ue={name:"TransitionGroup",props:(0,a.SU)({},v,{tag:String,moveClass:String}),setup(e,{slots:c}){const t=(0,n._S)(),a=(0,n.In)();let i,o;return(0,n.OA)((()=>{if(!i.length)return;const c=e.moveClass||`${e.name||"v"}-move`;if(!he(i[0].el,t.vnode.el,c))return;i.forEach(de),i.forEach(me);const n=i.filter(pe);N(),n.forEach((e=>{const t=e.el,n=t.style;M(t,c),n.transform=n.webkitTransform=n.transitionDuration="";const a=t[se]=e=>{e&&e.target!==t||e&&!/transform$/.test(e.propertyName)||(t.removeEventListener("transitionend",a),t[se]=null,b(t,c))};t.addEventListener("transitionend",a)}))})),()=>{const s=(0,r.Nc)(e),l=V(s);let u=s.tag||n.ae;i=o,o=c.default?(0,n.a1)(c.default()):[];for(let e=0;e<o.length;e++){const c=o[e];null!=c.key&&(0,n.uS)(c,(0,n.YN)(c,l,a,t))}if(i)for(let e=0;e<i.length;e++){const c=i[e];(0,n.uS)(c,(0,n.YN)(c,l,a,t)),ie.set(c,c.el.getBoundingClientRect())}return(0,n.K2)(u,null,o)}}};ue.props;const fe=ue;function de(e){const c=e.el;c[se]&&c[se](),c[le]&&c[le]()}function me(e){oe.set(e,e.el.getBoundingClientRect())}function pe(e){const c=ie.get(e),t=oe.get(e),n=c.left-t.left,a=c.top-t.top;if(n||a){const c=e.el.style;return c.transform=c.webkitTransform=`translate(${n}px,${a}px)`,c.transitionDuration="0s",e}}function he(e,c,t){const n=e.cloneNode(),a=e[m];a&&a.forEach((e=>{e.split(/\s+/).forEach((e=>e&&n.classList.remove(e)))})),t.split(/\s+/).forEach((e=>e&&n.classList.add(e))),n.style.display="none";const r=1===c.nodeType?c:c.parentNode;r.appendChild(n);const{hasTransform:i}=S(n);return r.removeChild(n),i}const ve=e=>{const c=e.props["onUpdate:modelValue"]||!1;return(0,a.c7)(c)?e=>(0,a.Qv)(c,e):c};function ge(e){e.target.composing=!0}function ze(e){const c=e.target;c.composing&&(c.composing=!1,c.dispatchEvent(new Event("input")))}const Ve=Symbol("_assign"),Ce={created(e,{modifiers:{lazy:c,trim:t,number:n}},r){e[Ve]=ve(r);const i=n||r.props&&"number"===r.props.type;q(e,c?"change":"input",(c=>{if(c.target.composing)return;let n=e.value;t&&(n=n.trim()),i&&(n=(0,a.wB)(n)),e[Ve](n)})),t&&q(e,"change",(()=>{e.value=e.value.trim()})),c||(q(e,"compositionstart",ge),q(e,"compositionend",ze),q(e,"change",ze))},mounted(e,{value:c}){e.value=null==c?"":c},beforeUpdate(e,{value:c,modifiers:{lazy:t,trim:n,number:r}},i){if(e[Ve]=ve(i),e.composing)return;const o=r||"number"===e.type?(0,a.wB)(e.value):e.value,s=null==c?"":c;if(o!==s){if(document.activeElement===e&&"range"!==e.type){if(t)return;if(n&&e.value.trim()===s)return}e.value=s}}};const He=["ctrl","shift","alt","meta"],Me={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,c)=>He.some((t=>e[`${t}Key`]&&!c.includes(t)))},be=(e,c)=>{const t=e._withMods||(e._withMods={}),n=c.join(".");return t[n]||(t[n]=(t,...n)=>{for(let e=0;e<c.length;e++){const n=Me[c[e]];if(n&&n(t,c))return}return e(t,...n)})},ye=(0,a.SU)({patchProp:ae},u);let Le;function xe(){return Le||(Le=(0,n.O)(ye))}const Se=(...e)=>{const c=xe().createApp(...e);const{mount:t}=c;return c.mount=e=>{const n=ke(e);if(!n)return;const r=c._component;(0,a.mg)(r)||r.render||r.template||(r.template=n.innerHTML),n.innerHTML="";const i=t(n,!1,we(n));return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),i},c};function we(e){return e instanceof SVGElement?"svg":"function"===typeof MathMLElement&&e instanceof MathMLElement?"mathml":void 0}function ke(e){if((0,a.ct)(e)){const c=document.querySelector(e);return c}return e}},9096:function(e,c,t){t.d(c,{AX:function(){return A},An:function(){return x},E7:function(){return ne},GM:function(){return P},I7:function(){return v},Ke:function(){return U},Kg:function(){return Q},MN:function(){return q},NO:function(){return o},Oy:function(){return ee},QX:function(){return z},Qv:function(){return R},SU:function(){return u},W8:function(){return s},WA:function(){return ae},WN:function(){return X},Y9:function(){return M},Yj:function(){return T},Yz:function(){return m},_w:function(){return l},aE:function(){return f},aO:function(){return H},c$:function(){return I},c7:function(){return p},cF:function(){return h},cJ:function(){return w},ct:function(){return C},e6:function(){return j},e_:function(){return i},gH:function(){return B},iS:function(){return te},kX:function(){return n},kx:function(){return a},mg:function(){return V},mz:function(){return O},o5:function(){return k},oF:function(){return S},u6:function(){return D},um:function(){return b},wB:function(){return F},yA:function(){return r}});t(3248);
/**
* @vue/shared v3.4.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function n(e,c){const t=new Set(e.split(","));return c?e=>t.has(e.toLowerCase()):e=>t.has(e)}const a={},r=[],i=()=>{},o=()=>!1,s=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),l=e=>e.startsWith("onUpdate:"),u=Object.assign,f=(e,c)=>{const t=e.indexOf(c);t>-1&&e.splice(t,1)},d=Object.prototype.hasOwnProperty,m=(e,c)=>d.call(e,c),p=Array.isArray,h=e=>"[object Map]"===L(e),v=e=>"[object Set]"===L(e),g=e=>"[object Date]"===L(e),z=e=>"[object RegExp]"===L(e),V=e=>"function"===typeof e,C=e=>"string"===typeof e,H=e=>"symbol"===typeof e,M=e=>null!==e&&"object"===typeof e,b=e=>(M(e)||V(e))&&V(e.then)&&V(e.catch),y=Object.prototype.toString,L=e=>y.call(e),x=e=>L(e).slice(8,-1),S=e=>"[object Object]"===L(e),w=e=>C(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,k=n(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),N=e=>{const c=Object.create(null);return t=>{const n=c[t];return n||(c[t]=e(t))}},_=/-(\w)/g,A=N((e=>e.replace(_,((e,c)=>c?c.toUpperCase():"")))),E=/\B([A-Z])/g,I=N((e=>e.replace(E,"-$1").toLowerCase())),T=N((e=>e.charAt(0).toUpperCase()+e.slice(1))),P=N((e=>{const c=e?`on${T(e)}`:"";return c})),O=(e,c)=>!Object.is(e,c),R=(e,c)=>{for(let t=0;t<e.length;t++)e[t](c)},D=(e,c,t)=>{Object.defineProperty(e,c,{configurable:!0,enumerable:!1,value:t})},F=e=>{const c=parseFloat(e);return isNaN(c)?e:c},B=e=>{const c=C(e)?Number(e):NaN;return isNaN(c)?e:c};let K;const U=()=>K||(K="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof t.g?t.g:{});const $="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",j=n($);function q(e){if(p(e)){const c={};for(let t=0;t<e.length;t++){const n=e[t],a=C(n)?Z(n):q(n);if(a)for(const e in a)c[e]=a[e]}return c}if(C(e)||M(e))return e}const G=/;(?![^(]*\))/g,W=/:([^]+)/,Y=/\/\*[^]*?\*\//g;function Z(e){const c={};return e.replace(Y,"").split(G).forEach((e=>{if(e){const t=e.split(W);t.length>1&&(c[t[0].trim()]=t[1].trim())}})),c}function X(e){let c="";if(C(e))c=e;else if(p(e))for(let t=0;t<e.length;t++){const n=X(e[t]);n&&(c+=n+" ")}else if(M(e))for(const t in e)e[t]&&(c+=t+" ");return c.trim()}const J="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Q=n(J);function ee(e){return!!e||""===e}function ce(e,c){if(e.length!==c.length)return!1;let t=!0;for(let n=0;t&&n<e.length;n++)t=te(e[n],c[n]);return t}function te(e,c){if(e===c)return!0;let t=g(e),n=g(c);if(t||n)return!(!t||!n)&&e.getTime()===c.getTime();if(t=H(e),n=H(c),t||n)return e===c;if(t=p(e),n=p(c),t||n)return!(!t||!n)&&ce(e,c);if(t=M(e),n=M(c),t||n){if(!t||!n)return!1;const a=Object.keys(e).length,r=Object.keys(c).length;if(a!==r)return!1;for(const t in e){const n=e.hasOwnProperty(t),a=c.hasOwnProperty(t);if(n&&!a||!n&&a||!te(e[t],c[t]))return!1}}return String(e)===String(c)}function ne(e,c){return e.findIndex((e=>te(e,c)))}const ae=e=>C(e)?e:null==e?"":p(e)||M(e)&&(e.toString===y||!V(e.toString))?JSON.stringify(e,re,2):String(e),re=(e,c)=>c&&c.__v_isRef?re(e,c.value):h(c)?{[`Map(${c.size})`]:[...c.entries()].reduce(((e,[c,t],n)=>(e[ie(c,n)+" =>"]=t,e)),{})}:v(c)?{[`Set(${c.size})`]:[...c.values()].map((e=>ie(e)))}:H(c)?ie(c):!M(c)||p(c)||S(c)?c:String(c),ie=(e,c="")=>{var t;return H(e)?`Symbol(${null!=(t=e.description)?t:c})`:e}},4100:function(e,c){c.c=(e,c)=>{const t=e.__vccOpts||e;for(const[n,a]of c)t[n]=a;return t}},7192:function(e,c,t){t.d(c,{eC:function(){return ee},ae:function(){return ae},gV:function(){return ne}});t(3248);var n=t(4108),a=t(2500);function r(){return i().__VUE_DEVTOOLS_GLOBAL_HOOK__}function i(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof t.g?t.g:{}}const o="function"===typeof Proxy,s="devtools-plugin:setup",l="plugin:settings:set";let u,f;function d(){var e;return void 0!==u||("undefined"!==typeof window&&window.performance?(u=!0,f=window.performance):"undefined"!==typeof t.g&&(null===(e=t.g.perf_hooks)||void 0===e?void 0:e.performance)?(u=!0,f=t.g.perf_hooks.performance):u=!1),u}function m(){return d()?f.now():Date.now()}class p{constructor(e,c){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=c;const t={};if(e.settings)for(const i in e.settings){const c=e.settings[i];t[i]=c.defaultValue}const n=`__vue-devtools-plugin-settings__${e.id}`;let a=Object.assign({},t);try{const e=localStorage.getItem(n),c=JSON.parse(e);Object.assign(a,c)}catch(r){}this.fallbacks={getSettings(){return a},setSettings(e){try{localStorage.setItem(n,JSON.stringify(e))}catch(r){}a=e},now(){return m()}},c&&c.on(l,((e,c)=>{e===this.plugin.id&&this.fallbacks.setSettings(c)})),this.proxiedOn=new Proxy({},{get:(e,c)=>this.target?this.target.on[c]:(...e)=>{this.onQueue.push({method:c,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,c)=>this.target?this.target[c]:"on"===c?this.proxiedOn:Object.keys(this.fallbacks).includes(c)?(...e)=>(this.targetQueue.push({method:c,args:e,resolve:()=>{}}),this.fallbacks[c](...e)):(...e)=>new Promise((t=>{this.targetQueue.push({method:c,args:e,resolve:t})}))})}async setRealTarget(e){this.target=e;for(const c of this.onQueue)this.target.on[c.method](...c.args);for(const c of this.targetQueue)c.resolve(await this.target[c.method](...c.args))}}function h(e,c){const t=e,n=i(),a=r(),l=o&&t.enableEarlyProxy;if(!a||!n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&l){const e=l?new p(t,a):null,r=n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[];r.push({pluginDescriptor:t,setupFn:c,proxy:e}),e&&c(e.proxiedTarget)}else a.emit(s,e,c)}
/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */
var v="store";function g(e,c){Object.keys(e).forEach((function(t){return c(e[t],t)}))}function z(e){return null!==e&&"object"===typeof e}function V(e){return e&&"function"===typeof e.then}function C(e,c){return function(){return e(c)}}function H(e,c,t){return c.indexOf(e)<0&&(t&&t.prepend?c.unshift(e):c.push(e)),function(){var t=c.indexOf(e);t>-1&&c.splice(t,1)}}function M(e,c){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var t=e.state;y(e,t,[],e._modules.root,!0),b(e,t,c)}function b(e,c,t){var r=e._state,i=e._scope;e.getters={},e._makeLocalGettersCache=Object.create(null);var o=e._wrappedGetters,s={},l={},u=(0,a.Ul)(!0);u.run((function(){g(o,(function(c,t){s[t]=C(c,e),l[t]=(0,n.S6)((function(){return s[t]()})),Object.defineProperty(e.getters,t,{get:function(){return l[t].value},enumerable:!0})}))})),e._state=(0,a.cB)({data:c}),e._scope=u,e.strict&&N(e),r&&t&&e._withCommit((function(){r.data=null})),i&&i.stop()}function y(e,c,t,n,a){var r=!t.length,i=e._modules.getNamespace(t);if(n.namespaced&&(e._modulesNamespaceMap[i],e._modulesNamespaceMap[i]=n),!r&&!a){var o=_(c,t.slice(0,-1)),s=t[t.length-1];e._withCommit((function(){o[s]=n.state}))}var l=n.context=L(e,i,t);n.forEachMutation((function(c,t){var n=i+t;S(e,n,c,l)})),n.forEachAction((function(c,t){var n=c.root?t:i+t,a=c.handler||c;w(e,n,a,l)})),n.forEachGetter((function(c,t){var n=i+t;k(e,n,c,l)})),n.forEachChild((function(n,r){y(e,c,t.concat(r),n,a)}))}function L(e,c,t){var n=""===c,a={dispatch:n?e.dispatch:function(t,n,a){var r=A(t,n,a),i=r.payload,o=r.options,s=r.type;return o&&o.root||(s=c+s),e.dispatch(s,i)},commit:n?e.commit:function(t,n,a){var r=A(t,n,a),i=r.payload,o=r.options,s=r.type;o&&o.root||(s=c+s),e.commit(s,i,o)}};return Object.defineProperties(a,{getters:{get:n?function(){return e.getters}:function(){return x(e,c)}},state:{get:function(){return _(e.state,t)}}}),a}function x(e,c){if(!e._makeLocalGettersCache[c]){var t={},n=c.length;Object.keys(e.getters).forEach((function(a){if(a.slice(0,n)===c){var r=a.slice(n);Object.defineProperty(t,r,{get:function(){return e.getters[a]},enumerable:!0})}})),e._makeLocalGettersCache[c]=t}return e._makeLocalGettersCache[c]}function S(e,c,t,n){var a=e._mutations[c]||(e._mutations[c]=[]);a.push((function(c){t.call(e,n.state,c)}))}function w(e,c,t,n){var a=e._actions[c]||(e._actions[c]=[]);a.push((function(c){var a=t.call(e,{dispatch:n.dispatch,commit:n.commit,getters:n.getters,state:n.state,rootGetters:e.getters,rootState:e.state},c);return V(a)||(a=Promise.resolve(a)),e._devtoolHook?a.catch((function(c){throw e._devtoolHook.emit("vuex:error",c),c})):a}))}function k(e,c,t,n){e._wrappedGetters[c]||(e._wrappedGetters[c]=function(e){return t(n.state,n.getters,e.state,e.getters)})}function N(e){(0,n.Kg)((function(){return e._state.data}),(function(){0}),{deep:!0,flush:"sync"})}function _(e,c){return c.reduce((function(e,c){return e[c]}),e)}function A(e,c,t){return z(e)&&e.type&&(t=c,c=e,e=e.type),{type:e,payload:c,options:t}}var E="vuex bindings",I="vuex:mutations",T="vuex:actions",P="vuex",O=0;function R(e,c){h({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[E]},(function(t){t.addTimelineLayer({id:I,label:"Vuex Mutations",color:D}),t.addTimelineLayer({id:T,label:"Vuex Actions",color:D}),t.addInspector({id:P,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),t.on.getInspectorTree((function(t){if(t.app===e&&t.inspectorId===P)if(t.filter){var n=[];j(n,c._modules.root,t.filter,""),t.rootNodes=n}else t.rootNodes=[$(c._modules.root,"")]})),t.on.getInspectorState((function(t){if(t.app===e&&t.inspectorId===P){var n=t.nodeId;x(c,n),t.state=q(W(c._modules,n),"root"===n?c.getters:c._makeLocalGettersCache,n)}})),t.on.editInspectorState((function(t){if(t.app===e&&t.inspectorId===P){var n=t.nodeId,a=t.path;"root"!==n&&(a=n.split("/").filter(Boolean).concat(a)),c._withCommit((function(){t.set(c._state.data,a,t.state.value)}))}})),c.subscribe((function(e,c){var n={};e.payload&&(n.payload=e.payload),n.state=c,t.notifyComponentUpdate(),t.sendInspectorTree(P),t.sendInspectorState(P),t.addTimelineEvent({layerId:I,event:{time:Date.now(),title:e.type,data:n}})})),c.subscribeAction({before:function(e,c){var n={};e.payload&&(n.payload=e.payload),e._id=O++,e._time=Date.now(),n.state=c,t.addTimelineEvent({layerId:T,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:n}})},after:function(e,c){var n={},a=Date.now()-e._time;n.duration={_custom:{type:"duration",display:a+"ms",tooltip:"Action duration",value:a}},e.payload&&(n.payload=e.payload),n.state=c,t.addTimelineEvent({layerId:T,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:n}})}})}))}var D=8702998,F=6710886,B=16777215,K={label:"namespaced",textColor:B,backgroundColor:F};function U(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function $(e,c){return{id:c||"root",label:U(c),tags:e.namespaced?[K]:[],children:Object.keys(e._children).map((function(t){return $(e._children[t],c+t+"/")}))}}function j(e,c,t,n){n.includes(t)&&e.push({id:n||"root",label:n.endsWith("/")?n.slice(0,n.length-1):n||"Root",tags:c.namespaced?[K]:[]}),Object.keys(c._children).forEach((function(a){j(e,c._children[a],t,n+a+"/")}))}function q(e,c,t){c="root"===t?c:c[t];var n=Object.keys(c),a={state:Object.keys(e.state).map((function(c){return{key:c,editable:!0,value:e.state[c]}}))};if(n.length){var r=G(c);a.getters=Object.keys(r).map((function(e){return{key:e.endsWith("/")?U(e):e,editable:!1,value:Y((function(){return r[e]}))}}))}return a}function G(e){var c={};return Object.keys(e).forEach((function(t){var n=t.split("/");if(n.length>1){var a=c,r=n.pop();n.forEach((function(e){a[e]||(a[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),a=a[e]._custom.value})),a[r]=Y((function(){return e[t]}))}else c[t]=Y((function(){return e[t]}))})),c}function W(e,c){var t=c.split("/").filter((function(e){return e}));return t.reduce((function(e,n,a){var r=e[n];if(!r)throw new Error('Missing module "'+n+'" for path "'+c+'".');return a===t.length-1?r:r._children}),"root"===c?e:e.root._children)}function Y(e){try{return e()}catch(c){return c}}var Z=function(e,c){this.runtime=c,this._children=Object.create(null),this._rawModule=e;var t=e.state;this.state=("function"===typeof t?t():t)||{}},X={namespaced:{configurable:!0}};X.namespaced.get=function(){return!!this._rawModule.namespaced},Z.prototype.addChild=function(e,c){this._children[e]=c},Z.prototype.removeChild=function(e){delete this._children[e]},Z.prototype.getChild=function(e){return this._children[e]},Z.prototype.hasChild=function(e){return e in this._children},Z.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},Z.prototype.forEachChild=function(e){g(this._children,e)},Z.prototype.forEachGetter=function(e){this._rawModule.getters&&g(this._rawModule.getters,e)},Z.prototype.forEachAction=function(e){this._rawModule.actions&&g(this._rawModule.actions,e)},Z.prototype.forEachMutation=function(e){this._rawModule.mutations&&g(this._rawModule.mutations,e)},Object.defineProperties(Z.prototype,X);var J=function(e){this.register([],e,!1)};function Q(e,c,t){if(c.update(t),t.modules)for(var n in t.modules){if(!c.getChild(n))return void 0;Q(e.concat(n),c.getChild(n),t.modules[n])}}J.prototype.get=function(e){return e.reduce((function(e,c){return e.getChild(c)}),this.root)},J.prototype.getNamespace=function(e){var c=this.root;return e.reduce((function(e,t){return c=c.getChild(t),e+(c.namespaced?t+"/":"")}),"")},J.prototype.update=function(e){Q([],this.root,e)},J.prototype.register=function(e,c,t){var n=this;void 0===t&&(t=!0);var a=new Z(c,t);if(0===e.length)this.root=a;else{var r=this.get(e.slice(0,-1));r.addChild(e[e.length-1],a)}c.modules&&g(c.modules,(function(c,a){n.register(e.concat(a),c,t)}))},J.prototype.unregister=function(e){var c=this.get(e.slice(0,-1)),t=e[e.length-1],n=c.getChild(t);n&&n.runtime&&c.removeChild(t)},J.prototype.isRegistered=function(e){var c=this.get(e.slice(0,-1)),t=e[e.length-1];return!!c&&c.hasChild(t)};function ee(e){return new ce(e)}var ce=function(e){var c=this;void 0===e&&(e={});var t=e.plugins;void 0===t&&(t=[]);var n=e.strict;void 0===n&&(n=!1);var a=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new J(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=a;var r=this,i=this,o=i.dispatch,s=i.commit;this.dispatch=function(e,c){return o.call(r,e,c)},this.commit=function(e,c,t){return s.call(r,e,c,t)},this.strict=n;var l=this._modules.root.state;y(this,l,[],this._modules.root),b(this,l),t.forEach((function(e){return e(c)}))},te={state:{configurable:!0}};ce.prototype.install=function(e,c){e.provide(c||v,this),e.config.globalProperties.$store=this;var t=void 0!==this._devtools&&this._devtools;t&&R(e,this)},te.state.get=function(){return this._state.data},te.state.set=function(e){0},ce.prototype.commit=function(e,c,t){var n=this,a=A(e,c,t),r=a.type,i=a.payload,o=(a.options,{type:r,payload:i}),s=this._mutations[r];s&&(this._withCommit((function(){s.forEach((function(e){e(i)}))})),this._subscribers.slice().forEach((function(e){return e(o,n.state)})))},ce.prototype.dispatch=function(e,c){var t=this,n=A(e,c),a=n.type,r=n.payload,i={type:a,payload:r},o=this._actions[a];if(o){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(i,t.state)}))}catch(l){0}var s=o.length>1?Promise.all(o.map((function(e){return e(r)}))):o[0](r);return new Promise((function(e,c){s.then((function(c){try{t._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(i,t.state)}))}catch(l){0}e(c)}),(function(e){try{t._actionSubscribers.filter((function(e){return e.error})).forEach((function(c){return c.error(i,t.state,e)}))}catch(l){0}c(e)}))}))}},ce.prototype.subscribe=function(e,c){return H(e,this._subscribers,c)},ce.prototype.subscribeAction=function(e,c){var t="function"===typeof e?{before:e}:e;return H(t,this._actionSubscribers,c)},ce.prototype.watch=function(e,c,t){var a=this;return(0,n.Kg)((function(){return e(a.state,a.getters)}),c,Object.assign({},t))},ce.prototype.replaceState=function(e){var c=this;this._withCommit((function(){c._state.data=e}))},ce.prototype.registerModule=function(e,c,t){void 0===t&&(t={}),"string"===typeof e&&(e=[e]),this._modules.register(e,c),y(this,this.state,e,this._modules.get(e),t.preserveState),b(this,this.state)},ce.prototype.unregisterModule=function(e){var c=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){var t=_(c.state,e.slice(0,-1));delete t[e[e.length-1]]})),M(this)},ce.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),this._modules.isRegistered(e)},ce.prototype.hotUpdate=function(e){this._modules.update(e),M(this,!0)},ce.prototype._withCommit=function(e){var c=this._committing;this._committing=!0,e(),this._committing=c},Object.defineProperties(ce.prototype,te);oe((function(e,c){var t={};return re(c).forEach((function(c){var n=c.key,a=c.val;t[n]=function(){var c=this.$store.state,t=this.$store.getters;if(e){var n=se(this.$store,"mapState",e);if(!n)return;c=n.context.state,t=n.context.getters}return"function"===typeof a?a.call(this,c,t):c[a]},t[n].vuex=!0})),t})),oe((function(e,c){var t={};return re(c).forEach((function(c){var n=c.key,a=c.val;t[n]=function(){var c=[],t=arguments.length;while(t--)c[t]=arguments[t];var n=this.$store.commit;if(e){var r=se(this.$store,"mapMutations",e);if(!r)return;n=r.context.commit}return"function"===typeof a?a.apply(this,[n].concat(c)):n.apply(this.$store,[a].concat(c))}})),t}));var ne=oe((function(e,c){var t={};return re(c).forEach((function(c){var n=c.key,a=c.val;a=e+a,t[n]=function(){if(!e||se(this.$store,"mapGetters",e))return this.$store.getters[a]},t[n].vuex=!0})),t})),ae=oe((function(e,c){var t={};return re(c).forEach((function(c){var n=c.key,a=c.val;t[n]=function(){var c=[],t=arguments.length;while(t--)c[t]=arguments[t];var n=this.$store.dispatch;if(e){var r=se(this.$store,"mapActions",e);if(!r)return;n=r.context.dispatch}return"function"===typeof a?a.apply(this,[n].concat(c)):n.apply(this.$store,[a].concat(c))}})),t}));function re(e){return ie(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(c){return{key:c,val:e[c]}})):[]}function ie(e){return Array.isArray(e)||z(e)}function oe(e){return function(c,t){return"string"!==typeof c?(t=c,c=""):"/"!==c.charAt(c.length-1)&&(c+="/"),e(c,t)}}function se(e,c,t){var n=e._modulesNamespaceMap[t];return n}},1896:function(e,c,t){var n=t(9063),a=t(4596),r=TypeError;e.exports=function(e){if(n(e))return e;throw new r(a(e)+" is not a function")}},9472:function(e,c,t){var n=t(968),a=String,r=TypeError;e.exports=function(e){if(n(e))return e;throw new r("Can't set "+a(e)+" as a prototype")}},5796:function(e,c,t){var n=t(6056),a=TypeError;e.exports=function(e,c){if(n(c,e))return e;throw new a("Incorrect invocation")}},8424:function(e,c,t){var n=t(808),a=String,r=TypeError;e.exports=function(e){if(n(e))return e;throw new r(a(e)+" is not an object")}},6460:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},7736:function(e,c,t){var n,a,r,i=t(6460),o=t(3528),s=t(5624),l=t(9063),u=t(808),f=t(6216),d=t(8040),m=t(4596),p=t(3652),h=t(3244),v=t(1720),g=t(6056),z=t(1304),V=t(5168),C=t(1840),H=t(320),M=t(5444),b=M.enforce,y=M.get,L=s.Int8Array,x=L&&L.prototype,S=s.Uint8ClampedArray,w=S&&S.prototype,k=L&&z(L),N=x&&z(x),_=Object.prototype,A=s.TypeError,E=C("toStringTag"),I=H("TYPED_ARRAY_TAG"),T="TypedArrayConstructor",P=i&&!!V&&"Opera"!==d(s.opera),O=!1,R={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},D={BigInt64Array:8,BigUint64Array:8},F=function(e){if(!u(e))return!1;var c=d(e);return"DataView"===c||f(R,c)||f(D,c)},B=function(e){var c=z(e);if(u(c)){var t=y(c);return t&&f(t,T)?t[T]:B(c)}},K=function(e){if(!u(e))return!1;var c=d(e);return f(R,c)||f(D,c)},U=function(e){if(K(e))return e;throw new A("Target is not a typed array")},$=function(e){if(l(e)&&(!V||g(k,e)))return e;throw new A(m(e)+" is not a typed array constructor")},j=function(e,c,t,n){if(o){if(t)for(var a in R){var r=s[a];if(r&&f(r.prototype,e))try{delete r.prototype[e]}catch(i){try{r.prototype[e]=c}catch(l){}}}N[e]&&!t||h(N,e,t?c:P&&x[e]||c,n)}},q=function(e,c,t){var n,a;if(o){if(V){if(t)for(n in R)if(a=s[n],a&&f(a,e))try{delete a[e]}catch(r){}if(k[e]&&!t)return;try{return h(k,e,t?c:P&&k[e]||c)}catch(r){}}for(n in R)a=s[n],!a||a[e]&&!t||h(a,e,c)}};for(n in R)a=s[n],r=a&&a.prototype,r?b(r)[T]=a:P=!1;for(n in D)a=s[n],r=a&&a.prototype,r&&(b(r)[T]=a);if((!P||!l(k)||k===Function.prototype)&&(k=function(){throw new A("Incorrect invocation")},P))for(n in R)s[n]&&V(s[n],k);if((!P||!N||N===_)&&(N=k.prototype,P))for(n in R)s[n]&&V(s[n].prototype,N);if(P&&z(w)!==N&&V(w,N),o&&!f(N,E))for(n in O=!0,v(N,E,{configurable:!0,get:function(){return u(this)?this[I]:void 0}}),R)s[n]&&p(s[n],I,n);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:P,TYPED_ARRAY_TAG:O&&I,aTypedArray:U,aTypedArrayConstructor:$,exportTypedArrayMethod:j,exportTypedArrayStaticMethod:q,getTypedArrayConstructor:B,isView:F,isTypedArray:K,TypedArray:k,TypedArrayPrototype:N}},4244:function(e,c,t){var n=t(9480);e.exports=function(e,c,t){var a=0,r=arguments.length>2?t:n(c),i=new e(r);while(r>a)i[a]=c[a++];return i}},2196:function(e,c,t){var n=t(9740),a=t(4160),r=t(9480),i=function(e){return function(c,t,i){var o,s=n(c),l=r(s),u=a(i,l);if(e&&t!==t){while(l>u)if(o=s[u++],o!==o)return!0}else for(;l>u;u++)if((e||u in s)&&s[u]===t)return e||u||0;return!e&&-1}};e.exports={includes:i(!0),indexOf:i(!1)}},7934:function(e,c,t){var n=t(3528),a=t(1064),r=TypeError,i=Object.getOwnPropertyDescriptor,o=n&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=o?function(e,c){if(a(e)&&!i(e,"length").writable)throw new r("Cannot set read only .length");return e.length=c}:function(e,c){return e.length=c}},9135:function(e,c,t){var n=t(9480);e.exports=function(e,c){for(var t=n(e),a=new c(t),r=0;r<t;r++)a[r]=e[t-r-1];return a}},1908:function(e,c,t){var n=t(9480),a=t(3288),r=RangeError;e.exports=function(e,c,t,i){var o=n(e),s=a(t),l=s<0?o+s:s;if(l>=o||l<0)throw new r("Incorrect index");for(var u=new c(o),f=0;f<o;f++)u[f]=f===l?i:e[f];return u}},5983:function(e,c,t){var n=t(1447),a=n({}.toString),r=n("".slice);e.exports=function(e){return r(a(e),8,-1)}},8040:function(e,c,t){var n=t(1712),a=t(9063),r=t(5983),i=t(1840),o=i("toStringTag"),s=Object,l="Arguments"===r(function(){return arguments}()),u=function(e,c){try{return e[c]}catch(t){}};e.exports=n?r:function(e){var c,t,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(t=u(c=s(e),o))?t:l?r(c):"Object"===(n=r(c))&&a(c.callee)?"Arguments":n}},4304:function(e,c,t){var n=t(6216),a=t(9976),r=t(4560),i=t(368);e.exports=function(e,c,t){for(var o=a(c),s=i.f,l=r.f,u=0;u<o.length;u++){var f=o[u];n(e,f)||t&&n(t,f)||s(e,f,l(c,f))}}},9120:function(e,c,t){var n=t(6040);e.exports=!n((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},3652:function(e,c,t){var n=t(3528),a=t(368),r=t(9200);e.exports=n?function(e,c,t){return a.f(e,c,r(1,t))}:function(e,c,t){return e[c]=t,e}},9200:function(e){e.exports=function(e,c){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:c}}},1720:function(e,c,t){var n=t(316),a=t(368);e.exports=function(e,c,t){return t.get&&n(t.get,c,{getter:!0}),t.set&&n(t.set,c,{setter:!0}),a.f(e,c,t)}},3244:function(e,c,t){var n=t(9063),a=t(368),r=t(316),i=t(1544);e.exports=function(e,c,t,o){o||(o={});var s=o.enumerable,l=void 0!==o.name?o.name:c;if(n(t)&&r(t,l,o),o.global)s?e[c]=t:i(c,t);else{try{o.unsafe?e[c]&&(s=!0):delete e[c]}catch(u){}s?e[c]=t:a.f(e,c,{value:t,enumerable:!1,configurable:!o.nonConfigurable,writable:!o.nonWritable})}return e}},1544:function(e,c,t){var n=t(5624),a=Object.defineProperty;e.exports=function(e,c){try{a(n,e,{value:c,configurable:!0,writable:!0})}catch(t){n[e]=c}return c}},3528:function(e,c,t){var n=t(6040);e.exports=!n((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},9308:function(e,c,t){var n=t(5624),a=t(808),r=n.document,i=a(r)&&a(r.createElement);e.exports=function(e){return i?r.createElement(e):{}}},3272:function(e){var c=TypeError,t=9007199254740991;e.exports=function(e){if(e>t)throw c("Maximum allowed index exceeded");return e}},7776:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8232:function(e){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},3356:function(e,c,t){var n,a,r=t(5624),i=t(8232),o=r.process,s=r.Deno,l=o&&o.versions||s&&s.version,u=l&&l.v8;u&&(n=u.split("."),a=n[0]>0&&n[0]<4?1:+(n[0]+n[1])),!a&&i&&(n=i.match(/Edge\/(\d+)/),(!n||n[1]>=74)&&(n=i.match(/Chrome\/(\d+)/),n&&(a=+n[1]))),e.exports=a},4656:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},6064:function(e,c,t){var n=t(1447),a=Error,r=n("".replace),i=function(e){return String(new a(e).stack)}("zxcasd"),o=/\n\s*at [^:]*:[^\n]*/,s=o.test(i);e.exports=function(e,c){if(s&&"string"==typeof e&&!a.prepareStackTrace)while(c--)e=r(e,o,"");return e}},3748:function(e,c,t){var n=t(5624),a=t(4560).f,r=t(3652),i=t(3244),o=t(1544),s=t(4304),l=t(5272);e.exports=function(e,c){var t,u,f,d,m,p,h=e.target,v=e.global,g=e.stat;if(u=v?n:g?n[h]||o(h,{}):n[h]&&n[h].prototype,u)for(f in c){if(m=c[f],e.dontCallGetSet?(p=a(u,f),d=p&&p.value):d=u[f],t=l(v?f:h+(g?".":"#")+f,e.forced),!t&&void 0!==d){if(typeof m==typeof d)continue;s(m,d)}(e.sham||d&&d.sham)&&r(m,"sham",!0),i(u,f,m,e)}}},6040:function(e){e.exports=function(e){try{return!!e()}catch(c){return!0}}},5744:function(e,c,t){var n=t(6040);e.exports=!n((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},892:function(e,c,t){var n=t(5744),a=Function.prototype.call;e.exports=n?a.bind(a):function(){return a.apply(a,arguments)}},3788:function(e,c,t){var n=t(3528),a=t(6216),r=Function.prototype,i=n&&Object.getOwnPropertyDescriptor,o=a(r,"name"),s=o&&"something"===function(){}.name,l=o&&(!n||n&&i(r,"name").configurable);e.exports={EXISTS:o,PROPER:s,CONFIGURABLE:l}},6632:function(e,c,t){var n=t(1447),a=t(1896);e.exports=function(e,c,t){try{return n(a(Object.getOwnPropertyDescriptor(e,c)[t]))}catch(r){}}},1447:function(e,c,t){var n=t(5744),a=Function.prototype,r=a.call,i=n&&a.bind.bind(r,r);e.exports=n?i:function(e){return function(){return r.apply(e,arguments)}}},4960:function(e,c,t){var n=t(5624),a=t(9063),r=function(e){return a(e)?e:void 0};e.exports=function(e,c){return arguments.length<2?r(n[e]):n[e]&&n[e][c]}},364:function(e,c,t){var n=t(1896),a=t(952);e.exports=function(e,c){var t=e[c];return a(t)?void 0:n(t)}},5624:function(e,c,t){var n=function(e){return e&&e.Math===Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t.g&&t.g)||n("object"==typeof this&&this)||function(){return this}()||Function("return this")()},6216:function(e,c,t){var n=t(1447),a=t(6804),r=n({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,c){return r(a(e),c)}},6480:function(e){e.exports={}},784:function(e,c,t){var n=t(3528),a=t(6040),r=t(9308);e.exports=!n&&!a((function(){return 7!==Object.defineProperty(r("div"),"a",{get:function(){return 7}}).a}))},6212:function(e,c,t){var n=t(1447),a=t(6040),r=t(5983),i=Object,o=n("".split);e.exports=a((function(){return!i("z").propertyIsEnumerable(0)}))?function(e){return"String"===r(e)?o(e,""):i(e)}:i},2744:function(e,c,t){var n=t(9063),a=t(808),r=t(5168);e.exports=function(e,c,t){var i,o;return r&&n(i=c.constructor)&&i!==t&&a(o=i.prototype)&&o!==t.prototype&&r(e,o),e}},8460:function(e,c,t){var n=t(1447),a=t(9063),r=t(9136),i=n(Function.toString);a(r.inspectSource)||(r.inspectSource=function(e){return i(e)}),e.exports=r.inspectSource},5444:function(e,c,t){var n,a,r,i=t(280),o=t(5624),s=t(808),l=t(3652),u=t(6216),f=t(9136),d=t(8192),m=t(6480),p="Object already initialized",h=o.TypeError,v=o.WeakMap,g=function(e){return r(e)?a(e):n(e,{})},z=function(e){return function(c){var t;if(!s(c)||(t=a(c)).type!==e)throw new h("Incompatible receiver, "+e+" required");return t}};if(i||f.state){var V=f.state||(f.state=new v);V.get=V.get,V.has=V.has,V.set=V.set,n=function(e,c){if(V.has(e))throw new h(p);return c.facade=e,V.set(e,c),c},a=function(e){return V.get(e)||{}},r=function(e){return V.has(e)}}else{var C=d("state");m[C]=!0,n=function(e,c){if(u(e,C))throw new h(p);return c.facade=e,l(e,C,c),c},a=function(e){return u(e,C)?e[C]:{}},r=function(e){return u(e,C)}}e.exports={set:n,get:a,has:r,enforce:g,getterFor:z}},1064:function(e,c,t){var n=t(5983);e.exports=Array.isArray||function(e){return"Array"===n(e)}},2040:function(e,c,t){var n=t(8040);e.exports=function(e){var c=n(e);return"BigInt64Array"===c||"BigUint64Array"===c}},9063:function(e){var c="object"==typeof document&&document.all;e.exports="undefined"==typeof c&&void 0!==c?function(e){return"function"==typeof e||e===c}:function(e){return"function"==typeof e}},5272:function(e,c,t){var n=t(6040),a=t(9063),r=/#|\.prototype\./,i=function(e,c){var t=s[o(e)];return t===u||t!==l&&(a(c)?n(c):!!c)},o=i.normalize=function(e){return String(e).replace(r,".").toLowerCase()},s=i.data={},l=i.NATIVE="N",u=i.POLYFILL="P";e.exports=i},952:function(e){e.exports=function(e){return null===e||void 0===e}},808:function(e,c,t){var n=t(9063);e.exports=function(e){return"object"==typeof e?null!==e:n(e)}},968:function(e,c,t){var n=t(808);e.exports=function(e){return n(e)||null===e}},2804:function(e){e.exports=!1},6232:function(e,c,t){var n=t(4960),a=t(9063),r=t(6056),i=t(9448),o=Object;e.exports=i?function(e){return"symbol"==typeof e}:function(e){var c=n("Symbol");return a(c)&&r(c.prototype,o(e))}},9480:function(e,c,t){var n=t(960);e.exports=function(e){return n(e.length)}},316:function(e,c,t){var n=t(1447),a=t(6040),r=t(9063),i=t(6216),o=t(3528),s=t(3788).CONFIGURABLE,l=t(8460),u=t(5444),f=u.enforce,d=u.get,m=String,p=Object.defineProperty,h=n("".slice),v=n("".replace),g=n([].join),z=o&&!a((function(){return 8!==p((function(){}),"length",{value:8}).length})),V=String(String).split("String"),C=e.exports=function(e,c,t){"Symbol("===h(m(c),0,7)&&(c="["+v(m(c),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),t&&t.getter&&(c="get "+c),t&&t.setter&&(c="set "+c),(!i(e,"name")||s&&e.name!==c)&&(o?p(e,"name",{value:c,configurable:!0}):e.name=c),z&&t&&i(t,"arity")&&e.length!==t.arity&&p(e,"length",{value:t.arity});try{t&&i(t,"constructor")&&t.constructor?o&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(a){}var n=f(e);return i(n,"source")||(n.source=g(V,"string"==typeof c?c:"")),e};Function.prototype.toString=C((function(){return r(this)&&d(this).source||l(this)}),"toString")},1736:function(e){var c=Math.ceil,t=Math.floor;e.exports=Math.trunc||function(e){var n=+e;return(n>0?t:c)(n)}},8659:function(e,c,t){var n=t(1992);e.exports=function(e,c){return void 0===e?arguments.length<2?"":c:n(e)}},368:function(e,c,t){var n=t(3528),a=t(784),r=t(4859),i=t(8424),o=t(8732),s=TypeError,l=Object.defineProperty,u=Object.getOwnPropertyDescriptor,f="enumerable",d="configurable",m="writable";c.f=n?r?function(e,c,t){if(i(e),c=o(c),i(t),"function"===typeof e&&"prototype"===c&&"value"in t&&m in t&&!t[m]){var n=u(e,c);n&&n[m]&&(e[c]=t.value,t={configurable:d in t?t[d]:n[d],enumerable:f in t?t[f]:n[f],writable:!1})}return l(e,c,t)}:l:function(e,c,t){if(i(e),c=o(c),i(t),a)try{return l(e,c,t)}catch(n){}if("get"in t||"set"in t)throw new s("Accessors not supported");return"value"in t&&(e[c]=t.value),e}},4560:function(e,c,t){var n=t(3528),a=t(892),r=t(2460),i=t(9200),o=t(9740),s=t(8732),l=t(6216),u=t(784),f=Object.getOwnPropertyDescriptor;c.f=n?f:function(e,c){if(e=o(e),c=s(c),u)try{return f(e,c)}catch(t){}if(l(e,c))return i(!a(r.f,e,c),e[c])}},692:function(e,c,t){var n=t(9232),a=t(4656),r=a.concat("length","prototype");c.f=Object.getOwnPropertyNames||function(e){return n(e,r)}},8167:function(e,c){c.f=Object.getOwnPropertySymbols},1304:function(e,c,t){var n=t(6216),a=t(9063),r=t(6804),i=t(8192),o=t(9120),s=i("IE_PROTO"),l=Object,u=l.prototype;e.exports=o?l.getPrototypeOf:function(e){var c=r(e);if(n(c,s))return c[s];var t=c.constructor;return a(t)&&c instanceof t?t.prototype:c instanceof l?u:null}},6056:function(e,c,t){var n=t(1447);e.exports=n({}.isPrototypeOf)},9232:function(e,c,t){var n=t(1447),a=t(6216),r=t(9740),i=t(2196).indexOf,o=t(6480),s=n([].push);e.exports=function(e,c){var t,n=r(e),l=0,u=[];for(t in n)!a(o,t)&&a(n,t)&&s(u,t);while(c.length>l)a(n,t=c[l++])&&(~i(u,t)||s(u,t));return u}},2460:function(e,c){var t={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,a=n&&!t.call({1:2},1);c.f=a?function(e){var c=n(this,e);return!!c&&c.enumerable}:t},5168:function(e,c,t){var n=t(6632),a=t(8424),r=t(9472);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,c=!1,t={};try{e=n(Object.prototype,"__proto__","set"),e(t,[]),c=t instanceof Array}catch(i){}return function(t,n){return a(t),r(n),c?e(t,n):t.__proto__=n,t}}():void 0)},7664:function(e,c,t){var n=t(892),a=t(9063),r=t(808),i=TypeError;e.exports=function(e,c){var t,o;if("string"===c&&a(t=e.toString)&&!r(o=n(t,e)))return o;if(a(t=e.valueOf)&&!r(o=n(t,e)))return o;if("string"!==c&&a(t=e.toString)&&!r(o=n(t,e)))return o;throw new i("Can't convert object to primitive value")}},9976:function(e,c,t){var n=t(4960),a=t(1447),r=t(692),i=t(8167),o=t(8424),s=a([].concat);e.exports=n("Reflect","ownKeys")||function(e){var c=r.f(o(e)),t=i.f;return t?s(c,t(e)):c}},2696:function(e,c,t){var n=t(952),a=TypeError;e.exports=function(e){if(n(e))throw new a("Can't call method on "+e);return e}},8192:function(e,c,t){var n=t(8196),a=t(320),r=n("keys");e.exports=function(e){return r[e]||(r[e]=a(e))}},9136:function(e,c,t){var n=t(5624),a=t(1544),r="__core-js_shared__",i=n[r]||a(r,{});e.exports=i},8196:function(e,c,t){var n=t(2804),a=t(9136);(e.exports=function(e,c){return a[e]||(a[e]=void 0!==c?c:{})})("versions",[]).push({version:"3.35.1",mode:n?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.35.1/LICENSE",source:"https://github.com/zloirock/core-js"})},8972:function(e,c,t){var n=t(3356),a=t(6040),r=t(5624),i=r.String;e.exports=!!Object.getOwnPropertySymbols&&!a((function(){var e=Symbol("symbol detection");return!i(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},4160:function(e,c,t){var n=t(3288),a=Math.max,r=Math.min;e.exports=function(e,c){var t=n(e);return t<0?a(t+c,0):r(t,c)}},2724:function(e,c,t){var n=t(8176),a=TypeError;e.exports=function(e){var c=n(e,"number");if("number"==typeof c)throw new a("Can't convert number to bigint");return BigInt(c)}},9740:function(e,c,t){var n=t(6212),a=t(2696);e.exports=function(e){return n(a(e))}},3288:function(e,c,t){var n=t(1736);e.exports=function(e){var c=+e;return c!==c||0===c?0:n(c)}},960:function(e,c,t){var n=t(3288),a=Math.min;e.exports=function(e){var c=n(e);return c>0?a(c,9007199254740991):0}},6804:function(e,c,t){var n=t(2696),a=Object;e.exports=function(e){return a(n(e))}},8176:function(e,c,t){var n=t(892),a=t(808),r=t(6232),i=t(364),o=t(7664),s=t(1840),l=TypeError,u=s("toPrimitive");e.exports=function(e,c){if(!a(e)||r(e))return e;var t,s=i(e,u);if(s){if(void 0===c&&(c="default"),t=n(s,e,c),!a(t)||r(t))return t;throw new l("Can't convert object to primitive value")}return void 0===c&&(c="number"),o(e,c)}},8732:function(e,c,t){var n=t(8176),a=t(6232);e.exports=function(e){var c=n(e,"string");return a(c)?c:c+""}},1712:function(e,c,t){var n=t(1840),a=n("toStringTag"),r={};r[a]="z",e.exports="[object z]"===String(r)},1992:function(e,c,t){var n=t(8040),a=String;e.exports=function(e){if("Symbol"===n(e))throw new TypeError("Cannot convert a Symbol value to a string");return a(e)}},4596:function(e){var c=String;e.exports=function(e){try{return c(e)}catch(t){return"Object"}}},320:function(e,c,t){var n=t(1447),a=0,r=Math.random(),i=n(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+i(++a+r,36)}},9448:function(e,c,t){var n=t(8972);e.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},4859:function(e,c,t){var n=t(3528),a=t(6040);e.exports=n&&a((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},3416:function(e){var c=TypeError;e.exports=function(e,t){if(e<t)throw new c("Not enough arguments");return e}},280:function(e,c,t){var n=t(5624),a=t(9063),r=n.WeakMap;e.exports=a(r)&&/native code/.test(String(r))},1840:function(e,c,t){var n=t(5624),a=t(8196),r=t(6216),i=t(320),o=t(8972),s=t(9448),l=n.Symbol,u=a("wks"),f=s?l["for"]||l:l&&l.withoutSetter||i;e.exports=function(e){return r(u,e)||(u[e]=o&&r(l,e)?l[e]:f("Symbol."+e)),u[e]}},3248:function(e,c,t){var n=t(3748),a=t(6804),r=t(9480),i=t(7934),o=t(3272),s=t(6040),l=s((function(){return 4294967297!==[].push.call({length:4294967296},1)})),u=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},f=l||!u();n({target:"Array",proto:!0,arity:1,forced:f},{push:function(e){var c=a(this),t=r(c),n=arguments.length;o(t+n);for(var s=0;s<n;s++)c[t]=arguments[s],t++;return i(c,t),t}})},2912:function(e,c,t){var n=t(9135),a=t(7736),r=a.aTypedArray,i=a.exportTypedArrayMethod,o=a.getTypedArrayConstructor;i("toReversed",(function(){return n(r(this),o(this))}))},9904:function(e,c,t){var n=t(7736),a=t(1447),r=t(1896),i=t(4244),o=n.aTypedArray,s=n.getTypedArrayConstructor,l=n.exportTypedArrayMethod,u=a(n.TypedArrayPrototype.sort);l("toSorted",(function(e){void 0!==e&&r(e);var c=o(this),t=i(s(c),c);return u(t,e)}))},6096:function(e,c,t){var n=t(1908),a=t(7736),r=t(2040),i=t(3288),o=t(2724),s=a.aTypedArray,l=a.getTypedArrayConstructor,u=a.exportTypedArrayMethod,f=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(e){return 8===e}}();u("with",{with:function(e,c){var t=s(this),a=i(e),u=r(t)?o(c):+c;return n(t,l(t),a,u)}}["with"],!f)},8208:function(e,c,t){var n=t(3748),a=t(5624),r=t(4960),i=t(9200),o=t(368).f,s=t(6216),l=t(5796),u=t(2744),f=t(8659),d=t(7776),m=t(6064),p=t(3528),h=t(2804),v="DOMException",g=r("Error"),z=r(v),V=function(){l(this,C);var e=arguments.length,c=f(e<1?void 0:arguments[0]),t=f(e<2?void 0:arguments[1],"Error"),n=new z(c,t),a=new g(c);return a.name=v,o(n,"stack",i(1,m(a.stack,1))),u(n,this,V),n},C=V.prototype=z.prototype,H="stack"in new g(v),M="stack"in new z(1,2),b=z&&p&&Object.getOwnPropertyDescriptor(a,v),y=!!b&&!(b.writable&&b.configurable),L=H&&!y&&!M;n({global:!0,constructor:!0,forced:h||L},{DOMException:L?V:z});var x=r(v),S=x.prototype;if(S.constructor!==x)for(var w in h||o(S,"constructor",i(1,x)),d)if(s(d,w)){var k=d[w],N=k.s;s(x,N)||o(x,N,i(6,k.c))}},2168:function(e,c,t){var n=t(3244),a=t(1447),r=t(1992),i=t(3416),o=URLSearchParams,s=o.prototype,l=a(s.append),u=a(s["delete"]),f=a(s.forEach),d=a([].push),m=new o("a=1&a=2&b=3");m["delete"]("a",1),m["delete"]("b",void 0),m+""!=="a=2"&&n(s,"delete",(function(e){var c=arguments.length,t=c<2?void 0:arguments[1];if(c&&void 0===t)return u(this,e);var n=[];f(this,(function(e,c){d(n,{key:c,value:e})})),i(c,1);var a,o=r(e),s=r(t),m=0,p=0,h=!1,v=n.length;while(m<v)a=n[m++],h||a.key===o?(h=!0,u(this,a.key)):p++;while(p<v)a=n[p++],a.key===o&&a.value===s||l(this,a.key,a.value)}),{enumerable:!0,unsafe:!0})},5104:function(e,c,t){var n=t(3244),a=t(1447),r=t(1992),i=t(3416),o=URLSearchParams,s=o.prototype,l=a(s.getAll),u=a(s.has),f=new o("a=1");!f.has("a",2)&&f.has("a",void 0)||n(s,"has",(function(e){var c=arguments.length,t=c<2?void 0:arguments[1];if(c&&void 0===t)return u(this,e);var n=l(this,e);i(c,1);var a=r(t),o=0;while(o<n.length)if(n[o++]===a)return!0;return!1}),{enumerable:!0,unsafe:!0})},8312:function(e,c,t){var n=t(3528),a=t(1447),r=t(1720),i=URLSearchParams.prototype,o=a(i.forEach);n&&!("size"in i)&&r(i,"size",{get:function(){var e=0;return o(this,(function(){e++})),e},configurable:!0,enumerable:!0})},9376:function(e,c,t){t.d(c,{Sg:function(){return he},U5:function(){return fe},q4:function(){return ue},WE:function(){return ge},mg:function(){return ve},Kk:function(){return ze}});t(3248);var n=t(4328),a=t(8300),r=t(8004);t(8208);const i=(e,c)=>c.some((c=>e instanceof c));let o,s;function l(){return o||(o=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return s||(s=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const f=new WeakMap,d=new WeakMap,m=new WeakMap,p=new WeakMap,h=new WeakMap;function v(e){const c=new Promise(((c,t)=>{const n=()=>{e.removeEventListener("success",a),e.removeEventListener("error",r)},a=()=>{c(M(e.result)),n()},r=()=>{t(e.error),n()};e.addEventListener("success",a),e.addEventListener("error",r)}));return c.then((c=>{c instanceof IDBCursor&&f.set(c,e)})).catch((()=>{})),h.set(c,e),c}function g(e){if(d.has(e))return;const c=new Promise(((c,t)=>{const n=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",r),e.removeEventListener("abort",r)},a=()=>{c(),n()},r=()=>{t(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",a),e.addEventListener("error",r),e.addEventListener("abort",r)}));d.set(e,c)}let z={get(e,c,t){if(e instanceof IDBTransaction){if("done"===c)return d.get(e);if("objectStoreNames"===c)return e.objectStoreNames||m.get(e);if("store"===c)return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return M(e[c])},set(e,c,t){return e[c]=t,!0},has(e,c){return e instanceof IDBTransaction&&("done"===c||"store"===c)||c in e}};function V(e){z=e(z)}function C(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(e)?function(...c){return e.apply(b(this),c),M(f.get(this))}:function(...c){return M(e.apply(b(this),c))}:function(c,...t){const n=e.call(b(this),c,...t);return m.set(n,c.sort?c.sort():[c]),M(n)}}function H(e){return"function"===typeof e?C(e):(e instanceof IDBTransaction&&g(e),i(e,l())?new Proxy(e,z):e)}function M(e){if(e instanceof IDBRequest)return v(e);if(p.has(e))return p.get(e);const c=H(e);return c!==e&&(p.set(e,c),h.set(c,e)),c}const b=e=>h.get(e);function y(e,c,{blocked:t,upgrade:n,blocking:a,terminated:r}={}){const i=indexedDB.open(e,c),o=M(i);return n&&i.addEventListener("upgradeneeded",(e=>{n(M(i.result),e.oldVersion,e.newVersion,M(i.transaction),e)})),t&&i.addEventListener("blocked",(e=>t(e.oldVersion,e.newVersion,e))),o.then((e=>{r&&e.addEventListener("close",(()=>r())),a&&e.addEventListener("versionchange",(e=>a(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),o}const L=["get","getKey","getAll","getAllKeys","count"],x=["put","add","delete","clear"],S=new Map;function w(e,c){if(!(e instanceof IDBDatabase)||c in e||"string"!==typeof c)return;if(S.get(c))return S.get(c);const t=c.replace(/FromIndex$/,""),n=c!==t,a=x.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!a&&!L.includes(t))return;const r=async function(e,...c){const r=this.transaction(e,a?"readwrite":"readonly");let i=r.store;return n&&(i=i.index(c.shift())),(await Promise.all([i[t](...c),a&&r.done]))[0]};return S.set(c,r),r}V((e=>({...e,get:(c,t,n)=>w(c,t)||e.get(c,t,n),has:(c,t)=>!!w(c,t)||e.has(c,t)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class k{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(N(e)){const c=e.getImmediate();return`${c.library}/${c.version}`}return null})).filter((e=>e)).join(" ")}}function N(e){const c=e.getComponent();return"VERSION"===(null===c||void 0===c?void 0:c.type)}const _="@firebase/app",A="0.9.27",E=new a.YJ("@firebase/app"),I="@firebase/app-compat",T="@firebase/analytics-compat",P="@firebase/analytics",O="@firebase/app-check-compat",R="@firebase/app-check",D="@firebase/auth",F="@firebase/auth-compat",B="@firebase/database",K="@firebase/database-compat",U="@firebase/functions",$="@firebase/functions-compat",j="@firebase/installations",q="@firebase/installations-compat",G="@firebase/messaging",W="@firebase/messaging-compat",Y="@firebase/performance",Z="@firebase/performance-compat",X="@firebase/remote-config",J="@firebase/remote-config-compat",Q="@firebase/storage",ee="@firebase/storage-compat",ce="@firebase/firestore",te="@firebase/firestore-compat",ne="firebase",ae="10.8.0",re="[DEFAULT]",ie={[_]:"fire-core",[I]:"fire-core-compat",[P]:"fire-analytics",[T]:"fire-analytics-compat",[R]:"fire-app-check",[O]:"fire-app-check-compat",[D]:"fire-auth",[F]:"fire-auth-compat",[B]:"fire-rtdb",[K]:"fire-rtdb-compat",[U]:"fire-fn",[$]:"fire-fn-compat",[j]:"fire-iid",[q]:"fire-iid-compat",[G]:"fire-fcm",[W]:"fire-fcm-compat",[Y]:"fire-perf",[Z]:"fire-perf-compat",[X]:"fire-rc",[J]:"fire-rc-compat",[Q]:"fire-gcs",[ee]:"fire-gcs-compat",[ce]:"fire-fst",[te]:"fire-fst-compat","fire-js":"fire-js",[ne]:"fire-js-all"},oe=new Map,se=new Map;function le(e,c){try{e.container.addComponent(c)}catch(t){E.debug(`Component ${c.name} failed to register with FirebaseApp ${e.name}`,t)}}function ue(e){const c=e.name;if(se.has(c))return E.debug(`There were multiple attempts to register component ${c}.`),!1;se.set(c,e);for(const t of oe.values())le(t,e);return!0}function fe(e,c){const t=e.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),e.container.getProvider(c)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const de={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},me=new r.UR("app","Firebase",de);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe{constructor(e,c,t){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},c),this._name=c.name,this._automaticDataCollectionEnabled=c.automaticDataCollectionEnabled,this._container=t,this.container.addComponent(new n.Yl("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw me.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he=ae;function ve(e,c={}){let t=e;if("object"!==typeof c){const e=c;c={name:e}}const a=Object.assign({name:re,automaticDataCollectionEnabled:!1},c),i=a.name;if("string"!==typeof i||!i)throw me.create("bad-app-name",{appName:String(i)});if(t||(t=(0,r.Yd)()),!t)throw me.create("no-options");const o=oe.get(i);if(o){if((0,r.IN)(t,o.options)&&(0,r.IN)(a,o.config))return o;throw me.create("duplicate-app",{appName:i})}const s=new n.op(i);for(const n of se.values())s.addComponent(n);const l=new pe(t,a,s);return oe.set(i,l),l}function ge(e=re){const c=oe.get(e);if(!c&&e===re&&(0,r.Yd)())return ve();if(!c)throw me.create("no-app",{appName:e});return c}function ze(e,c,t){var a;let r=null!==(a=ie[e])&&void 0!==a?a:e;t&&(r+=`-${t}`);const i=r.match(/\s|\//),o=c.match(/\s|\//);if(i||o){const e=[`Unable to register library "${r}" with version "${c}":`];return i&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&e.push("and"),o&&e.push(`version name "${c}" contains illegal characters (whitespace or "/")`),void E.warn(e.join(" "))}ue(new n.Yl(`${r}-version`,(()=>({library:r,version:c})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ve="firebase-heartbeat-database",Ce=1,He="firebase-heartbeat-store";let Me=null;function be(){return Me||(Me=y(Ve,Ce,{upgrade:(e,c)=>{switch(c){case 0:try{e.createObjectStore(He)}catch(t){console.warn(t)}}}}).catch((e=>{throw me.create("idb-open",{originalErrorMessage:e.message})}))),Me}async function ye(e){try{const c=await be(),t=c.transaction(He),n=await t.objectStore(He).get(xe(e));return await t.done,n}catch(c){if(c instanceof r.kx)E.warn(c.message);else{const e=me.create("idb-get",{originalErrorMessage:null===c||void 0===c?void 0:c.message});E.warn(e.message)}}}async function Le(e,c){try{const t=await be(),n=t.transaction(He,"readwrite"),a=n.objectStore(He);await a.put(c,xe(e)),await n.done}catch(t){if(t instanceof r.kx)E.warn(t.message);else{const e=me.create("idb-set",{originalErrorMessage:null===t||void 0===t?void 0:t.message});E.warn(e.message)}}}function xe(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se=1024,we=2592e6;class ke{constructor(e){this.container=e,this._heartbeatsCache=null;const c=this.container.getProvider("app").getImmediate();this._storage=new Ae(c),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,c;const t=this.container.getProvider("platform-logger").getImmediate(),n=t.getPlatformInfoString(),a=Ne();if((null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(c=this._heartbeatsCache)||void 0===c?void 0:c.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==a&&!this._heartbeatsCache.heartbeats.some((e=>e.date===a)))return this._heartbeatsCache.heartbeats.push({date:a,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const c=new Date(e.date).valueOf(),t=Date.now();return t-c<=we})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const c=Ne(),{heartbeatsToSend:t,unsentEntries:n}=_e(this._heartbeatsCache.heartbeats),a=(0,r.Wg)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=c,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}}function Ne(){const e=new Date;return e.toISOString().substring(0,10)}function _e(e,c=Se){const t=[];let n=e.slice();for(const a of e){const e=t.find((e=>e.agent===a.agent));if(e){if(e.dates.push(a.date),Ee(t)>c){e.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),Ee(t)>c){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class Ae{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,r.yy)()&&(0,r.A3)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await ye(this.app);return(null===e||void 0===e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var c;const t=await this._canUseIndexedDBPromise;if(t){const t=await this.read();return Le(this.app,{lastSentHeartbeatDate:null!==(c=e.lastSentHeartbeatDate)&&void 0!==c?c:t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var c;const t=await this._canUseIndexedDBPromise;if(t){const t=await this.read();return Le(this.app,{lastSentHeartbeatDate:null!==(c=e.lastSentHeartbeatDate)&&void 0!==c?c:t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}}}function Ee(e){return(0,r.Wg)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(e){ue(new n.Yl("platform-logger",(e=>new k(e)),"PRIVATE")),ue(new n.Yl("heartbeat",(e=>new ke(e)),"PRIVATE")),ze(_,A,e),ze(_,A,"esm2017"),ze("fire-js","")}Ie("")},4328:function(e,c,t){t.d(c,{Yl:function(){return a},op:function(){return l}});var n=t(8004);class a{constructor(e,c,t){this.name=e,this.instanceFactory=c,this.type=t,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i{constructor(e,c){this.name=e,this.container=c,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const c=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(c)){const e=new n.o9;if(this.instancesDeferred.set(c,e),this.isInitialized(c)||this.shouldAutoInitialize())try{const t=this.getOrInitializeService({instanceIdentifier:c});t&&e.resolve(t)}catch(t){}}return this.instancesDeferred.get(c).promise}getImmediate(e){var c;const t=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),n=null!==(c=null===e||void 0===e?void 0:e.optional)&&void 0!==c&&c;if(!this.isInitialized(t)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:t})}catch(a){if(n)return null;throw a}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(s(e))try{this.getOrInitializeService({instanceIdentifier:r})}catch(c){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(c){}}}}clearInstance(e=r){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=r){return this.instances.has(e)}getOptions(e=r){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:c={}}=e,t=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(t))throw Error(`${this.name}(${t}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:t,options:c});for(const[a,r]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(a);t===e&&r.resolve(n)}return n}onInit(e,c){var t;const n=this.normalizeInstanceIdentifier(c),a=null!==(t=this.onInitCallbacks.get(n))&&void 0!==t?t:new Set;a.add(e),this.onInitCallbacks.set(n,a);const r=this.instances.get(n);return r&&e(r,n),()=>{a.delete(e)}}invokeOnInitCallbacks(e,c){const t=this.onInitCallbacks.get(c);if(t)for(const a of t)try{a(e,c)}catch(n){}}getOrInitializeService({instanceIdentifier:e,options:c={}}){let t=this.instances.get(e);if(!t&&this.component&&(t=this.component.instanceFactory(this.container,{instanceIdentifier:o(e),options:c}),this.instances.set(e,t),this.instancesOptions.set(e,c),this.invokeOnInitCallbacks(t,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,t)}catch(n){}return t||null}normalizeInstanceIdentifier(e=r){return this.component?this.component.multipleInstances?e:r:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function o(e){return e===r?void 0:e}function s(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const c=this.getProvider(e.name);if(c.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);c.setComponent(e)}addOrOverwriteComponent(e){const c=this.getProvider(e.name);c.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const c=new i(e,this);return this.providers.set(e,c),c}getProviders(){return Array.from(this.providers.values())}}},8300:function(e,c,t){t.d(c,{Ge:function(){return a},YJ:function(){return l}});t(3248);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,n.Kk)(a,r,"app")},5632:function(e,c,t){t.d(c,{wR:function(){return Mc},UH:function(){return Tc},Iv:function(){return Wn},um:function(){return Ec},kJ:function(){return Pc},gZ:function(){return Ot},Az:function(){return Dc}});t(3248),t(2168),t(5104),t(8312);var n=t(8004),a=t(9376),r=t(8300);function i(e,c){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&c.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)c.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var o=t(4328);function s(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=s,u=new n.UR("auth","Firebase",s()),f=new r.YJ("@firebase/auth");function d(e,...c){f.logLevel<=r.Ge.WARN&&f.warn(`Auth (${a.Sg}): ${e}`,...c)}function m(e,...c){f.logLevel<=r.Ge.ERROR&&f.error(`Auth (${a.Sg}): ${e}`,...c)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e,...c){throw z(e,...c)}function h(e,...c){return z(e,...c)}function v(e,c,t){const a=Object.assign(Object.assign({},l()),{[c]:t}),r=new n.UR("auth","Firebase",a);return r.create(c,{appName:e.name})}function g(e,c,t){const n=t;if(!(c instanceof n))throw n.name!==c.constructor.name&&p(e,"argument-error"),v(e,"argument-error",`Type of ${c.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function z(e,...c){if("string"!==typeof e){const t=c[0],n=[...c.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(t,...n)}return u.create(e,...c)}function V(e,c,...t){if(!e)throw z(c,...t)}function C(e){const c="INTERNAL ASSERTION FAILED: "+e;throw m(c),new Error(c)}function H(e,c){e||C(c)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function b(){return"http:"===y()||"https:"===y()}function y(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(b()||(0,n.Cc)()||"connection"in navigator))||navigator.onLine}function x(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e,c){this.shortDelay=e,this.longDelay=c,H(c>e,"Short delay should be less than long delay!"),this.isMobile=(0,n.AV)()||(0,n.AL)()}get(){return L()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e,c){H(e.emulator,"Emulator should always be set here");const{url:t}=e.emulator;return c?`${t}${c.startsWith("/")?c.slice(1):c}`:t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{static initialize(e,c,t){this.fetchImpl=e,c&&(this.headersImpl=c),t&&(this.responseImpl=t)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:"undefined"!==typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!==typeof fetch?fetch:void C("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:"undefined"!==typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!==typeof Headers?Headers:void C("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:"undefined"!==typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!==typeof Response?Response:void C("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["INVALID_LOGIN_CREDENTIALS"]:"invalid-credential",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]:"password-does-not-meet-requirements",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},_=new S(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e,c){return e.tenantId&&!c.tenantId?Object.assign(Object.assign({},c),{tenantId:e.tenantId}):c}async function E(e,c,t,a,r={}){return I(e,r,(async()=>{let r={},i={};a&&("GET"===c?i=a:r={body:JSON.stringify(a)});const o=(0,n.ik)(Object.assign({key:e.config.apiKey},i)).slice(1),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/json",e.languageCode&&(s["X-Firebase-Locale"]=e.languageCode),k.fetch()(P(e,e.config.apiHost,t,o),Object.assign({method:c,headers:s,referrerPolicy:"no-referrer"},r))}))}async function I(e,c,t){e._canInitEmulator=!1;const a=Object.assign(Object.assign({},N),c);try{const c=new R(e),n=await Promise.race([t(),c.promise]);c.clearNetworkTimeout();const r=await n.json();if("needConfirmation"in r)throw D(e,"account-exists-with-different-credential",r);if(n.ok&&!("errorMessage"in r))return r;{const c=n.ok?r.errorMessage:r.error.message,[t,i]=c.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===t)throw D(e,"credential-already-in-use",r);if("EMAIL_EXISTS"===t)throw D(e,"email-already-in-use",r);if("USER_DISABLED"===t)throw D(e,"user-disabled",r);const o=a[t]||t.toLowerCase().replace(/[_\s]+/g,"-");if(i)throw v(e,o,i);p(e,o)}}catch(r){if(r instanceof n.kx)throw r;p(e,"network-request-failed",{message:String(r)})}}async function T(e,c,t,n,a={}){const r=await E(e,c,t,n,a);return"mfaPendingCredential"in r&&p(e,"multi-factor-auth-required",{_serverResponse:r}),r}function P(e,c,t,n){const a=`${c}${t}?${n}`;return e.config.emulator?w(e.config,a):`${e.config.apiScheme}://${a}`}function O(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class R{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,c)=>{this.timer=setTimeout((()=>c(h(this.auth,"network-request-failed"))),_.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function D(e,c,t){const n={appName:e.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const a=h(e,c,n);return a.customData._tokenResponse=t,a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e){return void 0!==e&&void 0!==e.enterprise}class B{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const c of this.recaptchaEnforcementState)if(c.provider&&c.provider===e)return O(c.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e,c){return E(e,"GET","/v2/recaptchaConfig",A(e,c))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U(e,c){return E(e,"POST","/v1/accounts:delete",c)}async function $(e,c){return E(e,"POST","/v1/accounts:lookup",c)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e){if(e)try{const c=new Date(Number(e));if(!isNaN(c.getTime()))return c.toUTCString()}catch(c){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(e,c=!1){const t=(0,n.Yj)(e),a=await t.getIdToken(c),r=W(a);V(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i="object"===typeof r.firebase?r.firebase:void 0,o=null===i||void 0===i?void 0:i["sign_in_provider"];return{claims:r,token:a,authTime:j(G(r.auth_time)),issuedAtTime:j(G(r.iat)),expirationTime:j(G(r.exp)),signInProvider:o||null,signInSecondFactor:(null===i||void 0===i?void 0:i["sign_in_second_factor"])||null}}function G(e){return 1e3*Number(e)}function W(e){const[c,t,a]=e.split(".");if(void 0===c||void 0===t||void 0===a)return m("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,n.WW)(t);return e?JSON.parse(e):(m("Failed to decode base64 JWT payload"),null)}catch(r){return m("Caught error parsing JWT payload as JSON",null===r||void 0===r?void 0:r.toString()),null}}function Y(e){const c=W(e);return V(c,"internal-error"),V("undefined"!==typeof c.exp,"internal-error"),V("undefined"!==typeof c.iat,"internal-error"),Number(c.exp)-Number(c.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(e,c,t=!1){if(t)return c;try{return await c}catch(a){throw a instanceof n.kx&&X(a)&&e.auth.currentUser===e&&await e.auth.signOut(),a}}function X({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var c;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(c=this.user.stsTokenManager.expirationTime)&&void 0!==c?c:0,t=e-Date.now()-3e5;return Math.max(0,t)}}schedule(e=!1){if(!this.isRunning)return;const c=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),c)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,c){this.createdAt=e,this.lastLoginAt=c,this._initializeTime()}_initializeTime(){this.lastSignInTime=j(this.lastLoginAt),this.creationTime=j(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ee(e){var c;const t=e.auth,n=await e.getIdToken(),a=await Z(e,$(t,{idToken:n}));V(null===a||void 0===a?void 0:a.users.length,t,"internal-error");const r=a.users[0];e._notifyReloadListener(r);const i=(null===(c=r.providerUserInfo)||void 0===c?void 0:c.length)?ne(r.providerUserInfo):[],o=te(e.providerData,i),s=e.isAnonymous,l=!(e.email&&r.passwordHash)&&!(null===o||void 0===o?void 0:o.length),u=!!s&&l,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new Q(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(e,f)}async function ce(e){const c=(0,n.Yj)(e);await ee(c),await c.auth._persistUserIfCurrent(c),c.auth._notifyListenersIfCurrent(c)}function te(e,c){const t=e.filter((e=>!c.some((c=>c.providerId===e.providerId))));return[...t,...c]}function ne(e){return e.map((e=>{var{providerId:c}=e,t=i(e,["providerId"]);return{providerId:c,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ae(e,c){const t=await I(e,{},(async()=>{const t=(0,n.ik)({grant_type:"refresh_token",refresh_token:c}).slice(1),{tokenApiHost:a,apiKey:r}=e.config,i=P(e,a,"/v1/token",`key=${r}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",k.fetch()(i,{method:"POST",headers:o,body:t})}));return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function re(e,c){return E(e,"POST","/v2/accounts:revokeToken",A(e,c))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V("undefined"!==typeof e.idToken,"internal-error"),V("undefined"!==typeof e.refreshToken,"internal-error");const c="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):Y(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,c)}async getToken(e,c=!1){return V(!this.accessToken||this.refreshToken,e,"user-token-expired"),c||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,c){const{accessToken:t,refreshToken:n,expiresIn:a}=await ae(e,c);this.updateTokensAndExpiration(t,n,Number(a))}updateTokensAndExpiration(e,c,t){this.refreshToken=c||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*t}static fromJSON(e,c){const{refreshToken:t,accessToken:n,expirationTime:a}=c,r=new ie;return t&&(V("string"===typeof t,"internal-error",{appName:e}),r.refreshToken=t),n&&(V("string"===typeof n,"internal-error",{appName:e}),r.accessToken=n),a&&(V("number"===typeof a,"internal-error",{appName:e}),r.expirationTime=a),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ie,this.toJSON())}_performRefresh(){return C("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e,c){V("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:c})}class se{constructor(e){var{uid:c,auth:t,stsTokenManager:n}=e,a=i(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new J(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=c,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Q(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const c=await Z(this,this.stsTokenManager.getToken(this.auth,e));return V(c,this.auth,"internal-error"),this.accessToken!==c&&(this.accessToken=c,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),c}getIdTokenResult(e){return q(this,e)}reload(){return ce(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const c=new se(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return c.metadata._copy(this.metadata),c}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,c=!1){let t=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),t=!0),c&&await ee(this),await this.auth._persistUserIfCurrent(this),t&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Z(this,U(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,c){var t,n,a,r,i,o,s,l;const u=null!==(t=c.displayName)&&void 0!==t?t:void 0,f=null!==(n=c.email)&&void 0!==n?n:void 0,d=null!==(a=c.phoneNumber)&&void 0!==a?a:void 0,m=null!==(r=c.photoURL)&&void 0!==r?r:void 0,p=null!==(i=c.tenantId)&&void 0!==i?i:void 0,h=null!==(o=c._redirectEventId)&&void 0!==o?o:void 0,v=null!==(s=c.createdAt)&&void 0!==s?s:void 0,g=null!==(l=c.lastLoginAt)&&void 0!==l?l:void 0,{uid:z,emailVerified:C,isAnonymous:H,providerData:M,stsTokenManager:b}=c;V(z&&b,e,"internal-error");const y=ie.fromJSON(this.name,b);V("string"===typeof z,e,"internal-error"),oe(u,e.name),oe(f,e.name),V("boolean"===typeof C,e,"internal-error"),V("boolean"===typeof H,e,"internal-error"),oe(d,e.name),oe(m,e.name),oe(p,e.name),oe(h,e.name),oe(v,e.name),oe(g,e.name);const L=new se({uid:z,auth:e,email:f,emailVerified:C,displayName:u,isAnonymous:H,photoURL:m,phoneNumber:d,tenantId:p,stsTokenManager:y,createdAt:v,lastLoginAt:g});return M&&Array.isArray(M)&&(L.providerData=M.map((e=>Object.assign({},e)))),h&&(L._redirectEventId=h),L}static async _fromIdTokenResponse(e,c,t=!1){const n=new ie;n.updateFromServerResponse(c);const a=new se({uid:c.localId,auth:e,stsTokenManager:n,isAnonymous:t});return await ee(a),a}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le=new Map;function ue(e){H(e instanceof Function,"Expected a class definition");let c=le.get(e);return c?(H(c instanceof e,"Instance stored in cache mismatched with class"),c):(c=new e,le.set(e,c),c)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,c){this.storage[e]=c}async _get(e){const c=this.storage[e];return void 0===c?null:c}async _remove(e){delete this.storage[e]}_addListener(e,c){}_removeListener(e,c){}}fe.type="NONE";const de=fe;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(e,c,t){return`firebase:${e}:${c}:${t}`}class pe{constructor(e,c,t){this.persistence=e,this.auth=c,this.userKey=t;const{config:n,name:a}=this.auth;this.fullUserKey=me(this.userKey,n.apiKey,a),this.fullPersistenceKey=me("persistence",n.apiKey,a),this.boundEventHandler=c._onStorageEvent.bind(c),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?se._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const c=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,c?this.setCurrentUser(c):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,c,t="authUser"){if(!c.length)return new pe(ue(de),e,t);const n=(await Promise.all(c.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let a=n[0]||ue(de);const r=me(t,e.config.apiKey,e.name);let i=null;for(const l of c)try{const c=await l._get(r);if(c){const t=se._fromJSON(e,c);l!==a&&(i=t),a=l;break}}catch(s){}const o=n.filter((e=>e._shouldAllowMigration));return a._shouldAllowMigration&&o.length?(a=o[0],i&&await a._set(r,i.toJSON()),await Promise.all(c.map((async e=>{if(e!==a)try{await e._remove(r)}catch(s){}}))),new pe(a,e,t)):new pe(a,e,t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(e){const c=e.toLowerCase();if(c.includes("opera/")||c.includes("opr/")||c.includes("opios/"))return"Opera";if(Ve(c))return"IEMobile";if(c.includes("msie")||c.includes("trident/"))return"IE";if(c.includes("edge/"))return"Edge";if(ve(c))return"Firefox";if(c.includes("silk/"))return"Silk";if(He(c))return"Blackberry";if(Me(c))return"Webos";if(ge(c))return"Safari";if((c.includes("chrome/")||ze(c))&&!c.includes("edge/"))return"Chrome";if(Ce(c))return"Android";{const c=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,t=e.match(c);if(2===(null===t||void 0===t?void 0:t.length))return t[1]}return"Other"}function ve(e=(0,n.Su)()){return/firefox\//i.test(e)}function ge(e=(0,n.Su)()){const c=e.toLowerCase();return c.includes("safari/")&&!c.includes("chrome/")&&!c.includes("crios/")&&!c.includes("android")}function ze(e=(0,n.Su)()){return/crios\//i.test(e)}function Ve(e=(0,n.Su)()){return/iemobile/i.test(e)}function Ce(e=(0,n.Su)()){return/android/i.test(e)}function He(e=(0,n.Su)()){return/blackberry/i.test(e)}function Me(e=(0,n.Su)()){return/webos/i.test(e)}function be(e=(0,n.Su)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ye(e=(0,n.Su)()){var c;return be(e)&&!!(null===(c=window.navigator)||void 0===c?void 0:c.standalone)}function Le(){return(0,n.Uv)()&&10===document.documentMode}function xe(e=(0,n.Su)()){return be(e)||Ce(e)||Me(e)||He(e)||/windows phone/i.test(e)||Ve(e)}function Se(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(e,c=[]){let t;switch(e){case"Browser":t=he((0,n.Su)());break;case"Worker":t=`${he((0,n.Su)())}-${e}`;break;default:t=e}const r=c.length?c.join(","):"FirebaseCore-web";return`${t}/JsCore/${a.Sg}/${r}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,c){const t=c=>new Promise(((t,n)=>{try{const n=e(c);t(n)}catch(a){n(a)}}));t.onAbort=c,this.queue.push(t);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const c=[];try{for(const t of this.queue)await t(e),t.onAbort&&c.push(t.onAbort)}catch(t){c.reverse();for(const e of c)try{e()}catch(n){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===t||void 0===t?void 0:t.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ne(e,c={}){return E(e,"GET","/v2/passwordPolicy",A(e,c))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e=6;class Ae{constructor(e){var c,t,n,a;const r=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(c=r.minPasswordLength)&&void 0!==c?c:_e,r.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=r.maxPasswordLength),void 0!==r.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=r.containsLowercaseCharacter),void 0!==r.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=r.containsUppercaseCharacter),void 0!==r.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=r.containsNumericCharacter),void 0!==r.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=r.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(n=null===(t=e.allowedNonAlphanumericCharacters)||void 0===t?void 0:t.join(""))&&void 0!==n?n:"",this.forceUpgradeOnSignin=null!==(a=e.forceUpgradeOnSignin)&&void 0!==a&&a,this.schemaVersion=e.schemaVersion}validatePassword(e){var c,t,n,a,r,i;const o={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,o),this.validatePasswordCharacterOptions(e,o),o.isValid&&(o.isValid=null===(c=o.meetsMinPasswordLength)||void 0===c||c),o.isValid&&(o.isValid=null===(t=o.meetsMaxPasswordLength)||void 0===t||t),o.isValid&&(o.isValid=null===(n=o.containsLowercaseLetter)||void 0===n||n),o.isValid&&(o.isValid=null===(a=o.containsUppercaseLetter)||void 0===a||a),o.isValid&&(o.isValid=null===(r=o.containsNumericCharacter)||void 0===r||r),o.isValid&&(o.isValid=null===(i=o.containsNonAlphanumericCharacter)||void 0===i||i),o}validatePasswordLengthOptions(e,c){const t=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;t&&(c.meetsMinPasswordLength=e.length>=t),n&&(c.meetsMaxPasswordLength=e.length<=n)}validatePasswordCharacterOptions(e,c){let t;this.updatePasswordCharacterOptionsStatuses(c,!1,!1,!1,!1);for(let n=0;n<e.length;n++)t=e.charAt(n),this.updatePasswordCharacterOptionsStatuses(c,t>="a"&&t<="z",t>="A"&&t<="Z",t>="0"&&t<="9",this.allowedNonAlphanumericCharacters.includes(t))}updatePasswordCharacterOptionsStatuses(e,c,t,n,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=c)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=t)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,c,t,n){this.app=e,this.heartbeatServiceProvider=c,this.appCheckServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Te(this),this.idTokenSubscription=new Te(this),this.beforeStateQueue=new ke(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,c){return c&&(this._popupRedirectResolver=ue(c)),this._initializationPromise=this.queue((async()=>{var t,n;if(!this._deleted&&(this.persistenceManager=await pe.create(this,e),!this._deleted)){if(null===(t=this._popupRedirectResolver)||void 0===t?void 0:t._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(a){}await this.initializeCurrentUser(c),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var c;const t=await this.assertedPersistence.getCurrentUser();let n=t,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const t=null===(c=this.redirectUser)||void 0===c?void 0:c._redirectEventId,r=null===n||void 0===n?void 0:n._redirectEventId,i=await this.tryRedirectSignIn(e);t&&t!==r||!(null===i||void 0===i?void 0:i.user)||(n=i.user,a=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(n)}catch(r){n=t,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(r)))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let c=null;try{c=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(t){await this._setRedirectUser(null)}return c}async reloadAndSetCurrentUserOrClear(e){try{await ee(e)}catch(c){if("auth/network-request-failed"!==(null===c||void 0===c?void 0:c.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=x()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const c=e?(0,n.Yj)(e):null;return c&&V(c.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(c&&c._clone(this))}async _updateCurrentUser(e,c=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),c||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(ue(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const c=this._getPasswordPolicyInternal();return c.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):c.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ne(this),c=new Ae(e);null===this.tenantId?this._projectPasswordPolicy=c:this._tenantPasswordPolicies[this.tenantId]=c}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new n.UR("auth","Firebase",e())}onAuthStateChanged(e,c,t){return this.registerStateListener(this.authStateSubscription,e,c,t)}beforeAuthStateChanged(e,c){return this.beforeStateQueue.pushCallback(e,c)}onIdTokenChanged(e,c,t){return this.registerStateListener(this.idTokenSubscription,e,c,t)}authStateReady(){return new Promise(((e,c)=>{if(this.currentUser)e();else{const t=this.onAuthStateChanged((()=>{t(),e()}),c)}}))}async revokeAccessToken(e){if(this.currentUser){const c=await this.currentUser.getIdToken(),t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:c};null!=this.tenantId&&(t.tenantId=this.tenantId),await re(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,c){const t=await this.getOrInitRedirectPersistenceManager(c);return null===e?t.removeCurrentUser():t.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const c=e&&ue(e)||this._popupRedirectResolver;V(c,this,"argument-error"),this.redirectPersistenceManager=await pe.create(this,[ue(c._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var c,t;return this._isInitialized&&await this.queue((async()=>{})),(null===(c=this._currentUser)||void 0===c?void 0:c._redirectEventId)===e?this._currentUser:(null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,c;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=null!==(c=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==c?c:null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,c,t,n){if(this._deleted)return()=>{};const a="function"===typeof c?c:c.next.bind(c);let r=!1;const i=this._isInitialized?Promise.resolve():this._initializationPromise;if(V(i,this,"internal-error"),i.then((()=>{r||a(this.currentUser)})),"function"===typeof c){const a=e.addObserver(c,t,n);return()=>{r=!0,a()}}{const t=e.addObserver(c);return()=>{r=!0,t()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=we(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const c={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(c["X-Firebase-gmpid"]=this.app.options.appId);const t=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());t&&(c["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(c["X-Firebase-AppCheck"]=n),c}async _getAppCheckToken(){var e;const c=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===c||void 0===c?void 0:c.error)&&d(`Error while retrieving App Check token: ${c.error}`),null===c||void 0===c?void 0:c.token}}function Ie(e){return(0,n.Yj)(e)}class Te{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,n.my)((e=>this.observer=e))}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pe={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Oe(e){Pe=e}function Re(e){return Pe.loadJS(e)}function De(){return Pe.recaptchaEnterpriseScript}function Fe(){return Pe.gapiScript}function Be(e){return`__${e}${Math.floor(1e6*Math.random())}`}const Ke="recaptcha-enterprise",Ue="NO_RECAPTCHA";class $e{constructor(e){this.type=Ke,this.auth=Ie(e)}async verify(e="verify",c=!1){async function t(e){if(!c){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(c,t)=>{K(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((n=>{if(void 0!==n.recaptchaKey){const t=new B(n);return null==e.tenantId?e._agentRecaptchaConfig=t:e._tenantRecaptchaConfigs[e.tenantId]=t,c(t.siteKey)}t(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{t(e)}))}))}function n(c,t,n){const a=window.grecaptcha;F(a)?a.enterprise.ready((()=>{a.enterprise.execute(c,{action:e}).then((e=>{t(e)})).catch((()=>{t(Ue)}))})):n(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,a)=>{t(this.auth).then((t=>{if(!c&&F(window.grecaptcha))n(t,e,a);else{if("undefined"===typeof window)return void a(new Error("RecaptchaVerifier is only supported in browser"));let c=De();0!==c.length&&(c+=t),Re(c).then((()=>{n(t,e,a)})).catch((e=>{a(e)}))}})).catch((e=>{a(e)}))}))}}async function je(e,c,t,n=!1){const a=new $e(e);let r;try{r=await a.verify(t)}catch(o){r=await a.verify(t,!0)}const i=Object.assign({},c);return n?Object.assign(i,{captchaResp:r}):Object.assign(i,{captchaResponse:r}),Object.assign(i,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(i,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),i}async function qe(e,c,t,n){var a;if(null===(a=e._getRecaptchaConfig())||void 0===a?void 0:a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await je(e,c,t,"getOobCode"===t);return n(e,a)}return n(e,c).catch((async a=>{if("auth/missing-recaptcha-token"===a.code){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await je(e,c,t,"getOobCode"===t);return n(e,a)}return Promise.reject(a)}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ge(e,c){const t=(0,a.U5)(e,"auth");if(t.isInitialized()){const e=t.getImmediate(),a=t.getOptions();if((0,n.IN)(a,null!==c&&void 0!==c?c:{}))return e;p(e,"already-initialized")}const r=t.initialize({options:c});return r}function We(e,c){const t=(null===c||void 0===c?void 0:c.persistence)||[],n=(Array.isArray(t)?t:[t]).map(ue);(null===c||void 0===c?void 0:c.errorMap)&&e._updateErrorMap(c.errorMap),e._initializeWithPersistence(n,null===c||void 0===c?void 0:c.popupRedirectResolver)}function Ye(e,c,t){const n=Ie(e);V(n._canInitEmulator,n,"emulator-config-failed"),V(/^https?:\/\//.test(c),n,"invalid-emulator-scheme");const a=!!(null===t||void 0===t?void 0:t.disableWarnings),r=Ze(c),{host:i,port:o}=Xe(c),s=null===o?"":`:${o}`;n.config.emulator={url:`${r}//${i}${s}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:i,port:o,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:a})}),a||Qe()}function Ze(e){const c=e.indexOf(":");return c<0?"":e.substr(0,c+1)}function Xe(e){const c=Ze(e),t=/(\/\/)?([^?#/]+)/.exec(e.substr(c.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(n);if(a){const e=a[1];return{host:e,port:Je(n.substr(e.length+1))}}{const[e,c]=n.split(":");return{host:e,port:Je(c)}}}function Je(e){if(!e)return null;const c=Number(e);return isNaN(c)?null:c}function Qe(){function e(){const e=document.createElement("p"),c=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",c.position="fixed",c.width="100%",c.backgroundColor="#ffffff",c.border=".1em solid #000000",c.color="#b50000",c.bottom="0px",c.left="0px",c.margin="0px",c.zIndex="10000",c.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,c){this.providerId=e,this.signInMethod=c}toJSON(){return C("not implemented")}_getIdTokenResponse(e){return C("not implemented")}_linkToIdToken(e,c){return C("not implemented")}_getReauthenticationResolver(e){return C("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cc(e,c){return E(e,"POST","/v1/accounts:signUp",c)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function tc(e,c){return T(e,"POST","/v1/accounts:signInWithPassword",A(e,c))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function nc(e,c){return T(e,"POST","/v1/accounts:signInWithEmailLink",A(e,c))}async function ac(e,c){return T(e,"POST","/v1/accounts:signInWithEmailLink",A(e,c))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc extends ec{constructor(e,c,t,n=null){super("password",t),this._email=e,this._password=c,this._tenantId=n}static _fromEmailAndPassword(e,c){return new rc(e,c,"password")}static _fromEmailAndCode(e,c,t=null){return new rc(e,c,"emailLink",t)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const c="string"===typeof e?JSON.parse(e):e;if((null===c||void 0===c?void 0:c.email)&&(null===c||void 0===c?void 0:c.password)){if("password"===c.signInMethod)return this._fromEmailAndPassword(c.email,c.password);if("emailLink"===c.signInMethod)return this._fromEmailAndCode(c.email,c.password,c.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const c={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qe(e,c,"signInWithPassword",tc);case"emailLink":return nc(e,{email:this._email,oobCode:this._password});default:p(e,"internal-error")}}async _linkToIdToken(e,c){switch(this.signInMethod){case"password":const t={idToken:c,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qe(e,t,"signUpPassword",cc);case"emailLink":return ac(e,{idToken:c,email:this._email,oobCode:this._password});default:p(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ic(e,c){return T(e,"POST","/v1/accounts:signInWithIdp",A(e,c))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc="http://localhost";class sc extends ec{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const c=new sc(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(c.idToken=e.idToken),e.accessToken&&(c.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(c.nonce=e.nonce),e.pendingToken&&(c.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(c.accessToken=e.oauthToken,c.secret=e.oauthTokenSecret):p("argument-error"),c}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const c="string"===typeof e?JSON.parse(e):e,{providerId:t,signInMethod:n}=c,a=i(c,["providerId","signInMethod"]);if(!t||!n)return null;const r=new sc(t,n);return r.idToken=a.idToken||void 0,r.accessToken=a.accessToken||void 0,r.secret=a.secret,r.nonce=a.nonce,r.pendingToken=a.pendingToken||null,r}_getIdTokenResponse(e){const c=this.buildRequest();return ic(e,c)}_linkToIdToken(e,c){const t=this.buildRequest();return t.idToken=c,ic(e,t)}_getReauthenticationResolver(e){const c=this.buildRequest();return c.autoCreate=!1,ic(e,c)}buildRequest(){const e={requestUri:oc,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const c={};this.idToken&&(c["id_token"]=this.idToken),this.accessToken&&(c["access_token"]=this.accessToken),this.secret&&(c["oauth_token_secret"]=this.secret),c["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(c["nonce"]=this.nonce),e.postBody=(0,n.ik)(c)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lc(e,c){return E(e,"POST","/v1/accounts:sendVerificationCode",A(e,c))}async function uc(e,c){return T(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,c))}async function fc(e,c){const t=await T(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,c));if(t.temporaryProof)throw D(e,"account-exists-with-different-credential",t);return t}const dc={["USER_NOT_FOUND"]:"user-not-found"};async function mc(e,c){const t=Object.assign(Object.assign({},c),{operation:"REAUTH"});return T(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,t),dc)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc extends ec{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,c){return new pc({verificationId:e,verificationCode:c})}static _fromTokenResponse(e,c){return new pc({phoneNumber:e,temporaryProof:c})}_getIdTokenResponse(e){return uc(e,this._makeVerificationRequest())}_linkToIdToken(e,c){return fc(e,Object.assign({idToken:c},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return mc(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:c,verificationId:t,verificationCode:n}=this.params;return e&&c?{temporaryProof:e,phoneNumber:c}:{sessionInfo:t,code:n}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:c,verificationCode:t,phoneNumber:n,temporaryProof:a}=e;return t||c||n||a?new pc({verificationId:c,verificationCode:t,phoneNumber:n,temporaryProof:a}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vc(e){const c=(0,n.aw)((0,n.kF)(e))["link"],t=c?(0,n.aw)((0,n.kF)(c))["deep_link_id"]:null,a=(0,n.aw)((0,n.kF)(e))["deep_link_id"],r=a?(0,n.aw)((0,n.kF)(a))["link"]:null;return r||a||t||c||e}class gc{constructor(e){var c,t,a,r,i,o;const s=(0,n.aw)((0,n.kF)(e)),l=null!==(c=s["apiKey"])&&void 0!==c?c:null,u=null!==(t=s["oobCode"])&&void 0!==t?t:null,f=hc(null!==(a=s["mode"])&&void 0!==a?a:null);V(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=null!==(r=s["continueUrl"])&&void 0!==r?r:null,this.languageCode=null!==(i=s["languageCode"])&&void 0!==i?i:null,this.tenantId=null!==(o=s["tenantId"])&&void 0!==o?o:null}static parseLink(e){const c=vc(e);try{return new gc(c)}catch(t){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zc{constructor(){this.providerId=zc.PROVIDER_ID}static credential(e,c){return rc._fromEmailAndPassword(e,c)}static credentialWithLink(e,c){const t=gc.parseLink(c);return V(t,"argument-error"),rc._fromEmailAndCode(e,t.code,t.tenantId)}}zc.PROVIDER_ID="password",zc.EMAIL_PASSWORD_SIGN_IN_METHOD="password",zc.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc extends Vc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hc extends Cc{constructor(){super("facebook.com")}static credential(e){return sc._fromParams({providerId:Hc.PROVIDER_ID,signInMethod:Hc.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hc.credentialFromTaggedObject(e)}static credentialFromError(e){return Hc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Hc.credential(e.oauthAccessToken)}catch(c){return null}}}Hc.FACEBOOK_SIGN_IN_METHOD="facebook.com",Hc.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mc extends Cc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,c){return sc._fromParams({providerId:Mc.PROVIDER_ID,signInMethod:Mc.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:c})}static credentialFromResult(e){return Mc.credentialFromTaggedObject(e)}static credentialFromError(e){return Mc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:c,oauthAccessToken:t}=e;if(!c&&!t)return null;try{return Mc.credential(c,t)}catch(n){return null}}}Mc.GOOGLE_SIGN_IN_METHOD="google.com",Mc.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bc extends Cc{constructor(){super("github.com")}static credential(e){return sc._fromParams({providerId:bc.PROVIDER_ID,signInMethod:bc.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bc.credentialFromTaggedObject(e)}static credentialFromError(e){return bc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return bc.credential(e.oauthAccessToken)}catch(c){return null}}}bc.GITHUB_SIGN_IN_METHOD="github.com",bc.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yc extends Cc{constructor(){super("twitter.com")}static credential(e,c){return sc._fromParams({providerId:yc.PROVIDER_ID,signInMethod:yc.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:c})}static credentialFromResult(e){return yc.credentialFromTaggedObject(e)}static credentialFromError(e){return yc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:c,oauthTokenSecret:t}=e;if(!c||!t)return null;try{return yc.credential(c,t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Lc(e,c){return T(e,"POST","/v1/accounts:signUp",A(e,c))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yc.TWITTER_SIGN_IN_METHOD="twitter.com",yc.PROVIDER_ID="twitter.com";class xc{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,c,t,n=!1){const a=await se._fromIdTokenResponse(e,t,n),r=Sc(t),i=new xc({user:a,providerId:r,_tokenResponse:t,operationType:c});return i}static async _forOperation(e,c,t){await e._updateTokensIfNecessary(t,!0);const n=Sc(t);return new xc({user:e,providerId:n,_tokenResponse:t,operationType:c})}}function Sc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wc extends n.kx{constructor(e,c,t,n){var a;super(c.code,c.message),this.operationType=t,this.user=n,Object.setPrototypeOf(this,wc.prototype),this.customData={appName:e.name,tenantId:null!==(a=e.tenantId)&&void 0!==a?a:void 0,_serverResponse:c.customData._serverResponse,operationType:t}}static _fromErrorAndOperation(e,c,t,n){return new wc(e,c,t,n)}}function kc(e,c,t,n){const a="reauthenticate"===c?t._getReauthenticationResolver(e):t._getIdTokenResponse(e);return a.catch((t=>{if("auth/multi-factor-auth-required"===t.code)throw wc._fromErrorAndOperation(e,t,c,n);throw t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nc(e,c,t=!1){const n=await Z(e,c._linkToIdToken(e.auth,await e.getIdToken()),t);return xc._forOperation(e,"link",n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function _c(e,c,t=!1){const{auth:n}=e,a="reauthenticate";try{const r=await Z(e,kc(n,a,c,e),t);V(r.idToken,n,"internal-error");const i=W(r.idToken);V(i,n,"internal-error");const{sub:o}=i;return V(e.uid===o,n,"user-mismatch"),xc._forOperation(e,a,r)}catch(r){throw"auth/user-not-found"===(null===r||void 0===r?void 0:r.code)&&p(n,"user-mismatch"),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ac(e,c,t=!1){const n="signIn",a=await kc(e,n,c),r=await xc._fromIdTokenResponse(e,n,a);return t||await e._updateCurrentUser(r.user),r}async function Ec(e,c){return Ac(Ie(e),c)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ic(e){const c=Ie(e);c._getPasswordPolicyInternal()&&await c._updatePasswordPolicy()}async function Tc(e,c,t){const n=Ie(e),a={returnSecureToken:!0,email:c,password:t,clientType:"CLIENT_TYPE_WEB"},r=qe(n,a,"signUpPassword",Lc),i=await r.catch((c=>{throw"auth/password-does-not-meet-requirements"===c.code&&Ic(e),c})),o=await xc._fromIdTokenResponse(n,"signIn",i);return await n._updateCurrentUser(o.user),o}function Pc(e,c,t){return Ec((0,n.Yj)(e),zc.credential(c,t)).catch((async c=>{throw"auth/password-does-not-meet-requirements"===c.code&&Ic(e),c}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(e,c,t,a){return(0,n.Yj)(e).onIdTokenChanged(c,t,a)}function Rc(e,c,t){return(0,n.Yj)(e).beforeAuthStateChanged(c,t)}function Dc(e){return(0,n.Yj)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Fc(e,c){return E(e,"POST","/v2/accounts/mfaEnrollment:start",A(e,c))}function Bc(e,c){return E(e,"POST","/v2/accounts/mfaEnrollment:finalize",A(e,c))}function Kc(e,c){return E(e,"POST","/v2/accounts/mfaEnrollment:start",A(e,c))}function Uc(e,c){return E(e,"POST","/v2/accounts/mfaEnrollment:finalize",A(e,c))}new WeakMap;const $c="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,c){this.storageRetriever=e,this.type=c}_isAvailable(){try{return this.storage?(this.storage.setItem($c,"1"),this.storage.removeItem($c),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,c){return this.storage.setItem(e,JSON.stringify(c)),Promise.resolve()}_get(e){const c=this.storage.getItem(e);return Promise.resolve(c?JSON.parse(c):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(){const e=(0,n.Su)();return ge(e)||be(e)}const Gc=1e3,Wc=10;class Yc extends jc{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,c)=>this.onStorageEvent(e,c),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=qc()&&Se(),this.fallbackToPolling=xe(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const c of Object.keys(this.listeners)){const t=this.storage.getItem(c),n=this.localCache[c];t!==n&&e(c,n,t)}}onStorageEvent(e,c=!1){if(!e.key)return void this.forAllChangedKeys(((e,c,t)=>{this.notifyListeners(e,t)}));const t=e.key;if(c?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const n=this.storage.getItem(t);if(e.newValue!==n)null!==e.newValue?this.storage.setItem(t,e.newValue):this.storage.removeItem(t);else if(this.localCache[t]===e.newValue&&!c)return}const n=()=>{const e=this.storage.getItem(t);(c||this.localCache[t]!==e)&&this.notifyListeners(t,e)},a=this.storage.getItem(t);Le()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,Wc):n()}notifyListeners(e,c){this.localCache[e]=c;const t=this.listeners[e];if(t)for(const n of Array.from(t))n(c?JSON.parse(c):c)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,c,t)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:c,newValue:t}),!0)}))}),Gc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,c){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(c)}_removeListener(e,c){this.listeners[e]&&(this.listeners[e].delete(c),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,c){await super._set(e,c),this.localCache[e]=JSON.stringify(c)}async _get(e){const c=await super._get(e);return this.localCache[e]=JSON.stringify(c),c}async _remove(e){await super._remove(e),delete this.localCache[e]}}Yc.type="LOCAL";const Zc=Yc;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc extends jc{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,c){}_removeListener(e,c){}}Xc.type="SESSION";const Jc=Xc;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(e){return Promise.all(e.map((async e=>{try{const c=await e;return{fulfilled:!0,value:c}}catch(c){return{fulfilled:!1,reason:c}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const c=this.receivers.find((c=>c.isListeningto(e)));if(c)return c;const t=new et(e);return this.receivers.push(t),t}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const c=e,{eventId:t,eventType:n,data:a}=c.data,r=this.handlersMap[n];if(!(null===r||void 0===r?void 0:r.size))return;c.ports[0].postMessage({status:"ack",eventId:t,eventType:n});const i=Array.from(r).map((async e=>e(c.origin,a))),o=await Qc(i);c.ports[0].postMessage({status:"done",eventId:t,eventType:n,response:o})}_subscribe(e,c){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(c)}_unsubscribe(e,c){this.handlersMap[e]&&c&&this.handlersMap[e].delete(c),c&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ct(e="",c=10){let t="";for(let n=0;n<c;n++)t+=Math.floor(10*Math.random());return e+t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */et.receivers=[];class tt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,c,t=50){const n="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let a,r;return new Promise(((i,o)=>{const s=ct("",20);n.port1.start();const l=setTimeout((()=>{o(new Error("unsupported_event"))}),t);r={messageChannel:n,onMessage(e){const c=e;if(c.data.eventId===s)switch(c.data.status){case"ack":clearTimeout(l),a=setTimeout((()=>{o(new Error("timeout"))}),3e3);break;case"done":clearTimeout(a),i(c.data.response);break;default:clearTimeout(l),clearTimeout(a),o(new Error("invalid_response"));break}}},this.handlers.add(r),n.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:s,data:c},[n.port2])})).finally((()=>{r&&this.removeMessageHandler(r)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return window}function at(e){nt().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return"undefined"!==typeof nt()["WorkerGlobalScope"]&&"function"===typeof nt()["importScripts"]}async function it(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function ot(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function st(){return rt()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt="firebaseLocalStorageDb",ut=1,ft="firebaseLocalStorage",dt="fbase_key";class mt{constructor(e){this.request=e}toPromise(){return new Promise(((e,c)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{c(this.request.error)}))}))}}function pt(e,c){return e.transaction([ft],c?"readwrite":"readonly").objectStore(ft)}function ht(){const e=indexedDB.deleteDatabase(lt);return new mt(e).toPromise()}function vt(){const e=indexedDB.open(lt,ut);return new Promise(((c,t)=>{e.addEventListener("error",(()=>{t(e.error)})),e.addEventListener("upgradeneeded",(()=>{const c=e.result;try{c.createObjectStore(ft,{keyPath:dt})}catch(n){t(n)}})),e.addEventListener("success",(async()=>{const t=e.result;t.objectStoreNames.contains(ft)?c(t):(t.close(),await ht(),c(await vt()))}))}))}async function gt(e,c,t){const n=pt(e,!0).put({[dt]:c,value:t});return new mt(n).toPromise()}async function zt(e,c){const t=pt(e,!1).get(c),n=await new mt(t).toPromise();return void 0===n?null:n.value}function Vt(e,c){const t=pt(e,!0).delete(c);return new mt(t).toPromise()}const Ct=800,Ht=3;class Mt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await vt()),this.db}async _withRetries(e){let c=0;while(1)try{const c=await this._openDb();return await e(c)}catch(t){if(c++>Ht)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=et._getInstance(st()),this.receiver._subscribe("keyChanged",(async(e,c)=>{const t=await this._poll();return{keyProcessed:t.includes(c.key)}})),this.receiver._subscribe("ping",(async(e,c)=>["keyChanged"]))}async initializeSender(){var e,c;if(this.activeServiceWorker=await it(),!this.activeServiceWorker)return;this.sender=new tt(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&(null===(e=t[0])||void 0===e?void 0:e.fulfilled)&&(null===(c=t[0])||void 0===c?void 0:c.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&ot()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(c){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vt();return await gt(e,$c,"1"),await Vt(e,$c),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,c){return this._withPendingWrite((async()=>(await this._withRetries((t=>gt(t,e,c))),this.localCache[e]=c,this.notifyServiceWorker(e))))}async _get(e){const c=await this._withRetries((c=>zt(c,e)));return this.localCache[e]=c,c}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((c=>Vt(c,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const c=pt(e,!1).getAll();return new mt(c).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const c=[],t=new Set;if(0!==e.length)for(const{fbase_key:n,value:a}of e)t.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(a)&&(this.notifyListeners(n,a),c.push(n));for(const n of Object.keys(this.localCache))this.localCache[n]&&!t.has(n)&&(this.notifyListeners(n,null),c.push(n));return c}notifyListeners(e,c){this.localCache[e]=c;const t=this.listeners[e];if(t)for(const n of Array.from(t))n(c)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Ct)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,c){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(c)}_removeListener(e,c){this.listeners[e]&&(this.listeners[e].delete(c),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Mt.type="LOCAL";const bt=Mt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(e,c){return E(e,"POST","/v2/accounts/mfaSignIn:start",A(e,c))}function Lt(e,c){return E(e,"POST","/v2/accounts/mfaSignIn:finalize",A(e,c))}function xt(e,c){return E(e,"POST","/v2/accounts/mfaSignIn:finalize",A(e,c))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Be("rcb"),new S(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const St="recaptcha";async function wt(e,c,t){var n;const a=await t.verify();try{let r;if(V("string"===typeof a,e,"argument-error"),V(t.type===St,e,"argument-error"),r="string"===typeof c?{phoneNumber:c}:c,"session"in r){const c=r.session;if("phoneNumber"in r){V("enroll"===c.type,e,"internal-error");const t=await Fc(e,{idToken:c.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:a}});return t.phoneSessionInfo.sessionInfo}{V("signin"===c.type,e,"internal-error");const t=(null===(n=r.multiFactorHint)||void 0===n?void 0:n.uid)||r.multiFactorUid;V(t,e,"missing-multi-factor-info");const i=await yt(e,{mfaPendingCredential:c.credential,mfaEnrollmentId:t,phoneSignInInfo:{recaptchaToken:a}});return i.phoneResponseInfo.sessionInfo}}{const{sessionInfo:c}=await lc(e,{phoneNumber:r.phoneNumber,recaptchaToken:a});return c}}finally{t._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kt{constructor(e){this.providerId=kt.PROVIDER_ID,this.auth=Ie(e)}verifyPhoneNumber(e,c){return wt(this.auth,e,(0,n.Yj)(c))}static credential(e,c){return pc._fromVerification(e,c)}static credentialFromResult(e){const c=e;return kt.credentialFromTaggedObject(c)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:c,temporaryProof:t}=e;return c&&t?pc._fromTokenResponse(c,t):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Nt(e,c){return c?ue(c):(V(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kt.PROVIDER_ID="phone",kt.PHONE_SIGN_IN_METHOD="phone";class _t extends ec{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ic(e,this._buildIdpRequest())}_linkToIdToken(e,c){return ic(e,this._buildIdpRequest(c))}_getReauthenticationResolver(e){return ic(e,this._buildIdpRequest())}_buildIdpRequest(e){const c={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(c.idToken=e),c}}function At(e){return Ac(e.auth,new _t(e),e.bypassAuthState)}function Et(e){const{auth:c,user:t}=e;return V(t,c,"internal-error"),_c(t,new _t(e),e.bypassAuthState)}async function It(e){const{auth:c,user:t}=e;return V(t,c,"internal-error"),Nc(t,new _t(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,c,t,n,a=!1){this.auth=e,this.resolver=t,this.user=n,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(c)?c:[c]}execute(){return new Promise((async(e,c)=>{this.pendingPromise={resolve:e,reject:c};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}}))}async onAuthEvent(e){const{urlResponse:c,sessionId:t,postBody:n,tenantId:a,error:r,type:i}=e;if(r)return void this.reject(r);const o={auth:this.auth,requestUri:c,sessionId:t,tenantId:a||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(i)(o))}catch(s){this.reject(s)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return At;case"linkViaPopup":case"linkViaRedirect":return It;case"reauthViaPopup":case"reauthViaRedirect":return Et;default:p(this.auth,"internal-error")}}resolve(e){H(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){H(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt=new S(2e3,1e4);async function Ot(e,c,t){const n=Ie(e);g(e,c,Vc);const a=Nt(n,t),r=new Rt(n,"signInViaPopup",c,a);return r.executeNotNull()}class Rt extends Tt{constructor(e,c,t,n,a){super(e,c,n,a),this.provider=t,this.authWindow=null,this.pollId=null,Rt.currentPopupAction&&Rt.currentPopupAction.cancel(),Rt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){H(1===this.filter.length,"Popup operations only handle one event");const e=ct();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(h(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(h(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var c,t;(null===(t=null===(c=this.authWindow)||void 0===c?void 0:c.window)||void 0===t?void 0:t.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(h(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Pt.get())};e()}}Rt.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Dt="pendingRedirect",Ft=new Map;class Bt extends Tt{constructor(e,c,t=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],c,void 0,t),this.eventId=null}async execute(){let e=Ft.get(this.auth._key());if(!e){try{const c=await Kt(this.resolver,this.auth),t=c?await super.execute():null;e=()=>Promise.resolve(t)}catch(c){e=()=>Promise.reject(c)}Ft.set(this.auth._key(),e)}return this.bypassAuthState||Ft.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const c=await this.auth._redirectUserForId(e.eventId);if(c)return this.user=c,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Kt(e,c){const t=jt(c),n=$t(e);if(!await n._isAvailable())return!1;const a="true"===await n._get(t);return await n._remove(t),a}function Ut(e,c){Ft.set(e._key(),c)}function $t(e){return ue(e._redirectPersistence)}function jt(e){return me(Dt,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qt(e,c,t=!1){const n=Ie(e),a=Nt(n,c),r=new Bt(n,a,t),i=await r.execute();return i&&!t&&(delete i.user._redirectEventId,await n._persistUserIfCurrent(i.user),await n._setRedirectUser(null,c)),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Gt=6e5;class Wt{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let c=!1;return this.consumers.forEach((t=>{this.isEventForConsumer(e,t)&&(c=!0,this.sendToConsumer(e,t),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Xt(e)||(this.hasHandledPotentialRedirect=!0,c||(this.queuedRedirectEvent=e,c=!0)),c}sendToConsumer(e,c){var t;if(e.error&&!Zt(e)){const n=(null===(t=e.error.code)||void 0===t?void 0:t.split("auth/")[1])||"internal-error";c.onError(h(this.auth,n))}else c.onAuthEvent(e)}isEventForConsumer(e,c){const t=null===c.eventId||!!e.eventId&&e.eventId===c.eventId;return c.filter.includes(e.type)&&t}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Gt&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yt(e))}saveEventToCache(e){this.cachedEventUids.add(Yt(e)),this.lastProcessedEventTime=Date.now()}}function Yt(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Zt({type:e,error:c}){return"unknown"===e&&"auth/no-auth-event"===(null===c||void 0===c?void 0:c.code)}function Xt(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zt(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jt(e,c={}){return E(e,"GET","/v1/projects",c)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,en=/^https?/;async function cn(e){if(e.config.emulator)return;const{authorizedDomains:c}=await Jt(e);for(const n of c)try{if(tn(n))return}catch(t){}p(e,"unauthorized-domain")}function tn(e){const c=M(),{protocol:t,hostname:n}=new URL(c);if(e.startsWith("chrome-extension://")){const a=new URL(e);return""===a.hostname&&""===n?"chrome-extension:"===t&&e.replace("chrome-extension://","")===c.replace("chrome-extension://",""):"chrome-extension:"===t&&a.hostname===n}if(!en.test(t))return!1;if(Qt.test(e))return n===e;const a=e.replace(/\./g,"\\."),r=new RegExp("^(.+\\."+a+"|"+a+")$","i");return r.test(n)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=new S(3e4,6e4);function an(){const e=nt().___jsl;if(null===e||void 0===e?void 0:e.H)for(const c of Object.keys(e.H))if(e.H[c].r=e.H[c].r||[],e.H[c].L=e.H[c].L||[],e.H[c].r=[...e.H[c].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function rn(e){return new Promise(((c,t)=>{var n,a,r;function i(){an(),gapi.load("gapi.iframes",{callback:()=>{c(gapi.iframes.getContext())},ontimeout:()=>{an(),t(h(e,"network-request-failed"))},timeout:nn.get()})}if(null===(a=null===(n=nt().gapi)||void 0===n?void 0:n.iframes)||void 0===a?void 0:a.Iframe)c(gapi.iframes.getContext());else{if(!(null===(r=nt().gapi)||void 0===r?void 0:r.load)){const c=Be("iframefcb");return nt()[c]=()=>{gapi.load?i():t(h(e,"network-request-failed"))},Re(`${Fe()}?onload=${c}`).catch((e=>t(e)))}i()}})).catch((e=>{throw on=null,e}))}let on=null;function sn(e){return on=on||rn(e),on}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=new S(5e3,15e3),un="__/auth/iframe",fn="emulator/auth/iframe",dn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pn(e){const c=e.config;V(c.authDomain,e,"auth-domain-config-required");const t=c.emulator?w(c,fn):`https://${e.config.authDomain}/${un}`,r={apiKey:c.apiKey,appName:e.name,v:a.Sg},i=mn.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${(0,n.ik)(r).slice(1)}`}async function hn(e){const c=await sn(e),t=nt().gapi;return V(t,e,"internal-error"),c.open({where:document.body,url:pn(e),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dn,dontclear:!0},(c=>new Promise((async(t,n)=>{await c.restyle({setHideOnLeave:!1});const a=h(e,"network-request-failed"),r=nt().setTimeout((()=>{n(a)}),ln.get());function i(){nt().clearTimeout(r),t(c)}c.ping(i).then(i,(()=>{n(a)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gn=500,zn=600,Vn="_blank",Cn="http://localhost";class Hn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Mn(e,c,t,a=gn,r=zn){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-a)/2,0).toString();let s="";const l=Object.assign(Object.assign({},vn),{width:a.toString(),height:r.toString(),top:i,left:o}),u=(0,n.Su)().toLowerCase();t&&(s=ze(u)?Vn:t),ve(u)&&(c=c||Cn,l.scrollbars="yes");const f=Object.entries(l).reduce(((e,[c,t])=>`${e}${c}=${t},`),"");if(ye(u)&&"_self"!==s)return bn(c||"",s),new Hn(null);const d=window.open(c||"",s,f);V(d,e,"popup-blocked");try{d.focus()}catch(m){}return new Hn(d)}function bn(e,c){const t=document.createElement("a");t.href=e,t.target=c;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn="__/auth/handler",Ln="emulator/auth/handler",xn=encodeURIComponent("fac");async function Sn(e,c,t,r,i,o){V(e.config.authDomain,e,"auth-domain-config-required"),V(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:t,redirectUrl:r,v:a.Sg,eventId:i};if(c instanceof Vc){c.setDefaultLanguage(e.languageCode),s.providerId=c.providerId||"",(0,n.t7)(c.getCustomParameters())||(s.customParameters=JSON.stringify(c.getCustomParameters()));for(const[e,c]of Object.entries(o||{}))s[e]=c}if(c instanceof Cc){const e=c.getScopes().filter((e=>""!==e));e.length>0&&(s.scopes=e.join(","))}e.tenantId&&(s.tid=e.tenantId);const l=s;for(const n of Object.keys(l))void 0===l[n]&&delete l[n];const u=await e._getAppCheckToken(),f=u?`#${xn}=${encodeURIComponent(u)}`:"";return`${wn(e)}?${(0,n.ik)(l).slice(1)}${f}`}function wn({config:e}){return e.emulator?w(e,Ln):`https://${e.authDomain}/${yn}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn="webStorageSupport";class Nn{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jc,this._completeRedirectFn=qt,this._overrideRedirectResult=Ut}async _openPopup(e,c,t,n){var a;H(null===(a=this.eventManagers[e._key()])||void 0===a?void 0:a.manager,"_initialize() not called before _openPopup()");const r=await Sn(e,c,t,M(),n);return Mn(e,r,ct())}async _openRedirect(e,c,t,n){await this._originValidation(e);const a=await Sn(e,c,t,M(),n);return at(a),new Promise((()=>{}))}_initialize(e){const c=e._key();if(this.eventManagers[c]){const{manager:e,promise:t}=this.eventManagers[c];return e?Promise.resolve(e):(H(t,"If manager is not set, promise should be"),t)}const t=this.initAndGetManager(e);return this.eventManagers[c]={promise:t},t.catch((()=>{delete this.eventManagers[c]})),t}async initAndGetManager(e){const c=await hn(e),t=new Wt(e);return c.register("authEvent",(c=>{V(null===c||void 0===c?void 0:c.authEvent,e,"invalid-auth-event");const n=t.onEvent(c.authEvent);return{status:n?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:t},this.iframes[e._key()]=c,t}_isIframeWebStorageSupported(e,c){const t=this.iframes[e._key()];t.send(kn,{type:kn},(t=>{var n;const a=null===(n=null===t||void 0===t?void 0:t[0])||void 0===n?void 0:n[kn];void 0!==a&&c(!!a),p(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const c=e._key();return this.originValidationPromises[c]||(this.originValidationPromises[c]=cn(e)),this.originValidationPromises[c]}get _shouldInitProactively(){return xe()||ge()||be()}}const _n=Nn;class An{constructor(e){this.factorId=e}_process(e,c,t){switch(c.type){case"enroll":return this._finalizeEnroll(e,c.credential,t);case"signin":return this._finalizeSignIn(e,c.credential);default:return C("unexpected MultiFactorSessionType")}}}class En extends An{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new En(e)}_finalizeEnroll(e,c,t){return Bc(e,{idToken:c,displayName:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,c){return Lt(e,{mfaPendingCredential:c,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class In{constructor(){}static assertion(e){return En._fromCredential(e)}}In.FACTOR_ID="phone";class Tn{static assertionForEnrollment(e,c){return Pn._fromSecret(e,c)}static assertionForSignIn(e,c){return Pn._fromEnrollmentId(e,c)}static async generateSecret(e){var c;const t=e;V("undefined"!==typeof(null===(c=t.user)||void 0===c?void 0:c.auth),"internal-error");const n=await Kc(t.user.auth,{idToken:t.credential,totpEnrollmentInfo:{}});return On._fromStartTotpMfaEnrollmentResponse(n,t.user.auth)}}Tn.FACTOR_ID="totp";class Pn extends An{constructor(e,c,t){super("totp"),this.otp=e,this.enrollmentId=c,this.secret=t}static _fromSecret(e,c){return new Pn(c,void 0,e)}static _fromEnrollmentId(e,c){return new Pn(c,e)}async _finalizeEnroll(e,c,t){return V("undefined"!==typeof this.secret,e,"argument-error"),Uc(e,{idToken:c,displayName:t,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,c){V(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const t={verificationCode:this.otp};return xt(e,{mfaPendingCredential:c,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:t})}}class On{constructor(e,c,t,n,a,r,i){this.sessionInfo=r,this.auth=i,this.secretKey=e,this.hashingAlgorithm=c,this.codeLength=t,this.codeIntervalSeconds=n,this.enrollmentCompletionDeadline=a}static _fromStartTotpMfaEnrollmentResponse(e,c){return new On(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,c)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,c){var t;let n=!1;return(Rn(e)||Rn(c))&&(n=!0),n&&(Rn(e)&&(e=(null===(t=this.auth.currentUser)||void 0===t?void 0:t.email)||"unknownuser"),Rn(c)&&(c=this.auth.name)),`otpauth://totp/${c}:${e}?secret=${this.secretKey}&issuer=${c}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Rn(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var Dn="@firebase/auth",Fn="1.6.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bn{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const c=await this.auth.currentUser.getIdToken(e);return{accessToken:c}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const c=this.auth.onIdTokenChanged((c=>{e((null===c||void 0===c?void 0:c.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,c),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const c=this.internalListeners.get(e);c&&(this.internalListeners.delete(e),c(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Un(e){(0,a.q4)(new o.Yl("auth",((c,{options:t})=>{const n=c.getProvider("app").getImmediate(),a=c.getProvider("heartbeat"),r=c.getProvider("app-check-internal"),{apiKey:i,authDomain:o}=n.options;V(i&&!i.includes(":"),"invalid-api-key",{appName:n.name});const s={apiKey:i,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:we(e)},l=new Ee(n,a,r,s);return We(l,t),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,c,t)=>{const n=e.getProvider("auth-internal");n.initialize()}))),(0,a.q4)(new o.Yl("auth-internal",(e=>{const c=Ie(e.getProvider("auth").getImmediate());return(e=>new Bn(e))(c)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,a.Kk)(Dn,Fn,Kn(e)),(0,a.Kk)(Dn,Fn,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=300,jn=(0,n.sX)("authIdTokenMaxAge")||$n;let qn=null;const Gn=e=>async c=>{const t=c&&await c.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>jn)return;const a=null===t||void 0===t?void 0:t.token;qn!==a&&(qn=a,await fetch(e,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function Wn(e=(0,a.WE)()){const c=(0,a.U5)(e,"auth");if(c.isInitialized())return c.getImmediate();const t=Ge(e,{popupRedirectResolver:_n,persistence:[bt,Zc,Jc]}),r=(0,n.sX)("authTokenSyncURL");if(r){const e=Gn(r);Rc(t,e,(()=>e(t.currentUser))),Oc(t,(c=>e(c)))}const i=(0,n.EB)("auth");return i&&Ye(t,`http://${i}`),t}function Yn(){var e,c;return null!==(c=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==c?c:document}Oe({loadJS(e){return new Promise(((c,t)=>{const n=document.createElement("script");n.setAttribute("src",e),n.onload=c,n.onerror=e=>{const c=h("internal-error");c.customData=e,t(c)},n.type="text/javascript",n.charset="UTF-8",Yn().appendChild(n)}))},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),Un("Browser")},4348:function(e,c,t){t.d(c,{sB:function(){return rn},AX:function(){return sn},cT:function(){return on},oV:function(){return lt},oh:function(){return an},UN:function(){return ut},i4:function(){return en},uY:function(){return cn},gZ:function(){return at},kt:function(){return jt},Sm:function(){return tn},gD:function(){return nn},A9:function(){return Gt}});t(3248),t(2912),t(9904),t(6096),t(8208);var n=t(9376),a=t(4328),r=t(8300),i=t(8004);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}o.UNAUTHENTICATED=new o(null),o.GOOGLE_CREDENTIALS=new o("google-credentials-uid"),o.FIRST_PARTY=new o("first-party-uid"),o.MOCK_USER=new o("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let s="10.8.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l=new r.YJ("@firebase/firestore");function u(e,...c){if(l.logLevel<=r.Ge.DEBUG){const t=c.map(m);l.debug(`Firestore (${s}): ${e}`,...t)}}function f(e,...c){if(l.logLevel<=r.Ge.ERROR){const t=c.map(m);l.error(`Firestore (${s}): ${e}`,...t)}}function d(e,...c){if(l.logLevel<=r.Ge.WARN){const t=c.map(m);l.warn(`Firestore (${s}): ${e}`,...t)}}function m(e){if("string"==typeof e)return e;try{
/**
    * @license
    * Copyright 2020 Google LLC
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *   http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */
return function(e){return JSON.stringify(e)}(e)}catch(c){return e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e="Unexpected state"){const c=`FIRESTORE (${s}) INTERNAL ASSERTION FAILED: `+e;throw f(c),new Error(c)}function h(e,c){e||p()}function v(e,c){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g="ok",z="cancelled",V="unknown",C="invalid-argument",H="deadline-exceeded",M="not-found",b="permission-denied",y="unauthenticated",L="resource-exhausted",x="failed-precondition",S="aborted",w="out-of-range",k="unimplemented",N="internal",_="unavailable";class A extends i.kx{constructor(e,c){super(e,c),this.code=e,this.message=c,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class E{constructor(e,c){this.user=c,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class I{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,c){e.enqueueRetryable((()=>c(o.UNAUTHENTICATED)))}shutdown(){}}class T{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,c){this.changeListener=c,e.enqueueRetryable((()=>c(this.token.user)))}shutdown(){this.changeListener=null}}class P{constructor(e){this.auth=null,e.onInit((e=>{this.auth=e}))}getToken(){return this.auth?this.auth.getToken().then((e=>e?(h("string"==typeof e.accessToken),new E(e.accessToken,new o(this.auth.getUid()))):null)):Promise.resolve(null)}invalidateToken(){}start(e,c){}shutdown(){}}class O{constructor(e,c,t){this.t=e,this.i=c,this.o=t,this.type="FirstParty",this.user=o.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.l();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class R{constructor(e,c,t){this.t=e,this.i=c,this.o=t}getToken(){return Promise.resolve(new O(this.t,this.i,this.o))}start(e,c){e.enqueueRetryable((()=>c(o.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class D{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class F{constructor(e){this.h=e,this.appCheck=null,e.onInit((e=>{this.appCheck=e}))}getToken(){return this.appCheck?this.appCheck.getToken().then((e=>e?(h("string"==typeof e.token),new D(e.token)):null)):Promise.resolve(null)}invalidateToken(){}start(e,c){}shutdown(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e,c,t,n,a,r,i,o,s){this.databaseId=e,this.appId=c,this.persistenceKey=t,this.host=n,this.ssl=a,this.forceLongPolling=r,this.autoDetectLongPolling=i,this.longPollingOptions=o,this.useFetchStreams=s}}class K{constructor(e,c){this.projectId=e,this.database=c||"(default)"}static empty(){return new K("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof K&&e.projectId===this.projectId&&e.database===this.database}}class U{constructor(e,c,t){void 0===c?c=0:c>e.length&&p(),void 0===t?t=e.length-c:t>e.length-c&&p(),this.segments=e,this.offset=c,this.len=t}get length(){return this.len}isEqual(e){return 0===U.comparator(this,e)}child(e){const c=this.segments.slice(this.offset,this.limit());return e instanceof U?e.forEach((e=>{c.push(e)})):c.push(e),this.construct(c)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let c=0;c<this.length;c++)if(this.get(c)!==e.get(c))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let c=0;c<this.length;c++)if(this.get(c)!==e.get(c))return!1;return!0}forEach(e){for(let c=this.offset,t=this.limit();c<t;c++)e(this.segments[c])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,c){const t=Math.min(e.length,c.length);for(let n=0;n<t;n++){const t=e.get(n),a=c.get(n);if(t<a)return-1;if(t>a)return 1}return e.length<c.length?-1:e.length>c.length?1:0}}class $ extends U{construct(e,c,t){return new $(e,c,t)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const c=[];for(const t of e){if(t.indexOf("//")>=0)throw new A(C,`Invalid segment (${t}). Paths must not contain // in them.`);c.push(...t.split("/").filter((e=>e.length>0)))}return new $(c)}static emptyPath(){return new $([])}}const j=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class q extends U{construct(e,c,t){return new q(e,c,t)}static isValidIdentifier(e){return j.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),q.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new q(["__name__"])}static fromServerFormat(e){const c=[];let t="",n=0;const a=()=>{if(0===t.length)throw new A(C,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);c.push(t),t=""};let r=!1;for(;n<e.length;){const c=e[n];if("\\"===c){if(n+1===e.length)throw new A(C,"Path has trailing escape character: "+e);const c=e[n+1];if("\\"!==c&&"."!==c&&"`"!==c)throw new A(C,"Path has invalid escape sequence: "+e);t+=c,n+=2}else"`"===c?(r=!r,n++):"."!==c||r?(t+=c,n++):(a(),n++)}if(a(),r)throw new A(C,"Unterminated ` in path: "+e);return new q(c)}static emptyPath(){return new q([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G($.fromString(e))}static fromName(e){return new G($.fromString(e).popFirst(5))}static empty(){return new G($.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===$.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,c){return $.comparator(e.path,c.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new $(e.slice()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(e,c,t){if(!t)throw new A(C,`Function ${e}() cannot be called with an empty ${c}.`)}function Y(e){if(!G.isDocumentKey(e))throw new A(C,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Z(e){if(G.isDocumentKey(e))throw new A(C,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function X(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const c=function(e){return e.constructor?e.constructor.name:null}(e);return c?`a custom ${c} object`:"an object"}}return"function"==typeof e?"a function":p()}function J(e,c){if("_delegate"in e&&(e=e._delegate),!(e instanceof c)){if(c.name===e.constructor.name)throw new A(C,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=X(e);throw new A(C,`Expected type '${c.name}', but it was: ${t}`)}}return e}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Q(e){const c={};return void 0!==e.timeoutSeconds&&(c.timeoutSeconds=e.timeoutSeconds),c
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}let ee=null;function ce(){return null===ee?ee=function(){return 268435456+Math.round(2147483648*Math.random())}():ee++,"0x"+ee.toString(16)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}function te(e){return null==e}function ne(e){return 0===e&&1/e==-1/0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re,ie;function oe(e){if(void 0===e)return f("RPC_ERROR","HTTP error has no status"),V;switch(e){case 200:return g;case 400:return x;case 401:return y;case 403:return b;case 404:return M;case 409:return S;case 416:return w;case 429:return L;case 499:return z;case 500:return V;case 501:return k;case 503:return _;case 504:return H;default:return e>=200&&e<300?g:e>=400&&e<500?x:e>=500&&e<600?N:V}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(ie=re||(re={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";class se extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const c=e.ssl?"https":"http",t=encodeURIComponent(this.databaseId.projectId),n=encodeURIComponent(this.databaseId.database);this.m=c+"://"+e.host,this.A=`projects/${t}/databases/${n}`,this.T="(default)"===this.databaseId.database?`project_id=${t}`:`project_id=${t}&database_id=${n}`}get R(){return!1}P(e,c,t,n,a){const r=ce(),i=this.I(e,c.toUriEncodedString());u("RestConnection",`Sending RPC '${e}' ${r}:`,i,t);const o={"google-cloud-resource-prefix":this.A,"x-goog-request-params":this.T};return this.V(o,n,a),this.p(e,i,o,t).then((c=>(u("RestConnection",`Received RPC '${e}' ${r}: `,c),c)),(c=>{throw d("RestConnection",`RPC '${e}' ${r} failed with error: `,c,"url: ",i,"request:",t),c}))}g(e,c,t,n,a,r){return this.P(e,c,t,n,a)}V(e,c,t){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+s}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),c&&c.headers.forEach(((c,t)=>e[t]=c)),t&&t.headers.forEach(((c,t)=>e[t]=c))}I(e,c){const t=ae[e];return`${this.m}/v1/${c}:${t}`}terminate(){}}{constructor(e,c){super(e),this.F=c}v(e,c){throw new Error("Not supported by FetchConnection")}async p(e,c,t,n){var a;const r=JSON.stringify(n);let i;try{i=await this.F(c,{method:"POST",headers:t,body:r})}catch(e){const c=e;throw new A(oe(c.status),"Request failed with error: "+c.statusText)}if(!i.ok){let e=await i.json();Array.isArray(e)&&(e=e[0]);const c=null===(a=null==e?void 0:e.error)||void 0===a?void 0:a.message;throw new A(oe(i.status),`Request failed with error: ${null!=c?c:i.statusText}`)}return i.json()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function le(e){const c="undefined"!=typeof self&&(self.crypto||self.msCrypto),t=new Uint8Array(e);if(c&&"function"==typeof c.getRandomValues)c.getRandomValues(t);else for(let n=0;n<e;n++)t[n]=Math.floor(256*Math.random());return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",c=Math.floor(256/e.length)*e.length;let t="";for(;t.length<20;){const n=le(40);for(let a=0;a<n.length;++a)t.length<20&&n[a]<c&&(t+=e.charAt(n[a]%e.length))}return t}}function fe(e,c){return e<c?-1:e>c?1:0}function de(e,c,t){return e.length===c.length&&e.every(((e,n)=>t(e,c[n])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(e){let c=0;for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&c++;return c}function pe(e,c){for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&c(t,e[t])}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.binaryString=e}static fromBase64String(e){const c=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new he("Invalid base64 string: "+e):e}}(e);return new ve(c)}static fromUint8Array(e){const c=function(e){let c="";for(let t=0;t<e.length;++t)c+=String.fromCharCode(e[t]);return c}(e);return new ve(c)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const c=new Uint8Array(e.length);for(let t=0;t<e.length;t++)c[t]=e.charCodeAt(t);return c}
/**
    * @license
    * Copyright 2020 Google LLC
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *   http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ve.EMPTY_BYTE_STRING=new ve("");const ge=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ze(e){if(h(!!e),"string"==typeof e){let c=0;const t=ge.exec(e);if(h(!!t),t[1]){let e=t[1];e=(e+"000000000").substr(0,9),c=Number(e)}const n=new Date(e);return{seconds:Math.floor(n.getTime()/1e3),nanos:c}}return{seconds:Ve(e.seconds),nanos:Ve(e.nanos)}}function Ve(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Ce(e){return"string"==typeof e?ve.fromBase64String(e):ve.fromUint8Array(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,c){if(this.seconds=e,this.nanoseconds=c,c<0)throw new A(C,"Timestamp nanoseconds out of range: "+c);if(c>=1e9)throw new A(C,"Timestamp nanoseconds out of range: "+c);if(e<-62135596800)throw new A(C,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new A(C,"Timestamp seconds out of range: "+e)}static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const c=Math.floor(e/1e3),t=Math.floor(1e6*(e-1e3*c));return new He(c,t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?fe(this.nanoseconds,e.nanoseconds):fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(e){var c,t;return"server_timestamp"===(null===(t=((null===(c=null==e?void 0:e.mapValue)||void 0===c?void 0:c.fields)||{}).__type__)||void 0===t?void 0:t.stringValue)}function be(e){const c=e.mapValue.fields.__previous_value__;return Me(c)?be(c):c}function ye(e){const c=ze(e.mapValue.fields.__local_write_time__.timestampValue);return new He(c.seconds,c.nanos)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le={fields:{__type__:{stringValue:"__max__"}}};function xe(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Me(e)?4:function(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
  * @license
  * Copyright 2022 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */(e)?9007199254740991:10:p()}function Se(e,c){if(e===c)return!0;const t=xe(e);if(t!==xe(c))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===c.booleanValue;case 4:return ye(e).isEqual(ye(c));case 3:return function(e,c){if("string"==typeof e.timestampValue&&"string"==typeof c.timestampValue&&e.timestampValue.length===c.timestampValue.length)return e.timestampValue===c.timestampValue;const t=ze(e.timestampValue),n=ze(c.timestampValue);return t.seconds===n.seconds&&t.nanos===n.nanos}(e,c);case 5:return e.stringValue===c.stringValue;case 6:return function(e,c){return Ce(e.bytesValue).isEqual(Ce(c.bytesValue))}(e,c);case 7:return e.referenceValue===c.referenceValue;case 8:return function(e,c){return Ve(e.geoPointValue.latitude)===Ve(c.geoPointValue.latitude)&&Ve(e.geoPointValue.longitude)===Ve(c.geoPointValue.longitude)}(e,c);case 2:return function(e,c){if("integerValue"in e&&"integerValue"in c)return Ve(e.integerValue)===Ve(c.integerValue);if("doubleValue"in e&&"doubleValue"in c){const t=Ve(e.doubleValue),n=Ve(c.doubleValue);return t===n?ne(t)===ne(n):isNaN(t)&&isNaN(n)}return!1}(e,c);case 9:return de(e.arrayValue.values||[],c.arrayValue.values||[],Se);case 10:return function(e,c){const t=e.mapValue.fields||{},n=c.mapValue.fields||{};if(me(t)!==me(n))return!1;for(const a in t)if(t.hasOwnProperty(a)&&(void 0===n[a]||!Se(t[a],n[a])))return!1;return!0}(e,c);default:return p()}}function we(e,c){return void 0!==(e.values||[]).find((e=>Se(e,c)))}function ke(e,c){if(e===c)return 0;const t=xe(e),n=xe(c);if(t!==n)return fe(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return fe(e.booleanValue,c.booleanValue);case 2:return function(e,c){const t=Ve(e.integerValue||e.doubleValue),n=Ve(c.integerValue||c.doubleValue);return t<n?-1:t>n?1:t===n?0:isNaN(t)?isNaN(n)?0:-1:1}(e,c);case 3:return Ne(e.timestampValue,c.timestampValue);case 4:return Ne(ye(e),ye(c));case 5:return fe(e.stringValue,c.stringValue);case 6:return function(e,c){const t=Ce(e),n=Ce(c);return t.compareTo(n)}(e.bytesValue,c.bytesValue);case 7:return function(e,c){const t=e.split("/"),n=c.split("/");for(let a=0;a<t.length&&a<n.length;a++){const e=fe(t[a],n[a]);if(0!==e)return e}return fe(t.length,n.length)}(e.referenceValue,c.referenceValue);case 8:return function(e,c){const t=fe(Ve(e.latitude),Ve(c.latitude));return 0!==t?t:fe(Ve(e.longitude),Ve(c.longitude))}(e.geoPointValue,c.geoPointValue);case 9:return function(e,c){const t=e.values||[],n=c.values||[];for(let a=0;a<t.length&&a<n.length;++a){const e=ke(t[a],n[a]);if(e)return e}return fe(t.length,n.length)}(e.arrayValue,c.arrayValue);case 10:return function(e,c){if(e===Le&&c===Le)return 0;if(e===Le)return 1;if(c===Le)return-1;const t=e.fields||{},n=Object.keys(t),a=c.fields||{},r=Object.keys(a);n.sort(),r.sort();for(let i=0;i<n.length&&i<r.length;++i){const e=fe(n[i],r[i]);if(0!==e)return e;const c=ke(t[n[i]],a[r[i]]);if(0!==c)return c}return fe(n.length,r.length)}(e.mapValue,c.mapValue);default:throw p()}}function Ne(e,c){if("string"==typeof e&&"string"==typeof c&&e.length===c.length)return fe(e,c);const t=ze(e),n=ze(c),a=fe(t.seconds,n.seconds);return 0!==a?a:fe(t.nanos,n.nanos)}function _e(e,c){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${c.path.canonicalString()}`}}function Ae(e){return!!e&&"arrayValue"in e}function Ee(e){return!!e&&"nullValue"in e}function Ie(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Te(e){return!!e&&"mapValue"in e}function Pe(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const c={mapValue:{fields:{}}};return pe(e.mapValue.fields,((e,t)=>c.mapValue.fields[e]=Pe(t))),c}if(e.arrayValue){const c={arrayValue:{values:[]}};for(let t=0;t<(e.arrayValue.values||[]).length;++t)c.arrayValue.values[t]=Pe(e.arrayValue.values[t]);return c}return Object.assign({},e)}class Oe{constructor(e,c){this.position=e,this.inclusive=c}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Re{}class De extends Re{constructor(e,c,t){super(),this.field=e,this.op=c,this.value=t}static create(e,c,t){return e.isKeyField()?"in"===c||"not-in"===c?this.createKeyFieldInFilter(e,c,t):new Be(e,c,t):"array-contains"===c?new je(e,t):"in"===c?new qe(e,t):"not-in"===c?new Ge(e,t):"array-contains-any"===c?new We(e,t):new De(e,c,t)}static createKeyFieldInFilter(e,c,t){return"in"===c?new Ke(e,t):new Ue(e,t)}matches(e){const c=e.data.field(this.field);return"!="===this.op?null!==c&&this.matchesComparison(ke(c,this.value)):null!==c&&xe(this.value)===xe(c)&&this.matchesComparison(ke(c,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return p()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Fe extends Re{constructor(e,c){super(),this.filters=e,this.op=c,this.D=null}static create(e,c){return new Fe(e,c)}matches(e){return function(e){return"and"===e.op}(this)?void 0===this.filters.find((c=>!c.matches(e))):void 0!==this.filters.find((c=>c.matches(e)))}getFlattenedFilters(){return null!==this.D||(this.D=this.filters.reduce(((e,c)=>e.concat(c.getFlattenedFilters())),[])),this.D}getFilters(){return Object.assign([],this.filters)}}class Be extends De{constructor(e,c,t){super(e,c,t),this.key=G.fromName(t.referenceValue)}matches(e){const c=G.comparator(e.key,this.key);return this.matchesComparison(c)}}class Ke extends De{constructor(e,c){super(e,"in",c),this.keys=$e("in",c)}matches(e){return this.keys.some((c=>c.isEqual(e.key)))}}class Ue extends De{constructor(e,c){super(e,"not-in",c),this.keys=$e("not-in",c)}matches(e){return!this.keys.some((c=>c.isEqual(e.key)))}}function $e(e,c){var t;return((null===(t=c.arrayValue)||void 0===t?void 0:t.values)||[]).map((e=>G.fromName(e.referenceValue)))}class je extends De{constructor(e,c){super(e,"array-contains",c)}matches(e){const c=e.data.field(this.field);return Ae(c)&&we(c.arrayValue,this.value)}}class qe extends De{constructor(e,c){super(e,"in",c)}matches(e){const c=e.data.field(this.field);return null!==c&&we(this.value.arrayValue,c)}}class Ge extends De{constructor(e,c){super(e,"not-in",c)}matches(e){if(we(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const c=e.data.field(this.field);return null!==c&&!we(this.value.arrayValue,c)}}class We extends De{constructor(e,c){super(e,"array-contains-any",c)}matches(e){const c=e.data.field(this.field);return!(!Ae(c)||!c.arrayValue.values)&&c.arrayValue.values.some((e=>we(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,c="asc"){this.field=e,this.dir=c}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ze{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ze(e)}static min(){return new Ze(new He(0,0))}static max(){return new Ze(new He(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,c){this.comparator=e,this.root=c||Qe.EMPTY}insert(e,c){return new Xe(this.comparator,this.root.insert(e,c,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new Xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let c=this.root;for(;!c.isEmpty();){const t=this.comparator(e,c.key);if(0===t)return c.value;t<0?c=c.left:t>0&&(c=c.right)}return null}indexOf(e){let c=0,t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return c+t.left.size;n<0?t=t.left:(c+=t.left.size+1,t=t.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((c,t)=>(e(c,t),!1)))}toString(){const e=[];return this.inorderTraversal(((c,t)=>(e.push(`${c}:${t}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Je(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Je(this.root,e,this.comparator,!1)}getReverseIterator(){return new Je(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Je(this.root,e,this.comparator,!0)}}class Je{constructor(e,c,t,n){this.isReverse=n,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=c?t(e.key,c):1,c&&n&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(0===a){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const c={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return c}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,c,t,n,a){this.key=e,this.value=c,this.color=null!=t?t:Qe.RED,this.left=null!=n?n:Qe.EMPTY,this.right=null!=a?a:Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,c,t,n,a){return new Qe(null!=e?e:this.key,null!=c?c:this.value,null!=t?t:this.color,null!=n?n:this.left,null!=a?a:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,c,t){let n=this;const a=t(e,n.key);return n=a<0?n.copy(null,null,null,n.left.insert(e,c,t),null):0===a?n.copy(null,c,null,null,null):n.copy(null,null,null,null,n.right.insert(e,c,t)),n.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,c){let t,n=this;if(c(e,n.key)<0)n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,c),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===c(e,n.key)){if(n.right.isEmpty())return Qe.EMPTY;t=n.right.min(),n=n.copy(t.key,t.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,c))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),c=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,c)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw p();if(this.right.isRed())throw p();const e=this.left.check();if(e!==this.right.check())throw p();return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1,Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw p()}get value(){throw p()}get color(){throw p()}get left(){throw p()}get right(){throw p()}copy(e,c,t,n,a){return this}insert(e,c,t){return new Qe(e,c)}remove(e,c){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ec{constructor(e){this.comparator=e,this.data=new Xe(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((c,t)=>(e(c),!1)))}forEachInRange(e,c){const t=this.data.getIteratorFrom(e[0]);for(;t.hasNext();){const n=t.getNext();if(this.comparator(n.key,e[1])>=0)return;c(n.key)}}forEachWhile(e,c){let t;for(t=void 0!==c?this.data.getIteratorFrom(c):this.data.getIterator();t.hasNext();)if(!e(t.getNext().key))return}firstAfterOrEqual(e){const c=this.data.getIteratorFrom(e);return c.hasNext()?c.getNext().key:null}getIterator(){return new cc(this.data.getIterator())}getIteratorFrom(e){return new cc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let c=this;return c.size<e.size&&(c=e,e=this),e.forEach((e=>{c=c.add(e)})),c}isEqual(e){if(!(e instanceof ec))return!1;if(this.size!==e.size)return!1;const c=this.data.getIterator(),t=e.data.getIterator();for(;c.hasNext();){const e=c.getNext().key,n=t.getNext().key;if(0!==this.comparator(e,n))return!1}return!0}toArray(){const e=[];return this.forEach((c=>{e.push(c)})),e}toString(){const e=[];return this.forEach((c=>e.push(c))),"SortedSet("+e.toString()+")"}copy(e){const c=new ec(this.comparator);return c.data=e,c}}class cc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e){this.fields=e,e.sort(q.comparator)}static empty(){return new tc([])}unionWith(e){let c=new ec(q.comparator);for(const t of this.fields)c=c.add(t);for(const t of e)c=c.add(t);return new tc(c.toArray())}covers(e){for(const c of this.fields)if(c.isPrefixOf(e))return!0;return!1}isEqual(e){return de(this.fields,e.fields,((e,c)=>e.isEqual(c)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e){this.value=e}static empty(){return new nc({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let c=this.value;for(let t=0;t<e.length-1;++t)if(c=(c.mapValue.fields||{})[e.get(t)],!Te(c))return null;return c=(c.mapValue.fields||{})[e.lastSegment()],c||null}}set(e,c){this.getFieldsMap(e.popLast())[e.lastSegment()]=Pe(c)}setAll(e){let c=q.emptyPath(),t={},n=[];e.forEach(((e,a)=>{if(!c.isImmediateParentOf(a)){const e=this.getFieldsMap(c);this.applyChanges(e,t,n),t={},n=[],c=a.popLast()}e?t[a.lastSegment()]=Pe(e):n.push(a.lastSegment())}));const a=this.getFieldsMap(c);this.applyChanges(a,t,n)}delete(e){const c=this.field(e.popLast());Te(c)&&c.mapValue.fields&&delete c.mapValue.fields[e.lastSegment()]}isEqual(e){return Se(this.value,e.value)}getFieldsMap(e){let c=this.value;c.mapValue.fields||(c.mapValue={fields:{}});for(let t=0;t<e.length;++t){let n=c.mapValue.fields[e.get(t)];Te(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},c.mapValue.fields[e.get(t)]=n),c=n}return c.mapValue.fields}applyChanges(e,c,t){pe(c,((c,t)=>e[c]=t));for(const n of t)delete e[n]}clone(){return new nc(Pe(this.value))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,c,t,n,a,r,i){this.key=e,this.documentType=c,this.version=t,this.readTime=n,this.createTime=a,this.data=r,this.documentState=i}static newInvalidDocument(e){return new ac(e,0,Ze.min(),Ze.min(),Ze.min(),nc.empty(),0)}static newFoundDocument(e,c,t,n){return new ac(e,1,c,Ze.min(),t,n,0)}static newNoDocument(e,c){return new ac(e,2,c,Ze.min(),Ze.min(),nc.empty(),0)}static newUnknownDocument(e,c){return new ac(e,3,c,Ze.min(),Ze.min(),nc.empty(),2)}convertToFoundDocument(e,c){return!this.createTime.isEqual(Ze.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=c,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=nc.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=nc.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ze.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof ac&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ac(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,c=null,t=[],n=[],a=null,r=null,i=null){this.path=e,this.collectionGroup=c,this.orderBy=t,this.filters=n,this.limit=a,this.startAt=r,this.endAt=i,this.C=null}}function ic(e,c=null,t=[],n=[],a=null,r=null,i=null){return new rc(e,c,t,n,a,r,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,c=null,t=[],n=[],a=null,r="F",i=null,o=null){this.path=e,this.collectionGroup=c,this.explicitOrderBy=t,this.filters=n,this.limit=a,this.limitType=r,this.startAt=i,this.endAt=o,this.S=null,this.N=null,this.O=null,this.startAt,this.endAt}}function sc(e){return null!==e.collectionGroup}function lc(e){const c=v(e);if(null===c.S){c.S=[];const e=new Set;for(const a of c.explicitOrderBy)c.S.push(a),e.add(a.field.canonicalString());const t=c.explicitOrderBy.length>0?c.explicitOrderBy[c.explicitOrderBy.length-1].dir:"asc",n=function(e){let c=new ec(q.comparator);return e.filters.forEach((e=>{e.getFlattenedFilters().forEach((e=>{e.isInequality()&&(c=c.add(e.field))}))})),c}(c);n.forEach((n=>{e.has(n.canonicalString())||n.isKeyField()||c.S.push(new Ye(n,t))})),e.has(q.keyField().canonicalString())||c.S.push(new Ye(q.keyField(),t))}return c.S}function uc(e){const c=v(e);return c.N||(c.N=fc(c,lc(e))),c.N}function fc(e,c){if("F"===e.limitType)return ic(e.path,e.collectionGroup,c,e.filters,e.limit,e.startAt,e.endAt);{c=c.map((e=>{const c="desc"===e.dir?"asc":"desc";return new Ye(e.field,c)}));const t=e.endAt?new Oe(e.endAt.position,e.endAt.inclusive):null,n=e.startAt?new Oe(e.startAt.position,e.startAt.inclusive):null;return ic(e.path,e.collectionGroup,c,e.filters,e.limit,t,n)}}function dc(e,c){const t=e.filters.concat([c]);return new oc(e.path,e.collectionGroup,e.explicitOrderBy.slice(),t,e.limit,e.limitType,e.startAt,e.endAt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function mc(e,c){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!ne(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}(c)?function(e){return{integerValue:""+e}}(c):function(e,c){if(e.useProto3Json){if(isNaN(c))return{doubleValue:"NaN"};if(c===1/0)return{doubleValue:"Infinity"};if(c===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ne(c)?"-0":c}}(e,c)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(){this._=void 0}}class hc extends pc{}class vc extends pc{constructor(e){super(),this.elements=e}}class gc extends pc{constructor(e){super(),this.elements=e}}class zc extends pc{constructor(e,c){super(),this.serializer=e,this.q=c}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,c){this.field=e,this.transform=c}}class Cc{constructor(e,c){this.updateTime=e,this.exists=c}static none(){return new Cc}static exists(e){return new Cc(void 0,e)}static updateTime(e){return new Cc(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class Hc{}class Mc extends Hc{constructor(e,c,t,n=[]){super(),this.key=e,this.value=c,this.precondition=t,this.fieldTransforms=n,this.type=0}getFieldMask(){return null}}class bc extends Hc{constructor(e,c,t,n,a=[]){super(),this.key=e,this.data=c,this.fieldMask=t,this.precondition=n,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}class yc extends Hc{constructor(e,c){super(),this.key=e,this.precondition=c,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Lc extends Hc{constructor(e,c){super(),this.key=e,this.precondition=c,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),Sc=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),wc=(()=>{const e={and:"AND",or:"OR"};return e})();class kc{constructor(e,c){this.databaseId=e,this.useProto3Json=c}}function Nc(e,c){return e.useProto3Json?`${new Date(1e3*c.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+c.nanoseconds).slice(-9)}Z`:{seconds:""+c.seconds,nanos:c.nanoseconds}}function _c(e,c){return e.useProto3Json?c.toBase64():c.toUint8Array()}function Ac(e,c){return Nc(e,c.toTimestamp())}function Ec(e){return h(!!e),Ze.fromTimestamp(function(e){const c=ze(e);return new He(c.seconds,c.nanos)}(e))}function Ic(e,c){return Tc(e,c).canonicalString()}function Tc(e,c){const t=function(e){return new $(["projects",e.projectId,"databases",e.database])}(e).child("documents");return void 0===c?t:t.child(c)}function Pc(e,c){return Ic(e.databaseId,c.path)}function Oc(e,c){const t=function(e){const c=$.fromString(e);return h(Wc(c)),c}(c);if(t.get(1)!==e.databaseId.projectId)throw new A(C,"Tried to deserialize key from different project: "+t.get(1)+" vs "+e.databaseId.projectId);if(t.get(3)!==e.databaseId.database)throw new A(C,"Tried to deserialize key from different database: "+t.get(3)+" vs "+e.databaseId.database);return new G(function(e){return h(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}(t))}function Rc(e,c,t){return{name:Pc(e,c),fields:t.value.mapValue.fields}}function Dc(e,c){return"found"in c?function(e,c){h(!!c.found),c.found.name,c.found.updateTime;const t=Oc(e,c.found.name),n=Ec(c.found.updateTime),a=c.found.createTime?Ec(c.found.createTime):Ze.min(),r=new nc({mapValue:{fields:c.found.fields}});return ac.newFoundDocument(t,n,a,r)}(e,c):"missing"in c?function(e,c){h(!!c.missing),h(!!c.readTime);const t=Oc(e,c.missing),n=Ec(c.readTime);return ac.newNoDocument(t,n)}(e,c):p()}function Fc(e,c){let t;if(c instanceof Mc)t={update:Rc(e,c.key,c.value)};else if(c instanceof yc)t={delete:Pc(e,c.key)};else if(c instanceof bc)t={update:Rc(e,c.key,c.data),updateMask:Gc(c.fieldMask)};else{if(!(c instanceof Lc))return p();t={verify:Pc(e,c.key)}}return c.fieldTransforms.length>0&&(t.updateTransforms=c.fieldTransforms.map((e=>function(e,c){const t=c.transform;if(t instanceof hc)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(t instanceof vc)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:t.elements}};if(t instanceof gc)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:t.elements}};if(t instanceof zc)return{fieldPath:c.field.canonicalString(),increment:t.q};throw p()}(0,e)))),c.precondition.isNone||(t.currentDocument=function(e,c){return void 0!==c.updateTime?{updateTime:Ac(e,c.updateTime)}:void 0!==c.exists?{exists:c.exists}:p()}(e,c.precondition)),t}function Bc(e,c){const t={structuredQuery:{}},n=c.path;let a;null!==c.collectionGroup?(a=n,t.structuredQuery.from=[{collectionId:c.collectionGroup,allDescendants:!0}]):(a=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=function(e,c){return Ic(e.databaseId,c)}(e,a);const r=function(e){if(0!==e.length)return qc(Fe.create(e,"and"))}(c.filters);r&&(t.structuredQuery.where=r);const i=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:jc(e.field),direction:Kc(e.dir)}}(e)))}(c.orderBy);i&&(t.structuredQuery.orderBy=i);const o=function(e,c){return e.useProto3Json||te(c)?c:{value:c}}(e,c.limit);return null!==o&&(t.structuredQuery.limit=o),c.startAt&&(t.structuredQuery.startAt=function(e){return{before:e.inclusive,values:e.position}}(c.startAt)),c.endAt&&(t.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(c.endAt)),{B:t,parent:a}}function Kc(e){return xc[e]}function Uc(e){return Sc[e]}function $c(e){return wc[e]}function jc(e){return{fieldPath:e.canonicalString()}}function qc(e){return e instanceof De?function(e){if("=="===e.op){if(Ie(e.value))return{unaryFilter:{field:jc(e.field),op:"IS_NAN"}};if(Ee(e.value))return{unaryFilter:{field:jc(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Ie(e.value))return{unaryFilter:{field:jc(e.field),op:"IS_NOT_NAN"}};if(Ee(e.value))return{unaryFilter:{field:jc(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:jc(e.field),op:Uc(e.op),value:e.value}}}(e):e instanceof Fe?function(e){const c=e.getFilters().map((e=>qc(e)));return 1===c.length?c[0]:{compositeFilter:{op:$c(e.op),filters:c}}}(e):p()}function Gc(e){const c=[];return e.fields.forEach((e=>c.push(e.canonicalString()))),{fieldPaths:c}}function Wc(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(e){return new kc(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zc extends class{}{constructor(e,c,t,n){super(),this.authCredentials=e,this.appCheckCredentials=c,this.connection=t,this.serializer=n,this.Y=!1}Z(){if(this.Y)throw new A(x,"The client has already been terminated.")}P(e,c,t,n){return this.Z(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,r])=>this.connection.P(e,Tc(c,t),n,a,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===y&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new A(V,e.toString())}))}g(e,c,t,n,a){return this.Z(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.g(e,Tc(c,t),n,r,i,a))).catch((e=>{throw"FirebaseError"===e.name?(e.code===y&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new A(V,e.toString())}))}terminate(){this.Y=!0,this.connection.terminate()}}async function Xc(e,c){const t=v(e),n={writes:c.map((e=>Fc(t.serializer,e)))};await t.P("Commit",t.serializer.databaseId,$.emptyPath(),n)}async function Jc(e,c){const t=v(e),n={documents:c.map((e=>Pc(t.serializer,e)))},a=await t.g("BatchGetDocuments",t.serializer.databaseId,$.emptyPath(),n,c.length),r=new Map;a.forEach((e=>{const c=Dc(t.serializer,e);r.set(c.key.toString(),c)}));const i=[];return c.forEach((e=>{const c=r.get(e.toString());h(!!c),i.push(c)})),i}async function Qc(e,c){const t=v(e),{B:n,parent:a}=Bc(t.serializer,uc(c));return(await t.g("RunQuery",t.serializer.databaseId,a,{structuredQuery:n.structuredQuery})).filter((e=>!!e.document)).map((e=>function(e,c,t){const n=Oc(e,c.name),a=Ec(c.updateTime),r=c.createTime?Ec(c.createTime):Ze.min(),i=new nc({mapValue:{fields:c.fields}}),o=ac.newFoundDocument(n,a,r,i);return t&&o.setHasCommittedMutations(),t?o.setHasCommittedMutations():o}(t.serializer,e.document,void 0)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const et=new Map;function ct(e){if(e._terminated)throw new A(x,"The client has already been terminated.");if(!et.has(e)){u("ComponentProvider","Initializing Datastore");const c=function(e){return new se(e,fetch.bind(null))}(function(e,c,t,n){return new B(e,c,t,n.host,n.ssl,n.experimentalForceLongPolling,n.experimentalAutoDetectLongPolling,Q(n.experimentalLongPollingOptions),n.useFetchStreams)}
/**
      * @license
      * Copyright 2018 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */(e._databaseId,e.app.options.appId||"",e._persistenceKey,e._freezeSettings())),t=Yc(e._databaseId),n=function(e,c,t,n){return new Zc(e,c,t,n)}(e._authCredentials,e._appCheckCredentials,c,t);et.set(e,n)}return et.get(e)}class tt{constructor(e){var c,t;if(void 0===e.host){if(void 0!==e.ssl)throw new A(C,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(c=e.ssl)||void 0===c||c;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new A(C,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}!function(e,c,t,n){if(!0===c&&!0===n)throw new A(C,`${e} and ${t} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Q(null!==(t=e.experimentalLongPollingOptions)&&void 0!==t?t:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new A(C,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new A(C,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new A(C,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
    * @license
    * Copyright 2020 Google LLC
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *   http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,c){return e.timeoutSeconds===c.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class nt{constructor(e,c,t,n){this._authCredentials=e,this._appCheckCredentials=c,this._databaseId=t,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new tt({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new A(x,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new A(x,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tt(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new I;switch(e.type){case"firstParty":return new R(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new A(C,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const c=et.get(e);c&&(u("ComponentProvider","Removing Datastore"),et.delete(e),c.terminate())}(this),Promise.resolve()}}function at(e,c){const t="object"==typeof e?e:(0,n.WE)(),a="string"==typeof e?e:c||"(default)",r=(0,n.U5)(t,"firestore/lite").getImmediate({identifier:a});if(!r._initialized){const e=(0,i.on)("firestore");e&&rt(r,...e)}return r}function rt(e,c,t,n={}){var a;const r=(e=J(e,nt))._getSettings(),s=`${c}:${t}`;if("firestore.googleapis.com"!==r.host&&r.host!==s&&d("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},r),{host:s,ssl:!1})),n.mockUserToken){let c,t;if("string"==typeof n.mockUserToken)c=n.mockUserToken,t=o.MOCK_USER;else{c=(0,i.YD)(n.mockUserToken,null===(a=e._app)||void 0===a?void 0:a.options.projectId);const r=n.mockUserToken.sub||n.mockUserToken.user_id;if(!r)throw new A(C,"mockUserToken must contain 'sub' or 'user_id' field!");t=new o(r)}e._authCredentials=new T(new E(c,t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class it{constructor(e,c,t){this.converter=c,this._query=t,this.type="query",this.firestore=e}withConverter(e){return new it(this.firestore,e,this._query)}}class ot{constructor(e,c,t){this.converter=c,this._key=t,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new st(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ot(this.firestore,e,this._key)}}class st extends it{constructor(e,c,t){super(e,c,function(e){return new oc(e)}(t)),this._path=t,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new G(e))}withConverter(e){return new st(this.firestore,e,this._path)}}function lt(e,c,...t){if(e=(0,i.Yj)(e),W("collection","path",c),e instanceof nt){const n=$.fromString(c,...t);return Z(n),new st(e,null,n)}{if(!(e instanceof ot||e instanceof st))throw new A(C,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=e._path.child($.fromString(c,...t));return Z(n),new st(e.firestore,null,n)}}function ut(e,c,...t){if(e=(0,i.Yj)(e),1===arguments.length&&(c=ue.newId()),W("doc","path",c),e instanceof nt){const n=$.fromString(c,...t);return Y(n),new ot(e,null,new G(n))}{if(!(e instanceof ot||e instanceof st))throw new A(C,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=e._path.child($.fromString(c,...t));return Y(n),new ot(e.firestore,e instanceof st?e.converter:null,new G(n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ft{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ft(ve.fromBase64String(e))}catch(e){throw new A(C,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new ft(ve.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(...e){for(let c=0;c<e.length;++c)if(0===e[c].length)throw new A(C,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new q(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mt{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,c){if(!isFinite(e)||e<-90||e>90)throw new A(C,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(c)||c<-180||c>180)throw new A(C,"Longitude must be a number between -180 and 180, but was: "+c);this._lat=e,this._long=c}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return fe(this._lat,e._lat)||fe(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht=/^__.*__$/;class vt{constructor(e,c,t){this.data=e,this.fieldMask=c,this.fieldTransforms=t}toMutation(e,c){return null!==this.fieldMask?new bc(e,this.data,this.fieldMask,c,this.fieldTransforms):new Mc(e,this.data,c,this.fieldTransforms)}}class gt{constructor(e,c,t){this.data=e,this.fieldMask=c,this.fieldTransforms=t}toMutation(e,c){return new bc(e,this.data,this.fieldMask,c,this.fieldTransforms)}}function zt(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw p()}}class Vt{constructor(e,c,t,n,a,r){this.settings=e,this.databaseId=c,this.serializer=t,this.ignoreUndefinedProperties=n,void 0===a&&this.tt(),this.fieldTransforms=a||[],this.fieldMask=r||[]}get path(){return this.settings.path}get et(){return this.settings.et}rt(e){return new Vt(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}nt(e){var c;const t=null===(c=this.path)||void 0===c?void 0:c.child(e),n=this.rt({path:t,it:!1});return n.st(e),n}ot(e){var c;const t=null===(c=this.path)||void 0===c?void 0:c.child(e),n=this.rt({path:t,it:!1});return n.tt(),n}ut(e){return this.rt({path:void 0,it:!0})}_t(e){return Ot(e,this.settings.methodName,this.settings.ct||!1,this.path,this.settings.lt)}contains(e){return void 0!==this.fieldMask.find((c=>e.isPrefixOf(c)))||void 0!==this.fieldTransforms.find((c=>e.isPrefixOf(c.field)))}tt(){if(this.path)for(let e=0;e<this.path.length;e++)this.st(this.path.get(e))}st(e){if(0===e.length)throw this._t("Document fields must not be empty");if(zt(this.et)&&ht.test(e))throw this._t('Document fields cannot begin and end with "__"')}}class Ct{constructor(e,c,t){this.databaseId=e,this.ignoreUndefinedProperties=c,this.serializer=t||Yc(e)}ht(e,c,t,n=!1){return new Vt({et:e,methodName:c,lt:t,path:q.emptyPath(),it:!1,ct:n},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ht(e){const c=e._freezeSettings(),t=Yc(e._databaseId);return new Ct(e._databaseId,!!c.ignoreUndefinedProperties,t)}function Mt(e,c,t,n,a,r={}){const i=e.ht(r.merge||r.mergeFields?2:0,c,t,a);Et("Data must be an object, but it was:",i,n);const o=_t(n,i);let s,l;if(r.merge)s=new tc(i.fieldMask),l=i.fieldTransforms;else if(r.mergeFields){const e=[];for(const n of r.mergeFields){const a=It(c,n,t);if(!i.contains(a))throw new A(C,`Field '${a}' is specified in your field mask but missing from your input data.`);Rt(e,a)||e.push(a)}s=new tc(e),l=i.fieldTransforms.filter((e=>s.covers(e.field)))}else s=null,l=i.fieldTransforms;return new vt(new nc(o),s,l)}class bt extends mt{_toFieldTransform(e){if(2!==e.et)throw 1===e.et?e._t(`${this._methodName}() can only appear at the top level of your update data`):e._t(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof bt}}function yt(e,c,t){return new Vt({et:3,lt:c.settings.lt,methodName:e._methodName,it:t},c.databaseId,c.serializer,c.ignoreUndefinedProperties)}class Lt extends mt{constructor(e,c){super(e),this.dt=c}_toFieldTransform(e){const c=yt(this,e,!0),t=this.dt.map((e=>Nt(e,c))),n=new vc(t);return new Vc(e.path,n)}isEqual(e){return e instanceof Lt&&(0,i.IN)(this.dt,e.dt)}}class xt extends mt{constructor(e,c){super(e),this.dt=c}_toFieldTransform(e){const c=yt(this,e,!0),t=this.dt.map((e=>Nt(e,c))),n=new gc(t);return new Vc(e.path,n)}isEqual(e){return e instanceof xt&&(0,i.IN)(this.dt,e.dt)}}function St(e,c,t,n){const a=e.ht(1,c,t);Et("Data must be an object, but it was:",a,n);const r=[],o=nc.empty();pe(n,((e,n)=>{const s=Pt(c,e,t);n=(0,i.Yj)(n);const l=a.ot(s);if(n instanceof bt)r.push(s);else{const e=Nt(n,l);null!=e&&(r.push(s),o.set(s,e))}}));const s=new tc(r);return new gt(o,s,a.fieldTransforms)}function wt(e,c,t,n,a,r){const o=e.ht(1,c,t),s=[It(c,n,t)],l=[a];if(r.length%2!=0)throw new A(C,`Function ${c}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let i=0;i<r.length;i+=2)s.push(It(c,r[i])),l.push(r[i+1]);const u=[],f=nc.empty();for(let m=s.length-1;m>=0;--m)if(!Rt(u,s[m])){const e=s[m];let c=l[m];c=(0,i.Yj)(c);const t=o.ot(e);if(c instanceof bt)u.push(e);else{const n=Nt(c,t);null!=n&&(u.push(e),f.set(e,n))}}const d=new tc(u);return new gt(f,d,o.fieldTransforms)}function kt(e,c,t,n=!1){return Nt(t,e.ht(n?4:3,c))}function Nt(e,c){if(At(e=(0,i.Yj)(e)))return Et("Unsupported field value:",c,e),_t(e,c);if(e instanceof mt)return function(e,c){if(!zt(c.et))throw c._t(`${e._methodName}() can only be used with update() and set()`);if(!c.path)throw c._t(`${e._methodName}() is not currently supported inside arrays`);const t=e._toFieldTransform(c);t&&c.fieldTransforms.push(t)}(e,c),null;if(void 0===e&&c.ignoreUndefinedProperties)return null;if(c.path&&c.fieldMask.push(c.path),e instanceof Array){if(c.settings.it&&4!==c.et)throw c._t("Nested arrays are not supported");return function(e,c){const t=[];let n=0;for(const a of e){let e=Nt(a,c.ut(n));null==e&&(e={nullValue:"NULL_VALUE"}),t.push(e),n++}return{arrayValue:{values:t}}}(e,c)}return function(e,c){if(null===(e=(0,i.Yj)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return mc(c.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const t=He.fromDate(e);return{timestampValue:Nc(c.serializer,t)}}if(e instanceof He){const t=new He(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Nc(c.serializer,t)}}if(e instanceof pt)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof ft)return{bytesValue:_c(c.serializer,e._byteString)};if(e instanceof ot){const t=c.databaseId,n=e.firestore._databaseId;if(!n.isEqual(t))throw c._t(`Document reference is for database ${n.projectId}/${n.database} but should be for database ${t.projectId}/${t.database}`);return{referenceValue:Ic(e.firestore._databaseId||c.databaseId,e._key.path)}}throw c._t(`Unsupported field value: ${X(e)}`)}(e,c)}function _t(e,c){const t={};return function(e){for(const c in e)if(Object.prototype.hasOwnProperty.call(e,c))return!1;return!0}(e)?c.path&&c.path.length>0&&c.fieldMask.push(c.path):pe(e,((e,n)=>{const a=Nt(n,c.nt(e));null!=a&&(t[e]=a)})),{mapValue:{fields:t}}}function At(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof He||e instanceof pt||e instanceof ft||e instanceof ot||e instanceof mt)}function Et(e,c,t){if(!At(t)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(t)){const n=X(t);throw"an object"===n?c._t(e+" a custom object"):c._t(e+" "+n)}}function It(e,c,t){if((c=(0,i.Yj)(c))instanceof dt)return c._internalPath;if("string"==typeof c)return Pt(e,c);throw Ot("Field path arguments must be of type string or ",e,!1,void 0,t)}const Tt=new RegExp("[~\\*/\\[\\]]");function Pt(e,c,t){if(c.search(Tt)>=0)throw Ot(`Invalid field path (${c}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,t);try{return new dt(...c.split("."))._internalPath}catch(n){throw Ot(`Invalid field path (${c}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,t)}}function Ot(e,c,t,n,a){const r=n&&!n.isEmpty(),i=void 0!==a;let o=`Function ${c}() called with invalid data`;t&&(o+=" (via `toFirestore()`)"),o+=". ";let s="";return(r||i)&&(s+=" (found",r&&(s+=` in field ${n}`),i&&(s+=` in document ${a}`),s+=")"),new A(C,o+e+s)}function Rt(e,c){return e.some((e=>e.isEqual(c)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,c,t,n,a){this._firestore=e,this._userDataWriter=c,this._key=t,this._document=n,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Ft(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const c=this._document.data.field(Kt("DocumentSnapshot.get",e));if(null!==c)return this._userDataWriter.convertValue(c)}}}class Ft extends Dt{data(){return super.data()}}class Bt{constructor(e,c){this._docs=c,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return 0===this.docs.length}forEach(e,c){this._docs.forEach(e,c)}}function Kt(e,c){return"string"==typeof c?Pt(e,c):c instanceof dt?c._internalPath:c._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{}class $t extends Ut{}function jt(e,c,...t){let n=[];c instanceof Ut&&n.push(c),n=n.concat(t),function(e){const c=e.filter((e=>e instanceof Wt)).length,t=e.filter((e=>e instanceof qt)).length;if(c>1||c>0&&t>0)throw new A(C,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */(n);for(const a of n)e=a._apply(e);return e}class qt extends $t{constructor(e,c,t){super(),this._field=e,this._op=c,this._value=t,this.type="where"}static _create(e,c,t){return new qt(e,c,t)}_apply(e){const c=this._parse(e);return Xt(e._query,c),new it(e.firestore,e.converter,dc(e._query,c))}_parse(e){const c=Ht(e.firestore),t=function(e,c,t,n,a,r,i){let o;if(a.isKeyField()){if("array-contains"===r||"array-contains-any"===r)throw new A(C,`Invalid Query. You can't perform '${r}' queries on documentId().`);if("in"===r||"not-in"===r){Zt(i,r);const c=[];for(const t of i)c.push(Yt(n,e,t));o={arrayValue:{values:c}}}else o=Yt(n,e,i)}else"in"!==r&&"not-in"!==r&&"array-contains-any"!==r||Zt(i,r),o=kt(t,c,i,"in"===r||"not-in"===r);return De.create(a,r,o)}(e._query,"where",c,e.firestore._databaseId,this._field,this._op,this._value);return t}}function Gt(e,c,t){const n=c,a=Kt("where",e);return qt._create(a,n,t)}class Wt extends Ut{constructor(e,c){super(),this.type=e,this._queryConstraints=c}static _create(e,c){return new Wt(e,c)}_parse(e){const c=this._queryConstraints.map((c=>c._parse(e))).filter((e=>e.getFilters().length>0));return 1===c.length?c[0]:Fe.create(c,this._getOperator())}_apply(e){const c=this._parse(e);return 0===c.getFilters().length?e:(function(e,c){let t=e;const n=c.getFlattenedFilters();for(const a of n)Xt(t,a),t=dc(t,a)}(e._query,c),new it(e.firestore,e.converter,dc(e._query,c)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function Yt(e,c,t){if("string"==typeof(t=(0,i.Yj)(t))){if(""===t)throw new A(C,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!sc(c)&&-1!==t.indexOf("/"))throw new A(C,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=c.path.child($.fromString(t));if(!G.isDocumentKey(n))throw new A(C,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return _e(e,new G(n))}if(t instanceof ot)return _e(e,t._key);throw new A(C,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${X(t)}.`)}function Zt(e,c){if(!Array.isArray(e)||0===e.length)throw new A(C,`Invalid Query. A non-empty array is required for '${c.toString()}' filters.`)}function Xt(e,c){const t=function(e,c){for(const t of e)for(const e of t.getFlattenedFilters())if(c.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(c.op));if(null!==t)throw t===c.op?new A(C,`Invalid query. You cannot use more than one '${c.op.toString()}' filter.`):new A(C,`Invalid query. You cannot use '${c.op.toString()}' filters with '${t.toString()}' filters.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Jt(e,c,t){let n;return n=e?t&&(t.merge||t.mergeFields)?e.toFirestore(c,t):e.toFirestore(c):c,n}class Qt extends class{convertValue(e,c="none"){switch(xe(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,c);case 5:return e.stringValue;case 6:return this.convertBytes(Ce(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,c);case 10:return this.convertObject(e.mapValue,c);default:throw p()}}convertObject(e,c){return this.convertObjectMap(e.fields,c)}convertObjectMap(e,c="none"){const t={};return pe(e,((e,n)=>{t[e]=this.convertValue(n,c)})),t}convertGeoPoint(e){return new pt(Ve(e.latitude),Ve(e.longitude))}convertArray(e,c){return(e.values||[]).map((e=>this.convertValue(e,c)))}convertServerTimestamp(e,c){switch(c){case"previous":const t=be(e);return null==t?null:this.convertValue(t,c);case"estimate":return this.convertTimestamp(ye(e));default:return null}}convertTimestamp(e){const c=ze(e);return new He(c.seconds,c.nanos)}convertDocumentKey(e,c){const t=$.fromString(e);h(Wc(t));const n=new K(t.get(1),t.get(3)),a=new G(t.popFirst(5));return n.isEqual(c)||f(`Document ${a} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${c.projectId}/${c.database}) instead.`),a}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new ft(e)}convertReference(e){const c=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,c)}}function en(e){const c=ct((e=J(e,ot)).firestore),t=new Qt(e.firestore);return Jc(c,[e._key]).then((c=>{h(1===c.length);const n=c[0];return new Dt(e.firestore,t,e._key,n.isFoundDocument()?n:null,e.converter)}))}function cn(e){(function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new A(k,"limitToLast() queries require specifying at least one orderBy() clause")})((e=J(e,it))._query);const c=ct(e.firestore),t=new Qt(e.firestore);return Qc(c,e._query).then((c=>{const n=c.map((c=>new Ft(e.firestore,t,c.key,c,e.converter)));return"L"===e._query.limitType&&n.reverse(),new Bt(e,n)}))}function tn(e,c,t){const n=Jt((e=J(e,ot)).converter,c,t),a=Mt(Ht(e.firestore),"setDoc",e._key,n,null!==e.converter,t);return Xc(ct(e.firestore),[a.toMutation(e._key,Cc.none())])}function nn(e,c,t,...n){const a=Ht((e=J(e,ot)).firestore);let r;return r="string"==typeof(c=(0,i.Yj)(c))||c instanceof dt?wt(a,"updateDoc",e._key,c,t,n):St(a,"updateDoc",e._key,c),Xc(ct(e.firestore),[r.toMutation(e._key,Cc.exists(!0))])}function an(e){return Xc(ct((e=J(e,ot)).firestore),[new yc(e._key,Cc.none())])}function rn(e,c){const t=ut(e=J(e,st)),n=Jt(e.converter,c),a=Mt(Ht(e.firestore),"addDoc",t._key,n,null!==t.converter,{});return Xc(ct(e.firestore),[a.toMutation(t._key,Cc.exists(!1))]).then((()=>t))}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(...e){return new Lt("arrayUnion",e)}function sn(...e){return new xt("arrayRemove",e)}!function(){!function(e){s=e}(`${n.Sg}_lite`),(0,n.q4)(new a.Yl("firestore/lite",((e,{instanceIdentifier:c,options:t})=>{const n=e.getProvider("app").getImmediate(),a=new nt(new P(e.getProvider("auth-internal")),new F(e.getProvider("app-check-internal")),function(e,c){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new A(C,'"projectId" not provided in firebase.initializeApp.');return new K(e.options.projectId,c)}
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */(n,c),n);return t&&a._setSettings(t),a}),"PUBLIC").setMultipleInstances(!0)),(0,n.Kk)("firestore-lite","4.4.2",""),(0,n.Kk)("firestore-lite","4.4.2","esm2017")}()},3616:function(e,c,t){t.d(c,{ae:function(){return en}});t(3248);
/*!
  * shared v9.9.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const n="undefined"!==typeof window;const a=(e,c=!1)=>c?Symbol.for(e):Symbol(e),r=(e,c,t)=>i({l:e,k:c,s:t}),i=e=>JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),o=e=>"number"===typeof e&&isFinite(e),s=e=>"[object Date]"===y(e),l=e=>"[object RegExp]"===y(e),u=e=>L(e)&&0===Object.keys(e).length,f=Object.assign;let d;const m=()=>d||(d="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof global?global:{});function p(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const h=Object.prototype.hasOwnProperty;function v(e,c){return h.call(e,c)}const g=Array.isArray,z=e=>"function"===typeof e,V=e=>"string"===typeof e,C=e=>"boolean"===typeof e,H=e=>null!==e&&"object"===typeof e,M=e=>H(e)&&z(e.then)&&z(e.catch),b=Object.prototype.toString,y=e=>b.call(e),L=e=>{if(!H(e))return!1;const c=Object.getPrototypeOf(e);return null===c||c.constructor===Object},x=e=>null==e?"":g(e)||L(e)&&e.toString===b?JSON.stringify(e,null,2):String(e);function S(e,c=""){return e.reduce(((e,t,n)=>0===n?e+t:e+c+t),"")}function w(e){let c=e;return()=>++c}function k(e,c){"undefined"!==typeof console&&(console.warn("[intlify] "+e),c&&console.warn(c.stack))}const N=e=>!H(e)||g(e);function _(e,c){if(N(e)||N(c))throw new Error("Invalid value");const t=[{src:e,des:c}];while(t.length){const{src:e,des:c}=t.pop();Object.keys(e).forEach((n=>{N(e[n])||N(c[n])?c[n]=e[n]:t.push({src:e[n],des:c[n]})}))}}function A(e,c,t){return{line:e,column:c,offset:t}}function E(e,c,t){const n={start:e,end:c};return null!=t&&(n.source=t),n}const I=/\{([0-9a-zA-Z]+)\}/g;function T(e,...c){return 1===c.length&&R(c[0])&&(c=c[0]),c&&c.hasOwnProperty||(c={}),e.replace(I,((e,t)=>c.hasOwnProperty(t)?c[t]:""))}const P=Object.assign,O=e=>"string"===typeof e,R=e=>null!==e&&"object"===typeof e;function D(e,c=""){return e.reduce(((e,t,n)=>0===n?e+t:e+c+t),"")}const F={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,UNHANDLED_CODEGEN_NODE_TYPE:15,UNHANDLED_MINIFIER_NODE_TYPE:16,__EXTEND_POINT__:17},B={[F.EXPECTED_TOKEN]:"Expected token: '{0}'",[F.INVALID_TOKEN_IN_PLACEHOLDER]:"Invalid token in placeholder: '{0}'",[F.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]:"Unterminated single quote in placeholder",[F.UNKNOWN_ESCAPE_SEQUENCE]:"Unknown escape sequence: \\{0}",[F.INVALID_UNICODE_ESCAPE_SEQUENCE]:"Invalid unicode escape sequence: {0}",[F.UNBALANCED_CLOSING_BRACE]:"Unbalanced closing brace",[F.UNTERMINATED_CLOSING_BRACE]:"Unterminated closing brace",[F.EMPTY_PLACEHOLDER]:"Empty placeholder",[F.NOT_ALLOW_NEST_PLACEHOLDER]:"Not allowed nest placeholder",[F.INVALID_LINKED_FORMAT]:"Invalid linked format",[F.MUST_HAVE_MESSAGES_IN_PLURAL]:"Plural must have messages",[F.UNEXPECTED_EMPTY_LINKED_MODIFIER]:"Unexpected empty linked modifier",[F.UNEXPECTED_EMPTY_LINKED_KEY]:"Unexpected empty linked key",[F.UNEXPECTED_LEXICAL_ANALYSIS]:"Unexpected lexical analysis in token: '{0}'",[F.UNHANDLED_CODEGEN_NODE_TYPE]:"unhandled codegen node type: '{0}'",[F.UNHANDLED_MINIFIER_NODE_TYPE]:"unhandled mimifier node type: '{0}'"};function K(e,c,t={}){const{domain:n,messages:a,args:r}=t,i=T((a||B)[e]||"",...r||[]),o=new SyntaxError(String(i));return o.code=e,c&&(o.location=c),o.domain=n,o}function U(e){throw e}const $=" ",j="\r",q="\n",G=String.fromCharCode(8232),W=String.fromCharCode(8233);function Y(e){const c=e;let t=0,n=1,a=1,r=0;const i=e=>c[e]===j&&c[e+1]===q,o=e=>c[e]===q,s=e=>c[e]===W,l=e=>c[e]===G,u=e=>i(e)||o(e)||s(e)||l(e),f=()=>t,d=()=>n,m=()=>a,p=()=>r,h=e=>i(e)||s(e)||l(e)?q:c[e],v=()=>h(t),g=()=>h(t+r);function z(){return r=0,u(t)&&(n++,a=0),i(t)&&t++,t++,a++,c[t]}function V(){return i(t+r)&&r++,r++,c[t+r]}function C(){t=0,n=1,a=1,r=0}function H(e=0){r=e}function M(){const e=t+r;while(e!==t)z();r=0}return{index:f,line:d,column:m,peekOffset:p,charAt:h,currentChar:v,currentPeek:g,next:z,peek:V,reset:C,resetPeek:H,skipToPeek:M}}const Z=void 0,X=".",J="'",Q="tokenizer";function ee(e,c={}){const t=!1!==c.location,n=Y(e),a=()=>n.index(),r=()=>A(n.line(),n.column(),n.index()),i=r(),o=a(),s={currentType:14,offset:o,startLoc:i,endLoc:i,lastType:14,lastOffset:o,lastStartLoc:i,lastEndLoc:i,braceNest:0,inLinked:!1,text:""},l=()=>s,{onError:u}=c;function f(e,c,n,...a){const r=l();if(c.column+=n,c.offset+=n,u){const n=t?E(r.startLoc,c):null,i=K(e,n,{domain:Q,args:a});u(i)}}function d(e,c,n){e.endLoc=r(),e.currentType=c;const a={type:c};return t&&(a.loc=E(e.startLoc,e.endLoc)),null!=n&&(a.value=n),a}const m=e=>d(e,14);function p(e,c){return e.currentChar()===c?(e.next(),c):(f(F.EXPECTED_TOKEN,r(),0,c),"")}function h(e){let c="";while(e.currentPeek()===$||e.currentPeek()===q)c+=e.currentPeek(),e.peek();return c}function v(e){const c=h(e);return e.skipToPeek(),c}function g(e){if(e===Z)return!1;const c=e.charCodeAt(0);return c>=97&&c<=122||c>=65&&c<=90||95===c}function z(e){if(e===Z)return!1;const c=e.charCodeAt(0);return c>=48&&c<=57}function V(e,c){const{currentType:t}=c;if(2!==t)return!1;h(e);const n=g(e.currentPeek());return e.resetPeek(),n}function C(e,c){const{currentType:t}=c;if(2!==t)return!1;h(e);const n="-"===e.currentPeek()?e.peek():e.currentPeek(),a=z(n);return e.resetPeek(),a}function H(e,c){const{currentType:t}=c;if(2!==t)return!1;h(e);const n=e.currentPeek()===J;return e.resetPeek(),n}function M(e,c){const{currentType:t}=c;if(8!==t)return!1;h(e);const n="."===e.currentPeek();return e.resetPeek(),n}function b(e,c){const{currentType:t}=c;if(9!==t)return!1;h(e);const n=g(e.currentPeek());return e.resetPeek(),n}function y(e,c){const{currentType:t}=c;if(8!==t&&12!==t)return!1;h(e);const n=":"===e.currentPeek();return e.resetPeek(),n}function L(e,c){const{currentType:t}=c;if(10!==t)return!1;const n=()=>{const c=e.currentPeek();return"{"===c?g(e.peek()):!("@"===c||"%"===c||"|"===c||":"===c||"."===c||c===$||!c)&&(c===q?(e.peek(),n()):g(c))},a=n();return e.resetPeek(),a}function x(e){h(e);const c="|"===e.currentPeek();return e.resetPeek(),c}function S(e){const c=h(e),t="%"===e.currentPeek()&&"{"===e.peek();return e.resetPeek(),{isModulo:t,hasSpace:c.length>0}}function w(e,c=!0){const t=(c=!1,n="",a=!1)=>{const r=e.currentPeek();return"{"===r?"%"!==n&&c:"@"!==r&&r?"%"===r?(e.peek(),t(c,"%",!0)):"|"===r?!("%"!==n&&!a)||!(n===$||n===q):r===$?(e.peek(),t(!0,$,a)):r!==q||(e.peek(),t(!0,q,a)):"%"===n||c},n=t();return c&&e.resetPeek(),n}function k(e,c){const t=e.currentChar();return t===Z?Z:c(t)?(e.next(),t):null}function N(e){const c=e=>{const c=e.charCodeAt(0);return c>=97&&c<=122||c>=65&&c<=90||c>=48&&c<=57||95===c||36===c};return k(e,c)}function _(e){const c=e=>{const c=e.charCodeAt(0);return c>=48&&c<=57};return k(e,c)}function I(e){const c=e=>{const c=e.charCodeAt(0);return c>=48&&c<=57||c>=65&&c<=70||c>=97&&c<=102};return k(e,c)}function T(e){let c="",t="";while(c=_(e))t+=c;return t}function P(e){v(e);const c=e.currentChar();return"%"!==c&&f(F.EXPECTED_TOKEN,r(),0,c),e.next(),"%"}function O(e){let c="";while(1){const t=e.currentChar();if("{"===t||"}"===t||"@"===t||"|"===t||!t)break;if("%"===t){if(!w(e))break;c+=t,e.next()}else if(t===$||t===q)if(w(e))c+=t,e.next();else{if(x(e))break;c+=t,e.next()}else c+=t,e.next()}return c}function R(e){v(e);let c="",t="";while(c=N(e))t+=c;return e.currentChar()===Z&&f(F.UNTERMINATED_CLOSING_BRACE,r(),0),t}function D(e){v(e);let c="";return"-"===e.currentChar()?(e.next(),c+=`-${T(e)}`):c+=T(e),e.currentChar()===Z&&f(F.UNTERMINATED_CLOSING_BRACE,r(),0),c}function B(e){v(e),p(e,"'");let c="",t="";const n=e=>e!==J&&e!==q;while(c=k(e,n))t+="\\"===c?U(e):c;const a=e.currentChar();return a===q||a===Z?(f(F.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,r(),0),a===q&&(e.next(),p(e,"'")),t):(p(e,"'"),t)}function U(e){const c=e.currentChar();switch(c){case"\\":case"'":return e.next(),`\\${c}`;case"u":return j(e,c,4);case"U":return j(e,c,6);default:return f(F.UNKNOWN_ESCAPE_SEQUENCE,r(),0,c),""}}function j(e,c,t){p(e,c);let n="";for(let a=0;a<t;a++){const t=I(e);if(!t){f(F.INVALID_UNICODE_ESCAPE_SEQUENCE,r(),0,`\\${c}${n}${e.currentChar()}`);break}n+=t}return`\\${c}${n}`}function G(e){v(e);let c="",t="";const n=e=>"{"!==e&&"}"!==e&&e!==$&&e!==q;while(c=k(e,n))t+=c;return t}function W(e){let c="",t="";while(c=N(e))t+=c;return t}function ee(e){const c=(t=!1,n)=>{const a=e.currentChar();return"{"!==a&&"%"!==a&&"@"!==a&&"|"!==a&&"("!==a&&")"!==a&&a?a===$?n:a===q||a===X?(n+=a,e.next(),c(t,n)):(n+=a,e.next(),c(!0,n)):n};return c(!1,"")}function ce(e){v(e);const c=p(e,"|");return v(e),c}function te(e,c){let t=null;const n=e.currentChar();switch(n){case"{":return c.braceNest>=1&&f(F.NOT_ALLOW_NEST_PLACEHOLDER,r(),0),e.next(),t=d(c,2,"{"),v(e),c.braceNest++,t;case"}":return c.braceNest>0&&2===c.currentType&&f(F.EMPTY_PLACEHOLDER,r(),0),e.next(),t=d(c,3,"}"),c.braceNest--,c.braceNest>0&&v(e),c.inLinked&&0===c.braceNest&&(c.inLinked=!1),t;case"@":return c.braceNest>0&&f(F.UNTERMINATED_CLOSING_BRACE,r(),0),t=ne(e,c)||m(c),c.braceNest=0,t;default:let n=!0,a=!0,i=!0;if(x(e))return c.braceNest>0&&f(F.UNTERMINATED_CLOSING_BRACE,r(),0),t=d(c,1,ce(e)),c.braceNest=0,c.inLinked=!1,t;if(c.braceNest>0&&(5===c.currentType||6===c.currentType||7===c.currentType))return f(F.UNTERMINATED_CLOSING_BRACE,r(),0),c.braceNest=0,ae(e,c);if(n=V(e,c))return t=d(c,5,R(e)),v(e),t;if(a=C(e,c))return t=d(c,6,D(e)),v(e),t;if(i=H(e,c))return t=d(c,7,B(e)),v(e),t;if(!n&&!a&&!i)return t=d(c,13,G(e)),f(F.INVALID_TOKEN_IN_PLACEHOLDER,r(),0,t.value),v(e),t;break}return t}function ne(e,c){const{currentType:t}=c;let n=null;const a=e.currentChar();switch(8!==t&&9!==t&&12!==t&&10!==t||a!==q&&a!==$||f(F.INVALID_LINKED_FORMAT,r(),0),a){case"@":return e.next(),n=d(c,8,"@"),c.inLinked=!0,n;case".":return v(e),e.next(),d(c,9,".");case":":return v(e),e.next(),d(c,10,":");default:return x(e)?(n=d(c,1,ce(e)),c.braceNest=0,c.inLinked=!1,n):M(e,c)||y(e,c)?(v(e),ne(e,c)):b(e,c)?(v(e),d(c,12,W(e))):L(e,c)?(v(e),"{"===a?te(e,c)||n:d(c,11,ee(e))):(8===t&&f(F.INVALID_LINKED_FORMAT,r(),0),c.braceNest=0,c.inLinked=!1,ae(e,c))}}function ae(e,c){let t={type:14};if(c.braceNest>0)return te(e,c)||m(c);if(c.inLinked)return ne(e,c)||m(c);const n=e.currentChar();switch(n){case"{":return te(e,c)||m(c);case"}":return f(F.UNBALANCED_CLOSING_BRACE,r(),0),e.next(),d(c,3,"}");case"@":return ne(e,c)||m(c);default:if(x(e))return t=d(c,1,ce(e)),c.braceNest=0,c.inLinked=!1,t;const{isModulo:n,hasSpace:a}=S(e);if(n)return a?d(c,0,O(e)):d(c,4,P(e));if(w(e))return d(c,0,O(e));break}return t}function re(){const{currentType:e,offset:c,startLoc:t,endLoc:i}=s;return s.lastType=e,s.lastOffset=c,s.lastStartLoc=t,s.lastEndLoc=i,s.offset=a(),s.startLoc=r(),n.currentChar()===Z?d(s,14):ae(n,s)}return{nextToken:re,currentOffset:a,currentPosition:r,context:l}}const ce="parser",te=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function ne(e,c,t){switch(e){case"\\\\":return"\\";case"\\'":return"'";default:{const e=parseInt(c||t,16);return e<=55295||e>=57344?String.fromCodePoint(e):"�"}}}function ae(e={}){const c=!1!==e.location,{onError:t}=e;function n(e,n,a,r,...i){const o=e.currentPosition();if(o.offset+=r,o.column+=r,t){const e=c?E(a,o):null,r=K(n,e,{domain:ce,args:i});t(r)}}function a(e,t,n){const a={type:e};return c&&(a.start=t,a.end=t,a.loc={start:n,end:n}),a}function r(e,t,n,a){a&&(e.type=a),c&&(e.end=t,e.loc&&(e.loc.end=n))}function i(e,c){const t=e.context(),n=a(3,t.offset,t.startLoc);return n.value=c,r(n,e.currentOffset(),e.currentPosition()),n}function o(e,c){const t=e.context(),{lastOffset:n,lastStartLoc:i}=t,o=a(5,n,i);return o.index=parseInt(c,10),e.nextToken(),r(o,e.currentOffset(),e.currentPosition()),o}function s(e,c){const t=e.context(),{lastOffset:n,lastStartLoc:i}=t,o=a(4,n,i);return o.key=c,e.nextToken(),r(o,e.currentOffset(),e.currentPosition()),o}function l(e,c){const t=e.context(),{lastOffset:n,lastStartLoc:i}=t,o=a(9,n,i);return o.value=c.replace(te,ne),e.nextToken(),r(o,e.currentOffset(),e.currentPosition()),o}function u(e){const c=e.nextToken(),t=e.context(),{lastOffset:i,lastStartLoc:o}=t,s=a(8,i,o);return 12!==c.type?(n(e,F.UNEXPECTED_EMPTY_LINKED_MODIFIER,t.lastStartLoc,0),s.value="",r(s,i,o),{nextConsumeToken:c,node:s}):(null==c.value&&n(e,F.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,re(c)),s.value=c.value||"",r(s,e.currentOffset(),e.currentPosition()),{node:s})}function f(e,c){const t=e.context(),n=a(7,t.offset,t.startLoc);return n.value=c,r(n,e.currentOffset(),e.currentPosition()),n}function d(e){const c=e.context(),t=a(6,c.offset,c.startLoc);let i=e.nextToken();if(9===i.type){const c=u(e);t.modifier=c.node,i=c.nextConsumeToken||e.nextToken()}switch(10!==i.type&&n(e,F.UNEXPECTED_LEXICAL_ANALYSIS,c.lastStartLoc,0,re(i)),i=e.nextToken(),2===i.type&&(i=e.nextToken()),i.type){case 11:null==i.value&&n(e,F.UNEXPECTED_LEXICAL_ANALYSIS,c.lastStartLoc,0,re(i)),t.key=f(e,i.value||"");break;case 5:null==i.value&&n(e,F.UNEXPECTED_LEXICAL_ANALYSIS,c.lastStartLoc,0,re(i)),t.key=s(e,i.value||"");break;case 6:null==i.value&&n(e,F.UNEXPECTED_LEXICAL_ANALYSIS,c.lastStartLoc,0,re(i)),t.key=o(e,i.value||"");break;case 7:null==i.value&&n(e,F.UNEXPECTED_LEXICAL_ANALYSIS,c.lastStartLoc,0,re(i)),t.key=l(e,i.value||"");break;default:n(e,F.UNEXPECTED_EMPTY_LINKED_KEY,c.lastStartLoc,0);const u=e.context(),d=a(7,u.offset,u.startLoc);return d.value="",r(d,u.offset,u.startLoc),t.key=d,r(t,u.offset,u.startLoc),{nextConsumeToken:i,node:t}}return r(t,e.currentOffset(),e.currentPosition()),{node:t}}function m(e){const c=e.context(),t=1===c.currentType?e.currentOffset():c.offset,u=1===c.currentType?c.endLoc:c.startLoc,f=a(2,t,u);f.items=[];let m=null;do{const t=m||e.nextToken();switch(m=null,t.type){case 0:null==t.value&&n(e,F.UNEXPECTED_LEXICAL_ANALYSIS,c.lastStartLoc,0,re(t)),f.items.push(i(e,t.value||""));break;case 6:null==t.value&&n(e,F.UNEXPECTED_LEXICAL_ANALYSIS,c.lastStartLoc,0,re(t)),f.items.push(o(e,t.value||""));break;case 5:null==t.value&&n(e,F.UNEXPECTED_LEXICAL_ANALYSIS,c.lastStartLoc,0,re(t)),f.items.push(s(e,t.value||""));break;case 7:null==t.value&&n(e,F.UNEXPECTED_LEXICAL_ANALYSIS,c.lastStartLoc,0,re(t)),f.items.push(l(e,t.value||""));break;case 8:const a=d(e);f.items.push(a.node),m=a.nextConsumeToken||null;break}}while(14!==c.currentType&&1!==c.currentType);const p=1===c.currentType?c.lastOffset:e.currentOffset(),h=1===c.currentType?c.lastEndLoc:e.currentPosition();return r(f,p,h),f}function p(e,c,t,i){const o=e.context();let s=0===i.items.length;const l=a(1,c,t);l.cases=[],l.cases.push(i);do{const c=m(e);s||(s=0===c.items.length),l.cases.push(c)}while(14!==o.currentType);return s&&n(e,F.MUST_HAVE_MESSAGES_IN_PLURAL,t,0),r(l,e.currentOffset(),e.currentPosition()),l}function h(e){const c=e.context(),{offset:t,startLoc:n}=c,a=m(e);return 14===c.currentType?a:p(e,t,n,a)}function v(t){const i=ee(t,P({},e)),o=i.context(),s=a(0,o.offset,o.startLoc);return c&&s.loc&&(s.loc.source=t),s.body=h(i),e.onCacheKey&&(s.cacheKey=e.onCacheKey(t)),14!==o.currentType&&n(i,F.UNEXPECTED_LEXICAL_ANALYSIS,o.lastStartLoc,0,t[o.offset]||""),r(s,i.currentOffset(),i.currentPosition()),s}return{parse:v}}function re(e){if(14===e.type)return"EOF";const c=(e.value||"").replace(/\r?\n/gu,"\\n");return c.length>10?c.slice(0,9)+"…":c}function ie(e,c={}){const t={ast:e,helpers:new Set},n=()=>t,a=e=>(t.helpers.add(e),e);return{context:n,helper:a}}function oe(e,c){for(let t=0;t<e.length;t++)se(e[t],c)}function se(e,c){switch(e.type){case 1:oe(e.cases,c),c.helper("plural");break;case 2:oe(e.items,c);break;case 6:const t=e;se(t.key,c),c.helper("linked"),c.helper("type");break;case 5:c.helper("interpolate"),c.helper("list");break;case 4:c.helper("interpolate"),c.helper("named");break}}function le(e,c={}){const t=ie(e);t.helper("normalize"),e.body&&se(e.body,t);const n=t.context();e.helpers=Array.from(n.helpers)}function ue(e){const c=e.body;return 2===c.type?fe(c):c.cases.forEach((e=>fe(e))),e}function fe(e){if(1===e.items.length){const c=e.items[0];3!==c.type&&9!==c.type||(e.static=c.value,delete c.value)}else{const c=[];for(let t=0;t<e.items.length;t++){const n=e.items[t];if(3!==n.type&&9!==n.type)break;if(null==n.value)break;c.push(n.value)}if(c.length===e.items.length){e.static=D(c);for(let c=0;c<e.items.length;c++){const t=e.items[c];3!==t.type&&9!==t.type||delete t.value}}}}const de="minifier";function me(e){switch(e.t=e.type,e.type){case 0:const c=e;me(c.body),c.b=c.body,delete c.body;break;case 1:const t=e,n=t.cases;for(let e=0;e<n.length;e++)me(n[e]);t.c=n,delete t.cases;break;case 2:const a=e,r=a.items;for(let e=0;e<r.length;e++)me(r[e]);a.i=r,delete a.items,a.static&&(a.s=a.static,delete a.static);break;case 3:case 9:case 8:case 7:const i=e;i.value&&(i.v=i.value,delete i.value);break;case 6:const o=e;me(o.key),o.k=o.key,delete o.key,o.modifier&&(me(o.modifier),o.m=o.modifier,delete o.modifier);break;case 5:const s=e;s.i=s.index,delete s.index;break;case 4:const l=e;l.k=l.key,delete l.key;break;default:throw K(F.UNHANDLED_MINIFIER_NODE_TYPE,null,{domain:de,args:[e.type]})}delete e.type}const pe="parser";function he(e,c){const{sourceMap:t,filename:n,breakLineCode:a,needIndent:r}=c,i=!1!==c.location,o={filename:n,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:a,needIndent:r,indentLevel:0};i&&e.loc&&(o.source=e.loc.source);const s=()=>o;function l(e,c){o.code+=e}function u(e,c=!0){const t=c?a:"";l(r?t+"  ".repeat(e):t)}function f(e=!0){const c=++o.indentLevel;e&&u(c)}function d(e=!0){const c=--o.indentLevel;e&&u(c)}function m(){u(o.indentLevel)}const p=e=>`_${e}`,h=()=>o.needIndent;return{context:s,push:l,indent:f,deindent:d,newline:m,helper:p,needIndent:h}}function ve(e,c){const{helper:t}=e;e.push(`${t("linked")}(`),Ce(e,c.key),c.modifier?(e.push(", "),Ce(e,c.modifier),e.push(", _type")):e.push(", undefined, _type"),e.push(")")}function ge(e,c){const{helper:t,needIndent:n}=e;e.push(`${t("normalize")}([`),e.indent(n());const a=c.items.length;for(let r=0;r<a;r++){if(Ce(e,c.items[r]),r===a-1)break;e.push(", ")}e.deindent(n()),e.push("])")}function ze(e,c){const{helper:t,needIndent:n}=e;if(c.cases.length>1){e.push(`${t("plural")}([`),e.indent(n());const a=c.cases.length;for(let t=0;t<a;t++){if(Ce(e,c.cases[t]),t===a-1)break;e.push(", ")}e.deindent(n()),e.push("])")}}function Ve(e,c){c.body?Ce(e,c.body):e.push("null")}function Ce(e,c){const{helper:t}=e;switch(c.type){case 0:Ve(e,c);break;case 1:ze(e,c);break;case 2:ge(e,c);break;case 6:ve(e,c);break;case 8:e.push(JSON.stringify(c.value),c);break;case 7:e.push(JSON.stringify(c.value),c);break;case 5:e.push(`${t("interpolate")}(${t("list")}(${c.index}))`,c);break;case 4:e.push(`${t("interpolate")}(${t("named")}(${JSON.stringify(c.key)}))`,c);break;case 9:e.push(JSON.stringify(c.value),c);break;case 3:e.push(JSON.stringify(c.value),c);break;default:throw K(F.UNHANDLED_CODEGEN_NODE_TYPE,null,{domain:pe,args:[c.type]})}}const He=(e,c={})=>{const t=O(c.mode)?c.mode:"normal",n=O(c.filename)?c.filename:"message.intl",a=!!c.sourceMap,r=null!=c.breakLineCode?c.breakLineCode:"arrow"===t?";":"\n",i=c.needIndent?c.needIndent:"arrow"!==t,o=e.helpers||[],s=he(e,{mode:t,filename:n,sourceMap:a,breakLineCode:r,needIndent:i});s.push("normal"===t?"function __msg__ (ctx) {":"(ctx) => {"),s.indent(i),o.length>0&&(s.push(`const { ${D(o.map((e=>`${e}: _${e}`)),", ")} } = ctx`),s.newline()),s.push("return "),Ce(s,e),s.deindent(i),s.push("}"),delete e.helpers;const{code:l,map:u}=s.context();return{ast:e,code:l,map:u?u.toJSON():void 0}};function Me(e,c={}){const t=P({},c),n=!!t.jit,a=!!t.minify,r=null==t.optimize||t.optimize,i=ae(t),o=i.parse(e);return n?(r&&ue(o),a&&me(o),{ast:o,code:""}):(le(o,t),He(o,t))}
/*!
  * core-base v9.9.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function be(){"boolean"!==typeof __INTLIFY_PROD_DEVTOOLS__&&(m().__INTLIFY_PROD_DEVTOOLS__=!1),"boolean"!==typeof __INTLIFY_JIT_COMPILATION__&&(m().__INTLIFY_JIT_COMPILATION__=!1),"boolean"!==typeof __INTLIFY_DROP_MESSAGE_COMPILER__&&(m().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}const ye=[];ye[0]={["w"]:[0],["i"]:[3,0],["["]:[4],["o"]:[7]},ye[1]={["w"]:[1],["."]:[2],["["]:[4],["o"]:[7]},ye[2]={["w"]:[2],["i"]:[3,0],["0"]:[3,0]},ye[3]={["i"]:[3,0],["0"]:[3,0],["w"]:[1,1],["."]:[2,1],["["]:[4,1],["o"]:[7,1]},ye[4]={["'"]:[5,0],['"']:[6,0],["["]:[4,2],["]"]:[1,3],["o"]:8,["l"]:[4,0]},ye[5]={["'"]:[4,0],["o"]:8,["l"]:[5,0]},ye[6]={['"']:[4,0],["o"]:8,["l"]:[6,0]};const Le=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function xe(e){return Le.test(e)}function Se(e){const c=e.charCodeAt(0),t=e.charCodeAt(e.length-1);return c!==t||34!==c&&39!==c?e:e.slice(1,-1)}function we(e){if(void 0===e||null===e)return"o";const c=e.charCodeAt(0);switch(c){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function ke(e){const c=e.trim();return("0"!==e.charAt(0)||!isNaN(parseInt(e)))&&(xe(c)?Se(c):"*"+c)}function Ne(e){const c=[];let t,n,a,r,i,o,s,l=-1,u=0,f=0;const d=[];function m(){const c=e[l+1];if(5===u&&"'"===c||6===u&&'"'===c)return l++,a="\\"+c,d[0](),!0}d[0]=()=>{void 0===n?n=a:n+=a},d[1]=()=>{void 0!==n&&(c.push(n),n=void 0)},d[2]=()=>{d[0](),f++},d[3]=()=>{if(f>0)f--,u=4,d[0]();else{if(f=0,void 0===n)return!1;if(n=ke(n),!1===n)return!1;d[1]()}};while(null!==u)if(l++,t=e[l],"\\"!==t||!m()){if(r=we(t),s=ye[u],i=s[r]||s["l"]||8,8===i)return;if(u=i[0],void 0!==i[1]&&(o=d[i[1]],o&&(a=t,!1===o())))return;if(7===u)return c}}const _e=new Map;function Ae(e,c){return H(e)?e[c]:null}function Ee(e,c){if(!H(e))return null;let t=_e.get(c);if(t||(t=Ne(c),t&&_e.set(c,t)),!t)return null;const n=t.length;let a=e,r=0;while(r<n){const e=a[t[r]];if(void 0===e)return null;if(z(a))return null;a=e,r++}return a}const Ie=e=>e,Te=e=>"",Pe="text",Oe=e=>0===e.length?"":S(e),Re=x;function De(e,c){return e=Math.abs(e),2===c?e?e>1?1:0:1:e?Math.min(e,2):0}function Fe(e){const c=o(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(o(e.named.count)||o(e.named.n))?o(e.named.count)?e.named.count:o(e.named.n)?e.named.n:c:c}function Be(e,c){c.count||(c.count=e),c.n||(c.n=e)}function Ke(e={}){const c=e.locale,t=Fe(e),n=H(e.pluralRules)&&V(c)&&z(e.pluralRules[c])?e.pluralRules[c]:De,a=H(e.pluralRules)&&V(c)&&z(e.pluralRules[c])?De:void 0,r=e=>e[n(t,e.length,a)],i=e.list||[],s=e=>i[e],l=e.named||{};o(e.pluralIndex)&&Be(t,l);const u=e=>l[e];function d(c){const t=z(e.messages)?e.messages(c):!!H(e.messages)&&e.messages[c];return t||(e.parent?e.parent.message(c):Te)}const m=c=>e.modifiers?e.modifiers[c]:Ie,p=L(e.processor)&&z(e.processor.normalize)?e.processor.normalize:Oe,h=L(e.processor)&&z(e.processor.interpolate)?e.processor.interpolate:Re,v=L(e.processor)&&V(e.processor.type)?e.processor.type:Pe,C=(e,...c)=>{const[t,n]=c;let a="text",r="";1===c.length?H(t)?(r=t.modifier||r,a=t.type||a):V(t)&&(r=t||r):2===c.length&&(V(t)&&(r=t||r),V(n)&&(a=n||a));const i=d(e)(M),o="vnode"===a&&g(i)&&r?i[0]:i;return r?m(r)(o,a):o},M={["list"]:s,["named"]:u,["plural"]:r,["linked"]:C,["message"]:d,["type"]:v,["interpolate"]:h,["normalize"]:p,["values"]:f({},i,l)};return M}let Ue=null;function $e(e){Ue=e}function je(e,c,t){Ue&&Ue.emit("i18n:init",{timestamp:Date.now(),i18n:e,version:c,meta:t})}const qe=Ge("function:translate");function Ge(e){return c=>Ue&&Ue.emit(e,c)}const We={NOT_FOUND_KEY:1,FALLBACK_TO_TRANSLATE:2,CANNOT_FORMAT_NUMBER:3,FALLBACK_TO_NUMBER_FORMAT:4,CANNOT_FORMAT_DATE:5,FALLBACK_TO_DATE_FORMAT:6,EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER:7,__EXTEND_POINT__:8};We.NOT_FOUND_KEY,We.FALLBACK_TO_TRANSLATE,We.CANNOT_FORMAT_NUMBER,We.FALLBACK_TO_NUMBER_FORMAT,We.CANNOT_FORMAT_DATE,We.FALLBACK_TO_DATE_FORMAT,We.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER;const Ye=F.__EXTEND_POINT__,Ze=w(Ye),Xe={INVALID_ARGUMENT:Ye,INVALID_DATE_ARGUMENT:Ze(),INVALID_ISO_DATE_ARGUMENT:Ze(),NOT_SUPPORT_NON_STRING_MESSAGE:Ze(),NOT_SUPPORT_LOCALE_PROMISE_VALUE:Ze(),NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:Ze(),NOT_SUPPORT_LOCALE_TYPE:Ze(),__EXTEND_POINT__:Ze()};function Je(e){return K(e,null,void 0)}Xe.INVALID_ARGUMENT,Xe.INVALID_DATE_ARGUMENT,Xe.INVALID_ISO_DATE_ARGUMENT,Xe.NOT_SUPPORT_NON_STRING_MESSAGE,Xe.NOT_SUPPORT_LOCALE_PROMISE_VALUE,Xe.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION,Xe.NOT_SUPPORT_LOCALE_TYPE;function Qe(e,c){return null!=c.locale?cc(c.locale):cc(e.locale)}let ec;function cc(e){if(V(e))return e;if(z(e)){if(e.resolvedOnce&&null!=ec)return ec;if("Function"===e.constructor.name){const c=e();if(M(c))throw Je(Xe.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return ec=c}throw Je(Xe.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}throw Je(Xe.NOT_SUPPORT_LOCALE_TYPE)}function tc(e,c,t){return[...new Set([t,...g(c)?c:H(c)?Object.keys(c):V(c)?[c]:[t]])]}function nc(e,c,t){const n=V(t)?t:lc,a=e;a.__localeChainCache||(a.__localeChainCache=new Map);let r=a.__localeChainCache.get(n);if(!r){r=[];let e=[t];while(g(e))e=ac(r,e,c);const i=g(c)||!L(c)?c:c["default"]?c["default"]:null;e=V(i)?[i]:i,g(e)&&ac(r,e,!1),a.__localeChainCache.set(n,r)}return r}function ac(e,c,t){let n=!0;for(let a=0;a<c.length&&C(n);a++){const r=c[a];V(r)&&(n=rc(e,c[a],t))}return n}function rc(e,c,t){let n;const a=c.split("-");do{const c=a.join("-");n=ic(e,c,t),a.splice(-1,1)}while(a.length&&!0===n);return n}function ic(e,c,t){let n=!1;if(!e.includes(c)&&(n=!0,c)){n="!"!==c[c.length-1];const a=c.replace(/!/g,"");e.push(a),(g(t)||L(t))&&t[a]&&(n=t[a])}return n}const oc="9.9.1",sc=-1,lc="en-US",uc="",fc=e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;function dc(){return{upper:(e,c)=>"text"===c&&V(e)?e.toUpperCase():"vnode"===c&&H(e)&&"__v_isVNode"in e?e.children.toUpperCase():e,lower:(e,c)=>"text"===c&&V(e)?e.toLowerCase():"vnode"===c&&H(e)&&"__v_isVNode"in e?e.children.toLowerCase():e,capitalize:(e,c)=>"text"===c&&V(e)?fc(e):"vnode"===c&&H(e)&&"__v_isVNode"in e?fc(e.children):e}}let mc,pc,hc;function vc(e){mc=e}function gc(e){pc=e}function zc(e){hc=e}let Vc=null;const Cc=e=>{Vc=e},Hc=()=>Vc;let Mc=null;const bc=e=>{Mc=e},yc=()=>Mc;let Lc=0;function xc(e={}){const c=z(e.onWarn)?e.onWarn:k,t=V(e.version)?e.version:oc,n=V(e.locale)||z(e.locale)?e.locale:lc,a=z(n)?lc:n,r=g(e.fallbackLocale)||L(e.fallbackLocale)||V(e.fallbackLocale)||!1===e.fallbackLocale?e.fallbackLocale:a,i=L(e.messages)?e.messages:{[a]:{}},o=L(e.datetimeFormats)?e.datetimeFormats:{[a]:{}},s=L(e.numberFormats)?e.numberFormats:{[a]:{}},u=f({},e.modifiers||{},dc()),d=e.pluralRules||{},m=z(e.missing)?e.missing:null,p=!C(e.missingWarn)&&!l(e.missingWarn)||e.missingWarn,h=!C(e.fallbackWarn)&&!l(e.fallbackWarn)||e.fallbackWarn,v=!!e.fallbackFormat,M=!!e.unresolving,b=z(e.postTranslation)?e.postTranslation:null,y=L(e.processor)?e.processor:null,x=!C(e.warnHtmlMessage)||e.warnHtmlMessage,S=!!e.escapeParameter,w=z(e.messageCompiler)?e.messageCompiler:mc;const N=z(e.messageResolver)?e.messageResolver:pc||Ae,_=z(e.localeFallbacker)?e.localeFallbacker:hc||tc,A=H(e.fallbackContext)?e.fallbackContext:void 0,E=e,I=H(E.__datetimeFormatters)?E.__datetimeFormatters:new Map,T=H(E.__numberFormatters)?E.__numberFormatters:new Map,P=H(E.__meta)?E.__meta:{};Lc++;const O={version:t,cid:Lc,locale:n,fallbackLocale:r,messages:i,modifiers:u,pluralRules:d,missing:m,missingWarn:p,fallbackWarn:h,fallbackFormat:v,unresolving:M,postTranslation:b,processor:y,warnHtmlMessage:x,escapeParameter:S,messageCompiler:w,messageResolver:N,localeFallbacker:_,fallbackContext:A,onWarn:c,__meta:P};return O.datetimeFormats=o,O.numberFormats=s,O.__datetimeFormatters=I,O.__numberFormatters=T,__INTLIFY_PROD_DEVTOOLS__&&je(O,t,P),O}function Sc(e,c,t,n,a){const{missing:r,onWarn:i}=e;if(null!==r){const n=r(e,t,c,a);return V(n)?n:c}return c}function wc(e,c,t){const n=e;n.__localeChainCache=new Map,e.localeFallbacker(e,t,c)}function kc(e){const c=c=>Nc(c,e);return c}function Nc(e,c){const t=c.b||c.body;if(1===(t.t||t.type)){const c=t,n=c.c||c.cases;return e.plural(n.reduce(((c,t)=>[...c,_c(e,t)]),[]))}return _c(e,t)}function _c(e,c){const t=c.s||c.static;if(t)return"text"===e.type?t:e.normalize([t]);{const t=(c.i||c.items).reduce(((c,t)=>[...c,Ac(e,t)]),[]);return e.normalize(t)}}function Ac(e,c){const t=c.t||c.type;switch(t){case 3:const n=c;return n.v||n.value;case 9:const a=c;return a.v||a.value;case 4:const r=c;return e.interpolate(e.named(r.k||r.key));case 5:const i=c;return e.interpolate(e.list(null!=i.i?i.i:i.index));case 6:const o=c,s=o.m||o.modifier;return e.linked(Ac(e,o.k||o.key),s?Ac(e,s):void 0,e.type);case 7:const l=c;return l.v||l.value;case 8:const u=c;return u.v||u.value;default:throw new Error(`unhandled node type on format message part: ${t}`)}}const Ec=e=>e;let Ic=Object.create(null);const Tc=e=>H(e)&&(0===e.t||0===e.type)&&("b"in e||"body"in e);function Pc(e,c={}){let t=!1;const n=c.onError||U;return c.onError=e=>{t=!0,n(e)},{...Me(e,c),detectError:t}}const Oc=(e,c)=>{if(!V(e))throw Je(Xe.NOT_SUPPORT_NON_STRING_MESSAGE);{!C(c.warnHtmlMessage)||c.warnHtmlMessage;const t=c.onCacheKey||Ec,n=t(e),a=Ic[n];if(a)return a;const{code:r,detectError:i}=Pc(e,c),o=new Function(`return ${r}`)();return i?o:Ic[n]=o}};function Rc(e,c){if(__INTLIFY_JIT_COMPILATION__&&!__INTLIFY_DROP_MESSAGE_COMPILER__&&V(e)){!C(c.warnHtmlMessage)||c.warnHtmlMessage;const t=c.onCacheKey||Ec,n=t(e),a=Ic[n];if(a)return a;const{ast:r,detectError:i}=Pc(e,{...c,location:!1,jit:!0}),o=kc(r);return i?o:Ic[n]=o}{0;const c=e.cacheKey;if(c){const t=Ic[c];return t||(Ic[c]=kc(e))}return kc(e)}}const Dc=()=>"",Fc=e=>z(e);function Bc(e,...c){const{fallbackFormat:t,postTranslation:n,unresolving:a,messageCompiler:r,fallbackLocale:i,messages:o}=e,[s,l]=qc(...c),u=C(l.missingWarn)?l.missingWarn:e.missingWarn,d=C(l.fallbackWarn)?l.fallbackWarn:e.fallbackWarn,m=C(l.escapeParameter)?l.escapeParameter:e.escapeParameter,p=!!l.resolvedMessage,h=V(l.default)||C(l.default)?C(l.default)?r?s:()=>s:l.default:t?r?s:()=>s:"",v=t||""!==h,g=Qe(e,l);m&&Kc(l);let[z,H,M]=p?[s,g,o[g]||{}]:Uc(e,s,g,i,d,u),b=z,y=s;if(p||V(b)||Tc(b)||Fc(b)||v&&(b=h,y=b),!p&&(!(V(b)||Tc(b)||Fc(b))||!V(H)))return a?sc:s;let L=!1;const x=()=>{L=!0},S=Fc(b)?b:$c(e,s,H,b,y,x);if(L)return b;const w=Wc(e,H,M,l),k=Ke(w),N=jc(e,S,k),_=n?n(N,s):N;if(__INTLIFY_PROD_DEVTOOLS__){const c={timestamp:Date.now(),key:V(s)?s:Fc(b)?b.key:"",locale:H||(Fc(b)?b.locale:""),format:V(b)?b:Fc(b)?b.source:"",message:_};c.meta=f({},e.__meta,Hc()||{}),qe(c)}return _}function Kc(e){g(e.list)?e.list=e.list.map((e=>V(e)?p(e):e)):H(e.named)&&Object.keys(e.named).forEach((c=>{V(e.named[c])&&(e.named[c]=p(e.named[c]))}))}function Uc(e,c,t,n,a,r){const{messages:i,onWarn:o,messageResolver:s,localeFallbacker:l}=e,u=l(e,n,t);let f,d={},m=null,p=t,h=null;const v="translate";for(let g=0;g<u.length;g++){f=h=u[g],d=i[f]||{};if(null===(m=s(d,c))&&(m=d[c]),V(m)||Tc(m)||Fc(m))break;const t=Sc(e,c,f,r,v);t!==c&&(m=t),p=h}return[m,f,d]}function $c(e,c,t,n,a,r){const{messageCompiler:i,warnHtmlMessage:o}=e;if(Fc(n)){const e=n;return e.locale=e.locale||t,e.key=e.key||c,e}if(null==i){const e=()=>n;return e.locale=t,e.key=c,e}const s=i(n,Gc(e,t,a,n,o,r));return s.locale=t,s.key=c,s.source=n,s}function jc(e,c,t){const n=c(t);return n}function qc(...e){const[c,t,n]=e,a={};if(!V(c)&&!o(c)&&!Fc(c)&&!Tc(c))throw Je(Xe.INVALID_ARGUMENT);const r=o(c)?String(c):(Fc(c),c);return o(t)?a.plural=t:V(t)?a.default=t:L(t)&&!u(t)?a.named=t:g(t)&&(a.list=t),o(n)?a.plural=n:V(n)?a.default=n:L(n)&&f(a,n),[r,a]}function Gc(e,c,t,n,a,i){return{locale:c,key:t,warnHtmlMessage:a,onError:e=>{throw i&&i(e),e},onCacheKey:e=>r(c,t,e)}}function Wc(e,c,t,n){const{modifiers:a,pluralRules:r,messageResolver:i,fallbackLocale:s,fallbackWarn:l,missingWarn:u,fallbackContext:f}=e,d=n=>{let a=i(t,n);if(null==a&&f){const[,,e]=Uc(f,n,c,s,l,u);a=i(e,n)}if(V(a)||Tc(a)){let t=!1;const r=()=>{t=!0},i=$c(e,n,c,a,n,r);return t?Dc:i}return Fc(a)?a:Dc},m={locale:c,modifiers:a,pluralRules:r,messages:d};return e.processor&&(m.processor=e.processor),n.list&&(m.list=n.list),n.named&&(m.named=n.named),o(n.plural)&&(m.pluralIndex=n.plural),m}const Yc="undefined"!==typeof Intl;Yc&&Intl.DateTimeFormat,Yc&&Intl.NumberFormat;function Zc(e,...c){const{datetimeFormats:t,unresolving:n,fallbackLocale:a,onWarn:r,localeFallbacker:i}=e,{__datetimeFormatters:o}=e;const[s,l,d,m]=Jc(...c),p=C(d.missingWarn)?d.missingWarn:e.missingWarn,h=(C(d.fallbackWarn)?d.fallbackWarn:e.fallbackWarn,!!d.part),v=Qe(e,d),g=i(e,a,v);if(!V(s)||""===s)return new Intl.DateTimeFormat(v,m).format(l);let z,H={},M=null,b=v,y=null;const x="datetime format";for(let u=0;u<g.length;u++){if(z=y=g[u],H=t[z]||{},M=H[s],L(M))break;Sc(e,s,z,p,x),b=y}if(!L(M)||!V(z))return n?sc:s;let S=`${z}__${s}`;u(m)||(S=`${S}__${JSON.stringify(m)}`);let w=o.get(S);return w||(w=new Intl.DateTimeFormat(z,f({},M,m)),o.set(S,w)),h?w.formatToParts(l):w.format(l)}const Xc=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function Jc(...e){const[c,t,n,a]=e,r={};let i,l={};if(V(c)){const e=c.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!e)throw Je(Xe.INVALID_ISO_DATE_ARGUMENT);const t=e[3]?e[3].trim().startsWith("T")?`${e[1].trim()}${e[3].trim()}`:`${e[1].trim()}T${e[3].trim()}`:e[1].trim();i=new Date(t);try{i.toISOString()}catch(u){throw Je(Xe.INVALID_ISO_DATE_ARGUMENT)}}else if(s(c)){if(isNaN(c.getTime()))throw Je(Xe.INVALID_DATE_ARGUMENT);i=c}else{if(!o(c))throw Je(Xe.INVALID_ARGUMENT);i=c}return V(t)?r.key=t:L(t)&&Object.keys(t).forEach((e=>{Xc.includes(e)?l[e]=t[e]:r[e]=t[e]})),V(n)?r.locale=n:L(n)&&(l=n),L(a)&&(l=a),[r.key||"",i,r,l]}function Qc(e,c,t){const n=e;for(const a in t){const e=`${c}__${a}`;n.__datetimeFormatters.has(e)&&n.__datetimeFormatters.delete(e)}}function et(e,...c){const{numberFormats:t,unresolving:n,fallbackLocale:a,onWarn:r,localeFallbacker:i}=e,{__numberFormatters:o}=e;const[s,l,d,m]=tt(...c),p=C(d.missingWarn)?d.missingWarn:e.missingWarn,h=(C(d.fallbackWarn)?d.fallbackWarn:e.fallbackWarn,!!d.part),v=Qe(e,d),g=i(e,a,v);if(!V(s)||""===s)return new Intl.NumberFormat(v,m).format(l);let z,H={},M=null,b=v,y=null;const x="number format";for(let u=0;u<g.length;u++){if(z=y=g[u],H=t[z]||{},M=H[s],L(M))break;Sc(e,s,z,p,x),b=y}if(!L(M)||!V(z))return n?sc:s;let S=`${z}__${s}`;u(m)||(S=`${S}__${JSON.stringify(m)}`);let w=o.get(S);return w||(w=new Intl.NumberFormat(z,f({},M,m)),o.set(S,w)),h?w.formatToParts(l):w.format(l)}const ct=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function tt(...e){const[c,t,n,a]=e,r={};let i={};if(!o(c))throw Je(Xe.INVALID_ARGUMENT);const s=c;return V(t)?r.key=t:L(t)&&Object.keys(t).forEach((e=>{ct.includes(e)?i[e]=t[e]:r[e]=t[e]})),V(n)?r.locale=n:L(n)&&(i=n),L(a)&&(i=a),[r.key||"",s,r,i]}function nt(e,c,t){const n=e;for(const a in t){const e=`${c}__${a}`;n.__numberFormatters.has(e)&&n.__numberFormatters.delete(e)}}be();var at=t(4108),rt=t(2500);
/*!
  * vue-i18n v9.9.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const it="9.9.1";function ot(){"boolean"!==typeof __VUE_I18N_FULL_INSTALL__&&(m().__VUE_I18N_FULL_INSTALL__=!0),"boolean"!==typeof __VUE_I18N_LEGACY_API__&&(m().__VUE_I18N_LEGACY_API__=!0),"boolean"!==typeof __INTLIFY_JIT_COMPILATION__&&(m().__INTLIFY_JIT_COMPILATION__=!1),"boolean"!==typeof __INTLIFY_DROP_MESSAGE_COMPILER__&&(m().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),"boolean"!==typeof __INTLIFY_PROD_DEVTOOLS__&&(m().__INTLIFY_PROD_DEVTOOLS__=!1)}const st=We.__EXTEND_POINT__,lt=w(st),ut={FALLBACK_TO_ROOT:st,NOT_SUPPORTED_PRESERVE:lt(),NOT_SUPPORTED_FORMATTER:lt(),NOT_SUPPORTED_PRESERVE_DIRECTIVE:lt(),NOT_SUPPORTED_GET_CHOICE_INDEX:lt(),COMPONENT_NAME_LEGACY_COMPATIBLE:lt(),NOT_FOUND_PARENT_SCOPE:lt(),IGNORE_OBJ_FLATTEN:lt(),NOTICE_DROP_ALLOW_COMPOSITION:lt()};ut.FALLBACK_TO_ROOT,ut.NOT_SUPPORTED_PRESERVE,ut.NOT_SUPPORTED_FORMATTER,ut.NOT_SUPPORTED_PRESERVE_DIRECTIVE,ut.NOT_SUPPORTED_GET_CHOICE_INDEX,ut.COMPONENT_NAME_LEGACY_COMPATIBLE,ut.NOT_FOUND_PARENT_SCOPE,ut.IGNORE_OBJ_FLATTEN,ut.NOTICE_DROP_ALLOW_COMPOSITION;const ft=Xe.__EXTEND_POINT__,dt=w(ft),mt={UNEXPECTED_RETURN_TYPE:ft,INVALID_ARGUMENT:dt(),MUST_BE_CALL_SETUP_TOP:dt(),NOT_INSTALLED:dt(),NOT_AVAILABLE_IN_LEGACY_MODE:dt(),REQUIRED_VALUE:dt(),INVALID_VALUE:dt(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:dt(),NOT_INSTALLED_WITH_PROVIDE:dt(),UNEXPECTED_ERROR:dt(),NOT_COMPATIBLE_LEGACY_VUE_I18N:dt(),BRIDGE_SUPPORT_VUE_2_ONLY:dt(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:dt(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:dt(),__EXTEND_POINT__:dt()};function pt(e,...c){return K(e,null,void 0)}mt.UNEXPECTED_RETURN_TYPE,mt.INVALID_ARGUMENT,mt.MUST_BE_CALL_SETUP_TOP,mt.NOT_INSTALLED,mt.UNEXPECTED_ERROR,mt.NOT_AVAILABLE_IN_LEGACY_MODE,mt.REQUIRED_VALUE,mt.INVALID_VALUE,mt.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN,mt.NOT_INSTALLED_WITH_PROVIDE,mt.NOT_COMPATIBLE_LEGACY_VUE_I18N,mt.BRIDGE_SUPPORT_VUE_2_ONLY,mt.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION,mt.NOT_AVAILABLE_COMPOSITION_IN_LEGACY;const ht=a("__translateVNode"),vt=a("__datetimeParts"),gt=a("__numberParts"),zt=a("__setPluralRules");a("__intlifyMeta");const Vt=a("__injectWithOption"),Ct=a("__dispose");function Ht(e){if(!H(e))return e;for(const c in e)if(v(e,c))if(c.includes(".")){const t=c.split("."),n=t.length-1;let a=e,r=!1;for(let e=0;e<n;e++){if(t[e]in a||(a[t[e]]={}),!H(a[t[e]])){r=!0;break}a=a[t[e]]}r||(a[t[n]]=e[c],delete e[c]),H(a[t[n]])&&Ht(a[t[n]])}else H(e[c])&&Ht(e[c]);return e}function Mt(e,c){const{messages:t,__i18n:n,messageResolver:a,flatJson:r}=c,i=L(t)?t:g(n)?{}:{[e]:{}};if(g(n)&&n.forEach((e=>{if("locale"in e&&"resource"in e){const{locale:c,resource:t}=e;c?(i[c]=i[c]||{},_(t,i[c])):_(t,i)}else V(e)&&_(JSON.parse(e),i)})),null==a&&r)for(const o in i)v(i,o)&&Ht(i[o]);return i}function bt(e){return e.type}function yt(e,c,t){let n=H(c.messages)?c.messages:{};"__i18nGlobal"in t&&(n=Mt(e.locale.value,{messages:n,__i18n:t.__i18nGlobal}));const a=Object.keys(n);if(a.length&&a.forEach((c=>{e.mergeLocaleMessage(c,n[c])})),H(c.datetimeFormats)){const t=Object.keys(c.datetimeFormats);t.length&&t.forEach((t=>{e.mergeDateTimeFormat(t,c.datetimeFormats[t])}))}if(H(c.numberFormats)){const t=Object.keys(c.numberFormats);t.length&&t.forEach((t=>{e.mergeNumberFormat(t,c.numberFormats[t])}))}}function Lt(e){return(0,at.K2)(at.a,null,e,0)}const xt="__INTLIFY_META__",St=()=>[],wt=()=>!1;let kt=0;function Nt(e){return(c,t,n,a)=>e(t,n,(0,at._S)()||void 0,a)}const _t=()=>{const e=(0,at._S)();let c=null;return e&&(c=bt(e)[xt])?{[xt]:c}:null};function At(e={},c){const{__root:t,__injectWithOption:a}=e,r=void 0===t,i=e.flatJson,s=n?rt.IL:rt.kl;let u=!C(e.inheritLocale)||e.inheritLocale;const d=s(t&&u?t.locale.value:V(e.locale)?e.locale:lc),m=s(t&&u?t.fallbackLocale.value:V(e.fallbackLocale)||g(e.fallbackLocale)||L(e.fallbackLocale)||!1===e.fallbackLocale?e.fallbackLocale:d.value),p=s(Mt(d.value,e)),h=s(L(e.datetimeFormats)?e.datetimeFormats:{[d.value]:{}}),M=s(L(e.numberFormats)?e.numberFormats:{[d.value]:{}});let b=t?t.missingWarn:!C(e.missingWarn)&&!l(e.missingWarn)||e.missingWarn,y=t?t.fallbackWarn:!C(e.fallbackWarn)&&!l(e.fallbackWarn)||e.fallbackWarn,x=t?t.fallbackRoot:!C(e.fallbackRoot)||e.fallbackRoot,S=!!e.fallbackFormat,w=z(e.missing)?e.missing:null,k=z(e.missing)?Nt(e.missing):null,N=z(e.postTranslation)?e.postTranslation:null,A=t?t.warnHtmlMessage:!C(e.warnHtmlMessage)||e.warnHtmlMessage,E=!!e.escapeParameter;const I=t?t.modifiers:L(e.modifiers)?e.modifiers:{};let T,P=e.pluralRules||t&&t.pluralRules;const O=()=>{r&&bc(null);const c={version:it,locale:d.value,fallbackLocale:m.value,messages:p.value,modifiers:I,pluralRules:P,missing:null===k?void 0:k,missingWarn:b,fallbackWarn:y,fallbackFormat:S,unresolving:!0,postTranslation:null===N?void 0:N,warnHtmlMessage:A,escapeParameter:E,messageResolver:e.messageResolver,messageCompiler:e.messageCompiler,__meta:{framework:"vue"}};c.datetimeFormats=h.value,c.numberFormats=M.value,c.__datetimeFormatters=L(T)?T.__datetimeFormatters:void 0,c.__numberFormatters=L(T)?T.__numberFormatters:void 0;const t=xc(c);return r&&bc(t),t};function R(){return[d.value,m.value,p.value,h.value,M.value]}T=O(),wc(T,d.value,m.value);const D=(0,at.S6)({get:()=>d.value,set:e=>{d.value=e,T.locale=d.value}}),F=(0,at.S6)({get:()=>m.value,set:e=>{m.value=e,T.fallbackLocale=m.value,wc(T,d.value,e)}}),B=(0,at.S6)((()=>p.value)),K=(0,at.S6)((()=>h.value)),U=(0,at.S6)((()=>M.value));function $(){return z(N)?N:null}function j(e){N=e,T.postTranslation=e}function q(){return w}function G(e){null!==e&&(k=Nt(e)),w=e,T.missing=k}const W=(e,c,n,a,i,s)=>{let l;R();try{__INTLIFY_PROD_DEVTOOLS__&&Cc(_t()),r||(T.fallbackContext=t?yc():void 0),l=e(T)}finally{__INTLIFY_PROD_DEVTOOLS__&&Cc(null),r||(T.fallbackContext=void 0)}if("translate exists"!==n&&o(l)&&l===sc||"translate exists"===n&&!l){const[e,n]=c();return t&&x?a(t):i(e)}if(s(l))return l;throw pt(mt.UNEXPECTED_RETURN_TYPE)};function Y(...e){return W((c=>Reflect.apply(Bc,null,[c,...e])),(()=>qc(...e)),"translate",(c=>Reflect.apply(c.t,c,[...e])),(e=>e),(e=>V(e)))}function Z(...e){const[c,t,n]=e;if(n&&!H(n))throw pt(mt.INVALID_ARGUMENT);return Y(c,t,f({resolvedMessage:!0},n||{}))}function X(...e){return W((c=>Reflect.apply(Zc,null,[c,...e])),(()=>Jc(...e)),"datetime format",(c=>Reflect.apply(c.d,c,[...e])),(()=>uc),(e=>V(e)))}function J(...e){return W((c=>Reflect.apply(et,null,[c,...e])),(()=>tt(...e)),"number format",(c=>Reflect.apply(c.n,c,[...e])),(()=>uc),(e=>V(e)))}function Q(e){return e.map((e=>V(e)||o(e)||C(e)?Lt(String(e)):e))}const ee=e=>e,ce={normalize:Q,interpolate:ee,type:"vnode"};function te(...e){return W((c=>{let t;const n=c;try{n.processor=ce,t=Reflect.apply(Bc,null,[n,...e])}finally{n.processor=null}return t}),(()=>qc(...e)),"translate",(c=>c[ht](...e)),(e=>[Lt(e)]),(e=>g(e)))}function ne(...e){return W((c=>Reflect.apply(et,null,[c,...e])),(()=>tt(...e)),"number format",(c=>c[gt](...e)),St,(e=>V(e)||g(e)))}function ae(...e){return W((c=>Reflect.apply(Zc,null,[c,...e])),(()=>Jc(...e)),"datetime format",(c=>c[vt](...e)),St,(e=>V(e)||g(e)))}function re(e){P=e,T.pluralRules=P}function ie(e,c){return W((()=>{if(!e)return!1;const t=V(c)?c:d.value,n=le(t),a=T.messageResolver(n,e);return Tc(a)||Fc(a)||V(a)}),(()=>[e]),"translate exists",(t=>Reflect.apply(t.te,t,[e,c])),wt,(e=>C(e)))}function oe(e){let c=null;const t=nc(T,m.value,d.value);for(let n=0;n<t.length;n++){const a=p.value[t[n]]||{},r=T.messageResolver(a,e);if(null!=r){c=r;break}}return c}function se(e){const c=oe(e);return null!=c?c:t&&t.tm(e)||{}}function le(e){return p.value[e]||{}}function ue(e,c){if(i){const t={[e]:c};for(const e in t)v(t,e)&&Ht(t[e]);c=t[e]}p.value[e]=c,T.messages=p.value}function fe(e,c){p.value[e]=p.value[e]||{};const t={[e]:c};if(i)for(const n in t)v(t,n)&&Ht(t[n]);c=t[e],_(c,p.value[e]),T.messages=p.value}function de(e){return h.value[e]||{}}function me(e,c){h.value[e]=c,T.datetimeFormats=h.value,Qc(T,e,c)}function pe(e,c){h.value[e]=f(h.value[e]||{},c),T.datetimeFormats=h.value,Qc(T,e,c)}function he(e){return M.value[e]||{}}function ve(e,c){M.value[e]=c,T.numberFormats=M.value,nt(T,e,c)}function ge(e,c){M.value[e]=f(M.value[e]||{},c),T.numberFormats=M.value,nt(T,e,c)}kt++,t&&n&&((0,at.Kg)(t.locale,(e=>{u&&(d.value=e,T.locale=e,wc(T,d.value,m.value))})),(0,at.Kg)(t.fallbackLocale,(e=>{u&&(m.value=e,T.fallbackLocale=e,wc(T,d.value,m.value))})));const ze={id:kt,locale:D,fallbackLocale:F,get inheritLocale(){return u},set inheritLocale(e){u=e,e&&t&&(d.value=t.locale.value,m.value=t.fallbackLocale.value,wc(T,d.value,m.value))},get availableLocales(){return Object.keys(p.value).sort()},messages:B,get modifiers(){return I},get pluralRules(){return P||{}},get isGlobal(){return r},get missingWarn(){return b},set missingWarn(e){b=e,T.missingWarn=b},get fallbackWarn(){return y},set fallbackWarn(e){y=e,T.fallbackWarn=y},get fallbackRoot(){return x},set fallbackRoot(e){x=e},get fallbackFormat(){return S},set fallbackFormat(e){S=e,T.fallbackFormat=S},get warnHtmlMessage(){return A},set warnHtmlMessage(e){A=e,T.warnHtmlMessage=e},get escapeParameter(){return E},set escapeParameter(e){E=e,T.escapeParameter=e},t:Y,getLocaleMessage:le,setLocaleMessage:ue,mergeLocaleMessage:fe,getPostTranslationHandler:$,setPostTranslationHandler:j,getMissingHandler:q,setMissingHandler:G,[zt]:re};return ze.datetimeFormats=K,ze.numberFormats=U,ze.rt=Z,ze.te=ie,ze.tm=se,ze.d=X,ze.n=J,ze.getDateTimeFormat=de,ze.setDateTimeFormat=me,ze.mergeDateTimeFormat=pe,ze.getNumberFormat=he,ze.setNumberFormat=ve,ze.mergeNumberFormat=ge,ze[Vt]=a,ze[ht]=te,ze[vt]=ae,ze[gt]=ne,ze}function Et(e){const c=V(e.locale)?e.locale:lc,t=V(e.fallbackLocale)||g(e.fallbackLocale)||L(e.fallbackLocale)||!1===e.fallbackLocale?e.fallbackLocale:c,n=z(e.missing)?e.missing:void 0,a=!C(e.silentTranslationWarn)&&!l(e.silentTranslationWarn)||!e.silentTranslationWarn,r=!C(e.silentFallbackWarn)&&!l(e.silentFallbackWarn)||!e.silentFallbackWarn,i=!C(e.fallbackRoot)||e.fallbackRoot,o=!!e.formatFallbackMessages,s=L(e.modifiers)?e.modifiers:{},u=e.pluralizationRules,d=z(e.postTranslation)?e.postTranslation:void 0,m=!V(e.warnHtmlInMessage)||"off"!==e.warnHtmlInMessage,p=!!e.escapeParameterHtml,h=!C(e.sync)||e.sync;let v=e.messages;if(L(e.sharedMessages)){const c=e.sharedMessages,t=Object.keys(c);v=t.reduce(((e,t)=>{const n=e[t]||(e[t]={});return f(n,c[t]),e}),v||{})}const{__i18n:H,__root:M,__injectWithOption:b}=e,y=e.datetimeFormats,x=e.numberFormats,S=e.flatJson;return{locale:c,fallbackLocale:t,messages:v,flatJson:S,datetimeFormats:y,numberFormats:x,missing:n,missingWarn:a,fallbackWarn:r,fallbackRoot:i,fallbackFormat:o,modifiers:s,pluralRules:u,postTranslation:d,warnHtmlMessage:m,escapeParameter:p,messageResolver:e.messageResolver,inheritLocale:h,__i18n:H,__root:M,__injectWithOption:b}}function It(e={},c){{const c=At(Et(e)),{__extender:t}=e,n={id:c.id,get locale(){return c.locale.value},set locale(e){c.locale.value=e},get fallbackLocale(){return c.fallbackLocale.value},set fallbackLocale(e){c.fallbackLocale.value=e},get messages(){return c.messages.value},get datetimeFormats(){return c.datetimeFormats.value},get numberFormats(){return c.numberFormats.value},get availableLocales(){return c.availableLocales},get formatter(){return{interpolate(){return[]}}},set formatter(e){},get missing(){return c.getMissingHandler()},set missing(e){c.setMissingHandler(e)},get silentTranslationWarn(){return C(c.missingWarn)?!c.missingWarn:c.missingWarn},set silentTranslationWarn(e){c.missingWarn=C(e)?!e:e},get silentFallbackWarn(){return C(c.fallbackWarn)?!c.fallbackWarn:c.fallbackWarn},set silentFallbackWarn(e){c.fallbackWarn=C(e)?!e:e},get modifiers(){return c.modifiers},get formatFallbackMessages(){return c.fallbackFormat},set formatFallbackMessages(e){c.fallbackFormat=e},get postTranslation(){return c.getPostTranslationHandler()},set postTranslation(e){c.setPostTranslationHandler(e)},get sync(){return c.inheritLocale},set sync(e){c.inheritLocale=e},get warnHtmlInMessage(){return c.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(e){c.warnHtmlMessage="off"!==e},get escapeParameterHtml(){return c.escapeParameter},set escapeParameterHtml(e){c.escapeParameter=e},get preserveDirectiveContent(){return!0},set preserveDirectiveContent(e){},get pluralizationRules(){return c.pluralRules||{}},__composer:c,t(...e){const[t,n,a]=e,r={};let i=null,o=null;if(!V(t))throw pt(mt.INVALID_ARGUMENT);const s=t;return V(n)?r.locale=n:g(n)?i=n:L(n)&&(o=n),g(a)?i=a:L(a)&&(o=a),Reflect.apply(c.t,c,[s,i||o||{},r])},rt(...e){return Reflect.apply(c.rt,c,[...e])},tc(...e){const[t,n,a]=e,r={plural:1};let i=null,s=null;if(!V(t))throw pt(mt.INVALID_ARGUMENT);const l=t;return V(n)?r.locale=n:o(n)?r.plural=n:g(n)?i=n:L(n)&&(s=n),V(a)?r.locale=a:g(a)?i=a:L(a)&&(s=a),Reflect.apply(c.t,c,[l,i||s||{},r])},te(e,t){return c.te(e,t)},tm(e){return c.tm(e)},getLocaleMessage(e){return c.getLocaleMessage(e)},setLocaleMessage(e,t){c.setLocaleMessage(e,t)},mergeLocaleMessage(e,t){c.mergeLocaleMessage(e,t)},d(...e){return Reflect.apply(c.d,c,[...e])},getDateTimeFormat(e){return c.getDateTimeFormat(e)},setDateTimeFormat(e,t){c.setDateTimeFormat(e,t)},mergeDateTimeFormat(e,t){c.mergeDateTimeFormat(e,t)},n(...e){return Reflect.apply(c.n,c,[...e])},getNumberFormat(e){return c.getNumberFormat(e)},setNumberFormat(e,t){c.setNumberFormat(e,t)},mergeNumberFormat(e,t){c.mergeNumberFormat(e,t)},getChoiceIndex(e,c){return-1}};return n.__extender=t,n}}const Tt={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>"parent"===e||"global"===e,default:"parent"},i18n:{type:Object}};function Pt({slots:e},c){if(1===c.length&&"default"===c[0]){const c=e.default?e.default():[];return c.reduce(((e,c)=>[...e,...c.type===at.ae?c.children:[c]]),[])}return c.reduce(((c,t)=>{const n=e[t];return n&&(c[t]=n()),c}),{})}function Ot(e){return at.ae}const Rt=(0,at._M)({name:"i18n-t",props:f({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>o(e)||!isNaN(e)}},Tt),setup(e,c){const{slots:t,attrs:n}=c,a=e.i18n||cn({useScope:e.scope,__useComponent:!0});return()=>{const r=Object.keys(t).filter((e=>"_"!==e)),i={};e.locale&&(i.locale=e.locale),void 0!==e.plural&&(i.plural=V(e.plural)?+e.plural:e.plural);const o=Pt(c,r),s=a[ht](e.keypath,o,i),l=f({},n),u=V(e.tag)||H(e.tag)?e.tag:Ot();return(0,at.h)(u,l,s)}}}),Dt=Rt;function Ft(e){return g(e)&&!V(e[0])}function Bt(e,c,t,n){const{slots:a,attrs:r}=c;return()=>{const c={part:!0};let i={};e.locale&&(c.locale=e.locale),V(e.format)?c.key=e.format:H(e.format)&&(V(e.format.key)&&(c.key=e.format.key),i=Object.keys(e.format).reduce(((c,n)=>t.includes(n)?f({},c,{[n]:e.format[n]}):c),{}));const o=n(e.value,c,i);let s=[c.key];g(o)?s=o.map(((e,c)=>{const t=a[e.type],n=t?t({[e.type]:e.value,index:c,parts:o}):[e.value];return Ft(n)&&(n[0].key=`${e.type}-${c}`),n})):V(o)&&(s=[o]);const l=f({},r),u=V(e.tag)||H(e.tag)?e.tag:Ot();return(0,at.h)(u,l,s)}}const Kt=(0,at._M)({name:"i18n-n",props:f({value:{type:Number,required:!0},format:{type:[String,Object]}},Tt),setup(e,c){const t=e.i18n||cn({useScope:"parent",__useComponent:!0});return Bt(e,c,ct,((...e)=>t[gt](...e)))}}),Ut=Kt,$t=(0,at._M)({name:"i18n-d",props:f({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Tt),setup(e,c){const t=e.i18n||cn({useScope:"parent",__useComponent:!0});return Bt(e,c,Xc,((...e)=>t[vt](...e)))}}),jt=$t;function qt(e,c){const t=e;if("composition"===e.mode)return t.__getInstance(c)||e.global;{const n=t.__getInstance(c);return null!=n?n.__composer:e.global.__composer}}function Gt(e){const c=c=>{const{instance:t,modifiers:n,value:a}=c;if(!t||!t.$)throw pt(mt.UNEXPECTED_ERROR);const r=qt(e,t.$);const i=Wt(a);return[Reflect.apply(r.t,r,[...Yt(i)]),r]},t=(t,a)=>{const[r,i]=c(a);n&&e.global===i&&(t.__i18nWatcher=(0,at.Kg)(i.locale,(()=>{a.instance&&a.instance.$forceUpdate()}))),t.__composer=i,t.textContent=r},a=e=>{n&&e.__i18nWatcher&&(e.__i18nWatcher(),e.__i18nWatcher=void 0,delete e.__i18nWatcher),e.__composer&&(e.__composer=void 0,delete e.__composer)},r=(e,{value:c})=>{if(e.__composer){const t=e.__composer,n=Wt(c);e.textContent=Reflect.apply(t.t,t,[...Yt(n)])}},i=e=>{const[t]=c(e);return{textContent:t}};return{created:t,unmounted:a,beforeUpdate:r,getSSRProps:i}}function Wt(e){if(V(e))return{path:e};if(L(e)){if(!("path"in e))throw pt(mt.REQUIRED_VALUE,"path");return e}throw pt(mt.INVALID_VALUE)}function Yt(e){const{path:c,locale:t,args:n,choice:a,plural:r}=e,i={},s=n||{};return V(t)&&(i.locale=t),o(a)&&(i.plural=a),o(r)&&(i.plural=r),[c,s,i]}function Zt(e,c,...t){const n=L(t[0])?t[0]:{},a=!!n.useI18nComponentName,r=!C(n.globalInstall)||n.globalInstall;r&&([a?"i18n":Dt.name,"I18nT"].forEach((c=>e.component(c,Dt))),[Ut.name,"I18nN"].forEach((c=>e.component(c,Ut))),[jt.name,"I18nD"].forEach((c=>e.component(c,jt)))),e.directive("t",Gt(c))}function Xt(e,c,t){return{beforeCreate(){const n=(0,at._S)();if(!n)throw pt(mt.UNEXPECTED_ERROR);const a=this.$options;if(a.i18n){const n=a.i18n;if(a.__i18n&&(n.__i18n=a.__i18n),n.__root=c,this===this.$root)this.$i18n=Jt(e,n);else{n.__injectWithOption=!0,n.__extender=t.__vueI18nExtend,this.$i18n=It(n);const e=this.$i18n;e.__extender&&(e.__disposer=e.__extender(this.$i18n))}}else if(a.__i18n)if(this===this.$root)this.$i18n=Jt(e,a);else{this.$i18n=It({__i18n:a.__i18n,__injectWithOption:!0,__extender:t.__vueI18nExtend,__root:c});const e=this.$i18n;e.__extender&&(e.__disposer=e.__extender(this.$i18n))}else this.$i18n=e;a.__i18nGlobal&&yt(c,a,a),this.$t=(...e)=>this.$i18n.t(...e),this.$rt=(...e)=>this.$i18n.rt(...e),this.$tc=(...e)=>this.$i18n.tc(...e),this.$te=(e,c)=>this.$i18n.te(e,c),this.$d=(...e)=>this.$i18n.d(...e),this.$n=(...e)=>this.$i18n.n(...e),this.$tm=e=>this.$i18n.tm(e),t.__setInstance(n,this.$i18n)},mounted(){0},unmounted(){const e=(0,at._S)();if(!e)throw pt(mt.UNEXPECTED_ERROR);const c=this.$i18n;delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,c.__disposer&&(c.__disposer(),delete c.__disposer,delete c.__extender),t.__deleteInstance(e),delete this.$i18n}}}function Jt(e,c){e.locale=c.locale||e.locale,e.fallbackLocale=c.fallbackLocale||e.fallbackLocale,e.missing=c.missing||e.missing,e.silentTranslationWarn=c.silentTranslationWarn||e.silentFallbackWarn,e.silentFallbackWarn=c.silentFallbackWarn||e.silentFallbackWarn,e.formatFallbackMessages=c.formatFallbackMessages||e.formatFallbackMessages,e.postTranslation=c.postTranslation||e.postTranslation,e.warnHtmlInMessage=c.warnHtmlInMessage||e.warnHtmlInMessage,e.escapeParameterHtml=c.escapeParameterHtml||e.escapeParameterHtml,e.sync=c.sync||e.sync,e.__composer[zt](c.pluralizationRules||e.pluralizationRules);const t=Mt(e.locale,{messages:c.messages,__i18n:c.__i18n});return Object.keys(t).forEach((c=>e.mergeLocaleMessage(c,t[c]))),c.datetimeFormats&&Object.keys(c.datetimeFormats).forEach((t=>e.mergeDateTimeFormat(t,c.datetimeFormats[t]))),c.numberFormats&&Object.keys(c.numberFormats).forEach((t=>e.mergeNumberFormat(t,c.numberFormats[t]))),e}const Qt=a("global-vue-i18n");function en(e={},c){const t=__VUE_I18N_LEGACY_API__&&C(e.legacy)?e.legacy:__VUE_I18N_LEGACY_API__,n=!C(e.globalInjection)||e.globalInjection,r=!__VUE_I18N_LEGACY_API__||!t||!!e.allowComposition,i=new Map,[o,s]=tn(e,t),l=a("");function u(e){return i.get(e)||null}function f(e,c){i.set(e,c)}function d(e){i.delete(e)}{const e={get mode(){return __VUE_I18N_LEGACY_API__&&t?"legacy":"composition"},get allowComposition(){return r},async install(c,...a){if(c.__VUE_I18N_SYMBOL__=l,c.provide(c.__VUE_I18N_SYMBOL__,e),L(a[0])){const c=a[0];e.__composerExtend=c.__composerExtend,e.__vueI18nExtend=c.__vueI18nExtend}let r=null;!t&&n&&(r=mn(c,e.global)),__VUE_I18N_FULL_INSTALL__&&Zt(c,e,...a),__VUE_I18N_LEGACY_API__&&t&&c.mixin(Xt(s,s.__composer,e));const i=c.unmount;c.unmount=()=>{r&&r(),e.dispose(),i()}},get global(){return s},dispose(){o.stop()},__instances:i,__getInstance:u,__setInstance:f,__deleteInstance:d};return e}}function cn(e={}){const c=(0,at._S)();if(null==c)throw pt(mt.MUST_BE_CALL_SETUP_TOP);if(!c.isCE&&null!=c.appContext.app&&!c.appContext.app.__VUE_I18N_SYMBOL__)throw pt(mt.NOT_INSTALLED);const t=nn(c),n=rn(t),a=bt(c),r=an(e,a);if(__VUE_I18N_LEGACY_API__&&"legacy"===t.mode&&!e.__useComponent){if(!t.allowComposition)throw pt(mt.NOT_AVAILABLE_IN_LEGACY_MODE);return un(c,r,n,e)}if("global"===r)return yt(n,e,a),n;if("parent"===r){let a=on(t,c,e.__useComponent);return null==a&&(a=n),a}const i=t;let o=i.__getInstance(c);if(null==o){const t=f({},e);"__i18n"in a&&(t.__i18n=a.__i18n),n&&(t.__root=n),o=At(t),i.__composerExtend&&(o[Ct]=i.__composerExtend(o)),ln(i,c,o),i.__setInstance(c,o)}return o}function tn(e,c,t){const n=(0,rt.Ul)();{const t=__VUE_I18N_LEGACY_API__&&c?n.run((()=>It(e))):n.run((()=>At(e)));if(null==t)throw pt(mt.UNEXPECTED_ERROR);return[n,t]}}function nn(e){{const c=(0,at.uU)(e.isCE?Qt:e.appContext.app.__VUE_I18N_SYMBOL__);if(!c)throw pt(e.isCE?mt.NOT_INSTALLED_WITH_PROVIDE:mt.UNEXPECTED_ERROR);return c}}function an(e,c){return u(e)?"__i18n"in c?"local":"global":e.useScope?e.useScope:"local"}function rn(e){return"composition"===e.mode?e.global:e.global.__composer}function on(e,c,t=!1){let n=null;const a=c.root;let r=sn(c,t);while(null!=r){const c=e;if("composition"===e.mode)n=c.__getInstance(r);else if(__VUE_I18N_LEGACY_API__){const e=c.__getInstance(r);null!=e&&(n=e.__composer,t&&n&&!n[Vt]&&(n=null))}if(null!=n)break;if(a===r)break;r=r.parent}return n}function sn(e,c=!1){return null==e?null:c&&e.vnode.ctx||e.parent}function ln(e,c,t){(0,at.u2)((()=>{0}),c),(0,at.wx)((()=>{const n=t;e.__deleteInstance(c);const a=n[Ct];a&&(a(),delete n[Ct])}),c)}function un(e,c,t,n={}){const a="local"===c,r=(0,rt.kl)(null);if(a&&e.proxy&&!e.proxy.$options.i18n&&!e.proxy.$options.__i18n)throw pt(mt.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);const i=C(n.inheritLocale)?n.inheritLocale:!V(n.locale),o=(0,rt.IL)(!a||i?t.locale.value:V(n.locale)?n.locale:lc),s=(0,rt.IL)(!a||i?t.fallbackLocale.value:V(n.fallbackLocale)||g(n.fallbackLocale)||L(n.fallbackLocale)||!1===n.fallbackLocale?n.fallbackLocale:o.value),u=(0,rt.IL)(Mt(o.value,n)),f=(0,rt.IL)(L(n.datetimeFormats)?n.datetimeFormats:{[o.value]:{}}),d=(0,rt.IL)(L(n.numberFormats)?n.numberFormats:{[o.value]:{}}),m=a?t.missingWarn:!C(n.missingWarn)&&!l(n.missingWarn)||n.missingWarn,p=a?t.fallbackWarn:!C(n.fallbackWarn)&&!l(n.fallbackWarn)||n.fallbackWarn,h=a?t.fallbackRoot:!C(n.fallbackRoot)||n.fallbackRoot,v=!!n.fallbackFormat,H=z(n.missing)?n.missing:null,M=z(n.postTranslation)?n.postTranslation:null,b=a?t.warnHtmlMessage:!C(n.warnHtmlMessage)||n.warnHtmlMessage,y=!!n.escapeParameter,x=a?t.modifiers:L(n.modifiers)?n.modifiers:{},S=n.pluralRules||a&&t.pluralRules;function w(){return[o.value,s.value,u.value,f.value,d.value]}const k=(0,at.S6)({get:()=>r.value?r.value.locale.value:o.value,set:e=>{r.value&&(r.value.locale.value=e),o.value=e}}),N=(0,at.S6)({get:()=>r.value?r.value.fallbackLocale.value:s.value,set:e=>{r.value&&(r.value.fallbackLocale.value=e),s.value=e}}),_=(0,at.S6)((()=>r.value?r.value.messages.value:u.value)),A=(0,at.S6)((()=>f.value)),E=(0,at.S6)((()=>d.value));function I(){return r.value?r.value.getPostTranslationHandler():M}function T(e){r.value&&r.value.setPostTranslationHandler(e)}function P(){return r.value?r.value.getMissingHandler():H}function O(e){r.value&&r.value.setMissingHandler(e)}function R(e){return w(),e()}function D(...e){return r.value?R((()=>Reflect.apply(r.value.t,null,[...e]))):R((()=>""))}function F(...e){return r.value?Reflect.apply(r.value.rt,null,[...e]):""}function B(...e){return r.value?R((()=>Reflect.apply(r.value.d,null,[...e]))):R((()=>""))}function K(...e){return r.value?R((()=>Reflect.apply(r.value.n,null,[...e]))):R((()=>""))}function U(e){return r.value?r.value.tm(e):{}}function $(e,c){return!!r.value&&r.value.te(e,c)}function j(e){return r.value?r.value.getLocaleMessage(e):{}}function q(e,c){r.value&&(r.value.setLocaleMessage(e,c),u.value[e]=c)}function G(e,c){r.value&&r.value.mergeLocaleMessage(e,c)}function W(e){return r.value?r.value.getDateTimeFormat(e):{}}function Y(e,c){r.value&&(r.value.setDateTimeFormat(e,c),f.value[e]=c)}function Z(e,c){r.value&&r.value.mergeDateTimeFormat(e,c)}function X(e){return r.value?r.value.getNumberFormat(e):{}}function J(e,c){r.value&&(r.value.setNumberFormat(e,c),d.value[e]=c)}function Q(e,c){r.value&&r.value.mergeNumberFormat(e,c)}const ee={get id(){return r.value?r.value.id:-1},locale:k,fallbackLocale:N,messages:_,datetimeFormats:A,numberFormats:E,get inheritLocale(){return r.value?r.value.inheritLocale:i},set inheritLocale(e){r.value&&(r.value.inheritLocale=e)},get availableLocales(){return r.value?r.value.availableLocales:Object.keys(u.value)},get modifiers(){return r.value?r.value.modifiers:x},get pluralRules(){return r.value?r.value.pluralRules:S},get isGlobal(){return!!r.value&&r.value.isGlobal},get missingWarn(){return r.value?r.value.missingWarn:m},set missingWarn(e){r.value&&(r.value.missingWarn=e)},get fallbackWarn(){return r.value?r.value.fallbackWarn:p},set fallbackWarn(e){r.value&&(r.value.missingWarn=e)},get fallbackRoot(){return r.value?r.value.fallbackRoot:h},set fallbackRoot(e){r.value&&(r.value.fallbackRoot=e)},get fallbackFormat(){return r.value?r.value.fallbackFormat:v},set fallbackFormat(e){r.value&&(r.value.fallbackFormat=e)},get warnHtmlMessage(){return r.value?r.value.warnHtmlMessage:b},set warnHtmlMessage(e){r.value&&(r.value.warnHtmlMessage=e)},get escapeParameter(){return r.value?r.value.escapeParameter:y},set escapeParameter(e){r.value&&(r.value.escapeParameter=e)},t:D,getPostTranslationHandler:I,setPostTranslationHandler:T,getMissingHandler:P,setMissingHandler:O,rt:F,d:B,n:K,tm:U,te:$,getLocaleMessage:j,setLocaleMessage:q,mergeLocaleMessage:G,getDateTimeFormat:W,setDateTimeFormat:Y,mergeDateTimeFormat:Z,getNumberFormat:X,setNumberFormat:J,mergeNumberFormat:Q};function ce(e){e.locale.value=o.value,e.fallbackLocale.value=s.value,Object.keys(u.value).forEach((c=>{e.mergeLocaleMessage(c,u.value[c])})),Object.keys(f.value).forEach((c=>{e.mergeDateTimeFormat(c,f.value[c])})),Object.keys(d.value).forEach((c=>{e.mergeNumberFormat(c,d.value[c])})),e.escapeParameter=y,e.fallbackFormat=v,e.fallbackRoot=h,e.fallbackWarn=p,e.missingWarn=m,e.warnHtmlMessage=b}return(0,at._O)((()=>{if(null==e.proxy||null==e.proxy.$i18n)throw pt(mt.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const t=r.value=e.proxy.$i18n.__composer;"global"===c?(o.value=t.locale.value,s.value=t.fallbackLocale.value,u.value=t.messages.value,f.value=t.datetimeFormats.value,d.value=t.numberFormats.value):a&&ce(t)})),ee}const fn=["locale","fallbackLocale","availableLocales"],dn=["t","rt","d","n","tm","te"];function mn(e,c){const t=Object.create(null);fn.forEach((e=>{const n=Object.getOwnPropertyDescriptor(c,e);if(!n)throw pt(mt.UNEXPECTED_ERROR);const a=(0,rt.Ir)(n.value)?{get(){return n.value.value},set(e){n.value.value=e}}:{get(){return n.get&&n.get()}};Object.defineProperty(t,e,a)})),e.config.globalProperties.$i18n=t,dn.forEach((t=>{const n=Object.getOwnPropertyDescriptor(c,t);if(!n||!n.value)throw pt(mt.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,`$${t}`,n)}));const n=()=>{delete e.config.globalProperties.$i18n,dn.forEach((c=>{delete e.config.globalProperties[`$${c}`]}))};return n}if(ot(),__INTLIFY_JIT_COMPILATION__?vc(Rc):vc(Oc),gc(Ee),zc(nc),__INTLIFY_PROD_DEVTOOLS__){const e=m();e.__INTLIFY__=!0,$e(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}},7464:function(e,c,t){t.d(c,{gv:function(){return cc},oz:function(){return D}});t(3248);var n=t(4108),a=t(2500);
/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
/**
 * WCAG 3.0 APCA perceptual contrast algorithm from https://github.com/Myndex/SAPC-APCA
 * @licence https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @see https://www.w3.org/WAI/GL/task-forces/silver/wiki/Visual_Contrast_of_Text_Subgroup
 */
const n=2.4,a=.2126729,r=.7151522,i=.072175,o=.55,s=.58,l=.57,u=.62,f=.03,d=1.45,m=5e-4,p=1.25,h=1.25,v=.078,g=12.82051282051282,z=.06,V=.001;function C(e,c){const t=(e.r/255)**n,C=(e.g/255)**n,H=(e.b/255)**n,M=(c.r/255)**n,b=(c.g/255)**n,y=(c.b/255)**n;let L,x=t*a+C*r+H*i,S=M*a+b*r+y*i;if(x<=f&&(x+=(f-x)**d),S<=f&&(S+=(f-S)**d),Math.abs(S-x)<m)return 0;if(S>x){const e=(S**o-x**s)*p;L=e<V?0:e<v?e-e*g*z:e-z}else{const e=(S**u-x**l)*h;L=e>-V?0:e>-v?e-e*g*z:e+z}return 100*L}var H=t(240),M=t(2248);const b=.20689655172413793,y=e=>e>b**3?Math.cbrt(e):e/(3*b**2)+4/29,L=e=>e>b?e**3:3*b**2*(e-4/29);function x(e){const c=y,t=c(e[1]);return[116*t-16,500*(c(e[0]/.95047)-t),200*(t-c(e[2]/1.08883))]}function S(e){const c=L,t=(e[0]+16)/116;return[.95047*c(t+e[1]/500),c(t),1.08883*c(t-e[2]/200)]}const w=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],k=e=>e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055,N=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],_=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function A(e){const c=Array(3),t=k,n=w;for(let a=0;a<3;++a)c[a]=Math.round(255*(0,M.qk)(t(n[a][0]*e[0]+n[a][1]*e[1]+n[a][2]*e[2])));return{r:c[0],g:c[1],b:c[2]}}function E(e){let{r:c,g:t,b:n}=e;const a=[0,0,0],r=_,i=N;c=r(c/255),t=r(t/255),n=r(n/255);for(let o=0;o<3;++o)a[o]=i[o][0]*c+i[o][1]*t+i[o][2]*n;return a}function I(e){return!!e&&/^(#|var\(--|(rgb|hsl)a?\()/.test(e)}function T(e){return I(e)&&!/^((rgb|hsl)a?\()?var\(--/.test(e)}const P=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,O={rgb:(e,c,t,n)=>({r:e,g:c,b:t,a:n}),rgba:(e,c,t,n)=>({r:e,g:c,b:t,a:n}),hsl:(e,c,t,n)=>F({h:e,s:c,l:t,a:n}),hsla:(e,c,t,n)=>F({h:e,s:c,l:t,a:n}),hsv:(e,c,t,n)=>D({h:e,s:c,v:t,a:n}),hsva:(e,c,t,n)=>D({h:e,s:c,v:t,a:n})};function R(e){if("number"===typeof e)return(isNaN(e)||e<0||e>16777215)&&(0,H.yC)(`'${e}' is not a valid hex color`),{r:(16711680&e)>>16,g:(65280&e)>>8,b:255&e};if("string"===typeof e&&P.test(e)){const{groups:c}=e.match(P),{fn:t,values:n}=c,a=n.split(/,\s*/).map((e=>e.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(t)?parseFloat(e)/100:parseFloat(e)));return O[t](...a)}if("string"===typeof e){let c=e.startsWith("#")?e.slice(1):e;[3,4].includes(c.length)?c=c.split("").map((e=>e+e)).join(""):[6,8].includes(c.length)||(0,H.yC)(`'${e}' is not a valid hex(a) color`);const t=parseInt(c,16);return(isNaN(t)||t<0||t>4294967295)&&(0,H.yC)(`'${e}' is not a valid hex(a) color`),W(c)}if("object"===typeof e){if((0,M.UF)(e,["r","g","b"]))return e;if((0,M.UF)(e,["h","s","l"]))return D(U(e));if((0,M.UF)(e,["h","s","v"]))return D(e)}throw new TypeError(`Invalid color: ${null==e?e:String(e)||e.constructor.name}\nExpected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function D(e){const{h:c,s:t,v:n,a:a}=e,r=e=>{const a=(e+c/60)%6;return n-n*t*Math.max(Math.min(a,4-a,1),0)},i=[r(5),r(3),r(1)].map((e=>Math.round(255*e)));return{r:i[0],g:i[1],b:i[2],a:a}}function F(e){return D(U(e))}function B(e){if(!e)return{h:0,s:1,v:1,a:1};const c=e.r/255,t=e.g/255,n=e.b/255,a=Math.max(c,t,n),r=Math.min(c,t,n);let i=0;a!==r&&(a===c?i=60*(0+(t-n)/(a-r)):a===t?i=60*(2+(n-c)/(a-r)):a===n&&(i=60*(4+(c-t)/(a-r)))),i<0&&(i+=360);const o=0===a?0:(a-r)/a,s=[i,o,a];return{h:s[0],s:s[1],v:s[2],a:e.a}}function K(e){const{h:c,s:t,v:n,a:a}=e,r=n-n*t/2,i=1===r||0===r?0:(n-r)/Math.min(r,1-r);return{h:c,s:i,l:r,a:a}}function U(e){const{h:c,s:t,l:n,a:a}=e,r=n+t*Math.min(n,1-n),i=0===r?0:2-2*n/r;return{h:c,s:i,v:r,a:a}}function $(e){let{r:c,g:t,b:n,a:a}=e;return void 0===a?`rgb(${c}, ${t}, ${n})`:`rgba(${c}, ${t}, ${n}, ${a})`}function j(e){return $(D(e))}function q(e){const c=Math.round(e).toString(16);return("00".substr(0,2-c.length)+c).toUpperCase()}function G(e){let{r:c,g:t,b:n,a:a}=e;return`#${[q(c),q(t),q(n),void 0!==a?q(Math.round(255*a)):""].join("")}`}function W(e){e=X(e);let[c,t,n,a]=(0,M.yc)(e,2).map((e=>parseInt(e,16)));return a=void 0===a?a:a/255,{r:c,g:t,b:n,a:a}}function Y(e){const c=W(e);return B(c)}function Z(e){return G(D(e))}function X(e){return e.startsWith("#")&&(e=e.slice(1)),e=e.replace(/([^0-9a-f])/gi,"F"),3!==e.length&&4!==e.length||(e=e.split("").map((e=>e+e)).join("")),6!==e.length&&(e=(0,M.MJ)((0,M.MJ)(e,6),8,"F")),e}function J(e,c){const t=x(E(e));return t[0]=t[0]+10*c,A(S(t))}function Q(e,c){const t=x(E(e));return t[0]=t[0]-10*c,A(S(t))}function ee(e){const c=R(e);return E(c)[1]}function ce(e,c){const t=ee(e),n=ee(c),a=Math.max(t,n),r=Math.min(t,n);return(a+.05)/(r+.05)}function te(e){const c=Math.abs(C(R(0),R(e))),t=Math.abs(C(R(16777215),R(e)));return t>Math.min(c,50)?"#fff":"#000"}},240:function(e,c,t){t.d(c,{Oq:function(){return r},au:function(){return i},yC:function(){return a}});var n=t(4108);function a(e){(0,n.mo)(`Vuetify: ${e}`)}function r(e){(0,n.mo)(`Vuetify error: ${e}`)}function i(e,c){c=Array.isArray(c)?c.slice(0,-1).map((e=>`'${e}'`)).join(", ")+` or '${c.at(-1)}'`:`'${c}'`,(0,n.mo)(`[Vuetify UPGRADE] '${e}' is deprecated, use ${c} instead.`)}},1292:function(e,c,t){t.d(c,{_M:function(){return s},e8:function(){return l},iY:function(){return u}});var n=t(7960),a=t(4108),r=t(240),i=t(2248),o=t(6720);function s(e){if(e._setup=e._setup??e.setup,!e.name)return(0,r.yC)("The component is missing an explicit name, unable to generate default prop value"),e;if(e._setup){e.props=(0,o.a)(e.props??{},e.name)();const c=Object.keys(e.props).filter((e=>"class"!==e&&"style"!==e));e.filterProps=function(e){return(0,i.gl)(e,c)},e.props._as=String,e.setup=function(c,t){const a=(0,n.cZ)();if(!a.value)return e._setup(c,t);const{props:r,provideSubDefaults:i}=(0,n.ui)(c,c._as??e.name,a),o=e._setup(r,t);return i(),o}}return e}function l(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return c=>(e?s:a._M)(c)}function u(e,c){return c.props=e,c}},3448:function(e,c,t){t.d(c,{AJ:function(){return i},_S:function(){return r},gV:function(){return l}});var n=t(4108),a=t(2248);function r(e,c){const t=(0,n._S)();if(!t)throw new Error(`[Vuetify] ${e} ${c||"must be called from inside a setup function"}`);return t}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"composables";const c=r(e).type;return(0,a.MZ)(c?.aliasName||c?.name)}let o=0,s=new WeakMap;function l(){const e=r("getUid");if(s.has(e))return s.get(e);{const c=o++;return s.set(e,c),c}}l.reset=()=>{o=0,s=new WeakMap}},1472:function(e,c,t){t.d(c,{Ij:function(){return r},SA:function(){return i},gE:function(){return n},my:function(){return a}});const n="undefined"!==typeof window,a=n&&"IntersectionObserver"in window,r=n&&("ontouchstart"in window||window.navigator.maxTouchPoints>0),i=n&&"EyeDropper"in window},2248:function(e,c,t){t.d(c,{C_:function(){return y},Cu:function(){return O},E1:function(){return ie},En:function(){return T},G:function(){return B},G0:function(){return ae},G2:function(){return ce},IN:function(){return h},Ih:function(){return I},KF:function(){return le},KM:function(){return Q},Kw:function(){return se},MJ:function(){return F},MZ:function(){return q},OI:function(){return v},Qv:function(){return fe},S0:function(){return ee},U9:function(){return re},UF:function(){return L},UN:function(){return ne},W8:function(){return _},WE:function(){return P},WY:function(){return ue},Y9:function(){return C},Yd:function(){return S},_E:function(){return te},_P:function(){return Z},aG:function(){return z},cJ:function(){return M},gV:function(){return J},gl:function(){return x},keyValues:function(){return b},m6:function(){return V},mo:function(){return k},ms:function(){return U},my:function(){return j},ox:function(){return g},qk:function(){return R},qn:function(){return w},sJ:function(){return X},sz:function(){return G},t7:function(){return oe},uq:function(){return D},yC:function(){return $},yc:function(){return K},yg:function(){return H}});t(3248);var n=t(2500),a=t(4108),r=t(9096),i=t(1472);function o(e,c,t){s(e,c),c.set(e,t)}function s(e,c){if(c.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function l(e,c,t){var n=d(e,c,"set");return u(e,n,t),t}function u(e,c,t){if(c.set)c.set.call(e,t);else{if(!c.writable)throw new TypeError("attempted to set read only private field");c.value=t}}function f(e,c){var t=d(e,c,"get");return m(e,t)}function d(e,c,t){if(!c.has(e))throw new TypeError("attempted to "+t+" private field on non-instance");return c.get(e)}function m(e,c){return c.get?c.get.call(e):c.value}function p(e,c,t){const n=c.length-1;if(n<0)return void 0===e?t:e;for(let a=0;a<n;a++){if(null==e)return t;e=e[c[a]]}return null==e||void 0===e[c[n]]?t:e[c[n]]}function h(e,c){if(e===c)return!0;if(e instanceof Date&&c instanceof Date&&e.getTime()!==c.getTime())return!1;if(e!==Object(e)||c!==Object(c))return!1;const t=Object.keys(e);return t.length===Object.keys(c).length&&t.every((t=>h(e[t],c[t])))}function v(e,c,t){return null!=e&&c&&"string"===typeof c?void 0!==e[c]?e[c]:(c=c.replace(/\[(\w+)\]/g,".$1"),c=c.replace(/^\./,""),p(e,c.split("."),t)):t}function g(e,c,t){if(!0===c)return void 0===e?t:e;if(null==c||"boolean"===typeof c)return t;if(e!==Object(e)){if("function"!==typeof c)return t;const n=c(e,t);return"undefined"===typeof n?t:n}if("string"===typeof c)return v(e,c,t);if(Array.isArray(c))return p(e,c,t);if("function"!==typeof c)return t;const n=c(e,t);return"undefined"===typeof n?t:n}function z(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Array.from({length:e},((e,t)=>c+t))}function V(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"px";return null==e||""===e?void 0:isNaN(+e)?String(e):isFinite(+e)?`${Number(e)}${c}`:void 0}function C(e){return null!==e&&"object"===typeof e&&!Array.isArray(e)}function H(e){if(e&&"$el"in e){const c=e.$el;return c?.nodeType===Node.TEXT_NODE?c.nextElementSibling:c}return e}const M=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16}),b=Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"});function y(e){return Object.keys(e)}function L(e,c){return c.every((c=>e.hasOwnProperty(c)))}function x(e,c){const t={},n=new Set(Object.keys(e));for(const a of c)n.has(a)&&(t[a]=e[a]);return t}function S(e,c,t){const n=Object.create(null),a=Object.create(null);for(const r in e)c.some((e=>e instanceof RegExp?e.test(r):e===r))&&!t?.some((e=>e===r))?n[r]=e[r]:a[r]=e[r];return[n,a]}function w(e,c){const t={...e};return c.forEach((e=>delete t[e])),t}function k(e,c){const t={};return c.forEach((c=>t[c]=e[c])),t}const N=/^on[^a-z]/,_=e=>N.test(e),A=["onAfterscriptexecute","onAnimationcancel","onAnimationend","onAnimationiteration","onAnimationstart","onAuxclick","onBeforeinput","onBeforescriptexecute","onChange","onClick","onCompositionend","onCompositionstart","onCompositionupdate","onContextmenu","onCopy","onCut","onDblclick","onFocusin","onFocusout","onFullscreenchange","onFullscreenerror","onGesturechange","onGestureend","onGesturestart","onGotpointercapture","onInput","onKeydown","onKeypress","onKeyup","onLostpointercapture","onMousedown","onMousemove","onMouseout","onMouseover","onMouseup","onMousewheel","onPaste","onPointercancel","onPointerdown","onPointerenter","onPointerleave","onPointermove","onPointerout","onPointerover","onPointerup","onReset","onSelect","onSubmit","onTouchcancel","onTouchend","onTouchmove","onTouchstart","onTransitioncancel","onTransitionend","onTransitionrun","onTransitionstart","onWheel"],E=["ArrowUp","ArrowDown","ArrowRight","ArrowLeft","Enter","Escape","Tab"," "];function I(e){return e.isComposing&&E.includes(e.key)}function T(e){const[c,t]=S(e,[N]),n=w(c,A),[a,r]=S(t,["class","style","id",/^data-/]);return Object.assign(a,c),Object.assign(r,n),[a,r]}function P(e){return null==e?[]:Array.isArray(e)?e:[e]}function O(e,c){let t=0;const a=function(){for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];clearTimeout(t),t=setTimeout((()=>e(...r)),(0,n.KV)(c))};return a.clear=()=>{clearTimeout(t)},a.immediate=e,a}function R(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Math.max(c,Math.min(t,e))}function D(e){const c=e.toString().trim();return c.includes(".")?c.length-c.indexOf(".")-1:0}function F(e,c){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0";return e+t.repeat(Math.max(0,c-e.length))}function B(e,c){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0";return t.repeat(Math.max(0,c-e.length))+e}function K(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const t=[];let n=0;while(n<e.length)t.push(e.substr(n,c)),n+=c;return t}function U(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;if(e<c)return`${e} B`;const t=1024===c?["Ki","Mi","Gi"]:["k","M","G"];let n=-1;while(Math.abs(e)>=c&&n<t.length-1)e/=c,++n;return`${e.toFixed(1)} ${t[n]}B`}function $(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0;const n={};for(const a in e)n[a]=e[a];for(const a in c){const r=e[a],i=c[a];C(r)&&C(i)?n[a]=$(r,i,t):Array.isArray(r)&&Array.isArray(i)&&t?n[a]=t(r,i):n[a]=i}return n}function j(e){return e.map((e=>e.type===a.ae?j(e.children):e)).flat()}function q(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(q.cache.has(e))return q.cache.get(e);const c=e.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return q.cache.set(e,c),c}function G(e,c){if(!c||"object"!==typeof c)return[];if(Array.isArray(c))return c.map((c=>G(e,c))).flat(1);if(Array.isArray(c.children))return c.children.map((c=>G(e,c))).flat(1);if(c.component){if(Object.getOwnPropertySymbols(c.component.provides).includes(e))return[c.component];if(c.component.subTree)return G(e,c.component.subTree).flat(1)}return[]}q.cache=new Map;var W=new WeakMap,Y=new WeakMap;class Z{constructor(e){o(this,W,{writable:!0,value:[]}),o(this,Y,{writable:!0,value:0}),this.size=e}push(e){f(this,W)[f(this,Y)]=e,l(this,Y,(f(this,Y)+1)%this.size)}values(){return f(this,W).slice(f(this,Y)).concat(f(this,W).slice(0,f(this,Y)))}}function X(e){return"touches"in e?{clientX:e.touches[0].clientX,clientY:e.touches[0].clientY}:{clientX:e.clientX,clientY:e.clientY}}function J(e){const c=(0,n.cB)({}),t=(0,a.S6)(e);return(0,a.q6)((()=>{for(const e in t.value)c[e]=t.value[e]}),{flush:"sync"}),(0,n.kx)(c)}function Q(e,c){return e.includes(c)}function ee(e){return e[2].toLowerCase()+e.slice(3)}const ce=()=>[Function,Array];function te(e,c){return c="on"+(0,r.Yj)(c),!!(e[c]||e[`${c}Once`]||e[`${c}Capture`]||e[`${c}OnceCapture`]||e[`${c}CaptureOnce`])}function ne(e){for(var c=arguments.length,t=new Array(c>1?c-1:0),n=1;n<c;n++)t[n-1]=arguments[n];if(Array.isArray(e))for(const a of e)a(...t);else"function"===typeof e&&e(...t)}function ae(e){let c=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const t=["button","[href]",'input:not([type="hidden"])',"select","textarea","[tabindex]"].map((e=>`${e}${c?':not([tabindex="-1"])':""}:not([disabled])`)).join(", ");return[...e.querySelectorAll(t)]}function re(e,c,t){let n,a=e.indexOf(document.activeElement);const r="next"===c?1:-1;do{a+=r,n=e[a]}while((!n||null==n.offsetParent||!(t?.(n)??1))&&a<e.length&&a>=0);return n}function ie(e,c){const t=ae(e);if(c)if("first"===c)t[0]?.focus();else if("last"===c)t.at(-1)?.focus();else if("number"===typeof c)t[c]?.focus();else{const n=re(t,c);n?n.focus():ie(e,"next"===c?"first":"last")}else e!==document.activeElement&&e.contains(document.activeElement)||t[0]?.focus()}function oe(e){return null===e||void 0===e||"string"===typeof e&&""===e.trim()}function se(){}function le(e,c){const t=i.gE&&"undefined"!==typeof CSS&&"undefined"!==typeof CSS.supports&&CSS.supports(`selector(${c})`);if(!t)return null;try{return!!e&&e.matches(c)}catch(n){return null}}function ue(e){return e.some((e=>!(0,a.KE)(e)||e.type!==a.gX&&(e.type!==a.ae||ue(e.children))))?e:null}function fe(e,c){if(!i.gE||0===e)return c(),()=>{};const t=window.setTimeout(c,e);return()=>window.clearTimeout(t)}},6720:function(e,c,t){function n(e,c){return t=>Object.keys(e).reduce(((n,a)=>{const r="object"===typeof e[a]&&null!=e[a]&&!Array.isArray(e[a]),i=r?e[a]:{type:e[a]};return n[a]=t&&a in t?{...i,default:t[a]}:i,c&&!n[a].source&&(n[a].source=c),n}),{})}t.d(c,{a:function(){return n}})}}]);
//# sourceMappingURL=chunk-vendors.dda3056f.js.map