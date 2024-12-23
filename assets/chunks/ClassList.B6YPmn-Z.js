import{Y as j,d as B,u as d,e as o,f as r,m as H,n as N,j as u,F as S,C as V,D as z,h as e,t,E as D,Z as F}from"./framework.LhDnjOZs.js";import{u as L}from"./useWS.Ce9qPvrL.js";import{u as O}from"./useHash.BjdL9CFZ.js";import{f as E}from"./format.DrP95sbi.js";import"./theme.BlrQnV7_.js";const $={key:0,class:"flex gap-4 py-8 overflow-x-scroll max-w-100vw min-h-40"},q={class:"i-la-spinner text-4xl animate-spin absolute",key:"spinner"},G=["href"],T={class:"flex w-full font-mono p-2"},W={class:"text-sm"},Y={class:"text-sm"},Z={class:"flex items-start gap-2"},A={class:"op-60"},I={class:"px-2 py-1 bg-light-800 rounded-lg text-xs"},J={class:"flex-1 text-lg p-2 bg-light-700"},K={class:"flex flex-wrap gap-2 items-center p-2"},P=["src"],Q={class:"p-0"},as={__name:"ClassList",setup(R){const{ws:M}=L(),i=j([]),l=O();return B(async()=>{const{subscription:m}=await M.subscribe("classes",{uid:"classes-list-sub",query:{sort:["date"],fields:["*","module.title","course.level","course.teacher.*","course.program.title","course.program.color"]}});for await(const a of m)switch(a.event){case"init":Object.assign(i,a.data);break;case"update":a.data.forEach(s=>Object.assign(i.find(n=>n.id==s.id),s));break}}),(m,a)=>d(l)?u("",!0):(o(),r("div",$,[H(F,{name:"fade"},{default:N(()=>[i.length==0?(o(),r("div",q)):u("",!0),(o(!0),r(S,null,V(i,s=>{var n,h,p,c,f,_,x,g,v,b,y,w,k,C;return o(),r("a",{class:z(["no-underline shadow-lg flex flex-col rounded-xl transition",{[d(l)==s.id?"bg-orange-200":"bg-light-200"]:!0}]),key:s.id,href:`#${s.id}`,style:{flex:"1 0 220px"}},[e("div",T,[e("div",W,t(d(E)(s.date," HH:mm EEE")),1),a[0]||(a[0]=e("div",{class:"flex-1"},null,-1)),e("div",Y,t(d(E)(s.date,"dd MMM yy")),1)]),e("div",{class:"flex flex-col p-2",style:D({backgroundColor:(h=(n=s==null?void 0:s.course)==null?void 0:n.program)==null?void 0:h.color})},[e("div",Z,[e("div",A,t((c=(p=s==null?void 0:s.course)==null?void 0:p.program)==null?void 0:c.title),1),e("div",I,t((f=s==null?void 0:s.course)==null?void 0:f.level),1)])],4),e("div",J,t((_=s==null?void 0:s.module)==null?void 0:_.title),1),e("div",K,[(g=(x=s==null?void 0:s.course)==null?void 0:x.teacher)!=null&&g.avatar?(o(),r("img",{key:0,class:"rounded-full w-30px h-30px",src:`https://schooldb.chromatone.center/assets/${(b=(v=s==null?void 0:s.course)==null?void 0:v.teacher)==null?void 0:b.avatar}?width=30&height=30`},null,8,P)):u("",!0),e("div",Q,t((w=(y=s==null?void 0:s.course)==null?void 0:y.teacher)==null?void 0:w.first_name)+" "+t((C=(k=s==null?void 0:s.course)==null?void 0:k.teacher)==null?void 0:C.last_name),1)])],10,G)}),128))]),_:1})]))}};export{as as default};
