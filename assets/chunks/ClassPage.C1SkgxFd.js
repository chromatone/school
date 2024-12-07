import{U as z,r as w,V as J,M as R,l as I,o as Q,m as X,a as n,W as Y,i as Z,c as i,b as t,t as o,u as e,g as v,F as O,n as ee,T as se}from"./framework.BgEibAZV.js";import{u as te,l as ae,F as oe,K as S}from"./theme.DfaxEt3W.js";import{f as re}from"./format.CHl3EdWp.js";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const le=()=>{};function $(k,r,s){let u;z(s)?u={evaluating:s}:u={};const{lazy:p=!1,evaluating:a=void 0,shallow:m=!0,onError:y=le}=u,b=w(!p),l=m?J(r):w(r);let c=0;return R(async _=>{if(!b.value)return;c++;const f=c;let h=!1;a&&Promise.resolve().then(()=>{a.value=!0});try{const d=await k(g=>{_(()=>{a&&(a.value=!1),h||g()})});f===c&&(l.value=d)}catch(d){y(d)}finally{a&&f===c&&(a.value=!1),h=!0}}),p?I(()=>(b.value=!0,l.value)):l}const ne={key:0,class:"flex flex-col gap-4 sticky mt-8 overflow-scroll bottom-4 left-4 right-4 bg-dark-50 p-4 rounded-3xl"},ce={class:"flex flex-wrap gap-2"},ie={class:"text-lg"},ue={class:"flex flex-wrap gap-2 items-center"},de={class:"text-2xl font-bold"},fe={class:"text-2xl"},he={class:"text-4xl"},ve={class:"flex flex-wrap gap-2 items-center"},pe=["src"],me={class:"p-0"},_e={key:0,class:"text-xs"},ge={key:1,class:"flex flex-wrap gap-2 p-2"},be={__name:"ClassPage",setup(k){const r=w(window.location.hash.slice(1));Q(()=>window.addEventListener("hashchange",()=>r.value=window.location.hash.slice(1))),X(()=>window.removeEventListener("hashchange"));const s=$(async()=>r.value&&await ae("https://schooldb.chromatone.center/").with(oe()).request(S("classes",r.value,{fields:["*","module.*","course.*","course.teacher.*","course.program.title"]})),[]),{user:u,userDB:p}=te(),a=$(async()=>u.value&&await p.request(S("classes",r.value,{fields:["*","students.*","students.directus_users_id.*"]})),[]),m=w(!1);async function y(){m.value=!0}return(b,l)=>(n(),Y(se,{name:"fade"},{default:Z(()=>{var c,_,f,h,d,g,E,B,M,F,C,D,L,T,U,V,W,j,q,A,G,H,K,N,P;return[r.value?(n(),i("div",ne,[l[1]||(l[1]=t("a",{class:"p-4 rounded-full bg-dark-200 absolute top-2 right-2",href:"#"},[t("div",{class:"i-la-times"})],-1)),t("div",ce,[t("div",ie,o(e(re)(e(s).date||Date.now(),"HH:mm EEEE dd MMMM yyyy")),1)]),t("div",ue,[t("div",de,o((f=(_=(c=e(s))==null?void 0:c.course)==null?void 0:_.program)==null?void 0:f.title),1),t("div",fe,o((d=(h=e(s))==null?void 0:h.course)==null?void 0:d.level),1)]),t("div",he,o((E=(g=e(s))==null?void 0:g.module)==null?void 0:E.title),1),t("div",ve,[(F=(M=(B=e(s))==null?void 0:B.course)==null?void 0:M.teacher)!=null&&F.avatar?(n(),i("img",{key:0,class:"rounded-full w-30px h-30px",src:`https://schooldb.chromatone.center/assets/${(L=(D=(C=e(s))==null?void 0:C.course)==null?void 0:D.teacher)==null?void 0:L.avatar}?width=30&height=30`},null,8,pe)):v("",!0),t("div",me,o((V=(U=(T=e(s))==null?void 0:T.course)==null?void 0:U.teacher)==null?void 0:V.first_name)+" "+o((q=(j=(W=e(s))==null?void 0:W.course)==null?void 0:j.teacher)==null?void 0:q.last_name),1)]),(G=(A=e(s))==null?void 0:A.module)!=null&&G.description?(n(),i("div",_e,o((K=(H=e(s))==null?void 0:H.module)==null?void 0:K.description),1)):v("",!0),(N=e(a))!=null&&N.students?(n(),i("div",ge,[(n(!0),i(O,null,ee((P=e(a))==null?void 0:P.students,x=>(n(),i("div",{class:"p-2 bg-dark-800 rounded-xl",key:x},o(x.directus_users_id.first_name)+" "+o(x.directus_users_id.last_name),1))),128))])):v("",!0),e(u)&&!m.value?(n(),i("button",{key:2,class:"p-2 shadow-lg hover-brightness-150 hover-shadow-xl bg-green-700 rounded-xl font-bold uppercase",onClick:l[0]||(l[0]=x=>y())},"Join")):v("",!0)])):v("",!0)]}),_:1}))}};export{be as default};
