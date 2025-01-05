import{r as z,$ as O,u as t,f as a,h as r,j as e,p as Q,H as p,t as n,I as R,k as u,D as X,q as Z,l as ee,m as G,v as L}from"./framework.DW4X5dct.js";import{a as se,c as te,A as oe,u as le,K as ae,b as re}from"./theme.CpoVLELW.js";import{u as ne}from"./useHash.Af5Qi_to.js";import{S as ie}from"./StudentForm.BeHKs02v.js";import{f as Y}from"./format.BLmWzEp7.js";const de={class:"flex flex-col gap-2 p-4 bg-light-300 max-w-45ch rounded-lg mx-2 shadow-lg"},ue={class:"flex gap-2 items-center"},pe={class:"text-2xl"},ce={class:"op-50 text-2xl"},me={class:"flex gap-2"},fe={class:"text-sm"},xe={class:"op-50"},ve={class:"flex flex-col gap-2 font-mono text-sm"},ge={class:"op-60 flex-1"},ye={class:"font-bold",style:{flex:"3 1"}},he={key:0,class:"flex flex-col gap-2 p-4"},we={key:1,class:"flex flex-col gap-2 p-4"},be={key:2,class:"flex flex-wrap gap-2 items-center p-2 bg-light-300 rounded-lg m-2"},_e=["src"],ke={key:1,class:"w-50px rounded-full bg-orange-200 h-50px flex items-center justify-center text-2xl"},Ee={class:"flex flex-col"},Me={class:"text-2xl"},Ae={class:"text-xs op-50"},He={__name:"EnrollmentPage",setup(Be){const{user:c,userDB:f}=se(),m=ne(),o=te(async()=>m.value&&c.value?f.request(ae("enrollments",m.value,{fields:["course.*","student.*","course.classes.*","course.classes.module.title","*","course.program.title","course.program.color"]})).then(i=>i||null).catch(i=>(console.error("Error fetching enrollment:",i),!1)):null);z(!1);const x=z(!1),d=O({prior_experience:"",goals:"",feedback:""});async function J(){var s;let i=await f.request(re("enrollments",m.value,{...d,status:"applied",student:(s=c.value)==null?void 0:s.id}));console.log(i),x.value=!0}return(i,s)=>{var v,g,y,h,w,b,_,k,E,M,A,B,S,j,I,V,D,H,N,P,q,F,K,T,U,W,$;return t(c)?t(o)?(a(),r(p,{key:1},[e("div",de,[e("div",ue,[e("div",pe,n((y=(g=(v=t(o))==null?void 0:v.course)==null?void 0:g.program)==null?void 0:y.title),1),s[4]||(s[4]=e("div",{class:"flex-1"},null,-1)),e("div",ce,n((w=(h=t(o))==null?void 0:h.course)==null?void 0:w.level),1)]),e("div",me,[e("div",fe,"Starts on "+n(t(Y)((_=(b=t(o))==null?void 0:b.course)==null?void 0:_.start_date,"EEE dd MMM yyyy")),1),e("div",xe,n(t(le)((E=(k=t(o))==null?void 0:k.course)==null?void 0:E.start_date)),1)]),e("div",ve,[(a(!0),r(p,null,R((A=(M=t(o))==null?void 0:M.course)==null?void 0:A.classes,l=>{var C;return a(),r("div",{class:"flex gap-2 p-1 rounded shadow bg-light-400",key:l},[e("div",ge,n(t(Y)(l==null?void 0:l.date,"HH:mm EEE dd MMM yy")),1),e("div",ye,n((C=l==null?void 0:l.module)==null?void 0:C.title),1)])}),128))])]),((B=t(o))==null?void 0:B.status)=="draft"?(a(),r("div",he,s[5]||(s[5]=[e("div",{class:"text-lg"},"This enrollment is open for application.",-1),e("div",{class:"text-3xl"},"Apply now",-1)]))):u("",!0),((S=t(o))==null?void 0:S.status)=="applied"?(a(),r("div",we,s[6]||(s[6]=[e("div",{class:"text-lg"},"Someone already applied for this enrollment.",-1),e("div",{class:"text-3xl"},"Awaiting verification ",-1),e("div",{class:"text-md"},"If you've purchased this ticket at coworking reception, then you don't need to do anything but wait one day until we synchronize our databases. Your enrollment will be fully activated after verification.",-1)]))):u("",!0),((j=t(o))==null?void 0:j.status)=="published"&&((I=t(o))!=null&&I.student)?(a(),r("div",be,[(D=(V=t(o))==null?void 0:V.student)!=null&&D.avatar?(a(),r("img",{key:0,class:"rounded-full",src:`https://schooldb.chromatone.center/assets/${(N=(H=t(o))==null?void 0:H.student)==null?void 0:N.avatar}?width=50&height=50`},null,8,_e)):(a(),r("div",ke,s[7]||(s[7]=[e("div",{class:"i-la-user"},null,-1)]))),e("div",Ee,[e("div",Me,n((q=(P=t(o))==null?void 0:P.student)==null?void 0:q.first_name)+" "+n((K=(F=t(o))==null?void 0:F.student)==null?void 0:K.last_name),1),e("div",Ae,n((U=(T=t(o))==null?void 0:T.student)==null?void 0:U.location),1)]),s[8]||(s[8]=e("div",{class:"flex-1"},null,-1))])):u("",!0),((W=t(o))==null?void 0:W.status)=="draft"?(a(),X(ie,{key:3},{default:Z(()=>s[9]||(s[9]=[e("div",{class:"text-sm"},"Please fill in / verify your student account details",-1)])),_:1})):u("",!0),(($=t(o))==null?void 0:$.status)=="draft"&&!x.value?(a(),r("form",{key:4,class:"flex flex-col gap-4 p-4 bg-light-300 max-w-45ch rounded-lg mx-2 shadow-lg",onSubmit:s[2]||(s[2]=ee(l=>J(),["prevent"]))},[s[10]||(s[10]=e("label",{for:"prior"},[e("div",{class:"text-xl"},"Prior experience "),e("div",{class:"text-sm op-70"},"What is your own journey into the subject of this course?")],-1)),G(e("textarea",{class:"rounded p-2 shadow",id:"prior","onUpdate:modelValue":s[0]||(s[0]=l=>d.prior_experience=l),rows:"4",placeholder:"I was a drummer in a band for 3 years, than lots of personal study and practice..."}," ",512),[[L,d.prior_experience]]),s[11]||(s[11]=e("label",{for:"goals"},[e("div",{class:"text-xl"},"Goals"),e("div",{class:"text-sm op-70"},"What are your objectives for this course? What is your purpose to study?")],-1)),G(e("textarea",{class:"rounded p-2 shadow",id:"goals","onUpdate:modelValue":s[1]||(s[1]=l=>d.goals=l),rows:"4",placeholder:"I want to understand music theory on a more intuitive level so I can get really creative with musical elements..."}," ",512),[[L,d.goals]]),s[12]||(s[12]=e("button",{class:"p-2 bg-orange-400 rounded-xl shadow",type:"submit"},"Apply to the course",-1))],32)):u("",!0)],64)):(a(),r(p,{key:2},[s[13]||(s[13]=e("div",{class:"text-xl op-90 m-2"},"Enrollment not found",-1)),s[14]||(s[14]=e("a",{class:"m-2",href:"/courses/"},"Back to courses",-1))],64)):(a(),r(p,{key:0},[s[3]||(s[3]=e("div",{class:"text-2xl"},"Please login to see available enrollments",-1)),Q(oe,{class:"m-4"})],64))}}};export{He as default};
