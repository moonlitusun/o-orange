!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["o-orange"]=t():e["o-orange"]=t()}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([,function(e,t,r){"use strict";r.r(t),t.default=function(e,t){if(!e)throw new Error("Invalid Date");if(!t)throw new Error("Please enter the date format you want to convert");let r=e;"string"==typeof r&&(r=r.replace(/-/g,"/"));const n=new Date(r),o={yyyy:n.getFullYear(),M:n.getMonth()+1,d:n.getDate(),H:n.getHours(),m:n.getMinutes(),s:n.getSeconds(),MM:`${n.getMonth()+101}`.substr(1),dd:`${n.getDate()+100}`.substr(1),HH:`${n.getHours()+100}`.substr(1),mm:`${n.getMinutes()+100}`.substr(1),ss:`${n.getSeconds()+100}`.substr(1)};try{return t.replace(/(yyyy|MM?|dd?|HH?|mm?|ss?)/g,e=>o[e])}catch(e){throw new Error("The date format is wrong!")}}}])}));