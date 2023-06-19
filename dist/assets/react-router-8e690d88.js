import{A as j,i as p,p as w,s as k,m as T,j as x,g as F,r as I,a as V}from"./@remix-run-c2636829.js";import{a as D,r as o}from"./react-ce22c937.js";/**
 * React Router v6.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function y(){return y=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},y.apply(this,arguments)}function _(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const $=typeof Object.is=="function"?Object.is:_,{useState:z,useEffect:G,useLayoutEffect:H,useDebugValue:W}=D;function X(t,e,r){const n=e(),[{inst:a},l]=z({inst:{value:n,getSnapshot:e}});return H(()=>{a.value=n,a.getSnapshot=e,S(a)&&l({inst:a})},[t,n,e]),G(()=>(S(a)&&l({inst:a}),t(()=>{S(a)&&l({inst:a})})),[t]),W(n),n}function S(t){const e=t.getSnapshot,r=t.value;try{const n=e();return!$(r,n)}catch{return!0}}function Y(t,e,r){return e()}const q=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",K=!q,Q=K?Y:X,Z="useSyncExternalStore"in D?(t=>t.useSyncExternalStore)(D):Q,O=o.createContext(null),U=o.createContext(null),b=o.createContext(null),P=o.createContext(null),v=o.createContext({outlet:null,matches:[]}),J=o.createContext(null);function me(t,e){let{relative:r}=e===void 0?{}:e;E()||p(!1);let{basename:n,navigator:a}=o.useContext(b),{hash:l,pathname:s,search:i}=A(t,{relative:r}),u=s;return n!=="/"&&(u=s==="/"?n:x([n,s])),a.createHref({pathname:u,search:i,hash:l})}function E(){return o.useContext(P)!=null}function L(){return E()||p(!1),o.useContext(P).location}function ve(){E()||p(!1);let{basename:t,navigator:e}=o.useContext(b),{matches:r}=o.useContext(v),{pathname:n}=L(),a=JSON.stringify(F(r).map(i=>i.pathnameBase)),l=o.useRef(!1);return o.useEffect(()=>{l.current=!0}),o.useCallback(function(i,u){if(u===void 0&&(u={}),!l.current)return;if(typeof i=="number"){e.go(i);return}let c=I(i,JSON.parse(a),n,u.relative==="path");t!=="/"&&(c.pathname=c.pathname==="/"?t:x([t,c.pathname])),(u.replace?e.replace:e.push)(c,u.state,u)},[t,e,a,n])}function A(t,e){let{relative:r}=e===void 0?{}:e,{matches:n}=o.useContext(v),{pathname:a}=L(),l=JSON.stringify(F(n).map(s=>s.pathnameBase));return o.useMemo(()=>I(t,JSON.parse(l),a,r==="path"),[t,l,a,r])}function ee(t,e){E()||p(!1);let{navigator:r}=o.useContext(b),n=o.useContext(U),{matches:a}=o.useContext(v),l=a[a.length-1],s=l?l.params:{};l&&l.pathname;let i=l?l.pathnameBase:"/";l&&l.route;let u=L(),c;if(e){var h;let d=typeof e=="string"?w(e):e;i==="/"||(h=d.pathname)!=null&&h.startsWith(i)||p(!1),c=d}else c=u;let f=c.pathname||"/",C=i==="/"?f:f.slice(i.length)||"/",g=T(t,{pathname:C}),m=oe(g&&g.map(d=>Object.assign({},d,{params:Object.assign({},s,d.params),pathname:x([i,r.encodeLocation?r.encodeLocation(d.pathname).pathname:d.pathname]),pathnameBase:d.pathnameBase==="/"?i:x([i,r.encodeLocation?r.encodeLocation(d.pathnameBase).pathname:d.pathnameBase])})),a,n||void 0);return e&&m?o.createElement(P.Provider,{value:{location:y({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:j.Pop}},m):m}function te(){let t=ie(),e=V(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,n="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:n},l={padding:"2px 4px",backgroundColor:n};return o.createElement(o.Fragment,null,o.createElement("h2",null,"Unhandled Thrown Error!"),o.createElement("h3",{style:{fontStyle:"italic"}},e),r?o.createElement("pre",{style:a},r):null,o.createElement("p",null,"💿 Hey developer 👋"),o.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",o.createElement("code",{style:l},"errorElement")," props on ",o.createElement("code",{style:l},"<Route>")))}class re extends o.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location?{error:e.error,location:e.location}:{error:e.error||r.error,location:r.location}}componentDidCatch(e,r){console.error("React Router caught the following error during render",e,r)}render(){return this.state.error?o.createElement(v.Provider,{value:this.props.routeContext},o.createElement(J.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ne(t){let{routeContext:e,match:r,children:n}=t,a=o.useContext(O);return a&&a.static&&a.staticContext&&r.route.errorElement&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),o.createElement(v.Provider,{value:e},n)}function oe(t,e,r){if(e===void 0&&(e=[]),t==null)if(r!=null&&r.errors)t=r.matches;else return null;let n=t,a=r==null?void 0:r.errors;if(a!=null){let l=n.findIndex(s=>s.route.id&&(a==null?void 0:a[s.route.id]));l>=0||p(!1),n=n.slice(0,Math.min(n.length,l+1))}return n.reduceRight((l,s,i)=>{let u=s.route.id?a==null?void 0:a[s.route.id]:null,c=r?s.route.errorElement||o.createElement(te,null):null,h=e.concat(n.slice(0,i+1)),f=()=>o.createElement(ne,{match:s,routeContext:{outlet:l,matches:h}},u?c:s.route.element!==void 0?s.route.element:l);return r&&(s.route.errorElement||i===0)?o.createElement(re,{location:r.location,component:c,error:u,children:f(),routeContext:{outlet:null,matches:h}}):f()},null)}var M;(function(t){t.UseRevalidator="useRevalidator"})(M||(M={}));var R;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(R||(R={}));function ae(t){let e=o.useContext(U);return e||p(!1),e}function le(t){let e=o.useContext(v);return e||p(!1),e}function se(t){let e=le(),r=e.matches[e.matches.length-1];return r.route.id||p(!1),r.route.id}function ie(){var t;let e=o.useContext(J),r=ae(R.UseRouteError),n=se(R.UseRouteError);return e||((t=r.errors)==null?void 0:t[n])}function ge(t){let{fallbackElement:e,router:r}=t,n=Z(r.subscribe,()=>r.state,()=>r.state),a=o.useMemo(()=>({createHref:r.createHref,encodeLocation:r.encodeLocation,go:s=>r.navigate(s),push:(s,i,u)=>r.navigate(s,{state:i,preventScrollReset:u==null?void 0:u.preventScrollReset}),replace:(s,i,u)=>r.navigate(s,{replace:!0,state:i,preventScrollReset:u==null?void 0:u.preventScrollReset})}),[r]),l=r.basename||"/";return o.createElement(o.Fragment,null,o.createElement(O.Provider,{value:{router:r,navigator:a,static:!1,basename:l}},o.createElement(U.Provider,{value:n},o.createElement(ce,{basename:r.basename,location:r.state.location,navigationType:r.state.historyAction,navigator:a},r.state.initialized?o.createElement(de,null):e))),null)}function ue(t){p(!1)}function ce(t){let{basename:e="/",children:r=null,location:n,navigationType:a=j.Pop,navigator:l,static:s=!1}=t;E()&&p(!1);let i=e.replace(/^\/*/,"/"),u=o.useMemo(()=>({basename:i,navigator:l,static:s}),[i,l,s]);typeof n=="string"&&(n=w(n));let{pathname:c="/",search:h="",hash:f="",state:C=null,key:g="default"}=n,m=o.useMemo(()=>{let d=k(c,i);return d==null?null:{pathname:d,search:h,hash:f,state:C,key:g}},[i,c,h,f,C,g]);return m==null?null:o.createElement(b.Provider,{value:u},o.createElement(P.Provider,{children:r,value:{location:m,navigationType:a}}))}function de(t){let{children:e,location:r}=t,n=o.useContext(O),a=n&&!e?n.router.routes:B(e);return ee(a,r)}var N;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(N||(N={}));new Promise(()=>{});function B(t,e){e===void 0&&(e=[]);let r=[];return o.Children.forEach(t,(n,a)=>{if(!o.isValidElement(n))return;if(n.type===o.Fragment){r.push.apply(r,B(n.props.children,e));return}n.type!==ue&&p(!1),!n.props.index||!n.props.children||p(!1);let l=[...e,a],s={id:n.props.id||l.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,hasErrorBoundary:n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle};n.props.children&&(s.children=B(n.props.children,l)),r.push(s)}),r}function pe(t){return t.map(e=>{let r=y({},e);return r.hasErrorBoundary==null&&(r.hasErrorBoundary=r.errorElement!=null),r.children&&(r.children=pe(r.children)),r})}export{U as D,b as N,ge as R,ve as a,L as b,A as c,pe as e,me as u};
