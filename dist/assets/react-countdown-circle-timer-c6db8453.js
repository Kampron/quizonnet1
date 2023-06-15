import{R,r as m}from"./react-ce22c937.js";var A=typeof window>"u"?m.useEffect:m.useLayoutEffect,x=({isPlaying:t,duration:e,startAt:a=0,updateInterval:r=0,onComplete:n,onUpdate:l})=>{let[i,c]=m.useState(a),d=m.useRef(0),p=m.useRef(a),f=m.useRef(a*-1e3),u=m.useRef(null),s=m.useRef(null),k=m.useRef(null),g=h=>{let o=h/1e3;if(s.current===null){s.current=o,u.current=requestAnimationFrame(g);return}let $=o-s.current,v=d.current+$;s.current=o,d.current=v;let T=p.current+(r===0?v:(v/r|0)*r),W=p.current+v,C=typeof e=="number"&&W>=e;c(C?e:T),C||(u.current=requestAnimationFrame(g))},y=()=>{u.current&&cancelAnimationFrame(u.current),k.current&&clearTimeout(k.current),s.current=null},w=m.useCallback(h=>{y(),d.current=0;let o=typeof h=="number"?h:a;p.current=o,c(o),t&&(u.current=requestAnimationFrame(g))},[t,a]);return A(()=>{if(l==null||l(i),e&&i>=e){f.current+=e*1e3;let{shouldRepeat:h=!1,delay:o=0,newStartAt:$}=(n==null?void 0:n(f.current/1e3))||{};h&&(k.current=setTimeout(()=>w($),o*1e3))}},[i,e]),A(()=>(t&&(u.current=requestAnimationFrame(g)),y),[t,e,r]),{elapsedTime:i,reset:w}},L=(t,e,a)=>{let r=t/2,n=e/2,l=r-n,i=2*l,c=a==="clockwise"?"1,0":"0,1",d=2*Math.PI*l;return{path:`m ${r},${n} a ${l},${l} 0 ${c} 0,${i} a ${l},${l} 0 ${c} 0,-${i}`,pathLength:d}},b=(t,e)=>t===0||t===e?0:typeof e=="number"?t-e:0,S=t=>({position:"relative",width:t,height:t}),F={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},E=(t,e,a,r)=>{if(r===0)return e;let n=t/r;return e+a*n},I=t=>{var e,a;return(a=(e=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(r,n,l,i)=>`#${n}${n}${l}${l}${i}${i}`).substring(1).match(/.{2}/g))==null?void 0:e.map(r=>parseInt(r,16)))!=null?a:[]},D=(t,e)=>{var a;let{colors:r,colorsTime:n,isSmoothColorTransition:l=!0}=t;if(typeof r=="string")return r;let i=(a=n==null?void 0:n.findIndex((u,s)=>u>=e&&e>=n[s+1]))!=null?a:-1;if(!n||i===-1)return r[0];if(!l)return r[i];let c=n[i]-e,d=n[i]-n[i+1],p=I(r[i]),f=I(r[i+1]);return`rgb(${p.map((u,s)=>E(c,u,f[s]-u,d)|0).join(",")})`},P=t=>{let{duration:e,initialRemainingTime:a,updateInterval:r,size:n=180,strokeWidth:l=12,trailStrokeWidth:i,isPlaying:c=!1,rotation:d="clockwise",onComplete:p,onUpdate:f}=t,u=m.useRef(),s=Math.max(l,i??0),{path:k,pathLength:g}=L(n,s,d),{elapsedTime:y}=x({isPlaying:c,duration:e,startAt:b(e,a),updateInterval:r,onUpdate:typeof f=="function"?h=>{let o=Math.ceil(e-h);o!==u.current&&(u.current=o,f(o))}:void 0,onComplete:typeof p=="function"?h=>{var o;let{shouldRepeat:$,delay:v,newInitialRemainingTime:T}=(o=p(h))!=null?o:{};if($)return{shouldRepeat:$,delay:v,newStartAt:b(e,T)}}:void 0}),w=e-y;return{elapsedTime:y,path:k,pathLength:g,remainingTime:Math.ceil(w),rotation:d,size:n,stroke:D(t,w),strokeDashoffset:E(y,0,g,e),strokeWidth:l}},q=t=>{let{children:e,strokeLinecap:a,trailColor:r,trailStrokeWidth:n}=t,{path:l,pathLength:i,stroke:c,strokeDashoffset:d,remainingTime:p,elapsedTime:f,size:u,strokeWidth:s}=P(t);return R.createElement("div",{style:S(u)},R.createElement("svg",{viewBox:`0 0 ${u} ${u}`,width:u,height:u,xmlns:"http://www.w3.org/2000/svg"},R.createElement("path",{d:l,fill:"none",stroke:r??"#d9d9d9",strokeWidth:n??s}),R.createElement("path",{d:l,fill:"none",stroke:c,strokeLinecap:a??"round",strokeWidth:s,strokeDasharray:i,strokeDashoffset:d})),typeof e=="function"&&R.createElement("div",{style:F},e({remainingTime:p,elapsedTime:f,color:c})))};q.displayName="CountdownCircleTimer";export{q as W};