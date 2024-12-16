import{l as I,F as O,G as z}from"./theme.CEQJVZn5.js";import{u as Y}from"./useHash.63-nVywQ.js";import{t as p,c as U,n as W,s as v,m as b,a as F,b as H,f as N}from"./format.CHl3EdWp.js";import{r as C,o as R,p as Z,a as g,c as D,b as o,t as d,u as f,F as _,q as T,s as k,g as $}from"./framework.KJHvv_yO.js";function B(s,e,t){const n=p(s,t==null?void 0:t.in);return isNaN(e)?U(s,NaN):(e&&n.setDate(n.getDate()+e),n)}function w(s,e,t){const[n,r]=W(t==null?void 0:t.in,s,e);return+v(n)==+v(r)}function L(s,e){return p(s,e==null?void 0:e.in).getDate()===1}function M(s,e){const t=()=>U(e==null?void 0:e.in,NaN),n=(e==null?void 0:e.additionalDigits)??2,r=V(s);let i;if(r.date){const a=A(r.date,n);i=J(a.restDateString,a.year)}if(!i||isNaN(+i))return t();const m=+i;let c=0,l;if(r.time&&(c=j(r.time),isNaN(c)))return t();if(r.timezone){if(l=K(r.timezone),isNaN(l))return t()}else{const a=new Date(m+c),u=p(0,e==null?void 0:e.in);return u.setFullYear(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate()),u.setHours(a.getUTCHours(),a.getUTCMinutes(),a.getUTCSeconds(),a.getUTCMilliseconds()),u}return p(m+c+l,e==null?void 0:e.in)}const x={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},q=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,E=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,G=/^([+-])(\d{2})(?::?(\d{2}))?$/;function V(s){const e={},t=s.split(x.dateTimeDelimiter);let n;if(t.length>2)return e;if(/:/.test(t[0])?n=t[0]:(e.date=t[0],n=t[1],x.timeZoneDelimiter.test(e.date)&&(e.date=s.split(x.timeZoneDelimiter)[0],n=s.substr(e.date.length,s.length))),n){const r=x.timezone.exec(n);r?(e.time=n.replace(r[1],""),e.timezone=r[1]):e.time=n}return e}function A(s,e){const t=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),n=s.match(t);if(!n)return{year:NaN,restDateString:""};const r=n[1]?parseInt(n[1]):null,i=n[2]?parseInt(n[2]):null;return{year:i===null?r:i*100,restDateString:s.slice((n[1]||n[2]).length)}}function J(s,e){if(e===null)return new Date(NaN);const t=s.match(q);if(!t)return new Date(NaN);const n=!!t[4],r=h(t[1]),i=h(t[2])-1,m=h(t[3]),c=h(t[4]),l=h(t[5])-1;if(n)return te(e,c,l)?P(e,c,l):new Date(NaN);{const a=new Date(0);return!X(e,i,m)||!ee(e,r)?new Date(NaN):(a.setUTCFullYear(e,i,Math.max(r,m)),a)}}function h(s){return s?parseInt(s):1}function j(s){const e=s.match(E);if(!e)return NaN;const t=y(e[1]),n=y(e[2]),r=y(e[3]);return se(t,n,r)?t*b+n*F+r*1e3:NaN}function y(s){return s&&parseFloat(s.replace(",","."))||0}function K(s){if(s==="Z")return 0;const e=s.match(G);if(!e)return 0;const t=e[1]==="+"?-1:1,n=parseInt(e[2]),r=e[3]&&parseInt(e[3])||0;return ne(n,r)?t*(n*b+r*F):NaN}function P(s,e,t){const n=new Date(0);n.setUTCFullYear(s,0,4);const r=n.getUTCDay()||7,i=(e-1)*7+t+1-r;return n.setUTCDate(n.getUTCDate()+i),n}const Q=[31,null,31,30,31,30,31,31,30,31,30,31];function S(s){return s%400===0||s%4===0&&s%100!==0}function X(s,e,t){return e>=0&&e<=11&&t>=1&&t<=(Q[e]||(S(s)?29:28))}function ee(s,e){return e>=1&&e<=(S(s)?366:365)}function te(s,e,t){return e>=1&&e<=53&&t>=0&&t<=6}function se(s,e,t){return s===24?e===0&&t===0:t>=0&&t<60&&e>=0&&e<60&&s>=0&&s<25}function ne(s,e){return e>=0&&e<=59}const re={class:"text-lg mb-4"},ae={class:"grid grid-cols-7 gap-2 mb-8 not-prose overflow-x-scroll font-mono"},ie={class:"text-sm font-semibold"},le={key:0},ce=["href"],ue={class:"text-sm"},oe={class:"text-sm uppercase"},de={class:"text-sm"},fe=7,me=5,_e={__name:"ClassSchedule",setup(s){const e=I("https://schooldb.chromatone.center/").with(O()),t=C([]);R(async()=>{t.value=await e.request(z("classes",{fields:["*","module.title","course.level","course.program.slug"]}))});const n=C(H(new Date,{weekStartsOn:0})),r=Z(()=>Array.from({length:fe*me},(c,l)=>B(n.value,l))),i=c=>t.value.filter(l=>w(M(l.date||""),c)),m=Y();return(c,l)=>(g(),D(_,null,[l[0]||(l[0]=o("h2",{class:"text-2xl mt-8"},"Class Schedule ",-1)),o("h3",re,"Starting "+d(f(N)(n.value,"dd/MM/yy")),1),o("div",ae,[(g(),D(_,null,T(["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],a=>o("div",{class:"rounded font-bold bg-gray-400 p-2",key:a},d(a),1)),64)),(g(!0),D(_,null,T(r.value,a=>(g(),D("div",{class:k(["rounded p-1 bg-light-50 flex flex-col gap-1",{"border-4":f(w)(a,Date.now()),"op-50":i(a).length==0}]),key:a},[o("div",ie,d(f(N)(a,"dd"))+" "+d(f(L)(a)?f(N)(a,"MMM"):""),1),t.value?(g(),D("ul",le,[(g(!0),D(_,null,T(i(a),u=>(g(),D("li",{class:k(["text-sm rounded",{"bg-light-500":u.id==f(m)}]),key:u.title},[o("a",{class:"flex flex-col gap-1 items-start bg-light-300 p-1 rounded-xl",href:`/classes/#${u.id}`},[o("div",ue,d(f(N)(f(M)(u.date),"HH:mm")),1),o("div",oe,d(u.course.program.slug)+" "+d(u.course.level),1),o("div",de,d(u.module.title),1)],8,ce)],2))),128))])):$("",!0)],2))),128))])],64))}};export{_e as _};
