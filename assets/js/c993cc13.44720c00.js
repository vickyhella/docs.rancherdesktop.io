"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[6616],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),a=n(4334),o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return T}});var r=n(3117),a=n(7294),o=n(4334),i=n(2466),l=n(6775),u=n(1980),c=n(7392),s=n(12);function p(e){return function(e){var t;return(null==(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,c]=f({queryString:n,groupId:r}),[p,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,s.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),b=(()=>{const e=u??p;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),k(e)}),[c,k,o]),tabValues:o}}var b=n(2389),h="tabList__CuJ",g="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:l,selectValue:u,tabValues:c}=e;const s=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=s.indexOf(t),r=c[n].value;r!==l&&(p(t),u(r))},m=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>s.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",g,null==i?void 0:i.className,{"tabs__item--active":l===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=k(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",h)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function T(e){const t=(0,b.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},872:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(3117),a=(n(7294),n(3905)),o=n(4866),i=n(5162);const l={title:"Working with Containers"},u=void 0,c={unversionedId:"tutorials/working-with-containers",id:"version-1.7/tutorials/working-with-containers",title:"Working with Containers",description:"nerdctl is a Docker-compatible CLI for containerd. The primary goal of nerdctl is to facilitate experimenting with cutting-edge features of containerd that are not present in Docker.",source:"@site/versioned_docs/version-1.7/tutorials/working-with-containers.md",sourceDirName:"tutorials",slug:"/tutorials/working-with-containers",permalink:"/1.7/tutorials/working-with-containers",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.7/tutorials/working-with-containers.md",tags:[],version:"1.7",frontMatter:{title:"Working with Containers"},sidebar:"tutorialSidebar",previous:{title:"Working with Images",permalink:"/1.7/tutorials/working-with-images"},next:{title:"Hello World Example",permalink:"/1.7/how-to-guides/hello-world-example"}},s={},p=[{value:"Running Containers",id:"running-containers",level:2},{value:"Docker Compose",id:"docker-compose",level:2},{value:"Exposing a Port",id:"exposing-a-port",level:2},{value:"Targeting a Kubernetes Namespace",id:"targeting-a-kubernetes-namespace",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"nerdctl")," is a Docker-compatible CLI for containerd. The primary goal of ",(0,a.kt)("inlineCode",{parentName:"p"},"nerdctl")," is to facilitate experimenting with cutting-edge features of containerd that are not present in Docker."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/moby/moby"},"Moby")," is an open-source project that was created by Docker to enable and accelerate software containerization. Components include container build tools, a container registry, orchestration tools, and a runtime, and more. The Docker CLI uses the Moby runtime. "),(0,a.kt)("h2",{id:"running-containers"},"Running Containers"),(0,a.kt)("p",null,"To run a container with the default ",(0,a.kt)("inlineCode",{parentName:"p"},"bridge")," CNI network (10.4.0.0/24):"),(0,a.kt)(o.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nerdctl run -it --rm alpine\n"))),(0,a.kt)(i.Z,{value:"docker",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -it --rm alpine\n")))),(0,a.kt)("p",null,"To build an image using BuildKit:"),(0,a.kt)(o.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nerdctl build -t foo /some-dockerfile-directory\nnerdctl run -it --rm foo\n"))),(0,a.kt)(i.Z,{value:"docker",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker build -t foo /some-dockerfile-directory\ndocker run -it --rm foo\n")))),(0,a.kt)("p",null,"To build and send output to a local directory using BuiltKit:"),(0,a.kt)(o.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nerdctl build -o type=local,dest=. /some-dockerfile-directory\n"))),(0,a.kt)(i.Z,{value:"docker",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker build -o type=local,dest=. /some-dockerfile-directory\n")))),(0,a.kt)("h2",{id:"docker-compose"},"Docker Compose"),(0,a.kt)("p",null,"Docker Compose is a tool for defining and running multi-container Docker applications. "),(0,a.kt)(o.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"nerdctl-compose")," CLI is designed to be compatible with ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nerdctl compose up -d\nnerdctl compose down\n"))),(0,a.kt)(i.Z,{value:"docker",mdxType:"TabItem"},(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"compose")," command in the Docker CLI supports most of the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose")," commands and flags. It is expected to be a drop-in replacement for ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker compose up -d\ndocker compose down\n")))),(0,a.kt)("h2",{id:"exposing-a-port"},"Exposing a Port"),(0,a.kt)("p",null,"To expose port 8000 for a container:"),(0,a.kt)(o.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nerdctl run -d -p 8000:80 nginx\n"))),(0,a.kt)(i.Z,{value:"docker",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -d -p 8000:80 nginx\n")))),(0,a.kt)("p",null,"You can then access the container via the browser here: ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8000/"},"http://localhost:8000/"),"."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note: By default the exposed ports are accessible on all network interfaces on macOS and Linux. However, on Windows, the exposed ports are currently only accessible through the localhost network interface (see issue ",(0,a.kt)("a",{parentName:"em",href:"https://github.com/rancher-sandbox/rancher-desktop/issues/1180"},"#1180"),").  As a workaround, you can ",(0,a.kt)("a",{parentName:"em",href:"https://github.com/rancher-sandbox/rancher-desktop/issues/1180#issuecomment-1005514200"},"configure a ",(0,a.kt)("inlineCode",{parentName:"a"},"portproxy")," on the windows host")," to expose the port to additional network interfaces.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"netsh interface portproxy add v4tov4 listenport=8080 listenaddress=0.0.0.0 connectport=8080 connectaddress=localhost\n")),(0,a.kt)("h2",{id:"targeting-a-kubernetes-namespace"},"Targeting a Kubernetes Namespace"),(0,a.kt)("p",null,"You may also target a Kubernetes namespace with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--namespace")," parameter with ",(0,a.kt)("inlineCode",{parentName:"p"},"containerd"),". Please note that ",(0,a.kt)("inlineCode",{parentName:"p"},"docker")," doesn't use namespaces."),(0,a.kt)(o.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nerdctl --namespace k8s.io build -t demo:latest /code/demos/rd/anvil-app\nnerdctl --namespace k8s.io ps\n")))))}m.isMDXComponent=!0}}]);