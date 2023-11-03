(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{5624:function(e,r,n){Promise.resolve().then(n.bind(n,2220))},2220:function(e,r,n){"use strict";let l;n.r(r),n.d(r,{Conversations:function(){return Conversations},default:function(){return x}});var c=n(7437),d=n(2265),f=n(5925),NewConv=function(e){let{token:r,refreshConversations:n}=e,[l,h]=(0,d.useState)("");return(0,c.jsxs)("form",{method:"POST",onSubmit:e=>{e.preventDefault(),fetch("".concat("https://y-back.fly.dev","/conversations/newconversation"),{method:"POST",body:JSON.stringify({email:l}),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)}}).then(e=>{if(console.log(e),e.ok)return n(r),e.json();throw Error("Erreur lors de la requ\xeate.")}).then(e=>{}).catch(e=>{f.default.error("Error: invalid email"),console.error("Erreur :",e)}),h("")},children:[(0,c.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium leading-6 text-gray-900",children:"Nouvel conversation"}),(0,c.jsxs)("div",{className:"flex w-full",children:[(0,c.jsx)("input",{id:"email",name:"email",type:"email",autoComplete:"email",value:l,onChange:e=>h(e.target.value),required:!0,className:"w-10 flex-grow rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",placeholder:"email"}),(0,c.jsxs)("button",{type:"submit",className:"ml-2 inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-600 hover:bg-blue-400 focus:outline-none",children:[(0,c.jsx)("span",{className:"font-bold",children:"New"}),(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"h-6 w-6 ml-2 transform rotate-90",children:(0,c.jsx)("path",{d:"M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"})})]})]})]})},h=n(4033),g=n(1396),y=n.n(g),b=n(1179);function Conversations(){let[e,r]=(0,d.useState)([]),n=(0,h.useRouter)();function getRandomProfilePicture(e){let r=e.split("").reduce((e,r)=>(e=(e<<5)-e+r.charCodeAt(0))&e,0);return"https://picsum.photos/seed/".concat(r,"/200")}function refreshConversations(e){fetch("".concat("https://y-back.fly.dev","/conversations/getconversations"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(e=>e.json()).then(e=>{console.log("R\xe9ponse re\xe7ue:",e),e.error||r(e.map(e=>({other_username:e.other_username,creationdate:e.created_at.split("T")[0],id:e.id})))}).catch(e=>{f.default.error("Error: failed to retrieve conversations"),console.error("Une erreur s'est produite lors de la r\xe9cup\xe9ration des conversations:",e)})}return(0,d.useEffect)(()=>{(0,b.redirectUnautorized)(n,f.default),refreshConversations(l=window.localStorage.getItem("token"))},[]),(0,c.jsx)("div",{className:"h-screen",children:(0,c.jsxs)("div",{className:"m-10 rounded-lg overflow-hidden",children:[(0,c.jsx)(NewConv,{token:l,refreshConversations:()=>{refreshConversations(l)}}),(0,c.jsx)("ul",{className:"bg-gray-100 shadow-md divide-y divide-gray-200 mt-4 rounded-lg",children:e&&e.map(e=>(0,c.jsx)("li",{className:"p-8 hover:bg-gray-50",children:(0,c.jsx)(y(),{href:"/conversations/chatpage?id=".concat(e.id),className:"block cursor-pointer",children:(0,c.jsx)("div",{className:"flex justify-between items-center",children:(0,c.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,c.jsx)("div",{className:"w-12 h-12 rounded-full bg-gray-300",children:(0,c.jsx)("img",{src:getRandomProfilePicture(e.other_username),alt:"Profile Picture",className:"w-full h-full object-cover rounded-full"})}),(0,c.jsxs)("div",{children:[(0,c.jsx)("p",{className:"text-xl font-semibold",children:e.other_username}),(0,c.jsxs)("p",{className:"text-gray-500 text-sm sm:text-base",children:["Created on ",e.creationdate]})]})]})})})},e.id))})]})})}var x=Conversations},1179:function(e){"use strict";async function redirectUnautorized(e,r){let n=window.localStorage.getItem("token");if(null==n)e.push("/login");else try{(await fetch("".concat("https://y-back.fly.dev","/auth/verifyToken"),{headers:{Authorization:"Bearer ".concat(n)}})).ok||(r.error("Error: you need to be connected to see this page"),window.localStorage.removeItem("token"),e.push("/login"))}catch(n){r.error("Error: Internal server error, try again later"),e.push("/")}}async function redirectLogedIn(e,r){let n=window.localStorage.getItem("token");if(null!=n)try{(await fetch("".concat("https://y-back.fly.dev","/auth/verifyToken"),{headers:{Authorization:"Bearer ".concat(n)}})).ok?(r.success("Already connected"),e.push("/")):window.localStorage.removeItem("token")}catch(e){}}e.exports={redirectUnautorized,redirectLogedIn}},4033:function(e,r,n){e.exports=n(94)},5925:function(e,r,n){"use strict";let l,c;n.r(r),n.d(r,{CheckmarkIcon:function(){return H},ErrorIcon:function(){return B},LoaderIcon:function(){return R},ToastBar:function(){return et},ToastIcon:function(){return M},Toaster:function(){return Ie},default:function(){return eo},resolveValue:function(){return T},toast:function(){return dist_n},useToaster:function(){return D},useToasterStore:function(){return I}});var d=n(2265);let f={data:""},t=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||f,h=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,g=/\/\*[^]*?\*\/|  +/g,y=/\n+/g,o=(e,r)=>{let n="",l="",c="";for(let d in e){let f=e[d];"@"==d[0]?"i"==d[1]?n=d+" "+f+";":l+="f"==d[1]?o(f,d):d+"{"+o(f,"k"==d[1]?"":r)+"}":"object"==typeof f?l+=o(f,r?r.replace(/([^,])+/g,e=>d.replace(/(^:.*)|([^,])+/g,r=>/&/.test(r)?r.replace(/&/g,e):e?e+" "+r:r)):d):null!=f&&(d=/^--/.test(d)?d:d.replace(/[A-Z]/g,"-$&").toLowerCase(),c+=o.p?o.p(d,f):d+":"+f+";")}return n+(r&&c?r+"{"+c+"}":c)+l},b={},s=e=>{if("object"==typeof e){let r="";for(let n in e)r+=n+s(e[n]);return r}return e},i=(e,r,n,l,c)=>{var d;let f=s(e),x=b[f]||(b[f]=(e=>{let r=0,n=11;for(;r<e.length;)n=101*n+e.charCodeAt(r++)>>>0;return"go"+n})(f));if(!b[x]){let r=f!==e?e:(e=>{let r,n,l=[{}];for(;r=h.exec(e.replace(g,""));)r[4]?l.shift():r[3]?(n=r[3].replace(y," ").trim(),l.unshift(l[0][n]=l[0][n]||{})):l[0][r[1]]=r[2].replace(y," ").trim();return l[0]})(e);b[x]=o(c?{["@keyframes "+x]:r}:r,n?"":"."+x)}let w=n&&b.g?b.g:null;return n&&(b.g=b[x]),d=b[x],w?r.data=r.data.replace(w,d):-1===r.data.indexOf(d)&&(r.data=l?d+r.data:r.data+d),x},p=(e,r,n)=>e.reduce((e,l,c)=>{let d=r[c];if(d&&d.call){let e=d(n),r=e&&e.props&&e.props.className||/^go/.test(e)&&e;d=r?"."+r:e&&"object"==typeof e?e.props?"":o(e,""):!1===e?"":e}return e+l+(null==d?"":d)},"");function u(e){let r=this||{},n=e.call?e(r.p):e;return i(n.unshift?n.raw?p(n,[].slice.call(arguments,1),r.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(r.p):n),{}):n,t(r.target),r.g,r.o,r.k)}u.bind({g:1});let x,w,_,k=u.bind({k:1});function m(e,r,n,l){o.p=r,x=e,w=n,_=l}function j(e,r){let n=this||{};return function(){let l=arguments;function a(c,d){let f=Object.assign({},c),h=f.className||a.className;n.p=Object.assign({theme:w&&w()},f),n.o=/ *go\d+/.test(h),f.className=u.apply(n,l)+(h?" "+h:""),r&&(f.ref=d);let g=e;return e[0]&&(g=f.as||e,delete f.as),_&&g[0]&&_(f),x(g,f)}return r?r(a):a}}var W=e=>"function"==typeof e,T=(e,r)=>W(e)?e(r):e,E=(l=0,()=>(++l).toString()),dist_b=()=>{if(void 0===c&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");c=!e||e.matches}return c},N=new Map,$=e=>{if(N.has(e))return;let r=setTimeout(()=>{N.delete(e),dist_u({type:4,toastId:e})},1e3);N.set(e,r)},J=e=>{let r=N.get(e);r&&clearTimeout(r)},v=(e,r)=>{switch(r.type){case 0:return{...e,toasts:[r.toast,...e.toasts].slice(0,20)};case 1:return r.toast.id&&J(r.toast.id),{...e,toasts:e.toasts.map(e=>e.id===r.toast.id?{...e,...r.toast}:e)};case 2:let{toast:n}=r;return e.toasts.find(e=>e.id===n.id)?v(e,{type:1,toast:n}):v(e,{type:0,toast:n});case 3:let{toastId:l}=r;return l?$(l):e.toasts.forEach(e=>{$(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===l||void 0===l?{...e,visible:!1}:e)};case 4:return void 0===r.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==r.toastId)};case 5:return{...e,pausedAt:r.time};case 6:let c=r.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+c}))}}},C=[],z={toasts:[],pausedAt:void 0},dist_u=e=>{z=v(z,e),C.forEach(e=>{e(z)})},A={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},I=(e={})=>{let[r,n]=(0,d.useState)(z);(0,d.useEffect)(()=>(C.push(n),()=>{let e=C.indexOf(n);e>-1&&C.splice(e,1)}),[r]);let l=r.toasts.map(r=>{var n,l;return{...e,...e[r.type],...r,duration:r.duration||(null==(n=e[r.type])?void 0:n.duration)||(null==e?void 0:e.duration)||A[r.type],style:{...e.style,...null==(l=e[r.type])?void 0:l.style,...r.style}}});return{...r,toasts:l}},G=(e,r="blank",n)=>({createdAt:Date.now(),visible:!0,type:r,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||E()}),dist_h=e=>(r,n)=>{let l=G(r,e,n);return dist_u({type:2,toast:l}),l.id},dist_n=(e,r)=>dist_h("blank")(e,r);dist_n.error=dist_h("error"),dist_n.success=dist_h("success"),dist_n.loading=dist_h("loading"),dist_n.custom=dist_h("custom"),dist_n.dismiss=e=>{dist_u({type:3,toastId:e})},dist_n.remove=e=>dist_u({type:4,toastId:e}),dist_n.promise=(e,r,n)=>{let l=dist_n.loading(r.loading,{...n,...null==n?void 0:n.loading});return e.then(e=>(dist_n.success(T(r.success,e),{id:l,...n,...null==n?void 0:n.success}),e)).catch(e=>{dist_n.error(T(r.error,e),{id:l,...n,...null==n?void 0:n.error})}),e};var Z=(e,r)=>{dist_u({type:1,toast:{id:e,height:r}})},ee=()=>{dist_u({type:5,time:Date.now()})},D=e=>{let{toasts:r,pausedAt:n}=I(e);(0,d.useEffect)(()=>{if(n)return;let e=Date.now(),l=r.map(r=>{if(r.duration===1/0)return;let n=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(n<0){r.visible&&dist_n.dismiss(r.id);return}return setTimeout(()=>dist_n.dismiss(r.id),n)});return()=>{l.forEach(e=>e&&clearTimeout(e))}},[r,n]);let l=(0,d.useCallback)(()=>{n&&dist_u({type:6,time:Date.now()})},[n]),c=(0,d.useCallback)((e,n)=>{let{reverseOrder:l=!1,gutter:c=8,defaultPosition:d}=n||{},f=r.filter(r=>(r.position||d)===(e.position||d)&&r.height),h=f.findIndex(r=>r.id===e.id),g=f.filter((e,r)=>r<h&&e.visible).length;return f.filter(e=>e.visible).slice(...l?[g+1]:[0,g]).reduce((e,r)=>e+(r.height||0)+c,0)},[r]);return{toasts:r,handlers:{updateHeight:Z,startPause:ee,endPause:l,calculateOffset:c}}},O=k`
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
}`,S=k`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,B=j("div")`
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
    animation: ${S} 0.15s ease-out forwards;
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
`,F=k`
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

  animation: ${F} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
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
`,q=j("div")`
  position: absolute;
`,V=j("div")`
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
}`,K=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Y} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,M=({toast:e})=>{let{icon:r,type:n,iconTheme:l}=e;return void 0!==r?"string"==typeof r?d.createElement(K,null,r):r:"blank"===n?null:d.createElement(V,null,d.createElement(R,{...l}),"loading"!==n&&d.createElement(q,null,"error"===n?d.createElement(B,{...l}):d.createElement(H,{...l})))},ye=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ge=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,Q=j("div")`
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
`,Ae=(e,r)=>{let n=e.includes("top")?1:-1,[l,c]=dist_b()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ye(n),ge(n)];return{animation:r?`${k(l)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${k(c)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},et=d.memo(({toast:e,position:r,style:n,children:l})=>{let c=e.height?Ae(e.position||r||"top-center",e.visible):{opacity:0},f=d.createElement(M,{toast:e}),h=d.createElement(X,{...e.ariaProps},T(e.message,e));return d.createElement(Q,{className:e.className,style:{...c,...n,...e.style}},"function"==typeof l?l({icon:f,message:h}):d.createElement(d.Fragment,null,f,h))});m(d.createElement);var Ee=({id:e,className:r,style:n,onHeightUpdate:l,children:c})=>{let f=d.useCallback(r=>{if(r){let i=()=>{l(e,r.getBoundingClientRect().height)};i(),new MutationObserver(i).observe(r,{subtree:!0,childList:!0,characterData:!0})}},[e,l]);return d.createElement("div",{ref:f,className:r,style:n},c)},Re=(e,r)=>{let n=e.includes("top"),l=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:dist_b()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${r*(n?1:-1)}px)`,...n?{top:0}:{bottom:0},...l}},er=u`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Ie=({reverseOrder:e,position:r="top-center",toastOptions:n,gutter:l,children:c,containerStyle:f,containerClassName:h})=>{let{toasts:g,handlers:y}=D(n);return d.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...f},className:h,onMouseEnter:y.startPause,onMouseLeave:y.endPause},g.map(n=>{let f=n.position||r,h=Re(f,y.calculateOffset(n,{reverseOrder:e,gutter:l,defaultPosition:r}));return d.createElement(Ee,{id:n.id,key:n.id,onHeightUpdate:y.updateHeight,className:n.visible?er:"",style:h},"custom"===n.type?T(n.message,n):c?c(n):d.createElement(et,{toast:n,position:f}))}))},eo=dist_n}},function(e){e.O(0,[176,971,472,744],function(){return e(e.s=5624)}),_N_E=e.O()}]);