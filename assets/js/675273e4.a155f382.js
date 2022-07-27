"use strict";(self.webpackChunkls_docs_web=self.webpackChunkls_docs_web||[]).push([[5158],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>s});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),k=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},d=function(t){var e=k(t.components);return a.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},o=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),o=k(n),s=r,m=o["".concat(u,".").concat(s)]||o[s]||c[s]||l;return n?a.createElement(m,p(p({ref:e},d),{},{components:n})):a.createElement(m,p({ref:e},d))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,p=new Array(l);p[0]=o;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var k=2;k<l;k++)p[k]=n[k];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}o.displayName="MDXCreateElement"},84421:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={},p="\u4e32\u53e3(UART)",i={unversionedId:"chips/600X/application/peripheral/samples/UART",id:"chips/600X/application/peripheral/samples/UART",isDocsHomePage:!1,title:"\u4e32\u53e3(UART)",description:"\u6982\u8ff0",source:"@site/docs/chips/600X/application/peripheral/samples/UART.md",sourceDirName:"chips/600X/application/peripheral/samples",slug:"/chips/600X/application/peripheral/samples/UART",permalink:"/docs-csk6/chips/600X/application/peripheral/samples/UART",version:"current",frontMatter:{},sidebar:"docs/chips/600X",previous:{title:"PWM",permalink:"/docs-csk6/chips/600X/application/peripheral/samples/pwm"},next:{title:"I2C",permalink:"/docs-csk6/chips/600X/application/peripheral/samples/I2C"}},u=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",children:[]},{value:"\u793a\u4f8b\u4e00\uff1aUART\u8f6e\u8be2\u65b9\u5f0f\u63a5\u6536\u6570\u636e\uff08polling\uff09",id:"\u793a\u4f8b\u4e00uart\u8f6e\u8be2\u65b9\u5f0f\u63a5\u6536\u6570\u636epolling",children:[{value:"\u5e38\u7528 API \u63a5\u53e3",id:"\u5e38\u7528-api-\u63a5\u53e3",children:[]},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",children:[]},{value:"\u5e94\u7528\u5b9e\u73b0\u903b\u8f91",id:"\u5e94\u7528\u5b9e\u73b0\u903b\u8f91",children:[]},{value:"\u5e94\u7528\u5b9e\u73b0",id:"\u5e94\u7528\u5b9e\u73b0",children:[]}]},{value:"\u793a\u4f8b\u4e8c\uff1aUART\u4e2d\u65ad\u65b9\u5f0f\u63a5\u6536\u6570\u636e\uff08interrupt\uff09",id:"\u793a\u4f8b\u4e8cuart\u4e2d\u65ad\u65b9\u5f0f\u63a5\u6536\u6570\u636einterrupt",children:[{value:"<strong>\u5e38\u7528 API \u63a5\u53e3</strong>",id:"\u5e38\u7528-api-\u63a5\u53e3-1",children:[]},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b-1",children:[]},{value:"\u5e94\u7528\u5b9e\u73b0\u903b\u8f91",id:"\u5e94\u7528\u5b9e\u73b0\u903b\u8f91-1",children:[]},{value:"\u5e94\u7528\u5b9e\u73b0",id:"\u5e94\u7528\u5b9e\u73b0-1",children:[]}]}],k={toc:u};function d(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,a.Z)({},k,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u4e32\u53e3uart"},"\u4e32\u53e3(UART)"),(0,r.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,r.kt)("p",null,"UART\u662f\u6700\u5e38\u7528\u7684\u5916\u8bbe\u529f\u80fd\u4e4b\u4e00\uff0ccsk6 sdk\u4e2d\u4e32\u53e3\u6570\u636e\u901a\u4fe1\u65b9\u5f0f\u6709\u4e24\u79cd\uff1a\u8f6e\u8be2(polling)\u548c\u4e2d\u65ad(interrupt)\uff0c\u672c\u7ae0\u8282\u5c06\u901a\u8fc7\u793a\u4f8b\u4ecb\u7ecd \u4e32\u53e3 API\u63a5\u53e3\u548c\u4f7f\u7528\u65b9\u6cd5\u3002"),(0,r.kt)("p",null,"CSK6 \u63d0\u4f9b\u4e863\u7ec4UART\u5916\u8bbe\uff08UART0\u3001UART1\u3001UART2)\uff0c  UART\u9a71\u52a8\u5177\u6709\u5982\u4e0b\u7279\u6027\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 RTS/CTS \u6d41\u63a7\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301DMA\u4f20\u9001(\u53c2\u6570\u53ef\u914d\u7f6e)\u3002")),(0,r.kt)("h2",{id:"\u793a\u4f8b\u4e00uart\u8f6e\u8be2\u65b9\u5f0f\u63a5\u6536\u6570\u636epolling"},"\u793a\u4f8b\u4e00\uff1aUART\u8f6e\u8be2\u65b9\u5f0f\u63a5\u6536\u6570\u636e\uff08polling\uff09"),(0,r.kt)("h3",{id:"\u5e38\u7528-api-\u63a5\u53e3"},"\u5e38\u7528 API \u63a5\u53e3"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e32\u53e3\u63a5\u6536\u6570\u636e")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"int uart_poll_in(const struct device *dev, unsigned char *p_char)\n")),(0,r.kt)("p",null,"\u4ece\u8bbe\u5907\u4e2d\u8bfb\u53d6\u4e00\u4e2a\u5b57\u7b26\u4f5c\u4e3a\u8f93\u5165\uff0c\u8fd9\u4e2a\u63a5\u53e3\u68c0\u67e5\u63a5\u6536\u65b9\u662f\u5426\u5b58\u5728\u6709\u6548\u6570\u636e\u3002\u5f53\u63a5\u6536\u65b9\u5b58\u5728\u6709\u6548\u6570\u636e\u65f6\uff0c\u8be5\u63a5\u53e3\u4ece\u8bbe\u5907\u4e2d\u8bfb\u53d6\u4e00\u4e2a\u5b57\u7b26\uff0c\u5b58\u50a8\u5230 p_char \u6307\u5411\u7684\u5730\u5740\uff0c\u5e76\u5c06\u8c03\u7528\u7ebf\u7a0b\u8fd4\u56de0\uff0c\u5426\u5219\u8fd4\u56de -1\uff0c\u8be5\u63a5\u53e3\u662f\u4e00\u4e2a\u975e\u963b\u585e\u8c03\u7528\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dev"),(0,r.kt)("td",{parentName:"tr",align:null},"UART \u8bbe\u5907\u5b9e\u4f8b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"p_char"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u6307\u9488")))),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e32\u53e3\u53d1\u9001\u6570\u636e")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"void uart_poll_out(const struct device *dev, unsigned char out_char)\n")),(0,r.kt)("p",null,"\u5199\u4e00\u4e2a\u5b57\u7b26\u5230\u8bbe\u5907\u8f93\u51fa\uff0c\u8fd9\u4e2a\u63a5\u53e3\u4f1a\u68c0\u67e5\u53d1\u5c04\u7684transmitter\u662f\u5426\u5df2\u7ecf\u586b\u6ee1\u6570\u636e\uff0c\u5f53transmitter\u672a\u6ee1\u65f6\uff0c\u8be5\u63a5\u53e3\u4f1a\u5411\u6570\u636e\u5bc4\u5b58\u5668\u5199\u5165\u4e00\u4e2a\u5b57\u7b26\u3002\u5426\u5219\uff0c\u8be5\u63a5\u53e3\u5c06\u7b49\u5f85\u5e76\u963b\u585e\u8c03\u7528\u5b83\u7684\u7ebf\u7a0b\uff0c\u662f\u4e00\u4e2a\u963b\u585e\u8c03\u7528\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dev"),(0,r.kt)("td",{parentName:"tr",align:null},"UART \u8bbe\u5907\u5b9e\u4f8b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"out_char"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7b49\u5f85\u53d1\u9001\u7684\u5b57\u7b26")))),(0,r.kt)("br",null),(0,r.kt)("p",null,"\u66f4\u591a UART Polling API\u63a5\u53e3\u63cf\u8ff0\u8bf7\u67e5\u9605zephyr\u5b98\u7f51",(0,r.kt)("a",{parentName:"p",href:"https://docs.zephyrproject.org/latest/doxygen/html/group__uart__polling.html"},"Polling UART API"),"\u3002"),(0,r.kt)("h3",{id:"\u4f7f\u7528\u793a\u4f8b"},"\u4f7f\u7528\u793a\u4f8b"),(0,r.kt)("h4",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,r.kt)("p",null,"\u672c\u793a\u4f8b\u57fa\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"csk6002_9s_nano"),"\u5f00\u53d1\u677f\u5b9e\u73b0\uff0c\u4f7f\u7528\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"uart0(GPIO_A_03, GPIO_A_06)"),"\u8fd9\u7ec4\u4e32\u53e3\uff0c\u5728\u5f00\u53d1\u4e4b\u524d\u9700\u8981\u505a\u5982\u4e0b\u51c6\u5907\u5de5\u4f5c\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c06\u5f00\u53d1\u677f\u4e0a\u7684uart0\u901a\u8fc7\u4e32\u53e3\u8f6c\u63a5\u677f\u63a5\u5165PC\u7aef\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5961).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PC\u7aef\u6253\u5f00\u4e32\u53e3\u8c03\u8bd5\u52a9\u624b\uff0c\u6ce2\u7279\u7387\u8bbe\u7f6e\u4e3a115200\uff0c\u6570\u636e\u4f4d8\uff0c\u65e0\u6821\u9a8c\u4f4d\uff0c\u505c\u6b62\u4f4d1\uff0c\u63a5\u6536\u548c\u53d1\u9001\u6570\u636e\u683c\u5f0f\u90fd\u8bbe\u7f6e\u4e3aHEX\uff0c\u5982\u4e0b\u56fe\u793a\uff1a")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(20075).Z})),(0,r.kt)("h4",{id:"\u83b7\u53d6sample\u9879\u76ee"},"\u83b7\u53d6sample\u9879\u76ee"),(0,r.kt)("p",null,"\u901a\u8fc7Lisa\u547d\u4ee4\u521b\u5efa\u9879\u76ee\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"lisa zep create\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(17943).Z})),(0,r.kt)("p",null,"\u4f9d\u6b21\u6309\u4ee5\u4e0b\u76ee\u5f55\u9009\u62e9\u5b8c\u6210uart sample\u521b\u5efa\uff1a  "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"boards \u2192 csk6 \u2192 driver\u2192 uart \u2192 uart_polling")),(0,r.kt)("h4",{id:"\u7ec4\u4ef6\u914d\u7f6e"},"\u7ec4\u4ef6\u914d\u7f6e"),(0,r.kt)("p",null,"\u7ec4\u4ef6\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"sample/prj.conf"),"\u3002"),(0,r.kt)("p",null,"\u672c\u793a\u4f8b\u9700\u8981\u6253\u5f00\u4ee5\u4e0b\u4ef6\u7ec4\u4ef6\u914d\u7f6e:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u65e5\u5fd7\u914d\u7f6e\nCONFIG_LOG=y\n# \u4e32\u53e3\u914d\u7f6e\nCONFIG_UART_INTERRUPT_DRIVEN=y\nCONFIG_UART_CSK6=y\n")),(0,r.kt)("h4",{id:"\u8bbe\u5907\u6811\u914d\u7f6e"},"\u8bbe\u5907\u6811\u914d\u7f6e"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"csk6002_9s_nano"),"\u5f00\u53d1\u677f\u63d0\u4f9b\u4e86\u591a\u7ec4UART\u3002\u672c\u793a\u4f8b\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"uart0(GPIO_A_03, GPIO_A_06)"),"\uff0c\u56e0\u6b64\u9700\u8981\u5728\u8bbe\u5907\u6811\u4e2d\u5c06\u8fd9\u7ec4GPIO\u590d\u7528\u4e3aUART0\u5f15\u811a\u529f\u80fd\uff0c\u53ef\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"boad overlay"),"\u7684\u65b9\u5f0f\u5b8c\u6210\uff0c\u5177\u4f53\u5b9e\u73b0\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728sample/boards\u76ee\u5f55\u4e0b\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"csk6002_9s_nano.overlay"),"\u6587\u4ef6\u5e76\u6dfb\u52a0\u5982\u4e0b\u4e32\u53e3\u914d\u7f6e\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"&csk6002_9s_nano_pinctrl{\n    pinctrl_uart0_rx_default: uart0_rx_default{\n        pinctrls = <&pinmuxa 6 2>;\n    };\n    \n    pinctrl_uart0_tx_default: uart0_tx_default{\n        pinctrls = <&pinmuxa 3 2>;\n    };\n};\n")),(0,r.kt)("h3",{id:"\u5e94\u7528\u5b9e\u73b0\u903b\u8f91"},"\u5e94\u7528\u5b9e\u73b0\u903b\u8f91"),(0,r.kt)("p",null,"\u901a\u8fc7\u8f6e\u8be2\u7684\u65b9\u5f0f\u8bfb\u53d6\u4e0a\u4f4d\u673a\u53d1\u9001\u7ed9CSK6\u7684\u6570\u636e\uff0c\u6bcf\u6b21\u8bfb\u4e00\u4e2achar\u7c7b\u578b\u6570\u636e\uff0c\u5e76\u5c06\u63a5\u6536\u5230\u7684\u6570\u636e\u53d1\u9001\u7ed9\u4e0a\u4f4d\u673a\u3002"),(0,r.kt)("h3",{id:"\u5e94\u7528\u5b9e\u73b0"},"\u5e94\u7528\u5b9e\u73b0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'/*\n * Copyright (c) 2012-2014 Wind River Systems, Inc.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n#include <kernel.h>\n#include <zephyr.h>\n#include <sys/printk.h>\n#include <string.h>\n#include <devicetree.h>\n#include <logging/log.h>\n#include <drivers/uart.h>\n\nLOG_MODULE_REGISTER(sample, LOG_LEVEL_INF);\n/*\u901a\u8fc7uart\u8bbe\u5907\u6811label\u83b7\u53d6nodeid*/\n#define UART0       DT_NODELABEL(uart0)\n\nvoid main(void)\n{\n    char rx_char;\n    /* \u83b7\u53d6uart\u8bbe\u5907\u5b9e\u4f8b */\n    const struct device *uart = DEVICE_DT_GET(UART0);\n    if(!device_is_ready(uart)){\n        LOG_ERR("device:%s is not ready!", uart->name);\n        return;\n    }\n    while(1){\n        /*\u4ece\u4e0a\u4f4d\u673a\u63a5\u6536\u4e00\u4e2achar*/\n        if(uart_poll_in(uart, &rx_char) == 0){\n            /*\u7ed9\u4e0a\u4f4d\u673a\u53d1\u9001\u4e00\u4e2achar*/ \n            uart_poll_out(uart, rx_char);               \n        }   \n            \n    }\n    return;\n}\n')),(0,r.kt)("h4",{id:"\u7f16\u8bd1\u548c\u70e7\u5f55"},(0,r.kt)("strong",{parentName:"h4"},"\u7f16\u8bd1\u548c\u70e7\u5f55")),(0,r.kt)("h4",{id:"\u7f16\u8bd1"},"\u7f16\u8bd1"),(0,r.kt)("p",null,"\u5728app\u6839\u76ee\u5f55\u4e0b\u901a\u8fc7\u4ee5\u4e0b\u6307\u4ee4\u5b8c\u6210\u7f16\u8bd1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"lisa zep build -b csk6002_9s_nano\n")),(0,r.kt)("h4",{id:"\u70e7\u5f55"},"\u70e7\u5f55"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"csk6002_9s_nano"),"\u5f00\u53d1\u677f\u901a\u8fc7USB\u8fde\u63a5PC\uff0c\u901a\u8fc7\u70e7\u5f55\u6307\u4ee4\u5f00\u59cb\u70e7\u5f55\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"lisa zep flash --runner pyocd\n")),(0,r.kt)("h4",{id:"\u67e5\u770b\u7ed3\u679c"},"\u67e5\u770b\u7ed3\u679c"),(0,r.kt)("p",null,"\u4e0a\u4f4d\u673a\u7ed9CSK6\u53d1\u9001\u4e00\u4e32\u6307\u4ee4\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"FF 01 02 03 04 05 06 07 08 09 0A FF"),"\uff0cCSK6\u63a5\u6536\u6307\u4ee4\u5e76\u7ed9\u4e0a\u4f4d\u673a\u56de\u4f20\uff0c\u5982\u4e0b\u56fe\u793a\uff1a\n",(0,r.kt)("img",{src:n(51112).Z})),(0,r.kt)("h2",{id:"\u793a\u4f8b\u4e8cuart\u4e2d\u65ad\u65b9\u5f0f\u63a5\u6536\u6570\u636einterrupt"},"\u793a\u4f8b\u4e8c\uff1aUART\u4e2d\u65ad\u65b9\u5f0f\u63a5\u6536\u6570\u636e\uff08interrupt\uff09"),(0,r.kt)("h3",{id:"\u5e38\u7528-api-\u63a5\u53e3-1"},(0,r.kt)("strong",{parentName:"h3"},"\u5e38\u7528 API \u63a5\u53e3")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bbe\u7f6e IRQ(\u4e2d\u65ad) \u56de\u8c03\u51fd\u6570\u6307\u9488")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"void uart_irq_callback_user_data_set(const struct device *dev,\n                           uart_irq_callback_user_data_t cb,\n                           void *user_data)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dev"),(0,r.kt)("td",{parentName:"tr",align:null},"UART \u8bbe\u5907\u5b9e\u4f8b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cb"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5411\u56de\u8c03\u51fd\u6570\u7684\u6307\u9488")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user_data"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8981\u4f20\u9012\u7ed9\u56de\u8c03\u51fd\u6570\u7684\u6570\u636e")))),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5728 ISR(\u4e2d\u65ad\u670d\u52a1) \u4e2d\u5f00\u59cb\u5904\u7406\u4e2d\u65ad")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"int uart_irq_update(const struct device * dev)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dev"),(0,r.kt)("td",{parentName:"tr",align:null},"UART \u8bbe\u5907\u5b9e\u4f8b")))),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u68c0\u67e5\u662f\u5426\u6709 IRQ(\u4e2d\u65ad) \u6302\u8d77\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"int uart_irq_is_pending(const struct device * dev)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dev"),(0,r.kt)("td",{parentName:"tr",align:null},"UART \u8bbe\u5907\u5b9e\u4f8b")))),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u68c0\u67e5 UART RX \u7f13\u51b2\u533a\u662f\u5426\u6709\u63a5\u6536\u5230\u5b57\u7b26")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"int uart_irq_rx_ready(const struct device * dev)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dev"),(0,r.kt)("td",{parentName:"tr",align:null},"UART \u8bbe\u5907\u5b9e\u4f8b")))),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4ece FIFO \u8bfb\u53d6\u6570\u636e")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"int uart_fifo_read(const struct device *dev, uint8_t *rx_data,\n                 const int size)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dev"),(0,r.kt)("td",{parentName:"tr",align:null},"UART \u8bbe\u5907\u5b9e\u4f8b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rx_data"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5bb9\u5668")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"size"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5bb9\u5668\u5927\u5c0f")))),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7528\u6570\u636e\u586b\u5145 FIFO")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"int uart_fifo_fill(const struct device *dev,\n                 const uint8_t *tx_data,\n                 int size)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dev"),(0,r.kt)("td",{parentName:"tr",align:null},"UART \u8bbe\u5907\u5b9e\u4f8b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tx_data"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8981\u53d1\u9001\u7684\u6570\u636e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"size"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8981\u53d1\u9001\u7684\u6570\u636e\u957f\u5ea6")))),(0,r.kt)("br",null),(0,r.kt)("p",null,"\u66f4\u591a UART Polling API\u63a5\u53e3\u63cf\u8ff0\u8bf7\u67e5\u9605zephyr\u5b98\u7f51",(0,r.kt)("a",{parentName:"p",href:"https://docs.zephyrproject.org/latest/doxygen/html/group__uart__interrupt.html"},"Interrupt-driven UART API"),"\u3002"),(0,r.kt)("h3",{id:"\u4f7f\u7528\u793a\u4f8b-1"},"\u4f7f\u7528\u793a\u4f8b"),(0,r.kt)("h4",{id:"\u51c6\u5907\u5de5\u4f5c-1"},"\u51c6\u5907\u5de5\u4f5c"),(0,r.kt)("p",null,"\u672c\u793a\u4f8b\u57fa\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"csk6002_9s_nano"),"\u5f00\u53d1\u677f\u5b9e\u73b0\uff0c\u4f7f\u7528\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"uart0(GPIO_A_03, GPIO_A_06)"),"\u8fd9\u7ec4\u4e32\u53e3\uff0c\u5728\u5f00\u53d1\u4e4b\u524d\u9700\u8981\u505a\u5982\u4e0b\u51c6\u5907\u5de5\u4f5c\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u675c\u90a6\u7ebf\u5c06\u5f00\u53d1\u677f\u4e0a\u7684uart0\u7684TX\u3001RX\u3001GND\u548c\u4e32\u53e3\u8f6c\u63a5\u677f\u63a5\u5165PC\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5961).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PC\u7aef\u6253\u5f00\u4e32\u53e3\u8c03\u8bd5\u52a9\u624b\uff0c\u6ce2\u7279\u7387\u8bbe\u7f6e\u4e3a115200\uff0c\u6570\u636e\u4f4d8\uff0c\u65e0\u6821\u9a8c\u4f4d\uff0c\u505c\u6b62\u4f4d1\uff0c\u63a5\u6536\u548c\u53d1\u9001\u6570\u636e\u683c\u5f0f\u90fd\u8bbe\u7f6e\u4e3aHEX\uff0c\u5982\u4e0b\u56fe\u793a\uff1a")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(20075).Z})),(0,r.kt)("h4",{id:"\u83b7\u53d6sample\u9879\u76ee-1"},"\u83b7\u53d6sample\u9879\u76ee"),(0,r.kt)("p",null,"\u901a\u8fc7Lisa\u547d\u4ee4\u521b\u5efa\u9879\u76ee\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"lisa zep create\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(17943).Z})),(0,r.kt)("p",null,"\u4f9d\u6b21\u6309\u4ee5\u4e0b\u76ee\u5f55\u9009\u62e9\u5b8c\u6210uart sample\u521b\u5efa\uff1a  "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"boards \u2192 csk6 \u2192 driver\u2192 uart \u2192 uart_interrupt")),(0,r.kt)("h4",{id:"\u7ec4\u4ef6\u914d\u7f6e-1"},"\u7ec4\u4ef6\u914d\u7f6e"),(0,r.kt)("p",null,"\u7ec4\u4ef6\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"sample/prj.conf"),"\u3002"),(0,r.kt)("p",null,"\u672c\u793a\u4f8b\u9700\u8981\u6253\u5f00\u4ee5\u4e0b\u4ef6\u7ec4\u4ef6\u914d\u7f6e:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u65e5\u5fd7\u914d\u7f6e\nCONFIG_LOG=y\n# \u4e32\u53e3\u914d\u7f6e\nCONFIG_UART_INTERRUPT_DRIVEN=y\nCONFIG_UART_CSK6=y\n")),(0,r.kt)("h4",{id:"\u8bbe\u5907\u6811\u914d\u7f6e-1"},"\u8bbe\u5907\u6811\u914d\u7f6e"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"csk6002_9s_nano"),"\u5f00\u53d1\u677f\u63d0\u4f9b\u4e86\u591a\u7ec4UART\u3002\u672c\u793a\u4f8b\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"uart0(GPIO_A_03, GPIO_A_06)"),"\uff0c\u56e0\u6b64\u9700\u8981\u5728\u8bbe\u5907\u6811\u4e2d\u5c06\u8fd9\u7ec4GPIO\u590d\u7528\u4e3aUART0\u5f15\u811a\u529f\u80fd\uff0c\u53ef\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"boad overlay"),"\u7684\u65b9\u5f0f\u5b8c\u6210\uff0c\u5177\u4f53\u5b9e\u73b0\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728sample/boards\u76ee\u5f55\u4e0b\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"csk6002_9s_nano.overlay"),"\u6587\u4ef6\u5e76\u6dfb\u52a0\u5982\u4e0b\u4e32\u53e3\u914d\u7f6e\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"&csk6002_9s_nano_pinctrl{\n    pinctrl_uart0_rx_default: uart0_rx_default{\n        pinctrls = <&pinmuxa 6 2>;\n    };\n    \n    pinctrl_uart0_tx_default: uart0_tx_default{\n        pinctrls = <&pinmuxa 3 2>;\n    };\n};\n")),(0,r.kt)("h3",{id:"\u5e94\u7528\u5b9e\u73b0\u903b\u8f91-1"},"\u5e94\u7528\u5b9e\u73b0\u903b\u8f91"),(0,r.kt)("p",null,"\u901a\u8fc7\u4e2d\u65ad\u56de\u8c03\u7684\u65b9\u5f0f\u8bfb\u53d6\u4e0a\u4f4d\u673a\u53d1\u9001\u7ed9CSK6\u7684\u6570\u636e\uff0c\u5e76\u5c06\u63a5\u6536\u5230\u7684\u6570\u636e\u53d1\u9001\u7ed9\u4e0a\u4f4d\u673a"),(0,r.kt)("h3",{id:"\u5e94\u7528\u5b9e\u73b0-1"},"\u5e94\u7528\u5b9e\u73b0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e32\u53e3\u521d\u59cb\u5316")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'#include <kernel.h>\n#include <zephyr.h>\n#include <sys/printk.h>\n#include <string.h>\n#include <devicetree.h>\n#include <logging/log.h>\n#include <drivers/uart.h>\nLOG_MODULE_REGISTER(sample, LOG_LEVEL_INF);\n#define UART0       DT_NODELABEL(uart0)\nuint8_t rx_buffer[100];\n\n/* \u4e2d\u65ad\u56de\u8c03\u5904\u7406 */\nstatic void uart_rx_callback(const struct device *dev, void *user_data){\n    /* \u8fdb\u5165\u4e2d\u65ad\u5904\u7406\u8c03\u7528 */\n    uart_irq_update(dev);   \n    /*\u67e5\u8be2\u662f\u5426\u6709\u4e2d\u65ad\u6302\u8d77*/   \n    while (uart_irq_is_pending(dev)) {\n        /*\u68c0\u67e5 UART RX \u7f13\u51b2\u533a\u662f\u5426\u6709\u63a5\u6536\u5230\u5b57\u7b26*/\n        if (uart_irq_rx_ready(dev)) {\n            int recv_len;\n             /*\u8bfb\u53d6\u4e0a\u4f4d\u673a\u53d1\u9001\u5b57\u7b26\u4e32*/\n            recv_len = uart_fifo_read(dev, rx_buffer, 1);\n            /*\u628a\u8bfb\u5230\u7684\u5b57\u7b26\u4e32\u91cd\u65b0\u53d1\u9001\u7ed9\u4e0a\u4f4d\u673a*/\n            uart_fifo_fill(dev, rx_buffer, recv_len);\n        }\n    }\n}\n\n\nvoid main(void)\n{\n    /* \u83b7\u53d6uart\u8bbe\u5907\u5b9e\u4f8b */\n    const struct device *uart = DEVICE_DT_GET(UART0);\n    if(!device_is_ready(uart)){\n        LOG_ERR("device:%s is not ready!", uart->name);\n        return;\n    }\n\n    LOG_INF("devices %s is ready", uart->name);\n\n    /* \u8bbe\u7f6e\u4e2d\u65ad\u56de\u8c03\u51fd\u6570 */\n    uart_irq_callback_user_data_set(uart, uart_rx_callback, NULL);\n\n    /* \u4f7f\u80fdRX\u4e2d\u65ad\u5904\u7406 */\n    uart_irq_rx_enable(uart);\n\n    while(1){\n        k_msleep(20);\n    }\n    return;\n}\n\n')),(0,r.kt)("h4",{id:"\u7f16\u8bd1\u548c\u70e7\u5f55-1"},(0,r.kt)("strong",{parentName:"h4"},"\u7f16\u8bd1\u548c\u70e7\u5f55")),(0,r.kt)("h4",{id:"\u7f16\u8bd1-1"},"\u7f16\u8bd1"),(0,r.kt)("p",null,"\u5728app\u6839\u76ee\u5f55\u4e0b\u901a\u8fc7\u4ee5\u4e0b\u6307\u4ee4\u5b8c\u6210\u7f16\u8bd1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"lisa zep build -b csk6002_9s_nano\n")),(0,r.kt)("h4",{id:"\u70e7\u5f55-1"},"\u70e7\u5f55"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"csk6002_9s_nano"),"\u5f00\u53d1\u677f\u901a\u8fc7USB\u8fde\u63a5PC\uff0c\u901a\u8fc7\u70e7\u5f55\u6307\u4ee4\u5f00\u59cb\u70e7\u5f55\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"lisa zep flash --runner pyocd\n")),(0,r.kt)("h4",{id:"\u67e5\u770b\u7ed3\u679c-1"},"\u67e5\u770b\u7ed3\u679c"),(0,r.kt)("p",null,"\u4e0a\u4f4d\u673a\u7ed9CSK6\u53d1\u9001\u4e00\u4e32\u6307\u4ee4\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"FF 01 02 03 04 05 06 07 08 09 0A FF"),"\uff0cCSK6\u63a5\u6536\u6307\u4ee4\u5e76\u7ed9\u4e0a\u4f4d\u673a\u56de\u4f20\uff0c\u5982\u4e0b\u56fe\u793a\uff1a\n",(0,r.kt)("img",{src:n(51112).Z})))}d.isMDXComponent=!0},17943:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/liza_zep_create-2b31c9953e388e8804c8d3c9f7efa66f.png"},20075:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/uart_01-cbe1c09f4b0e0dad292afb1733d920ee.png"},5961:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/uart_pin_conect-dfd32b7dacff5b81aac778bb7a5dda7d.png"},51112:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/uart_result-cdf5210b9584517c2a181c823f128f03.png"}}]);