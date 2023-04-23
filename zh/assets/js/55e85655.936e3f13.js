"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[9239],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return b}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),b=a,f=d["".concat(i,".").concat(b)]||d[b]||p[b]||l;return n?r.createElement(f,u(u({ref:t},c),{},{components:n})):r.createElement(f,u({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,u=new Array(l);u[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,u[1]=o;for(var s=2;s<l;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3687:function(e,t,n){var r=n(412);const a=!!r.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!r.Z.canUseDOM&&navigator.platform.startsWith("Win"),u=a?"ios":"android",o=a?"macOS":l?"Windows":"Linux";t.Z={defaultGuide:"quickstart",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:u,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},5162:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7294),a=n(4334),l="tabItem_Ymn6";function u(e){let{children:t,hidden:n,className:u}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,u),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return O}});var r=n(3117),a=n(7294),l=n(4334),u=n(2466),o=n(6775),i=n(1980),s=n(7392),c=n(12);function p(e){return function(e){var t;return(null==(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function b(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=d(e),[u,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[i,s]=f({queryString:n,groupId:r}),[p,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),v=(()=>{const e=i??p;return b({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{v&&o(v)}),[v]);return{selectedValue:u,selectValue:(0,a.useCallback)((e=>{if(!b({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),m(e)}),[s,m,l]),tabValues:l}}var v=n(2389),k="tabList__CuJ",g="tabItem_LNqP";function h(e){let{className:t,block:n,selectedValue:o,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,u.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==o&&(p(t),i(r))},b=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:u}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:b,onClick:d},u,{className:(0,l.Z)("tabs__item",g,null==u?void 0:u.className,{"tabs__item--active":o===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=m(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",k)},a.createElement(h,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function O(e){const t=(0,v.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},4731:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var r=n(3117),a=(n(7294),n(3905)),l=n(4866),u=n(5162),o=n(3687);const i={sidebar_label:"Kubernetes",title:"Kubernetes"},s=void 0,c={unversionedId:"ui/preferences/kubernetes",id:"version-latest/ui/preferences/kubernetes",title:"Kubernetes",description:"Enable Kubernetes",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-latest/ui/preferences/kubernetes.md",sourceDirName:"ui/preferences",slug:"/ui/preferences/kubernetes",permalink:"/zh/ui/preferences/kubernetes",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-latest/ui/preferences/kubernetes.md",tags:[],version:"latest",frontMatter:{sidebar_label:"Kubernetes",title:"Kubernetes"},sidebar:"tutorialSidebar",previous:{title:"\u5bb9\u5668\u5f15\u64ce",permalink:"/zh/ui/preferences/container-engine"},next:{title:"\u4f7f\u7528\u955c\u50cf",permalink:"/zh/tutorials/working-with-images"}},p={},d=[{value:"Enable Kubernetes",id:"enable-kubernetes",level:4},{value:"Kubernetes Version",id:"kubernetes-version",level:4},{value:"Kubernetes Port",id:"kubernetes-port",level:4},{value:"Enable Traefik",id:"enable-traefik",level:4}],b={toc:d};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{groupId:"os",defaultValue:o.Z.defaultOs,mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"Windows",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.7/preferences/Windows_kubernetes.png",alt:null}))),(0,a.kt)(u.Z,{value:"macOS",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.7/preferences/macOS_kubernetes.png",alt:null}))),(0,a.kt)(u.Z,{value:"Linux",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.7/preferences/Linux_kubernetes.png",alt:null})))),(0,a.kt)("h4",{id:"enable-kubernetes"},"Enable Kubernetes"),(0,a.kt)("p",null,"\u6b64\u9009\u9879\u5141\u8bb8\u4f60\u542f\u7528\u6216\u7981\u7528 Kubernetes\u3002\u7981\u7528 Kubernetes \u540e\uff0c\u4f60\u53ef\u4ee5\u53ea\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"containerd")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"dockerd")," \u6765\u51cf\u5c11\u8d44\u6e90\u6d88\u8017\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cKubernetes \u662f\u542f\u7528\u7684\u3002"),(0,a.kt)("p",null,"\u8981\u542f\u7528/\u7981\u7528 Kubernetes\uff0c\u53ea\u9700\u9009\u4e2d/\u53d6\u6d88\u9009\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"Enable Kubernetes")," \u590d\u9009\u6846\u3002\u542f\u7528/\u7981\u7528 Kubernetes \u65f6\uff0c\u8be5\u5e94\u7528\u7a0b\u5e8f\u5c06\u91cd\u65b0\u542f\u52a8\u3002\u7981\u7528 Kubernetes \u4e0d\u4f1a\u5220\u9664\u73b0\u6709\u8d44\u6e90\uff0c\u91cd\u65b0\u542f\u7528 Kubernetes \u65f6\uff0c\u4f60\u53ef\u4ee5\u518d\u6b21\u4f7f\u7528\u8fd9\u4e9b\u8d44\u6e90\u3002"),(0,a.kt)("h4",{id:"kubernetes-version"},"Kubernetes Version"),(0,a.kt)("p",null,"\u8be5\u9009\u9879\u663e\u793a\u4e86 Rancher Desktop \u5b9e\u4f8b\u53ef\u4ee5\u4f7f\u7528\u7684 Kubernetes \u7248\u672c\u5217\u8868\u3002"),(0,a.kt)("p",null,"\u5347\u7ea7\u65f6\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f1a\u8fdb\u884c\u68c0\u67e5\uff0c\u770b\u76ee\u6807 Kubernetes \u7248\u672c\u662f\u5426\u53ef\u4ee5\u5728\u672c\u5730\u4f7f\u7528\u3002\u5982\u679c\u6ca1\u6709\uff0c\u5b83\u4f1a\u4e0b\u8f7d\u5bf9\u5e94\u6587\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4fdd\u7559\u5de5\u4f5c\u8d1f\u8f7d\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4fdd\u7559\u955c\u50cf\u3002")),(0,a.kt)("p",null,"\u964d\u7ea7\u65f6\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u79fb\u9664\u5de5\u4f5c\u8d1f\u8f7d\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4fdd\u7559\u955c\u50cf\u3002")),(0,a.kt)("p",null,"\u8981\u5207\u6362\u7248\u672c\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Kubernetes version")," \u4e0b\u62c9\u83dc\u5355\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9\u8981\u8f6c\u6362\u7684\u7248\u672c\u3002")),(0,a.kt)("h4",{id:"kubernetes-port"},"Kubernetes Port"),(0,a.kt)("p",null,"\u8bbe\u7f6e Kubernetes \u66b4\u9732\u7684\u7aef\u53e3\u3002\u5982\u679c\u6709\u591a\u4e2a K3s \u5b9e\u4f8b\u6b63\u5728\u8fd0\u884c\uff0c\u4f7f\u7528\u6b64\u8bbe\u7f6e\u53ef\u4ee5\u907f\u514d\u7aef\u53e3\u51b2\u7a81\u3002"),(0,a.kt)("h4",{id:"enable-traefik"},"Enable Traefik"),(0,a.kt)("p",null,"\u6b64\u9009\u9879\u5141\u8bb8\u4f60\u542f\u7528\u6216\u7981\u7528 Traefik\u3002\u7981\u7528 Traefik \u540e\uff0c\u4f60\u53ef\u4ee5\u91ca\u653e\u7aef\u53e3 80 \u548c 443\uff0c\u4ee5\u4fbf\u5c06\u5176\u7528\u4e8e\u5907\u7528 ingress \u914d\u7f6e\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cTraefik \u662f\u542f\u7528\u7684\u3002"),(0,a.kt)("p",null,"\u7981\u7528 Traefik \u4e0d\u4f1a\u5220\u9664\u73b0\u6709\u8d44\u6e90\u3002"))}f.isMDXComponent=!0}}]);