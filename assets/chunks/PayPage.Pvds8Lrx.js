import{a3 as _,f as r,h as i,j as e,t as n,I as C,u as o,J as H,e as k,r as P,l as E,m as M,v as U,k as b,p as $,q as V,F as q,G,C as A}from"./framework.ZY-ZxBs9.js";import{a as D,c as B,K as N,G as Q,U as R}from"./theme.CU3r0Xht.js";import{u as T}from"./useHash.sW9hWLzx.js";import{Q as j}from"./qrcode.vue.esm.B5u2OUC1.js";import{f as z}from"./format.DrP95sbi.js";const F={class:"flex flex-wrap gap-2"},K={class:"font-bold"},L={class:"uppercase"},I={class:"flex flex-wrap gap-2 items-center"},J={class:"font-bold"},O={class:"flex flex-wrap gap-2"},W={class:"font-bold"},X={class:"p-0"},Y={class:"text-start op-50"},Z={class:"p-0"},S={__name:"PaymentSlip",props:{payment:{type:Object}},setup(s){const{go:c}=_();return(y,l)=>{var p,f,v,m,x,u,g,a,t,d,h,w;return r(),i("div",{class:"flex flex-col gap-2 bg-light-600 m-2 p-4 shadow rounded-lg my-0 font-mono text-sm cursor-pointer hover-brightness-120 transition hover-shadow-xl",onClick:l[0]||(l[0]=re=>o(c)(`/payments/#${s.payment.id}`))},[e("div",F,[e("div",K,n(((p=s.payment.student)==null?void 0:p.first_name)||"---")+" "+n(((f=s.payment.student)==null?void 0:f.last_name)||"---"),1),l[1]||(l[1]=e("div",{class:"flex-1"},null,-1)),e("div",L,n(((u=(x=(m=(v=s.payment)==null?void 0:v.enrollment)==null?void 0:m.course)==null?void 0:x.program)==null?void 0:u.slug)||"---")+" "+n(((t=(a=(g=s.payment)==null?void 0:g.enrollment)==null?void 0:a.course)==null?void 0:t.level)||"---"),1)]),e("div",I,[e("div",J,n(s.payment.total)+" THB",1),l[2]||(l[2]=e("div",{class:"flex-1"},null,-1)),e("div",{class:"py-1 rounded-lg px-2",style:C({backgroundColor:s.payment.status=="paid"?"lightgreen":s.payment.status=="pending"?"yellow":"lightgray"})},n(s.payment.status),5)]),e("div",O,[e("div",W,n(o(z)(s.payment.date_created,"HH:mm EEE dd MMM yyyy")),1),l[3]||(l[3]=e("div",{class:"flex-1"},null,-1)),e("div",X,n((d=s.payment.user_created)==null?void 0:d.first_name)+" "+n((h=s.payment.user_created)==null?void 0:h.last_name),1)]),e("div",Y,n((w=s.payment)==null?void 0:w.id),1),e("div",Z,[H(y.$slots,"default")])])}}},ee={key:0,class:"py-4"},te={key:1,class:"max-w-45ch"},se={class:"flex flex-col gap-2"},ae={class:"flex items-center gap-2"},le={key:1,class:"my-8 flex flex-col gap-4"},ne={key:2,class:"my-4"},oe={key:3,class:"flex flex-col gap-2"},ce={__name:"PayPage",setup(s){const{user:c,userDB:y}=D(),l=k(()=>{var a;return((a=c.value)==null?void 0:a.role)=="f77dcad0-2c27-4754-92da-4742fac1b252"}),p=P(2400),{go:f}=_();async function v(){let{id:a}=await y.request(R("payments",{total:p.value,status:"paid"}));f(`/payments/#${a}`)}const m=T(),x=k(()=>{var a;return`https://school.chromatone.center/payments/#${(a=u.value)==null?void 0:a.id}`}),u=B(async()=>await y.request(N("payments",m.value,{fields:["*","student.first_name","student.last_name","user_created.*","enrollment.course.level","enrollment.course.program.slug"]}))),g=B(async()=>c.value&&await y.request(Q("payments",{fields:["*","student.*","enrollment.*","user_created.*","enrollment.course.level","enrollment.course.program.slug"]})));return(a,t)=>o(c)?(r(),i("div",te,[!o(m)&&l.value?(r(),i("form",{key:0,class:"flex flex-col gap-8 p-4",onSubmit:t[1]||(t[1]=E(d=>v(),["prevent"]))},[t[4]||(t[4]=e("div",{class:"text-2xl"},"Accept payment",-1)),e("div",se,[t[3]||(t[3]=e("div",{class:"op-75"},"Enter amount paid",-1)),e("div",ae,[M(e("input",{class:"p-2 rounded-xl",id:"thb",type:"number","onUpdate:modelValue":t[0]||(t[0]=d=>p.value=d)},null,512),[[U,p.value]]),t[2]||(t[2]=e("label",{class:"ml-2",for:"thb"},"THB",-1))])]),t[5]||(t[5]=e("button",{class:"w-full bg-orange-500 hover-bg-orange-300 transition p-4 rounded-xl font-bold text-xl",type:"submit"},"Submit Payment",-1))],32)):b("",!0),o(u)?(r(),i("div",le,[t[6]||(t[6]=e("a",{class:"p-2 bg-light-400 font-bold shadow rounded-xl",href:"/payments/#"},"Go back to payments list",-1)),$(S,{payment:o(u)},{default:V(()=>[$(j,{class:"w-full rounded mx-auto mt-4",value:x.value,size:"auto",level:"H","render-as":"svg"},null,8,["value"])]),_:1},8,["payment"]),t[7]||(t[7]=e("div",{class:"op-75 text-xl m-4"},"Share this QR code and/or URL for the student to provide to the teacher at the class",-1))])):b("",!0),o(m)&&!o(u)?(r(),i("div",ne,t[8]||(t[8]=[e("div",{class:"i-la-spinner animate-spin text-4xl"},null,-1)]))):b("",!0),o(m)?b("",!0):(r(),i("div",oe,[t[9]||(t[9]=e("div",{class:"text-xl font-bold"},"All payments",-1)),(r(!0),i(q,null,G(o(g),d=>(r(),A(S,{payment:d,key:d.id},null,8,["payment"]))),128))]))])):(r(),i("div",ee,"Please, login to see payments."))}};export{ce as default};
