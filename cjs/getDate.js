"use strict";var utils=require("./utils-3878e12f.js"),getDay=require("./getDay.js"),getMonth=require("./getMonth.js"),getYear=require("./getYear.js"),getWeekDay=require("./getWeekDay.js");function getDate(e=new Date,t={}){if(!utils.isValidDate(e))return utils.errorMessage;e=new Date(e);let r=(t.format||"eeee, D MMMM, YYYY").replace(/eeee|eee/gi,t=>{switch(t){case"eee":return getWeekDay(e,{format:"eee"});default:return getWeekDay(e)}});return r=(r=(r=r.replace(/DD|D/gi,t=>{switch(t){case"DD":return getDay(e,{format:"DD"});default:return getDay(e)}})).replace(/MMMM|MM|M/gi,t=>{switch(t){case"M":return getMonth(e,{format:"M"});case"MM":return getMonth(e,{format:"MM"});default:return getMonth(e)}})).replace(/YYYYb|YYYY|YY/gi,t=>{switch(t){case"YY":return getYear(e,{format:"YY"});case"YYYYb":return getYear(e,{format:"YYYYb"});default:return getYear(e)}})}module.exports=getDate;