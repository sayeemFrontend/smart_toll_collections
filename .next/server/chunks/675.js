exports.id=675,exports.ids=[675],exports.modules={880:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});let i=r(167),o=r(8760),n=o._(r(6689)),l=i._(r(6405)),a=i._(r(4605)),s=r(3405),u=r(2269),d=r(6218);r(3213);let c=r(5469),f=i._(r(2854)),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e,t,r,i,o,n){let l=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===l)return;e["data-loaded-src"]=l;let a="decode"in e?e.decode():Promise.resolve();a.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}})}function p(e){let[t,r]=n.version.split("."),i=parseInt(t,10),o=parseInt(r,10);return i>18||18===i&&o>=3?{fetchPriority:e}:{fetchpriority:e}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let h=(0,n.forwardRef)((e,t)=>{let{src:r,srcSet:i,sizes:o,height:l,width:a,decoding:s,className:u,style:d,fetchPriority:c,placeholder:f,loading:g,unoptimized:h,fill:v,onLoadRef:b,onLoadingCompleteRef:y,setBlurComplete:w,setShowAltText:S,onLoad:_,onError:x,...C}=e;return n.default.createElement("img",{...C,...p(c),loading:g,width:a,height:l,decoding:s,"data-nimg":v?"fill":"1",className:u,style:d,sizes:o,srcSet:i,src:r,ref:(0,n.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(x&&(e.src=e.src),e.complete&&m(e,f,b,y,w,h))},[r,f,b,y,w,x,h,t]),onLoad:e=>{let t=e.currentTarget;m(t,f,b,y,w,h)},onError:e=>{S(!0),"empty"!==f&&w(!0),x&&x(e)}})});function v(e){let{isAppRouter:t,imgAttributes:r}=e,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...p(r.fetchPriority)};return t&&l.default.preload?(l.default.preload(r.src,i),null):n.default.createElement(a.default,null,n.default.createElement("link",{key:"__nimg-"+r.src+r.srcSet+r.sizes,rel:"preload",href:r.srcSet?void 0:r.src,...i}))}let b=(0,n.forwardRef)((e,t)=>{let r=(0,n.useContext)(c.RouterContext),i=(0,n.useContext)(d.ImageConfigContext),o=(0,n.useMemo)(()=>{let e=g||i||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[i]),{onLoad:l,onLoadingComplete:a}=e,m=(0,n.useRef)(l);(0,n.useEffect)(()=>{m.current=l},[l]);let p=(0,n.useRef)(a);(0,n.useEffect)(()=>{p.current=a},[a]);let[b,y]=(0,n.useState)(!1),[w,S]=(0,n.useState)(!1),{props:_,meta:x}=(0,s.getImgProps)(e,{defaultLoader:f.default,imgConf:o,blurComplete:b,showAltText:w});return n.default.createElement(n.default.Fragment,null,n.default.createElement(h,{..._,unoptimized:x.unoptimized,placeholder:x.placeholder,fill:x.fill,onLoadRef:m,onLoadingCompleteRef:p,setBlurComplete:y,setShowAltText:S,ref:t}),x.priority?n.default.createElement(v,{isAppRouter:!r,imgAttributes:_}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3405:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(3213);let i=r(7736),o=r(2269);function n(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r;let a,s,u,{src:d,sizes:c,unoptimized:f=!1,priority:g=!1,loading:m,className:p,quality:h,width:v,height:b,fill:y=!1,style:w,onLoad:S,onLoadingComplete:_,placeholder:x="empty",blurDataURL:C,fetchPriority:P,layout:z,objectFit:E,objectPosition:j,lazyBoundary:O,lazyRoot:I,...M}=e,{imgConf:R,showAltText:D,blurComplete:A,defaultLoader:k}=t,L=R||o.imageConfigDefault;if("allSizes"in L)a=L;else{let e=[...L.deviceSizes,...L.imageSizes].sort((e,t)=>e-t),t=L.deviceSizes.sort((e,t)=>e-t);a={...L,allSizes:e,deviceSizes:t}}let G=M.loader||k;delete M.loader,delete M.srcSet;let N="__next_img_default"in G;if(N){if("custom"===a.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=G;G=t=>{let{config:r,...i}=t;return e(i)}}if(z){"fill"===z&&(y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[z];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[z];t&&!c&&(c=t)}let T="",B=l(v),F=l(b);if("object"==typeof(r=d)&&(n(r)||void 0!==r.src)){let e=n(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,u=e.blurHeight,C=C||e.blurDataURL,T=e.src,!y){if(B||F){if(B&&!F){let t=B/e.width;F=Math.round(e.height*t)}else if(!B&&F){let t=F/e.height;B=Math.round(e.width*t)}}else B=e.width,F=e.height}}let W=!g&&("lazy"===m||void 0===m);(!(d="string"==typeof d?d:T)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,W=!1),a.unoptimized&&(f=!0),N&&d.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(f=!0),g&&(P="high");let V=l(h),U=Object.assign(y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:E,objectPosition:j}:{},D?{}:{color:"transparent"},w),q=A||"empty"===x?null:"blur"===x?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:B,heightInt:F,blurWidth:s,blurHeight:u,blurDataURL:C||"",objectFit:U.objectFit})+'")':'url("'+x+'")',J=q?{backgroundSize:U.objectFit||"cover",backgroundPosition:U.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:q}:{},Y=function(e){let{config:t,src:r,unoptimized:i,width:o,quality:n,sizes:l,loader:a}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:u}=function(e,t,r){let{deviceSizes:i,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let n=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:n,kind:"x"}}(t,o,l),d=s.length-1;return{sizes:l||"w"!==u?l:"100vw",srcSet:s.map((e,i)=>a({config:t,src:r,quality:n,width:e})+" "+("w"===u?e:i+1)+u).join(", "),src:a({config:t,src:r,quality:n,width:s[d]})}}({config:a,src:d,unoptimized:f,width:B,quality:V,sizes:c,loader:G}),H={...M,loading:W?"lazy":m,fetchPriority:P,width:B,height:F,decoding:"async",className:p,style:{...U,...J},sizes:Y.sizes,srcSet:Y.srcSet,src:Y.src},X={unoptimized:f,priority:g,placeholder:x,fill:y};return{props:H,meta:X}}},7736:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:o,blurDataURL:n,objectFit:l}=e,a=i?40*i:t,s=o?40*o:r,u=a&&s?"viewBox='0 0 "+a+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+n+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},2269:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return i}});let r=["default","imgix","cloudinary","akamai","custom"],i={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},5365:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return u},unstable_getImgProps:function(){return s}});let i=r(167),o=r(3405),n=r(3213),l=r(880),a=i._(r(2854)),s=e=>{(0,n.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,o.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},u=l.Image},2854:(e,t)=>{"use strict";function r(e){let{config:t,src:r,width:i,quality:o}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},6218:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.ImageConfigContext},5675:(e,t,r)=>{e.exports=r(5365)}};