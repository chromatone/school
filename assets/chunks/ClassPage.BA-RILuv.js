import{l,F as o,K as c}from"./index.DDtVt8tl.js";import{k as n,l as r,o as i,c as d,d as e,t,F as p}from"./framework.oynKXNHA.js";const u={class:"flex flex-col gap-2"},_={class:"p-2 text-xl"},h={__name:"ClassPage",setup(m){const s=n([]);return r(async()=>{s.value=await l("https://schooldb.chromatone.center/").with(o()).request(c("classes","4acf37e9-3485-4079-b65a-d8dc51baec47"))}),(f,a)=>(i(),d(p,null,[a[0]||(a[0]=e("div",{class:"text-2xl"},"Class",-1)),e("div",u,[e("div",_,t(s.value.title)+" @ "+t(s.value.date),1)])],64))}};export{h as default};
