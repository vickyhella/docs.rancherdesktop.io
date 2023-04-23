"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[475],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(n),m=l,h=p["".concat(u,".").concat(m)]||p[m]||s[m]||a;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),l=n(4334),a="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,l.Z)(a,o),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return x}});var r=n(3117),l=n(7294),a=n(4334),o=n(2466),i=n(6775),u=n(1980),d=n(7392),c=n(12);function s(e){return function(e){var t;return(null==(t=l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:l}}=e;return{value:t,label:n,attributes:r,default:l}}))}function p(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??s(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(a),(0,l.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=p(e),[o,i]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[u,d]=h({queryString:n,groupId:r}),[s,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,c.Nk)(n);return[r,(0,l.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),f=(()=>{const e=u??s;return m({value:e,tabValues:a})?e:null})();(0,l.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),k(e)}),[d,k,a]),tabValues:a}}var f=n(2389),b="tabList__CuJ",g="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:i,selectValue:u,tabValues:d}=e;const c=[],{blockElementScrollPositionUntilNextRender:s}=(0,o.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),r=d[n].value;r!==i&&(s(t),u(r))},m=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t)},d.map((e=>{let{value:t,label:n,attributes:o}=e;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},o,{className:(0,a.Z)("tabs__item",g,null==o?void 0:o.className,{"tabs__item--active":i===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=k(e);return l.createElement("div",{className:(0,a.Z)("tabs-container",b)},l.createElement(v,(0,r.Z)({},e,t)),l.createElement(w,(0,r.Z)({},e,t)))}function x(e){const t=(0,f.Z)();return l.createElement(y,(0,r.Z)({key:String(t)},e))}},6850:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return s}});var r=n(3117),l=(n(7294),n(3905)),a=n(4866),o=n(5162);const i={title:"Hello World Example"},u=void 0,d={unversionedId:"how-to-guides/hello-world-example",id:"how-to-guides/hello-world-example",title:"Hello World Example",description:"This tutorial will demonstrate how to get started with Rancher Desktop by pushing an app to a local Kubernetes cluster.",source:"@site/docs/how-to-guides/hello-world-example.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/hello-world-example",permalink:"/next/how-to-guides/hello-world-example",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/how-to-guides/hello-world-example.md",tags:[],version:"current",frontMatter:{title:"Hello World Example"},sidebar:"tutorialSidebar",previous:{title:"Working with Containers",permalink:"/next/tutorials/working-with-containers"},next:{title:"Installing and Uninstalling Rancher Desktop Extensions",permalink:"/next/how-to-guides/installing-uninstalling-extensions"}},c={},s=[{value:"Example#1 - Build Image &amp; Run Container",id:"example1---build-image--run-container",level:3},{value:"Create a folder",id:"create-a-folder",level:4},{value:"Create a blank Dockerfile",id:"create-a-blank-dockerfile",level:4},{value:"Populate the Dockerfile with the command below",id:"populate-the-dockerfile-with-the-command-below",level:4},{value:"Build and run the image for verification purposes",id:"build-and-run-the-image-for-verification-purposes",level:4},{value:"Example#2 - Build Image &amp; Deploy Container to Kubernetes",id:"example2---build-image--deploy-container-to-kubernetes",level:3},{value:"Create a folder and add a sample index.html file as follows",id:"create-a-folder-and-add-a-sample-indexhtml-file-as-follows",level:4},{value:"Create a blank Dockerfile",id:"create-a-blank-dockerfile-1",level:4},{value:"Populate the Dockerfile with the command below",id:"populate-the-dockerfile-with-the-command-below-1",level:4},{value:"Build image from code locally",id:"build-image-from-code-locally",level:4},{value:"Deploy to Kubernetes",id:"deploy-to-kubernetes",level:4},{value:"Delete the pod and the image",id:"delete-the-pod-and-the-image",level:4}],p={toc:s};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This tutorial will demonstrate how to get started with Rancher Desktop by pushing an app to a local Kubernetes cluster."),(0,l.kt)("p",null,"Rancher Desktop works with two container engines, ",(0,l.kt)("a",{parentName:"p",href:"https://containerd.io/"},"containerd")," and ",(0,l.kt)("a",{parentName:"p",href:"https://mobyproject.org/"},"Moby"),", the open-sourced components of the Docker ecosystem. For ",(0,l.kt)("inlineCode",{parentName:"p"},"nerdctl"),", use the ",(0,l.kt)("strong",{parentName:"p"},"containerd")," runtime. For ",(0,l.kt)("inlineCode",{parentName:"p"},"docker"),", use the ",(0,l.kt)("strong",{parentName:"p"},"dockerd(moby)")," runtime."),(0,l.kt)("h3",{id:"example1---build-image--run-container"},"Example#1 - Build Image & Run Container"),(0,l.kt)("h4",{id:"create-a-folder"},"Create a folder"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mkdir hello-world\ncd hello-world\n")),(0,l.kt)("h4",{id:"create-a-blank-dockerfile"},"Create a blank Dockerfile"),(0,l.kt)("p",null,"On Windows, Create a blank file named ",(0,l.kt)("inlineCode",{parentName:"p"},"Dockerfile")),(0,l.kt)("p",null,"On Linux, You can use below command to create a blank ",(0,l.kt)("inlineCode",{parentName:"p"},"Dockerfile")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"vi Dockerfile\n")),(0,l.kt)("h4",{id:"populate-the-dockerfile-with-the-command-below"},"Populate the Dockerfile with the command below"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'FROM alpine  \nCMD ["echo", "Hello World!!"]\n')),(0,l.kt)("h4",{id:"build-and-run-the-image-for-verification-purposes"},"Build and run the image for verification purposes"),(0,l.kt)(a.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"nerdctl build --tag helloworld:v1.0 .\nnerdctl images | grep helloworld\nnerdctl run --rm helloworld:v1.0\n# Remove the image\nnerdctl rmi helloworld:v1.0 \n"))),(0,l.kt)(o.Z,{value:"docker",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"docker build --tag helloworld:v1.0 .\ndocker images | grep helloworld\ndocker run --rm helloworld:v1.0\n# Remove the image\ndocker rmi helloworld:v1.0 \n")))),(0,l.kt)("h3",{id:"example2---build-image--deploy-container-to-kubernetes"},"Example#2 - Build Image & Deploy Container to Kubernetes"),(0,l.kt)("p",null,"Make sure that you switch the ",(0,l.kt)("strong",{parentName:"p"},"Container Runtime")," setting in the ",(0,l.kt)("strong",{parentName:"p"},"Kubernetes Settings")," panel to either ",(0,l.kt)("inlineCode",{parentName:"p"},"dockerd")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"containerd")," as needed."),(0,l.kt)("h4",{id:"create-a-folder-and-add-a-sample-indexhtml-file-as-follows"},"Create a folder and add a sample index.html file as follows"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'mkdir nginx\ncd nginx\necho "<h1>Hello World from NGINX!!</h1>" > index.html\n')),(0,l.kt)("h4",{id:"create-a-blank-dockerfile-1"},"Create a blank Dockerfile"),(0,l.kt)("p",null,"On Windows, Create a blank file named ",(0,l.kt)("inlineCode",{parentName:"p"},"Dockerfile")),(0,l.kt)("p",null,"On Linux, You can use below command to create a blank ",(0,l.kt)("inlineCode",{parentName:"p"},"Dockerfile")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"vi Dockerfile\n")),(0,l.kt)("h4",{id:"populate-the-dockerfile-with-the-command-below-1"},"Populate the Dockerfile with the command below"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"FROM nginx:alpine\nCOPY . /usr/share/nginx/html\n")),(0,l.kt)("h4",{id:"build-image-from-code-locally"},"Build image from code locally"),(0,l.kt)("p",null,"\u26a0\ufe0f ",(0,l.kt)("strong",{parentName:"p"},"Note:")," Please note that you need to pass the flag ",(0,l.kt)("inlineCode",{parentName:"p"},"--namespace k8s.io")," to the ",(0,l.kt)("inlineCode",{parentName:"p"},"nerdctl")," build command, so that ",(0,l.kt)("inlineCode",{parentName:"p"},"nerdctl")," builds the image and then makes it available in the ",(0,l.kt)("inlineCode",{parentName:"p"},"k8s.io")," namespace."),(0,l.kt)(a.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"nerdctl --namespace k8s.io build --tag nginx-helloworld:latest .\nnerdctl --namespace k8s.io images | grep nginx-helloworld\n"))),(0,l.kt)(o.Z,{value:"docker",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"docker build --tag nginx-helloworld:latest .\ndocker images | grep nginx-helloworld\n")))),(0,l.kt)("h4",{id:"deploy-to-kubernetes"},"Deploy to Kubernetes"),(0,l.kt)("p",null,"Run below command to create and run a pod using the image built in the previous step. "),(0,l.kt)("p",null,"\u26a0\ufe0f ",(0,l.kt)("strong",{parentName:"p"},"Note:")," Please note that you need to pass the flag ",(0,l.kt)("inlineCode",{parentName:"p"},"--image-pull-policy=Never")," to use a local image with ",(0,l.kt)("inlineCode",{parentName:"p"},":latest")," tag, as ",(0,l.kt)("inlineCode",{parentName:"p"},":latest")," tag will always try to pull the images from a remote repository."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl run hello-world --image=nginx-helloworld:latest --image-pull-policy=Never --port=80\nkubectl port-forward pods/hello-world 8080:80\n")),(0,l.kt)("p",null,"Point your web browser to ",(0,l.kt)("inlineCode",{parentName:"p"},"localhost:8080"),", and you will see the message ",(0,l.kt)("inlineCode",{parentName:"p"},"Hello World from NGINX!!"),". If you prefer to stay on the command line, use ",(0,l.kt)("inlineCode",{parentName:"p"},"curl localhost:8080"),"."),(0,l.kt)("h4",{id:"delete-the-pod-and-the-image"},"Delete the pod and the image"),(0,l.kt)(a.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl delete pod hello-world\n# Remove the image\nnerdctl --namespace k8s.io rmi nginx-helloworld:latest \n"))),(0,l.kt)(o.Z,{value:"docker",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl delete pod hello-world \n# Remove the image\ndocker rmi nginx-helloworld:latest\n")))))}m.isMDXComponent=!0}}]);