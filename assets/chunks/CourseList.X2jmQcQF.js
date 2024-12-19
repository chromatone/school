import{G as x,d as g,e as o,f as n,h as t,t as a,m as _,n as h,j as u,F as p,C as b,D as v,u as f,E as w,Z as y}from"./framework.l6NM6heN.js";import{u as k}from"./useWS.nw21WeE4.js";import{u as C}from"./theme.RQ6Fpvpg.js";import{u as B}from"./useHash.Bc53GhQs.js";const N={class:"text-2xl flex p-2 mt-8"},S={class:"op-80"},j={class:"flex gap-4 py-8 p-4 max-w-100vw overflow-x-scroll"},E={class:"i-la-spinner text-4xl animate-spin absolute",key:"spinner"},T=["href"],V={class:"text-3em op-90 font-thin"},z={class:"absolute top-2 right-2 px-2 py-1 bg-light-900 rounded-lg text-sm"},A={class:"flex w-full p-2"},D={class:"text-sm"},F={class:"m-2 text-left p-2 rounded-xl shadow bg-orange-200 self-start"},G={class:"op-80"},H={class:"font-bold"},Z={__name:"CourseList",setup(L){const{ws:m}=k(),l=x([]);g(async()=>{const{subscription:d}=await m.subscribe("courses",{uid:"courses-list-sub",query:{sort:["start_date"],fields:["*","program.slug","program.color","classes.*","classes.module.title"]}});for await(const e of d)switch(e.event){case"init":Object.assign(l,e.data);break;case"update":e.data.forEach(s=>Object.assign(l.find(i=>i.id==s.id),s));break}});const c=B();return(d,e)=>(o(),n(p,null,[t("div",N,[e[0]||(e[0]=t("div",{class:"font-bold"},"Available courses",-1)),e[1]||(e[1]=t("div",{class:"flex-1"},null,-1)),t("div",S,a(l.length),1)]),t("div",j,[_(y,{name:"fade"},{default:h(()=>[l.length==0?(o(),n("div",E)):u("",!0),(o(!0),n(p,null,b(l,s=>{var i,r;return o(),n("a",{class:v(["font-normal no-underline shadow-lg flex flex-col rounded-xl flex-1 hover-brightness-140 overflow-hidden bg-light-300",{[s.id==f(c)?"brightness-120":"brightness-100"]:!0}]),style:{flex:"1 0 200px"},key:s.id,href:`/courses/#${s.id}`},[t("div",{class:"flex flex-wrap items-baseline gap-2 pt-4 px-2 pb-2 relative",style:w({backgroundColor:(i=s==null?void 0:s.program)==null?void 0:i.color})},[t("div",V,a((r=s==null?void 0:s.program)==null?void 0:r.slug),1),t("div",z,a(s==null?void 0:s.level),1)],4),t("div",A,[t("div",D,"Starts "+a(f(C)(s.start_date)),1),e[2]||(e[2]=t("div",{class:"flex-1"},null,-1))]),e[3]||(e[3]=t("div",{class:"flex-1"},null,-1)),t("button",F,[t("div",G,a(s.classes_count)+" weekly classes",1),t("div",H,a(Number(s==null?void 0:s.price))+" THB",1)])],10,T)}),128))]),_:1})])],64))}};export{Z as default};
