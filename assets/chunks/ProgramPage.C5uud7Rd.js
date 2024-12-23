import{q as r,e as n,f as d,h as s,t as a,G as p,F as m,C as f,j as x,u as c}from"./framework.LhDnjOZs.js";import{f as g}from"./format.DrP95sbi.js";const v={class:"flex flex-col gap-4"},y={class:"text-8xl font-thin op-80 mt-12"},$={class:"text-4xl m-0"},w={class:"text-lg"},k={class:"max-w-45ch"},E={class:"flex flex-col gap-4"},b=["href"],B={class:"flex flex-wrap gap-4"},M={class:"text-lg"},C={class:"flex flex-wrap gap-2 items-center"},S=["src"],D={class:"p-0"},F={class:"text-sm"},N={class:"p-2 rounded-xl shadow bg-light-400"},q={__name:"ProgramPage",setup(P){return r(),(e,l)=>(n(),d("div",v,[s("div",y,a(e.$params.slug),1),s("div",$,a(e.$params.title),1),s("p",w,a(e.$params.description),1),s("div",k,[p(e.$slots,"default")]),l[1]||(l[1]=s("h3",{class:"text-2xl"},"Courses",-1)),s("div",E,[(n(!0),d(m,null,f(e.$params.courses,t=>{var i,o,h,_;return n(),d("a",{class:"no-underline p-2 rounded-xl bg-light-50 flex flex-col gap-2",key:t,href:`/courses/#${t.id}`},[s("div",B,[s("div",M,a(e.$params.title)+" "+a(t.level),1),l[0]||(l[0]=s("div",{class:"flex-1"},null,-1)),s("div",C,[(i=t==null?void 0:t.teacher)!=null&&i.avatar?(n(),d("img",{key:0,class:"rounded-full w-30px h-30px",src:`https://schooldb.chromatone.center/assets/${(o=t==null?void 0:t.teacher)==null?void 0:o.avatar}?width=30&height=30`},null,8,S)):x("",!0),s("div",D,a((h=t==null?void 0:t.teacher)==null?void 0:h.first_name)+" "+a((_=t==null?void 0:t.teacher)==null?void 0:_.last_name),1)])]),s("div",F,"Starts on "+a(c(g)(t==null?void 0:t.start_date,"EEEE dd MMMM yyyy")),1),s("button",N,a(t.classes_count)+" weekly classes - 2400 THB",1)],8,b)}),128))])]))}};export{q as _};