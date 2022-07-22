"use strict";(self.webpackChunkls_docs_web=self.webpackChunkls_docs_web||[]).push([[2506],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=c(n),y=i,d=m["".concat(p,".").concat(y)]||m[y]||u[y]||l;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63573:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>a,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const l={},o="\u5b89\u88c5",a={unversionedId:"chips/micropython/lisa_plugin_mpy/install",id:"chips/micropython/lisa_plugin_mpy/install",isDocsHomePage:!1,title:"\u5b89\u88c5",description:"\u5f00\u59cb",source:"@site/docs/chips/micropython/lisa_plugin_mpy/install.md",sourceDirName:"chips/micropython/lisa_plugin_mpy",slug:"/chips/micropython/lisa_plugin_mpy/install",permalink:"/docs-csk6/chips/micropython/lisa_plugin_mpy/install",version:"current",frontMatter:{},sidebar:"docs/chips/micropython",previous:{title:"\u6982\u8ff0",permalink:"/docs-csk6/chips/micropython/lisa_plugin_mpy/index"},next:{title:"\u547d\u4ee4\u4f7f\u7528",permalink:"/docs-csk6/chips/micropython/lisa_plugin_mpy/commands"}},p=[{value:"\u5f00\u59cb",id:"\u5f00\u59cb",children:[]},{value:"\u5b89\u88c5\u5f00\u53d1\u73af\u5883",id:"\u5b89\u88c5\u5f00\u53d1\u73af\u5883",children:[]}],c={toc:p};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,i.kt)("h2",{id:"\u5f00\u59cb"},"\u5f00\u59cb"),(0,i.kt)("p",null,"\u4f7f\u7528 lisa \u5b89\u88c5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"lisa install -g @lisa-plugin/micropython\n")),(0,i.kt)("h2",{id:"\u5b89\u88c5\u5f00\u53d1\u73af\u5883"},"\u5b89\u88c5\u5f00\u53d1\u73af\u5883"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"lisa mpy use-sdk\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"use-sdk")," \u547d\u4ee4\u652f\u6301\u9644\u5e26\u4e0b\u8ff0\u53c2\u6570\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--from-git")," \u81ea\u5b9a\u4e49 SDK \u7684 Git \u4ed3\u5e93\u5730\u5740\u3002")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--path")," \u6307\u5b9a\u5b89\u88c5 SDK \u7684\u8def\u5f84\uff0c\u9ed8\u8ba4\u4e3a\u63d2\u4ef6\u76ee\u5f55\u4e0b\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"sdk")," \u76ee\u5f55\u3002")))}s.isMDXComponent=!0}}]);