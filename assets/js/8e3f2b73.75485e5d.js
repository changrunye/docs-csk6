"use strict";(self.webpackChunkls_docs_web=self.webpackChunkls_docs_web||[]).push([[7e3],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>c});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var m=n.createContext({}),k=function(t){var e=n.useContext(m),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=k(t.components);return n.createElement(m.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,m=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),s=k(r),c=a,d=s["".concat(m,".").concat(c)]||s[c]||o[c]||l;return r?n.createElement(d,i(i({ref:e},u),{},{components:r})):n.createElement(d,i({ref:e},u))}));function c(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=s;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:a,i[1]=p;for(var k=2;k<l;k++)i[k]=r[k];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},23941:(t,e,r)=>{r.r(e),r.d(e,{contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=r(87462),a=(r(67294),r(3905));const l={},i="Timer\u5b9a\u65f6\u5668",p={unversionedId:"chips/600X/application/kernel/timer",id:"chips/600X/application/kernel/timer",isDocsHomePage:!1,title:"Timer\u5b9a\u65f6\u5668",description:"Timer\u5b9a\u65f6\u5668\u662fZephyr RTOS\u4e2d\u7684\u4e00\u4e2a\u5185\u6838\u5bf9\u8c61\uff0c\u5b83\u4f7f\u7528\u5185\u6838\u7684\u7cfb\u7edf\u65f6\u949f\u5b9e\u73b0\u8ba1\u6570\u548c\u5b9a\u65f6\u5668\u3002\u7528\u6237\u53ef\u4ee5\u4f7f\u7528Timer\u5728\u5b9e\u73b0\u6709\u8f83\u9ad8\u65f6\u95f4\u7cbe\u5ea6\u8981\u6c42\u7684\u4e1a\u52a1\u529f\u80fd\uff0c\u5982\u5468\u671f\u6027\u4efb\u52a1\u3001\u65f6\u5e8f\u63a7\u5236\u7b49\u3002",source:"@site/docs/chips/600X/application/kernel/timer.md",sourceDirName:"chips/600X/application/kernel",slug:"/chips/600X/application/kernel/timer",permalink:"/docs-csk6/chips/600X/application/kernel/timer",version:"current",frontMatter:{}},m=[{value:"Timer\u4ecb\u7ecd",id:"timer\u4ecb\u7ecd",children:[{value:"timer\u7684\u7279\u6027",id:"timer\u7684\u7279\u6027",children:[]},{value:"Timer\u5de5\u4f5c\u7684\u793a\u4f8b\u56fe",id:"timer\u5de5\u4f5c\u7684\u793a\u4f8b\u56fe",children:[]}]},{value:"Timer\u4f7f\u7528\u793a\u4f8b",id:"timer\u4f7f\u7528\u793a\u4f8b",children:[{value:"\u5e38\u7528API\u63a5\u53e3",id:"\u5e38\u7528api\u63a5\u53e3",children:[]},{value:"\u521b\u5efa\u4e00\u4e2a<code>hello_world</code>",id:"\u521b\u5efa\u4e00\u4e2ahello_world",children:[]},{value:"Timer\u529f\u80fd\u4f7f\u7528",id:"timer\u529f\u80fd\u4f7f\u7528",children:[]}]},{value:"\u7f16\u8bd1\u548c\u70e7\u5f55",id:"\u7f16\u8bd1\u548c\u70e7\u5f55",children:[]},{value:"\u8017\u65f6\u64cd\u4f5c\u5904\u7406",id:"\u8017\u65f6\u64cd\u4f5c\u5904\u7406",children:[]}],k={toc:m};function u(t){let{components:e,...l}=t;return(0,a.kt)("wrapper",(0,n.Z)({},k,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"timer\u5b9a\u65f6\u5668"},"Timer\u5b9a\u65f6\u5668"),(0,a.kt)("p",null,"Timer\u5b9a\u65f6\u5668\u662fZephyr RTOS\u4e2d\u7684\u4e00\u4e2a\u5185\u6838\u5bf9\u8c61\uff0c\u5b83\u4f7f\u7528\u5185\u6838\u7684\u7cfb\u7edf\u65f6\u949f\u5b9e\u73b0\u8ba1\u6570\u548c\u5b9a\u65f6\u5668\u3002\u7528\u6237\u53ef\u4ee5\u4f7f\u7528Timer\u5728\u5b9e\u73b0\u6709\u8f83\u9ad8\u65f6\u95f4\u7cbe\u5ea6\u8981\u6c42\u7684\u4e1a\u52a1\u529f\u80fd\uff0c\u5982\u5468\u671f\u6027\u4efb\u52a1\u3001\u65f6\u5e8f\u63a7\u5236\u7b49\u3002"),(0,a.kt)("p",null,"\u901a\u8fc7\u672c\u7ae0\u8282\u7684\u5b66\u4e60\uff0c\u60a8\u5c06\u5b66\u4e60\u5230\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Timer\u7684\u7279\u6027\u4e0e\u5e38\u7528\u63a5\u53e3"),(0,a.kt)("li",{parentName:"ul"},"Timer\u7684\u57fa\u672c\u4f7f\u7528\u65b9\u6cd5"),(0,a.kt)("li",{parentName:"ul"},"\u5728CSK6\u82af\u7247\u4e0a\u4f7f\u7528Timer\u5b9e\u73b0\u4e00\u4e2a\u5468\u671f\u6027\u6267\u884c\u64cd\u4f5c\u7684\u5e94\u7528")),(0,a.kt)("h2",{id:"timer\u4ecb\u7ecd"},"Timer\u4ecb\u7ecd"),(0,a.kt)("p",null,"\u7528\u6237\u53ef\u6839\u636e\u9700\u8981\u5bf9\u4e00\u4e2aTimer\u8fdb\u884c\u914d\u7f6e\uff0c\u5e76\u901a\u8fc7\u6ce8\u518c\u56de\u8c03\u7684\u65b9\u5f0f\u6307\u5b9aTimer\u5230\u671f\u65f6\u6267\u884c\u7684\u64cd\u4f5c\uff0c\u5b9e\u73b0\u8ba1\u65f6\u7ed3\u675f\u540e\u6267\u884c\u6307\u5b9a\u64cd\u4f5c\u3002Timer\u4e5f\u53ef\u4ee5\u7528\u4e8e\u5468\u671f\u6027\u8ba1\u6570\u3002"),(0,a.kt)("h3",{id:"timer\u7684\u7279\u6027"},"timer\u7684\u7279\u6027"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"timer\u53ef\u5b9a\u4e49\u7684\u6570\u91cf\uff1a")),(0,a.kt)("p",{parentName:"li"},"  \u5728\u5185\u5b58\u8db3\u591f\u7684\u524d\u63d0\u4e0b\uff0c\u5185\u6838\u4e0d\u9650\u5236timer\u7684\u6570\u91cf\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"timer\u5173\u952e\u53c2\u6570\uff1a")),(0,a.kt)("p",{parentName:"li"},"  duration\uff1a\u8bbe\u5b9atimer\u7b2c\u4e00\u6b21\u5230\u671f\u7684\u65f6\u95f4\u3002\nperiod: timer\u7b2c\u4e00\u6b21\u5230\u671f\u540e\u7684\u89e6\u53d1\u65f6\u95f4\u95f4\u9694\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"timer\u56de\u8c03\u6ce8\u518c\uff1a")),(0,a.kt)("p",{parentName:"li"},"  \u53ef\u6ce8\u518c\u5230\u671f\u56de\u8c03\u51fd\u6570\uff0c\u5728duration\u6216period\u5230\u671f\u540e\u5728\u65f6\u949f\u4e2d\u65ad\u4e2d\u56de\u8c03\u8be5\u51fd\u6570\u3002\n\u53ef\u6ce8\u518c\u505c\u6b62\u56de\u8c03\u51fd\u6570\uff0c\u5728\u6267\u884cstop timer\u7684\u7ebf\u7a0b\u4e2d\u56de\u8c03\u8be5\u51fd\u6570\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"timer\u8ba1\u6570\u72b6\u6001\u83b7\u53d6\uff1a")),(0,a.kt)("p",{parentName:"li"},"  timer\u63d0\u4f9b\u4e86\u4e00\u4e2astatus\u503c\uff0c\u7528\u6765\u6807\u8bb0\u4e0a\u4e00\u6b21\u8bfb\u53d6\u72b6\u6001\u5230\u5f53\u524d\u8fd9\u4e2a\u65f6\u95f4\u6bb5\u5185timer\u5230\u671f\u4e86\u591a\u5c11\u6b21\u3002"))),(0,a.kt)("h3",{id:"timer\u5de5\u4f5c\u7684\u793a\u4f8b\u56fe"},"Timer\u5de5\u4f5c\u7684\u793a\u4f8b\u56fe"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(19146).Z}),"\nduration\uff1a\u8bbe\u5b9atimer\u7b2c\u4e00\u6b21\u5230\u671f\u7684\u65f6\u95f4\u3002\nperiod: timer\u7b2c\u4e00\u6b21\u5230\u671f\u540e\u7684\u89e6\u53d1\u65f6\u95f4\u95f4\u9694\u3002\nexpiry\uff1a\u89e6\u53d1\u56de\u8c03\u3002"),(0,a.kt)("h2",{id:"timer\u4f7f\u7528\u793a\u4f8b"},"Timer\u4f7f\u7528\u793a\u4f8b"),(0,a.kt)("h3",{id:"\u5e38\u7528api\u63a5\u53e3"},"\u5e38\u7528API\u63a5\u53e3"),(0,a.kt)("p",null,"\u9759\u6001\u5b9a\u4e49\u5e76\u521d\u59cb\u5316timer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"#define K_TIMER_DEFINE(name, expiry_fn, stop_fn)\n")),(0,a.kt)("p",null,"\u8be5\u5b9a\u65f6\u5668\u5b9a\u4e49\u4e4b\u540e\uff0c\u53ef\u4ee5\u5728\u6a21\u5757\u5916\u90e8\u4f7f\u7528\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name"),(0,a.kt)("td",{parentName:"tr",align:null},"\u58f0\u660e\u4e3astruct k_timer\u7684\u7ed3\u6784\u4f53\u53d8\u91cf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"expiry_fn"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5b9a\u65f6\u5668\u6bcf\u6b21\u5230\u671f\u65f6\uff0c\u8c03\u7528\u7684\u56de\u8c03\u51fd\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"stop_fn"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5b9a\u65f6\u5668stop\u4e4b\u540e\uff0c\u8c03\u7528\u7684\u56de\u8c03\u51fd\u6570")))),(0,a.kt)("br",null),(0,a.kt)("p",null,"\u521d\u59cb\u5316\u5b9a\u65f6\u5668"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"void k_timer_init(struct k_timer *timer, k_timer_expiry_t expiry_fn, k_timer_stop_t stop_fn);\n")),(0,a.kt)("p",null,"\u6b64\u8be5\u51fd\u6570\u5728\u9996\u6b21\u4f7f\u7528\u8ba1\u5b9a\u65f6\u5668\u4e4b\u524d\u521d\u59cb\u5316\u5b9a\u65f6\u5668\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"timer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4f20\u5165\u58f0\u660e\u540e\u7684struct k_timer \u7ed3\u6784\u4f53\u53d8\u91cf\u6307\u9488")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"expiry_fn"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5b9a\u65f6\u5668\u6bcf\u6b21\u5230\u671f\u65f6\uff0c\u8c03\u7528\u7684\u56de\u8c03\u51fd\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"stop_fn"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5b9a\u65f6\u5668stop\u4e4b\u540e\uff0c\u8c03\u7528\u7684\u56de\u8c03\u51fd\u6570")))),(0,a.kt)("br",null),(0,a.kt)("p",null,"\u542f\u52a8\u5b9a\u65f6\u5668"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"void k_timer_start(struct k_timer *timer, k_timeout_t duration, k_timeout_t period);\n")),(0,a.kt)("p",null,"\u542f\u52a8\u5b9a\u65f6\u5668\u5e76\u91cd\u7f6e\u5b9a\u65f6\u5668\u72b6\u6001\u4e3a0\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"timer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4f20\u5165\u58f0\u660e\u5b9a\u4e49\u540e\u7684struct k_timer \u7ed3\u6784\u4f53\u53d8\u91cf\u6307\u9488")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"duration"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5b9a\u65f6\u5668\u7b2c\u4e00\u6b21\u8d85\u65f6\u4e4b\u524d\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\u3002\u5b83\u5fc5\u987b\u5927\u4e8e0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"period"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5728\u7b2c\u4e00\u4e2a\u5b9a\u65f6\u5668\u7ed3\u675f\u540e\u6240\u6709\u5b9a\u65f6\u5668\u4e4b\u95f4\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\u3002\u5b83\u5fc5\u987b\u662f\u975e\u8d1f\u6570\u7684\u3002period\u4e3a0\u610f\u5473\u7740\u5b9a\u65f6\u5668\u662f\u4e00\u4e2a\u4e00\u6b21\u6027\u5b9a\u65f6\u5668\uff0c\u5728\u4e00\u6b21\u8d85\u65f6\u540e\u505c\u6b62\u3002")))),(0,a.kt)("br",null),(0,a.kt)("p",null,"\u505c\u6b62\u5b9a\u65f6\u5668"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"void k_timer_stop(struct k_timer *timer);\n")),(0,a.kt)("p",null,"\u505c\u6b62\u5b9a\u65f6\u5668\uff0c\u5982\u679c\u521d\u59cb\u5316\u65f6\u5019\u914d\u7f6e\u4e86\u5bf9\u5e94\u7684\u505c\u6b62\u56de\u8c03\u51fd\u6570\uff0c\u5219\u4f1a\u56de\u8c03\u51fd\u6570\u3002\u505c\u6b62\u4e00\u4e2a\u672a\u542f\u52a8\u7684\u5b9a\u65f6\u5668\u4e0d\u4f1a\u6709\u4efb\u4f55\u5f71\u54cd\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"timer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4f20\u5165\u58f0\u660e\u5b9a\u4e49\u540e\u7684struct k_timer \u7ed3\u6784\u4f53\u53d8\u91cf\u6307\u9488")))),(0,a.kt)("br",null),(0,a.kt)("p",null,"\u8bfb\u53d6\u5b9a\u65f6\u5668\u72b6\u6001"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"uint32_t k_timer_status_get(struct k_timer *timer);\n")),(0,a.kt)("p",null,"\u8bfb\u53d6\u5b9a\u65f6\u5668\u7684\u72b6\u6001\uff0c\u8be5\u72b6\u6001\u8868\u793a\u81ea\u4e0a\u6b21\u8bfb\u53d6\u5176\u72b6\u6001\u4ee5\u6765\u5b9a\u65f6\u5668\u5df2\u5230\u671f\u7684\u6b21\u6570\uff0c\u6bcf\u6b21\u8bfb\u53d6\u540e\u4f1a\u91cd\u7f6e\u72b6\u6001\u4e3a0\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"timer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4f20\u5165\u58f0\u660e\u5b9a\u4e49\u540e\u7684struct k_timer \u7ed3\u6784\u4f53\u53d8\u91cf\u6307\u9488")))),(0,a.kt)("br",null),(0,a.kt)("p",null,"\u7b49\u5f85\u5b9a\u65f6\u5668\u5230\u671f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"uint32_t k_timer_status_sync(struct k_timer *timer);\n")),(0,a.kt)("p",null,"\u7b49\u5f85\u5b9a\u65f6\u5668\u5230\u671f\u3002\u8c03\u7528\u8be5\u51fd\u6570\u4f1a\u963b\u585e\u7ebf\u7a0b\uff0c\u76f4\u5230\u5b9a\u65f6\u5668\u7684\u72b6\u6001\u4e3a\u975e\u96f6\uff08\u8868\u793a\u81ea\u4e0a\u6b21\u68c0\u67e5\u4ee5\u6765\u5b83\u81f3\u5c11\u5df2\u8fc7\u671f\u4e00\u6b21\uff09\u6216\u5b9a\u65f6\u5668\u505c\u6b62\u3002\u5982\u679c\u5b9a\u65f6\u5668\u72b6\u6001\u5df2\u975e\u96f6\uff0c\u6216\u5b9a\u65f6\u5668\u5df2\u505c\u6b62\uff0c\u5219\u8be5\u51fd\u6570\u89e3\u9664\u963b\u585e\u3002\u8c03\u7528\u8be5\u51fd\u6570\u4f1a\u5c06\u5b9a\u65f6\u5668\u7684\u72b6\u6001\u91cd\u7f6e\u4e3a0\u3002\u6ce8\u610f\uff0c\u4e0d\u5141\u8bb8\u5728\u4e2d\u65ad\u5904\u7406\u51fd\u6570\u4e2d\u4f7f\u7528\u8be5\u51fd\u6570\u3002\u51fd\u6570\u8fd4\u56de\u5b9a\u65f6\u5668\u7684\u72b6\u6001\u503c\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"timer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4f20\u5165\u58f0\u660e\u5b9a\u4e49\u540e\u7684struct k_timer \u7ed3\u6784\u4f53\u53d8\u91cf\u6307\u9488")))),(0,a.kt)("br",null),(0,a.kt)("p",null,"\u83b7\u53d6\u5b9a\u65f6\u5668\u8d85\u65f6\u5230\u671f\u7684\u7cfb\u7edf\u65f6\u95f4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"k_ticks_t k_timer_expires_ticks(const struct k_timer *timer);\n")),(0,a.kt)("p",null,"\u83b7\u53d6\u5b9a\u65f6\u5668\u8d85\u65f6\u5230\u671f\u65f6\u5019\u7684\u7cfb\u7edf\u65f6\u95f4\uff0c\u4ee5\u7cfb\u7edfticks\u4e3a\u5355\u4f4d\u3002\u8be5\u51fd\u6570\u8fd4\u56de\u5b9a\u65f6\u5668\u4e0b\u4e00\u6b21\u5230\u671f\u65f6\u5019\u7684\u7cfb\u7edf\u65f6\u95f4\uff0c\u4ee5\u7cfb\u7edfticks\u4e3a\u5355\u4f4d\u3002\u5982\u679c\u5b9a\u65f6\u5668\u672a\u8fd0\u884c\uff0c\u5219\u8fd4\u56de\u5f53\u524d\u7cfb\u7edf\u65f6\u95f4\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"timer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4f20\u5165\u58f0\u660e\u5b9a\u4e49\u540e\u7684struct k_timer \u7ed3\u6784\u4f53\u53d8\u91cf\u6307\u9488")))),(0,a.kt)("br",null),(0,a.kt)("p",null,"\u83b7\u53d6\u5b9a\u65f6\u5668\u8d85\u65f6\u5230\u671f\u7684\u5269\u4f59\u65f6\u95f4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"k_ticks_t k_timer_remaining_ticks(const struct k_timer *timer)\n")),(0,a.kt)("p",null,"\u83b7\u53d6\u5b9a\u65f6\u5668\u8d85\u65f6\u5230\u671f\u524d\u7684\u5269\u4f59\u65f6\u95f4\uff0c\u4ee5\u7cfb\u7edfticks\u4e3a\u5355\u4f4d\uff0c\u8ba1\u7b97\u8fd0\u884c\u7684\u5b9a\u65f6\u5668\u4e0b\u6b21\u8fc7\u671f\u524d\u5269\u4f59\u7684\u65f6\u95f4\uff0c\u5982\u679c\u5b9a\u65f6\u5668\u672a\u8fd0\u884c\uff0c\u5219\u8fd4\u56de0\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"timer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4f20\u5165\u58f0\u660e\u5b9a\u4e49\u540e\u7684struct k_timer \u7ed3\u6784\u4f53\u53d8\u91cf\u6307\u9488")))),(0,a.kt)("br",null),(0,a.kt)("p",null,"\u83b7\u53d6\u5b9a\u65f6\u5668\u8d85\u65f6\u5230\u671f\u524d\u7684\u5269\u4f59\u65f6\u95f4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"uint32_t k_timer_remaining_get(struct k_timer *timer);\n")),(0,a.kt)("p",null,"\u8ba1\u7b97\u8fd0\u884c\u5b9a\u65f6\u5668\u4e0b\u6b21\u5230\u671f\u524d\u5269\u4f59\u7684\uff08\u8fd1\u4f3c\uff09\u65f6\u95f4\uff0c\u4ee5\u6beb\u79d2(ms)\u4e3a\u5355\u4f4d\u3002\u5982\u679c\u5b9a\u65f6\u5668\u672a\u8fd0\u884c\uff0c\u5219\u8fd4\u56de0\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"timer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4f20\u5165\u58f0\u660e\u5b9a\u4e49\u540e\u7684struct k_timer \u7ed3\u6784\u4f53\u53d8\u91cf\u6307\u9488")))),(0,a.kt)("p",null,"\u66f4\u591a ",(0,a.kt)("strong",{parentName:"p"},"Timer API"),"\u53ef\u4ee5\u53c2\u8003Zephyr\u5b98\u7f51",(0,a.kt)("a",{parentName:"p",href:"https://docs.zephyrproject.org/latest/doxygen/html/group__timer__apis.html"},"Timer APIS"),"\u3002"),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"\u521b\u5efa\u4e00\u4e2ahello_world"},"\u521b\u5efa\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"h3"},"hello_world")),(0,a.kt)("p",null,"\u5f00\u53d1\u8005\u53ef\u57fa\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"hello_world"),"\u9879\u76ee\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u6dfb\u52a0timer\u7684\u4ee3\u7801\u5e76\u8fd0\u884c\uff0c\u4ee5\u6b64\u66f4\u597d\u7684\u638c\u63e1csk6 sdk\u63d0\u4f9b\u7684timer\u7684\u4f7f\u7528\u65b9\u6cd5\u3002\n\u9996\u5148\u521b\u5efa\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"hello_world"),"\u9879\u76ee\uff0c\u53ef\u53c2\u8003\u5feb\u901f\u4e0a\u624b\u7ae0\u8282\uff1a",(0,a.kt)("a",{parentName:"p",href:"/docs-csk6/chips/600X/application/getting_start"},"\u5feb\u901f\u5f00\u59cb"),"\u3002"),(0,a.kt)("h3",{id:"timer\u529f\u80fd\u4f7f\u7528"},"Timer\u529f\u80fd\u4f7f\u7528"),(0,a.kt)("p",null,"\u521d\u59cb\u5316timer\u6709\u4e24\u79cd\u65b9\u5f0f\uff1a"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u65b9\u5f0f\u4e00\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"/* \u5b9a\u4e49\u521d\u59cb\u5316timer */\nstruct k_timer reset_counter_timer;\nk_timer_init(&reset_counter_timer, timer_handler_expiry, timer_handler_stop);\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u65b9\u5f0f\u4e8c\uff1a")," "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"/* \u5b9a\u4e49\u521d\u59cb\u5316timer */\nK_TIMER_DEFINE(reset_counter_timer, timer_handler_expiry, timer_handler_stop);\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4e3b\u51fd\u6570\u5b9e\u73b0\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include <zephyr.h>\n\nint counter = 0;\n\n/* timer\u5230\u671f\u56de\u8c03\u51fd\u6570 */\nstatic void timer_handler_expiry(struct k_timer *dummy)\n{   \n    counter++;\n    printk("counter %d \\n", counter);    \n}\n\n/* timer\u505c\u6b62\u56de\u8c03\u51fd\u6570 */\nstatic void timer_handler_stop(struct k_timer *dummy)\n{\n    counter = 0;\n    printk("stop timer and reset counter to zero\\n");\n}\n\n/* \u5b9a\u4e49\u521d\u59cb\u5316timer */\n K_TIMER_DEFINE(reset_counter_timer, timer_handler_expiry, timer_handler_stop);\n\nvoid main(void)\n{\n    printk("Hello World! %s\\n", CONFIG_BOARD);\n\n    printk("timer sample start");\n\n    /* \u542f\u52a8timer\uff0cduration\u4e3a1\u79d2\uff0c period\u4e3a2\u79d2 */\n    k_timer_start(&reset_counter_timer, K_MSEC(1000), K_MSEC(2000));\n\n    k_msleep(10000);\n    /* 10\u79d2 \u540e\u83b7\u53d6timer\u89e6\u53d1\u7684\u6b21\u6570,\u6bcf\u6b21\u8bfb\u53d6\u540estatus\u90fd\u4f1a\u88ab\u6e050 */\n    int status = k_timer_status_get(&reset_counter_timer);\n    printk("timer status %d\\n", status);\n\n    /* \u7b49\u5f85timer\u89e6\u53d1\u540e\u6253\u5370\u89e6\u53d1\u7684\u6b21\u6570 */\n    int status_sync = k_timer_status_sync(&reset_counter_timer);\n    printk("timer status sync %d\\n", status_sync);\n\n    /* 2\u79d2 \u540e\u505c\u6b62timer */\n    k_msleep(2000);\n    /* \u505c\u6b62 timer */\n    k_timer_stop(&reset_counter_timer);\n}\n')),(0,a.kt)("h2",{id:"\u7f16\u8bd1\u548c\u70e7\u5f55"},"\u7f16\u8bd1\u548c\u70e7\u5f55"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u7f16\u8bd1")," ")),(0,a.kt)("p",null,"\u5728app\u6839\u76ee\u5f55\u4e0b\u901a\u8fc7\u4ee5\u4e0b\u6307\u4ee4\u5b8c\u6210\u7f16\u8bd1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"lisa zep build -b csk6002_9s_nano\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u70e7\u5f55"),"   ")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"csk6002_9s_nano"),"\u5f00\u53d1\u677f\u901a\u8fc7USB\u8fde\u63a5PC\uff0c\u901a\u8fc7\u70e7\u5f55\u6307\u4ee4\u5f00\u59cb\u70e7\u5f55\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"lisa zep flash\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u67e5\u770b\u7ed3\u679c"),"  ")),(0,a.kt)("p",null,"\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"csk6002_9s_nano"),"\u7684\u65e5\u5fd7\u4e32\u53e3",(0,a.kt)("inlineCode",{parentName:"p"},"A03 TX A02 RX"),"\u63a5\u4e32\u53e3\u677f\u8fde\u63a5\u7535\u8111\uff0c\u5728\u7535\u8111\u7aef\u4f7f\u7528\u4e32\u53e3\u8c03\u8bd5\u52a9\u624b\u67e5\u770b\u65e5\u5fd7\uff0c\u6ce2\u7279\u7387\u4e3a115200\u3002"),(0,a.kt)("p",null,"\u65e5\u5fd7\u8f93\u51fa\u7ed3\u679c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"*** Booting Zephyr OS build fd53c115d07a  ***\n[17:55:16.469] \n[17:55:16.475] Hello World! csk6002_9s_nano\n[17:55:16.475] timer csk6002_9s_nano\n[17:55:17.475] counter 1 \n[17:55:19.471] counter 2 \n[17:55:21.471] counter 3 \n[17:55:23.471] counter 4 \n[17:55:25.471] counter 5 \n[17:55:26.471] timer status 5\n[17:55:27.472] counter 6 \n[17:55:27.476] timer status sync 1\n[17:55:29.476] counter 7 \n[17:55:29.476] stop timer and reset counter to zero\n\n")),(0,a.kt)("p",null,"\u4ece\u65e5\u5fd7\u53ef\u4ee5\u770b\u5230\uff0ctimer\u57281\u79d2\u540e\u7b2c\u4e00\u6b21\u89e6\u53d1\u56de\u8c03\u51fd\u6570\uff0c\u4e4b\u540e\u4ee52\u79d2\u7684\u5468\u671f\u89e6\u53d1\u56de\u8c03\uff0c\u76f4\u5230\u5e94\u7528\u7a0b\u5e8f\u4e3b\u52a8\u505c\u6b62timer\u3002"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u56e0\u4e3atimer\u7684\u56de\u8c03\u662f\u5728\u4e2d\u65ad\u4e2d\u6267\u884c\uff0c\u6240\u4ee5\u5728\u56de\u8c03\u51fd\u6570\u4e2d\u4e0d\u80fd\u505a\u8017\u65f6\u64cd\u4f5c\u3002\ntimer\u4e0d\u80fd\u4fdd\u8bc1\u7cbe\u786e\u7684\u5b9a\u65f6\uff0c\u4f46\u5176\u7cbe\u5ea6\u6bd4k_sleep/k_usleep\u9ad8\uff0c\u6d4b\u91cf\u6267\u884c\u65f6\u95f4\u65f6\u4e0d\u5efa\u8bae\u4f7f\u7528k_timer\uff0c\u5efa\u8bae\u8bfb\u7cfb\u7edf\u786c\u4ef6\u65f6\u949f\u3002"))),(0,a.kt)("h2",{id:"\u8017\u65f6\u64cd\u4f5c\u5904\u7406"},"\u8017\u65f6\u64cd\u4f5c\u5904\u7406"),(0,a.kt)("p",null,"\u5f53timer\u89e6\u53d1\u56de\u8c03\u540e\u9700\u8981\u5904\u7406\u8017\u65f6\u64cd\u4f5c\u65f6\uff0c\u53ef\u914d\u5408k_work\u4f7f\u7528\uff0c\u5c06\u8017\u65f6\u64cd\u4f5c\u653e\u5728workqueue\u4e2d\u6267\u884c\uff0c\u57fa\u4e8e\u4ee5\u4e0a\u4ee3\u7801\u5b9e\u73b0\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'/* k_work\u56de\u8c03\u51fd\u6570\uff0c\u7528\u4e8e\u5904\u7406\u8017\u65f6\u64cd\u4f5c */\nvoid work_handler(struct k_work *work)\n{\n    while(int i=0, i<100, i++){\n        printk("do something \\n");\n    }\n}\n\n/* \u5b9a\u4e49\u521d\u59cb\u5316\u4e00\u4e2ak_work */\nK_WORK_DEFINE(a_work, work_handler);\n\n/* timer\u5230\u671f\u56de\u8c03\u51fd\u6570 */\nstatic void timer_handler_expiry(struct k_timer *dummy)\n{   \n    counter++;\n    printk("counter %d \\n", counter);\n    /*\u53d1\u9001k_work\u4fe1\u53f7\u91cf*/\n    k_work_submit(&a_work);    \n}\n')),(0,a.kt)("p",null,"\u66f4\u591a\u5173\u4e8ek_work\u4f7f\u7528\u53ef\u53c2\u8003Zephyr\u5b98\u7f51",(0,a.kt)("a",{parentName:"p",href:"https://docs.zephyrproject.org/latest/kernel/services/threads/workqueue.html"},"Workqueue Threads"),"\u7ae0\u8282\u3001",(0,a.kt)("a",{parentName:"p",href:"https://docs.zephyrproject.org/latest/doxygen/html/group__workqueue__apis.html"},"Work Queue APIs"),"\u7ae0\u8282\u3002"))}u.isMDXComponent=!0},19146:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/timer-b448670dcb03680ec0d5fa20f7f3bd2a.png"}}]);