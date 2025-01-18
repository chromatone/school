import{a as D,c as F,A as G,G as A}from"./theme.PT4bRhoD.js";import{Q as M}from"./qrcode.vue.esm.BAcH--Zx.js";import{E as N}from"./svg2pdf.es.min.xU4fb1Sp.js";import{d as U,f as l,h as r,u as z,I as u,j as t,q as C,k as S,J as m,l as c}from"./framework.COiIuXUL.js";const q={key:1,class:"flex flex-wrap gap-12 w-100vw"},L={class:"flex gap-2 items-center"},O={class:"font-bold"},Q={class:"font-normal"},J=["onClick"],R=["onClick"],T=["id"],X=["transform"],H=["transform"],K=["fill"],W={x:"4",y:"22","font-size":"6","font-weight":"bold"},Y={x:"4",y:"29"},Z={"font-size":"4.5"},tt={opacity:"0.5","font-size":"4"},et=["transform"],st={x:"10",y:2,"font-size":"3","font-weight":"bold"},ot={x:"18",y:"65","font-family":"monospace","font-size":"3"},dt={__name:"PrintEnrollments",setup(lt){const x=new N;function $(o,s){const i=document.getElementById(o);x.svg(i,{width:210,height:297}).then(()=>{x.save(s+".pdf")})}const{user:f,userDB:E}=D(),P=F(async()=>f.value&&E.request(A("enrollments",{fields:["*","course.*","course.classes.date","course.classes.module.title","course.program.title","course.program.color"]})).then(o=>o||[]).catch(o=>console.log(o))),V=U(()=>Object.groupBy(P.value||[],o=>o.course.program.title)),I=o=>{document.getElementById(o)&&Object.assign(document.createElement("a"),{href:`data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<?xml version="1.0" standalone="no"?>\r
`+new XMLSerializer().serializeToString(document.getElementById(o)))}`,download:o}).click()};return(o,s)=>(l(),r(u,null,[z(f)?S("",!0):(l(),r(u,{key:0},[s[0]||(s[0]=t("div",{class:"text-2xl"},"Please login to see available enrollments",-1)),C(G,{class:"m-4"})],64)),z(f)?(l(),r("div",q,[(l(!0),r(u,null,m(V.value,(i,g)=>{var h,p,v;return l(),r("div",{class:"flex flex-col gap-2 w-full p-2",key:i},[t("div",L,[t("div",O,c(g),1),t("div",Q,c(i.length)+"/8",1),s[3]||(s[3]=t("div",{class:"flex-1"},null,-1)),t("button",{class:"shadow cursor-pointer px-2 bg-light-700 hover-bg-light-200 active-bg-light-50 rounded-xl flex items-center gap-1",onClick:e=>{var n,a,d;return I((d=(a=(n=i[0])==null?void 0:n.course)==null?void 0:a.program)==null?void 0:d.title)}},s[1]||(s[1]=[t("div",{class:"i-la-camera text-xl"},null,-1),t("div",{class:"text-xs"},"Save SVG",-1)]),8,J),t("button",{class:"shadow cursor-pointer px-2 bg-light-700 hover-bg-light-200 active-bg-light-50 rounded-xl flex items-center gap-1",onClick:e=>{var n,a,d;return $((d=(a=(n=i[0])==null?void 0:n.course)==null?void 0:a.program)==null?void 0:d.title,g)}},s[2]||(s[2]=[t("div",{class:"i-la-file-pdf text-xl"},null,-1),t("div",{class:"text-xs"},"Save PDF",-1)]),8,R)]),(l(),r("svg",{class:"w-full","font-family":"Commissioner, sans-serif",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 210 297",version:"1.1",id:(v=(p=(h=i[0])==null?void 0:h.course)==null?void 0:p.program)==null?void 0:v.title},[s[7]||(s[7]=t("rect",{width:"210",height:"297",fill:"#fff"},null,-1)),s[8]||(s[8]=t("clipPath",{id:"clip",clipPathUnits:"objectBoundingBox"},[t("rect",{width:"1",rx:"0.01",ry:".03",height:"1",fill:"#fff"})],-1)),s[9]||(s[9]=t("line",{x1:"105",x2:"105",y1:"0",y2:"297",stroke:"#aaa","stroke-width":".1"},null,-1)),(l(),r(u,null,m(8,e=>t("line",{key:e,x1:0,x2:"210",transform:`translate(0,${e*74})`,y1:"0",y2:"0",stroke:"#aaa","stroke-width":".1"},null,8,X)),64)),(l(!0),r(u,null,m(i,(e,n)=>{var a,d,w,y,k,_;return l(),r("g",{key:e,transform:`translate(${n%2*105+1.5}, ${Math.floor(n/2)*74+3})`},[t("rect",{rx:"2","stroke-width":".25",x:"1",width:"100",height:32,fill:(d=(a=e==null?void 0:e.course)==null?void 0:a.program)==null?void 0:d.color},null,8,K),C(M,{class:"rounded-1px",value:`https://school.chromatone.center/enroll/#${e==null?void 0:e.id}`,x:"75",y:"33.5",size:25,"render-as":"svg",margin:2},null,8,["value"]),s[5]||(s[5]=t("text",{x:"4",y:"6.5","font-size":"4"},[t("tspan",{"font-weight":"bold"},"Visual Music School "),t("tspan",null,"@ Place Coworking")],-1)),t("text",W,c((y=(w=e==null?void 0:e.course)==null?void 0:w.program)==null?void 0:y.title),1),t("text",Y,[t("tspan",Z,c((k=e==null?void 0:e.course)==null?void 0:k.level)+" course ",1),t("tspan",tt,c(n+1)+"/"+c(i.length),1)]),(l(!0),r(u,null,m((_=e==null?void 0:e.course)==null?void 0:_.classes,(b,j)=>{var B;return l(),r("g",{key:b,transform:`translate(0, ${j*6+36})`},[t("text",st,c((B=b.module)==null?void 0:B.title),1),s[4]||(s[4]=t("rect",{width:"4",height:"4",fill:"none",stroke:"black","stroke-width":".2",rx:"10",x:"4",y:-1.2},null,-1))],8,et)}),128)),s[6]||(s[6]=t("g",{id:"id",transform:"translate(0,60)"},[t("rect",{width:"98",x:"2",height:"8",rx:"2",fill:"#ccc"})],-1)),t("text",ot,c(e==null?void 0:e.id),1)],8,H)}),128))],8,T))])}),128))])):S("",!0)],64))}};export{dt as default};
