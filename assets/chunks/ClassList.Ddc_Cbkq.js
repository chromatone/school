import{j as b,z as m,o as f,c as d,d as u,F as h,i as _,t as p,a as j}from"./framework.C_cK_4ES.js";import{f as w}from"./format.KNZA0c4Q.js";var c="/",k=(t,e)=>(t.endsWith(c)&&(t=t.slice(0,-1)),e.startsWith(c)||(e=c+e),t+e),S=(t,e,s)=>{let i=t.pathname===c?e:k(t.pathname,e),r=new globalThis.URL(i,t);if(s)for(let[a,o]of Object.entries(C(s)))if(o&&typeof o=="object"&&!Array.isArray(o))for(let[n,l]of Object.entries(o))r.searchParams.set(`${a}[${n}]`,String(l));else r.searchParams.set(a,o);return r};function v(t){return typeof t!="object"||!t?!1:"headers"in t&&"ok"in t&&"json"in t&&typeof t.json=="function"&&"text"in t&&typeof t.json=="function"}async function T(t){var e;if(!(typeof t!="object"||!t)){if(v(t)){let s=(e=t.headers.get("Content-Type"))==null?void 0:e.toLowerCase();if(s!=null&&s.startsWith("application/json")||s!=null&&s.startsWith("application/health+json")){let i=await t.json();if(!t.ok||"errors"in i)throw i;return"data"in i?i.data:i}if(s!=null&&s.startsWith("text/html")||s!=null&&s.startsWith("text/plain")){let i=await t.text();if(!t.ok)throw i;return i}return t}if("errors"in t)throw t;return"data"in t?t.data:t}}var x=async(t,e,s=globalThis.fetch)=>(e.headers=typeof e.headers=="object"&&!Array.isArray(e.headers)?e.headers:{},s(t,e).then(i=>T(i).catch(r=>{let a={errors:r&&typeof r=="object"&&"errors"in r?r.errors:r,response:i};return r&&typeof r=="object"&&"data"in r&&(a.data=r.data),Promise.reject(a)}))),g={fetch:globalThis.fetch,WebSocket:globalThis.WebSocket,URL:globalThis.URL,logger:globalThis.console},O=(t,e={})=>{let s=e.globals?{...g,...e.globals}:g;return{globals:s,url:new s.URL(t),with(i){return{...this,...i(this)}}}};function R(t){return["directus_access","directus_activity","directus_collections","directus_comments","directus_fields","directus_files","directus_folders","directus_migrations","directus_permissions","directus_policies","directus_presets","directus_relations","directus_revisions","directus_roles","directus_sessions","directus_settings","directus_users","directus_webhooks","directus_dashboards","directus_panels","directus_notifications","directus_shares","directus_flows","directus_operations","directus_translations","directus_versions","directus_extensions"].includes(t)}var A=t=>{let e=(s,i=[])=>{if(typeof s=="object"){let r=[];for(let a in s){let o=s[a]??[];if(Array.isArray(o))for(let n of o)r.push(e(n,[...i,a]));else if(typeof o=="object")for(let n of Object.keys(o)){let l=o[n];for(let y of l)r.push(e(y,[...i,`${a}:${n}`]))}}return r.flatMap(a=>a)}return[...i,String(s)].join(".")};return t.flatMap(s=>e(s))},C=t=>{let e={};Array.isArray(t.fields)&&t.fields.length>0&&(e.fields=A(t.fields).join(",")),t.filter&&Object.keys(t.filter).length>0&&(e.filter=JSON.stringify(t.filter)),t.search&&(e.search=t.search),"sort"in t&&t.sort&&(e.sort=typeof t.sort=="string"?t.sort:t.sort.join(",")),typeof t.limit=="number"&&t.limit>=-1&&(e.limit=String(t.limit)),typeof t.offset=="number"&&t.offset>=0&&(e.offset=String(t.offset)),typeof t.page=="number"&&t.page>=1&&(e.page=String(t.page)),t.deep&&Object.keys(t.deep).length>0&&(e.deep=JSON.stringify(t.deep)),t.alias&&Object.keys(t.alias).length>0&&(e.alias=JSON.stringify(t.alias)),t.aggregate&&Object.keys(t.aggregate).length>0&&(e.aggregate=JSON.stringify(t.aggregate)),t.groupBy&&t.groupBy.length>0&&(e.groupBy=t.groupBy.join(","));for(let[s,i]of Object.entries(t))s in e||(typeof i=="string"||typeof i=="number"||typeof i=="boolean"?e[s]=String(i):e[s]=JSON.stringify(i));return e},B=(t,e)=>{if(t.length===0)throw new Error(e)},L=(t,e)=>{if(R(String(t)))throw new Error(e)},W=(t,e)=>()=>(B(String(t),"Collection cannot be empty"),L(t,"Cannot use readItems for core collections"),{path:`/items/${t}`,params:e??{},method:"GET"}),E={},$=(t={})=>e=>{let s={...E,...t};return{async request(i){let r=i();if(r.headers||(r.headers={}),"Content-Type"in r.headers?r.headers["Content-Type"]==="multipart/form-data"&&delete r.headers["Content-Type"]:r.headers["Content-Type"]="application/json","getToken"in this&&!("Authorization"in r.headers)){let l=await this.getToken();l&&(r.headers.Authorization=`Bearer ${l}`)}let a=S(e.url,r.path,r.params),o={method:r.method??"GET",headers:r.headers??{}};"credentials"in s&&(o.credentials=s.credentials),r.body&&(o.body=r.body),r.onRequest&&(o=await r.onRequest(o)),s.onRequest&&(o=await s.onRequest(o));let n=await x(a.toString(),o,e.globals.fetch);return"onResponse"in r&&(n=await r.onResponse(n,o)),"onResponse"in t&&(n=await t.onResponse(n,o)),n}}};const q=O("https://schooldb.chromatone.center/").with($()),J={class:"flex flex-col gap-2"},U={__name:"ClassList",setup(t){const e=b("");return m(async()=>{e.value=await q.request(W("classes"))}),(s,i)=>(f(),d(h,null,[i[0]||(i[0]=u("div",{class:"text-2xl"},"Classes ",-1)),u("div",J,[(f(!0),d(h,null,_(e.value,r=>(f(),d("div",{class:"p-2 text-xl",key:r},p(r.title)+" @ "+p(j(w)(r.date,"EE dd/MM/y hh:mm")),1))),128))])],64))}};export{U as default};
