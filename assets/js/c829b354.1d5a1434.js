"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[7857],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(r),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var i=2;i<a;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(7294),o=r(4334),a="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,l),hidden:r},t)}},4866:function(e,t,r){r.d(t,{Z:function(){return w}});var n=r(3117),o=r(7294),a=r(4334),l=r(2466),s=r(6775),u=r(1980),i=r(7392),c=r(12);function p(e){return function(e){var t;return(null==(t=o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:o}}=e;return{value:t,label:r,attributes:n,default:o}}))}function d(e){const{values:t,children:r}=e;return(0,o.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.k6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(a),(0,o.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace({...n.location,search:t.toString()})}),[a,n])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,a=d(e),[l,s]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[u,i]=f({queryString:r,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,a]=(0,c.Nk)(r);return[n,(0,o.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:n}),g=(()=>{const e=u??p;return m({value:e,tabValues:a})?e:null})();(0,o.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),h(e)}),[i,h,a]),tabValues:a}}var g=r(2389),b="tabList__CuJ",v="tabItem_LNqP";function k(e){let{className:t,block:r,selectedValue:s,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),n=i[r].value;n!==s&&(p(t),u(n))},m=e=>{var t;let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1];break}}null==(t=r)||t.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t)},i.map((e=>{let{value:t,label:r,attributes:l}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,a.Z)("tabs__item",v,null==l?void 0:l.className,{"tabs__item--active":s===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:n}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=h(e);return o.createElement("div",{className:(0,a.Z)("tabs-container",b)},o.createElement(k,(0,n.Z)({},e,t)),o.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return o.createElement(N,(0,n.Z)({key:String(t)},e))}},823:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return p}});var n=r(3117),o=(r(7294),r(3905)),a=r(4866),l=r(5162);const s={title:"Setup NGINX Ingress Controller"},u=void 0,i={unversionedId:"how-to-guides/setup-NGINX-Ingress-Controller",id:"version-1.7/how-to-guides/setup-NGINX-Ingress-Controller",title:"Setup NGINX Ingress Controller",description:"Rancher Desktop uses K3s under the hood, which in turn uses Traefik as the default ingress controller for your Kubernetes cluster. However, there are unique use cases where NGINX may be required or preferred. Below steps show how to use NGINX Ingress controller for a sample deployment.",source:"@site/versioned_docs/version-1.7/how-to-guides/setup-NGINX-Ingress-Controller.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/setup-NGINX-Ingress-Controller",permalink:"/1.7/how-to-guides/setup-NGINX-Ingress-Controller",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.7/how-to-guides/setup-NGINX-Ingress-Controller.md",tags:[],version:"1.7",frontMatter:{title:"Setup NGINX Ingress Controller"},sidebar:"tutorialSidebar",previous:{title:"Create a Multi-Node Cluster with k3d",permalink:"/1.7/how-to-guides/create-multi-node-cluster"},next:{title:"Debugging a Container App with VS Code Docker extension",permalink:"/1.7/how-to-guides/vs-code-docker"}},c={},p=[{value:"Steps",id:"steps",level:3}],d={toc:p};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Rancher Desktop uses K3s under the hood, which in turn uses Traefik as the default ingress controller for your Kubernetes cluster. However, there are unique use cases where NGINX may be required or preferred. Below steps show how to use NGINX Ingress controller for a sample deployment."),(0,o.kt)("h3",{id:"steps"},"Steps"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Uncheck ",(0,o.kt)("inlineCode",{parentName:"p"},"Enable Traefik")," from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Kubernetes Settings")," page to disable Traefik. You may need to exit and restart Rancher Desktop for the change to take effect.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Deploy the NGINX ingress controller via ",(0,o.kt)("inlineCode",{parentName:"p"},"helm")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl"),"."))),(0,o.kt)(a.Z,{groupId:"deployment-approach",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"helm",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"helm upgrade --install ingress-nginx ingress-nginx \\\n  --repo https://kubernetes.github.io/ingress-nginx \\\n  --namespace ingress-nginx --create-namespace\n"))),(0,o.kt)(l.Z,{value:"kubectl",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.1.2/deploy/static/provider/cloud/deploy.yaml\n")))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Wait for the ingress pods to come up and running.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl get pods --namespace=ingress-nginx\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Create a sample deployment and the associated service.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl create deployment demo --image=nginx --port=80\nkubectl expose deployment demo\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Create an ingress resource. The following command uses a host that maps to localhost.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'kubectl create ingress demo-localhost --class=nginx --rule="demo.localdev.me/*=demo:80"\n')),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Forward a local port to the ingress controller.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl port-forward --namespace=ingress-nginx service/ingress-nginx-controller 8080:80\n")),(0,o.kt)("p",null,"If you access ",(0,o.kt)("a",{parentName:"p",href:"http://demo.localdev.me:8080/"},"http://demo.localdev.me:8080/"),", you should see NGINX Welcome page."))}m.isMDXComponent=!0}}]);