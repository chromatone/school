import{l as c,F as i,G as u,f as d}from"./index.CUlV9WVs.js";import{k as m,l as p,o as e,c as t,d as r,F as o,i as f,t as n,a as x}from"./framework.DLAh6uQe.js";const _={class:"flex flex-col gap-2"},F={__name:"ClassList",setup(h){const a=m([]);return p(async()=>{a.value=await c("https://schooldb.chromatone.center/").with(i()).request(u("classes"))}),(v,l)=>(e(),t(o,null,[l[0]||(l[0]=r("div",{class:"text-2xl"},"Classes ",-1)),r("div",_,[(e(!0),t(o,null,f(a.value,s=>(e(),t("div",{class:"p-2 text-xl",key:s},n(s.title)+" @ "+n(x(d)(s.date,"EE dd/MM/y hh:mm")),1))),128))])],64))}};export{F as default};
