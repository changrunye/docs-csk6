"use strict";(self.webpackChunkls_docs_web=self.webpackChunkls_docs_web||[]).push([[996],{3905:(t,n,e)=>{e.d(n,{Zo:()=>_,kt:()=>u});var l=e(67294);function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,l)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function p(t,n){if(null==t)return{};var e,l,a=function(t,n){if(null==t)return{};var e,l,a={},r=Object.keys(t);for(l=0;l<r.length;l++)e=r[l],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)e=r[l],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var o=l.createContext({}),c=function(t){var n=l.useContext(o),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},_=function(t){var n=c(t.components);return l.createElement(o.Provider,{value:n},t.children)},s={inlineCode:"code",wrapper:function(t){var n=t.children;return l.createElement(l.Fragment,{},n)}},d=l.forwardRef((function(t,n){var e=t.components,a=t.mdxType,r=t.originalType,o=t.parentName,_=p(t,["components","mdxType","originalType","parentName"]),d=c(e),u=a,m=d["".concat(o,".").concat(u)]||d[u]||s[u]||r;return e?l.createElement(m,i(i({ref:n},_),{},{components:e})):l.createElement(m,i({ref:n},_))}));function u(t,n){var e=arguments,a=n&&n.mdxType;if("string"==typeof t||a){var r=e.length,i=new Array(r);i[0]=d;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=t,p.mdxType="string"==typeof t?t:a,i[1]=p;for(var c=2;c<r;c++)i[c]=e[c];return l.createElement.apply(null,i)}return l.createElement.apply(null,e)}d.displayName="MDXCreateElement"},80807:(t,n,e)=>{e.r(n),e.d(n,{contentTitle:()=>i,default:()=>_,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var l=e(87462),a=(e(67294),e(3905));const r={},i="LVGL",p={unversionedId:"chips/600X/application/modules/lvgl",id:"chips/600X/application/modules/lvgl",isDocsHomePage:!1,title:"LVGL",description:"\u672c\u8282\u5c06\u4e3b\u8981\u4ecb\u7ecdcsk6 sdk\u63d0\u4f9b\u7684LVGL\u7cfb\u7edf\u7ec4\u4ef6\u7684\u57fa\u7840\u4fe1\u606f\u548c\u80fd\u529b\uff0c\u5e76\u901a\u8fc7\u793a\u4f8b\u5c55\u793a\u5982\u4f55\u57fa\u4e8eLVGL\u8fdb\u884cGUI\u7684\u5f00\u53d1\uff0c\u901a\u8fc7\u672c\u7ae0\u8282\u6211\u4eec\u5c06\u638c\u63e1\uff1a",source:"@site/docs/chips/600X/application/modules/lvgl.md",sourceDirName:"chips/600X/application/modules",slug:"/chips/600X/application/modules/lvgl",permalink:"/docs-csk6/chips/600X/application/modules/lvgl",version:"current",frontMatter:{},sidebar:"docs/chips/600X",previous:{title:"\u663e\u793a&\u89e6\u6478",permalink:"/docs-csk6/chips/600X/application/modules/display_kscan"},next:{title:"SHELL\u7684\u4f7f\u7528",permalink:"/docs-csk6/chips/600X/application/shell_sample"}},o=[{value:"LVGL\u7b80\u4ecb",id:"lvgl\u7b80\u4ecb",children:[]},{value:"LVGL\u5173\u952e\u6982\u5ff5",id:"lvgl\u5173\u952e\u6982\u5ff5",children:[]},{value:"\u5e38\u7528API\u63a5\u53e3",id:"\u5e38\u7528api\u63a5\u53e3",children:[{value:"lv_btn_create",id:"lv_btn_create",children:[]},{value:"lv_obj_align",id:"lv_obj_align",children:[]},{value:"lv_btn_set_fit",id:"lv_btn_set_fit",children:[]}]},{value:"LVGL \u4f7f\u7528\u793a\u4f8b",id:"lvgl-\u4f7f\u7528\u793a\u4f8b",children:[{value:"\u521b\u5efaSample",id:"\u521b\u5efasample",children:[]},{value:"\u7ec4\u4ef6\u914d\u7f6e",id:"\u7ec4\u4ef6\u914d\u7f6e",children:[]},{value:"\u8bbe\u5907\u6811\u914d\u7f6e",id:"\u8bbe\u5907\u6811\u914d\u7f6e",children:[]},{value:"\u5e94\u7528\u903b\u8f91\u5b9e\u73b0",id:"\u5e94\u7528\u903b\u8f91\u5b9e\u73b0",children:[]},{value:"\u7f16\u8bd1\u548c\u70e7\u5f55",id:"\u7f16\u8bd1\u548c\u70e7\u5f55",children:[]}]}],c={toc:o};function _(t){let{components:n,...r}=t;return(0,a.kt)("wrapper",(0,l.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lvgl"},"LVGL"),(0,a.kt)("p",null,"\u672c\u8282\u5c06\u4e3b\u8981\u4ecb\u7ecdcsk6 sdk\u63d0\u4f9b\u7684LVGL\u7cfb\u7edf\u7ec4\u4ef6\u7684\u57fa\u7840\u4fe1\u606f\u548c\u80fd\u529b\uff0c\u5e76\u901a\u8fc7\u793a\u4f8b\u5c55\u793a\u5982\u4f55\u57fa\u4e8eLVGL\u8fdb\u884cGUI\u7684\u5f00\u53d1\uff0c\u901a\u8fc7\u672c\u7ae0\u8282\u6211\u4eec\u5c06\u638c\u63e1\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7406\u89e3LVGL\u7684\u5173\u952e\u6982\u5ff5"),(0,a.kt)("li",{parentName:"ul"},"\u5728CSK6\u5f00\u53d1\u677f\u4e0a\u8fd0\u884c\u4e00\u4e2aLVGL Sample ")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u672c\u7ae0\u8282\u4ecb\u7ecd\u7684LVGL\u7ec4\u4ef6\u7248\u672c\u4e3aLVGL8\uff0cSample \u57fa\u4e8eLVGL8\u5b9e\u73b0\u3002"))),(0,a.kt)("h2",{id:"lvgl\u7b80\u4ecb"},"LVGL\u7b80\u4ecb"),(0,a.kt)("p",null,"LVGL\u5168\u79f0Light and Versatile Graphics Library\uff0c\u662f\u4e00\u4e2a\u5f00\u6e90\u7684GUI\u5e93\uff0c\u5177\u5907\u8d44\u6e90\u6d88\u8017\u5c0f\u3001\u53ef\u79fb\u690d\u5ea6\u9ad8\u7684\u7279\u70b9\uff0c\u56e0\u6b64\u5f88\u9002\u5408\u5728\u5d4c\u5165\u5f0f\u8bbe\u5907\u4e0a\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u4f5c\u4e3a\u4e00\u4e2a\u56fe\u5f62\u5e93\uff0cLVGL\u4e5f\u81ea\u5e26\u4e86\u4e30\u5bcc\u7684GUI\u63a7\u4ef6\u53ef\u4ee5\u4f9b\u5f00\u53d1\u8005\u76f4\u63a5\u4f7f\u7528\uff0c\u5982\u5e38\u7528\u7684\u6309\u94ae\uff0c\u56fe\u8868\uff0c\u5217\u8868\uff0c\u6ed1\u5757\u7b49\uff0c\u6b64\u5916\u8fd8\u652f\u6301\u591a\u79cd\u56fe\u5f62\u52a8\u753b\u7684\u8c03\u7528\uff0c\u76f8\u6bd4\u4f20\u7edf\u9a71\u5c4f\u7ed8\u5236GUI\uff0c\u5f00\u53d1\u8005\u4e0d\u9700\u8981\u5927\u91cf\u7684\u4ee3\u7801\u7f16\u5199\u91cf\u548c\u53cd\u590d\u7684\u6548\u679c\u9a8c\u8bc1\uff0c\u5c31\u53ef\u4ee5\u642d\u5efa\u51fa\u4e00\u4e2a\u6bd4\u8f83\u6ee1\u610f\u7684GUI\u5e94\u7528\u3002"),(0,a.kt)("h2",{id:"lvgl\u5173\u952e\u6982\u5ff5"},"LVGL\u5173\u952e\u6982\u5ff5"),(0,a.kt)("p",null,"\u5728\u5f00\u59cbLVGL\u7684Sample\u5b9e\u9a8c\u524d\uff0c\u8ba9\u6211\u4eec\u5148\u7b80\u5355\u4e86\u89e3\u4ee5\u4e0bLVGL\u4e00\u4e9b\u6bd4\u8f83\u91cd\u8981\u7684\u6982\u5ff5\uff0c\u65b9\u4fbf\u5bf9\u540e\u7eedSample\u9a8c\u8bc1\u7684\u7406\u89e3\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Display\uff1a")," \u5728LVGL\u4e2d\u4e00\u4e2a\u7269\u7406\u663e\u793a\u5668\u5bf9\u5e94\u4e00\u4e2a\u663e\u793a\u5668\u9a71\u52a8\uff0cLVGL\u652f\u6301\u591a\u4e2a\u7269\u7406\u663e\u793a\u5668\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Screen\uff1a")," \u4e00\u4e2aDisplay\u521b\u5efa\u591a\u4e2aScreen\uff0c\u53ef\u4ee5\u7406\u89e3\u4e3a\u9875\u9762\uff0cScreen\u4e0a\u53ef\u4ee5\u6dfb\u52a0\u5404\u79cdLVGL\u652f\u6301\u7684\u7ec4\u4ef6\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Object\uff1a")," object\u662fLVGL\u6784\u5efaGUI\u7684\u57fa\u672c\u5355\u4f4d\uff0c\u6bcf\u4e2aWidgets\u90fd\u5c5e\u4e8eObject\uff0c\u4e0a\u9762\u7684Screen(\u9875\u9762)\u4e5f\u662f\u4e00\u4e2aObject\u3002object\u4f7f\u7528\u7236\u5b50\u6811\u5f62\u7ed3\u6784\uff0c\u53ea\u5141\u8bb8\u6709\u4e00\u4e2a\u7236\u8282\u70b9\uff0c\u5141\u8bb8\u6709\u591a\u4e2a\u5b50\u8282\u70b9\u3002screen\u505a\u4e3a\u6839\u8282\u70b9\uff0c\u5141\u8bb8\u6ca1\u6709\u7236\u8282\u70b9\u3002"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u66f4\u591a\u7684LVGL\u91cd\u8981\u529f\u80fd\u8bf4\u660e\uff0c\u53ef\u8bbf\u95ee ",(0,a.kt)("a",{parentName:"p",href:"https://docs.lvgl.io/7.11/overview/index.html"},"LVGL\u6587\u6863\u4e2d\u5fc3")," \u8fdb\u884c\u4e86\u89e3\u3002"))),(0,a.kt)("h2",{id:"\u5e38\u7528api\u63a5\u53e3"},"\u5e38\u7528API\u63a5\u53e3"),(0,a.kt)("h3",{id:"lv_btn_create"},"lv_btn_create"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"lv_obj_t * lv_btn_create(lv_obj_t * par, const lv_obj_t * copy)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u8bf4\u660e")),(0,a.kt)("p",null,"\u521b\u5efa\u6309\u94ae\u5bf9\u8c61\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"par"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"copy"),(0,a.kt)("td",{parentName:"tr",align:null},"\u590d\u5236\u6307\u5411\u6807\u7b7e\u5bf9\u8c61\u7684\u6307\u9488\uff0c\u5982\u679c\u4e0d\u4e3a NULL\uff0c\u5219\u5c06\u4ece\u4e2d\u590d\u5236\u65b0\u5bf9\u8c61")))),(0,a.kt)("h3",{id:"lv_obj_align"},"lv_obj_align"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"void lv_obj_align(lv_obj_t * obj, const lv_obj_t * base, lv_align_t align, lv_coord_t x_ofs, lv_coord_t y_ofs)\n\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u8bf4\u660e")),(0,a.kt)("p",null,"\u5c06\u4e00\u4e2a\u5bf9\u8c61\u4e0e\u53e6\u4e00\u4e2a\u5bf9\u8c61\u5bf9\u9f50\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"obj"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6307\u5411\u8981\u5bf9\u9f50\u7684\u5bf9\u8c61\u7684\u6307\u9488")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"base"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6307\u5411\u5bf9\u8c61\u7684\u57fa\u6307\u9488\uff08\u5982\u679c\u4e3a NULL\uff0c\u5219\u4f7f\u7528\u7236\u5bf9\u8c61\uff09\u3002 'obj' \u5c06\u4e0e\u5176\u5bf9\u9f50\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"align"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5bf9\u9f50\u7c7b\u578b\uff08\u53c2\u89c1 'lv_align_t' \u679a\u4e3e\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x_ofs"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5bf9\u9f50\u540e\u7684\u5750\u6807\u504f\u79fb\u91cf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"y_ofs"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5bf9\u9f50\u540e\u7684y\u5750\u6807\u504f\u79fb\u91cf")))),(0,a.kt)("h3",{id:"lv_btn_set_fit"},"lv_btn_set_fit"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"static inline void lv_btn_set_fit(lv_obj_t * btn, lv_fit_t fit)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u8bf4\u660e")),(0,a.kt)("p",null,"\u5c06\u4e00\u4e2a\u5bf9\u8c61\u4e0e\u53e6\u4e00\u4e2a\u5bf9\u8c61\u5bf9\u9f50\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"btn"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6307\u5411\u6309\u94ae\u5bf9\u8c61\u7684\u6307\u9488")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fit"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6765\u81ea ",(0,a.kt)("inlineCode",{parentName:"td"},"lv_fit_t")," \u7684\u9002\u914d\u7b56\u7565")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"lv_obj_t * lv_label_create(lv_obj_t * par, const lv_obj_t * copy)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u8bf4\u660e")),(0,a.kt)("p",null,"\u521b\u5efa\u6807\u7b7e\u5bf9\u8c61\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"par"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6307\u5411\u4e00\u4e2a\u5bf9\u8c61\u7684\u6307\u9488\uff0c\u5b83\u5c06\u662f\u65b0\u5efa\u6807\u7b7e\u7684\u7236\u5bf9\u8c61")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"copy"),(0,a.kt)("td",{parentName:"tr",align:null},"\u590d\u5236\u6307\u5411\u6807\u7b7e\u5bf9\u8c61\u7684\u6307\u9488\uff0c\u5982\u679c\u4e0d\u4e3a NULL\uff0c\u5219\u5c06\u4ece\u4e2d\u590d\u5236\u65b0\u5bf9\u8c61")))),(0,a.kt)("p",null,"LVGL\u652f\u6301\u4e30\u5bcc\u7684\u754c\u9762\u5f00\u53d1\u63a5\u53e3\uff0c\u8fd9\u91cc\u4e0d\u4e00\u4e00\u5217\u4e3e\uff0c\u66f4\u591a\u63a5\u53e3\u8bf7\u67e5\u9605csk6sdk\u4e2dlv\u5934\u6587\u4ef6\uff1a"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"csk-sdk\\modules\\lib\\gui\\lvgl8\\src\\widgets\\lv_label.h"),"\u3002"),(0,a.kt)("h2",{id:"lvgl-\u4f7f\u7528\u793a\u4f8b"},"LVGL \u4f7f\u7528\u793a\u4f8b"),(0,a.kt)("h3",{id:"\u521b\u5efasample"},"\u521b\u5efaSample"),(0,a.kt)("p",null,"\u901a\u8fc7Lisa\u547d\u4ee4\u521b\u5efa\u9879\u76ee\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"lisa zep create\n")),(0,a.kt)("p",null,"\u4f9d\u6b21\u6309\u4ee5\u4e0b\u76ee\u5f55\u9009\u62e9\u5b8c\u6210adc sample\u7684\u521b\u5efa\uff1a  "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"boards \u2192 csk6 \u2192 subsys \u2192 display \u2192 lvgl8 \u2192 SimpleShow")),(0,a.kt)("h3",{id:"\u7ec4\u4ef6\u914d\u7f6e"},"\u7ec4\u4ef6\u914d\u7f6e"),(0,a.kt)("p",null,"\u9488\u5bf9csk6002_9s_nano\u5f00\u53d1\u677f\u7684\u786c\u4ef6\u914d\u7f6e\uff1a\n",(0,a.kt)("inlineCode",{parentName:"p"},"lvgl")," \u5de5\u7a0b\u76ee\u5f55\u4e0b",(0,a.kt)("inlineCode",{parentName:"p"},"boards/csk6002_9s_nano.conf"),"\u589e\u52a0\u5982\u4e0b\u914d\u7f6e\uff1a   "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'# \u542f\u7528KSCAN\u914d\u7f6e\nCONFIG_KSCAN=y\nCONFIG_LVGL_POINTER_KSCAN_SWAP_XY=y\nCONFIG_LVGL_POINTER_KSCAN=y\nCONFIG_LVGL_POINTER_KSCAN_DEV_NAME="BL6XXX"\n\nCONFIG_DISPLAY=y\n# \u5f00\u53d1\u677f\u4f7f\u7528\u7684\u5c4f\u5e55\u662f ST7789V\nCONFIG_LVGL_DISPLAY_DEV_NAME="ST7789V"\n# \u5f00\u53d1\u677f\u4f7f\u7528\u7684\u5c4f\u5e55\u5bbd\nCONFIG_LVGL_HOR_RES_MAX=320\n# \u5f00\u53d1\u677f\u4f7f\u7528\u7684\u5c4f\u5e55\u9ad8\nCONFIG_LVGL_VER_RES_MAX=170\n# \u5c4f\u5e55\u7684DPI\u503c\nCONFIG_LVGL_DPI=100\nCONFIG_LV_COLOR_DEPTH_16=y\nCONFIG_LV_COLOR_16_SWAP=y\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"lvgl")," \u5de5\u7a0b\u901a\u7528\u914d\u7f6e\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"prj.conf")," \uff0c\u5728\u6587\u4ef6\u4e2d\u589e\u52a0\u4ee5\u4e0b\u914d\u7f6e\u9009\u9879\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"CONFIG_HEAP_MEM_POOL_SIZE=16384\nCONFIG_MAIN_STACK_SIZE=2048\n# \u663e\u793a\u914d\u7f6e\nCONFIG_DISPLAY=y\nCONFIG_DISPLAY_LOG_LEVEL_ERR=y\n# \u65e5\u5fd7\u914d\u7f6e\nCONFIG_LOG=y\nCONFIG_LOG_STRDUP_BUF_COUNT=16\n\n# LVGL8\u914d\u7f6e\nCONFIG_LVGL8=y\nCONFIG_LV_USE_LABEL=y\nCONFIG_LV_USE_BTN=y\n\n# \u542f\u7528GPIO\u9a71\u52a8(\u5c4f\u5e55\u63a7\u5236\u5f15\u811a\u4f7f\u7528)\nCONFIG_GPIO=y\n# \u542f\u7528SPI\u9a71\u52a8(\u5c4f\u5e55\u4f7f\u7528SPI\u4f5c\u4e3a\u6570\u636e\u603b\u7ebf)\nCONFIG_SPI=y\n# \u542f\u7528ST7789V display\u9a71\u52a8\nCONFIG_ST7789V=y\n# \u542f\u7528I2C\u914d\u7f6e\nCONFIG_I2C=y\n# \u542f\u7528BL6XX KSCAN\u89e6\u6478\u8bbe\u5907\u9a71\u52a8\nCONFIG_KSCAN_BL6XXX=y\n")),(0,a.kt)("h3",{id:"\u8bbe\u5907\u6811\u914d\u7f6e"},"\u8bbe\u5907\u6811\u914d\u7f6e"),(0,a.kt)("h4",{id:"lcd-\u663e\u793a\u5c4fspi\u8bbe\u5907\u6811\u914d\u7f6e"},(0,a.kt)("strong",{parentName:"h4"},"LCD \u663e\u793a\u5c4fSPI\u8bbe\u5907\u6811\u914d\u7f6e\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'&csk6002_9s_nano_pinctrl{\n                /* SPI pin \u811a\u914d\u7f6e */\n                pinctrl_spi0_sclk_default: spi0_sclk_default {\n                        pinctrls = < &pinmuxa 15 6 >;\n                };\n                pinctrl_spi0_mosi_default: spi0_mosi_default {\n                        pinctrls = < &pinmuxa 10 6 >;\n                };\n                pinctrl_spi0_miso_default: spi0_miso_default {\n                        pinctrls = < &pinmuxa 17 6 >;\n                };\n                pinctrl_spi0_cs_default: spi0_cs_default {\n                        pinctrls = < &pinmuxa 12 6 >;\n                }; \n};\n/* st7789v spi\u8bbe\u5907\u6811\u914d\u7f6e */\n&spi0 {\n        status = "okay";\n        pinctrl-0 = <&pinctrl_spi0_sclk_default &pinctrl_spi0_mosi_default &pinctrl_spi0_miso_default &pinctrl_spi0_cs_default>; \n        pinctrl-names = "default";\n\n        st7789v@0 {\n                compatible = "sitronix,st7789v";\n                label = "ST7789V";\n                status = "okay";\n                spi-max-frequency = <20000000>;\n                reg = <0>;\n                cmd-data-gpios = <&gpioa 14 1>;\n                reset-gpios = <&gpiob 6 1>;\n                width = <320>;\n                height = <170>;\n                x-offset = <0>;\n                y-offset = <35>;\n                // reg:0xBB\n                vcom = <0x1e>;\n                // reg:0xB7\n                gctrl = <0x35>;\n                // reg:0xC3\n                vrhs = <0x0b>;\n                // reg:0xC4\n                vdvs = <0x20>;\n                // reg:0x36\n                mdac = <0xA3>;\n                // reg:0x26\n                gamma = <0x01>;\n                // reg:0x3a\n                colmod = <0x05>;\n                // reg:0xc0\n                lcm = <0x2c>;\n                // reg:0xb2\n                porch-param = [0c 0c 00 33 33];\n                // reg:0xDF\n                cmd2en-param = [5a 69 02 01];\n                // reg:0xD0\n                pwctrl1-param = [a4 a1];\n                // reg:0xE0\n                pvgam-param = [d0 06 0b 07 07 24 2e 32 46 37 13 13 2d 33];\n                // reg:0xE1\n                nvgam-param = [d0 02 06 09 08 05 29 44 42 38 14 14 2a 30];\n                // reg:b0\n                ram-param = [00 F0];\n                // reg:b1\n                rgb-param = [CD 08 14];\n        };\n};\n\n')),(0,a.kt)("h4",{id:"\u89e6\u6478\u5c4fi2c\u5f15\u811a\u914d\u7f6e"},(0,a.kt)("strong",{parentName:"h4"},"\u89e6\u6478\u5c4fI2C\u5f15\u811a\u914d\u7f6e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'\n...             /* \u89e6\u63a7\u5c4fi2c pin\u811a\u914d\u7f6e */\n                pinctrl_i2c0_scl_default: i2c0_scl_default{\n                        pinctrls = <&pinmuxb 2 8>;\n                };\n                \n                pinctrl_i2c0_sda_default: i2c0_sda_default{\n                        pinctrls = <&pinmuxb 3 8>;\n                };    \n...\n\n/* \u89e6\u63a7\u5c4fi2c\u914d\u7f6e */\n&i2c0 {\n        status = "okay";\n        pinctrl-0 = <&pinctrl_i2c0_scl_default &pinctrl_i2c0_sda_default>; \n        pinctrl-names = "default";\n        bl6xxx@0 {\n                compatible = "betterlife,bl6xxx";\n                reg = <0>;\n                label = "BL6XXX";\n                status = "okay";\n                int-gpios = <&gpioa 3 0>;\n                reset-gpios = <&gpioa 2 0>;\n        };\n};\n')),(0,a.kt)("h3",{id:"\u5e94\u7528\u903b\u8f91\u5b9e\u73b0"},"\u5e94\u7528\u903b\u8f91\u5b9e\u73b0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include <device.h>\n#include <drivers/display.h>\n#include <lvgl.h>\n#include <stdio.h>\n#include <string.h>\n#include <zephyr.h>\n\n#define LOG_LEVEL CONFIG_LOG_DEFAULT_LEVEL\n#include <logging/log.h>\nLOG_MODULE_REGISTER(app);\n\nvoid main(void)\n{\n    uint32_t count = 0U;\n    char count_str[11] = {0};\n    const struct device *display_dev;\n    /*\u521b\u5efabtn label\u5bf9\u8c61*/\n    lv_obj_t *hello_world_label;\n    /* \u521b\u5efacount label\u5bf9\u8c61 */\n    lv_obj_t *count_label;\n    \n    /* \u8fdb\u884c\u8bbe\u5907\u7684\u7ed1\u5b9a\uff0cCONFIG_LVGL_DISPLAY_DEV_NAME\u5df2\u5728prj.conf\u4e2d\u5b9a\u4e49\u4e3aST7789V */\n    display_dev = device_get_binding(CONFIG_LVGL_DISPLAY_DEV_NAME);\n\n    if (display_dev == NULL) {\n        LOG_ERR("device not found.  Aborting test.");\n        return;\n    }\n\n    if (IS_ENABLED(CONFIG_LVGL_POINTER_KSCAN)) {\n        lv_obj_t *hello_world_button;\n\n        hello_world_button = lv_btn_create(lv_scr_act(), NULL);\n        /* \u5bf9\u8fd9\u4e2alable\u505a\u4f4d\u7f6e\u7684\u6392\u5217\uff0c\u4f4d\u7f6e\u4e3a\u9875\u9762\u6b63\u4e2d\u95f4\uff0c\u540e\u9762\u4e24\u4e2a\u53c2\u6570\u4e3ax/y\u5750\u6807\u504f\u79fb\u91cf */\n        lv_obj_align(hello_world_button, NULL, LV_ALIGN_CENTER, 0, 0);\n        lv_btn_set_fit(hello_world_button, LV_FIT_TIGHT);\n        /* \u5c06count_label\u4f5c\u4e3a\u4e00\u4e2alable\uff0c\u5e76\u5c06\u5176\u7236\u8282\u70b9\u914d\u7f6e\u4e3a\u9ed8\u8ba4\u7684screen */\n        hello_world_label = lv_label_create(hello_world_button, NULL);\n    } else {\n        hello_world_label = lv_label_create(lv_scr_act(), NULL);\n    }\n    \n    /* \u5c06\u521b\u5efa\u7684\u5bf9\u8c61\u505a\u4e3alable\u4f7f\u7528\uff0c\u8bbe\u7f6etext\u5185\u5bb9\u4e3a"Hello world!" */\n    lv_label_set_text(hello_world_label, "Hello world!");\n    lv_obj_align(hello_world_label, NULL, LV_ALIGN_CENTER, 0, 0);\n\n    count_label = lv_label_create(lv_scr_act(), NULL);\n    /* \u5bf9\u8fd9\u4e2alable\u505a\u4f4d\u7f6e\u7684\u6392\u5217\uff0c\u4f4d\u7f6e\u4e3a\u5e95\u90e8\u7684\u4e2d\u95f4 */\n    lv_obj_align(count_label, NULL, LV_ALIGN_IN_BOTTOM_MID, 0, 0);\n    \n    /* \u6267\u884c\u4efb\u52a1handler\uff0c\u8fdb\u884c\u5c4f\u5e55\u5185\u5bb9\u5237\u65b0 */\n    lv_task_handler();\n    display_blanking_off(display_dev);\n    \n    /* \u4e00\u4e2awhile\u5faa\u73af\u4e2d\uff0c\u6bcf\u96941\u79d2\u505a\u4e00\u6b21count_label\u7684text\u7684\u6570\u503c\u9012\u589e1 */\n    while (1) {\n        if ((count % 100) == 0U) {\n            sprintf(count_str, "%d", count/100U);\n            lv_label_set_text(count_label, count_str);\n        }\n        /* \u9700\u8981\u5b9a\u671f\u6267\u884clv_task_handler */\n        lv_task_handler();\n        k_sleep(K_MSEC(10));\n        ++count;\n    }\n}\n')),(0,a.kt)("h3",{id:"\u7f16\u8bd1\u548c\u70e7\u5f55"},"\u7f16\u8bd1\u548c\u70e7\u5f55"),(0,a.kt)("h4",{id:"\u7f16\u8bd1"},"\u7f16\u8bd1"),(0,a.kt)("p",null,"\u5728\u5f53\u524d\u5de5\u7a0b\u76ee\u5f55\u4e2d\u6267\u884c \u4ee5\u4e0b\u6307\u4ee4\u8fdb\u884c\u7f16\u8bd1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"lisa zep build -b csk6002_9s_nano\n")),(0,a.kt)("h4",{id:"\u70e7\u5f55"},"\u70e7\u5f55"),(0,a.kt)("p",null,"\u7f16\u8bd1\u5b8c\u6210\u540e\uff0c\u6267\u884c\u4ee5\u4e0b\u6307\u4ee4\u8fdb\u884c\u56fa\u4ef6\u70e7\u5f55\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"lisa zep flash --runner pyocd\n")),(0,a.kt)("h4",{id:"\u67e5\u770b\u7ed3\u679c"},"\u67e5\u770b\u7ed3\u679c"),(0,a.kt)("p",null,'\u70e7\u5f55\u5b8c\u6210\u540e\uff0c\u53ef\u89c2\u5bdf\u5230\u8bbe\u5907\u663e\u793a\u5c4f\u51fa\u73b0\u56fe\u50cf\uff0c\u4e2d\u592e\u6709\u4e00\u4e2atxt\u5185\u5bb9\u4e3a"Hello world!"\u7684button\uff0c\u4e0b\u65b9\u4e3a\u4e00\u4e2a\u4e0d\u65ad\u9012\u589e\u7684\u8ba1\u6570\u503c\uff0c\u5982\u56fe\uff1a\n',(0,a.kt)("img",{alt:"image",src:e(49467).Z})),(0,a.kt)("p",null,"\u672c\u7ae0\u8282Sample\u4ec5\u7b80\u5355\u5c55\u793a\u4e86LVGL\u7684GUI\u529f\u80fd\uff0c\u66f4\u591a\u7684\u63a7\u4ef6\u3001\u9ad8\u7ea7\u529f\u80fd\u5e94\u7528\u7528\u6237\u53ef\u4ee5\u81ea\u884c\u9605\u8bfbLVGL\u5e93\u63a5\u53e3\u8bf4\u660e\u6216\u524d\u5f80 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.lvgl.io/7.11/overview/index.html"},"LVGL\u5b98\u65b9\u6587\u6863")," \u8fdb\u884c\u4e86\u89e3\u3002"))}_.isMDXComponent=!0},49467:(t,n,e)=>{e.d(n,{Z:()=>l});const l=e.p+"assets/images/lvgl_helloworld-cff63a85921b0ad84405ece4a4ecd8e5.png"}}]);