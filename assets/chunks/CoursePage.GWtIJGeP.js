import{e as l,$ as S,n as T,u as s,f as r,h as e,E as $,t as o,p as i,j as N,F as A,C as E,m as K,T as j}from"./framework.LhDnjOZs.js";import{l as q,F as z,c as D,K as H,a as L,u as V}from"./theme.BlrQnV7_.js";import{u as M}from"./useHash.BjdL9CFZ.js";import{C as R}from"./ContactMe.B4eY8Odl.js";const U={key:0,class:"mx-4 flex flex-col mt-8 bg-light-100 rounded-xl max-w-45ch relative"},G={class:"text-4xl font-bold"},I={class:"flex items-center w-full"},J={class:"text-2xl"},O={class:"flex flex-wrap gap-2 items-center p-2"},Q=["src"],W={class:"p-0"},X={class:"flex flex-wrap p-2"},Y={class:"text-lg"},Z={key:0,class:"flex flex-col gap-2 p-2"},ee={class:"p-0"},se={class:"flex flex-col gap-2 p-2"},te=["href"],oe={class:"op-50"},ae={class:"op-100"},le={class:"op-60"},he={__name:"CoursePage",setup(re){const c=M(),B=q("https://schooldb.chromatone.center/").with(z()),t=D(async()=>c.value&&await B.request(H("courses",c.value,{fields:["*","program.title","program.color","classes.*","classes.module.title","teacher.*","enrollments.*"]})),[]);return L(),(ne,a)=>(l(),S(j,{name:"fade"},{default:T(()=>{var d,u,h,p,m,f,_,g,x,v,w,b,C,k,y,F;return[s(c)?(l(),r("div",U,[a[3]||(a[3]=e("a",{class:"p-2 rounded-lg bg-light-200 absolute top-2 right-2",href:"/courses/#"},[e("div",{class:"i-la-angle-left"})],-1)),e("div",{class:"flex flex-wrap gap-2 items-center px-2 pb-2 pt-6",style:$({backgroundColor:(u=(d=s(t))==null?void 0:d.program)==null?void 0:u.color})},[e("div",G,o((h=s(t).program)==null?void 0:h.title),1),e("div",I,[e("div",J,o(s(t).level)+" Course",1),a[1]||(a[1]=e("div",{class:"flex-1"},null,-1)),e("div",O,[a[0]||(a[0]=i("with")),(m=(p=s(t))==null?void 0:p.teacher)!=null&&m.avatar?(l(),r("img",{key:0,class:"rounded-full w-30px h-30px",src:`https://schooldb.chromatone.center/assets/${(_=(f=s(t))==null?void 0:f.teacher)==null?void 0:_.avatar}?width=30&height=30`},null,8,Q)):N("",!0),e("div",W,o((x=(g=s(t))==null?void 0:g.teacher)==null?void 0:x.first_name)+" "+o((w=(v=s(t))==null?void 0:v.teacher)==null?void 0:w.last_name),1)])])],4),e("div",X,[e("div",Y,"Starts "+o(s(V)(s(t).start_date)),1)]),(l(),r("div",Z,[e("div",ee,[i(o((b=s(t))==null?void 0:b.threshold)+" ≥ ",1),e("b",null,o((k=(C=s(t))==null?void 0:C.enrollments)==null?void 0:k.length),1),i(" ≤ "+o((y=s(t))==null?void 0:y.capacity)+" students enrolled ",1)])])),e("div",se,[(l(!0),r(A,null,E((F=s(t))==null?void 0:F.classes,(n,P)=>(l(),r("a",{class:"no-underline p-2 rounded-xl bg-light-700 flex gap-2",key:n,href:`/classes/#${n.id}`},[e("div",oe,o(P+1)+".",1),e("div",ae,o(n.module.title),1),e("div",le,o(s(V)(n.date)),1)],8,te))),128))]),a[4]||(a[4]=e("a",{class:"no-underline p-2 bg-orange-300 text-lg m-4 rounded-xl",href:"/#how-to-find-us"},"Purchase enrollment cards at the counter in Place Coworking, 59/2 Chao Fah Tawan Tok Rd, Chalong, Phuket.",-1)),K(R,null,{default:T(()=>a[2]||(a[2]=[i("For enrollment support and troubleshooting contact me via ")])),_:1})])):N("",!0)]}),_:1}))}};export{he as default};