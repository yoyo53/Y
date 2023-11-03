(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[178],{9373:function(e,r,n){Promise.resolve().then(n.bind(n,6560))},6560:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return Profile}});var l=n(7437),d=n(2265),c=n(4033),f=n(1179),g=n(5925);function Profile(){let[e,r]=(0,d.useState)(""),[n,h]=(0,d.useState)(""),[x,y]=(0,d.useState)(""),[b,w]=(0,d.useState)(""),[N,k]=(0,d.useState)(!1),[_,E]=(0,d.useState)(!1),[S,C]=(0,d.useState)(!0),[O,A]=(0,d.useState)(0),P=(0,c.useRouter)();(0,d.useEffect)(()=>{(async()=>{await (0,f.redirectUnautorized)(P,g.default);let e=window.localStorage.getItem("token");try{let l=await fetch("".concat("https://y-back.fly.dev","/user/profile"),{headers:{Authorization:"Bearer ".concat(e)}});if(l.ok){var n;let e=await l.json();r(e.user.email),h(e.user.username),y(e.user.about),w(null!==(n=e.user.phone)&&void 0!==n?n:""),k(e.user.mess_notif),E(e.user.conv_notif),C(e.user.offer_notif),A(e.user.phone_notif)}}catch(e){}})()},[]);let saveProfile=async e=>{e.preventDefault();let r=window.localStorage.getItem("token");try{(await fetch("".concat("https://y-back.fly.dev","/user/update"),{method:"PUT",body:JSON.stringify({username:n,about:x,phone:b,mess_notif:N,conv_notif:_,offer_notif:S,phone_notif:b?O:0}),headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(r)}})).ok?g.default.success("Modifications saved"):g.default.error("Error: failed to update profile")}catch(e){g.default.error("Error: Internal server error, try again later")}},deleteAccount=async()=>{let e=window.localStorage.getItem("token");try{(await fetch("".concat("https://y-back.fly.dev","/user/delete"),{method:"DELETE",headers:{Authorization:"Bearer ".concat(e)}})).ok?(g.default.success("Account deleted successfully"),window.localStorage.removeItem("token"),P.push("/")):g.default.error("Error: account deletion failed")}catch(e){g.default.error("Error: Internal server error, try again later")}};return(0,l.jsxs)("form",{className:"flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8",method:"POST",onSubmit:saveProfile,children:[(0,l.jsxs)("div",{className:"space-y-12",children:[(0,l.jsxs)("div",{className:"border-b border-gray-900/10 pb-12",children:[(0,l.jsx)("h2",{className:"text-base font-semibold leading-7 text-gray-900",children:"Profile"}),(0,l.jsx)("p",{className:"mt-1 text-sm leading-6 text-gray-600",children:"Those information will be displayed publicly so be careful about what you share."}),(0,l.jsxs)("div",{className:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6",children:[(0,l.jsxs)("div",{className:"sm:col-span-4",children:[(0,l.jsx)("label",{htmlFor:"username",className:"block text-sm font-medium leading-6 text-gray-900",children:"Username"}),(0,l.jsx)("div",{className:"mt-2",children:(0,l.jsx)("input",{type:"text",name:"username",id:"username",autoComplete:"username",value:n,onChange:e=>h(e.target.value),required:!0,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 sm:max-w-md"})})]}),(0,l.jsxs)("div",{className:"col-span-full",children:[(0,l.jsx)("label",{htmlFor:"about",className:"block text-sm font-medium leading-6 text-gray-900",children:"About"}),(0,l.jsx)("div",{className:"mt-2",children:(0,l.jsx)("textarea",{id:"about",name:"about",rows:3,value:x,onChange:e=>y(e.target.value),className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})}),(0,l.jsx)("p",{className:"mt-3 text-sm leading-6 text-gray-600",children:"What do you want your friends to know about you?"})]})]})]}),(0,l.jsxs)("div",{className:"border-b border-gray-900/10 pb-12",children:[(0,l.jsx)("h2",{className:"text-base font-semibold leading-7 text-gray-900",children:"Contact Information"}),(0,l.jsx)("p",{className:"mt-1 text-sm leading-6 text-gray-600",children:"Safeguard your account with ease and manage your essential contact details."}),(0,l.jsxs)("div",{className:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6",children:[(0,l.jsxs)("div",{className:"sm:col-span-4",children:[(0,l.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium leading-6 text-gray-900",children:"Email address"}),(0,l.jsx)("div",{className:"mt-2",children:(0,l.jsx)("input",{id:"email",name:"email",type:"email",value:e,disabled:!0,readOnly:!0,className:"block w-full bg-gray-100 cursor-not-allowed rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),(0,l.jsxs)("div",{className:"sm:col-span-4",children:[(0,l.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium leading-6 text-gray-900",children:"Phone Number"}),(0,l.jsx)("div",{className:"mt-2",children:(0,l.jsx)("input",{id:"phone",name:"phone",type:"tel",autoComplete:"phone",value:b,onChange:e=>w(e.target.value),className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]})]})]}),(0,l.jsxs)("div",{className:"border-b border-gray-900/10 pb-12",children:[(0,l.jsx)("h2",{className:"text-base font-semibold leading-7 text-gray-900",children:"Notifications"}),(0,l.jsx)("p",{className:"mt-1 text-sm leading-6 text-gray-600",children:"We'll always let you know about important changes, but you pick what else you want to hear about."}),(0,l.jsxs)("div",{className:"mt-10 space-y-10",children:[(0,l.jsxs)("fieldset",{children:[(0,l.jsx)("legend",{className:"text-sm font-semibold leading-6 text-gray-900",children:"By Email"}),(0,l.jsxs)("div",{className:"mt-6 space-y-6",children:[(0,l.jsxs)("div",{className:"relative flex gap-x-3",children:[(0,l.jsx)("div",{className:"flex h-6 items-center",children:(0,l.jsx)("input",{id:"messages",name:"messages",type:"checkbox",checked:N,onChange:()=>k(!N),className:"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"})}),(0,l.jsxs)("div",{className:"text-sm leading-6",children:[(0,l.jsx)("label",{htmlFor:"messages",className:"font-medium text-gray-900",children:"Messages"}),(0,l.jsx)("p",{className:"text-gray-500",children:"Get notified when you receive a message in one of your conversations."})]})]}),(0,l.jsxs)("div",{className:"relative flex gap-x-3",children:[(0,l.jsx)("div",{className:"flex h-6 items-center",children:(0,l.jsx)("input",{id:"conversations",name:"conversations",type:"checkbox",checked:_,onChange:()=>E(!_),className:"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"})}),(0,l.jsxs)("div",{className:"text-sm leading-6",children:[(0,l.jsx)("label",{htmlFor:"conversations",className:"font-medium text-gray-900",children:"Conversations"}),(0,l.jsx)("p",{className:"text-gray-500",children:"Get notified when someones starts a new discussion with you."})]})]}),(0,l.jsxs)("div",{className:"relative flex gap-x-3",children:[(0,l.jsx)("div",{className:"flex h-6 items-center",children:(0,l.jsx)("input",{id:"offers",name:"offers",type:"checkbox",checked:S,onChange:()=>C(!S),className:"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"})}),(0,l.jsxs)("div",{className:"text-sm leading-6",children:[(0,l.jsx)("label",{htmlFor:"offers",className:"font-medium text-gray-900",children:"Offers"}),(0,l.jsx)("p",{className:"text-gray-500",children:"Receive special offers from our partners."})]})]})]})]}),(0,l.jsxs)("fieldset",{children:[(0,l.jsx)("legend",{className:"text-sm font-semibold leading-6 text-gray-900",children:"Push Notifications"}),(0,l.jsx)("p",{className:"mt-1 text-sm leading-6 text-gray-600",children:"These are delivered via SMS to your mobile phone."}),(0,l.jsxs)("div",{className:"mt-6 space-y-6",children:[(0,l.jsxs)("div",{className:"flex items-center gap-x-3",children:[(0,l.jsx)("input",{id:"push-everything",name:"push-notifications",type:"radio",value:"2",checked:2==O&&b,disabled:!b,onChange:e=>A(e.target.value),className:"h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 disabled:cursor-not-allowed"}),(0,l.jsx)("label",{htmlFor:"push-everything",className:"block text-sm font-medium leading-6 text-gray-900",children:"Everything"})]}),(0,l.jsxs)("div",{className:"flex items-center gap-x-3",children:[(0,l.jsx)("input",{id:"push-email",name:"push-notifications",type:"radio",value:"1",checked:1==O&&b,disabled:!b,onChange:e=>A(e.target.value),className:"h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 disabled:cursor-not-allowed"}),(0,l.jsx)("label",{htmlFor:"push-email",className:"block text-sm font-medium leading-6 text-gray-900",children:"Same as email"})]}),(0,l.jsxs)("div",{className:"flex items-center gap-x-3",children:[(0,l.jsx)("input",{id:"push-nothing",name:"push-notifications",type:"radio",value:"0",checked:0==O||!b,disabled:!b,onChange:e=>A(e.target.value),className:"h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 disabled:cursor-not-allowed"}),(0,l.jsx)("label",{htmlFor:"push-nothing",className:"block text-sm font-medium leading-6 text-gray-900",children:"No push notifications"})]})]})]})]})]})]}),(0,l.jsxs)("div",{className:"mt-6 flex items-center justify-end gap-x-6",children:[(0,l.jsx)("button",{type:"button",onClick:deleteAccount,className:"mr-auto rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600",children:"Delete Account"}),(0,l.jsx)("button",{type:"button",className:"text-sm font-semibold leading-6 text-gray-900",onClick:P.back,children:"Cancel"}),(0,l.jsx)("button",{type:"submit",className:"rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Save"})]})]})}},1179:function(e){"use strict";async function redirectUnautorized(e,r){let n=window.localStorage.getItem("token");if(null==n)e.push("/login");else try{(await fetch("".concat("https://y-back.fly.dev","/auth/verifyToken"),{headers:{Authorization:"Bearer ".concat(n)}})).ok||(r.error("Error: you need to be connected to see this page"),window.localStorage.removeItem("token"),e.push("/login"))}catch(n){r.error("Error: Internal server error, try again later"),e.push("/")}}async function redirectLogedIn(e,r){let n=window.localStorage.getItem("token");if(null!=n)try{(await fetch("".concat("https://y-back.fly.dev","/auth/verifyToken"),{headers:{Authorization:"Bearer ".concat(n)}})).ok?(r.success("Already connected"),e.push("/")):window.localStorage.removeItem("token")}catch(e){}}e.exports={redirectUnautorized,redirectLogedIn}},622:function(e,r,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=n(2265),d=Symbol.for("react.element"),c=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,g=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function q(e,r,n){var l,c={},x=null,y=null;for(l in void 0!==n&&(x=""+n),void 0!==r.key&&(x=""+r.key),void 0!==r.ref&&(y=r.ref),r)f.call(r,l)&&!h.hasOwnProperty(l)&&(c[l]=r[l]);if(e&&e.defaultProps)for(l in r=e.defaultProps)void 0===c[l]&&(c[l]=r[l]);return{$$typeof:d,type:e,key:x,ref:y,props:c,_owner:g.current}}r.Fragment=c,r.jsx=q,r.jsxs=q},7437:function(e,r,n){"use strict";e.exports=n(622)},4033:function(e,r,n){e.exports=n(94)},5925:function(e,r,n){"use strict";let l,d;n.r(r),n.d(r,{CheckmarkIcon:function(){return H},ErrorIcon:function(){return F},LoaderIcon:function(){return R},ToastBar:function(){return ea},ToastIcon:function(){return M},Toaster:function(){return Ie},default:function(){return er},resolveValue:function(){return T},toast:function(){return dist_n},useToaster:function(){return D},useToasterStore:function(){return I}});var c=n(2265);let f={data:""},t=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||f,g=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,h=/\/\*[^]*?\*\/|  +/g,x=/\n+/g,o=(e,r)=>{let n="",l="",d="";for(let c in e){let f=e[c];"@"==c[0]?"i"==c[1]?n=c+" "+f+";":l+="f"==c[1]?o(f,c):c+"{"+o(f,"k"==c[1]?"":r)+"}":"object"==typeof f?l+=o(f,r?r.replace(/([^,])+/g,e=>c.replace(/(^:.*)|([^,])+/g,r=>/&/.test(r)?r.replace(/&/g,e):e?e+" "+r:r)):c):null!=f&&(c=/^--/.test(c)?c:c.replace(/[A-Z]/g,"-$&").toLowerCase(),d+=o.p?o.p(c,f):c+":"+f+";")}return n+(r&&d?r+"{"+d+"}":d)+l},y={},s=e=>{if("object"==typeof e){let r="";for(let n in e)r+=n+s(e[n]);return r}return e},i=(e,r,n,l,d)=>{var c;let f=s(e),b=y[f]||(y[f]=(e=>{let r=0,n=11;for(;r<e.length;)n=101*n+e.charCodeAt(r++)>>>0;return"go"+n})(f));if(!y[b]){let r=f!==e?e:(e=>{let r,n,l=[{}];for(;r=g.exec(e.replace(h,""));)r[4]?l.shift():r[3]?(n=r[3].replace(x," ").trim(),l.unshift(l[0][n]=l[0][n]||{})):l[0][r[1]]=r[2].replace(x," ").trim();return l[0]})(e);y[b]=o(d?{["@keyframes "+b]:r}:r,n?"":"."+b)}let w=n&&y.g?y.g:null;return n&&(y.g=y[b]),c=y[b],w?r.data=r.data.replace(w,c):-1===r.data.indexOf(c)&&(r.data=l?c+r.data:r.data+c),b},p=(e,r,n)=>e.reduce((e,l,d)=>{let c=r[d];if(c&&c.call){let e=c(n),r=e&&e.props&&e.props.className||/^go/.test(e)&&e;c=r?"."+r:e&&"object"==typeof e?e.props?"":o(e,""):!1===e?"":e}return e+l+(null==c?"":c)},"");function u(e){let r=this||{},n=e.call?e(r.p):e;return i(n.unshift?n.raw?p(n,[].slice.call(arguments,1),r.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(r.p):n),{}):n,t(r.target),r.g,r.o,r.k)}u.bind({g:1});let b,w,N,k=u.bind({k:1});function m(e,r,n,l){o.p=r,b=e,w=n,N=l}function j(e,r){let n=this||{};return function(){let l=arguments;function a(d,c){let f=Object.assign({},d),g=f.className||a.className;n.p=Object.assign({theme:w&&w()},f),n.o=/ *go\d+/.test(g),f.className=u.apply(n,l)+(g?" "+g:""),r&&(f.ref=c);let h=e;return e[0]&&(h=f.as||e,delete f.as),N&&h[0]&&N(f),b(h,f)}return r?r(a):a}}var W=e=>"function"==typeof e,T=(e,r)=>W(e)?e(r):e,_=(l=0,()=>(++l).toString()),dist_b=()=>{if(void 0===d&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");d=!e||e.matches}return d},E=new Map,$=e=>{if(E.has(e))return;let r=setTimeout(()=>{E.delete(e),dist_u({type:4,toastId:e})},1e3);E.set(e,r)},J=e=>{let r=E.get(e);r&&clearTimeout(r)},v=(e,r)=>{switch(r.type){case 0:return{...e,toasts:[r.toast,...e.toasts].slice(0,20)};case 1:return r.toast.id&&J(r.toast.id),{...e,toasts:e.toasts.map(e=>e.id===r.toast.id?{...e,...r.toast}:e)};case 2:let{toast:n}=r;return e.toasts.find(e=>e.id===n.id)?v(e,{type:1,toast:n}):v(e,{type:0,toast:n});case 3:let{toastId:l}=r;return l?$(l):e.toasts.forEach(e=>{$(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===l||void 0===l?{...e,visible:!1}:e)};case 4:return void 0===r.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==r.toastId)};case 5:return{...e,pausedAt:r.time};case 6:let d=r.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+d}))}}},S=[],C={toasts:[],pausedAt:void 0},dist_u=e=>{C=v(C,e),S.forEach(e=>{e(C)})},O={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},I=(e={})=>{let[r,n]=(0,c.useState)(C);(0,c.useEffect)(()=>(S.push(n),()=>{let e=S.indexOf(n);e>-1&&S.splice(e,1)}),[r]);let l=r.toasts.map(r=>{var n,l;return{...e,...e[r.type],...r,duration:r.duration||(null==(n=e[r.type])?void 0:n.duration)||(null==e?void 0:e.duration)||O[r.type],style:{...e.style,...null==(l=e[r.type])?void 0:l.style,...r.style}}});return{...r,toasts:l}},G=(e,r="blank",n)=>({createdAt:Date.now(),visible:!0,type:r,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||_()}),dist_h=e=>(r,n)=>{let l=G(r,e,n);return dist_u({type:2,toast:l}),l.id},dist_n=(e,r)=>dist_h("blank")(e,r);dist_n.error=dist_h("error"),dist_n.success=dist_h("success"),dist_n.loading=dist_h("loading"),dist_n.custom=dist_h("custom"),dist_n.dismiss=e=>{dist_u({type:3,toastId:e})},dist_n.remove=e=>dist_u({type:4,toastId:e}),dist_n.promise=(e,r,n)=>{let l=dist_n.loading(r.loading,{...n,...null==n?void 0:n.loading});return e.then(e=>(dist_n.success(T(r.success,e),{id:l,...n,...null==n?void 0:n.success}),e)).catch(e=>{dist_n.error(T(r.error,e),{id:l,...n,...null==n?void 0:n.error})}),e};var Z=(e,r)=>{dist_u({type:1,toast:{id:e,height:r}})},ee=()=>{dist_u({type:5,time:Date.now()})},D=e=>{let{toasts:r,pausedAt:n}=I(e);(0,c.useEffect)(()=>{if(n)return;let e=Date.now(),l=r.map(r=>{if(r.duration===1/0)return;let n=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(n<0){r.visible&&dist_n.dismiss(r.id);return}return setTimeout(()=>dist_n.dismiss(r.id),n)});return()=>{l.forEach(e=>e&&clearTimeout(e))}},[r,n]);let l=(0,c.useCallback)(()=>{n&&dist_u({type:6,time:Date.now()})},[n]),d=(0,c.useCallback)((e,n)=>{let{reverseOrder:l=!1,gutter:d=8,defaultPosition:c}=n||{},f=r.filter(r=>(r.position||c)===(e.position||c)&&r.height),g=f.findIndex(r=>r.id===e.id),h=f.filter((e,r)=>r<g&&e.visible).length;return f.filter(e=>e.visible).slice(...l?[h+1]:[0,h]).reduce((e,r)=>e+(r.height||0)+d,0)},[r]);return{toasts:r,handlers:{updateHeight:Z,startPause:ee,endPause:l,calculateOffset:d}}},A=k`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,P=k`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,z=k`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,F=j("div")`
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
    animation: ${P} 0.15s ease-out forwards;
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
`,L=k`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,R=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${L} 1s linear infinite;
`,B=k`
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
`,Y=j("div")`
  position: absolute;
`,V=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,K=k`
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
`,M=({toast:e})=>{let{icon:r,type:n,iconTheme:l}=e;return void 0!==r?"string"==typeof r?c.createElement(Q,null,r):r:"blank"===n?null:c.createElement(V,null,c.createElement(R,{...l}),"loading"!==n&&c.createElement(Y,null,"error"===n?c.createElement(F,{...l}):c.createElement(H,{...l})))},ye=e=>`
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
`,Ae=(e,r)=>{let n=e.includes("top")?1:-1,[l,d]=dist_b()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ye(n),ge(n)];return{animation:r?`${k(l)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${k(d)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ea=c.memo(({toast:e,position:r,style:n,children:l})=>{let d=e.height?Ae(e.position||r||"top-center",e.visible):{opacity:0},f=c.createElement(M,{toast:e}),g=c.createElement(et,{...e.ariaProps},T(e.message,e));return c.createElement(X,{className:e.className,style:{...d,...n,...e.style}},"function"==typeof l?l({icon:f,message:g}):c.createElement(c.Fragment,null,f,g))});m(c.createElement);var Ee=({id:e,className:r,style:n,onHeightUpdate:l,children:d})=>{let f=c.useCallback(r=>{if(r){let i=()=>{l(e,r.getBoundingClientRect().height)};i(),new MutationObserver(i).observe(r,{subtree:!0,childList:!0,characterData:!0})}},[e,l]);return c.createElement("div",{ref:f,className:r,style:n},d)},Re=(e,r)=>{let n=e.includes("top"),l=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:dist_b()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${r*(n?1:-1)}px)`,...n?{top:0}:{bottom:0},...l}},es=u`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Ie=({reverseOrder:e,position:r="top-center",toastOptions:n,gutter:l,children:d,containerStyle:f,containerClassName:g})=>{let{toasts:h,handlers:x}=D(n);return c.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...f},className:g,onMouseEnter:x.startPause,onMouseLeave:x.endPause},h.map(n=>{let f=n.position||r,g=Re(f,x.calculateOffset(n,{reverseOrder:e,gutter:l,defaultPosition:r}));return c.createElement(Ee,{id:n.id,key:n.id,onHeightUpdate:x.updateHeight,className:n.visible?es:"",style:g},"custom"===n.type?T(n.message,n):d?d(n):c.createElement(ea,{toast:n,position:f}))}))},er=dist_n}},function(e){e.O(0,[971,472,744],function(){return e(e.s=9373)}),_N_E=e.O()}]);