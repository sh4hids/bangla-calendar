!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).banglaCalendar={})}(this,(function(e){"use strict";const t=function(e){const t={0:"০",1:"১",2:"২",3:"৩",4:"৪",5:"৫",6:"৬",7:"৭",8:"৮",9:"৯",".":".","-":"-"};let n="";if(!e)return"";const r=e.toString(),a=r.length;for(let e=0;e<a;e++)isNaN(parseFloat(r[e]))||isNaN(r[e]-0)?n+=r[e]:n+=t[r[e]];return n},n=["বৈশাখ","জ্যৈষ্ঠ","আষাঢ়","শ্রাবণ","ভাদ্র","আশ্বিন","কার্তিক","অগ্রহায়ণ","পৌষ","মাঘ","ফাল্গুন","চৈত্র"],r=["রবি","সোম","মঙ্গল","বুধ","বৃহস্পতি","শুক্র","শনি"],a=function(e){return"[object Date]"===Object.prototype.toString.call(e)},u="Invalid Date",o=function(e=1,n="D"){let r=e.toString();switch(n){case"DD":return r=1===r.length?`0${r}`:r,t(r);default:return t(e)}};function c(e=new Date,t={}){if(!a(e))return u;const n=(e=new Date(e)).getUTCDate(),r=e.getMonth(),c=e.getFullYear(),i=t.format||"D";return 0===r?o(n<14?n+16:n-14,i):1===r?o(n<14?n+17:n-13,i):2===r?n<15?function(e=0){return e%100==0?e%400==0:e%4==0}(c)?o(n+16,i):o(n+15,i):o(n-14,i):3===r?o(n<14?n+17:n-13,i):4===r||5===r?o(n<15?n+17:n-14,i):6===r||7===r||8===r?o(n<16?n+16:n-15,i):9===r?o(n<16?n+15:n-16,i):10===r||11===r?o(n<15?n+15:n-15,i):void 0}const i=function(e=0,r="MMMM"){let a=(e+1).toString();switch(r){case"M":return t(a);case"MM":return a=1===a.length?`0${a}`:a,t(a);default:return n[e]}};function f(e=new Date,t={}){if(!a(e))return u;const n=(e=new Date(e)).getUTCDate(),r=e.getMonth();e.getFullYear();const o=t.format||"MMMM";return 3===r&&n>13||4===r&&n<15?i(0,o):4===r&&n>14||5===r&&n<15?i(1,o):5===r&&n>14||6===r&&n<16?i(2,o):6===r&&n>15||7===r&&n<16?i(3,o):7===r&&n>15||8===r&&n<16?i(4,o):8===r&&n>15||9===r&&n<16?i(5,o):9===r&&n>15||10===r&&n<15?i(6,o):10===r&&n>14||11===r&&n<15?i(7,o):11===r&&n>14||0===r&&n<14?i(8,o):0===r&&n>13||1===r&&n<14?i(9,o):1===r&&n>13||2===r&&n<15?i(10,o):2===r&&n>14||3===r&&n<14?i(11,o):void 0}const Y=function(e=0,n="YYYY"){let r=e.toString();switch(n){case"YY":return t(r.substring(r.length-2));case"YYYYb":return`${t(r)} (বঙ্গাব্দ)`;default:return t(r)}};function s(e=new Date,t={}){if(!a(e))return u;const n=(e=new Date(e)).getUTCDate(),r=e.getMonth(),o=e.getFullYear(),c=t.format||"YYYY";return Y(r<3||3===r&&n<14?o-594:o-593,c)}function l(e=new Date,t={}){if(!a(e))return u;return function(e=0,t="eeee"){switch(t){case"eee":return r[e];default:return`${r[e]}বার`}}((e=new Date(e)).getDay(),t.format||"eeee")}e.getDate=function(e=new Date,t={}){if(!a(e))return u;e=new Date(e);let n=(t.format||"eeee, D MMMM, YYYY").replace(/eeee|eee/gi,(t=>{switch(t){case"eee":return l(e,{format:"eee"});default:return l(e)}}));return n=n.replace(/DD|D/gi,(t=>{switch(t){case"DD":return c(e,{format:"DD"});default:return c(e)}})),n=n.replace(/MMMM|MM|M/gi,(t=>{switch(t){case"M":return f(e,{format:"M"});case"MM":return f(e,{format:"MM"});default:return f(e)}})),n=n.replace(/YYYYb|YYYY|YY/gi,(t=>{switch(t){case"YY":return s(e,{format:"YY"});case"YYYYb":return s(e,{format:"YYYYb"});default:return s(e)}})),n},e.getDay=c,e.getMonth=f,e.getWeekDay=l,e.getYear=s}));
