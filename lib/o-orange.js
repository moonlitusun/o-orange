!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["o-orange"]=e():t["o-orange"]=e()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var u=e[r]={i:r,l:!1,exports:{}};return t[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var u in t)n.d(r,u,function(e){return t[e]}.bind(null,u));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=12)}([function(t,e,n){"use strict";n.r(e),e.default=function(t){return"number"==typeof t||"[object Number]"===Object.prototype.toString.call(t)}},function(t,e,n){"use strict";n.r(e),e.default=function(t,e){if(!t)throw new Error("Invalid Date");if(!e)throw new Error("Please enter the date format you want to convert");let n=t;"string"==typeof n&&(n=n.replace(/-/g,"/"));const r=new Date(n),u={yyyy:r.getFullYear(),M:r.getMonth()+1,d:r.getDate(),H:r.getHours(),m:r.getMinutes(),s:r.getSeconds(),MM:`${r.getMonth()+101}`.substr(1),dd:`${r.getDate()+100}`.substr(1),HH:`${r.getHours()+100}`.substr(1),mm:`${r.getMinutes()+100}`.substr(1),ss:`${r.getSeconds()+100}`.substr(1)};try{return e.replace(/(yyyy|MM?|dd?|HH?|mm?|ss?)/g,t=>u[t])}catch(t){throw new Error("The date format is wrong!")}}},function(t,e,n){"use strict";n.r(e);var r=n(0);e.default=function(t=0,e=2,n="---"){const u=Number(t);return!Object(r.default)(u)||isNaN(u)?n:u.toFixed(e)}},function(t,e,n){"use strict";function r(t){return function(e){const n=t.match(new RegExp(`(\\?|\\&)${e}=([^\\&]+)`));return n?n[2]:null}}n.r(e),n.d(e,"parseUrlByHash",(function(){return u})),n.d(e,"parseUrlBySearch",(function(){return o}));const u=r(window.location.hash),o=r(window.location.search);e.default=(t,e)=>r(t)(e)},function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return o}));var r=n(1);const u={millsecond:{get:"getMillseconds",set:"setMillseconds",unit:1},second:{get:"getSeconds",set:"setSeconds",unit:1},minute:{get:"getMinutes",set:"setMinutes",unit:1},hour:{get:"getHours",set:"setHours",unit:1},day:{get:"getDate",set:"setDate",unit:1},week:{get:"getDate",set:"setDate",unit:7},month:{get:"getMonth",set:"setMonth",unit:1},year:{get:"getFullYear",set:"setFullYear",unit:1}};function o(t,e,n={}){if(!t||!e)throw new Error("You must specify the start ant end time");const{dateType:o="yyyy-MM-dd HH:mm:ss",rangeType:s="minute",rangeMultiple:i=1,fixedEndTime:a=!1}=n,c=[],f=new Date(t),l=new Date(e),d=l.getTime(),{get:g,set:p,unit:y}=u[s];let b=new Date(f);for(;b.getTime()<=d;)c.push(Object(r.default)(b,o)),b[p](b[g]()+y*i);return a&&c[c.length-1]!==Object(r.default)(l,o)&&c.push(Object(r.default)(l,o)),c}},function(t,e,n){"use strict";n.r(e),e.default=function(t){return t instanceof Array||"[object Array]"===Object.prototype.toString.call(t)}},function(t,e,n){"use strict";n.r(e),e.default=function(t){return null!==t&&"[object Object]"===Object.prototype.toString.call(t)}},function(t,e,n){"use strict";n.r(e),e.default=function(t){return void 0===t}},function(t,e,n){"use strict";n.r(e),e.default=function(t,e=1,n=10){const r=(e-1)*n,u=e*n;return t.slice(r,u)}},function(t,e,n){"use strict";function r(t){const[e,n]=[t[0],t.slice(1)];return n.map(t=>{const n={};return t.forEach((t,r)=>n[e[r]]=t),n})}n.r(e),n.d(e,"default",(function(){return r}))},function(t,e,n){"use strict";n.r(e);var r=n(0),u=n(2);e.default=function(t=0,e=2,n="---"){return!Object(r.default)(t>>0)||isNaN(t)?n:`${Object(u.default)(100*t,e)}%`}},function(t,e,n){"use strict";n.r(e),e.default=function(t=0,e=","){let[n,r]=t.toString().split(".");return n=n.replace(/\B(?=(\d{3})+(?!\d))/g,e),r?`${n}.${r}`:n}},function(t,e,n){"use strict";n.r(e);var r=n(1),u=n(4),o=n(5),s=n(0),i=n(6),a=n(7),c=n(8),f=n(9),l=n(3),d=n(2),g=n(10),p=n(11);e.default={dateFormat:r.default,dateRange:u.default,isArray:o.default,isNumber:s.default,isObject:i.default,isUndefined:a.default,pagination:c.default,parseKeyHeader:f.default,parseUrl:l.default,parseUrlByHash:l.parseUrlByHash,parseUrlBySearch:l.parseUrlBySearch,toFixed:d.default,toPercent:g.default,toThousand:p.default}}])}));