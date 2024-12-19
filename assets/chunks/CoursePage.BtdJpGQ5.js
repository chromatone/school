import{e as l,$,n as N,u as s,f as r,h as e,E as A,t as o,p as i,j as V,F as E,C as K,m as j,T as q}from"./framework.l6NM6heN.js";import{l as z,F as D,c as H,a as L,u as B,K as M}from"./theme.RQ6Fpvpg.js";import{u as P}from"./useHash.Bc53GhQs.js";import{C as U}from"./ContactMe.CgmZZeJ9.js";const G={key:0,class:"mx-4 flex flex-col sticky mt-8 overflow-scroll bottom-4 left-4 right-4 bg-light-100 rounded-xl max-w-45ch relative"},I={class:"text-4xl font-bold"},J={class:"flex items-center w-full"},O={class:"text-2xl"},Q={class:"flex flex-wrap gap-2 items-center p-2"},R=["src"],W={class:"p-0"},X={class:"flex flex-wrap p-2"},Y={class:"text-lg"},Z={key:0,class:"flex flex-col gap-2 p-2"},ee={class:"p-0"},se={class:"flex flex-col gap-2 p-2"},te=["href"],oe={class:"op-50"},ae={class:"op-100"},le={class:"op-60"},me={__name:"CoursePage",setup(re){const n=P(),T=z("https://schooldb.chromatone.center/").with(D()),t=H(async()=>n.value&&await T.request(M("courses",n.value,{fields:["*","program.title","program.color","classes.*","classes.module.title","teacher.*","enrollments.*"]})),[]);return L(),(ce,a)=>(l(),$(q,{name:"fade"},{default:N(()=>{var d,u,m,p,h,_,f,x,g,v,w,b,y,k,C,F;return[s(n)?(l(),r("div",G,[a[3]||(a[3]=e("a",{class:"p-2 rounded-lg bg-light-200 absolute top-2 right-2",href:"#"},[e("div",{class:"i-la-times"})],-1)),e("div",{class:"flex flex-wrap gap-2 items-center px-2 pb-2 pt-6",style:A({backgroundColor:(u=(d=s(t))==null?void 0:d.program)==null?void 0:u.color})},[e("div",I,o((m=s(t).program)==null?void 0:m.title),1),e("div",J,[e("div",O,o(s(t).level)+" Course",1),a[1]||(a[1]=e("div",{class:"flex-1"},null,-1)),e("div",Q,[a[0]||(a[0]=i("with")),(h=(p=s(t))==null?void 0:p.teacher)!=null&&h.avatar?(l(),r("img",{key:0,class:"rounded-full w-30px h-30px",src:`https://schooldb.chromatone.center/assets/${(f=(_=s(t))==null?void 0:_.teacher)==null?void 0:f.avatar}?width=30&height=30`},null,8,R)):V("",!0),e("div",W,o((g=(x=s(t))==null?void 0:x.teacher)==null?void 0:g.first_name)+" "+o((w=(v=s(t))==null?void 0:v.teacher)==null?void 0:w.last_name),1)])])],4),e("div",X,[e("div",Y,"Starts "+o(s(B)(s(t).start_date)),1)]),(l(),r("div",Z,[e("div",ee,[i(o((b=s(t))==null?void 0:b.threshold)+" ≥ ",1),e("b",null,o((k=(y=s(t))==null?void 0:y.enrollments)==null?void 0:k.length),1),i(" ≤ "+o((C=s(t))==null?void 0:C.capacity)+" students enrolled ",1)])])),e("div",se,[(l(!0),r(E,null,K((F=s(t))==null?void 0:F.classes,(c,S)=>(l(),r("a",{class:"no-underline p-2 rounded-xl bg-light-700 flex gap-2",key:c,href:`/classes/#${c.id}`},[e("div",oe,o(S+1)+".",1),e("div",ae,o(c.module.title),1),e("div",le,o(s(B)(c.date)),1)],8,te))),128))]),j(U,null,{default:N(()=>a[2]||(a[2]=[i("For enrollment contact me via ")])),_:1})])):V("",!0)]}),_:1}))}};export{me as default};
