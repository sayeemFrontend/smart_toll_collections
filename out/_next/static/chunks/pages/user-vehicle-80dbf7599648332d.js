(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[611],{920:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user-vehicle",function(){return a(4754)}])},5138:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var n=a(5893),r=a(7294),i=a(1664),s=a.n(i),l=a(1722),o=a(2361);function c(e){let{label:t,icon:a,iconSize:i,href:c,target:u,type:p,color:d="white",className:g="",asAnchor:f=!1,small:h=!1,outline:m=!1,active:b=!1,disabled:v=!1,roundedFull:x=!1,onClick:y}=e,C=["inline-flex","justify-center","items-center","whitespace-nowrap","focus:outline-none","transition-colors","focus:ring","duration-150","border",v?"cursor-not-allowed":"cursor-pointer",x?"rounded-full":"rounded",(0,l.pQ)(d,m,!v,b),g];!t&&a?C.push("p-1"):h?C.push("text-sm",x?"px-3 py-1":"p-1"):C.push("py-2",x?"px-6":"px-3"),v&&C.push(m?"opacity-50":"opacity-70");let k=C.join(" "),N=(0,n.jsxs)(n.Fragment,{children:[a&&(0,n.jsx)(o.Z,{path:a,size:i}),t&&(0,n.jsx)("span",{className:h&&a?"px-1":"px-2",children:t})]});return c&&!v?(0,n.jsx)(s(),{href:c,target:u,className:k,children:N}):r.createElement(f?"a":"button",{className:k,type:null!=p?p:"button",target:u,disabled:v,onClick:y},N)}},7678:function(e,t,a){"use strict";var n=a(5893),r=a(7294);t.Z=e=>{let{type:t="justify-start",mb:a="-mb-3",classAddon:i="mr-3 last:mr-0 mb-3",noWrap:s=!1,children:l,className:o}=e;return(0,n.jsx)("div",{className:"flex items-center ".concat(t," ").concat(o," ").concat(a," ").concat(s?"flex-nowrap":"flex-wrap"),children:r.Children.map(l,e=>e?(0,r.cloneElement)(e,{className:"".concat(i," ").concat(e.props.className)}):null)})}},7634:function(e,t,a){"use strict";a.d(t,{Z:function(){return r}});var n=a(5893);function r(e){let{noPadding:t=!1,className:a,children:r}=e;return(0,n.jsx)("div",{className:"flex-1 ".concat(t?"":"p-6"," ").concat(a),children:r})}a(7294)},6860:function(e,t,a){"use strict";var n=a(5893);a(7294),t.Z=()=>(0,n.jsx)("div",{className:"text-center py-24 text-gray-500 dark:text-slate-400",children:(0,n.jsx)("p",{children:"Nothing's here…"})})},4717:function(e,t,a){"use strict";a.d(t,{Z:function(){return r}});var n=a(5893);function r(e){let{className:t,children:a}=e;return(0,n.jsx)("footer",{className:"p-6 ".concat(t),children:a})}a(7294)},3047:function(e,t,a){"use strict";var n=a(5893);a(7294),t.Z=e=>{let{title:t,children:a}=e;return(0,n.jsxs)("div",{className:"flex items-center justify-between mb-3",children:[(0,n.jsx)("h1",{className:"text-2xl",children:t}),a]})}},1440:function(e,t,a){"use strict";var n=a(5893),r=a(5317),i=a(5138),s=a(7678),l=a(3879),o=a(3047),c=a(1260);t.Z=e=>{let{title:t,buttonColor:a,buttonLabel:u,isActive:p,children:d,onConfirm:g,onCancel:f,actionBar:h=!0}=e;if(!p)return null;let m=h&&(0,n.jsxs)(s.Z,{children:[!!g&&(0,n.jsx)(i.Z,{label:u,color:a,onClick:g}),!!f&&(0,n.jsx)(i.Z,{label:"Cancel",color:a,outline:!0,onClick:f})]});return(0,n.jsx)(c.Z,{onClick:f,className:f?"cursor-pointer":"",children:(0,n.jsxs)(l.Z,{className:"transition-transform shadow-lg overflow-auto m-6 w-fit h-fit z-50",isModal:!0,footer:m,children:[(0,n.jsx)(o.Z,{title:t,children:!!f&&(0,n.jsx)(i.Z,{icon:r.r5M,color:"whiteDark",onClick:f,small:!0,roundedFull:!0})}),(0,n.jsx)("div",{className:"space-y-3",children:d})]})})}},3879:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var n=a(5893),r=a(7294),i=a(7634),s=a(4717);function l(e){let{rounded:t="rounded-2xl",flex:a="flex-col",className:l="",hasComponentLayout:o=!1,hasTable:c=!1,isHoverable:u=!1,isModal:p=!1,children:d,footer:g,onClick:f}=e,h=["bg-white flex",l,t,a,p?"dark:bg-slate-900":"dark:bg-slate-900/70"];return u&&h.push("hover:shadow-lg transition-shadow duration-500"),r.createElement("div",{className:h.join(" "),onClick:f},o?d:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Z,{noPadding:c,children:d}),g&&(0,n.jsx)(s.Z,{children:g})]}))}},8271:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var n=a(5893);a(7294);var r=a(3879),i=a(2175),s=a(7721),l=a(7771),o=a(7678),c=a(5138);function u(e){let{prevData:t,formFields:a,handleFormSubmit:u,btnLabel:p="add"}=e,d=async e=>await u(e),g={};return null==a||a.forEach(e=>{let{name:a}=e;g[a]=t&&t[a]?t[a]:""}),(0,n.jsx)("div",{className:"min-w-max lg:w-[400px]",children:(0,n.jsx)(r.Z,{className:"shadow-2xl",children:(0,n.jsx)(i.J9,{initialValues:g,onSubmit:d,children:(0,n.jsxs)(i.l0,{children:[null==a?void 0:a.map((e,t)=>{var a;return e.options?(0,n.jsx)(s.Z,{label:"".concat(e.Label||""),help:"".concat(e.helper||""),children:(0,n.jsx)(i.gN,{as:"select",name:"".concat(e.name),children:null===(a=e.options)||void 0===a?void 0:a.map((e,t)=>(0,n.jsx)("option",{value:e.value,children:e.label},"".concat(e.label+t)))})},"".concat(e.name+t)):(0,n.jsx)(s.Z,{label:"".concat(e.Label||""),help:"".concat(e.helper||""),children:(0,n.jsx)(i.gN,{name:"".concat(e.name),type:"".concat(e.type||"text")})},e.name)}),(0,n.jsx)(l.Z,{}),(0,n.jsx)(o.Z,{children:(0,n.jsx)(c.Z,{type:"submit",label:"".concat(p),color:"info"})})]})})})})}},5106:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var n=a(5893);a(7294);var r=a(1722),i=a(2361);function s(e){let{icon:t,color:a,w:s="w-12",h:l="h-12",bg:o=!1,className:c=""}=e,u=o?r.RH[a]:"".concat(r.uK[a]," bg-gray-50 dark:bg-slate-800");return(0,n.jsx)(i.Z,{path:t,w:s,h:l,size:"24",className:"rounded-full ".concat(u," ").concat(c)})}},6696:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var n=a(5893);a(7294);var r=a(2361),i=a(5106);function s(e){let{icon:t,title:a,main:s=!1,children:l}=e;return(0,n.jsxs)("section",{className:"".concat(s?"":"pt-6"," mb-6 flex items-center justify-between"),children:[(0,n.jsxs)("div",{className:"flex items-center justify-start",children:[t&&s&&(0,n.jsx)(i.Z,{icon:t,color:"light",className:"mr-3",bg:!0}),t&&!s&&(0,n.jsx)(r.Z,{path:t,className:"mr-2",size:"20"}),(0,n.jsx)("h1",{className:"leading-tight ".concat(s?"text-3xl":"text-2xl"),children:a})]}),l]})}},2856:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var n=a(5893),r=a(5317);a(7294);var i=a(5138),s=a(7678);function l(e){let{headers:t,dataList:a=[],actions:l}=e,o=null==t?void 0:t.map(e=>e.label),c=null==t?void 0:t.map(e=>e.key);return(0,n.jsxs)("div",{className:"relative",children:[l.add&&(0,n.jsx)("div",{className:" w-fit ml-auto absolute right-4 -top-10",children:(0,n.jsx)(i.Z,{color:"info",icon:r.m8P,onClick:l.add,small:!0})}),(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:null==o?void 0:o.map(e=>(0,n.jsx)("th",{children:e},e))})}),(0,n.jsx)("tbody",{children:null==a?void 0:a.map(e=>(0,n.jsxs)("tr",{children:[null==c?void 0:c.map((t,a)=>(0,n.jsx)("td",{"data-label":t,children:"".concat(e[t]||"-")},a)),l&&(0,n.jsx)("td",{className:"before:hidden lg:w-1 whitespace-nowrap",children:(0,n.jsxs)(s.Z,{type:"justify-start lg:justify-end",noWrap:!0,children:[l.edit&&(0,n.jsx)(i.Z,{color:"info",icon:r.rgx,onClick:()=>l.edit(e),small:!0}),l.del&&(0,n.jsx)(i.Z,{color:"danger",icon:r.QGK,onClick:()=>l.del(e),small:!0})]})})]},e.id))})]})]})}},1708:function(e,t,a){"use strict";a.d(t,{R:function(){return o}});var n=a(5893),r=a(7294),i=a(1358),s=a.n(i);let l=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];function o(e){let{itemsPerPage:t=10,onClick:a,totalItems:i=l.length}=e,[,o]=(0,r.useState)(0);return(0,n.jsx)("div",{className:"pagination-container mx-auto w-max",children:(0,n.jsx)(s(),{breakLabel:"...",nextLabel:"Next",onPageChange:e=>{let n=e.selected*t%i;o(n),a(e.selected)},pageRangeDisplayed:4,pageCount:Math.ceil(i/t),previousLabel:"Prev",renderOnZeroPageCount:null,containerClassName:"paginationButtons",activeClassName:"activePaginate"})})}},4754:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return P}});var n=a(5893),r=a(5317),i=a(9008),s=a.n(i),l=a(7294),o=a(3879),c=a(9605),u=a(2641),p=a(6696),d=a(5143),g=a(2856),f=a(1440),h=a(1098),m=a(1187),b=a(6860),v=a(1708),x=a(6076),y=a(8271),C=a(2379);function k(){let{isError:e,isLoading:t,getItems:a,delItems:r,postItem:i,updateQuery:s,result:c}=(0,h.t5)({page:0,per_page:10}),{data:u=[],pagination:p}=c,[d,k]=(0,l.useState)(null),[N,P]=(0,l.useState)(null),[j,L]=(0,l.useState)(null),[w,_]=(0,l.useState)([]),[E,O]=(0,l.useState)([]),[Z,R]=(0,l.useState)([]),A=async()=>{await (0,C.CQ)({end_points:["users","nfc-card/all","common-api/vehicle-types"],resolve:e=>{let[t,a,n]=e;if(t.status){let e=t.data;O(()=>null==e?void 0:e.map(e=>({label:"".concat(e.first_name," ").concat(e.last_name),value:e.id})))}if(a.status){let e=a.data;R(()=>null==e?void 0:e.map(e=>({label:"".concat(e.nfc_card_no," (").concat(e.id,")"),value:e.nfc_card_no})))}if(n.status){let e=n.data;_(()=>null==e?void 0:e.map(e=>({label:"".concat(e.type_name),value:e.id})))}}})},S=async()=>{await r({ids:[N.id],endPoint:"user-vehicle/delete",resolve:e=>{(0,x.h)({message:e.message})}}),P(null)},T=async e=>{j?await i({endPoint:"user-vehicle/update",data:{...e,...j},reject:e=>{console.log(e),(0,x.h)({message:e.response.data.error})}}):await i({endPoint:"user-vehicle/create",data:e,reject:e=>{console.log(e),(0,x.h)({message:e.response.data.error})}})};(0,l.useEffect)(()=>{A()},[]),(0,l.useEffect)(()=>{a({endPoint:"user-vehicle/all"})},[a]);let B=l.useCallback(e=>e.type_name,[]),D=l.useCallback(e=>{let{first_name:t,last_name:a}=e;return"".concat(t," ").concat(a)},[]),I=l.useCallback(e=>{let{mobile_number:t}=e;return t},[]);return console.log(j),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f.Z,{title:"".concat(j?"Update User Vehicle":"Add New "),buttonColor:"info",buttonLabel:"Done",isActive:!!d||!!j,onCancel:()=>{k(null),P(null),L(null)},actionBar:!1,children:(0,n.jsx)(y.Z,{prevData:j,btnLabel:"".concat(j?"Update":"Add"),handleFormSubmit:T,formFields:[{name:"reg_no",Label:"Reg No",helper:"Enter your reg. no"},{name:"user_id",Label:"User",options:[{label:"Choose",value:"null"},...E]},{name:"nfc_card_no",Label:"NFC CARD",options:[{label:"Choose",value:"null"},...Z]},{name:"vehicle_type_id",Label:"Vehicle type",options:[{label:"Choose",value:"null"},...w]}]})}),(0,n.jsxs)(f.Z,{title:"Please confirm",buttonColor:"danger",buttonLabel:"Confirm",isActive:!!N,onConfirm:S,onCancel:()=>P(null),children:[(0,n.jsx)("p",{children:"You are going to remove from data list "}),(0,n.jsx)("p",{children:"Confirm if you are sure"})]}),(0,n.jsxs)(m.Z,{isLoading:t,isError:e,children:[(0,n.jsx)(g.Z,{actions:{add:()=>k({}),del:e=>P(e),edit:e=>L(e)},dataList:null==u?void 0:u.map(e=>({...e,m_vehicle_type_type_name:B(e.vehicle_type),m_user_fullName:D(e.user),m_user_mobile_number:I(e.user)})),headers:[{key:"reg_no",label:"Reg. Number"},{key:"m_vehicle_type_type_name",label:"Vehicle Type"},{key:"m_user_fullName",label:"Owner Name"},{key:"m_user_mobile_number",label:"Mobile Number"},{key:"nfc_card_no",label:"NFC Card No"}]}),!u.length&&(0,n.jsx)(o.Z,{children:(0,n.jsx)(b.Z,{})})]}),(0,n.jsx)("div",{children:(0,n.jsx)(v.R,{onClick:e=>s(t=>({...t,page:e})),itemsPerPage:p.per_page,totalItems:p.total})})]})}let N=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s(),{children:(0,n.jsx)("title",{children:(0,d.pz)("Users Vehicle")})}),(0,n.jsxs)(u.Z,{children:[(0,n.jsx)(p.Z,{icon:r.FYI,title:"All users Vehicle",main:!0}),(0,n.jsx)(o.Z,{className:"mb-6",hasTable:!0,children:(0,n.jsx)(k,{})})]})]});N.getLayout=function(e){return(0,n.jsx)(c.Z,{children:e})};var P=N},1358:function(e,t,a){var n;e.exports=(n=a(7294),(()=>{var e={703:(e,t,a)=>{"use strict";var n=a(414);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,a,r,i,s){if(s!==n){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return a.PropTypes=a,a}},697:(e,t,a)=>{e.exports=a(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:e=>{"use strict";e.exports=n}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,a),i.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{"use strict";a.r(r),a.d(r,{default:()=>v});var e=a(98),t=a.n(e),n=a(697),i=a.n(n);function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var l=function(e){var a=e.pageClassName,n=e.pageLinkClassName,r=e.page,i=e.selected,l=e.activeClassName,o=e.activeLinkClassName,c=e.getEventListener,u=e.pageSelectedHandler,p=e.href,d=e.extraAriaContext,g=e.pageLabelBuilder,f=e.rel,h=e.ariaLabel||"Page "+r+(d?" "+d:""),m=null;return i&&(m="page",h=e.ariaLabel||"Page "+r+" is your current page",a=void 0!==a?a+" "+l:l,void 0!==n?void 0!==o&&(n=n+" "+o):n=o),t().createElement("li",{className:a},t().createElement("a",s({rel:f,role:p?void 0:"button",className:n,href:p,tabIndex:i?"-1":"0","aria-label":h,"aria-current":m,onKeyPress:u},c(u)),g(r)))};function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}l.propTypes={pageSelectedHandler:i().func.isRequired,selected:i().bool.isRequired,pageClassName:i().string,pageLinkClassName:i().string,activeClassName:i().string,activeLinkClassName:i().string,extraAriaContext:i().string,href:i().string,ariaLabel:i().string,page:i().number.isRequired,getEventListener:i().func.isRequired,pageLabelBuilder:i().func.isRequired,rel:i().string};var c=function(e){var a=e.breakLabel,n=e.breakAriaLabel,r=e.breakClassName,i=e.breakLinkClassName,s=e.breakHandler,l=e.getEventListener;return t().createElement("li",{className:r||"break"},t().createElement("a",o({className:i,role:"button",tabIndex:"0","aria-label":n,onKeyPress:s},l(s)),a))};function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return null!=e?e:t}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(){return(d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function g(e,t){return(g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function f(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}c.propTypes={breakLabel:i().oneOfType([i().string,i().node]),breakAriaLabel:i().string,breakClassName:i().string,breakLinkClassName:i().string,breakHandler:i().func.isRequired,getEventListener:i().func.isRequired};var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(i,e);var a,n,r=(n=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t=h(i);if(n){var a=h(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return f(e)}(this,e)});function i(e){var a,n;return function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,i),m(f(a=r.call(this,e)),"handlePreviousPage",function(e){var t=a.state.selected;a.handleClick(e,null,t>0?t-1:void 0,{isPrevious:!0})}),m(f(a),"handleNextPage",function(e){var t=a.state.selected,n=a.props.pageCount;a.handleClick(e,null,t<n-1?t+1:void 0,{isNext:!0})}),m(f(a),"handlePageSelected",function(e,t){if(a.state.selected===e)return a.callActiveCallback(e),void a.handleClick(t,null,void 0,{isActive:!0});a.handleClick(t,null,e)}),m(f(a),"handlePageChange",function(e){a.state.selected!==e&&(a.setState({selected:e}),a.callCallback(e))}),m(f(a),"getEventListener",function(e){return m({},a.props.eventListener,e)}),m(f(a),"handleClick",function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=r.isPrevious,s=r.isNext,l=r.isBreak,o=r.isActive;e.preventDefault?e.preventDefault():e.returnValue=!1;var c=a.state.selected,u=a.props.onClick,p=n;if(u){var d=u({index:t,selected:c,nextSelectedPage:n,event:e,isPrevious:void 0!==i&&i,isNext:void 0!==s&&s,isBreak:void 0!==l&&l,isActive:void 0!==o&&o});if(!1===d)return;Number.isInteger(d)&&(p=d)}void 0!==p&&a.handlePageChange(p)}),m(f(a),"handleBreakClick",function(e,t){var n=a.state.selected;a.handleClick(t,e,n<e?a.getForwardJump():a.getBackwardJump(),{isBreak:!0})}),m(f(a),"callCallback",function(e){void 0!==a.props.onPageChange&&"function"==typeof a.props.onPageChange&&a.props.onPageChange({selected:e})}),m(f(a),"callActiveCallback",function(e){void 0!==a.props.onPageActive&&"function"==typeof a.props.onPageActive&&a.props.onPageActive({selected:e})}),m(f(a),"getElementPageRel",function(e){var t=a.state.selected,n=a.props,r=n.nextPageRel,i=n.prevPageRel,s=n.selectedPageRel;return t-1===e?i:t===e?s:t+1===e?r:void 0}),m(f(a),"pagination",function(){var e=[],n=a.props,r=n.pageRangeDisplayed,i=n.pageCount,s=n.marginPagesDisplayed,l=n.breakLabel,o=n.breakClassName,u=n.breakLinkClassName,p=n.breakAriaLabels,d=a.state.selected;if(i<=r)for(var g=0;g<i;g++)e.push(a.getPageElement(g));else{var f=r/2,h=r-f;d>i-r/2?f=r-(h=i-d):d<r/2&&(h=r-(f=d));var m,b,v=function(e){return a.getPageElement(e)},x=[];for(m=0;m<i;m++){var y=m+1;if(y<=s)x.push({type:"page",index:m,display:v(m)});else if(y>i-s)x.push({type:"page",index:m,display:v(m)});else if(m>=d-f&&m<=d+(0===d&&r>1?h-1:h))x.push({type:"page",index:m,display:v(m)});else if(l&&x.length>0&&x[x.length-1].display!==b&&(r>0||s>0)){var C=m<d?p.backward:p.forward;b=t().createElement(c,{key:m,breakAriaLabel:C,breakLabel:l,breakClassName:o,breakLinkClassName:u,breakHandler:a.handleBreakClick.bind(null,m),getEventListener:a.getEventListener}),x.push({type:"break",index:m,display:b})}}x.forEach(function(t,a){var n=t;"break"===t.type&&x[a-1]&&"page"===x[a-1].type&&x[a+1]&&"page"===x[a+1].type&&x[a+1].index-x[a-1].index<=2&&(n={type:"page",index:t.index,display:v(t.index)}),e.push(n.display)})}return e}),void 0!==e.initialPage&&void 0!==e.forcePage&&console.warn("(react-paginate): Both initialPage (".concat(e.initialPage,") and forcePage (").concat(e.forcePage,") props are provided, which is discouraged.")+" Use exclusively forcePage prop for a controlled component.\nSee https://reactjs.org/docs/forms.html#controlled-components"),n=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,a.state={selected:n},a}return a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback,n=e.extraAriaContext,r=e.pageCount,i=e.forcePage;void 0===t||a||this.callCallback(t),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(r)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(r,"). Did you forget a Math.ceil()?")),void 0!==t&&t>r-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(t," > ").concat(r-1,").")),void 0!==i&&i>r-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(i," > ").concat(r-1,")."))}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(e.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,a=t.pageCount,n=e+t.pageRangeDisplayed;return n>=a?a-1:n}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"getElementHref",value:function(e){var t=this.props,a=t.hrefBuilder,n=t.pageCount,r=t.hrefAllControls;if(a)return r||e>=0&&e<n?a(e+1,n,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(e){var t=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var a=this.props.ariaLabelBuilder(e+1,t);return this.props.extraAriaContext&&!t&&(a=a+" "+this.props.extraAriaContext),a}}},{key:"getPageElement",value:function(e){var a=this.state.selected,n=this.props,r=n.pageClassName,i=n.pageLinkClassName,s=n.activeClassName,o=n.activeLinkClassName,c=n.extraAriaContext,u=n.pageLabelBuilder;return t().createElement(l,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:a===e,rel:this.getElementPageRel(e),pageClassName:r,pageLinkClassName:i,activeClassName:s,activeLinkClassName:o,extraAriaContext:c,href:this.getElementHref(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,pageLabelBuilder:u,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props.renderOnZeroPageCount;if(0===this.props.pageCount&&void 0!==e)return e?e(this.props):e;var a=this.props,n=a.disabledClassName,r=a.disabledLinkClassName,i=a.pageCount,s=a.className,l=a.containerClassName,o=a.previousLabel,c=a.previousClassName,p=a.previousLinkClassName,g=a.previousAriaLabel,f=a.prevRel,h=a.nextLabel,m=a.nextClassName,b=a.nextLinkClassName,v=a.nextAriaLabel,x=a.nextRel,y=this.state.selected,C=0===y,k=y===i-1,N="".concat(u(c)).concat(C?" ".concat(u(n)):""),P="".concat(u(m)).concat(k?" ".concat(u(n)):""),j="".concat(u(p)).concat(C?" ".concat(u(r)):""),L="".concat(u(b)).concat(k?" ".concat(u(r)):""),w=C?"true":"false",_=k?"true":"false";return t().createElement("ul",{className:s||l,role:"navigation","aria-label":"Pagination"},t().createElement("li",{className:N},t().createElement("a",d({className:j,href:this.getElementHref(y-1),tabIndex:C?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":w,"aria-label":g,rel:f},this.getEventListener(this.handlePreviousPage)),o)),this.pagination(),t().createElement("li",{className:P},t().createElement("a",d({className:L,href:this.getElementHref(y+1),tabIndex:k?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":_,"aria-label":v,rel:x},this.getEventListener(this.handleNextPage)),h)))}}],function(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(i.prototype,a),Object.defineProperty(i,"prototype",{writable:!1}),i}(e.Component);m(b,"propTypes",{pageCount:i().number.isRequired,pageRangeDisplayed:i().number,marginPagesDisplayed:i().number,previousLabel:i().node,previousAriaLabel:i().string,prevPageRel:i().string,prevRel:i().string,nextLabel:i().node,nextAriaLabel:i().string,nextPageRel:i().string,nextRel:i().string,breakLabel:i().oneOfType([i().string,i().node]),breakAriaLabels:i().shape({forward:i().string,backward:i().string}),hrefBuilder:i().func,hrefAllControls:i().bool,onPageChange:i().func,onPageActive:i().func,onClick:i().func,initialPage:i().number,forcePage:i().number,disableInitialCallback:i().bool,containerClassName:i().string,className:i().string,pageClassName:i().string,pageLinkClassName:i().string,pageLabelBuilder:i().func,activeClassName:i().string,activeLinkClassName:i().string,previousClassName:i().string,nextClassName:i().string,previousLinkClassName:i().string,nextLinkClassName:i().string,disabledClassName:i().string,disabledLinkClassName:i().string,breakClassName:i().string,breakLinkClassName:i().string,extraAriaContext:i().string,ariaLabelBuilder:i().func,eventListener:i().string,renderOnZeroPageCount:i().func,selectedPageRel:i().string}),m(b,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(e){return e},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});let v=b})(),r})())}},function(e){e.O(0,[702,664,848,942,256,774,888,179],function(){return e(e.s=920)}),_N_E=e.O()}]);