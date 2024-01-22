"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[496],{5106:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(5893);n(7294);var r=n(1722),l=n(2361);function s(e){let{icon:t,color:n,w:s="w-12",h:i="h-12",bg:c=!1,className:o=""}=e,d=c?r.RH[n]:"".concat(r.uK[n]," bg-gray-50 dark:bg-slate-800");return(0,a.jsx)(l.Z,{path:t,w:s,h:i,size:"24",className:"rounded-full ".concat(d," ").concat(o)})}},1260:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(5893);function r(e){let{zIndex:t="z-50",type:n="flex",children:r,className:l,...s}=e;return(0,a.jsxs)("div",{className:"".concat(n," ").concat(t," ").concat(l," items-center flex-col justify-center overflow-hidden fixed inset-0"),children:[(0,a.jsx)("div",{className:"overlay absolute inset-0 bg-gradient-to-tr opacity-90 dark:from-gray-700 dark:via-gray-900 dark:to-gray-700",onClick:e=>{e.preventDefault(),s.onClick&&s.onClick(e)}}),r]})}n(7294)},2641:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(5893);n(7294);var r=n(5143);function l(e){let{children:t}=e;return(0,a.jsx)("section",{className:"p-6 ".concat(r.DV),children:t})}},6696:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(5893);n(7294);var r=n(2361),l=n(5106);function s(e){let{icon:t,title:n,main:s=!1,children:i}=e;return(0,a.jsxs)("section",{className:"".concat(s?"":"pt-6"," mb-6 flex items-center justify-between"),children:[(0,a.jsxs)("div",{className:"flex items-center justify-start",children:[t&&s&&(0,a.jsx)(l.Z,{icon:t,color:"light",className:"mr-3",bg:!0}),t&&!s&&(0,a.jsx)(r.Z,{path:t,className:"mr-2",size:"20"}),(0,a.jsx)("h1",{className:"leading-tight ".concat(s?"text-3xl":"text-2xl"),children:n})]}),i]})}},5086:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(5893);n(7294);var r=n(3396),l=n(5528);function s(e){let{className:t="",children:n}=e,s=(0,r.C)(e=>e.main.userEmail);return(0,a.jsx)(l.Z,{username:s,className:t,children:n})}},5528:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(5893);function r(e){let{username:t,api:n="avataaars",className:r="",children:l}=e,s="https://api.dicebear.com/7.x/".concat(n,"/svg?seed=").concat(t.replace(/[^a-z0-9]+/gi,"-"));return(0,a.jsxs)("div",{className:r,children:[(0,a.jsx)("img",{src:s,alt:t,className:"rounded-full block h-auto w-full max-w-full bg-gray-100 dark:bg-slate-800"}),l]})}n(7294)},1187:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(5893),r=n(7294);function l(){return(0,a.jsx)("div",{className:"loading-spinner mx-auto"})}function s(e){let{children:t,isLoading:n,isError:s,onlyFirstRender:i=!1,preRender:c=!0}=e,[o,d]=(0,r.useState)(!0);return((0,r.useEffect)(()=>{d(!1)},[]),n&&(!i||o))?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"relative",children:(0,a.jsx)(l,{})}),c&&t]}):(!n&&s&&console.log(s),(0,a.jsx)(a.Fragment,{children:t}))}},5143:function(e,t,n){n.d(t,{DV:function(){return a},pz:function(){return l},xw:function(){return r}});let a="xl:max-w-6xl xl:mx-auto",r="THiNK-ToLL collection and monitoring System",l=e=>"".concat(e," — ").concat(r)},1098:function(e,t,n){n.d(t,{Pc:function(){return d},t5:function(){return o}});var a=n(7294),r=n(6915),l=n(8957),s=n(5121),i=n(2843),c=n(9473);function o(e){let t=r.K9.baseUrl,[n,i]=(0,a.useState)(e),[c,o]=(0,a.useState)({isLoading:!0,isError:!1,result:{data:[],pagination:{}}}),d=(0,a.useCallback)(async e=>{let{endPoint:a="",query:i={},resolve:c,reject:d}=e,u=(0,l.gx)({...n,...i}),f="".concat(t,"/").concat(a,"?").concat((0,l.HS)(u));try{let e=await (0,s.Z)({url:f,method:"GET",headers:await r.K9.getHeaders()});if(e.status){c&&c(e.data);let{...t}=e.data;o(e=>({...e,isLoading:!1,isError:!1,result:{...t}}))}else throw Error(JSON.stringify({err:e.data}))}catch(e){d&&d(e),o(t=>({...t,isLoading:!1,isError:JSON.stringify(e)}))}},[n,t]),u=(0,a.useCallback)(async e=>{let{ids:n=[],endPoint:a="",resolve:l,reject:i}=e,d="".concat(t,"/").concat(a,"/").concat(n.join(","));try{let e=await (0,s.Z)({url:d,method:"DELETE",headers:await r.K9.getHeaders()});if(e.status){l&&l(e.data);let{data:t=[],pagination:a}=c.result,r=null==t?void 0:t.filter(e=>!e.id||!n.includes(e.id));o(e=>({...e,isLoading:!1,isError:!1,result:{data:r,pagination:a}}))}else throw Error(JSON.stringify({err:e.data}))}catch(e){i&&i(e),o(t=>({...t,isLoading:!1,isError:JSON.stringify(e)}))}},[c,t]),f=(0,a.useCallback)(async e=>{let{endPoint:n="",data:a={},reject:l,resolve:i}=e,c="".concat(t,"/").concat(n);try{let e=await (0,s.Z)({url:c,method:"POST",data:a,headers:await r.K9.getHeaders()});if(e.status)i&&i(i),window.location.reload();else throw Error(JSON.stringify({err:e.data}))}catch(e){l&&l(e),o(t=>({...t,isLoading:!1,isError:JSON.stringify(e)}))}},[t]),h=(0,a.useCallback)(async e=>{let{endPoint:n="",data:a,reject:l,resolve:i}=e,d="".concat(t,"/").concat(n);try{let e=await (0,s.Z)({url:d,method:"UPDATE",data:a,headers:await r.K9.getHeaders()});if(e.status){i&&i(e);let{data:t=[],pagination:n}=c.result,r=(null==t?void 0:t.map(e=>e.id===a.id?{...e,...a}:e))||a;o(e=>({...e,isLoading:!1,isError:!1,result:{data:r,pagination:n}}))}else throw Error(JSON.stringify({err:e.data}))}catch(e){l&&l(e),o(t=>({...t,isLoading:!1,isError:JSON.stringify(e)}))}},[c,t]);return{query:n,updateQuery:i,...c,getItems:d,delItems:u,postItem:f,updateItem:h}}function d(){let{user:e}=(0,c.v9)(e=>e.userInfo)||{},t={user_type:i.Ny,description:"",company:{},id:"",feature:[],first_name:"",last_name:"",email:""},{user_type:n,company:a,id:r,feature:s,email:o,first_name:d,last_name:u,description:f}=(0,l.TM)(e)?t:e;return{user_type:n,company:a,id:r,feature:s,email:o,first_name:d,last_name:u,description:f,isAuthenticate:()=>!!r}}},9605:function(e,t,n){n.d(t,{Z:function(){return T}});var a=n(5893),r=n(7294),l=n(5317);let s=[{href:"/dashboard",icon:l.K2U,label:"Dashboard"},{href:"/users",label:"Users",icon:l._sG},{href:"/account-balance",label:"Account Balance",icon:l.rwS},{href:"/nfc-cards",label:"NFC Cards",icon:l.Qk0},{href:"/user-vehicle",label:"User Vehicle",icon:l.rwS},{href:"/nfc-scanner-device",label:"NFC Scanner Device",icon:l.gWJ},{href:"/operator-scanner-device",label:"Operator Scanner Device",icon:l.wJe},{href:"/account-balance-refill-logs",label:"Account Balance Refill",icon:l.gWJ},{href:"/transaction-logs",label:"Transaction Logs",icon:l.Qk0}],i=[{isCurrentUser:!0,menu:[{icon:l.rI3,label:"My Profile",href:"/profile"},{icon:l.eYM,label:"Settings"},{icon:l.XH8,label:"Messages"},{isDivider:!0},{icon:l.GyE,label:"Log Out",isLogout:!0}]},{icon:l.xEd,label:"Light/Dark",isDesktopNoLabel:!0,isToggleLightDark:!0},{icon:l.GyE,label:"Log out",isDesktopNoLabel:!0,isLogout:!0,href:"login"}];var c=n(2361),o=n(5143);function d(e){let{display:t="flex",useMargin:n=!1,onClick:r,children:l}=e,s="".concat(t," navbar-item-label ").concat(n?"my-2 mx-3":"py-2 px-3");return(0,a.jsx)("div",{className:"".concat("items-center cursor-pointer dark:text-white dark:hover:text-slate-400"," ").concat(s),onClick:r,children:l})}var u=n(1664),f=n.n(u),h=n(7771),g=n(5086),x=n(3396),m=n(4356),v=n(1098);function b(e){let{item:t}=e,n=(0,x.T)(),{first_name:s,last_name:i}=(0,v.Pc)(),[o,d]=(0,r.useState)(!1),u=["block lg:flex items-center relative cursor-pointer",o?"navbar-item-label-active dark:text-slate-400":"navbar-item-label dark:text-white dark:hover:text-slate-400",t.menu?"lg:py-2 lg:px-3":"py-2 px-3",t.isDesktopNoLabel?"lg:w-16 lg:justify-center":""].join(" "),b=t.isCurrentUser?"".concat(s," ").concat(i):t.label,j=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"flex items-center ".concat(t.menu?"bg-gray-100 dark:bg-slate-800 lg:bg-transparent lg:dark:bg-transparent p-3 lg:p-0":""),onClick:()=>{t.menu&&d(!o),t.isToggleLightDark&&n((0,m.C8)(null))},children:[t.isCurrentUser&&(0,a.jsx)(g.Z,{className:"w-6 h-6 mr-3 inline-flex"}),t.icon&&(0,a.jsx)(c.Z,{path:t.icon,className:"transition-colors"}),(0,a.jsx)("span",{className:"px-2 transition-colors ".concat(t.isDesktopNoLabel&&t.icon?"lg:hidden":""),children:b}),t.menu&&(0,a.jsx)(c.Z,{path:o?l.Waq:l.CW,className:"hidden lg:inline-flex transition-colors"})]}),t.menu&&(0,a.jsx)("div",{className:"".concat(o?"":"lg:hidden"," text-sm border-b border-gray-100 lg:border lg:bg-white lg:absolute lg:top-full lg:left-0 lg:min-w-full lg:z-20 lg:rounded-lg lg:shadow-lg lg:dark:bg-slate-800 dark:border-slate-700"),children:(0,a.jsx)(p,{menu:t.menu})})]});return t.isDivider?(0,a.jsx)(h.Z,{navBar:!0}):t.href?(0,a.jsx)(f(),{href:t.href,target:t.target,className:u,children:j}):(0,a.jsx)("div",{className:u,children:j})}function p(e){let{menu:t}=e;return(0,a.jsx)(a.Fragment,{children:t.map((e,t)=>(0,a.jsx)(b,{item:e},t))})}function j(e){let{menu:t,className:n="",children:s}=e,[i,u]=(0,r.useState)(!1);return(0,a.jsx)("nav",{className:"".concat(n," top-0 inset-x-0 fixed bg-gray-50 h-14 z-30 transition-position w-screen lg:w-auto dark:bg-slate-800"),children:(0,a.jsxs)("div",{className:"flex lg:items-stretch ".concat(o.DV),children:[(0,a.jsx)("div",{className:"flex flex-1 items-stretch h-14",children:s}),(0,a.jsx)("div",{className:"flex-none items-stretch flex h-14 lg:hidden",children:(0,a.jsx)(d,{onClick:()=>{u(!i)},children:(0,a.jsx)(c.Z,{path:i?l.r5M:l.SXi,size:"24"})})}),(0,a.jsx)("div",{className:"".concat(i?"block":"hidden"," max-h-screen-menu overflow-y-auto lg:overflow-visible absolute w-screen top-14 left-0 bg-gray-50 shadow-lg lg:w-auto lg:flex lg:static lg:shadow-none dark:bg-slate-800"),children:(0,a.jsx)(p,{menu:t})})]})})}var N=n(1722);function w(e){let{menu:t,isDropdownList:n=!1,className:r=""}=e;return(0,a.jsx)("ul",{className:r,children:t.map((e,t)=>(0,a.jsx)(y,{item:e,isDropdownList:n},t))})}var k=n(1163),y=e=>{let{item:t,isDropdownList:n=!1}=e,[s,i]=(0,r.useState)(!1),[o,d]=(0,r.useState)(!1),u=!t.color&&s?"aside-menu-item-active font-bold":"",{asPath:h,isReady:g}=(0,k.useRouter)();(0,r.useEffect)(()=>{if(t.href&&g){let e=new URL(t.href,location.href).pathname,n=new URL(h,location.href).pathname;i(e===n)}},[t.href,g,h]);let x=(0,a.jsxs)(a.Fragment,{children:[t.icon&&(0,a.jsx)(c.Z,{path:t.icon,className:"flex-none ".concat(u),w:"w-16",size:"18"}),(0,a.jsx)("span",{className:"grow text-ellipsis line-clamp-1 ".concat(t.menu?"":"pr-12"," ").concat(u),children:t.label}),t.menu&&(0,a.jsx)(c.Z,{path:o?l.UHA:l.qX5,className:"flex-none ".concat(u),w:"w-12"})]}),m=["flex cursor-pointer",n?"py-3 px-6 text-sm":"py-3",t.color?(0,N.pQ)(t.color,!1,!0):"aside-menu-item dark:text-slate-300 dark:hover:text-white"].join(" ");return(0,a.jsxs)("li",{children:[t.href&&(0,a.jsx)(f(),{href:t.href,target:t.target,className:m,children:x}),!t.href&&(0,a.jsx)("div",{className:m,onClick:()=>d(!o),children:x}),t.menu&&(0,a.jsx)(w,{menu:t.menu,className:"aside-menu-dropdown ".concat(o?"block dark:bg-slate-800/50":"hidden"),isDropdownList:!0})]})};function L(e){let{menu:t,className:n="",...r}=e,s=(0,x.C)(e=>e.darkMode.isEnabled),i={label:"Logout",icon:l.GyE,color:"info",isLogout:!0,href:"login"};return(0,a.jsx)("aside",{className:"".concat(n," zzz lg:py-2 lg:pl-2 w-60 fixed flex z-40 top-0 h-screen transition-position overflow-hidden"),children:(0,a.jsxs)("div",{className:"aside lg:rounded-2xl flex-1 flex flex-col overflow-hidden dark:bg-slate-900",children:[(0,a.jsxs)("div",{className:"aside-brand flex flex-row h-14 items-center justify-between dark:bg-slate-900",children:[(0,a.jsx)("div",{className:"text-center flex-1 lg:text-left lg:pl-6 xl:text-center xl:pl-0",children:(0,a.jsx)("b",{className:"font-black",children:"THiNK ToLL"})}),(0,a.jsx)("button",{className:"hidden lg:inline-block xl:hidden p-3",onClick:e=>{e.preventDefault(),r.onAsideLgCloseClick()},children:(0,a.jsx)(c.Z,{path:l.r5M})})]}),(0,a.jsx)("div",{className:"flex-1 overflow-y-auto overflow-x-hidden ".concat(s?"aside-scrollbars-[slate]":"aside-scrollbars"),children:(0,a.jsx)(w,{menu:t})}),(0,a.jsx)("ul",{children:(0,a.jsx)(y,{item:i})})]})})}var C=n(1260);function S(e){let{isAsideMobileExpanded:t=!1,isAsideLgActive:n=!1,...r}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(L,{menu:r.menu,className:"".concat(t?"left-0":"-left-60 lg:left-0"," ").concat(n?"":"lg:hidden xl:flex"),onAsideLgCloseClick:r.onAsideLgClose}),n&&(0,a.jsx)(C.Z,{zIndex:"z-30",onClick:r.onAsideLgClose})]})}var E=n(7721),Z=n(2175),D=n(1187),z=n(6915);function T(e){let{children:t}=e,[n,o]=(0,r.useState)(!1),[u,f]=(0,r.useState)(!1),[h,g]=(0,r.useState)(!0),x=(0,k.useRouter)();(0,r.useEffect)(()=>{(0,z.lg)()?g(!1):x.push("/denied");let e=()=>{o(!1),f(!1)};return x.events.on("routeChangeStart",e),()=>{x.events.off("routeChangeStart",e)}},[x]);let m="xl:pl-60";return(0,a.jsx)(D.Z,{isLoading:h,isError:!1,preRender:!1,children:(0,a.jsx)("div",{className:"overflow-hidden lg:overflow-visible",children:(0,a.jsxs)("div",{className:"".concat(m," ").concat(n?"ml-60 lg:ml-0":""," pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100"),children:[(0,a.jsxs)(j,{menu:i,className:"".concat(m," ").concat(n?"ml-60 lg:ml-0":""),children:[(0,a.jsx)(d,{display:"flex lg:hidden",onClick:()=>o(!n),children:(0,a.jsx)(c.Z,{path:n?l._tg:l.PLg,size:"24"})}),(0,a.jsx)(d,{display:"hidden lg:flex xl:hidden",onClick:()=>f(!0),children:(0,a.jsx)(c.Z,{path:l.$Qi,size:"24"})}),(0,a.jsx)(d,{useMargin:!0,children:(0,a.jsx)(Z.J9,{initialValues:{search:""},onSubmit:e=>alert(JSON.stringify(e,null,2)),children:(0,a.jsx)(Z.l0,{children:(0,a.jsx)(E.Z,{isBorderless:!0,isTransparent:!0,children:(0,a.jsx)(Z.gN,{name:"search",placeholder:"Search"})})})})})]}),(0,a.jsx)(S,{isAsideMobileExpanded:n,isAsideLgActive:u,menu:s,onAsideLgClose:()=>f(!1)}),t]})})})}},3396:function(e,t,n){n.d(t,{C:function(){return l},T:function(){return r}});var a=n(9473);let r=a.I0,l=a.v9},8957:function(e,t,n){n.d(t,{C3:function(){return c},HS:function(){return i},TM:function(){return l},gx:function(){return s}});var a=n(6915);let r=new Map;function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=JSON.stringify(e);return!!r.get(t)}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={};for(let n in e){let a=void 0===e[n]||null===e[n];a||(t[n]=e[n])}return t}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.keys(e).map(t=>"".concat(t,"=").concat(e[t]));return t.join("&")}function c(){a.K9.removeTokens()}[{},[],"",void 0,null].forEach(e=>{r.set(JSON.stringify(e),!0)})}}]);