"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[515],{1722:function(e,r,t){t.d(r,{FA:function(){return l},N$:function(){return n},RH:function(){return i},bN:function(){return d},dc:function(){return o},pQ:function(){return c},uK:function(){return s}});let a="bg-gradient-to-tr",n="".concat(a," from-purple-400 via-pink-500 to-red-500"),o="".concat(a," from-slate-700 via-slate-900 to-slate-800"),l="".concat(a," from-pink-400 via-red-500 to-yellow-500"),i={white:"bg-white text-black",light:"bg-white text-black dark:bg-slate-900/70 dark:text-white",contrast:"bg-gray-800 text-white dark:bg-white dark:text-black",success:"bg-emerald-500 border-emerald-500 text-white",danger:"bg-red-500 border-red-500 text-white",warning:"bg-yellow-500 border-yellow-500 text-white",info:"bg-blue-500 border-blue-500 text-white"},s={white:"text-black dark:text-slate-100",light:"text-gray-700 dark:text-slate-400",contrast:"dark:text-white",success:"text-emerald-500",danger:"text-red-500",warning:"text-yellow-500",info:"text-blue-500"},d={white:[s.white,"border-gray-100"].join(" "),light:[s.light,"border-gray-100"].join(" "),contrast:[s.contrast,"border-gray-900 dark:border-slate-100"].join(" "),success:[s.success,"border-emerald-500"].join(" "),danger:[s.danger,"border-red-500"].join(" "),warning:[s.warning,"border-yellow-500"].join(" "),info:[s.info,"border-blue-500"].join(" ")},c=function(e,r,t){let a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if("void"===e)return"";let n={ring:{white:"ring-gray-200 dark:ring-gray-500",whiteDark:"ring-gray-200 dark:ring-gray-500",lightDark:"ring-gray-200 dark:ring-gray-500",contrast:"ring-gray-300 dark:ring-gray-400",success:"ring-emerald-300 dark:ring-emerald-700",danger:"ring-red-300 dark:ring-red-700",warning:"ring-yellow-300 dark:ring-yellow-700",info:"ring-blue-300 dark:ring-blue-700"},active:{white:"bg-gray-100",whiteDark:"bg-gray-100 dark:bg-slate-800",lightDark:"bg-gray-200 dark:bg-slate-700",contrast:"bg-gray-700 dark:bg-slate-100",success:"bg-emerald-700 dark:bg-emerald-600",danger:"bg-red-700 dark:bg-red-600",warning:"bg-yellow-700 dark:bg-yellow-600",info:"bg-blue-700 dark:bg-blue-600"},bg:{white:"bg-white text-black",whiteDark:"bg-white text-black dark:bg-slate-900 dark:text-white",lightDark:"bg-gray-100 text-black dark:bg-slate-800 dark:text-white",contrast:"bg-gray-800 text-white dark:bg-white dark:text-black",success:"bg-emerald-600 dark:bg-emerald-500 text-white",danger:"bg-red-600 dark:bg-red-500 text-white",warning:"bg-yellow-600 dark:bg-yellow-500 text-white",info:"bg-blue-600 dark:bg-blue-500 text-white"},bgHover:{white:"hover:bg-gray-100",whiteDark:"hover:bg-gray-100 hover:dark:bg-slate-800",lightDark:"hover:bg-gray-200 hover:dark:bg-slate-700",contrast:"hover:bg-gray-700 hover:dark:bg-slate-100",success:"hover:bg-emerald-700 hover:border-emerald-700 hover:dark:bg-emerald-600 hover:dark:border-emerald-600",danger:"hover:bg-red-700 hover:border-red-700 hover:dark:bg-red-600 hover:dark:border-red-600",warning:"hover:bg-yellow-700 hover:border-yellow-700 hover:dark:bg-yellow-600 hover:dark:border-yellow-600",info:"hover:bg-blue-700 hover:border-blue-700 hover:dark:bg-blue-600 hover:dark:border-blue-600"},borders:{white:"border-white",whiteDark:"border-white dark:border-slate-900",lightDark:"border-gray-100 dark:border-slate-800",contrast:"border-gray-800 dark:border-white",success:"border-emerald-600 dark:border-emerald-500",danger:"border-red-600 dark:border-red-500",warning:"border-yellow-600 dark:border-yellow-500",info:"border-blue-600 dark:border-blue-500"},text:{contrast:"dark:text-slate-100",success:"text-emerald-600 dark:text-emerald-500",danger:"text-red-600 dark:text-red-500",warning:"text-yellow-600 dark:text-yellow-500",info:"text-blue-600 dark:text-blue-500"},outlineHover:{contrast:"hover:bg-gray-800 hover:text-gray-100 hover:dark:bg-slate-100 hover:dark:text-black",success:"hover:bg-emerald-600 hover:text-white hover:text-white hover:dark:text-white hover:dark:border-emerald-600",danger:"hover:bg-red-600 hover:text-white hover:text-white hover:dark:text-white hover:dark:border-red-600",warning:"hover:bg-yellow-600 hover:text-white hover:text-white hover:dark:text-white hover:dark:border-yellow-600",info:"hover:bg-blue-600 hover:text-white hover:dark:text-white hover:dark:border-blue-600"}},o=r&&0>["white","whiteDark","lightDark"].indexOf(e),l=[n.borders[e],n.ring[e]];return a?l.push(n.active[e]):l.push(o?n.text[e]:n.bg[e]),t&&l.push(o?n.outlineHover[e]:n.bgHover[e]),l.join(" ")}},5138:function(e,r,t){t.d(r,{Z:function(){return d}});var a=t(5893),n=t(7294),o=t(1664),l=t.n(o),i=t(1722),s=t(2361);function d(e){let{label:r,icon:t,iconSize:o,href:d,target:c,type:h,color:u="white",className:g="",asAnchor:b=!1,small:k=!1,outline:w=!1,active:f=!1,disabled:x=!1,roundedFull:v=!1,onClick:m}=e,p=["inline-flex","justify-center","items-center","whitespace-nowrap","focus:outline-none","transition-colors","focus:ring","duration-150","border",x?"cursor-not-allowed":"cursor-pointer",v?"rounded-full":"rounded",(0,i.pQ)(u,w,!x,f),g];!r&&t?p.push("p-1"):k?p.push("text-sm",v?"px-3 py-1":"p-1"):p.push("py-2",v?"px-6":"px-3"),x&&p.push(w?"opacity-50":"opacity-70");let y=p.join(" "),j=(0,a.jsxs)(a.Fragment,{children:[t&&(0,a.jsx)(s.Z,{path:t,size:o}),r&&(0,a.jsx)("span",{className:k&&t?"px-1":"px-2",children:r})]});return d&&!x?(0,a.jsx)(l(),{href:d,target:c,className:y,children:j}):n.createElement(b?"a":"button",{className:y,type:null!=h?h:"button",target:c,disabled:x,onClick:m},j)}},7678:function(e,r,t){var a=t(5893),n=t(7294);r.Z=e=>{let{type:r="justify-start",mb:t="-mb-3",classAddon:o="mr-3 last:mr-0 mb-3",noWrap:l=!1,children:i,className:s}=e;return(0,a.jsx)("div",{className:"flex items-center ".concat(r," ").concat(s," ").concat(t," ").concat(l?"flex-nowrap":"flex-wrap"),children:n.Children.map(i,e=>e?(0,n.cloneElement)(e,{className:"".concat(o," ").concat(e.props.className)}):null)})}},7634:function(e,r,t){t.d(r,{Z:function(){return n}});var a=t(5893);function n(e){let{noPadding:r=!1,className:t,children:n}=e;return(0,a.jsx)("div",{className:"flex-1 ".concat(r?"":"p-6"," ").concat(t),children:n})}t(7294)},4717:function(e,r,t){t.d(r,{Z:function(){return n}});var a=t(5893);function n(e){let{className:r,children:t}=e;return(0,a.jsx)("footer",{className:"p-6 ".concat(r),children:t})}t(7294)},3879:function(e,r,t){t.d(r,{Z:function(){return i}});var a=t(5893),n=t(7294),o=t(7634),l=t(4717);function i(e){let{rounded:r="rounded-2xl",flex:t="flex-col",className:i="",hasComponentLayout:s=!1,hasTable:d=!1,isHoverable:c=!1,isModal:h=!1,children:u,footer:g,onClick:b}=e,k=["bg-white flex",i,r,t,"dark:bg-slate-900"];return c&&k.push("hover:shadow-lg transition-shadow duration-500"),n.createElement("div",{className:k.join(" "),onClick:b},s?u:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Z,{noPadding:d,children:u}),g&&(0,a.jsx)(l.Z,{children:g})]}))}},7771:function(e,r,t){t.d(r,{Z:function(){return n}});var a=t(5893);function n(e){let{navBar:r=!1}=e;return(0,a.jsx)("hr",{className:"".concat(r?"hidden lg:block lg:my-0.5 dark:border-slate-700":"my-6 -mx-6 dark:border-slate-800"," border-t border-gray-100")})}t(7294)},7721:function(e,r,t){var a=t(5893),n=t(7294),o=t(2361);r.Z=e=>{let{icons:r=[],...t}=e,l=n.Children.count(t.children),i="";switch(l){case 2:i="grid grid-cols-1 gap-3 md:grid-cols-2";break;case 3:i="grid grid-cols-1 gap-3 md:grid-cols-3"}let s=["px-3 py-2 max-w-full border-gray-700 rounded w-full dark:placeholder-gray-400","focus:ring focus:ring-blue-600 focus:border-blue-600 focus:outline-none",t.hasTextareaHeight?"h-24":"h-10",t.isBorderless?"border-0":"border",t.isTransparent?"bg-transparent":"bg-white dark:bg-slate-800"].join(" ");return(0,a.jsxs)("div",{className:"mb-6 last:mb-0",children:[t.label&&(0,a.jsx)("label",{htmlFor:t.labelFor,className:"block font-bold mb-2 ".concat(t.labelFor?"cursor-pointer":""),children:t.label}),(0,a.jsx)("div",{className:"".concat(i),children:n.Children.map(t.children,(e,l)=>(0,a.jsxs)("div",{className:"relative",children:[(0,n.cloneElement)(e,{className:"".concat(s," ").concat(r[l]?"pl-10":"")}),r[l]&&(0,a.jsx)(o.Z,{path:r[l],w:"w-10",h:t.hasTextareaHeight?"h-full":"h-12",className:"absolute top-0 left-0 z-10 pointer-events-none text-gray-500 dark:text-slate-400"})]}))}),t.help&&(0,a.jsx)("div",{className:"text-xs text-gray-500 dark:text-slate-400 mt-1",children:t.help})]})}},2361:function(e,r,t){t.d(r,{Z:function(){return n}});var a=t(5893);function n(e){let{path:r,w:t="w-6",h:n="h-6",size:o=null,className:l="",children:i}=e,s=null!=o?o:16;return(0,a.jsxs)("span",{className:"inline-flex justify-center items-center ".concat(t," ").concat(n," ").concat(l),children:[(0,a.jsx)("svg",{viewBox:"0 0 24 24",width:s,height:s,className:"inline-block",children:(0,a.jsx)("path",{fill:"currentColor",d:r})}),i]})}t(7294)},6076:function(e,r,t){t.d(r,{h:function(){return a}});function a(e){let{message:r,styles:t,duration:a=3e3}=e,{content:n={},box:o={}}=t||{},l=document.getElementById("custom_toast");l||((l=document.createElement("div")).id="custom_toast",document.getElementById("__next").appendChild(l));let i={textAlign:"center",color:"white",width:"max-content",height:"max-content",position:"fixed",left:"50%",top:"0px",transform:"translateX(-50%)",zIndex:"9999",...o};for(let e in i)l.style[e]=i[e];let s={padding:"4px 8px",margin:"6px",background:"#4241419c",...n},d=document.createElement("p");for(let e in d.innerText="".concat(r),s)d.style[e]=s[e];l.appendChild(d),setTimeout(()=>{l.removeChild(d)},a)}},6915:function(e,r,t){t.d(r,{K9:function(){return s},lg:function(){return d}});var a=t(1955);async function n(){let e={token:null,refreshToken:null};try{let r=a.Z.get("token"),t=a.Z.get("refreshToken");r&&(e.token=JSON.parse(r)),t&&(e.refreshToken=JSON.parse(t))}catch(e){console.log(e)}return e}async function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{for(let r in e)a.Z.set(r,JSON.stringify(e[r]))}catch(e){console.log(e)}}async function l(){try{a.Z.remove("token"),a.Z.remove("refreshToken")}catch(e){console.log(e),console.log("removes fails")}}async function i(){let e=await n(),r=null==e?void 0:e.token;return{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(r)}}let s={baseUrl:"https://ebs.thinkfoundation.com.bd/api",getHeaders:i,getTokens:n,setTokens:o,removeTokens:l};function d(){let e=a.Z.get("token");return e}},2379:function(e,r,t){t.d(r,{CQ:function(){return u},Fv:function(){return h},ac:function(){return c}});var a=t(5121),n=t(6915),o=t(6076);let l=n.K9.baseUrl,i=function(e){let r,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,a=[];return function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;n&&a.push(n),r&&clearTimeout(r),r=setTimeout(async()=>{let r=await e();(null==r?void 0:r.status)&&(a.forEach(async e=>{let{method:r,...t}=e;"get"===r?await c(t):"post"===r&&await h(t)}),a=[])},t)}}(s);async function s(){let{refreshToken:e}=await n.K9.getTokens();if(!e)return{status:!1};try{var r,t;let o=await a.Z.post("".concat(l,"/auth/user/token"),{refreshToken:e}),i=null==o?void 0:null===(r=o.data)||void 0===r?void 0:r.token,s=null==o?void 0:null===(t=o.data)||void 0===t?void 0:t.refreshToken;return await n.K9.setTokens({token:i,refreshToken:s}),{status:!0,data:{token:i,refreshToken:s}}}catch(e){console.log(e)}return{status:!1}}let d=async(e,r)=>{if(e.response){let{data:t,config:a}=e.response;"Token expired"===t.error?await i({...r,method:a.method}):"Refresh token expired"===t.error||"Refresh token does not exist!"===t.error||(0,o.h)({message:"".concat(t.error||"unknown error"),styles:{box:{top:"80%"}}})}else e.request&&!window.navigator.onLine&&(0,o.h)({message:"Connect Your Network",styles:{box:{top:"80%"}}})};async function c(e){let{end_point:r="",resolve:t,reject:i,responseAlert:s}=e;try{let e=await a.Z.get("".concat(l,"/").concat(r),{headers:await n.K9.getHeaders()});if(e.status){let r=e.data;s&&r.message&&(0,o.h)({message:r.message}),t&&t(e.data)}}catch(r){var d;let e=(null===(d=r.response)||void 0===d?void 0:d.data)||{};s&&e.error&&(0,o.h)({message:e.error}),i&&i(r)}}async function h(e){let{end_point:r="",resolve:t,reject:i,body:s,responseAlert:c}=e;try{let e=await a.Z.post("".concat(l,"/").concat(r),s,{headers:await n.K9.getHeaders()});if(e.status){let r=e.data;c&&r.message&&(0,o.h)({message:r.message}),t&&t(r)}}catch(a){var h;let e=(null===(h=a.response)||void 0===h?void 0:h.data)||{};c&&e.error&&(0,o.h)({message:e.error}),i&&i(e),d(a,{end_point:r,body:s,resolve:t,reject:i})}}async function u(e){let{end_points:r=[],resolve:t,reject:o}=e;try{Promise.all(null==r?void 0:r.map(async e=>a.Z.get("".concat(l,"/").concat(e),{headers:await n.K9.getHeaders()}))).then(e=>{let r=null==e?void 0:e.map(e=>e.data);t(r)}).catch(e=>{o&&o(e)})}catch(e){o&&o(e)}}},2843:function(e,r,t){t.d(r,{Ny:function(){return h},bG:function(){return u},RW:function(){return k}});var a=t(6915),n=t(2379),o=t(23),l=t(91),i=t(1163),s=t.n(i),d=e=>{s().push(e)},c=t(6076);let h=3;async function u(){await (0,n.ac)({end_point:"user/myinfo",resolve:e=>{(0,c.h)({message:"login success"});let{data:r}=e;o.h.dispatch((0,l.j0)({data:r})),d("/dashboard")},reject:()=>{o.h.dispatch((0,l.kh)()),(0,c.h)({message:"user name or password incorrect"})}})}let g=async e=>{let{token:r,refreshToken:t}=e;await a.K9.setTokens({token:r,refreshToken:t}),await u()},b=e=>{console.log("reject",e)};async function k(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return await (0,n.Fv)({end_point:"auth/user/login",body:e,resolve:g,reject:b})}}}]);