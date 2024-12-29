import{u as S,o as ce,n as ue,r as T,i as de,w as Q,a as fe,g as be,b as _e,c as xe,s as pe,d as Se,e as he,_ as ke,f as O,h as $,j as x,k as D,t as N,l as Te,m as ee,v as ne,p as q,q as ge,x as re,T as me,y as Ae,z as Ee,A as Ce,B as Oe,C as $e}from"./framework.DStf2H8E.js";function je(e){return e?`/auth/login/${e}`:"/auth/login"}var z="/",Ne=(e,t)=>(e.endsWith(z)&&(e=e.slice(0,-1)),t.startsWith(z)||(t=z+t),e+t),G=(e,t,r)=>{let n=e.pathname===z?t:Ne(e.pathname,t),s=new globalThis.URL(n,e);if(r)for(let[i,a]of Object.entries(Be(r)))if(a&&typeof a=="object"&&!Array.isArray(a))for(let[p,f]of Object.entries(a))s.searchParams.set(`${i}[${p}]`,String(f));else s.searchParams.set(i,a);return s};function Me(e){return typeof e!="object"||!e?!1:"headers"in e&&"ok"in e&&"json"in e&&typeof e.json=="function"&&"text"in e&&typeof e.json=="function"}async function Fe(e){var t;if(!(typeof e!="object"||!e)){if(Me(e)){let r=(t=e.headers.get("Content-Type"))==null?void 0:t.toLowerCase();if(r!=null&&r.startsWith("application/json")||r!=null&&r.startsWith("application/health+json")){let n=await e.json();if(!e.ok||"errors"in n)throw n;return"data"in n?n.data:n}if(r!=null&&r.startsWith("text/html")||r!=null&&r.startsWith("text/plain")){let n=await e.text();if(!e.ok)throw n;return n}return e}if("errors"in e)throw e;return"data"in e?e.data:e}}var K=async(e,t,r=globalThis.fetch)=>(t.headers=typeof t.headers=="object"&&!Array.isArray(t.headers)?t.headers:{},r(e,t).then(n=>Fe(n).catch(s=>{let i={errors:s&&typeof s=="object"&&"errors"in s?s.errors:s,response:n};return s&&typeof s=="object"&&"data"in s&&(i.data=s.data),Promise.reject(i)}))),Re=()=>{let e=null;return{get:async()=>e,set:async t=>{e=t}}},Le={msRefreshBeforeExpires:3e4,autoRefresh:!0},De=2**31-1,Ie=(e="cookie",t={})=>r=>{let n={...Le,...t},s=null,i=null,a=n.storage??Re(),p=async()=>a.set({access_token:null,refresh_token:null,expires:null,expires_at:null}),f=async()=>{try{await s}finally{s=null}},h=async()=>{let c=await a.get();return s||!(c!=null&&c.expires_at)||c.expires_at<new Date().getTime()+n.msRefreshBeforeExpires&&m().catch(g=>{}),f()},d=async c=>{let g=c.expires??0;c.expires_at=new Date().getTime()+g,await a.set(c),n.autoRefresh&&g>n.msRefreshBeforeExpires&&g<De&&(i&&clearTimeout(i),i=setTimeout(()=>{i=null,m().catch(v=>{})},g-n.msRefreshBeforeExpires))},m=async()=>(s=(async()=>{let c=await a.get();await p();let g={method:"POST",headers:{"Content-Type":"application/json"}};"credentials"in n&&(g.credentials=n.credentials);let v={mode:e};e==="json"&&(c!=null&&c.refresh_token)&&(v.refresh_token=c.refresh_token),g.body=JSON.stringify(v);let u=G(r.url,"/auth/refresh");return K(u.toString(),g,r.globals.fetch).then(o=>d(o).then(()=>o))})(),s);return{refresh:m,async login(c,g,v={}){await p();let u={email:c,password:g};"otp"in v&&(u.otp=v.otp),u.mode=v.mode??e;let o=je(v.provider),l=G(r.url,o),y={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)};"credentials"in n&&(y.credentials=n.credentials);let w=await K(l.toString(),y,r.globals.fetch);return await d(w),w},async logout(){let c=await a.get(),g={method:"POST",headers:{"Content-Type":"application/json"}};"credentials"in n&&(g.credentials=n.credentials);let v={mode:e};e==="json"&&(c!=null&&c.refresh_token)&&(v.refresh_token=c.refresh_token),g.body=JSON.stringify(v);let u=G(r.url,"/auth/logout");await K(u.toString(),g,r.globals.fetch),this.stopRefreshing(),await p()},stopRefreshing(){i&&clearTimeout(i)},async getToken(){var c;return await h().catch(()=>{}),((c=await a.get())==null?void 0:c.access_token)??null},async setToken(c){return a.set({access_token:c,refresh_token:null,expires:null,expires_at:null})}}},Ut=e=>t=>{let r=e??null;return{async getToken(){return r},async setToken(n){r=n}}},se={fetch:globalThis.fetch,WebSocket:globalThis.WebSocket,URL:globalThis.URL,logger:globalThis.console},Pe=(e,t={})=>{let r=t.globals?{...se,...t.globals}:se;return{globals:r,url:new r.URL(e),with(n){return{...this,...n(this)}}}};function oe(e){return JSON.stringify({...e,type:"auth"})}var Je=()=>JSON.stringify({type:"pong"});function*ae(){let e=1;for(;;)yield String(e),e++}var X=(e,t=1e3)=>new Promise((r,n)=>{let s=f=>{try{let h=JSON.parse(f.data);typeof h=="object"&&!Array.isArray(h)&&h!==null?(a(),r(h)):(a(),i())}catch{a(),r(f)}},i=()=>n(),a=()=>{clearTimeout(p),e.removeEventListener("message",s),e.removeEventListener("error",i),e.removeEventListener("close",i)};e.addEventListener("message",s),e.addEventListener("error",i),e.addEventListener("close",i);let p=setTimeout(()=>{a(),r(void 0)},t)}),We={authMode:"handshake",heartbeat:!0,debug:!1,reconnect:{delay:1e3,retries:10}};function Bt(e={}){return t=>{e={...We,...e};let r=ae(),n={code:"closed"},s={attempts:0,active:!1},i=!1,a=new Set,p=o=>"getToken"in o,f=(o,...l)=>e.debug&&t.globals.logger[o]("[Directus SDK]",...l),h=async(o,l)=>{let y=new t.globals.URL(o);if(e.authMode==="strict"&&p(l)){let w=await l.getToken();w&&y.searchParams.set("access_token",w)}return y.toString()},d=async o=>{if("url"in e)return await h(e.url,o);if(["ws:","wss:"].includes(t.url.protocol))return await h(t.url,o);let l=new t.globals.URL(t.url.toString());return l.protocol=t.url.protocol==="https:"?"wss:":"ws:",l.pathname="/websocket",await h(l,o)},m=o=>{let l=new Promise((y,w)=>{if(!e.reconnect||i)return w();if(f("info",`reconnect #${s.attempts} `+(s.attempts>=e.reconnect.retries?"maximum retries reached":`trying again in ${Math.max(100,e.reconnect.delay)}ms`)),s.active)return s.active;if(s.attempts>=e.reconnect.retries)return s.attempts=-1,w();setTimeout(()=>o.connect().then(C=>(a.forEach(_=>{o.sendMessage(_)}),C)).then(y).catch(w),Math.max(100,e.reconnect.delay))});s.attempts+=1,s.active=l.catch(()=>{}).finally(()=>{s.active=!1})},c={open:new Set([]),error:new Set([]),close:new Set([]),message:new Set([])};function g(o){return"type"in o&&"status"in o&&"error"in o&&"code"in o.error&&"message"in o.error&&o.type==="auth"&&o.status==="error"}async function v(o,l){if(n.code==="open"){if(o.error.code==="TOKEN_EXPIRED"&&(f("warn","Authentication token expired!"),p(l))){let y=await l.getToken();if(!y)throw Error("No token for re-authenticating the websocket");n.connection.send(oe({access_token:y}))}if(o.error.code==="AUTH_TIMEOUT")return n.firstMessage&&e.authMode==="public"?(f("warn",'Authentication failed! Currently the "authMode" is "public" try using "handshake" instead'),e.reconnect=!1):f("warn","Authentication timed out!"),n.connection.close();if(o.error.code==="AUTH_FAILED"){if(n.firstMessage&&e.authMode==="public")return f("warn",'Authentication failed! Currently the "authMode" is "public" try using "handshake" instead'),e.reconnect=!1,n.connection.close();f("warn","Authentication failed!")}}}let u=async o=>{for(;n.code==="open";){let l=await X(n.connection).catch(()=>{});if(l){if(g(l)){await v(l,o),n.firstMessage=!1;continue}if(e.heartbeat&&l.type==="ping"){n.connection.send(Je()),n.firstMessage=!1;continue}c.message.forEach(y=>{n.code==="open"&&y.call(n.connection,l)}),n.firstMessage=!1}}};return{async connect(){if(i=!1,n.code==="connecting")return await n.connection;if(n.code!=="closed")throw new Error(`Cannot connect when state is "${n.code}"`);let o=this,l=await d(o);f("info",`Connecting to ${l}...`);let y=new Promise((w,C)=>{let _=!1,A=new t.globals.WebSocket(l);A.addEventListener("open",async M=>{if(f("info","Connection open."),n={code:"open",connection:A,firstMessage:!0},s.attempts=0,s.active=!1,u(o),e.authMode==="handshake"&&p(o)){let E=await o.getToken();if(!E)throw Error("No token for authenticating the websocket. Make sure to provide one or call the login() function beforehand.");A.send(oe({access_token:E}));let R=await X(A);if(R&&"type"in R&&"status"in R&&R.type==="auth"&&R.status==="ok")f("info","Authentication successful!");else return C("Authentication failed while opening websocket connection")}c.open.forEach(E=>E.call(A,M)),_=!0,w(A)}),A.addEventListener("error",M=>{f("warn","Connection errored."),c.error.forEach(E=>E.call(A,M)),A.close(),n={code:"error"},_||C(M)}),A.addEventListener("close",M=>{f("info","Connection closed."),c.close.forEach(E=>E.call(A,M)),r=ae(),n={code:"closed"},m(this),_||C(M)})});return n={code:"connecting",connection:y},y},disconnect(){i=!0,n.code==="open"&&n.connection.close()},onWebSocket(o,l){if(o==="message"){let y=function(w){if(typeof w.data!="string")return l.call(this,w);try{return l.call(this,JSON.parse(w.data))}catch{return l.call(this,w)}};return c[o].add(y),()=>c[o].delete(y)}return c[o].add(l),()=>c[o].delete(l)},sendMessage(o){if(n.code!=="open")throw new Error('Cannot send messages without an open connection. Make sure you are calling "await client.connect()".');if(typeof o=="string")return n.connection.send(o);"uid"in o||(o.uid=r.next().value),n.connection.send(JSON.stringify(o))},async subscribe(o,l={}){"uid"in l||(l.uid=r.next().value),a.add({...l,collection:o,type:"subscribe"}),n.code!=="open"&&(f("info","No connection available for subscribing!"),await this.connect()),this.sendMessage({...l,collection:o,type:"subscribe"});let y=!0;async function*w(){for(;y&&n.code==="open";){let _=await X(n.connection).catch(()=>{});if(_){if("type"in _&&"status"in _&&_.type==="subscribe"&&_.status==="error")throw _;"type"in _&&"uid"in _&&_.type==="subscription"&&_.uid===l.uid&&(yield _)}}e.reconnect&&s.active&&(await s.active,n.code==="open"&&(n.connection.send(JSON.stringify({...l,collection:o,type:"subscribe"})),yield*w()))}let C=()=>{a.delete({...l,collection:o,type:"subscribe"}),this.sendMessage({uid:l.uid,type:"unsubscribe"}),y=!1};return{subscription:w(),unsubscribe:C}}}}}function ye(e){return["directus_access","directus_activity","directus_collections","directus_comments","directus_fields","directus_files","directus_folders","directus_migrations","directus_permissions","directus_policies","directus_presets","directus_relations","directus_revisions","directus_roles","directus_sessions","directus_settings","directus_users","directus_webhooks","directus_dashboards","directus_panels","directus_notifications","directus_shares","directus_flows","directus_operations","directus_translations","directus_versions","directus_extensions"].includes(e)}var Vt=(e,t,r)=>()=>{let n=String(e);if(ye(n))throw new Error("Cannot use createItem for core collections");return{path:`/items/${n}`,params:r??{},body:JSON.stringify(t),method:"POST"}},Ue=e=>{let t=(r,n=[])=>{if(typeof r=="object"){let s=[];for(let i in r){let a=r[i]??[];if(Array.isArray(a))for(let p of a)s.push(t(p,[...n,i]));else if(typeof a=="object")for(let p of Object.keys(a)){let f=a[p];for(let h of f)s.push(t(h,[...n,`${i}:${p}`]))}}return s.flatMap(i=>i)}return[...n,String(r)].join(".")};return e.flatMap(r=>t(r))},Be=e=>{let t={};Array.isArray(e.fields)&&e.fields.length>0&&(t.fields=Ue(e.fields).join(",")),e.filter&&Object.keys(e.filter).length>0&&(t.filter=JSON.stringify(e.filter)),e.search&&(t.search=e.search),"sort"in e&&e.sort&&(t.sort=typeof e.sort=="string"?e.sort:e.sort.join(",")),typeof e.limit=="number"&&e.limit>=-1&&(t.limit=String(e.limit)),typeof e.offset=="number"&&e.offset>=0&&(t.offset=String(e.offset)),typeof e.page=="number"&&e.page>=1&&(t.page=String(e.page)),e.deep&&Object.keys(e.deep).length>0&&(t.deep=JSON.stringify(e.deep)),e.alias&&Object.keys(e.alias).length>0&&(t.alias=JSON.stringify(e.alias)),e.aggregate&&Object.keys(e.aggregate).length>0&&(t.aggregate=JSON.stringify(e.aggregate)),e.groupBy&&e.groupBy.length>0&&(t.groupBy=e.groupBy.join(","));for(let[r,n]of Object.entries(e))r in t||(typeof n=="string"||typeof n=="number"||typeof n=="boolean"?t[r]=String(n):t[r]=JSON.stringify(n));return t},I=(e,t)=>{if(e.length===0)throw new Error(t)},te=(e,t)=>{if(ye(String(e)))throw new Error(t)},qt=(e,t)=>()=>(I(String(e),"Collection cannot be empty"),te(e,"Cannot use readItems for core collections"),{path:`/items/${e}`,params:t??{},method:"GET"}),zt=(e,t,r)=>()=>(I(String(e),"Collection cannot be empty"),te(e,"Cannot use readItem for core collections"),I(String(t),"Key cannot be empty"),{path:`/items/${e}/${t}`,params:r??{},method:"GET"}),Ve=e=>()=>({path:"/users/me",params:e??{},method:"GET"}),Gt=(e,t,r,n)=>()=>(I(String(t),"Key cannot be empty"),I(String(e),"Collection cannot be empty"),te(e,"Cannot use updateItem for core collections"),{path:`/items/${e}/${t}`,params:n??{},body:JSON.stringify(r),method:"PATCH"}),Kt=(e,t,r)=>()=>(I(e,"Key cannot be empty"),{path:`/users/${e}`,params:r??{},body:JSON.stringify(t),method:"PATCH"}),qe=(e,t,r={})=>()=>({path:"/users/register",method:"POST",body:JSON.stringify({email:e,password:t,...r})}),ze={},Ge=(e={})=>t=>{let r={...ze,...e};return{async request(n){let s=n();if(s.headers||(s.headers={}),"Content-Type"in s.headers?s.headers["Content-Type"]==="multipart/form-data"&&delete s.headers["Content-Type"]:s.headers["Content-Type"]="application/json","getToken"in this&&!("Authorization"in s.headers)){let f=await this.getToken();f&&(s.headers.Authorization=`Bearer ${f}`)}let i=G(t.url,s.path,s.params),a={method:s.method??"GET",headers:s.headers??{}};"credentials"in r&&(a.credentials=r.credentials),s.body&&(a.body=s.body),s.onRequest&&(a=await s.onRequest(a)),r.onRequest&&(a=await r.onRequest(a));let p=await K(i.toString(),a,t.globals.fetch);return"onResponse"in s&&(p=await s.onResponse(p,a)),"onResponse"in e&&(p=await e.onResponse(p,a)),p}}};function H(e){return be()?(_e(e),!0):!1}function F(e){return typeof e=="function"?e():S(e)}const Y=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Ke=Object.prototype.toString,He=e=>Ke.call(e)==="[object Object]",J=()=>{},Ye=Qe();function Qe(){var e,t;return Y&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((t=window==null?void 0:window.navigator)==null?void 0:t.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function Xe(e,t){function r(...n){return new Promise((s,i)=>{Promise.resolve(e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})).then(s).catch(i)})}return r}const ve=e=>e();function Ze(e=ve){const t=T(!0);function r(){t.value=!1}function n(){t.value=!0}const s=(...i)=>{t.value&&e(...i)};return{isActive:fe(t),pause:r,resume:n,eventFilter:s}}function et(e){return xe()}function tt(e,t,r={}){const{eventFilter:n=ve,...s}=r;return Q(e,Xe(n,t),s)}function nt(e,t,r={}){const{eventFilter:n,...s}=r,{eventFilter:i,pause:a,resume:p,isActive:f}=Ze(n);return{stop:tt(e,t,{...s,eventFilter:i}),pause:a,resume:p,isActive:f}}function rt(e,t=!0,r){et()?ce(e,r):t?e():ue(e)}function st(e,t=1e3,r={}){const{immediate:n=!0,immediateCallback:s=!1}=r;let i=null;const a=T(!1);function p(){i&&(clearInterval(i),i=null)}function f(){a.value=!1,p()}function h(){const d=F(t);d<=0||(a.value=!0,s&&e(),p(),a.value&&(i=setInterval(e,d)))}if(n&&Y&&h(),de(t)||typeof t=="function"){const d=Q(t,()=>{a.value&&Y&&h()});H(d)}return H(f),{isActive:a,pause:f,resume:h}}function Ht(e,t,r){let n;de(r)?n={evaluating:r}:n={};const{lazy:s=!1,evaluating:i=void 0,shallow:a=!0,onError:p=J}=n,f=T(!s),h=a?pe(t):T(t);let d=0;return Se(async m=>{if(!f.value)return;d++;const c=d;let g=!1;i&&Promise.resolve().then(()=>{i.value=!0});try{const v=await e(u=>{m(()=>{i&&(i.value=!1),g||u()})});c===d&&(h.value=v)}catch(v){p(v)}finally{i&&c===d&&(i.value=!1),g=!0}}),s?he(()=>(f.value=!0,h.value)):h}const U=Y?window:void 0;function P(e){var t;const r=F(e);return(t=r==null?void 0:r.$el)!=null?t:r}function W(...e){let t,r,n,s;if(typeof e[0]=="string"||Array.isArray(e[0])?([r,n,s]=e,t=U):[t,r,n,s]=e,!t)return J;Array.isArray(r)||(r=[r]),Array.isArray(n)||(n=[n]);const i=[],a=()=>{i.forEach(d=>d()),i.length=0},p=(d,m,c,g)=>(d.addEventListener(m,c,g),()=>d.removeEventListener(m,c,g)),f=Q(()=>[P(t),F(s)],([d,m])=>{if(a(),!d)return;const c=He(m)?{...m}:m;i.push(...r.flatMap(g=>n.map(v=>p(d,g,v,c))))},{immediate:!0,flush:"post"}),h=()=>{f(),a()};return H(h),h}let ie=!1;function ot(e,t,r={}){const{window:n=U,ignore:s=[],capture:i=!0,detectIframe:a=!1}=r;if(!n)return J;Ye&&!ie&&(ie=!0,Array.from(n.document.body.children).forEach(u=>u.addEventListener("click",J)),n.document.documentElement.addEventListener("click",J));let p=!0;const f=u=>F(s).some(o=>{if(typeof o=="string")return Array.from(n.document.querySelectorAll(o)).some(l=>l===u.target||u.composedPath().includes(l));{const l=P(o);return l&&(u.target===l||u.composedPath().includes(l))}});function h(u){const o=F(u);return o&&o.$.subTree.shapeFlag===16}function d(u,o){const l=F(u),y=l.$.subTree&&l.$.subTree.children;return y==null||!Array.isArray(y)?!1:y.some(w=>w.el===o.target||o.composedPath().includes(w.el))}const m=u=>{const o=P(e);if(u.target!=null&&!(!(o instanceof Element)&&h(e)&&d(e,u))&&!(!o||o===u.target||u.composedPath().includes(o))){if(u.detail===0&&(p=!f(u)),!p){p=!0;return}t(u)}};let c=!1;const g=[W(n,"click",u=>{c||(c=!0,setTimeout(()=>{c=!1},0),m(u))},{passive:!0,capture:i}),W(n,"pointerdown",u=>{const o=P(e);p=!f(u)&&!!(o&&!u.composedPath().includes(o))},{passive:!0}),a&&W(n,"blur",u=>{setTimeout(()=>{var o;const l=P(e);((o=n.document.activeElement)==null?void 0:o.tagName)==="IFRAME"&&!(l!=null&&l.contains(n.document.activeElement))&&t(u)},0)})].filter(Boolean);return()=>g.forEach(u=>u())}function at(e,t={}){const{immediate:r=!0,fpsLimit:n=void 0,window:s=U}=t,i=T(!1),a=n?1e3/n:null;let p=0,f=null;function h(c){if(!i.value||!s)return;p||(p=c);const g=c-p;if(a&&g<a){f=s.requestAnimationFrame(h);return}p=c,e({delta:g,timestamp:c}),f=s.requestAnimationFrame(h)}function d(){!i.value&&s&&(i.value=!0,p=0,f=s.requestAnimationFrame(h))}function m(){i.value=!1,f!=null&&s&&(s.cancelAnimationFrame(f),f=null)}return r&&d(),H(m),{isActive:fe(i),pause:m,resume:d}}const B=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V="__vueuse_ssr_handlers__",it=lt();function lt(){return V in B||(B[V]=B[V]||{}),B[V]}function ct(e,t){return it[e]||t}function ut(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const dt={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},le="vueuse-storage";function Yt(e,t,r,n={}){var s;const{flush:i="pre",deep:a=!0,listenToStorageChanges:p=!0,writeDefaults:f=!0,mergeDefaults:h=!1,shallow:d,window:m=U,eventFilter:c,onError:g=b=>{console.error(b)},initOnMounted:v}=n,u=(d?pe:T)(typeof t=="function"?t():t);if(!r)try{r=ct("getDefaultStorage",()=>{var b;return(b=U)==null?void 0:b.localStorage})()}catch(b){g(b)}if(!r)return u;const o=F(t),l=ut(o),y=(s=n.serializer)!=null?s:dt[l],{pause:w,resume:C}=nt(u,()=>A(u.value),{flush:i,deep:a,eventFilter:c});m&&p&&rt(()=>{r instanceof Storage?W(m,"storage",E):W(m,le,R),v&&E()}),v||E();function _(b,k){if(m){const j={key:e,oldValue:b,newValue:k,storageArea:r};m.dispatchEvent(r instanceof Storage?new StorageEvent("storage",j):new CustomEvent(le,{detail:j}))}}function A(b){try{const k=r.getItem(e);if(b==null)_(k,null),r.removeItem(e);else{const j=y.write(b);k!==j&&(r.setItem(e,j),_(k,j))}}catch(k){g(k)}}function M(b){const k=b?b.newValue:r.getItem(e);if(k==null)return f&&o!=null&&r.setItem(e,y.write(o)),o;if(!b&&h){const j=y.read(k);return typeof h=="function"?h(j,o):l==="object"&&!Array.isArray(j)?{...o,...j}:j}else return typeof k!="string"?k:y.read(k)}function E(b){if(!(b&&b.storageArea!==r)){if(b&&b.key==null){u.value=o;return}if(!(b&&b.key!==e)){w();try{(b==null?void 0:b.newValue)!==y.write(u.value)&&(u.value=M(b))}catch(k){g(k)}finally{b?ue(C):C()}}}}function R(b){E(b.detail)}return u}function ft(e={}){const{controls:t=!1,interval:r="requestAnimationFrame"}=e,n=T(new Date),s=()=>n.value=new Date,i=r==="requestAnimationFrame"?at(s,{immediate:!0}):st(s,r,{immediate:!0});return t?{now:n,...i}:n}const pt=[{max:6e4,value:1e3,name:"second"},{max:276e4,value:6e4,name:"minute"},{max:72e6,value:36e5,name:"hour"},{max:5184e5,value:864e5,name:"day"},{max:24192e5,value:6048e5,name:"week"},{max:28512e6,value:2592e6,name:"month"},{max:Number.POSITIVE_INFINITY,value:31536e6,name:"year"}],ht={justNow:"just now",past:e=>e.match(/\d/)?`${e} ago`:e,future:e=>e.match(/\d/)?`in ${e}`:e,month:(e,t)=>e===1?t?"last month":"next month":`${e} month${e>1?"s":""}`,year:(e,t)=>e===1?t?"last year":"next year":`${e} year${e>1?"s":""}`,day:(e,t)=>e===1?t?"yesterday":"tomorrow":`${e} day${e>1?"s":""}`,week:(e,t)=>e===1?t?"last week":"next week":`${e} week${e>1?"s":""}`,hour:e=>`${e} hour${e>1?"s":""}`,minute:e=>`${e} minute${e>1?"s":""}`,second:e=>`${e} second${e>1?"s":""}`,invalid:""};function gt(e){return e.toISOString().slice(0,10)}function Qt(e,t={}){const{controls:r=!1,updateInterval:n=3e4}=t,{now:s,...i}=ft({interval:n,controls:!0}),a=he(()=>mt(new Date(F(e)),t,F(s)));return r?{timeAgo:a,...i}:a}function mt(e,t={},r=Date.now()){var n;const{max:s,messages:i=ht,fullDateFormatter:a=gt,units:p=pt,showSecond:f=!1,rounding:h="round"}=t,d=typeof h=="number"?o=>+o.toFixed(h):Math[h],m=+r-+e,c=Math.abs(m);function g(o,l){return d(Math.abs(o)/l.value)}function v(o,l){const y=g(o,l),w=o>0,C=u(l.name,y,w);return u(w?"past":"future",C,w)}function u(o,l,y){const w=i[o];return typeof w=="function"?w(l,y):w.replace("{0}",l.toString())}if(c<6e4&&!f)return i.justNow;if(typeof s=="number"&&c>s)return a(new Date(e));if(typeof s=="string"){const o=(n=p.find(l=>l.name===s))==null?void 0:n.max;if(o&&c>o)return a(new Date(e))}for(const[o,l]of p.entries()){if(g(m,l)<=0&&p[o-1])return v(m,p[o-1]);if(c<l.max)return v(m,l)}return i.invalid}const Z=T(null),L=Pe("https://schooldb.chromatone.center/").with(Ie("cookie",{credentials:"include",autoRefresh:!0})).with(Ge({credentials:"include"}));function we(){ce(async()=>{L.refresh(),await L.getToken()&&r()});const e=T(!1);async function t(s,i,a){s?(await L.login(i,a),r()):(await L.request(qe(i,a)),e.value=!0)}async function r(){Z.value=await L.request(Ve())}async function n(){await L.logout(),Z.value=null}return{user:Z,userDB:L,auth:t,logout:n,registered:e}}const yt={class:"bg-light-300 rounded-2xl shadow-xl overflow-hidden max-w-30ch mx-2"},vt={key:0,class:"p-4 flex flex-col gap-2"},wt={class:"flex gap-2 items-center p-2"},bt=["src"],_t={class:"flex flex-col"},xt={class:"text-2xl"},St={class:"text-xs op-50"},kt={class:"flex flex-wrap gap-2"},Tt={class:"text-2xl p-4"},At={class:"p-2 border-2 bg-orange-400 rounded-xl mx-2 shadow-lg hover-brightness-120",type:"submit"},Et={key:0,class:"bg-orange-200 mx-2 rounded-lg p-2"},Ct={class:"flex gap-1 bg-light-900 p-3"},Ot={class:"op-50"},$t={__name:"AuthForm",setup(e){const t=T(""),r=T(""),n=T(!0),{user:s,userDB:i,auth:a,logout:p,registered:f}=we();return Q(f,h=>n.value=h),(h,d)=>{var m,c,g,v;return O(),$("div",yt,[S(s)?(O(),$("div",vt,[x("div",wt,[(m=S(s))!=null&&m.avatar?(O(),$("img",{key:0,class:"rounded-full",src:`https://schooldb.chromatone.center/assets/${S(s).avatar}?width=50&height=50`},null,8,bt)):D("",!0),x("div",_t,[x("div",xt,N((c=S(s))==null?void 0:c.first_name)+" "+N((g=S(s))==null?void 0:g.last_name),1),x("div",St,N((v=S(s))==null?void 0:v.location),1)])]),x("div",kt,[d[5]||(d[5]=x("a",{class:"no-underline p-2 bg-light-500 rounded-lg hover-bg-light-100",href:"/student"},"My page",-1)),x("button",{class:"p-2 bg-light-500 rounded-lg hover-bg-light-100",onClick:d[0]||(d[0]=u=>S(p)())},"Logout")])])):(O(),$("form",{key:1,class:"flex flex-col gap-2",onSubmit:d[4]||(d[4]=Te(u=>S(a)(n.value,t.value,r.value),["prevent","stop"]))},[x("div",Tt,N(n.value?"Sign In":"Sign Up"),1),d[9]||(d[9]=x("label",{class:"px-2",for:"email"},"Email",-1)),ee(x("input",{class:"mx-2",id:"email",type:"email","onUpdate:modelValue":d[1]||(d[1]=u=>t.value=u),placeholder:"Your email"},null,512),[[ne,t.value]]),d[10]||(d[10]=x("label",{class:"px-2",for:"password"},"Password",-1)),ee(x("input",{class:"mx-2",id:"password",type:"password","onUpdate:modelValue":d[2]||(d[2]=u=>r.value=u),placeholder:"Your password"},null,512),[[ne,r.value]]),x("button",At,N(n.value?"LOGIN":"REGISTER"),1),q(me,{name:"fade"},{default:ge(()=>[S(f)?(O(),$("div",Et,[d[6]||(d[6]=re("Account successfully registered. Check your email ")),x("b",null,N(t.value),1),d[7]||(d[7]=re(" for activation link. After activation you can login at any time."))])):D("",!0)]),_:1}),x("div",Ct,[x("div",Ot,N(n.value?"Don't have an account?":"Already have an account?"),1),d[8]||(d[8]=x("div",{class:"flex-1"},null,-1)),x("a",{class:"cursor-pointer underline",onClick:d[3]||(d[3]=u=>n.value=!n.value)},N(n.value?"Register":"Login"),1)])],32))])}}},jt=ke($t,[["__scopeId","data-v-b29e24ad"]]),Nt="/smooth.svg",Mt="/photo.jpeg",Ft={class:"flex flex-wrap items-stretch w-full h-full justify-stretch relative"},Rt=["src"],Lt={key:1,class:"i-la-user"},Dt={key:0,class:"text-xl font-bold"},It={key:1,class:"text-sm op-80"},Pt={key:1,class:"w-full rounded-xl m-2",src:Mt,style:{flex:"1 0 300px"}},Jt={__name:"Layout",setup(e){const{frontmatter:t}=Ae(),r=T(!1),{user:n}=we(),s=T();return ot(s,()=>{r.value=!1}),(i,a)=>{var f,h,d,m,c,g,v;const p=Ee("content");return O(),$("div",Ft,[x("button",{class:"op-50 fixed top-4 right-4 z-100 text-2xl p-2 rounded-full bg-light-400",onClick:a[0]||(a[0]=u=>r.value=!r.value)},[(f=S(n))!=null&&f.avatar?(O(),$("img",{key:0,class:"rounded-full",src:`https://schooldb.chromatone.center/assets/${S(n).avatar}?width=40&height=40`},null,8,Rt)):(O(),$("div",Lt))]),q(me,{name:"fade"},{default:ge(()=>[ee(q(jt,{class:"fixed top-4 right-4 z-90",ref_key:"authModal",ref:s},null,512),[[Ce,r.value]])]),_:1}),a[2]||(a[2]=Oe('<div class="flex-1 p-4 bg-orange m-2 rounded-xl flex flex-col gap-1 max-w-50ch"><a class="flex gap-2 items-center" href="https://chromatone.center/" target="_blank"><img class="w-6 h-6" src="'+Nt+'"><div class="font-bold">Chromatone</div></a><div class="flex-1 min-h-12"></div><a class="text-4xl" href="/">Creative <br>Multimedia<br> School ​</a><div class="op-80 text-sm">Place Coworking<br> <div class="op-80">Phuket, Thailand</div></div></div>',1)),(h=S(t))!=null&&h.home?D("",!0):(O(),$("div",{key:0,class:"flex-1 p-4 flex items-start flex-col m-2 rounded-xl",style:$e({backgroundColor:(d=S(t))==null?void 0:d.color})},[a[1]||(a[1]=x("div",{class:"flex-1"},null,-1)),(m=S(t))!=null&&m.title?(O(),$("div",Dt,N(S(t).title),1)):D("",!0),(c=S(t))!=null&&c.description?(O(),$("div",It,N((g=S(t))==null?void 0:g.description),1)):D("",!0)],4)),(v=S(t))!=null&&v.home?(O(),$("img",Pt)):D("",!0),q(p,{class:"prose max-w-unset content",style:{flex:"1 1 100%"}})])}}},Xt={Layout:Jt,enhanceApp({app:e,router:t,siteData:r}){}};export{jt as A,Ge as F,qt as G,zt as K,Xt as R,Vt as U,Kt as _,we as a,Gt as b,Ht as c,Yt as d,Pe as l,Ut as p,Qt as u,Bt as v};