"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[7398],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return b}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||l;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3687:function(e,t,n){var a=n(412);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),o=r?"ios":"android",u=r?"macOS":l?"Windows":"Linux";t.Z={defaultGuide:"quickstart",defaultOs:u,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(4334),l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return O}});var a=n(3117),r=n(7294),l=n(4334),o=n(2466),u=n(6775),i=n(1980),s=n(7392),c=n(12);function d(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function b(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=p(e),[o,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[i,s]=m({queryString:n,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),v=(()=>{const e=i??d;return b({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{v&&u(v)}),[v]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!b({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),f(e)}),[s,f,l]),tabValues:l}}var v=n(2389),g="tabList__CuJ",h="tabItem_LNqP";function k(e){let{className:t,block:n,selectedValue:u,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==u&&(d(t),i(a))},b=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:b,onClick:p},o,{className:(0,l.Z)("tabs__item",h,null==o?void 0:o.className,{"tabs__item--active":u===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function O(e){const t=(0,v.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},5612:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var a=n(3117),r=(n(7294),n(3905)),l=n(4866),o=n(5162),u=n(3687);const i={sidebar_label:"\u6545\u969c\u6392\u9664",title:"\u6545\u969c\u6392\u9664"},s=void 0,c={unversionedId:"ui/troubleshooting",id:"version-latest/ui/troubleshooting",title:"\u6545\u969c\u6392\u9664",description:"Show Logs",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-latest/ui/troubleshooting.md",sourceDirName:"ui",slug:"/ui/troubleshooting",permalink:"/zh/ui/troubleshooting",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-latest/ui/troubleshooting.md",tags:[],version:"latest",frontMatter:{sidebar_label:"\u6545\u969c\u6392\u9664",title:"\u6545\u969c\u6392\u9664"},sidebar:"tutorialSidebar",previous:{title:"\u955c\u50cf",permalink:"/zh/ui/images"},next:{title:"\u8bca\u65ad",permalink:"/zh/ui/diagnostics"}},d={},p=[{value:"Show Logs",id:"show-logs",level:3},{value:"Enable Debug Mode",id:"enable-debug-mode",level:4},{value:"Reset Kubernetes",id:"reset-kubernetes",level:3},{value:"Factory Reset",id:"factory-reset",level:3}],b={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{groupId:"os",defaultValue:u.Z.defaultOs,mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Windows",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.7/ui-main/Windows_Troubleshooting.png",alt:null}))),(0,r.kt)(o.Z,{value:"macOS",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.7/ui-main/macOS_Troubleshooting.png",alt:null}))),(0,r.kt)(o.Z,{value:"Linux",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.7/ui-main/Linux_Troubleshooting.png",alt:null})))),(0,r.kt)("h3",{id:"show-logs"},"Show Logs"),(0,r.kt)("p",null,"\u4f7f\u7528\u6b64\u9009\u9879\u6253\u5f00\u5305\u542b\u6240\u6709 Rancher Desktop \u65e5\u5fd7\u6587\u4ef6\u7684\u6587\u4ef6\u5939\u3002"),(0,r.kt)("h4",{id:"enable-debug-mode"},"Enable Debug Mode"),(0,r.kt)("p",null,"\u542f\u7528 debug \u7ea7\u522b\u65e5\u5fd7\u8bb0\u5f55\u3002"),(0,r.kt)("h3",{id:"reset-kubernetes"},"Reset Kubernetes"),(0,r.kt)("p",null,"\u91cd\u7f6e Kubernetes \u5e76\u5220\u9664\u6240\u6709\u5de5\u4f5c\u8d1f\u8f7d\u548c\u914d\u7f6e\u3002\u5728\u91cd\u7f6e\u4e4b\u524d\uff0c\u7528\u6237\u4f1a\u770b\u5230\u786e\u8ba4\u4fe1\u606f\u4ee5\u53ca\u5220\u9664\u5bb9\u5668\u955c\u50cf\u7684\u9009\u9879\u3002"),(0,r.kt)("p",null,"\u8981\u91cd\u7f6e Kubernetes\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Reset Kubernetes"),"\uff0c\u7136\u540e\uff0c\u4f60\u4f1a\u770b\u5230\u4e00\u4e2a\u786e\u8ba4\u7a97\u53e3\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u53ef\u9009\uff1a\u9009\u62e9\u662f\u5426\u540c\u65f6\u5220\u9664\u5bb9\u5668\u955c\u50cf\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Reset"),"\u3002Kubernetes \u4f1a\u505c\u6b62\u5e76\u91cd\u65b0\u542f\u52a8\u3002")),(0,r.kt)("h3",{id:"factory-reset"},"Factory Reset"),(0,r.kt)("p",null,"\u5220\u9664\u96c6\u7fa4\u548c\u6240\u6709\u5176\u4ed6 Rancher Desktop \u8bbe\u7f6e\u3002\u5fc5\u987b\u518d\u6b21\u6267\u884c\u521d\u59cb\u8bbe\u7f6e\u6d41\u7a0b\u3002"),(0,r.kt)("p",null,"\u8981\u6062\u590d\u51fa\u5382\u8bbe\u7f6e\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Reset"),"\u3002\u7136\u540e\uff0c\u4f60\u4f1a\u770b\u5230\u4e00\u4e2a\u786e\u8ba4\u7a97\u53e3\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u53ef\u9009\uff1a\u9009\u62e9\u662f\u5426\u4fdd\u7559\u7f13\u5b58\u7684 Kubernetes \u955c\u50cf\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Factory Reset"),"\u3002Kubernetes \u4f1a\u505c\u6b62\uff0cRancher Desktop \u4f1a\u5173\u95ed\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u53ef\u9009\uff1a\u518d\u6b21\u542f\u52a8 Rancher Desktop\u3002")))}m.isMDXComponent=!0}}]);