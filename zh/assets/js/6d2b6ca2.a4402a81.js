"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[3577],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=c(r),m=l,k=s["".concat(u,".").concat(m)]||s[m]||p[m]||o;return r?n.createElement(k,a(a({ref:t},d),{},{components:r})):n.createElement(k,a({ref:t},d))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},5162:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(7294),l=r(4334),o="tabItem_Ymn6";function a(e){let{children:t,hidden:r,className:a}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(o,a),hidden:r},t)}},4866:function(e,t,r){r.d(t,{Z:function(){return N}});var n=r(3117),l=r(7294),o=r(4334),a=r(2466),i=r(6775),u=r(1980),c=r(7392),d=r(12);function p(e){return function(e){var t;return(null==(t=l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:l}}=e;return{value:t,label:r,attributes:n,default:l}}))}function s(e){const{values:t,children:r}=e;return(0,l.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(o),(0,l.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=s(e),[a,i]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[u,c]=k({queryString:r,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,d.Nk)(r);return[n,(0,l.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),h=(()=>{const e=u??p;return m({value:e,tabValues:o})?e:null})();(0,l.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:a,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),f(e)}),[c,f,o]),tabValues:o}}var h=r(2389),b="tabList__CuJ",v="tabItem_LNqP";function g(e){let{className:t,block:r,selectedValue:i,selectValue:u,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,a.o5)(),s=e=>{const t=e.currentTarget,r=d.indexOf(t),n=c[r].value;n!==i&&(p(t),u(n))},m=e=>{var t;let r=null;switch(e.key){case"Enter":s(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;r=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;r=d[t]??d[d.length-1];break}}null==(t=r)||t.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:a}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:s},a,{className:(0,o.Z)("tabs__item",v,null==a?void 0:a.className,{"tabs__item--active":i===t})}),r??t)})))}function w(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=f(e);return l.createElement("div",{className:(0,o.Z)("tabs-container",b)},l.createElement(g,(0,n.Z)({},e,t)),l.createElement(w,(0,n.Z)({},e,t)))}function N(e){const t=(0,h.Z)();return l.createElement(y,(0,n.Z)({key:String(t)},e))}},2972:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var n=r(3117),l=(r(7294),r(3905)),o=r(4866),a=r(5162);const i={title:"Hello World \u793a\u4f8b"},u=void 0,c={unversionedId:"how-to-guides/hello-world-example",id:"version-1.7/how-to-guides/hello-world-example",title:"Hello World \u793a\u4f8b",description:"\u672c\u6559\u7a0b\u901a\u8fc7\u6f14\u793a\u5982\u4f55\u5c06\u5e94\u7528\u63a8\u9001\u5230\u672c\u5730 Kubernetes \u96c6\u7fa4\u6765\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Rancher Desktop\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.7/how-to-guides/hello-world-example.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/hello-world-example",permalink:"/zh/1.7/how-to-guides/hello-world-example",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.7/how-to-guides/hello-world-example.md",tags:[],version:"1.7",frontMatter:{title:"Hello World \u793a\u4f8b"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528\u5bb9\u5668",permalink:"/zh/1.7/tutorials/working-with-containers"},next:{title:"\u4f20\u8f93\u5bb9\u5668\u955c\u50cf",permalink:"/zh/1.7/how-to-guides/transfer-container-images"}},d={},p=[{value:"\u793a\u4f8b 1 - \u6784\u5efa\u955c\u50cf\u5e76\u8fd0\u884c\u5bb9\u5668",id:"\u793a\u4f8b-1---\u6784\u5efa\u955c\u50cf\u5e76\u8fd0\u884c\u5bb9\u5668",level:3},{value:"\u521b\u5efa\u6587\u4ef6\u5939",id:"\u521b\u5efa\u6587\u4ef6\u5939",level:4},{value:"\u521b\u5efa\u4e00\u4e2a\u7a7a\u767d\u7684 Dockerfile",id:"\u521b\u5efa\u4e00\u4e2a\u7a7a\u767d\u7684-dockerfile",level:4},{value:"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u586b\u5145 Dockerfile",id:"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u586b\u5145-dockerfile",level:4},{value:"\u6784\u5efa\u5e76\u8fd0\u884c\u955c\u50cf\u4ee5\u8fdb\u884c\u9a8c\u8bc1",id:"\u6784\u5efa\u5e76\u8fd0\u884c\u955c\u50cf\u4ee5\u8fdb\u884c\u9a8c\u8bc1",level:4},{value:"\u793a\u4f8b 2 - \u6784\u5efa\u955c\u50cf\u5e76\u5c06\u5bb9\u5668\u90e8\u7f72\u5230 Kubernetes",id:"\u793a\u4f8b-2---\u6784\u5efa\u955c\u50cf\u5e76\u5c06\u5bb9\u5668\u90e8\u7f72\u5230-kubernetes",level:3},{value:"\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6\u5939\u5e76\u6dfb\u52a0\u4e00\u4e2a\u793a\u4f8b index.html \u6587\u4ef6\uff0c\u5982\u4e0b\u6240\u793a",id:"\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6\u5939\u5e76\u6dfb\u52a0\u4e00\u4e2a\u793a\u4f8b-indexhtml-\u6587\u4ef6\u5982\u4e0b\u6240\u793a",level:4},{value:"\u521b\u5efa\u4e00\u4e2a\u7a7a\u767d\u7684 Dockerfile",id:"\u521b\u5efa\u4e00\u4e2a\u7a7a\u767d\u7684-dockerfile-1",level:4},{value:"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u586b\u5145 Dockerfile",id:"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u586b\u5145-dockerfile-1",level:4},{value:"\u4f7f\u7528\u672c\u5730\u4ee3\u7801\u6784\u5efa\u955c\u50cf",id:"\u4f7f\u7528\u672c\u5730\u4ee3\u7801\u6784\u5efa\u955c\u50cf",level:4},{value:"\u90e8\u7f72\u5230 Kubernetes",id:"\u90e8\u7f72\u5230-kubernetes",level:4},{value:"\u5220\u9664 pod \u548c\u955c\u50cf",id:"\u5220\u9664-pod-\u548c\u955c\u50cf",level:4}],s={toc:p};function m(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u672c\u6559\u7a0b\u901a\u8fc7\u6f14\u793a\u5982\u4f55\u5c06\u5e94\u7528\u63a8\u9001\u5230\u672c\u5730 Kubernetes \u96c6\u7fa4\u6765\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Rancher Desktop\u3002"),(0,l.kt)("p",null,"Rancher Desktop \u4f7f\u7528\u4e86\u4e24\u4e2a\u5bb9\u5668\u5f15\u64ce\uff0c\u5206\u522b\u662f ",(0,l.kt)("a",{parentName:"p",href:"https://containerd.io/"},"containerd")," \u548c ",(0,l.kt)("a",{parentName:"p",href:"https://mobyproject.org/"},"Moby"),"\uff0c\u5b83\u4eec\u662f Docker \u751f\u6001\u7cfb\u7edf\u7684\u5f00\u6e90\u7ec4\u4ef6\u3002\u5bf9\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"nerdctl"),"\uff0c\u4f7f\u7528 ",(0,l.kt)("strong",{parentName:"p"},"containerd")," \u8fd0\u884c\u65f6\u3002\u5bf9\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"docker"),"\uff0c\u4f7f\u7528 ",(0,l.kt)("strong",{parentName:"p"},"dockerd(moby)")," \u8fd0\u884c\u65f6\u3002"),(0,l.kt)("h3",{id:"\u793a\u4f8b-1---\u6784\u5efa\u955c\u50cf\u5e76\u8fd0\u884c\u5bb9\u5668"},"\u793a\u4f8b 1 - \u6784\u5efa\u955c\u50cf\u5e76\u8fd0\u884c\u5bb9\u5668"),(0,l.kt)("h4",{id:"\u521b\u5efa\u6587\u4ef6\u5939"},"\u521b\u5efa\u6587\u4ef6\u5939"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mkdir hello-world\ncd hello-world\n")),(0,l.kt)("h4",{id:"\u521b\u5efa\u4e00\u4e2a\u7a7a\u767d\u7684-dockerfile"},"\u521b\u5efa\u4e00\u4e2a\u7a7a\u767d\u7684 Dockerfile"),(0,l.kt)("p",null,"\u5728 Windows \u4e0a\uff0c\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"Dockerfile")," \u7684\u7a7a\u767d\u6587\u4ef6\u3002"),(0,l.kt)("p",null,"\u5728 Linux \u4e0a\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u521b\u5efa\u4e00\u4e2a\u7a7a\u767d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Dockerfile"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"vi Dockerfile\n")),(0,l.kt)("h4",{id:"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u586b\u5145-dockerfile"},"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u586b\u5145 Dockerfile"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'FROM alpine  \nCMD ["echo", "Hello World!!"]\n')),(0,l.kt)("h4",{id:"\u6784\u5efa\u5e76\u8fd0\u884c\u955c\u50cf\u4ee5\u8fdb\u884c\u9a8c\u8bc1"},"\u6784\u5efa\u5e76\u8fd0\u884c\u955c\u50cf\u4ee5\u8fdb\u884c\u9a8c\u8bc1"),(0,l.kt)(o.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,l.kt)(a.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"nerdctl build --tag helloworld:v1.0 .\nnerdctl images | grep helloworld\nnerdctl run --rm helloworld:v1.0\n# \u79fb\u9664\u955c\u50cf\nnerdctl rmi helloworld:v1.0\n"))),(0,l.kt)(a.Z,{value:"docker",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"docker build --tag helloworld:v1.0 .\ndocker images | grep helloworld\ndocker run --rm helloworld:v1.0\n# \u79fb\u9664\u955c\u50cf\ndocker rmi helloworld:v1.0\n")))),(0,l.kt)("h3",{id:"\u793a\u4f8b-2---\u6784\u5efa\u955c\u50cf\u5e76\u5c06\u5bb9\u5668\u90e8\u7f72\u5230-kubernetes"},"\u793a\u4f8b 2 - \u6784\u5efa\u955c\u50cf\u5e76\u5c06\u5bb9\u5668\u90e8\u7f72\u5230 Kubernetes"),(0,l.kt)("p",null,"\u6839\u636e\u9700\u8981\u5c06 ",(0,l.kt)("strong",{parentName:"p"},"Kubernetes Settings")," \u9762\u677f\u4e2d\u7684 ",(0,l.kt)("strong",{parentName:"p"},"Container Runtime")," \u5207\u6362\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"dockerd")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"containerd"),"\u3002"),(0,l.kt)("h4",{id:"\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6\u5939\u5e76\u6dfb\u52a0\u4e00\u4e2a\u793a\u4f8b-indexhtml-\u6587\u4ef6\u5982\u4e0b\u6240\u793a"},"\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6\u5939\u5e76\u6dfb\u52a0\u4e00\u4e2a\u793a\u4f8b index.html \u6587\u4ef6\uff0c\u5982\u4e0b\u6240\u793a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'mkdir nginx\ncd nginx\necho "<h1>Hello World from NGINX!!</h1>" > index.html\n')),(0,l.kt)("h4",{id:"\u521b\u5efa\u4e00\u4e2a\u7a7a\u767d\u7684-dockerfile-1"},"\u521b\u5efa\u4e00\u4e2a\u7a7a\u767d\u7684 Dockerfile"),(0,l.kt)("p",null,"\u5728 Windows \u4e0a\uff0c\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"Dockerfile")," \u7684\u7a7a\u767d\u6587\u4ef6\u3002"),(0,l.kt)("p",null,"\u5728 Linux \u4e0a\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u521b\u5efa\u4e00\u4e2a\u7a7a\u767d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Dockerfile"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"vi Dockerfile\n")),(0,l.kt)("h4",{id:"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u586b\u5145-dockerfile-1"},"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u586b\u5145 Dockerfile"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"FROM nginx:alpine\nCOPY . /usr/share/nginx/html\n")),(0,l.kt)("h4",{id:"\u4f7f\u7528\u672c\u5730\u4ee3\u7801\u6784\u5efa\u955c\u50cf"},"\u4f7f\u7528\u672c\u5730\u4ee3\u7801\u6784\u5efa\u955c\u50cf"),(0,l.kt)("p",null,"\u26a0\ufe0f ",(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u4f60\u9700\u8981\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"--namespace k8s.io")," \u6807\u5fd7\u4f20\u9012\u7ed9 ",(0,l.kt)("inlineCode",{parentName:"p"},"nerdctl")," build \u547d\u4ee4\uff0c\u4ee5\u4fbf ",(0,l.kt)("inlineCode",{parentName:"p"},"nerdctl")," \u6784\u5efa\u955c\u50cf\u5e76\u4f7f\u5176\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"k8s.io")," \u547d\u540d\u7a7a\u95f4\u4e2d\u53ef\u7528\u3002"),(0,l.kt)(o.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,l.kt)(a.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"nerdctl --namespace k8s.io build --tag nginx-helloworld:latest .\nnerdctl --namespace k8s.io images | grep nginx-helloworld\n"))),(0,l.kt)(a.Z,{value:"docker",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"docker build --tag nginx-helloworld:latest .\ndocker images | grep nginx-helloworld\n")))),(0,l.kt)("h4",{id:"\u90e8\u7f72\u5230-kubernetes"},"\u90e8\u7f72\u5230 Kubernetes"),(0,l.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u4ece\u800c\u4f7f\u7528\u5728\u4e0a\u4e00\u6b65\u4e2d\u6784\u5efa\u7684\u955c\u50cf\u521b\u5efa\u548c\u8fd0\u884c pod\u3002"),(0,l.kt)("p",null,"\u26a0\ufe0f ",(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u4f60\u9700\u8981\u4f20\u9012 ",(0,l.kt)("inlineCode",{parentName:"p"},"--image-pull-policy=Never")," \u6807\u5fd7\u4ee5\u4f7f\u7528\u5e26\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},":latest")," \u6807\u7b7e\u7684\u672c\u5730\u955c\u50cf\uff08",(0,l.kt)("inlineCode",{parentName:"p"},":latest")," \u6807\u7b7e\u5c06\u59cb\u7ec8\u5c1d\u8bd5\u4ece\u8fdc\u7a0b\u4ed3\u5e93\u4e2d\u62c9\u53d6\u955c\u50cf\uff09\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl run hello-world --image=nginx-helloworld:latest --image-pull-policy=Never --port=80\nkubectl port-forward pods/hello-world 8080:80\n")),(0,l.kt)("p",null,"\u5728\u6d4f\u89c8\u5668\u4e2d\u8bbf\u95ee ",(0,l.kt)("inlineCode",{parentName:"p"},"localhost:8080"),"\uff0c\u4f60\u5c06\u770b\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"Hello World from NGINX!!")," \u7684\u4fe1\u606f\u3002\u5982\u679c\u4f60\u60f3\u7559\u5728\u547d\u4ee4\u884c\u4e0a\uff0c\u8bf7\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"curl localhost:8080"),"\u3002"),(0,l.kt)("h4",{id:"\u5220\u9664-pod-\u548c\u955c\u50cf"},"\u5220\u9664 pod \u548c\u955c\u50cf"),(0,l.kt)(o.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,l.kt)(a.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl delete pod hello-world\n# \u79fb\u9664\u955c\u50cf\nnerdctl --namespace k8s.io rmi nginx-helloworld:latest\n"))),(0,l.kt)(a.Z,{value:"docker",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl delete pod hello-world\n# \u79fb\u9664\u955c\u50cf\ndocker rmi nginx-helloworld:latest\n")))))}m.isMDXComponent=!0}}]);