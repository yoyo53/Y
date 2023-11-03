(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{2601:function(e,r,n){"use strict";var l,c;e.exports=(null==(l=n.g.process)?void 0:l.env)&&"object"==typeof(null==(c=n.g.process)?void 0:c.env)?n.g.process:n(8960)},8253:function(e,r,n){Promise.resolve().then(n.bind(n,3918))},3918:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return LoginPage}});var l=n(7437),c=n(2265),d=n(1396),f=n.n(d),g=n(4033),h=n(1179),y=n(5925),x=n(2601);function LoginPage(){let[e,r]=(0,c.useState)(""),[n,d]=(0,c.useState)(""),b=(0,g.useRouter)();(0,c.useEffect)(()=>{(0,h.redirectLogedIn)(b,y.default)},[]);let postLogin=async r=>{r.preventDefault();try{let r=await fetch("".concat("https://y-back.fly.dev","/auth/login"),{method:"POST",body:JSON.stringify({email:e,password:n}),headers:{"Content-type":"application/json"}});if(r.ok){let e=await r.json();window.localStorage.setItem("token",e.token),b.push("/conversations")}else y.default.error("Error: incorrect email or password")}catch(e){y.default.error("Error: Internal server error, try again later")}};return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"flex flex-1 flex-col justify-center px-6 py-12 lg:px-8",children:[(0,l.jsxs)("div",{className:"sm:mx-auto sm:w-full sm:max-w-sm",children:[(0,l.jsx)("img",{className:"mx-auto h-10 w-auto",src:"".concat(x.env.BASE_PATH,"/logo.svg"),alt:"Y logo"}),(0,l.jsx)("h2",{className:"mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900",children:"Sign in to your account"})]}),(0,l.jsxs)("div",{className:"mt-10 sm:mx-auto sm:w-full sm:max-w-sm",children:[(0,l.jsxs)("form",{className:"space-y-6",method:"POST",onSubmit:postLogin,children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium leading-6 text-gray-900",children:"Email address"}),(0,l.jsx)("div",{className:"mt-2",children:(0,l.jsx)("input",{id:"email",name:"email",type:"email",autoComplete:"email",value:e,onChange:e=>r(e.target.value),required:!0,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"flex items-center justify-between",children:[(0,l.jsx)("label",{htmlFor:"password",className:"block text-sm font-medium leading-6 text-gray-900",children:"Password"}),(0,l.jsx)("div",{className:"text-sm",children:(0,l.jsx)(f(),{href:"",onClick:()=>{(0,y.default)("That's sad \uD83D\uDE2D")},className:"font-semibold text-indigo-600 hover:text-indigo-500",children:"Forgot password?"})})]}),(0,l.jsx)("div",{className:"mt-2",children:(0,l.jsx)("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",value:n,onChange:e=>d(e.target.value),required:!0,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),(0,l.jsx)("div",{children:(0,l.jsx)("button",{type:"submit",className:"flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Sign in"})})]}),(0,l.jsxs)("p",{className:"mt-10 text-center text-sm text-gray-500",children:["Not a member?"," ",(0,l.jsx)(f(),{href:"/register",className:"font-semibold leading-6 text-indigo-600 hover:text-indigo-500",children:"Create your account for free"})]})]})]})})}},1179:function(e){"use strict";async function redirectUnautorized(e,r){let n=window.localStorage.getItem("token");if(null==n)e.push("/login");else try{(await fetch("".concat("https://y-back.fly.dev","/auth/verifyToken"),{headers:{Authorization:"Bearer ".concat(n)}})).ok||(r.error("Error: you need to be connected to see this page"),window.localStorage.removeItem("token"),e.push("/login"))}catch(n){r.error("Error: Internal server error, try again later"),e.push("/")}}async function redirectLogedIn(e,r){let n=window.localStorage.getItem("token");if(null!=n)try{(await fetch("".concat("https://y-back.fly.dev","/auth/verifyToken"),{headers:{Authorization:"Bearer ".concat(n)}})).ok?(r.success("Already connected"),e.push("/")):window.localStorage.removeItem("token")}catch(e){}}e.exports={redirectUnautorized,redirectLogedIn}},8960:function(e){!function(){var r={229:function(e){var r,n,l,c=e.exports={};function defaultSetTimout(){throw Error("setTimeout has not been defined")}function defaultClearTimeout(){throw Error("clearTimeout has not been defined")}function runTimeout(e){if(r===setTimeout)return setTimeout(e,0);if((r===defaultSetTimout||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(n){try{return r.call(null,e,0)}catch(n){return r.call(this,e,0)}}}function runClearTimeout(e){if(n===clearTimeout)return clearTimeout(e);if((n===defaultClearTimeout||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{return n(e)}catch(r){try{return n.call(null,e)}catch(r){return n.call(this,e)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){r=defaultSetTimout}try{n="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e){n=defaultClearTimeout}}();var d=[],f=!1,g=-1;function cleanUpNextTick(){f&&l&&(f=!1,l.length?d=l.concat(d):g=-1,d.length&&drainQueue())}function drainQueue(){if(!f){var e=runTimeout(cleanUpNextTick);f=!0;for(var r=d.length;r;){for(l=d,d=[];++g<r;)l&&l[g].run();g=-1,r=d.length}l=null,f=!1,runClearTimeout(e)}}function Item(e,r){this.fun=e,this.array=r}function noop(){}c.nextTick=function(e){var r=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)r[n-1]=arguments[n];d.push(new Item(e,r)),1!==d.length||f||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={},c.on=noop,c.addListener=noop,c.once=noop,c.off=noop,c.removeListener=noop,c.removeAllListeners=noop,c.emit=noop,c.prependListener=noop,c.prependOnceListener=noop,c.listeners=function(e){return[]},c.binding=function(e){throw Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(e){throw Error("process.chdir is not supported")},c.umask=function(){return 0}}},n={};function __nccwpck_require__(e){var l=n[e];if(void 0!==l)return l.exports;var c=n[e]={exports:{}},d=!0;try{r[e](c,c.exports,__nccwpck_require__),d=!1}finally{d&&delete n[e]}return c.exports}__nccwpck_require__.ab="//";var l=__nccwpck_require__(229);e.exports=l}()},4033:function(e,r,n){e.exports=n(94)},5925:function(e,r,n){"use strict";let l,c;n.r(r),n.d(r,{CheckmarkIcon:function(){return B},ErrorIcon:function(){return z},LoaderIcon:function(){return q},ToastBar:function(){return et},ToastIcon:function(){return M},Toaster:function(){return Ie},default:function(){return eo},resolveValue:function(){return T},toast:function(){return dist_n},useToaster:function(){return D},useToasterStore:function(){return I}});var d=n(2265);let f={data:""},t=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||f,g=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,h=/\/\*[^]*?\*\/|  +/g,y=/\n+/g,o=(e,r)=>{let n="",l="",c="";for(let d in e){let f=e[d];"@"==d[0]?"i"==d[1]?n=d+" "+f+";":l+="f"==d[1]?o(f,d):d+"{"+o(f,"k"==d[1]?"":r)+"}":"object"==typeof f?l+=o(f,r?r.replace(/([^,])+/g,e=>d.replace(/(^:.*)|([^,])+/g,r=>/&/.test(r)?r.replace(/&/g,e):e?e+" "+r:r)):d):null!=f&&(d=/^--/.test(d)?d:d.replace(/[A-Z]/g,"-$&").toLowerCase(),c+=o.p?o.p(d,f):d+":"+f+";")}return n+(r&&c?r+"{"+c+"}":c)+l},x={},s=e=>{if("object"==typeof e){let r="";for(let n in e)r+=n+s(e[n]);return r}return e},i=(e,r,n,l,c)=>{var d;let f=s(e),b=x[f]||(x[f]=(e=>{let r=0,n=11;for(;r<e.length;)n=101*n+e.charCodeAt(r++)>>>0;return"go"+n})(f));if(!x[b]){let r=f!==e?e:(e=>{let r,n,l=[{}];for(;r=g.exec(e.replace(h,""));)r[4]?l.shift():r[3]?(n=r[3].replace(y," ").trim(),l.unshift(l[0][n]=l[0][n]||{})):l[0][r[1]]=r[2].replace(y," ").trim();return l[0]})(e);x[b]=o(c?{["@keyframes "+b]:r}:r,n?"":"."+b)}let w=n&&x.g?x.g:null;return n&&(x.g=x[b]),d=x[b],w?r.data=r.data.replace(w,d):-1===r.data.indexOf(d)&&(r.data=l?d+r.data:r.data+d),b},p=(e,r,n)=>e.reduce((e,l,c)=>{let d=r[c];if(d&&d.call){let e=d(n),r=e&&e.props&&e.props.className||/^go/.test(e)&&e;d=r?"."+r:e&&"object"==typeof e?e.props?"":o(e,""):!1===e?"":e}return e+l+(null==d?"":d)},"");function u(e){let r=this||{},n=e.call?e(r.p):e;return i(n.unshift?n.raw?p(n,[].slice.call(arguments,1),r.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(r.p):n),{}):n,t(r.target),r.g,r.o,r.k)}u.bind({g:1});let b,w,_,k=u.bind({k:1});function m(e,r,n,l){o.p=r,b=e,w=n,_=l}function j(e,r){let n=this||{};return function(){let l=arguments;function a(c,d){let f=Object.assign({},c),g=f.className||a.className;n.p=Object.assign({theme:w&&w()},f),n.o=/ *go\d+/.test(g),f.className=u.apply(n,l)+(g?" "+g:""),r&&(f.ref=d);let h=e;return e[0]&&(h=f.as||e,delete f.as),_&&h[0]&&_(f),b(h,f)}return r?r(a):a}}var W=e=>"function"==typeof e,T=(e,r)=>W(e)?e(r):e,E=(l=0,()=>(++l).toString()),dist_b=()=>{if(void 0===c&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");c=!e||e.matches}return c},N=new Map,$=e=>{if(N.has(e))return;let r=setTimeout(()=>{N.delete(e),dist_u({type:4,toastId:e})},1e3);N.set(e,r)},J=e=>{let r=N.get(e);r&&clearTimeout(r)},v=(e,r)=>{switch(r.type){case 0:return{...e,toasts:[r.toast,...e.toasts].slice(0,20)};case 1:return r.toast.id&&J(r.toast.id),{...e,toasts:e.toasts.map(e=>e.id===r.toast.id?{...e,...r.toast}:e)};case 2:let{toast:n}=r;return e.toasts.find(e=>e.id===n.id)?v(e,{type:1,toast:n}):v(e,{type:0,toast:n});case 3:let{toastId:l}=r;return l?$(l):e.toasts.forEach(e=>{$(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===l||void 0===l?{...e,visible:!1}:e)};case 4:return void 0===r.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==r.toastId)};case 5:return{...e,pausedAt:r.time};case 6:let c=r.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+c}))}}},C=[],S={toasts:[],pausedAt:void 0},dist_u=e=>{S=v(S,e),C.forEach(e=>{e(S)})},O={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},I=(e={})=>{let[r,n]=(0,d.useState)(S);(0,d.useEffect)(()=>(C.push(n),()=>{let e=C.indexOf(n);e>-1&&C.splice(e,1)}),[r]);let l=r.toasts.map(r=>{var n,l;return{...e,...e[r.type],...r,duration:r.duration||(null==(n=e[r.type])?void 0:n.duration)||(null==e?void 0:e.duration)||O[r.type],style:{...e.style,...null==(l=e[r.type])?void 0:l.style,...r.style}}});return{...r,toasts:l}},G=(e,r="blank",n)=>({createdAt:Date.now(),visible:!0,type:r,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||E()}),dist_h=e=>(r,n)=>{let l=G(r,e,n);return dist_u({type:2,toast:l}),l.id},dist_n=(e,r)=>dist_h("blank")(e,r);dist_n.error=dist_h("error"),dist_n.success=dist_h("success"),dist_n.loading=dist_h("loading"),dist_n.custom=dist_h("custom"),dist_n.dismiss=e=>{dist_u({type:3,toastId:e})},dist_n.remove=e=>dist_u({type:4,toastId:e}),dist_n.promise=(e,r,n)=>{let l=dist_n.loading(r.loading,{...n,...null==n?void 0:n.loading});return e.then(e=>(dist_n.success(T(r.success,e),{id:l,...n,...null==n?void 0:n.success}),e)).catch(e=>{dist_n.error(T(r.error,e),{id:l,...n,...null==n?void 0:n.error})}),e};var Z=(e,r)=>{dist_u({type:1,toast:{id:e,height:r}})},ee=()=>{dist_u({type:5,time:Date.now()})},D=e=>{let{toasts:r,pausedAt:n}=I(e);(0,d.useEffect)(()=>{if(n)return;let e=Date.now(),l=r.map(r=>{if(r.duration===1/0)return;let n=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(n<0){r.visible&&dist_n.dismiss(r.id);return}return setTimeout(()=>dist_n.dismiss(r.id),n)});return()=>{l.forEach(e=>e&&clearTimeout(e))}},[r,n]);let l=(0,d.useCallback)(()=>{n&&dist_u({type:6,time:Date.now()})},[n]),c=(0,d.useCallback)((e,n)=>{let{reverseOrder:l=!1,gutter:c=8,defaultPosition:d}=n||{},f=r.filter(r=>(r.position||d)===(e.position||d)&&r.height),g=f.findIndex(r=>r.id===e.id),h=f.filter((e,r)=>r<g&&e.visible).length;return f.filter(e=>e.visible).slice(...l?[h+1]:[0,h]).reduce((e,r)=>e+(r.height||0)+c,0)},[r]);return{toasts:r,handlers:{updateHeight:Z,startPause:ee,endPause:l,calculateOffset:c}}},A=k`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,L=k`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,P=k`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,z=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${A} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${L} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${P} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,F=k`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,q=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${F} 1s linear infinite;
`,H=k`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,U=k`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,B=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${H} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${U} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,R=j("div")`
  position: absolute;
`,Q=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Y=k`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,V=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Y} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,M=({toast:e})=>{let{icon:r,type:n,iconTheme:l}=e;return void 0!==r?"string"==typeof r?d.createElement(V,null,r):r:"blank"===n?null:d.createElement(Q,null,d.createElement(q,{...l}),"loading"!==n&&d.createElement(R,null,"error"===n?d.createElement(z,{...l}):d.createElement(B,{...l})))},ye=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ge=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,K=j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,X=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ae=(e,r)=>{let n=e.includes("top")?1:-1,[l,c]=dist_b()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ye(n),ge(n)];return{animation:r?`${k(l)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${k(c)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},et=d.memo(({toast:e,position:r,style:n,children:l})=>{let c=e.height?Ae(e.position||r||"top-center",e.visible):{opacity:0},f=d.createElement(M,{toast:e}),g=d.createElement(X,{...e.ariaProps},T(e.message,e));return d.createElement(K,{className:e.className,style:{...c,...n,...e.style}},"function"==typeof l?l({icon:f,message:g}):d.createElement(d.Fragment,null,f,g))});m(d.createElement);var Ee=({id:e,className:r,style:n,onHeightUpdate:l,children:c})=>{let f=d.useCallback(r=>{if(r){let i=()=>{l(e,r.getBoundingClientRect().height)};i(),new MutationObserver(i).observe(r,{subtree:!0,childList:!0,characterData:!0})}},[e,l]);return d.createElement("div",{ref:f,className:r,style:n},c)},Re=(e,r)=>{let n=e.includes("top"),l=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:dist_b()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${r*(n?1:-1)}px)`,...n?{top:0}:{bottom:0},...l}},er=u`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Ie=({reverseOrder:e,position:r="top-center",toastOptions:n,gutter:l,children:c,containerStyle:f,containerClassName:g})=>{let{toasts:h,handlers:y}=D(n);return d.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...f},className:g,onMouseEnter:y.startPause,onMouseLeave:y.endPause},h.map(n=>{let f=n.position||r,g=Re(f,y.calculateOffset(n,{reverseOrder:e,gutter:l,defaultPosition:r}));return d.createElement(Ee,{id:n.id,key:n.id,onHeightUpdate:y.updateHeight,className:n.visible?er:"",style:g},"custom"===n.type?T(n.message,n):c?c(n):d.createElement(et,{toast:n,position:f}))}))},eo=dist_n}},function(e){e.O(0,[176,971,472,744],function(){return e(e.s=8253)}),_N_E=e.O()}]);