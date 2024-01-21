"use strict";exports.id=635,exports.ids=[635],exports.modules={7771:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(997);function s({navBar:e=!1}){return r.jsx("hr",{className:`${e?"hidden lg:block lg:my-0.5 dark:border-slate-700":"my-6 -mx-6 dark:border-slate-800"} border-t border-gray-100`})}a(6689)},7721:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(997),s=a(6689),n=a(2361);let o=({icons:e=[],...t})=>{let a=s.Children.count(t.children),o="";switch(a){case 2:o="grid grid-cols-1 gap-3 md:grid-cols-2";break;case 3:o="grid grid-cols-1 gap-3 md:grid-cols-3"}let l=["px-3 py-2 max-w-full border-gray-700 rounded w-full dark:placeholder-gray-400","focus:ring focus:ring-blue-600 focus:border-blue-600 focus:outline-none",t.hasTextareaHeight?"h-24":"h-10",t.isBorderless?"border-0":"border",t.isTransparent?"bg-transparent":"bg-white dark:bg-slate-800"].join(" ");return(0,r.jsxs)("div",{className:"mb-6 last:mb-0",children:[t.label&&r.jsx("label",{htmlFor:t.labelFor,className:`block font-bold mb-2 ${t.labelFor?"cursor-pointer":""}`,children:t.label}),r.jsx("div",{className:`${o}`,children:s.Children.map(t.children,(a,o)=>(0,r.jsxs)("div",{className:"relative",children:[(0,s.cloneElement)(a,{className:`${l} ${e[o]?"pl-10":""}`}),e[o]&&r.jsx(n.Z,{path:e[o],w:"w-10",h:t.hasTextareaHeight?"h-full":"h-12",className:"absolute top-0 left-0 z-10 pointer-events-none text-gray-500 dark:text-slate-400"})]}))}),t.help&&r.jsx("div",{className:"text-xs text-gray-500 dark:text-slate-400 mt-1",children:t.help})]})}},6076:(e,t,a)=>{a.d(t,{h:()=>r});function r(e){let{message:t,styles:a,duration:r=3e3}=e,{content:s={},box:n={}}=a||{},o=document.getElementById("custom_toast");o||((o=document.createElement("div")).id="custom_toast",document.getElementById("__next").appendChild(o));let l={textAlign:"center",color:"white",width:"max-content",height:"max-content",position:"fixed",left:"50%",top:"0px",transform:"translateX(-50%)",zIndex:"9999",...n};for(let e in l)o.style[e]=l[e];let c={padding:"4px 8px",margin:"6px",background:"#4241419c",...s},i=document.createElement("p");for(let e in i.innerText=`${t}`,c)i.style[e]=c[e];o.appendChild(i),setTimeout(()=>{o.removeChild(i)},r)}},6915:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{K9:()=>h,lg:()=>d});var s=a(9915),n=e([s]);async function o(){let e={token:null,refreshToken:null};try{let t=s.default.get("token"),a=s.default.get("refreshToken");t&&(e.token=JSON.parse(t)),a&&(e.refreshToken=JSON.parse(a))}catch(e){console.log(e)}return e}async function l(e={}){try{for(let t in e)s.default.set(t,JSON.stringify(e[t]))}catch(e){console.log(e)}}async function c(){try{s.default.remove("token"),s.default.remove("refreshToken")}catch(e){console.log(e),console.log("removes fails")}}async function i(){let e=await o(),t=e?.token,a={"Content-Type":"application/json",Accept:"application/json",Authorization:`Bearer ${t}`};return a}s=(n.then?(await n)():n)[0];let h={baseUrl:"https://ebs.thinkfoundation.com.bd/api",getHeaders:i,getTokens:o,setTokens:l,removeTokens:c};function d(){let e=s.default.get("token");return e}r()}catch(e){r(e)}})},2379:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{CQ:()=>h,Fv:()=>d,ac:()=>i});var s=a(9648),n=a(6915),o=a(6076),l=e([s,n]);[s,n]=l.then?(await l)():l;let u=n.K9.baseUrl,m=function(e,t=200){let a;let r=[];return (s=null)=>{s&&r.push(s),a&&clearTimeout(a),a=setTimeout(async()=>{let t=await e();t?.status&&(r.forEach(async e=>{let{method:t,...a}=e;"get"===t?await i(a):"post"===t&&await d(a)}),r=[])},t)}}(c);async function c(){let{refreshToken:e}=await n.K9.getTokens();if(!e)return{status:!1};try{let t=await s.default.post(`${u}/auth/user/token`,{refreshToken:e}),a=t?.data?.token,r=t?.data?.refreshToken;return await n.K9.setTokens({token:a,refreshToken:r}),{status:!0,data:{token:a,refreshToken:r}}}catch(e){console.log(e)}return{status:!1}}let g=async(e,t)=>{if(e.response){let{data:a,config:r}=e.response;"Token expired"===a.error?await m({...t,method:r.method}):"Refresh token expired"===a.error||"Refresh token does not exist!"===a.error||(0,o.h)({message:`${a.error||"unknown error"}`,styles:{box:{top:"80%"}}})}else e.request&&!window.navigator.onLine&&(0,o.h)({message:"Connect Your Network",styles:{box:{top:"80%"}}})};async function i({end_point:e="",resolve:t,reject:a,responseAlert:r}){try{let a=await s.default.get(`${u}/${e}`,{headers:await n.K9.getHeaders()});if(a.status){let e=a.data;r&&e.message&&(0,o.h)({message:e.message}),t&&t(a.data)}}catch(t){let e=t.response?.data||{};r&&e.error&&(0,o.h)({message:e.error}),a&&a(t)}}async function d({end_point:e="",resolve:t,reject:a,body:r,responseAlert:l}){try{let a=await s.default.post(`${u}/${e}`,r,{headers:await n.K9.getHeaders()});if(a.status){let e=a.data;l&&e.message&&(0,o.h)({message:e.message}),t&&t(e)}}catch(n){let s=n.response?.data||{};l&&s.error&&(0,o.h)({message:s.error}),a&&a(s),g(n,{end_point:e,body:r,resolve:t,reject:a})}}async function h({end_points:e=[],resolve:t,reject:a}){try{Promise.all(e?.map(async e=>s.default.get(`${u}/${e}`,{headers:await n.K9.getHeaders()}))).then(e=>{let a=e?.map(e=>e.data);t(a)}).catch(e=>{a&&a(e)})}catch(e){a&&a(e)}}r()}catch(e){r(e)}})},7537:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{Ny:()=>m,RW:()=>u,bG:()=>h});var s=a(6915),n=a(2379),o=a(23),l=a(91),c=a(3836),i=a(6076),d=e([s,n]);[s,n]=d.then?(await d)():d;let m=3;async function h(){await (0,n.ac)({end_point:"user/myinfo",resolve:e=>{(0,i.h)({message:"login success"});let{data:t}=e;o.h.dispatch((0,l.j0)({data:t})),(0,c.Z)("/dashboard")},reject:()=>{o.h.dispatch((0,l.kh)()),(0,i.h)({message:"user name or password incorrect"})}})}let g=async e=>{let{token:t,refreshToken:a}=e;await s.K9.setTokens({token:t,refreshToken:a}),await h()},p=e=>{console.log("reject",e)};async function u(e={}){return await (0,n.Fv)({end_point:"auth/user/login",body:e,resolve:g,reject:p})}r()}catch(e){r(e)}})},3836:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(1163),s=a.n(r);let n=e=>{s().push(e)}}};