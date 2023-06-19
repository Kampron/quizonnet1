/**
 * @remix-run/router v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function A(){return A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},A.apply(this,arguments)}var T;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(T||(T={}));const Ue="popstate";function fr(e){e===void 0&&(e={});function t(n,a){let{pathname:l,search:s,hash:f}=n.location;return he("",{pathname:l,search:s,hash:f},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(n,a){return typeof a=="string"?a:K(a)}return Mt(t,r,null,e)}function S(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Rt(){return Math.random().toString(36).substr(2,8)}function Ne(e){return{usr:e.state,key:e.key}}function he(e,t,r,n){return r===void 0&&(r=null),A({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Z(t):t,{state:r,key:t&&t.key||n||Rt()})}function K(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Z(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function me(e){let t=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:window.location.href,r=typeof e=="string"?e:K(e);return S(t,"No window.location.(origin|href) available to create URL for href: "+r),new URL(r,t)}function Mt(e,t,r,n){n===void 0&&(n={});let{window:a=document.defaultView,v5Compat:l=!1}=n,s=a.history,f=T.Pop,u=null;function m(){f=T.Pop,u&&u({action:f,location:i.location})}function p(y,P){f=T.Push;let E=he(i.location,y,P);r&&r(E,y);let x=Ne(E),F=i.createHref(E);try{s.pushState(x,"",F)}catch{a.location.assign(F)}l&&u&&u({action:f,location:i.location})}function D(y,P){f=T.Replace;let E=he(i.location,y,P);r&&r(E,y);let x=Ne(E),F=i.createHref(E);s.replaceState(x,"",F),l&&u&&u({action:f,location:i.location})}let i={get action(){return f},get location(){return e(a,s)},listen(y){if(u)throw new Error("A history only accepts one active listener");return a.addEventListener(Ue,m),u=y,()=>{a.removeEventListener(Ue,m),u=null}},createHref(y){return t(a,y)},encodeLocation(y){let P=me(typeof y=="string"?y:K(y));return{pathname:P.pathname,search:P.search,hash:P.hash}},push:p,replace:D,go(y){return s.go(y)}};return i}var O;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(O||(O={}));function Pt(e){return e.index===!0}function Qe(e,t,r){return t===void 0&&(t=[]),r===void 0&&(r=new Set),e.map((n,a)=>{let l=[...t,a],s=typeof n.id=="string"?n.id:l.join("-");return S(n.index!==!0||!n.children,"Cannot specify children on an index route"),S(!r.has(s),'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),r.add(s),Pt(n)?A({},n,{id:s}):A({},n,{id:s,children:n.children?Qe(n.children,l,r):void 0})})}function we(e,t,r){r===void 0&&(r="/");let n=typeof t=="string"?Z(t):t,a=Bt(n.pathname||"/",r);if(a==null)return null;let l=Xe(e);Et(l);let s=null;for(let f=0;s==null&&f<l.length;++f)s=Ot(l[f],Nt(a));return s}function Xe(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let a=(l,s,f)=>{let u={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:s,route:l};u.relativePath.startsWith("/")&&(S(u.relativePath.startsWith(n),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(n.length));let m=fe([n,u.relativePath]),p=r.concat(u);l.children&&l.children.length>0&&(S(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+m+'".')),Xe(l.children,t,p,m)),!(l.path==null&&!l.index)&&t.push({path:m,score:Tt(m,l.index),routesMeta:p})};return e.forEach((l,s)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))a(l,s);else for(let u of Ze(l.path))a(l,s,u)}),t}function Ze(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,a=r.endsWith("?"),l=r.replace(/\?$/,"");if(n.length===0)return a?[l,""]:[l];let s=Ze(n.join("/")),f=[];return f.push(...s.map(u=>u===""?l:[l,u].join("/"))),a&&f.push(...s),f.map(u=>e.startsWith("/")&&u===""?"/":u)}function Et(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:jt(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const At=/^:\w+$/,St=3,xt=2,Lt=1,Ct=10,Ft=-2,Ie=e=>e==="*";function Tt(e,t){let r=e.split("/"),n=r.length;return r.some(Ie)&&(n+=Ft),t&&(n+=xt),r.filter(a=>!Ie(a)).reduce((a,l)=>a+(At.test(l)?St:l===""?Lt:Ct),n)}function jt(e,t){return e.length===t.length&&e.slice(0,-1).every((n,a)=>n===t[a])?e[e.length-1]-t[t.length-1]:0}function Ot(e,t){let{routesMeta:r}=e,n={},a="/",l=[];for(let s=0;s<r.length;++s){let f=r[s],u=s===r.length-1,m=a==="/"?t:t.slice(a.length)||"/",p=_t({path:f.relativePath,caseSensitive:f.caseSensitive,end:u},m);if(!p)return null;Object.assign(n,p.params);let D=f.route;l.push({params:n,pathname:fe([a,p.pathname]),pathnameBase:Kt(fe([a,p.pathnameBase])),route:D}),p.pathnameBase!=="/"&&(a=fe([a,p.pathnameBase]))}return l}function _t(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Ut(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let l=a[0],s=l.replace(/(.)\/+$/,"$1"),f=a.slice(1);return{params:n.reduce((m,p,D)=>{if(p==="*"){let i=f[D]||"";s=l.slice(0,l.length-i.length).replace(/(.)\/+$/,"$1")}return m[p]=It(f[D]||"",p),m},{}),pathname:l,pathnameBase:s,pattern:e}}function Ut(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),xe(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,f)=>(n.push(f),"/([^\\/]+)"));return e.endsWith("*")?(n.push("*"),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),n]}function Nt(e){try{return decodeURI(e)}catch(t){return xe(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function It(e,t){try{return decodeURIComponent(e)}catch(r){return xe(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+r+").")),e}}function Bt(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function xe(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function $t(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:a=""}=typeof e=="string"?Z(e):e;return{pathname:r?r.startsWith("/")?r:Wt(r,t):t,search:zt(n),hash:Vt(a)}}function Wt(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function Ae(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ke(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Ht(e,t,r,n){n===void 0&&(n=!1);let a;typeof e=="string"?a=Z(e):(a=A({},e),S(!a.pathname||!a.pathname.includes("?"),Ae("?","pathname","search",a)),S(!a.pathname||!a.pathname.includes("#"),Ae("#","pathname","hash",a)),S(!a.search||!a.search.includes("#"),Ae("#","search","hash",a)));let l=e===""||a.pathname==="",s=l?"/":a.pathname,f;if(n||s==null)f=r;else{let D=t.length-1;if(s.startsWith("..")){let i=s.split("/");for(;i[0]==="..";)i.shift(),D-=1;a.pathname=i.join("/")}f=D>=0?t[D]:"/"}let u=$t(a,f),m=s&&s!=="/"&&s.endsWith("/"),p=(l||s===".")&&r.endsWith("/");return!u.pathname.endsWith("/")&&(m||p)&&(u.pathname+="/"),u}const fe=e=>e.join("/").replace(/\/\/+/g,"/"),Kt=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),zt=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Vt=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Be extends Error{}class Yt{constructor(t){this.pendingKeys=new Set,this.subscriber=void 0,S(t&&typeof t=="object"&&!Array.isArray(t),"defer() only accepts plain objects");let r;this.abortPromise=new Promise((a,l)=>r=l),this.controller=new AbortController;let n=()=>r(new Be("Deferred data aborted"));this.unlistenAbortSignal=()=>this.controller.signal.removeEventListener("abort",n),this.controller.signal.addEventListener("abort",n),this.data=Object.entries(t).reduce((a,l)=>{let[s,f]=l;return Object.assign(a,{[s]:this.trackPromise(s,f)})},{})}trackPromise(t,r){if(!(r instanceof Promise))return r;this.pendingKeys.add(t);let n=Promise.race([r,this.abortPromise]).then(a=>this.onSettle(n,t,null,a),a=>this.onSettle(n,t,a));return n.catch(()=>{}),Object.defineProperty(n,"_tracked",{get:()=>!0}),n}onSettle(t,r,n,a){if(this.controller.signal.aborted&&n instanceof Be)return this.unlistenAbortSignal(),Object.defineProperty(t,"_error",{get:()=>n}),Promise.reject(n);this.pendingKeys.delete(r),this.done&&this.unlistenAbortSignal();const l=this.subscriber;return n?(Object.defineProperty(t,"_error",{get:()=>n}),l&&l(!1),Promise.reject(n)):(Object.defineProperty(t,"_data",{get:()=>a}),l&&l(!1),a)}subscribe(t){this.subscriber=t}cancel(){this.controller.abort(),this.pendingKeys.forEach((r,n)=>this.pendingKeys.delete(n));let t=this.subscriber;t&&t(!0)}async resolveData(t){let r=!1;if(!this.done){let n=()=>this.cancel();t.addEventListener("abort",n),r=await new Promise(a=>{this.subscribe(l=>{t.removeEventListener("abort",n),(l||this.done)&&a(l)})})}return r}get done(){return this.pendingKeys.size===0}get unwrappedData(){return S(this.data!==null&&this.done,"Can only unwrap data on initialized and settled deferreds"),Object.entries(this.data).reduce((t,r)=>{let[n,a]=r;return Object.assign(t,{[n]:Gt(a)})},{})}}function qt(e){return e instanceof Promise&&e._tracked===!0}function Gt(e){if(!qt(e))return e;if(e._error)throw e._error;return e._data}class Le{constructor(t,r,n,a){a===void 0&&(a=!1),this.status=t,this.statusText=r||"",this.internal=a,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}}function Jt(e){return e instanceof Le}const et=["post","put","patch","delete"],Qt=new Set(et),Xt=["get",...et],Zt=new Set(Xt),kt=new Set([301,302,303,307,308]),er=new Set([307,308]),Se={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},tr={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},rr=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",nr=!rr;function ur(e){S(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let t=Qe(e.routes),r=null,n=new Set,a=null,l=null,s=null,f=e.hydrationData!=null,u=we(t,e.history.location,e.basename),m=null;if(u==null){let o=J(404,{pathname:e.history.location.pathname}),{matches:d,route:c}=Ve(t);u=d,m={[c.id]:o}}let p=!u.some(o=>o.route.loader)||e.hydrationData!=null,D,i={historyAction:e.history.action,location:e.history.location,matches:u,initialized:p,navigation:Se,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||m,fetchers:new Map},y=T.Pop,P=!1,E,x=!1,F=!1,I=[],W=[],L=new Map,z=0,be=-1,ne=new Map,pe=new Set,k=new Map,V=new Map;function ot(){return r=e.history.listen(o=>{let{action:d,location:c}=o;return Y(d,c)}),i.initialized||Y(T.Pop,i.location),D}function lt(){r&&r(),n.clear(),E&&E.abort(),i.fetchers.forEach((o,d)=>Me(d))}function st(o){return n.add(o),()=>n.delete(o)}function U(o){i=A({},i,o),n.forEach(d=>d(i))}function ae(o,d){var c;let g=i.actionData!=null&&i.navigation.formMethod!=null&&Q(i.navigation.formMethod)&&i.navigation.state==="loading"&&((c=o.state)==null?void 0:c._isRedirect)!==!0,h;d.actionData?Object.keys(d.actionData).length>0?h=d.actionData:h=null:g?h=i.actionData:h=null;let w=d.loaderData?ze(i.loaderData,d.loaderData,d.matches||[],d.errors):i.loaderData;U(A({},d,{actionData:h,loaderData:w,historyAction:y,location:o,initialized:!0,navigation:Se,revalidation:"idle",restoreScrollPosition:i.navigation.formData?!1:Oe(o,d.matches||i.matches),preventScrollReset:P})),x||y===T.Pop||(y===T.Push?e.history.push(o,o.state):y===T.Replace&&e.history.replace(o,o.state)),y=T.Pop,P=!1,x=!1,F=!1,I=[],W=[]}async function dt(o,d){if(typeof o=="number"){e.history.go(o);return}let{path:c,submission:g,error:h}=$e(o,d),w=he(i.location,c,d&&d.state);w=A({},w,e.history.encodeLocation(w));let b=d&&d.replace!=null?d.replace:void 0,R=T.Push;b===!0?R=T.Replace:b===!1||g!=null&&Q(g.formMethod)&&g.formAction===i.location.pathname+i.location.search&&(R=T.Replace);let v=d&&"preventScrollReset"in d?d.preventScrollReset===!0:void 0;return await Y(R,w,{submission:g,pendingError:h,preventScrollReset:v,replace:d&&d.replace})}function ct(){if(De(),U({revalidation:"loading"}),i.navigation.state!=="submitting"){if(i.navigation.state==="idle"){Y(i.historyAction,i.location,{startUninterruptedRevalidation:!0});return}Y(y||i.historyAction,i.navigation.location,{overrideNavigation:i.navigation})}}async function Y(o,d,c){E&&E.abort(),E=null,y=o,x=(c&&c.startUninterruptedRevalidation)===!0,vt(i.location,i.matches),P=(c&&c.preventScrollReset)===!0;let g=c&&c.overrideNavigation,h=we(t,d,e.basename);if(!h){let C=J(404,{pathname:d.pathname}),{matches:B,route:$}=Ve(t);Pe(),ae(d,{matches:B,loaderData:{},errors:{[$.id]:C}});return}if(sr(i.location,d)){ae(d,{matches:h});return}E=new AbortController;let w=ce(d,E.signal,c&&c.submission),b,R;if(c&&c.pendingError)R={[te(h).route.id]:c.pendingError};else if(c&&c.submission&&Q(c.submission.formMethod)){let C=await ft(w,d,c.submission,h,{replace:c.replace});if(C.shortCircuited)return;b=C.pendingActionData,R=C.pendingActionError,g=A({state:"loading",location:d},c.submission),w=new Request(w.url,{signal:w.signal})}let{shortCircuited:v,loaderData:j,errors:M}=await ut(w,d,h,g,c&&c.submission,c&&c.replace,b,R);v||(E=null,ae(d,A({matches:h},b?{actionData:b}:{},{loaderData:j,errors:M})))}async function ft(o,d,c,g,h){De();let w=A({state:"submitting",location:d},c);U({navigation:w});let b,R=Je(g,d);if(!R.route.action)b={type:O.error,error:J(405,{method:o.method,pathname:d.pathname,routeId:R.route.id})};else if(b=await de("action",o,R,g,D.basename),o.signal.aborted)return{shortCircuited:!0};if(re(b)){let v;return h&&h.replace!=null?v=h.replace:v=b.location===i.location.pathname+i.location.search,await ie(i,b,{submission:c,replace:v}),{shortCircuited:!0}}if(ue(b)){let v=te(g,R.route.id);return(h&&h.replace)!==!0&&(y=T.Push),{pendingActionData:{},pendingActionError:{[v.route.id]:b.error}}}if(X(b))throw new Error("defer() is not supported in actions");return{pendingActionData:{[R.route.id]:b.data}}}async function ut(o,d,c,g,h,w,b,R){let v=g;v||(v=A({state:"loading",location:d,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},h));let j=h||(v.formMethod&&v.formAction&&v.formData&&v.formEncType?{formMethod:v.formMethod,formAction:v.formAction,formData:v.formData,formEncType:v.formEncType}:void 0),[M,C]=We(i,c,j,d,F,I,W,b,R,k);if(Pe(_=>!(c&&c.some(N=>N.route.id===_))||M&&M.some(N=>N.route.id===_)),M.length===0&&C.length===0)return ae(d,A({matches:c,loaderData:{},errors:R||null},b?{actionData:b}:{})),{shortCircuited:!0};if(!x){C.forEach(N=>{let[q]=N,le=i.fetchers.get(q),se={state:"loading",data:le&&le.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};i.fetchers.set(q,se)});let _=b||i.actionData;U(A({navigation:v},_?Object.keys(_).length===0?{actionData:null}:{actionData:_}:{},C.length>0?{fetchers:new Map(i.fetchers)}:{}))}be=++z,C.forEach(_=>{let[N]=_;return L.set(N,E)});let{results:B,loaderResults:$,fetcherResults:oe}=await Fe(i.matches,c,M,C,o);if(o.signal.aborted)return{shortCircuited:!0};C.forEach(_=>{let[N]=_;return L.delete(N)});let ye=Ye(B);if(ye)return await ie(i,ye,{replace:w}),{shortCircuited:!0};let{loaderData:ve,errors:ee}=Ke(i,c,M,$,R,C,oe,V);V.forEach((_,N)=>{_.subscribe(q=>{(q||_.done)&&V.delete(N)})}),gt();let Ee=je(be);return A({loaderData:ve,errors:ee},Ee||C.length>0?{fetchers:new Map(i.fetchers)}:{})}function Ce(o){return i.fetchers.get(o)||tr}function ht(o,d,c,g){if(nr)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");L.has(o)&&ge(o);let h=we(t,c,e.basename);if(!h){Re(o,d,J(404,{pathname:c}));return}let{path:w,submission:b}=$e(c,g,!0),R=Je(h,w);if(b&&Q(b.formMethod)){mt(o,d,w,R,h,b);return}k.set(o,[w,R,h]),pt(o,d,w,R,h,b)}async function mt(o,d,c,g,h,w){if(De(),k.delete(o),!g.route.action){let H=J(405,{method:w.formMethod,pathname:c,routeId:d});Re(o,d,H);return}let b=i.fetchers.get(o),R=A({state:"submitting"},w,{data:b&&b.data," _hasFetcherDoneAnything ":!0});i.fetchers.set(o,R),U({fetchers:new Map(i.fetchers)});let v=new AbortController,j=ce(c,v.signal,w);L.set(o,v);let M=await de("action",j,g,h,D.basename);if(j.signal.aborted){L.get(o)===v&&L.delete(o);return}if(re(M)){L.delete(o),pe.add(o);let H=A({state:"loading"},w,{data:void 0," _hasFetcherDoneAnything ":!0});return i.fetchers.set(o,H),U({fetchers:new Map(i.fetchers)}),ie(i,M,{isFetchActionRedirect:!0})}if(ue(M)){Re(o,d,M.error);return}X(M)&&S(!1,"defer() is not supported in actions");let C=i.navigation.location||i.location,B=ce(C,v.signal),$=i.navigation.state!=="idle"?we(t,i.navigation.location,e.basename):i.matches;S($,"Didn't find any matches after fetcher action");let oe=++z;ne.set(o,oe);let ye=A({state:"loading",data:M.data},w,{" _hasFetcherDoneAnything ":!0});i.fetchers.set(o,ye);let[ve,ee]=We(i,$,w,C,F,I,W,{[g.route.id]:M.data},void 0,k);ee.filter(H=>{let[G]=H;return G!==o}).forEach(H=>{let[G]=H,_e=i.fetchers.get(G),Dt={state:"loading",data:_e&&_e.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};i.fetchers.set(G,Dt),L.set(G,v)}),U({fetchers:new Map(i.fetchers)});let{results:Ee,loaderResults:_,fetcherResults:N}=await Fe(i.matches,$,ve,ee,B);if(v.signal.aborted)return;ne.delete(o),L.delete(o),ee.forEach(H=>{let[G]=H;return L.delete(G)});let q=Ye(Ee);if(q)return ie(i,q);let{loaderData:le,errors:se}=Ke(i,i.matches,ve,_,void 0,ee,N,V),wt={state:"idle",data:M.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};i.fetchers.set(o,wt);let bt=je(oe);i.navigation.state==="loading"&&oe>be?(S(y,"Expected pending action"),E&&E.abort(),ae(i.navigation.location,{matches:$,loaderData:le,errors:se,fetchers:new Map(i.fetchers)})):(U(A({errors:se,loaderData:ze(i.loaderData,le,$,se)},bt?{fetchers:new Map(i.fetchers)}:{})),F=!1)}async function pt(o,d,c,g,h,w){let b=i.fetchers.get(o),R=A({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},w,{data:b&&b.data," _hasFetcherDoneAnything ":!0});i.fetchers.set(o,R),U({fetchers:new Map(i.fetchers)});let v=new AbortController,j=ce(c,v.signal);L.set(o,v);let M=await de("loader",j,g,h,D.basename);if(X(M)&&(M=await at(M,j.signal,!0)||M),L.get(o)===v&&L.delete(o),j.signal.aborted)return;if(re(M)){await ie(i,M);return}if(ue(M)){let B=te(i.matches,d);i.fetchers.delete(o),U({fetchers:new Map(i.fetchers),errors:{[B.route.id]:M.error}});return}S(!X(M),"Unhandled fetcher deferred data");let C={state:"idle",data:M.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};i.fetchers.set(o,C),U({fetchers:new Map(i.fetchers)})}async function ie(o,d,c){var g;let{submission:h,replace:w,isFetchActionRedirect:b}=c===void 0?{}:c;d.revalidate&&(F=!0);let R=he(o.location,d.location,A({_isRedirect:!0},b?{_isFetchActionRedirect:!0}:{}));if(S(R,"Expected a location on the redirect navigation"),typeof((g=window)==null?void 0:g.location)<"u"){let $=me(d.location).origin;if(window.location.origin!==$){w?window.location.replace(d.location):window.location.assign(d.location);return}}E=null;let v=w===!0?T.Replace:T.Push,{formMethod:j,formAction:M,formEncType:C,formData:B}=o.navigation;!h&&j&&M&&B&&C&&(h={formMethod:j,formAction:M,formEncType:C,formData:B}),er.has(d.status)&&h&&Q(h.formMethod)?await Y(v,R,{submission:A({},h,{formAction:d.location})}):await Y(v,R,{overrideNavigation:{state:"loading",location:R,formMethod:h?h.formMethod:void 0,formAction:h?h.formAction:void 0,formEncType:h?h.formEncType:void 0,formData:h?h.formData:void 0}})}async function Fe(o,d,c,g,h){let w=await Promise.all([...c.map(v=>de("loader",h,v,d,D.basename)),...g.map(v=>{let[,j,M,C]=v;return de("loader",ce(j,h.signal),M,C,D.basename)})]),b=w.slice(0,c.length),R=w.slice(c.length);return await Promise.all([qe(o,c,b,h.signal,!1,i.loaderData),qe(o,g.map(v=>{let[,,j]=v;return j}),R,h.signal,!0)]),{results:w,loaderResults:b,fetcherResults:R}}function De(){F=!0,I.push(...Pe()),k.forEach((o,d)=>{L.has(d)&&(W.push(d),ge(d))})}function Re(o,d,c){let g=te(i.matches,d);Me(o),U({errors:{[g.route.id]:c},fetchers:new Map(i.fetchers)})}function Me(o){L.has(o)&&ge(o),k.delete(o),ne.delete(o),pe.delete(o),i.fetchers.delete(o)}function ge(o){let d=L.get(o);S(d,"Expected fetch controller: "+o),d.abort(),L.delete(o)}function Te(o){for(let d of o){let g={state:"idle",data:Ce(d).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};i.fetchers.set(d,g)}}function gt(){let o=[];for(let d of pe){let c=i.fetchers.get(d);S(c,"Expected fetcher: "+d),c.state==="loading"&&(pe.delete(d),o.push(d))}Te(o)}function je(o){let d=[];for(let[c,g]of ne)if(g<o){let h=i.fetchers.get(c);S(h,"Expected fetcher: "+c),h.state==="loading"&&(ge(c),ne.delete(c),d.push(c))}return Te(d),d.length>0}function Pe(o){let d=[];return V.forEach((c,g)=>{(!o||o(g))&&(c.cancel(),d.push(g),V.delete(g))}),d}function yt(o,d,c){if(a=o,s=d,l=c||(g=>g.key),!f&&i.navigation===Se){f=!0;let g=Oe(i.location,i.matches);g!=null&&U({restoreScrollPosition:g})}return()=>{a=null,s=null,l=null}}function vt(o,d){if(a&&l&&s){let c=d.map(h=>Ge(h,i.loaderData)),g=l(o,c)||o.key;a[g]=s()}}function Oe(o,d){if(a&&l&&s){let c=d.map(w=>Ge(w,i.loaderData)),g=l(o,c)||o.key,h=a[g];if(typeof h=="number")return h}return null}return D={get basename(){return e.basename},get state(){return i},get routes(){return t},initialize:ot,subscribe:st,enableScrollRestoration:yt,navigate:dt,fetch:ht,revalidate:ct,createHref:o=>e.history.createHref(o),encodeLocation:o=>e.history.encodeLocation(o),getFetcher:Ce,deleteFetcher:Me,dispose:lt,_internalFetchControllers:L,_internalActiveDeferreds:V},D}function ar(e){return e!=null&&"formData"in e}function $e(e,t,r){r===void 0&&(r=!1);let n=typeof e=="string"?e:K(e);if(!t||!ar(t))return{path:n};if(t.formMethod&&!cr(t.formMethod))return{path:n,error:J(405,{method:t.formMethod})};let a;if(t.formData&&(a={formMethod:t.formMethod||"get",formAction:nt(n),formEncType:t&&t.formEncType||"application/x-www-form-urlencoded",formData:t.formData},Q(a.formMethod)))return{path:n,submission:a};let l=Z(n);try{let s=rt(t.formData);r&&l.search&&it(l.search)&&s.append("index",""),l.search="?"+s}catch{return{path:n,error:J(400)}}return{path:K(l),submission:a}}function ir(e,t){let r=e;if(t){let n=e.findIndex(a=>a.route.id===t);n>=0&&(r=e.slice(0,n))}return r}function We(e,t,r,n,a,l,s,f,u,m){let p=u?Object.values(u)[0]:f?Object.values(f)[0]:void 0,D=u?Object.keys(u)[0]:void 0,y=ir(t,D).filter((E,x)=>E.route.loader!=null&&(or(e.loaderData,e.matches[x],E)||l.some(F=>F===E.route.id)||He(e.location,e.matches[x],r,n,E,a,p))),P=[];return m&&m.forEach((E,x)=>{let[F,I,W]=E;s.includes(x)?P.push([x,F,I,W]):a&&He(F,I,r,F,I,a,p)&&P.push([x,F,I,W])}),[y,P]}function or(e,t,r){let n=!t||r.route.id!==t.route.id,a=e[r.route.id]===void 0;return n||a}function tt(e,t){let r=e.route.path;return e.pathname!==t.pathname||r&&r.endsWith("*")&&e.params["*"]!==t.params["*"]}function He(e,t,r,n,a,l,s){let f=me(e),u=t.params,m=me(n),p=a.params,D=tt(t,a)||f.toString()===m.toString()||f.search!==m.search||l;if(a.route.shouldRevalidate){let i=a.route.shouldRevalidate(A({currentUrl:f,currentParams:u,nextUrl:m,nextParams:p},r,{actionResult:s,defaultShouldRevalidate:D}));if(typeof i=="boolean")return i}return D}async function de(e,t,r,n,a,l,s,f){a===void 0&&(a="/"),l===void 0&&(l=!1),s===void 0&&(s=!1);let u,m,p,D=new Promise((y,P)=>p=P),i=()=>p();t.signal.addEventListener("abort",i);try{let y=r.route[e];S(y,"Could not find the "+e+' to run on the "'+r.route.id+'" route'),m=await Promise.race([y({request:t,params:r.params,context:f}),D]),S(m!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+r.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(y){u=O.error,m=y}finally{t.signal.removeEventListener("abort",i)}if(dr(m)){let y=m.status;if(kt.has(y)){let x=m.headers.get("Location");if(S(x,"Redirects returned/thrown from loaders/actions must have a Location header"),!(/^[a-z+]+:\/\//i.test(x)||x.startsWith("//"))){let I=n.slice(0,n.indexOf(r)+1),W=ke(I).map(z=>z.pathnameBase),L=Ht(x,W,new URL(t.url).pathname);if(S(K(L),"Unable to resolve redirect location: "+x),a){let z=L.pathname;L.pathname=z==="/"?a:fe([a,z])}x=K(L)}if(l)throw m.headers.set("Location",x),m;return{type:O.redirect,status:y,location:x,revalidate:m.headers.get("X-Remix-Revalidate")!==null}}if(s)throw{type:u||O.data,response:m};let P,E=m.headers.get("Content-Type");return E&&/\bapplication\/json\b/.test(E)?P=await m.json():P=await m.text(),u===O.error?{type:u,error:new Le(y,m.statusText,P),headers:m.headers}:{type:O.data,data:P,statusCode:m.status,headers:m.headers}}return u===O.error?{type:u,error:m}:m instanceof Yt?{type:O.deferred,deferredData:m}:{type:O.data,data:m}}function ce(e,t,r){let n=me(nt(e)).toString(),a={signal:t};if(r&&Q(r.formMethod)){let{formMethod:l,formEncType:s,formData:f}=r;a.method=l.toUpperCase(),a.body=s==="application/x-www-form-urlencoded"?rt(f):f}return new Request(n,a)}function rt(e){let t=new URLSearchParams;for(let[r,n]of e.entries())S(typeof n=="string",'File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.'),t.append(r,n);return t}function lr(e,t,r,n,a){let l={},s=null,f,u=!1,m={};return r.forEach((p,D)=>{let i=t[D].route.id;if(S(!re(p),"Cannot handle redirect results in processLoaderData"),ue(p)){let y=te(e,i),P=p.error;n&&(P=Object.values(n)[0],n=void 0),s=s||{},s[y.route.id]==null&&(s[y.route.id]=P),l[i]=void 0,u||(u=!0,f=Jt(p.error)?p.error.status:500),p.headers&&(m[i]=p.headers)}else X(p)?(a&&a.set(i,p.deferredData),l[i]=p.deferredData.data):(l[i]=p.data,p.statusCode!=null&&p.statusCode!==200&&!u&&(f=p.statusCode),p.headers&&(m[i]=p.headers))}),n&&(s=n,l[Object.keys(n)[0]]=void 0),{loaderData:l,errors:s,statusCode:f||200,loaderHeaders:m}}function Ke(e,t,r,n,a,l,s,f){let{loaderData:u,errors:m}=lr(t,r,n,a,f);for(let p=0;p<l.length;p++){let[D,,i]=l[p];S(s!==void 0&&s[p]!==void 0,"Did not find corresponding fetcher result");let y=s[p];if(ue(y)){let P=te(e.matches,i.route.id);m&&m[P.route.id]||(m=A({},m,{[P.route.id]:y.error})),e.fetchers.delete(D)}else{if(re(y))throw new Error("Unhandled fetcher revalidation redirect");if(X(y))throw new Error("Unhandled fetcher deferred data");{let P={state:"idle",data:y.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(D,P)}}}return{loaderData:u,errors:m}}function ze(e,t,r,n){let a=A({},t);for(let l of r){let s=l.route.id;if(t.hasOwnProperty(s)?t[s]!==void 0&&(a[s]=t[s]):e[s]!==void 0&&(a[s]=e[s]),n&&n.hasOwnProperty(s))break}return a}function te(e,t){return(t?e.slice(0,e.findIndex(n=>n.route.id===t)+1):[...e]).reverse().find(n=>n.route.hasErrorBoundary===!0)||e[0]}function Ve(e){let t=e.find(r=>r.index||!r.path||r.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function J(e,t){let{pathname:r,routeId:n,method:a}=t===void 0?{}:t,l="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(l="Bad Request",a&&r&&n?s="You made a "+a+' request to "'+r+'" but '+('did not provide a `loader` for route "'+n+'", ')+"so there is no way to handle the request.":s="Cannot submit binary form data using GET"):e===403?(l="Forbidden",s='Route "'+n+'" does not match URL "'+r+'"'):e===404?(l="Not Found",s='No route matches URL "'+r+'"'):e===405&&(l="Method Not Allowed",a&&r&&n?s="You made a "+a.toUpperCase()+' request to "'+r+'" but '+('did not provide an `action` for route "'+n+'", ')+"so there is no way to handle the request.":a&&(s='Invalid request method "'+a.toUpperCase()+'"')),new Le(e||500,l,new Error(s),!0)}function Ye(e){for(let t=e.length-1;t>=0;t--){let r=e[t];if(re(r))return r}}function nt(e){let t=typeof e=="string"?Z(e):e;return K(A({},t,{hash:""}))}function sr(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash!==t.hash}function X(e){return e.type===O.deferred}function ue(e){return e.type===O.error}function re(e){return(e&&e.type)===O.redirect}function dr(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function cr(e){return Zt.has(e)}function Q(e){return Qt.has(e)}async function qe(e,t,r,n,a,l){for(let s=0;s<r.length;s++){let f=r[s],u=t[s],m=e.find(D=>D.route.id===u.route.id),p=m!=null&&!tt(m,u)&&(l&&l[u.route.id])!==void 0;X(f)&&(a||p)&&await at(f,n,a).then(D=>{D&&(r[s]=D||r[s])})}}async function at(e,t,r){if(r===void 0&&(r=!1),!await e.deferredData.resolveData(t)){if(r)try{return{type:O.data,data:e.deferredData.unwrappedData}}catch(a){return{type:O.error,error:a}}return{type:O.data,data:e.deferredData.data}}}function it(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Ge(e,t){let{route:r,pathname:n,params:a}=e;return{id:r.id,pathname:n,params:a,data:t[r.id],handle:r.handle}}function Je(e,t){let r=typeof t=="string"?Z(t).search:t.search;if(e[e.length-1].route.index&&it(r||""))return e[e.length-1];let n=ke(e);return n[n.length-1]}export{T as A,Le as E,Jt as a,fr as b,ur as c,K as d,ke as g,S as i,fe as j,we as m,Z as p,Ht as r,Bt as s};
