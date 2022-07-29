"use strict";(self.webpackChunkls_docs_web=self.webpackChunkls_docs_web||[]).push([[8445],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=p(t),d=i,g=f["".concat(l,".").concat(d)]||f[d]||u[d]||o;return t?r.createElement(g,c(c({ref:n},s),{},{components:t})):r.createElement(g,c({ref:n},s))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,c=new Array(o);c[0]=f;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var p=2;p<o;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9995:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=t(87462),i=(t(67294),t(3905));const o={},c="\u6982\u8ff0",a={unversionedId:"chips/600X/build/kconfig/overview",id:"chips/600X/build/kconfig/overview",isDocsHomePage:!1,title:"\u6982\u8ff0",description:"csk6\u5185\u6838\u548c\u5b50\u7cfb\u7edf\u53ef\u4ee5\u5728\u6784\u5efa\u65f6\u8fdb\u884c\u914d\u7f6e\uff0c\u4ee5\u9002\u5e94\u7279\u5b9a\u7684\u5e94\u7528\u7a0b\u5e8f\u548c\u5e73\u53f0\u9700\u6c42\u3002\u5b83\u4e0eLinux\u914d\u7f6e\u7cfb\u7edf\u76f8\u540c\uff0c\u76ee\u7684\u662f\u901a\u8fc7Kconfig\u5728\u65e0\u9700\u66f4\u6539\u4efb\u4f55\u6e90\u7801\u4e0b\u8fdb\u884c\u7cfb\u7edf\u914d\u7f6e",source:"@site/docs/chips/600X/build/kconfig/overview.md",sourceDirName:"chips/600X/build/kconfig",slug:"/chips/600X/build/kconfig/overview",permalink:"/docs-csk6/chips/600X/build/kconfig/overview",version:"current",frontMatter:{},sidebar:"docs/chips/600X",previous:{title:"\u8bbe\u5907\u6811 VS Kconfig",permalink:"/docs-csk6/chips/600X/build/dts/dt_vs_kconfig"},next:{title:"Kconfig\u4ea4\u4e92\u754c\u9762",permalink:"/docs-csk6/chips/600X/build/kconfig/Kconfig_gui"}},l=[],p={toc:l};function s(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,i.kt)("p",null,"csk6\u5185\u6838\u548c\u5b50\u7cfb\u7edf\u53ef\u4ee5\u5728\u6784\u5efa\u65f6\u8fdb\u884c\u914d\u7f6e\uff0c\u4ee5\u9002\u5e94\u7279\u5b9a\u7684\u5e94\u7528\u7a0b\u5e8f\u548c\u5e73\u53f0\u9700\u6c42\u3002\u5b83\u4e0eLinux\u914d\u7f6e\u7cfb\u7edf\u76f8\u540c\uff0c\u76ee\u7684\u662f\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"Kconfig"),"\u5728\u65e0\u9700\u66f4\u6539\u4efb\u4f55\u6e90\u7801\u4e0b\u8fdb\u884c\u7cfb\u7edf\u914d\u7f6e"),(0,i.kt)("p",null,"\u914d\u7f6e\u9009\u9879\uff08\u901a\u5e38\u4e5f\u79f0\u4f5c\u7b26\u53f7\uff09\u5728\u82e5\u5e72\u4e2a Kconfig \u6587\u4ef6\u4e2d\u5b9a\u4e49\uff0c\u5e76\u4e14\u6839\u636e\u4e0d\u540c\u7b26\u53f7\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb\u6765\u51b3\u5b9a\u6700\u7ec8\u914d\u7f6e\u662f\u5426\u53ef\u7528\u3002\u9009\u9879\u53ef\u4ee5\u5206\u7ec4\u4e3a\u83dc\u5355\u548c\u5b50\u83dc\u5355\uff0c\u7528\u6765\u4fdd\u6301\u4ea4\u4e92\u5f0f\u914d\u7f6e\u7684\u67b6\u6784\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","Kconfig \u7684\u8f93\u51fa\u662f\u4e00\u4e2a\u5305\u542b\u53ef\u6d4b\u8bd5\u7684\u5b8f\u7684\u5934\u6587\u4ef6 autoconf.h\uff0c\u901a\u8fc7\u5b8f\u6765\u63a7\u5236\u672a\u4f7f\u7528\u7684\u7279\u6027\u8fdb\u884c\u7f16\u8bd1\uff0c\u4ece\u800c\u8282\u7701\u7a7a\u95f4\u3002"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u90e8\u5206\u89e3\u91ca\u4e86\u5982\u4f55\u8bbe\u7f6eKconfig\u914d\u7f6e\u9009\u9879\uff0c\u8be6\u7ec6\u4ecb\u7ecd\u5982\u4f55\u5728csk6\u9879\u76ee\u4e2d\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"Kconfig"),"\uff0c\u5e76\u63d0\u4f9b\u4e00\u4e9b\u7f16\u5199Kconfig\u6587\u4ef6\u7684\u6280\u5de7\u548c\u6700\u4f73\u5b9e\u8df5\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-csk6/chips/600X/build/kconfig/Kconfig_gui"},"Kconfig \u4ea4\u4e92\u754c\u9762")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-csk6/chips/600X/build/kconfig/Kconfig_custom"},"\u8bbe\u7f6eKconfig\u914d\u7f6e")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-csk6/chips/600X/build/kconfig/Kconfig_tips_and_demo"},"\u5c0f\u8d34\u58eb\u4e0e\u6700\u4f73\u5b9e\u8df5")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-csk6/chips/600X/build/kconfig/Kconfig_custom"},"\u81ea\u5b9a\u4e49 Kconfig \u9884\u5904\u7406\u51fd\u6570")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-csk6/chips/600X/build/kconfig/Kconfig_extension"},"Kconfig \u62d3\u5c55"))))}s.isMDXComponent=!0}}]);