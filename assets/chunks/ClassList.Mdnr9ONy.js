import{r as m,o as f,s as x,a as i,c as n,i as h,T as g,U as v,g as b,F as w,n as y,b as e,t as a,u as r}from"./framework.B8YXKKAO.js";import{l as k,p as E,v as M}from"./theme.Dv3McUTO.js";import{f as c}from"./format.CHl3EdWp.js";const d=k("https://schooldb.chromatone.center/").with(E("ogbYm_VIY1zQ29J1BLd1Xf29EQnCjswk")).with(M()),u=m(!1);function B(){return f(async()=>{await d.connect(),u.value=!0}),{ws:d,connected:u}}const C={class:"flex flex-col gap-4 py-8"},V={class:"i-la-spinner text-4xl animate-spin absolute",key:"spinner"},j=["href"],L={class:"flex w-full"},N={class:"text-xl"},F={class:"text-lg"},H={class:"text-md op-80 flex flex-wrap items-baseline gap-2"},O={class:"op-70"},Q={class:"px-2 py-1 bg-dark-800 rounded-lg text-sm"},S={class:"text-3xl"},D={__name:"ClassList",setup(T){const{ws:p}=B(),o=x([]);return f(async()=>{const{subscription:l}=await p.subscribe("classes",{uid:"classes-list-sub",query:{sort:["date"],fields:["*","module.title","course.level","course.program.title"]}});for await(const t of l)switch(t.event){case"init":Object.assign(o,t.data);break;case"update":t.data.forEach(s=>Object.assign(o.find(_=>_.id==s.id),s));break}}),(l,t)=>(i(),n("div",C,[h(v,{name:"fade"},{default:g(()=>[o.length==0?(i(),n("div",V)):b("",!0),(i(!0),n(w,null,y(o,s=>(i(),n("a",{class:"no-underline shadow-lg p-4 text-xl flex flex-col rounded-xl bg-dark-200 gap-2",key:s.id,href:`/class/#${s.id}`},[e("div",L,[e("div",N,a(r(c)(s.date," HH:mm EEEE")),1),t[0]||(t[0]=e("div",{class:"flex-1"},null,-1)),e("div",F,a(r(c)(s.date,"dd MMMM yyyy")),1)]),e("div",H,[e("div",O,a(s.course.program.title),1),e("div",Q,a(s.course.level),1)]),e("div",S,a(s.module.title),1)],8,j))),128))]),_:1})]))}};export{D as default};