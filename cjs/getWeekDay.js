"use strict";var utils=require("./utils-3878e12f.js");const formatDay=function(e=0,t="eeee"){switch(t){case"eee":return utils.banglaWeekDays[e];default:return`${utils.banglaWeekDays[e]}বার`}};function getWeekDay(e=new Date,t={}){if(!utils.isValidDate(e))return utils.errorMessage;const a=(e=new Date(e)).getDay(),r=t.format||"eeee";return formatDay(a,r)}module.exports=getWeekDay;