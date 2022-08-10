"use strict";(self.webpackChunkls_docs_web=self.webpackChunkls_docs_web||[]).push([[436],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=i(r),k=a,d=h["".concat(c,".").concat(k)]||h[k]||m[k]||p;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var i=2;i<p;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},60776:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>s,frontMatter:()=>p,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const p={},o="\u5806\u7ba1\u7406",l={unversionedId:"chips/600X/kernel/heap",id:"chips/600X/kernel/heap",isDocsHomePage:!1,title:"\u5806\u7ba1\u7406",description:"Zephyr\u5141\u8bb8\u7ebf\u7a0b\u52a8\u6001\u5206\u914d\u5185\u5b58\u3002",source:"@site/docs/chips/600X/kernel/heap.md",sourceDirName:"chips/600X/kernel",slug:"/chips/600X/kernel/heap",permalink:"/docs-csk6/chips/600X/kernel/heap",version:"current",frontMatter:{},sidebar:"docs/chips/600X",previous:{title:"\u5b9a\u65f6\u5668",permalink:"/docs-csk6/chips/600X/kernel/timing/timers"},next:{title:"\u6d88\u606f\u961f\u5217",permalink:"/docs-csk6/chips/600X/kernel/datapassing/message_queues"}},c=[{value:"\u540c\u6b65\u5806\u5206\u914d\u5668",id:"\u540c\u6b65\u5806\u5206\u914d\u5668",children:[{value:"\u521b\u5efa\u5806",id:"\u521b\u5efa\u5806",children:[]},{value:"\u5206\u914d\u5185\u5b58",id:"\u5206\u914d\u5185\u5b58",children:[]},{value:"\u91ca\u653e\u5185\u5b58",id:"\u91ca\u653e\u5185\u5b58",children:[]}]}],i={toc:c};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5806\u7ba1\u7406"},"\u5806\u7ba1\u7406"),(0,a.kt)("p",null,"Zephyr\u5141\u8bb8\u7ebf\u7a0b\u52a8\u6001\u5206\u914d\u5185\u5b58\u3002"),(0,a.kt)("h2",{id:"\u540c\u6b65\u5806\u5206\u914d\u5668"},"\u540c\u6b65\u5806\u5206\u914d\u5668"),(0,a.kt)("h3",{id:"\u521b\u5efa\u5806"},"\u521b\u5efa\u5806"),(0,a.kt)("p",null,"\u6700\u7b80\u5355\u7684\u65b9\u5f0f\u662f\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"https://docs.zephyrproject.org/latest/kernel/memory_management/heap.html#c.K_HEAP_DEFINE"},"K_HEAP_DEFINE")," \u9759\u6001\u7684\u5b9a\u4e49\u5806\u3002\u8fd9\u4e2a\u5b8f\u5c06\u4f20\u5165\u5806\u540d\u79f0\u548c\u5806\u5927\u5c0f\u53c2\u6570\u6765\u9759\u6001\u5b9a\u4e49\u4e00\u4e2a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.zephyrproject.org/latest/kernel/memory_management/heap.html#c.k_heap"},"k_heap")," \u5806\u5bf9\u8c61\u3002\u901a\u8fc7\u5806\u5bf9\u8c61\u6765\u7ba1\u7406\u8be5\u5757\u5185\u5b58\u5806\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"static K_HEAP_DEFINE(test_heap, 1024 * 2);\n")),(0,a.kt)("p",null,"\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.zephyrproject.org/latest/kernel/memory_management/heap.html#c.k_heap_init"},"k_heap_init()")," \u521b\u5efa\u5806\u5bf9\u8c61\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"static struct k_heap test_heap; /* define the heap object */\nuint8_t test_heap_pool[1024 * 2];  /* define the heap region */\nk_heap_init(&test_heap, test_heap_pool, sizeof(test_heap_pool));\n")),(0,a.kt)("h3",{id:"\u5206\u914d\u5185\u5b58"},"\u5206\u914d\u5185\u5b58"),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.zephyrproject.org/latest/kernel/memory_management/heap.html#c.k_heap_alloc"},"k_heap_alloc()")," \u4ece\u5806\u4e2d\u5206\u914d\u5185\u5b58\uff0c\u4f7f\u7528\u8be5\u63a5\u53e3\u9700\u8981\u4f20\u5165\u5806\u5bf9\u8c61(k_heap)\u548c\u9700\u8981\u5206\u914d\u7684\u5185\u5b58\u5927\u5c0f\u3002\n\u8fd9\u4e2a\u51fd\u6570\u7c7b\u4f3c\u6807\u51c6C\u91cc\u9762\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"malloc()")," \uff0c\u8fd4\u56deNULL\u8868\u793a\u5206\u914d\u5931\u8d25\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"k_heap_alloc()")," \u652f\u6301\u963b\u585e\u64cd\u4f5c\uff0c\u5141\u8bb8\u7ebf\u7a0b\u7761\u7720\u76f4\u5230\u5185\u5b58\u53ef\u7528\u3002",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://docs.zephyrproject.org/latest/kernel/services/timing/clocks.html#c.k_timeout_t"},"k_timeout_t"))," \u8868\u793a\u963b\u585e\u7684\u65f6\u95f4\uff0c\u53ef\u9009\u4e3a\xa0",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://docs.zephyrproject.org/latest/kernel/services/timing/clocks.html#c.K_NO_WAIT"},"K_NO_WAIT")),"\xa0\u6216\xa0",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://docs.zephyrproject.org/latest/kernel/services/timing/clocks.html#c.K_FOREVER"},"K_FOREVER"))," \u4e4b\u4e00\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'    char *mem_ptr;\n    mem_ptr = k_heap_alloc(&test_heap, 200, K_NO_WAIT);\n    if (mem_ptr != NULL) {\n            printk("Memory allocated successfully\\n");\n    } else {\n            printk("Memory not allocated\\n");\n    }\n')),(0,a.kt)("h3",{id:"\u91ca\u653e\u5185\u5b58"},"\u91ca\u653e\u5185\u5b58"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.zephyrproject.org/latest/kernel/memory_management/heap.html#c.k_heap_alloc"},"k_heap_alloc()")," \u5206\u914d\u7684\u5185\u5b58\u5fc5\u987b\u8981\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.zephyrproject.org/latest/kernel/memory_management/heap.html#c.k_heap_free"},"k_heap_free()")," \u6765\u91ca\u653e\uff0c\u4e0e\u6807\u51c6C\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"free()")," \u76f8\u4f3c\uff0c\u4f20\u5165\u7684\u53c2\u6570\u5fc5\u987b\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")," \u6216\u8005 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.zephyrproject.org/latest/kernel/memory_management/heap.html#c.k_heap_alloc"},"k_heap_alloc()")," \u8fd4\u56de\u7684\u5730\u5740\u3002\u91ca\u653e ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")," \u503c\u4e0d\u4f1a\u6709\u4efb\u4f55\u5f71\u54cd\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"k_heap_free(&test_heap ,mem_ptr);\n")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("inlineCode",{parentName:"p"},"k_heap")," \u76f8\u5173\u7684\u51fd\u6570\u662f\u7ebf\u7a0b\u5b89\u5168\uff0c\u5982\u679c\u60f3\u4f7f\u7528\u66f4\u5e95\u5c42\u7684\u5806\u5206\u914d\u51fd\u6570\uff0c\u53ef\u4ee5\u53c2\u8003",(0,a.kt)("inlineCode",{parentName:"p"},"sys_heap_aligned_alloc()")," \u76f8\u5173\u63a5\u53e3\u3002"))))}s.isMDXComponent=!0}}]);