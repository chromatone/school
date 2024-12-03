import{l as I,F as O,G as z}from"./chunks/index.DDtVt8tl.js";import{t as p,c as M,n as Y,s as y,m as w,a as U,b as P,f as g}from"./chunks/format.CHl3EdWp.js";import{k,l as W,m as $,o as d,c as m,d as s,t as f,a as h,F as N,i as T,n as R,b as Z,j as _,e as H}from"./chunks/framework.oynKXNHA.js";function V(a,e,t){const n=p(a,t==null?void 0:t.in);return isNaN(e)?M(a,NaN):(e&&n.setDate(n.getDate()+e),n)}function b(a,e,t){const[n,r]=Y(t==null?void 0:t.in,a,e);return+y(n)==+y(r)}function B(a,e){return p(a,e==null?void 0:e.in).getDate()===1}function S(a,e){const t=()=>M(e==null?void 0:e.in,NaN),n=(e==null?void 0:e.additionalDigits)??2,r=G(a);let u;if(r.date){const i=J(r.date,n);u=q(i.restDateString,i.year)}if(!u||isNaN(+u))return t();const o=+u;let c=0,l;if(r.time&&(c=A(r.time),isNaN(c)))return t();if(r.timezone){if(l=K(r.timezone),isNaN(l))return t()}else{const i=new Date(o+c),v=p(0,e==null?void 0:e.in);return v.setFullYear(i.getUTCFullYear(),i.getUTCMonth(),i.getUTCDate()),v.setHours(i.getUTCHours(),i.getUTCMinutes(),i.getUTCSeconds(),i.getUTCMilliseconds()),v}return p(o+c+l,e==null?void 0:e.in)}const x={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},L=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,j=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,E=/^([+-])(\d{2})(?::?(\d{2}))?$/;function G(a){const e={},t=a.split(x.dateTimeDelimiter);let n;if(t.length>2)return e;if(/:/.test(t[0])?n=t[0]:(e.date=t[0],n=t[1],x.timeZoneDelimiter.test(e.date)&&(e.date=a.split(x.timeZoneDelimiter)[0],n=a.substr(e.date.length,a.length))),n){const r=x.timezone.exec(n);r?(e.time=n.replace(r[1],""),e.timezone=r[1]):e.time=n}return e}function J(a,e){const t=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),n=a.match(t);if(!n)return{year:NaN,restDateString:""};const r=n[1]?parseInt(n[1]):null,u=n[2]?parseInt(n[2]):null;return{year:u===null?r:u*100,restDateString:a.slice((n[1]||n[2]).length)}}function q(a,e){if(e===null)return new Date(NaN);const t=a.match(L);if(!t)return new Date(NaN);const n=!!t[4],r=D(t[1]),u=D(t[2])-1,o=D(t[3]),c=D(t[4]),l=D(t[5])-1;if(n)return ae(e,c,l)?Q(e,c,l):new Date(NaN);{const i=new Date(0);return!ee(e,u,o)||!te(e,r)?new Date(NaN):(i.setUTCFullYear(e,u,Math.max(r,o)),i)}}function D(a){return a?parseInt(a):1}function A(a){const e=a.match(j);if(!e)return NaN;const t=C(e[1]),n=C(e[2]),r=C(e[3]);return ne(t,n,r)?t*w+n*U+r*1e3:NaN}function C(a){return a&&parseFloat(a.replace(",","."))||0}function K(a){if(a==="Z")return 0;const e=a.match(E);if(!e)return 0;const t=e[1]==="+"?-1:1,n=parseInt(e[2]),r=e[3]&&parseInt(e[3])||0;return re(n,r)?t*(n*w+r*U):NaN}function Q(a,e,t){const n=new Date(0);n.setUTCFullYear(a,0,4);const r=n.getUTCDay()||7,u=(e-1)*7+t+1-r;return n.setUTCDate(n.getUTCDate()+u),n}const X=[31,null,31,30,31,30,31,31,30,31,30,31];function F(a){return a%400===0||a%4===0&&a%100!==0}function ee(a,e,t){return e>=0&&e<=11&&t>=1&&t<=(X[e]||(F(a)?29:28))}function te(a,e){return e>=1&&e<=(F(a)?366:365)}function ae(a,e,t){return e>=1&&e<=53&&t>=0&&t<=6}function ne(a,e,t){return a===24?e===0&&t===0:t>=0&&t<60&&e>=0&&e<60&&a>=0&&a<25}function re(a,e){return e>=0&&e<=59}const se={class:"text-lg mb-4"},ie={class:"grid grid-cols-7 gap-2 mb-8 not-prose overflow-x-scroll"},le={class:"text-sm font-semibold"},ue={key:0},ce=["href"],oe={class:"text-sm"},de={class:"text-sm"},me={class:"text-lg"},fe=7,he=4,De={__name:"ClassSchedule",setup(a){const e=I("https://schooldb.chromatone.center/").with(O()),t=k("");W(async()=>{t.value=await e.request(z("classes",{fields:["*","course.*"]}))});const n=k(P(new Date,{weekStartsOn:1})),r=$(()=>Array.from({length:fe*he},(o,c)=>V(n.value,c))),u=o=>t.value.filter(c=>b(S(c.date),o));return(o,c)=>(d(),m(N,null,[c[0]||(c[0]=s("h2",{class:"text-2xl mt-8"},"Class Schedule ",-1)),s("h3",se,"Starting "+f(h(g)(n.value,"dd/MM/yy")),1),s("div",ie,[(d(),m(N,null,T(["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],l=>s("div",{class:"rounded font-bold bg-gray-900 p-2",key:l},f(l),1)),64)),(d(!0),m(N,null,T(r.value,l=>(d(),m("div",{class:R(["rounded border p-2 border-green-500",{"border-4":h(b)(l,Date.now())}]),key:l},[s("div",le,f(h(g)(l,"dd"))+" "+f(h(B)(l)?h(g)(l,"MMM"):""),1),t.value?(d(),m("ul",ue,[(d(!0),m(N,null,T(u(l),i=>(d(),m("li",{class:"text-sm",key:i.title},[s("a",{href:`/class/#${i.id}`},[s("div",oe,f(h(g)(h(S)(i.date),"HH:mm")),1),s("div",de,f(i.course.title),1),s("div",me,f(i.title),1)],8,ce)]))),128))])):Z("",!0)],2))),128))])],64))}},pe=JSON.parse('{"title":"Creative Multimedia School","description":"","frontmatter":{"home":true},"headers":[],"relativePath":"index.md","filePath":"index.md"}'),ge={name:"index.md"},ve=Object.assign(ge,{setup(a){return(e,t)=>(d(),m("div",null,[t[0]||(t[0]=s("p",null,[s("strong",null,"Chromatone")],-1)),t[1]||(t[1]=s("h1",{id:"creative-multimedia-school",tabindex:"-1"},[_("Creative Multimedia School "),s("a",{class:"header-anchor",href:"#creative-multimedia-school","aria-label":'Permalink to "Creative Multimedia School"'},"​")],-1)),t[2]||(t[2]=s("h2",{id:"place-collab-phuket-thailand",tabindex:"-1"},[_("Place Collab, Phuket, Thailand "),s("a",{class:"header-anchor",href:"#place-collab-phuket-thailand","aria-label":'Permalink to "Place Collab, Phuket, Thailand"'},"​")],-1)),H(De),t[3]||(t[3]=s("p",null,[_("Space to grow multimedia "),s("strong",null,"creativity"),_(" on the island")],-1)),t[4]||(t[4]=s("ul",null,[s("li",null,[s("a",{href:"./courses/index.html"},"Courses")]),s("li",null,[s("a",{href:"./classes/index.html"},"Classes")])],-1))]))}});export{pe as __pageData,ve as default};
