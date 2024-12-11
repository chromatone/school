import{r as P,b as o,U as S,l as z,u as e,d as r,e as t,t as a,g as l,F as G,f as I,T as O}from"./framework.B-l7dn_f.js";import{u as Q,a as R,f as W,l as X,F as Y,K as $}from"./theme.DefP58Ys.js";import{c as A}from"./index.B_32Wq_7.js";const Z={key:0,class:"flex flex-col gap-4 sticky mt-8 overflow-scroll bottom-4 left-4 right-4 bg-dark-50 p-4 rounded-3xl"},ee={class:"flex flex-wrap gap-2"},se={class:"text-lg"},te={class:"flex flex-wrap gap-2 items-center"},ae={class:"text-2xl font-bold"},oe={class:"text-2xl"},re={class:"text-4xl"},le={class:"flex flex-wrap gap-2 items-center"},ce=["src"],de={class:"p-0"},ie={key:0,class:"text-xs"},ne={key:1,class:"flex flex-wrap gap-2 p-2"},me={__name:"ClassPage",setup(ue){const c=Q(),s=A(async()=>c.value&&await X("https://schooldb.chromatone.center/").with(Y()).request($("classes",c.value,{fields:["*","module.*","course.*","course.teacher.*","course.program.title"]})),[]),{user:n,userDB:J}=R(),u=A(async()=>n.value&&await J.request($("classes",c.value,{fields:["*","students.*","students.directus_users_id.*"]})),[]),_=P(!1);async function L(){_.value=!0}return(_e,d)=>(o(),S(O,{name:"fade"},{default:z(()=>{var h,p,f,m,x,v,g,y,k,w,b,B,E,C,F,M,D,H,j,q,K,N,T,U,V;return[e(c)?(o(),r("div",Z,[d[1]||(d[1]=t("a",{class:"p-4 rounded-full bg-dark-200 absolute top-2 right-2",href:"#"},[t("div",{class:"i-la-times"})],-1)),t("div",ee,[t("div",se,a(e(W)(e(s).date||Date.now(),"HH:mm EEEE dd MMMM yyyy")),1)]),t("div",te,[t("div",ae,a((f=(p=(h=e(s))==null?void 0:h.course)==null?void 0:p.program)==null?void 0:f.title),1),t("div",oe,a((x=(m=e(s))==null?void 0:m.course)==null?void 0:x.level),1)]),t("div",re,a((g=(v=e(s))==null?void 0:v.module)==null?void 0:g.title),1),t("div",le,[(w=(k=(y=e(s))==null?void 0:y.course)==null?void 0:k.teacher)!=null&&w.avatar?(o(),r("img",{key:0,class:"rounded-full w-30px h-30px",src:`https://schooldb.chromatone.center/assets/${(E=(B=(b=e(s))==null?void 0:b.course)==null?void 0:B.teacher)==null?void 0:E.avatar}?width=30&height=30`},null,8,ce)):l("",!0),t("div",de,a((M=(F=(C=e(s))==null?void 0:C.course)==null?void 0:F.teacher)==null?void 0:M.first_name)+" "+a((j=(H=(D=e(s))==null?void 0:D.course)==null?void 0:H.teacher)==null?void 0:j.last_name),1)]),(K=(q=e(s))==null?void 0:q.module)!=null&&K.description?(o(),r("div",ie,a((T=(N=e(s))==null?void 0:N.module)==null?void 0:T.description),1)):l("",!0),(U=e(u))!=null&&U.students?(o(),r("div",ne,[(o(!0),r(G,null,I((V=e(u))==null?void 0:V.students,i=>(o(),r("div",{class:"p-2 bg-dark-800 rounded-xl",key:i},a(i.directus_users_id.first_name)+" "+a(i.directus_users_id.last_name),1))),128))])):l("",!0),e(n)&&!_.value?(o(),r("button",{key:2,class:"p-2 shadow-lg hover-brightness-150 hover-shadow-xl bg-green-700 rounded-xl font-bold uppercase",onClick:d[0]||(d[0]=i=>L())},"Join")):l("",!0)])):l("",!0)]}),_:1}))}};export{me as default};
