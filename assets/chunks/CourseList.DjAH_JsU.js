import{a0 as g,o as u,f as a,h as l,u as r,j as t,t as i,k as p,p as _,q as h,F as c,G as v,H as b,I as w,a1 as y}from"./framework.ZY-ZxBs9.js";import{u as k}from"./useWS.DOVx2EmN.js";import{u as C}from"./theme.CU3r0Xht.js";import{u as B}from"./useHash.sW9hWLzx.js";const N={key:0,class:"text-2xl flex p-2 mt-8"},S={class:"op-80"},j={key:1,class:"flex gap-4 py-8 p-4 max-w-100vw overflow-x-scroll min-w-100vw"},H={class:"i-la-spinner text-4xl animate-spin absolute",key:"spinner"},T=["href"],V={class:"text-3em op-90 font-thin"},q={class:"absolute top-2 right-2 px-2 py-1 bg-light-900 rounded-lg text-sm"},z={class:"flex w-full p-2"},A={class:"text-sm"},E={class:"m-2 text-left p-2 rounded-xl shadow bg-orange-200 self-start"},F={class:"op-80"},G={class:"font-bold"},W={__name:"CourseList",setup(L){const{ws:x}=k(),o=g([]);u(async()=>{const{subscription:f}=await x.subscribe("courses",{uid:"courses-list-sub",query:{sort:["start_date"],fields:["*","program.slug","program.color","classes.*","classes.module.title"]}});for await(const e of f)switch(e.event){case"init":Object.assign(o,e.data);break;case"update":e.data.forEach(s=>Object.assign(o.find(n=>n.id==s.id),s));break}});const d=B();return(f,e)=>(a(),l(c,null,[r(d)?p("",!0):(a(),l("div",N,[e[0]||(e[0]=t("div",{class:"font-bold"},"Available courses",-1)),e[1]||(e[1]=t("div",{class:"flex-1"},null,-1)),t("div",S,i(o.length),1)])),r(d)?p("",!0):(a(),l("div",j,[_(y,{name:"fade"},{default:h(()=>[o.length==0?(a(),l("div",H)):p("",!0),(a(!0),l(c,null,v(o,s=>{var n,m;return a(),l("a",{class:b(["font-normal no-underline shadow-lg flex flex-col rounded-xl flex-1 hover-brightness-140 overflow-hidden bg-light-300",{[s.id==r(d)?"brightness-120":"brightness-100"]:!0}]),style:{flex:"1 0 200px"},key:s.id,href:`/courses/#${s.id}`},[t("div",{class:"flex flex-wrap items-baseline gap-2 pt-4 px-2 pb-2 relative",style:w({backgroundColor:(n=s==null?void 0:s.program)==null?void 0:n.color})},[t("div",V,i((m=s==null?void 0:s.program)==null?void 0:m.slug),1),t("div",q,i(s==null?void 0:s.level),1)],4),t("div",z,[t("div",A,"Starts "+i(r(C)(s.start_date)),1),e[2]||(e[2]=t("div",{class:"flex-1"},null,-1))]),e[3]||(e[3]=t("div",{class:"flex-1"},null,-1)),t("button",E,[t("div",F,i(s.classes_count)+" weekly classes",1),t("div",G,i(Number(s==null?void 0:s.price))+" THB",1)])],10,T)}),128))]),_:1})]))],64))}};export{W as default};
