"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[1602],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(4334),l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return T}});var r=n(3117),a=n(7294),l=n(4334),o=n(2466),i=n(6775),u=n(1980),s=n(7392),c=n(12);function p(e){return function(e){var t;return(null==(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=d(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,s]=k({queryString:n,groupId:r}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),g=(()=>{const e=u??p;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),f(e)}),[s,f,l]),tabValues:l}}var g=n(2389),h="tabList__CuJ",v="tabItem_LNqP";function b(e){let{className:t,block:n,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==i&&(p(t),u(r))},m=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",v,null==o?void 0:o.className,{"tabs__item--active":i===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function N(e){const t=f(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",h)},a.createElement(b,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function T(e){const t=(0,g.Z)();return a.createElement(N,(0,r.Z)({key:String(t)},e))}},57:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var r=n(3117),a=(n(7294),n(3905)),l=n(4866),o=n(5162);const i={title:"\u4f20\u8f93\u5bb9\u5668\u955c\u50cf"},u=void 0,s={unversionedId:"how-to-guides/transfer-container-images",id:"version-1.9-tech-preview/how-to-guides/transfer-container-images",title:"\u4f20\u8f93\u5bb9\u5668\u955c\u50cf",description:"Rancher Desktop \u63d0\u4f9b dockerd \u548c containerd \u5bb9\u5668\u5f15\u64ce\u9009\u9879\u6765\u7ba1\u7406\u5bb9\u5668\u3002\u6709\u65f6\u5019\uff0c\u4f60\u53ef\u80fd\u5e0c\u671b\u5c06\u955c\u50cf\u4ece\u4e00\u4e2a\u5bb9\u5668\u5f15\u64ce\u73af\u5883\u4f20\u8f93\u5230\u53e6\u4e00\u4e2a\u5bb9\u5668\u5f15\u64ce\u73af\u5883\u3002\u4f60\u4e5f\u53ef\u80fd\u5df2\u7ecf\u4ece\u4e0d\u540c\u7684\u5bb9\u5668\u7ba1\u7406\u5e94\u7528\u7a0b\u5e8f\u8fc1\u79fb\u5230 Rancher Desktop\uff0c\u5e76\u4e14\u5e0c\u671b\u5c06\u672c\u5730\u955c\u50cf\u4ece\u4ee5\u524d\u7684\u5e94\u7528\u7a0b\u5e8f\u73af\u5883\u5e26\u5230 Rancher Desktop \u73af\u5883\u4e2d\u3002\u672c\u6307\u5357\u4ecb\u7ecd\u4e86\u4f7f\u7528 save \u548c load \u547d\u4ee4\u4f20\u8f93\u955c\u50cf\u7684\u6b65\u9aa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.9-tech-preview/how-to-guides/transfer-container-images.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/transfer-container-images",permalink:"/zh/1.9-tech-preview/how-to-guides/transfer-container-images",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.9-tech-preview/how-to-guides/transfer-container-images.md",tags:[],version:"1.9-tech-preview",frontMatter:{title:"\u4f20\u8f93\u5bb9\u5668\u955c\u50cf"},sidebar:"tutorialSidebar",previous:{title:"Installing and Uninstalling Rancher Desktop Extensions",permalink:"/zh/1.9-tech-preview/how-to-guides/installing-uninstalling-extensions"},next:{title:"\u4f7f\u7528 k3d \u521b\u5efa\u591a\u8282\u70b9\u96c6\u7fa4",permalink:"/zh/1.9-tech-preview/how-to-guides/create-multi-node-cluster"}},c={},p=[{value:"\u6b65\u9aa4",id:"\u6b65\u9aa4",level:3}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Rancher Desktop \u63d0\u4f9b ",(0,a.kt)("inlineCode",{parentName:"p"},"dockerd")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"containerd")," \u5bb9\u5668\u5f15\u64ce\u9009\u9879\u6765\u7ba1\u7406\u5bb9\u5668\u3002\u6709\u65f6\u5019\uff0c\u4f60\u53ef\u80fd\u5e0c\u671b\u5c06\u955c\u50cf\u4ece\u4e00\u4e2a\u5bb9\u5668\u5f15\u64ce\u73af\u5883\u4f20\u8f93\u5230\u53e6\u4e00\u4e2a\u5bb9\u5668\u5f15\u64ce\u73af\u5883\u3002\u4f60\u4e5f\u53ef\u80fd\u5df2\u7ecf\u4ece\u4e0d\u540c\u7684\u5bb9\u5668\u7ba1\u7406\u5e94\u7528\u7a0b\u5e8f\u8fc1\u79fb\u5230 Rancher Desktop\uff0c\u5e76\u4e14\u5e0c\u671b\u5c06\u672c\u5730\u955c\u50cf\u4ece\u4ee5\u524d\u7684\u5e94\u7528\u7a0b\u5e8f\u73af\u5883\u5e26\u5230 Rancher Desktop \u73af\u5883\u4e2d\u3002\u672c\u6307\u5357\u4ecb\u7ecd\u4e86\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"save")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"load")," \u547d\u4ee4\u4f20\u8f93\u955c\u50cf\u7684\u6b65\u9aa4\u3002"),(0,a.kt)("h3",{id:"\u6b65\u9aa4"},"\u6b65\u9aa4"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1. \u5c06\u6e90\u73af\u5883\u7684\u955c\u50cf\u4fdd\u5b58\u4e3a tar \u5305"),"\u3002"),(0,a.kt)(l.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4fdd\u5b58\u5355\u4e2a\u955c\u50cf")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nerdctl save -o local-image.tar image:tag\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4fdd\u5b58\u591a\u4e2a\u955c\u50cf")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nerdctl save -o local-images.tar image1:tag1 image2:tag2\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c06\u6240\u6709\u955c\u50cf\u4fdd\u5b58\u5728\u547d\u540d\u7a7a\u95f4\u4e2d")),(0,a.kt)("p",null,"\u4e0b\u9762\u4e24\u4e2a\u547d\u4ee4\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},"jq")," \u8fdb\u884c JSON \u89e3\u6790\u3002\u957f\u547d\u4ee4\u4f1a\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nerdctl -n k8s.io image ls")," \u5b50\u547d\u4ee4\u4f1a\u83b7\u53d6 ",(0,a.kt)("inlineCode",{parentName:"li"},"k8s.io")," \u547d\u540d\u7a7a\u95f4\u4e2d\u6240\u6709\u955c\u50cf\u7684\u5217\u8868\uff0c\u56e0\u6b64\u4e0d\u5305\u62ec\u5176\u4ed6\u547d\u540d\u7a7a\u95f4\u7684\u955c\u50cf\uff08\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"li"},"default"),"\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"jq")," \u5b50\u547d\u4ee4\u4f1a\u8fc7\u6ee4\u5e76\u683c\u5f0f\u5316\u4e0a\u4e00\u6b65\u83b7\u53d6\u7684\u955c\u50cf\u5217\u8868\u3002",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u547d\u4ee4\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},'select(.Repository!=\\"<none>\\")')," \u90e8\u5206\u4f1a\u8df3\u8fc7\u4ed3\u5e93\u503c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"<none>")," \u7684\u955c\u50cf\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6839\u636e\u955c\u50cf\u6807\u7b7e\u7684\u503c\u662f\u5426\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"<none>"),"\uff0c\u547d\u4ee4\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},'if (.Tag=="<none>") then .Repository else (.Repository+":"+.Tag) end\')')," \u90e8\u5206\u4f1a\u5c06\u955c\u50cf\u7684\u540d\u79f0\u683c\u5f0f\u5316\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"<Repository>")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"li"},"<Repository>:<Tag>"),"\u3002"))),(0,a.kt)("li",{parentName:"ul"},"\u6700\u540e\uff0c\u547d\u4ee4\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"nerdctl -n k8s.io save -o all-local-images-in-namespace.tar")," \u90e8\u5206\u4f1a\u5c06\u524d\u4e24\u6b65\u8fc7\u6ee4\u548c\u683c\u5f0f\u5316\u7684\u955c\u50cf\u5217\u8868\u4fdd\u5b58\u5230 tar \u6587\u4ef6\u4e2d\u3002")),(0,a.kt)(l.Z,{groupId:"shell",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Bash",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'nerdctl -n k8s.io save -o all-local-images-in-namespace.tar $(nerdctl -n k8s.io image ls --format \'{{json .}}\' | jq -r \'select(.Repository!="<none>") | if (.Tag=="<none>") then .Repository else (.Repository+":"+.Tag) end\')\n'))),(0,a.kt)(o.Z,{value:"PowerShell",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'nerdctl -n k8s.io save -o all-local-images-in-namespace.tar $(nerdctl -n k8s.io image ls --format \'{{json .}}\' | jq -r \'select(.Repository!=\\"<none>\\") | if (.Tag==\\"<none>\\") then .Repository else (.Repository+\\":\\"+.Tag) end\')\n'))))),(0,a.kt)(o.Z,{value:"docker",mdxType:"TabItem"},(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4fdd\u5b58\u5355\u4e2a\u955c\u50cf")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker save -o local-image.tar image:tag\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4fdd\u5b58\u591a\u4e2a\u955c\u50cf")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker save -o local-images.tar image1:tag1 image2:tag2\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4fdd\u5b58\u6240\u6709\u672c\u5730\u955c\u50cf")),(0,a.kt)("p",null,"\u4e0b\u9762\u4e24\u4e2a\u547d\u4ee4\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},"jq")," \u8fdb\u884c JSON \u89e3\u6790\u3002\u957f\u547d\u4ee4\u4f1a\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"docker image ls")," \u5b50\u547d\u4ee4\u4f1a\u83b7\u53d6\u6240\u6709\u672c\u5730\u955c\u50cf\u7684\u5217\u8868\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"jq")," \u5b50\u547d\u4ee4\u4f1a\u8fc7\u6ee4\u5e76\u683c\u5f0f\u5316\u4e0a\u4e00\u6b65\u83b7\u53d6\u7684\u955c\u50cf\u5217\u8868\u3002",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u547d\u4ee4\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},'select(.Repository!=\\"<none>\\")')," \u90e8\u5206\u4f1a\u8df3\u8fc7\u4ed3\u5e93\u503c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"<none>")," \u7684\u955c\u50cf\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6839\u636e\u955c\u50cf\u6807\u7b7e\u7684\u503c\u662f\u5426\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"<none>"),"\uff0c\u547d\u4ee4\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},'if (.Tag=="<none>") then .Repository else (.Repository+":"+.Tag) end\')')," \u90e8\u5206\u4f1a\u5c06\u955c\u50cf\u7684\u540d\u79f0\u683c\u5f0f\u5316\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"<Repository>")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"li"},"<Repository>:<Tag>"),"\u3002"))),(0,a.kt)("li",{parentName:"ul"},"\u6700\u540e\uff0c\u547d\u4ee4\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"docker save -o all-local-images-in-namespace.tar")," \u90e8\u5206\u4f1a\u5c06\u524d\u4e24\u6b65\u8fc7\u6ee4\u548c\u683c\u5f0f\u5316\u7684\u955c\u50cf\u5217\u8868\u4fdd\u5b58\u5230 tar \u6587\u4ef6\u4e2d\u3002")),(0,a.kt)(l.Z,{groupId:"shell",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Bash",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'docker save -o all-local-images-in-namespace.tar $(docker image ls --format \'{{json .}}\' | jq -r \'select(.Repository!="<none>") | if (.Tag=="<none>") then .Repository else (.Repository+":"+.Tag) end\')\n'))),(0,a.kt)(o.Z,{value:"PowerShell",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'docker save -o all-local-images-in-namespace.tar $(docker image ls --format \'{{json .}}\' | jq -r \'select(.Repository!=\\"<none>\\") | if (.Tag==\\"<none>\\") then .Repository else (.Repository+\\":\\"+.Tag) end\')\n')))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2. \u4f7f\u7528\u76ee\u6807\u73af\u5883\u4e2d\u4fdd\u5b58\u7684 tar \u5305\u52a0\u8f7d\u955c\u50cf"),"\u3002"),(0,a.kt)(l.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nerdctl load < local-images.tar\n"))),(0,a.kt)(o.Z,{value:"docker",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker load < local-images.tar\n")))))}m.isMDXComponent=!0}}]);