(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[682],{8121:function(e,r,n){Promise.resolve().then(n.bind(n,4267))},4267:function(e,r,n){"use strict";let l;n.r(r),n.d(r,{default:function(){return ChatPage}});var c=n(7437),d=n(2265);function Message(e){let{text:r,imageUrl:n,isCurrentUser:l}=e;return(0,c.jsxs)("div",{className:l?"chat-message flex items-end justify-end ":"chat-message flex items-end",children:[(0,c.jsx)("div",{className:l?"flex text-xs max-w-xs mx-2 items-end justify-end order-1":"flex text-xs max-w-xs mx-2 items-end order-2",children:(0,c.jsx)("div",{children:(0,c.jsx)("span",{className:l?"px-4 py-2 max-w-md rounded-lg inline-block rounded-br-none bg-blue-600 text-white":"px-4 py-2 max-w-md rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600",style:{wordWrap:"break-word"},children:r})})}),(0,c.jsx)("img",{src:n,alt:"User Profile",className:l?"w-6 h-6 rounded-full order-2":"w-6 h-6 rounded-full order-1"})]})}var f=n(5925),SendMessage=function(e){let{idconv:r,token:n,refreshChat:l}=e,[h,g]=(0,d.useState)("");return(0,c.jsx)("form",{method:"POST",onSubmit:e=>{e.preventDefault(),fetch("".concat("https://y-back.fly.dev","/conversations/sendmessage/").concat(r),{method:"POST",body:JSON.stringify({message:h}),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then(e=>{if(e.ok)return e.json();throw Error("Erreur lors de la requ\xeate.")}).then(e=>{console.log("Message envoy\xe9 avec succ\xe8s :",e),l(n)}).catch(e=>{f.default.error("Error: failed to send message"),console.error("Erreur :",e)}),console.log("Message envoy\xe9 : ".concat(h)),g("")},children:(0,c.jsxs)("ul",{className:"flex items-center justify-between w-full",children:[(0,c.jsx)("li",{className:"flex-1 relative",children:(0,c.jsx)("input",{type:"text",placeholder:"Write your message!",className:"w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3",value:h,onChange:e=>{g(e.target.value)}})}),(0,c.jsx)("li",{className:"ml-2",children:(0,c.jsxs)("button",{type:"submit",className:"inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-600 hover:bg-blue-400 focus:outline-none",children:[(0,c.jsx)("span",{className:"font-bold",children:"Send"}),(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"h-6 w-6 ml-2 transform rotate-90",children:(0,c.jsx)("path",{d:"M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"})})]})})]})})},h=n(4033),g=n(1179);function ChatPage(){let e=new URLSearchParams((0,h.useSearchParams)()).get("id"),[r,n]=(0,d.useState)([]),[x,y]=(0,d.useState)([{}]),b=(0,h.useRouter)();function getRandomProfilePicture(e){let r=e.split("").reduce((e,r)=>(e=(e<<5)-e+r.charCodeAt(0))&e,0);return"https://picsum.photos/seed/".concat(r,"/200")}function refreshChat(r){fetch("".concat("https://y-back.fly.dev","/conversations/getmessage/").concat(e),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)}}).then(e=>e.json()).then(e=>{console.log("R\xe9ponse re\xe7ue:",e),e.error||n(e)}).catch(e=>{f.default.error("Error: failed to retrieve messages"),console.error("Une erreur s'est produite lors de la r\xe9cup\xe9ration des messages:",e)})}return(0,d.useEffect)(()=>{document.querySelector("body").classList.add("max-h-screen"),l=window.localStorage.getItem("token"),fetch("".concat("https://y-back.fly.dev","/conversations/getconversation/").concat(e),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(l)}}).then(e=>e.json()).then(e=>{console.log("R\xe9ponse re\xe7ue:",e),y({name:e.other_username,creationdate:e.created_at.split("T")[0]})}).catch(e=>{f.default.error("Error: failed to retrieve conversation data"),console.error("Une erreur s'est produite lors de la r\xe9cup\xe9ration des informations de la conversation:",e)}),refreshChat(l)},[]),(0,d.useEffect)(()=>{(0,g.redirectUnautorized)(b,f.default);let e=setInterval(()=>{refreshChat(l)},5e3);return()=>clearInterval(e)},[]),(0,c.jsxs)("div",{className:"flex-1 p-2 sm:p-6 justify-between flex flex-col h-screen bg-white",children:[(0,c.jsxs)("div",{className:"flex sm:items-center justify-between py-3 border-b-2 border-gray-200",children:[(0,c.jsxs)("div",{className:"relative flex items-center space-x-4",children:[(0,c.jsxs)("div",{className:"relative",children:[(0,c.jsx)("span",{className:"absolute text-green-500 right-0 bottom-0",children:(0,c.jsx)("svg",{width:"20",height:"20",children:(0,c.jsx)("circle",{cx:"8",cy:"8",r:"8",fill:"currentColor"})})}),(0,c.jsx)("img",{src:getRandomProfilePicture(x.name||""),alt:"Profile Picture",className:"w-10 sm:w-16 h-10 sm:h-16 rounded-full"})]}),(0,c.jsxs)("div",{className:"flex flex-col leading-tight",children:[(0,c.jsx)("div",{className:"text-2xl mt-1 flex items-center",children:(0,c.jsx)("span",{className:"text-gray-700 mr-3",children:x.name})}),(0,c.jsxs)("span",{className:"text-sm text-gray-400",children:["Created on ",x.creationdate]})]})]}),(0,c.jsx)("div",{className:"flex items-center space-x-2"})]}),(0,c.jsx)("div",{id:"messages",className:"flex flex-col space-y-4 p-3 overflow-y-auto overflow-x-hidden scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch",children:r&&r.map((e,r)=>(0,c.jsx)(Message,{text:e.message_text,imageUrl:getRandomProfilePicture(e.user_name),isCurrentUser:"actual_user"===e.user_type},r))}),(0,c.jsx)("div",{className:"border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0",children:(0,c.jsx)(SendMessage,{idconv:e,token:l,refreshChat:refreshChat})})]})}},1179:function(e){"use strict";async function redirectUnautorized(e,r){let n=window.localStorage.getItem("token");if(null==n)e.push("/login");else try{(await fetch("".concat("https://y-back.fly.dev","/auth/verifyToken"),{headers:{Authorization:"Bearer ".concat(n)}})).ok||(r.error("Error: you need to be connected to see this page"),window.localStorage.removeItem("token"),e.push("/login"))}catch(n){r.error("Error: Internal server error, try again later"),e.push("/")}}async function redirectLogedIn(e,r){let n=window.localStorage.getItem("token");if(null!=n)try{(await fetch("".concat("https://y-back.fly.dev","/auth/verifyToken"),{headers:{Authorization:"Bearer ".concat(n)}})).ok?(r.success("Already connected"),e.push("/")):window.localStorage.removeItem("token")}catch(e){}}e.exports={redirectUnautorized,redirectLogedIn}},622:function(e,r,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=n(2265),c=Symbol.for("react.element"),d=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,h=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g={key:!0,ref:!0,__self:!0,__source:!0};function q(e,r,n){var l,d={},x=null,y=null;for(l in void 0!==n&&(x=""+n),void 0!==r.key&&(x=""+r.key),void 0!==r.ref&&(y=r.ref),r)f.call(r,l)&&!g.hasOwnProperty(l)&&(d[l]=r[l]);if(e&&e.defaultProps)for(l in r=e.defaultProps)void 0===d[l]&&(d[l]=r[l]);return{$$typeof:c,type:e,key:x,ref:y,props:d,_owner:h.current}}r.Fragment=d,r.jsx=q,r.jsxs=q},7437:function(e,r,n){"use strict";e.exports=n(622)},4033:function(e,r,n){e.exports=n(94)},5925:function(e,r,n){"use strict";let l,c;n.r(r),n.d(r,{CheckmarkIcon:function(){return H},ErrorIcon:function(){return R},LoaderIcon:function(){return L},ToastBar:function(){return er},ToastIcon:function(){return M},Toaster:function(){return Ie},default:function(){return es},resolveValue:function(){return T},toast:function(){return dist_n},useToaster:function(){return D},useToasterStore:function(){return I}});var d=n(2265);let f={data:""},t=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||f,h=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,g=/\/\*[^]*?\*\/|  +/g,x=/\n+/g,o=(e,r)=>{let n="",l="",c="";for(let d in e){let f=e[d];"@"==d[0]?"i"==d[1]?n=d+" "+f+";":l+="f"==d[1]?o(f,d):d+"{"+o(f,"k"==d[1]?"":r)+"}":"object"==typeof f?l+=o(f,r?r.replace(/([^,])+/g,e=>d.replace(/(^:.*)|([^,])+/g,r=>/&/.test(r)?r.replace(/&/g,e):e?e+" "+r:r)):d):null!=f&&(d=/^--/.test(d)?d:d.replace(/[A-Z]/g,"-$&").toLowerCase(),c+=o.p?o.p(d,f):d+":"+f+";")}return n+(r&&c?r+"{"+c+"}":c)+l},y={},s=e=>{if("object"==typeof e){let r="";for(let n in e)r+=n+s(e[n]);return r}return e},i=(e,r,n,l,c)=>{var d;let f=s(e),b=y[f]||(y[f]=(e=>{let r=0,n=11;for(;r<e.length;)n=101*n+e.charCodeAt(r++)>>>0;return"go"+n})(f));if(!y[b]){let r=f!==e?e:(e=>{let r,n,l=[{}];for(;r=h.exec(e.replace(g,""));)r[4]?l.shift():r[3]?(n=r[3].replace(x," ").trim(),l.unshift(l[0][n]=l[0][n]||{})):l[0][r[1]]=r[2].replace(x," ").trim();return l[0]})(e);y[b]=o(c?{["@keyframes "+b]:r}:r,n?"":"."+b)}let w=n&&y.g?y.g:null;return n&&(y.g=y[b]),d=y[b],w?r.data=r.data.replace(w,d):-1===r.data.indexOf(d)&&(r.data=l?d+r.data:r.data+d),b},p=(e,r,n)=>e.reduce((e,l,c)=>{let d=r[c];if(d&&d.call){let e=d(n),r=e&&e.props&&e.props.className||/^go/.test(e)&&e;d=r?"."+r:e&&"object"==typeof e?e.props?"":o(e,""):!1===e?"":e}return e+l+(null==d?"":d)},"");function u(e){let r=this||{},n=e.call?e(r.p):e;return i(n.unshift?n.raw?p(n,[].slice.call(arguments,1),r.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(r.p):n),{}):n,t(r.target),r.g,r.o,r.k)}u.bind({g:1});let b,w,_,E=u.bind({k:1});function m(e,r,n,l){o.p=r,b=e,w=n,_=l}function j(e,r){let n=this||{};return function(){let l=arguments;function a(c,d){let f=Object.assign({},c),h=f.className||a.className;n.p=Object.assign({theme:w&&w()},f),n.o=/ *go\d+/.test(h),f.className=u.apply(n,l)+(h?" "+h:""),r&&(f.ref=d);let g=e;return e[0]&&(g=f.as||e,delete f.as),_&&g[0]&&_(f),b(g,f)}return r?r(a):a}}var W=e=>"function"==typeof e,T=(e,r)=>W(e)?e(r):e,k=(l=0,()=>(++l).toString()),dist_b=()=>{if(void 0===c&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");c=!e||e.matches}return c},N=new Map,$=e=>{if(N.has(e))return;let r=setTimeout(()=>{N.delete(e),dist_u({type:4,toastId:e})},1e3);N.set(e,r)},J=e=>{let r=N.get(e);r&&clearTimeout(r)},v=(e,r)=>{switch(r.type){case 0:return{...e,toasts:[r.toast,...e.toasts].slice(0,20)};case 1:return r.toast.id&&J(r.toast.id),{...e,toasts:e.toasts.map(e=>e.id===r.toast.id?{...e,...r.toast}:e)};case 2:let{toast:n}=r;return e.toasts.find(e=>e.id===n.id)?v(e,{type:1,toast:n}):v(e,{type:0,toast:n});case 3:let{toastId:l}=r;return l?$(l):e.toasts.forEach(e=>{$(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===l||void 0===l?{...e,visible:!1}:e)};case 4:return void 0===r.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==r.toastId)};case 5:return{...e,pausedAt:r.time};case 6:let c=r.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+c}))}}},C=[],P={toasts:[],pausedAt:void 0},dist_u=e=>{P=v(P,e),C.forEach(e=>{e(P)})},S={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},I=(e={})=>{let[r,n]=(0,d.useState)(P);(0,d.useEffect)(()=>(C.push(n),()=>{let e=C.indexOf(n);e>-1&&C.splice(e,1)}),[r]);let l=r.toasts.map(r=>{var n,l;return{...e,...e[r.type],...r,duration:r.duration||(null==(n=e[r.type])?void 0:n.duration)||(null==e?void 0:e.duration)||S[r.type],style:{...e.style,...null==(l=e[r.type])?void 0:l.style,...r.style}}});return{...r,toasts:l}},G=(e,r="blank",n)=>({createdAt:Date.now(),visible:!0,type:r,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||k()}),dist_h=e=>(r,n)=>{let l=G(r,e,n);return dist_u({type:2,toast:l}),l.id},dist_n=(e,r)=>dist_h("blank")(e,r);dist_n.error=dist_h("error"),dist_n.success=dist_h("success"),dist_n.loading=dist_h("loading"),dist_n.custom=dist_h("custom"),dist_n.dismiss=e=>{dist_u({type:3,toastId:e})},dist_n.remove=e=>dist_u({type:4,toastId:e}),dist_n.promise=(e,r,n)=>{let l=dist_n.loading(r.loading,{...n,...null==n?void 0:n.loading});return e.then(e=>(dist_n.success(T(r.success,e),{id:l,...n,...null==n?void 0:n.success}),e)).catch(e=>{dist_n.error(T(r.error,e),{id:l,...n,...null==n?void 0:n.error})}),e};var Z=(e,r)=>{dist_u({type:1,toast:{id:e,height:r}})},ee=()=>{dist_u({type:5,time:Date.now()})},D=e=>{let{toasts:r,pausedAt:n}=I(e);(0,d.useEffect)(()=>{if(n)return;let e=Date.now(),l=r.map(r=>{if(r.duration===1/0)return;let n=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(n<0){r.visible&&dist_n.dismiss(r.id);return}return setTimeout(()=>dist_n.dismiss(r.id),n)});return()=>{l.forEach(e=>e&&clearTimeout(e))}},[r,n]);let l=(0,d.useCallback)(()=>{n&&dist_u({type:6,time:Date.now()})},[n]),c=(0,d.useCallback)((e,n)=>{let{reverseOrder:l=!1,gutter:c=8,defaultPosition:d}=n||{},f=r.filter(r=>(r.position||d)===(e.position||d)&&r.height),h=f.findIndex(r=>r.id===e.id),g=f.filter((e,r)=>r<h&&e.visible).length;return f.filter(e=>e.visible).slice(...l?[g+1]:[0,g]).reduce((e,r)=>e+(r.height||0)+c,0)},[r]);return{toasts:r,handlers:{updateHeight:Z,startPause:ee,endPause:l,calculateOffset:c}}},O=E`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,A=E`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,z=E`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,R=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${O} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${A} 0.15s ease-out forwards;
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
    animation: ${z} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,U=E`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,L=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${U} 1s linear infinite;
`,B=E`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,F=E`
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
}`,H=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${B} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${F} 0.2s ease-out forwards;
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
`,V=j("div")`
  position: absolute;
`,Y=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,K=E`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Q=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${K} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,M=({toast:e})=>{let{icon:r,type:n,iconTheme:l}=e;return void 0!==r?"string"==typeof r?d.createElement(Q,null,r):r:"blank"===n?null:d.createElement(Y,null,d.createElement(L,{...l}),"loading"!==n&&d.createElement(V,null,"error"===n?d.createElement(R,{...l}):d.createElement(H,{...l})))},ye=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ge=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,X=j("div")`
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
`,et=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ae=(e,r)=>{let n=e.includes("top")?1:-1,[l,c]=dist_b()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ye(n),ge(n)];return{animation:r?`${E(l)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${E(c)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},er=d.memo(({toast:e,position:r,style:n,children:l})=>{let c=e.height?Ae(e.position||r||"top-center",e.visible):{opacity:0},f=d.createElement(M,{toast:e}),h=d.createElement(et,{...e.ariaProps},T(e.message,e));return d.createElement(X,{className:e.className,style:{...c,...n,...e.style}},"function"==typeof l?l({icon:f,message:h}):d.createElement(d.Fragment,null,f,h))});m(d.createElement);var Ee=({id:e,className:r,style:n,onHeightUpdate:l,children:c})=>{let f=d.useCallback(r=>{if(r){let i=()=>{l(e,r.getBoundingClientRect().height)};i(),new MutationObserver(i).observe(r,{subtree:!0,childList:!0,characterData:!0})}},[e,l]);return d.createElement("div",{ref:f,className:r,style:n},c)},Re=(e,r)=>{let n=e.includes("top"),l=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:dist_b()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${r*(n?1:-1)}px)`,...n?{top:0}:{bottom:0},...l}},ea=u`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Ie=({reverseOrder:e,position:r="top-center",toastOptions:n,gutter:l,children:c,containerStyle:f,containerClassName:h})=>{let{toasts:g,handlers:x}=D(n);return d.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...f},className:h,onMouseEnter:x.startPause,onMouseLeave:x.endPause},g.map(n=>{let f=n.position||r,h=Re(f,x.calculateOffset(n,{reverseOrder:e,gutter:l,defaultPosition:r}));return d.createElement(Ee,{id:n.id,key:n.id,onHeightUpdate:x.updateHeight,className:n.visible?ea:"",style:h},"custom"===n.type?T(n.message,n):c?c(n):d.createElement(er,{toast:n,position:f}))}))},es=dist_n}},function(e){e.O(0,[971,472,744],function(){return e(e.s=8121)}),_N_E=e.O()}]);