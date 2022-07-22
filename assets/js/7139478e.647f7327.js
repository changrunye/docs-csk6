"use strict";(self.webpackChunkls_docs_web=self.webpackChunkls_docs_web||[]).push([[3998],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>_});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),_=a,k=u["".concat(s,".").concat(_)]||u[_]||d[_]||o;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function _(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77032:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_label:"CSK SDK\u5f00\u53d1\u793a\u4f8b",sidebar_position:1},l="CSK SDK\u5f00\u53d1\u793a\u4f8b",i={unversionedId:"AIsolution/ESR/softwaredevelopment/Advanced_development/csk_sdk_demo",id:"AIsolution/ESR/softwaredevelopment/Advanced_development/csk_sdk_demo",isDocsHomePage:!1,title:"CSK SDK\u5f00\u53d1\u793a\u4f8b",description:"\u672c\u7bc7\u4ecb\u7ecd\u4e86CSK\u9879\u76eeSDK\u7684\u4e00\u4e9b\u5f00\u53d1\u793a\u4f8b\uff0c\u770b\u5b8c\u672c\u7bc7\u4f60\u5c06\u4e86\u89e3\u5230\uff1a",source:"@site/docs/AIsolution/ESR/softwaredevelopment/Advanced_development/csk_sdk_demo.md",sourceDirName:"AIsolution/ESR/softwaredevelopment/Advanced_development",slug:"/AIsolution/ESR/softwaredevelopment/Advanced_development/csk_sdk_demo",permalink:"/docs-csk6/AIsolution/ESR/softwaredevelopment/Advanced_development/csk_sdk_demo",version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"CSK SDK\u5f00\u53d1\u793a\u4f8b",sidebar_position:1},sidebar:"AIsolutionESR",previous:{title:"\u97f3\u9891\u4f20\u8f93",permalink:"/docs-csk6/AIsolution/ESR/softwaredevelopment/Basic_development/audio_transmission"},next:{title:"CSK\u786c\u4ef6\u9a71\u52a8\u5f00\u53d1\u793a\u4f8b",permalink:"/docs-csk6/AIsolution/ESR/softwaredevelopment/Advanced_development/csk_driver_demo"}},s=[{value:"1. SDK\u6587\u4ef6\u76ee\u5f55\u8bf4\u660e",id:"1-sdk\u6587\u4ef6\u76ee\u5f55\u8bf4\u660e",children:[]},{value:"2. \u56de\u8c03\u4e8b\u4ef6\u4f7f\u7528\u793a\u4f8b",id:"2-\u56de\u8c03\u4e8b\u4ef6\u4f7f\u7528\u793a\u4f8b",children:[]},{value:"3. \u4e1a\u52a1\u63a7\u5236\u63a5\u53e3\u4f7f\u7528\u793a\u4f8b",id:"3-\u4e1a\u52a1\u63a7\u5236\u63a5\u53e3\u4f7f\u7528\u793a\u4f8b",children:[{value:"3.1 \u83b7\u53d6\u64ad\u653e\u5668\u72b6\u6001",id:"31-\u83b7\u53d6\u64ad\u653e\u5668\u72b6\u6001",children:[]},{value:"3.2 \u4e32\u53e3\u63a5\u6536/\u53d1\u9001\u4f7f\u7528\u793a\u4f8b",id:"32-\u4e32\u53e3\u63a5\u6536\u53d1\u9001\u4f7f\u7528\u793a\u4f8b",children:[]}]}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"csk-sdk\u5f00\u53d1\u793a\u4f8b"},"CSK SDK\u5f00\u53d1\u793a\u4f8b"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u7bc7\u4ecb\u7ecd\u4e86CSK\u9879\u76eeSDK\u7684\u4e00\u4e9b\u5f00\u53d1\u793a\u4f8b\uff0c\u770b\u5b8c\u672c\u7bc7\u4f60\u5c06\u4e86\u89e3\u5230\uff1a"),(0,a.kt)("ol",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ol"},"SDK\u6587\u4ef6\u76ee\u5f55\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u56de\u8c03\u4e8b\u4ef6\u7684\u4f7f\u7528\u793a\u4f8b\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4e1a\u52a1\u63a7\u5236\u63a5\u53e3\u7684\u4f7f\u7528\u793a\u4f8b\u3002"))),(0,a.kt)("p",null,"\u672c\u6587\u6863\u4ec5\u4f5c\u793a\u4f8b\u8bf4\u660e\uff0c\u5177\u4f53\u8bf7\u67e5\u770b\uff1a ",(0,a.kt)("a",{parentName:"p",href:"https://open.listenai.com/csksdk/csk4002/sdk/files.html"},"CSK SDK API\u8be6\u7ec6\u6587\u6863")),(0,a.kt)("p",null,"\u5728\u6b63\u5f0f\u5f00\u53d1\u524d\uff0c\u8bf7\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"application.lini")," \u914d\u7f6e\u6587\u4ef6\u4e2d\u628a",(0,a.kt)("strong",{parentName:"p"},"\u534f\u8bae\u6a21\u5f0f"),"\u9009\u5b9a\u4e3a",(0,a.kt)("strong",{parentName:"p"},"\u81ea\u5b9a\u4e49\u53cc\u5de5\u534f\u8bae")," ",(0,a.kt)("inlineCode",{parentName:"p"},'sys_mode = "custom"')),(0,a.kt)("h2",{id:"1-sdk\u6587\u4ef6\u76ee\u5f55\u8bf4\u660e"},"1. SDK\u6587\u4ef6\u76ee\u5f55\u8bf4\u660e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"app/csk_callback.h"),"\u56de\u8c03\u63a5\u53e3\u5934\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"app/csk_controller.h"),"\u63a7\u5236\u63a5\u53e3\u5934\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"app/app_main.c"),"\u81ea\u5b9a\u4e49\u4e1a\u52a1\u903b\u8f91\u4e3b\u51fd\u6570"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"app/scripts/intents.rb"),"EngineCore\u4e1a\u52a1\u5904\u7406")),(0,a.kt)("h2",{id:"2-\u56de\u8c03\u4e8b\u4ef6\u4f7f\u7528\u793a\u4f8b"},"2. \u56de\u8c03\u4e8b\u4ef6\u4f7f\u7528\u793a\u4f8b"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u793a\u4f8b\u5c55\u793a\u5982\u4f55\u6ce8\u518c\u548c\u4f7f\u7528\u56de\u8c03\u4e8b\u4ef6\uff0cCSK\u8bc6\u522b\u547d\u4ee4\u8bcd\u540e\u89e6\u53d1\u7684\u56de\u8c03\u4e8b\u4ef6\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u5728\u8bc6\u522b\u7ed3\u679c\u56de\u8c03\u83b7\u53d6\u8bc6\u522b\u7ed3\u679c\u5e76\u5904\u7406\u81ea\u5b9a\u4e49\u903b\u8f91\uff0c\u4f8b\u5982\u64ad\u653e\u63d0\u793a\u97f3\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// \u5524\u9192\u56de\u8c03\ncb_wake_up(keyword_attrs_t *key_attrs, asr_beam_e beam)\n{\n    CLOGD("[APP]I\'m here");\n    CLOGD("Wakeup beam : %d", beam); // \u5524\u9192\u6ce2\u675f\n    csk_player_stop();\n    csk_player_start(1); //\u64ad\u653e\u63d0\u793a\u97f31\n}\n\n// \u547d\u4ee4\u8bcd\u8bc6\u522b\u56de\u8c03\ncb_esr_recognition(keyword_attrs_t *key_attrs)\n{\n    CLOGD("[APP]ESR Recognition: kid=%d", key_attrs->kid);\n    csk_player_stop();\n    csk_player_start(2); //\u64ad\u653e\u63d0\u793a\u97f32\n}\n\n// \u547d\u4ee4\u8bcd\u8bc6\u522b\u8d85\u65f6\u56de\u8c03\ncb_esr_timeout()\n{\n    CLOGD("[APP]ESR Recognition timeout");\n}\n\n\napp_main(void)\n{\n    CLOGD("[APP]Hello world");\n    csk_handler_register(CSK_EVENT_WAKE_UP, cb_wake_up); //\u6ce8\u518c\u5524\u9192\u56de\u8c03\n    csk_handler_register(CSK_EVENT_ESR_RECOGNITION, cb_esr_recognition); //\u6ce8\u518c\u8bc6\u522b\u56de\u8c03\n    csk_handler_register(CSK_EVENT_ESR_TIMEOUT, cb_esr_timeout); //\u6ce8\u518c\u8bc6\u522b\u8d85\u65f6\u56de\u8c03\n    ...\n}\n')),(0,a.kt)("h2",{id:"3-\u4e1a\u52a1\u63a7\u5236\u63a5\u53e3\u4f7f\u7528\u793a\u4f8b"},"3. \u4e1a\u52a1\u63a7\u5236\u63a5\u53e3\u4f7f\u7528\u793a\u4f8b"),(0,a.kt)("h3",{id:"31-\u83b7\u53d6\u64ad\u653e\u5668\u72b6\u6001"},"3.1 \u83b7\u53d6\u64ad\u653e\u5668\u72b6\u6001"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"csk_player_status_e csk_player_get_status(void);\n\n\u53c2\u6570\u8bf4\u660e\uff1a\ntypedef enum {\n    CSK_PLAYER_IDLE,    // \u7a7a\u95f2\n    CSK_PLAYER_RUNNING, // \u6b63\u5728\u64ad\u97f3\n} csk_player_status_e;\n")),(0,a.kt)("h3",{id:"32-\u4e32\u53e3\u63a5\u6536\u53d1\u9001\u4f7f\u7528\u793a\u4f8b"},"3.2 \u4e32\u53e3\u63a5\u6536/\u53d1\u9001\u4f7f\u7528\u793a\u4f8b"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u521d\u59cb\u5316\u4e32\u53e3")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'static void\nuart_init(void)\n{\n    csk_uart_init();\n    if (xTaskCreate(uart_task_proc, "uart_task_proc", 2 * 1024, NULL, 13, NULL) != pdPASS) {\n        CLOGW("[APP]Failed creating UART task");\n    }\n}\n\napp_main(void)\n{\n    CLOGD("[APP]Hello world");\n    // \u5982\u4f7f\u7528 UART\uff0c\u89e3\u9664\u4e0b\u9762\u8fd9\u4e00\u884c\u7684\u6ce8\u91ca\n     uart_init();\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u521b\u5efa\u4e32\u53e3\u63a5\u6536\u4efb\u52a1")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"static void\nuart_task_proc(void *arg)\n{\n    uint8_t data[MAX_CUSTOM_UART_BUF_CNT];\n    uint16_t size = 0;\n\n    while (true) {\n        // \u4ece UART \u8bfb\u53d6\u6570\u636e\n        size = csk_uart_recv(&data, sizeof(data), portMAX_DELAY);\n    }\n\n    vTaskDelete(NULL);\n}\n")))}c.isMDXComponent=!0}}]);