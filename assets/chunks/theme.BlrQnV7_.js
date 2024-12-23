import{u as x,r as k,i as se,w as z,g as ce,o as ue,s as de,a as fe,c as oe,b as pe,d as he,_ as ge,e as E,f as $,h as b,j as V,t as A,k as me,l as K,v as Q,m as D,n as re,p as X,T as ae,q as ye,x as ve,y as we}from"./framework.LhDnjOZs.js";function be(e){return e?`/auth/login/${e}`:"/auth/login"}var F="/",_e=(e,n)=>(e.endsWith(F)&&(e=e.slice(0,-1)),n.startsWith(F)||(n=F+n),e+n),P=(e,n,s)=>{let t=e.pathname===F?n:_e(e.pathname,n),o=new globalThis.URL(t,e);if(s)for(let[i,a]of Object.entries(Oe(s)))if(a&&typeof a=="object"&&!Array.isArray(a))for(let[f,d]of Object.entries(a))o.searchParams.set(`${i}[${f}]`,String(d));else o.searchParams.set(i,a);return o};function xe(e){return typeof e!="object"||!e?!1:"headers"in e&&"ok"in e&&"json"in e&&typeof e.json=="function"&&"text"in e&&typeof e.json=="function"}async function ke(e){var n;if(!(typeof e!="object"||!e)){if(xe(e)){let s=(n=e.headers.get("Content-Type"))==null?void 0:n.toLowerCase();if(s!=null&&s.startsWith("application/json")||s!=null&&s.startsWith("application/health+json")){let t=await e.json();if(!e.ok||"errors"in t)throw t;return"data"in t?t.data:t}if(s!=null&&s.startsWith("text/html")||s!=null&&s.startsWith("text/plain")){let t=await e.text();if(!e.ok)throw t;return t}return e}if("errors"in e)throw e;return"data"in e?e.data:e}}var U=async(e,n,s=globalThis.fetch)=>(n.headers=typeof n.headers=="object"&&!Array.isArray(n.headers)?n.headers:{},s(e,n).then(t=>ke(t).catch(o=>{let i={errors:o&&typeof o=="object"&&"errors"in o?o.errors:o,response:t};return o&&typeof o=="object"&&"data"in o&&(i.data=o.data),Promise.reject(i)}))),Se=()=>{let e=null;return{get:async()=>e,set:async n=>{e=n}}},Te={msRefreshBeforeExpires:3e4,autoRefresh:!0},Ae=2**31-1,Ee=(e="cookie",n={})=>s=>{let t={...Te,...n},o=null,i=null,a=t.storage??Se(),f=async()=>a.set({access_token:null,refresh_token:null,expires:null,expires_at:null}),d=async()=>{try{await o}finally{o=null}},h=async()=>{let c=await a.get();return o||!(c!=null&&c.expires_at)||c.expires_at<new Date().getTime()+t.msRefreshBeforeExpires&&v().catch(g=>{}),d()},u=async c=>{let g=c.expires??0;c.expires_at=new Date().getTime()+g,await a.set(c),t.autoRefresh&&g>t.msRefreshBeforeExpires&&g<Ae&&(i&&clearTimeout(i),i=setTimeout(()=>{i=null,v().catch(w=>{})},g-t.msRefreshBeforeExpires))},v=async()=>(o=(async()=>{let c=await a.get();await f();let g={method:"POST",headers:{"Content-Type":"application/json"}};"credentials"in t&&(g.credentials=t.credentials);let w={mode:e};e==="json"&&(c!=null&&c.refresh_token)&&(w.refresh_token=c.refresh_token),g.body=JSON.stringify(w);let p=P(s.url,"/auth/refresh");return U(p.toString(),g,s.globals.fetch).then(r=>u(r).then(()=>r))})(),o);return{refresh:v,async login(c,g,w={}){await f();let p={email:c,password:g};"otp"in w&&(p.otp=w.otp),p.mode=w.mode??e;let r=be(w.provider),l=P(s.url,r),m={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)};"credentials"in t&&(m.credentials=t.credentials);let y=await U(l.toString(),m,s.globals.fetch);return await u(y),y},async logout(){let c=await a.get(),g={method:"POST",headers:{"Content-Type":"application/json"}};"credentials"in t&&(g.credentials=t.credentials);let w={mode:e};e==="json"&&(c!=null&&c.refresh_token)&&(w.refresh_token=c.refresh_token),g.body=JSON.stringify(w);let p=P(s.url,"/auth/logout");await U(p.toString(),g,s.globals.fetch),this.stopRefreshing(),await f()},stopRefreshing(){i&&clearTimeout(i)},async getToken(){var c;return await h().catch(()=>{}),((c=await a.get())==null?void 0:c.access_token)??null},async setToken(c){return a.set({access_token:c,refresh_token:null,expires:null,expires_at:null})}}},vt=e=>n=>{let s=e??null;return{async getToken(){return s},async setToken(t){s=t}}},Z={fetch:globalThis.fetch,WebSocket:globalThis.WebSocket,URL:globalThis.URL,logger:globalThis.console},$e=(e,n={})=>{let s=n.globals?{...Z,...n.globals}:Z;return{globals:s,url:new s.URL(e),with(t){return{...this,...t(this)}}}};function ee(e){return JSON.stringify({...e,type:"auth"})}var Ce=()=>JSON.stringify({type:"pong"});function*te(){let e=1;for(;;)yield String(e),e++}var W=(e,n=1e3)=>new Promise((s,t)=>{let o=d=>{try{let h=JSON.parse(d.data);typeof h=="object"&&!Array.isArray(h)&&h!==null?(a(),s(h)):(a(),i())}catch{a(),s(d)}},i=()=>t(),a=()=>{clearTimeout(f),e.removeEventListener("message",o),e.removeEventListener("error",i),e.removeEventListener("close",i)};e.addEventListener("message",o),e.addEventListener("error",i),e.addEventListener("close",i);let f=setTimeout(()=>{a(),s(void 0)},n)}),je={authMode:"handshake",heartbeat:!0,debug:!1,reconnect:{delay:1e3,retries:10}};function wt(e={}){return n=>{e={...je,...e};let s=te(),t={code:"closed"},o={attempts:0,active:!1},i=!1,a=new Set,f=r=>"getToken"in r,d=(r,...l)=>e.debug&&n.globals.logger[r]("[Directus SDK]",...l),h=async(r,l)=>{let m=new n.globals.URL(r);if(e.authMode==="strict"&&f(l)){let y=await l.getToken();y&&m.searchParams.set("access_token",y)}return m.toString()},u=async r=>{if("url"in e)return await h(e.url,r);if(["ws:","wss:"].includes(n.url.protocol))return await h(n.url,r);let l=new n.globals.URL(n.url.toString());return l.protocol=n.url.protocol==="https:"?"wss:":"ws:",l.pathname="/websocket",await h(l,r)},v=r=>{let l=new Promise((m,y)=>{if(!e.reconnect||i)return y();if(d("info",`reconnect #${o.attempts} `+(o.attempts>=e.reconnect.retries?"maximum retries reached":`trying again in ${Math.max(100,e.reconnect.delay)}ms`)),o.active)return o.active;if(o.attempts>=e.reconnect.retries)return o.attempts=-1,y();setTimeout(()=>r.connect().then(T=>(a.forEach(_=>{r.sendMessage(_)}),T)).then(m).catch(y),Math.max(100,e.reconnect.delay))});o.attempts+=1,o.active=l.catch(()=>{}).finally(()=>{o.active=!1})},c={open:new Set([]),error:new Set([]),close:new Set([]),message:new Set([])};function g(r){return"type"in r&&"status"in r&&"error"in r&&"code"in r.error&&"message"in r.error&&r.type==="auth"&&r.status==="error"}async function w(r,l){if(t.code==="open"){if(r.error.code==="TOKEN_EXPIRED"&&(d("warn","Authentication token expired!"),f(l))){let m=await l.getToken();if(!m)throw Error("No token for re-authenticating the websocket");t.connection.send(ee({access_token:m}))}if(r.error.code==="AUTH_TIMEOUT")return t.firstMessage&&e.authMode==="public"?(d("warn",'Authentication failed! Currently the "authMode" is "public" try using "handshake" instead'),e.reconnect=!1):d("warn","Authentication timed out!"),t.connection.close();if(r.error.code==="AUTH_FAILED"){if(t.firstMessage&&e.authMode==="public")return d("warn",'Authentication failed! Currently the "authMode" is "public" try using "handshake" instead'),e.reconnect=!1,t.connection.close();d("warn","Authentication failed!")}}}let p=async r=>{for(;t.code==="open";){let l=await W(t.connection).catch(()=>{});if(l){if(g(l)){await w(l,r),t.firstMessage=!1;continue}if(e.heartbeat&&l.type==="ping"){t.connection.send(Ce()),t.firstMessage=!1;continue}c.message.forEach(m=>{t.code==="open"&&m.call(t.connection,l)}),t.firstMessage=!1}}};return{async connect(){if(i=!1,t.code==="connecting")return await t.connection;if(t.code!=="closed")throw new Error(`Cannot connect when state is "${t.code}"`);let r=this,l=await u(r);d("info",`Connecting to ${l}...`);let m=new Promise((y,T)=>{let _=!1,S=new n.globals.WebSocket(l);S.addEventListener("open",async M=>{if(d("info","Connection open."),t={code:"open",connection:S,firstMessage:!0},o.attempts=0,o.active=!1,p(r),e.authMode==="handshake"&&f(r)){let C=await r.getToken();if(!C)throw Error("No token for authenticating the websocket. Make sure to provide one or call the login() function beforehand.");S.send(ee({access_token:C}));let N=await W(S);if(N&&"type"in N&&"status"in N&&N.type==="auth"&&N.status==="ok")d("info","Authentication successful!");else return T("Authentication failed while opening websocket connection")}c.open.forEach(C=>C.call(S,M)),_=!0,y(S)}),S.addEventListener("error",M=>{d("warn","Connection errored."),c.error.forEach(C=>C.call(S,M)),S.close(),t={code:"error"},_||T(M)}),S.addEventListener("close",M=>{d("info","Connection closed."),c.close.forEach(C=>C.call(S,M)),s=te(),t={code:"closed"},v(this),_||T(M)})});return t={code:"connecting",connection:m},m},disconnect(){i=!0,t.code==="open"&&t.connection.close()},onWebSocket(r,l){if(r==="message"){let m=function(y){if(typeof y.data!="string")return l.call(this,y);try{return l.call(this,JSON.parse(y.data))}catch{return l.call(this,y)}};return c[r].add(m),()=>c[r].delete(m)}return c[r].add(l),()=>c[r].delete(l)},sendMessage(r){if(t.code!=="open")throw new Error('Cannot send messages without an open connection. Make sure you are calling "await client.connect()".');if(typeof r=="string")return t.connection.send(r);"uid"in r||(r.uid=s.next().value),t.connection.send(JSON.stringify(r))},async subscribe(r,l={}){"uid"in l||(l.uid=s.next().value),a.add({...l,collection:r,type:"subscribe"}),t.code!=="open"&&(d("info","No connection available for subscribing!"),await this.connect()),this.sendMessage({...l,collection:r,type:"subscribe"});let m=!0;async function*y(){for(;m&&t.code==="open";){let _=await W(t.connection).catch(()=>{});if(_){if("type"in _&&"status"in _&&_.type==="subscribe"&&_.status==="error")throw _;"type"in _&&"uid"in _&&_.type==="subscription"&&_.uid===l.uid&&(yield _)}}e.reconnect&&o.active&&(await o.active,t.code==="open"&&(t.connection.send(JSON.stringify({...l,collection:r,type:"subscribe"})),yield*y()))}let T=()=>{a.delete({...l,collection:r,type:"subscribe"}),this.sendMessage({uid:l.uid,type:"unsubscribe"}),m=!1};return{subscription:y(),unsubscribe:T}}}}}function ie(e){return["directus_access","directus_activity","directus_collections","directus_comments","directus_fields","directus_files","directus_folders","directus_migrations","directus_permissions","directus_policies","directus_presets","directus_relations","directus_revisions","directus_roles","directus_sessions","directus_settings","directus_users","directus_webhooks","directus_dashboards","directus_panels","directus_notifications","directus_shares","directus_flows","directus_operations","directus_translations","directus_versions","directus_extensions"].includes(e)}var bt=(e,n,s)=>()=>{let t=String(e);if(ie(t))throw new Error("Cannot use createItem for core collections");return{path:`/items/${t}`,params:s??{},body:JSON.stringify(n),method:"POST"}},Me=e=>{let n=(s,t=[])=>{if(typeof s=="object"){let o=[];for(let i in s){let a=s[i]??[];if(Array.isArray(a))for(let f of a)o.push(n(f,[...t,i]));else if(typeof a=="object")for(let f of Object.keys(a)){let d=a[f];for(let h of d)o.push(n(h,[...t,`${i}:${f}`]))}}return o.flatMap(i=>i)}return[...t,String(s)].join(".")};return e.flatMap(s=>n(s))},Oe=e=>{let n={};Array.isArray(e.fields)&&e.fields.length>0&&(n.fields=Me(e.fields).join(",")),e.filter&&Object.keys(e.filter).length>0&&(n.filter=JSON.stringify(e.filter)),e.search&&(n.search=e.search),"sort"in e&&e.sort&&(n.sort=typeof e.sort=="string"?e.sort:e.sort.join(",")),typeof e.limit=="number"&&e.limit>=-1&&(n.limit=String(e.limit)),typeof e.offset=="number"&&e.offset>=0&&(n.offset=String(e.offset)),typeof e.page=="number"&&e.page>=1&&(n.page=String(e.page)),e.deep&&Object.keys(e.deep).length>0&&(n.deep=JSON.stringify(e.deep)),e.alias&&Object.keys(e.alias).length>0&&(n.alias=JSON.stringify(e.alias)),e.aggregate&&Object.keys(e.aggregate).length>0&&(n.aggregate=JSON.stringify(e.aggregate)),e.groupBy&&e.groupBy.length>0&&(n.groupBy=e.groupBy.join(","));for(let[s,t]of Object.entries(e))s in n||(typeof t=="string"||typeof t=="number"||typeof t=="boolean"?n[s]=String(t):n[s]=JSON.stringify(t));return n},R=(e,n)=>{if(e.length===0)throw new Error(n)},H=(e,n)=>{if(ie(String(e)))throw new Error(n)},_t=(e,n)=>()=>(R(String(e),"Collection cannot be empty"),H(e,"Cannot use readItems for core collections"),{path:`/items/${e}`,params:n??{},method:"GET"}),xt=(e,n,s)=>()=>(R(String(e),"Collection cannot be empty"),H(e,"Cannot use readItem for core collections"),R(String(n),"Key cannot be empty"),{path:`/items/${e}/${n}`,params:s??{},method:"GET"}),Re=e=>()=>({path:"/users/me",params:e??{},method:"GET"}),kt=(e,n,s,t)=>()=>(R(String(n),"Key cannot be empty"),R(String(e),"Collection cannot be empty"),H(e,"Cannot use updateItem for core collections"),{path:`/items/${e}/${n}`,params:t??{},body:JSON.stringify(s),method:"PATCH"}),St=(e,n,s)=>()=>(R(e,"Key cannot be empty"),{path:`/users/${e}`,params:s??{},body:JSON.stringify(n),method:"PATCH"}),Ne=(e,n,s={})=>()=>({path:"/users/register",method:"POST",body:JSON.stringify({email:e,password:n,...s})}),Le={},Ie=(e={})=>n=>{let s={...Le,...e};return{async request(t){let o=t();if(o.headers||(o.headers={}),"Content-Type"in o.headers?o.headers["Content-Type"]==="multipart/form-data"&&delete o.headers["Content-Type"]:o.headers["Content-Type"]="application/json","getToken"in this&&!("Authorization"in o.headers)){let d=await this.getToken();d&&(o.headers.Authorization=`Bearer ${d}`)}let i=P(n.url,o.path,o.params),a={method:o.method??"GET",headers:o.headers??{}};"credentials"in s&&(a.credentials=s.credentials),o.body&&(a.body=o.body),o.onRequest&&(a=await o.onRequest(a)),s.onRequest&&(a=await s.onRequest(a));let f=await U(i.toString(),a,n.globals.fetch);return"onResponse"in o&&(f=await o.onResponse(f,a)),"onResponse"in e&&(f=await e.onResponse(f,a)),f}}};function J(e){return ce()?(ue(e),!0):!1}function j(e){return typeof e=="function"?e():x(e)}const B=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const De=Object.prototype.toString,Fe=e=>De.call(e)==="[object Object]",I=()=>{},Pe=Ue();function Ue(){var e,n;return B&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((n=window==null?void 0:window.navigator)==null?void 0:n.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function Je(e,n=1e3,s={}){const{immediate:t=!0,immediateCallback:o=!1}=s;let i=null;const a=k(!1);function f(){i&&(clearInterval(i),i=null)}function d(){a.value=!1,f()}function h(){const u=j(n);u<=0||(a.value=!0,o&&e(),f(),a.value&&(i=setInterval(e,u)))}if(t&&B&&h(),se(n)||typeof n=="function"){const u=z(n,()=>{a.value&&B&&h()});J(u)}return J(d),{isActive:a,pause:d,resume:h}}function Tt(e,n,s){let t;se(s)?t={evaluating:s}:t={};const{lazy:o=!1,evaluating:i=void 0,shallow:a=!0,onError:f=I}=t,d=k(!o),h=a?de(n):k(n);let u=0;return fe(async v=>{if(!d.value)return;u++;const c=u;let g=!1;i&&Promise.resolve().then(()=>{i.value=!0});try{const w=await e(p=>{v(()=>{i&&(i.value=!1),g||p()})});c===u&&(h.value=w)}catch(w){f(w)}finally{i&&c===u&&(i.value=!1),g=!0}}),o?oe(()=>(d.value=!0,h.value)):h}const Y=B?window:void 0;function L(e){var n;const s=j(e);return(n=s==null?void 0:s.$el)!=null?n:s}function q(...e){let n,s,t,o;if(typeof e[0]=="string"||Array.isArray(e[0])?([s,t,o]=e,n=Y):[n,s,t,o]=e,!n)return I;Array.isArray(s)||(s=[s]),Array.isArray(t)||(t=[t]);const i=[],a=()=>{i.forEach(u=>u()),i.length=0},f=(u,v,c,g)=>(u.addEventListener(v,c,g),()=>u.removeEventListener(v,c,g)),d=z(()=>[L(n),j(o)],([u,v])=>{if(a(),!u)return;const c=Fe(v)?{...v}:v;i.push(...s.flatMap(g=>t.map(w=>f(u,g,w,c))))},{immediate:!0,flush:"post"}),h=()=>{d(),a()};return J(h),h}let ne=!1;function Be(e,n,s={}){const{window:t=Y,ignore:o=[],capture:i=!0,detectIframe:a=!1}=s;if(!t)return I;Pe&&!ne&&(ne=!0,Array.from(t.document.body.children).forEach(p=>p.addEventListener("click",I)),t.document.documentElement.addEventListener("click",I));let f=!0;const d=p=>j(o).some(r=>{if(typeof r=="string")return Array.from(t.document.querySelectorAll(r)).some(l=>l===p.target||p.composedPath().includes(l));{const l=L(r);return l&&(p.target===l||p.composedPath().includes(l))}});function h(p){const r=j(p);return r&&r.$.subTree.shapeFlag===16}function u(p,r){const l=j(p),m=l.$.subTree&&l.$.subTree.children;return m==null||!Array.isArray(m)?!1:m.some(y=>y.el===r.target||r.composedPath().includes(y.el))}const v=p=>{const r=L(e);if(p.target!=null&&!(!(r instanceof Element)&&h(e)&&u(e,p))&&!(!r||r===p.target||p.composedPath().includes(r))){if(p.detail===0&&(f=!d(p)),!f){f=!0;return}n(p)}};let c=!1;const g=[q(t,"click",p=>{c||(c=!0,setTimeout(()=>{c=!1},0),v(p))},{passive:!0,capture:i}),q(t,"pointerdown",p=>{const r=L(e);f=!d(p)&&!!(r&&!p.composedPath().includes(r))},{passive:!0}),a&&q(t,"blur",p=>{setTimeout(()=>{var r;const l=L(e);((r=t.document.activeElement)==null?void 0:r.tagName)==="IFRAME"&&!(l!=null&&l.contains(t.document.activeElement))&&n(p)},0)})].filter(Boolean);return()=>g.forEach(p=>p())}function We(e,n={}){const{immediate:s=!0,fpsLimit:t=void 0,window:o=Y}=n,i=k(!1),a=t?1e3/t:null;let f=0,d=null;function h(c){if(!i.value||!o)return;f||(f=c);const g=c-f;if(a&&g<a){d=o.requestAnimationFrame(h);return}f=c,e({delta:g,timestamp:c}),d=o.requestAnimationFrame(h)}function u(){!i.value&&o&&(i.value=!0,f=0,d=o.requestAnimationFrame(h))}function v(){i.value=!1,d!=null&&o&&(o.cancelAnimationFrame(d),d=null)}return s&&u(),J(v),{isActive:pe(i),pause:v,resume:u}}function qe(e={}){const{controls:n=!1,interval:s="requestAnimationFrame"}=e,t=k(new Date),o=()=>t.value=new Date,i=s==="requestAnimationFrame"?We(o,{immediate:!0}):Je(o,s,{immediate:!0});return n?{now:t,...i}:t}const Ge=[{max:6e4,value:1e3,name:"second"},{max:276e4,value:6e4,name:"minute"},{max:72e6,value:36e5,name:"hour"},{max:5184e5,value:864e5,name:"day"},{max:24192e5,value:6048e5,name:"week"},{max:28512e6,value:2592e6,name:"month"},{max:Number.POSITIVE_INFINITY,value:31536e6,name:"year"}],Ve={justNow:"just now",past:e=>e.match(/\d/)?`${e} ago`:e,future:e=>e.match(/\d/)?`in ${e}`:e,month:(e,n)=>e===1?n?"last month":"next month":`${e} month${e>1?"s":""}`,year:(e,n)=>e===1?n?"last year":"next year":`${e} year${e>1?"s":""}`,day:(e,n)=>e===1?n?"yesterday":"tomorrow":`${e} day${e>1?"s":""}`,week:(e,n)=>e===1?n?"last week":"next week":`${e} week${e>1?"s":""}`,hour:e=>`${e} hour${e>1?"s":""}`,minute:e=>`${e} minute${e>1?"s":""}`,second:e=>`${e} second${e>1?"s":""}`,invalid:""};function Ke(e){return e.toISOString().slice(0,10)}function At(e,n={}){const{controls:s=!1,updateInterval:t=3e4}=n,{now:o,...i}=qe({interval:t,controls:!0}),a=oe(()=>ze(new Date(j(e)),n,j(o)));return s?{timeAgo:a,...i}:a}function ze(e,n={},s=Date.now()){var t;const{max:o,messages:i=Ve,fullDateFormatter:a=Ke,units:f=Ge,showSecond:d=!1,rounding:h="round"}=n,u=typeof h=="number"?r=>+r.toFixed(h):Math[h],v=+s-+e,c=Math.abs(v);function g(r,l){return u(Math.abs(r)/l.value)}function w(r,l){const m=g(r,l),y=r>0,T=p(l.name,m,y);return p(y?"past":"future",T,y)}function p(r,l,m){const y=i[r];return typeof y=="function"?y(l,m):y.replace("{0}",l.toString())}if(c<6e4&&!d)return i.justNow;if(typeof o=="number"&&c>o)return a(new Date(e));if(typeof o=="string"){const r=(t=f.find(l=>l.name===o))==null?void 0:t.max;if(r&&c>r)return a(new Date(e))}for(const[r,l]of f.entries()){if(g(v,l)<=0&&f[r-1])return w(v,f[r-1]);if(c<l.max)return w(v,l)}return i.invalid}const G=k(null),O=$e("https://schooldb.chromatone.center/").with(Ee("cookie",{credentials:"include",autoRefresh:!0})).with(Ie({credentials:"include"}));function le(){he(async()=>{O.refresh(),await O.getToken()&&s()});const e=k(!1);async function n(o,i,a){o?(await O.login(i,a),s()):(await O.request(Ne(i,a)),e.value=!0)}async function s(){G.value=await O.request(Re())}async function t(){await O.logout(),G.value=null}return{user:G,userDB:O,auth:n,logout:t,registered:e}}const He={class:"bg-light-300 rounded-2xl shadow-xl overflow-hidden max-w-30ch mx-2"},Ye={key:0,class:"p-4 flex flex-col gap-2"},Qe={class:"flex gap-2 items-center p-2"},Xe=["src"],Ze={class:"flex flex-col"},et={class:"text-2xl"},tt={class:"text-xs op-50"},nt={class:"flex flex-wrap gap-2"},st={class:"text-2xl p-4"},ot={class:"p-2 border-2 bg-orange-400 rounded-xl mx-2 shadow-lg hover-brightness-120",type:"submit"},rt={key:0,class:"bg-orange-200 mx-2 rounded-lg p-2"},at={class:"flex gap-1 bg-light-900 p-3"},it={class:"op-50"},lt={__name:"AuthForm",setup(e){const n=k(""),s=k(""),t=k(!0),{user:o,userDB:i,auth:a,logout:f,registered:d}=le();return z(d,h=>t.value=h),(h,u)=>{var v,c,g,w;return E(),$("div",He,[x(o)?(E(),$("div",Ye,[b("div",Qe,[(v=x(o))!=null&&v.avatar?(E(),$("img",{key:0,class:"rounded-full",src:`https://schooldb.chromatone.center/assets/${x(o).avatar}?width=50&height=50`},null,8,Xe)):V("",!0),b("div",Ze,[b("div",et,A((c=x(o))==null?void 0:c.first_name)+" "+A((g=x(o))==null?void 0:g.last_name),1),b("div",tt,A((w=x(o))==null?void 0:w.location),1)])]),b("div",nt,[u[5]||(u[5]=b("a",{class:"no-underline p-2 bg-light-500 rounded-lg hover-bg-light-100",href:"/student"},"My page",-1)),b("button",{class:"p-2 bg-light-500 rounded-lg hover-bg-light-100",onClick:u[0]||(u[0]=p=>x(f)())},"Logout")])])):(E(),$("form",{key:1,class:"flex flex-col gap-2",onSubmit:u[4]||(u[4]=me(p=>x(a)(t.value,n.value,s.value),["prevent","stop"]))},[b("div",st,A(t.value?"Sign In":"Sign Up"),1),u[9]||(u[9]=b("label",{class:"px-2",for:"email"},"Email",-1)),K(b("input",{class:"mx-2",id:"email",type:"email","onUpdate:modelValue":u[1]||(u[1]=p=>n.value=p),placeholder:"Your email"},null,512),[[Q,n.value]]),u[10]||(u[10]=b("label",{class:"px-2",for:"password"},"Password",-1)),K(b("input",{class:"mx-2",id:"password",type:"password","onUpdate:modelValue":u[2]||(u[2]=p=>s.value=p),placeholder:"Your password"},null,512),[[Q,s.value]]),b("button",ot,A(t.value?"LOGIN":"REGISTER"),1),D(ae,{name:"fade"},{default:re(()=>[x(d)?(E(),$("div",rt,[u[6]||(u[6]=X("Account successfully registered. Check your email ")),b("b",null,A(n.value),1),u[7]||(u[7]=X(" for activation link. After activation you can login at any time."))])):V("",!0)]),_:1}),b("div",at,[b("div",it,A(t.value?"Don't have an account?":"Already have an account?"),1),u[8]||(u[8]=b("div",{class:"flex-1"},null,-1)),b("a",{class:"cursor-pointer underline",onClick:u[3]||(u[3]=p=>t.value=!t.value)},A(t.value?"Register":"Login"),1)])],32))])}}},ct=ge(lt,[["__scopeId","data-v-b29e24ad"]]),ut="/smooth.svg",dt={class:"flex flex-col items-start w-full h-full justify-stretch relative"},ft=["src"],pt={key:1,class:"i-la-user"},ht={key:0,class:"p-2 op-50 flex gap-2 items-center",href:"/"},gt={class:"p-2 text-2xl"},mt={__name:"Layout",setup(e){const{frontmatter:n}=ye(),s=k(!1),{user:t}=le(),o=k();return Be(o,()=>{s.value=!1}),(i,a)=>{var d;const f=ve("content");return E(),$("div",dt,[b("button",{class:"op-50 fixed top-4 right-4 z-100 text-2xl p-2 rounded-full bg-light-400",onClick:a[0]||(a[0]=h=>s.value=!s.value)},[(d=x(t))!=null&&d.avatar?(E(),$("img",{key:0,class:"rounded-full",src:`https://schooldb.chromatone.center/assets/${x(t).avatar}?width=40&height=40`},null,8,ft)):(E(),$("div",pt))]),D(ae,{name:"fade"},{default:re(()=>[K(D(ct,{class:"fixed top-4 right-4 z-90",ref_key:"authModal",ref:o},null,512),[[we,s.value]])]),_:1}),x(n).home?V("",!0):(E(),$("a",ht,a[1]||(a[1]=[b("img",{class:"w-6",src:ut},null,-1),b("div",{class:"text-lg"},"Creative Multimedia School",-1)]))),b("h1",gt,A(x(n).title),1),D(f,{class:"prose max-w-unset flex-1"})])}}},Et={Layout:mt,enhanceApp({app:e,router:n,siteData:s}){}};export{ct as A,Ie as F,_t as G,xt as K,Et as R,bt as U,St as _,le as a,kt as b,Tt as c,$e as l,vt as p,At as u,wt as v};