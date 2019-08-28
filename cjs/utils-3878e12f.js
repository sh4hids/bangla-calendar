"use strict";const convertNumbers=function(e){const t={0:"০",1:"১",2:"২",3:"৩",4:"৪",5:"৫",6:"৬",7:"৭",8:"৮",9:"৯",".":".","-":"-"};let a="";if(!e)return"";const r=e.toString(),s=r.length;for(let e=0;e<s;e++)isNaN(parseFloat(r[e]))||isNaN(r[e]-0)?a+=r[e]:a+=t[r[e]];return a},banglaMonths=["বৈশাখ","জ্যৈষ্ঠ","আষাঢ়","শ্রাবণ","ভাদ্র","আশ্বিন","কার্তিক","অগ্রহায়ণ","পৌষ","মাঘ","ফাল্গুন","চৈত্র"],banglaWeekDays=["রবি","সোম","মঙ্গল","বুধ","বৃহস্পতি","শুক্র","শনি"],isLeapYear=function(e=0){return e%100==0?e%400==0:e%4==0},isValidDate=function(e){return"[object Date]"===Object.prototype.toString.call(e)},errorMessage="Invalid Date";exports.banglaMonths=banglaMonths,exports.banglaWeekDays=banglaWeekDays,exports.convertNumbers=convertNumbers,exports.errorMessage=errorMessage,exports.isLeapYear=isLeapYear,exports.isValidDate=isValidDate;
