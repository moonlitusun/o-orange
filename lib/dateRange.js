!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["o-orange"]=t():e["o-orange"]=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([,function(e,t,n){"use strict";n.r(t),t.default=function(e,t){if(!e)throw new Error("Invalid Date");if(!t)throw new Error("Please enter the date format you want to convert");let n=e;"string"==typeof n&&(n=n.replace(/-/g,"/"));const r=new Date(n),o={yyyy:r.getFullYear(),M:r.getMonth()+1,d:r.getDate(),H:r.getHours(),m:r.getMinutes(),s:r.getSeconds(),MM:`${r.getMonth()+101}`.substr(1),dd:`${r.getDate()+100}`.substr(1),HH:`${r.getHours()+100}`.substr(1),mm:`${r.getMinutes()+100}`.substr(1),ss:`${r.getSeconds()+100}`.substr(1)};try{return t.replace(/(yyyy|MM?|dd?|HH?|mm?|ss?)/g,e=>o[e])}catch(e){throw new Error("The date format is wrong!")}}},,,function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var r=n(1);const o={millsecond:{get:"getMillseconds",set:"setMillseconds",unit:1},second:{get:"getSeconds",set:"setSeconds",unit:1},minute:{get:"getMinutes",set:"setMinutes",unit:1},hour:{get:"getHours",set:"setHours",unit:1},day:{get:"getDate",set:"setDate",unit:1},week:{get:"getDate",set:"setDate",unit:7},month:{get:"getMonth",set:"setMonth",unit:1},year:{get:"getFullYear",set:"setFullYear",unit:1}};function u(e,t,n={}){if(!e||!t)throw new Error("You must specify the start ant end time");const{dateType:u="yyyy-MM-dd HH:mm:ss",rangeType:s="minute",rangeMultiple:i=1,fixedEndTime:a=!1}=n,c=[],f=new Date(e),d=new Date(t),l=d.getTime(),{get:g,set:y,unit:p}=o[s];let m=new Date(f);for(;m.getTime()<=l;)c.push(Object(r.default)(m,u)),m[y](m[g]()+p*i);return a&&c[c.length-1]!==Object(r.default)(d,u)&&c.push(Object(r.default)(d,u)),c}}])}));