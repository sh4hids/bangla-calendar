import{i as e,e as t,d as n}from"./utils-cd7bcc7e.js";const r=function(e=0,t="eeee"){switch(t){case"eee":return n[e];default:return`${n[e]}বার`}};export default function(n=new Date,a={}){if(!e(n))return t;const c=(n=new Date(n)).getDay(),s=a.format||"eeee";return r(c,s)}