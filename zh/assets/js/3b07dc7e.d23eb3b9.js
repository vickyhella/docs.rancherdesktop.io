"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[5296],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return A}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),A=r,u=m["".concat(s,".").concat(A)]||m[A]||d[A]||i;return n?o.createElement(u,a(a({ref:t},l),{},{components:n})):o.createElement(u,a({ref:t},l))}));function A(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6557:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var o=n(3117),r=(n(7294),n(3905));const i={title:"VS Code Remote Containers"},a=void 0,c={unversionedId:"how-to-guides/vs-code-remote-containers",id:"version-1.9-tech-preview/how-to-guides/vs-code-remote-containers",title:"VS Code Remote Containers",description:"[Visual Studio Code Remote - Containers] \u6269\u5c55\u652f\u6301\u5c06 Docker \u5bb9\u5668\u7528\u4f5c\u529f\u80fd\u9f50\u5168\u7684\u5f00\u53d1\u73af\u5883\uff0c\u8fd9\u6709\u52a9\u4e8e\u786e\u4fdd\u5f00\u53d1\u4eba\u5458\u4e3b\u673a\u7684\u73af\u5883\u4e00\u81f4\uff0c\u5e76\u4f7f\u65b0\u7684\u56e2\u961f\u6210\u5458\u548c\u8d21\u732e\u8005\u53ef\u4ee5\u8f7b\u677e\u542f\u52a8\u5de5\u4f5c\u3002\u7531\u4e8e Rancher Desktop \u901a\u8fc7 [Moby] \u6765\u652f\u6301 Docker CLI\uff0c\u56e0\u6b64\u4f60\u53ef\u4ee5\u4f7f\u7528\u5f00\u7bb1\u5373\u7528\u7684 VS Code Remote - Containers \u6269\u5c55\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.9-tech-preview/how-to-guides/vs-code-remote-containers.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/vs-code-remote-containers",permalink:"/zh/1.9-tech-preview/how-to-guides/vs-code-remote-containers",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.9-tech-preview/how-to-guides/vs-code-remote-containers.md",tags:[],version:"1.9-tech-preview",frontMatter:{title:"VS Code Remote Containers"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528 VS Code Docker \u6269\u5c55\u6765\u8c03\u8bd5\u5bb9\u5668\u5e94\u7528\u7a0b\u5e8f",permalink:"/zh/1.9-tech-preview/how-to-guides/vs-code-docker"},next:{title:"Rancher Desktop \u4e0a\u7684 Rancher",permalink:"/zh/1.9-tech-preview/how-to-guides/rancher-on-rancher-desktop"}},s={},p=[{value:"\u4f7f\u7528\u793a\u4f8b\u5f00\u53d1\u5bb9\u5668\u7684\u6b65\u9aa4",id:"\u4f7f\u7528\u793a\u4f8b\u5f00\u53d1\u5bb9\u5668\u7684\u6b65\u9aa4",level:3},{value:"\u540e\u7eed\u6b65\u9aa4",id:"\u540e\u7eed\u6b65\u9aa4",level:3}],l={toc:p};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers"},"Visual Studio Code Remote - Containers")," \u6269\u5c55\u652f\u6301\u5c06 Docker \u5bb9\u5668\u7528\u4f5c\u529f\u80fd\u9f50\u5168\u7684\u5f00\u53d1\u73af\u5883\uff0c\u8fd9\u6709\u52a9\u4e8e\u786e\u4fdd\u5f00\u53d1\u4eba\u5458\u4e3b\u673a\u7684\u73af\u5883\u4e00\u81f4\uff0c\u5e76\u4f7f\u65b0\u7684\u56e2\u961f\u6210\u5458\u548c\u8d21\u732e\u8005\u53ef\u4ee5\u8f7b\u677e\u542f\u52a8\u5de5\u4f5c\u3002\u7531\u4e8e Rancher Desktop \u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"https://mobyproject.org/"},"Moby")," \u6765\u652f\u6301 Docker CLI\uff0c\u56e0\u6b64\u4f60\u53ef\u4ee5\u4f7f\u7528\u5f00\u7bb1\u5373\u7528\u7684 VS Code Remote - Containers \u6269\u5c55\u3002"),(0,r.kt)("h3",{id:"\u4f7f\u7528\u793a\u4f8b\u5f00\u53d1\u5bb9\u5668\u7684\u6b65\u9aa4"},"\u4f7f\u7528\u793a\u4f8b\u5f00\u53d1\u5bb9\u5668\u7684\u6b65\u9aa4"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5b89\u88c5\u5e76\u542f\u52a8 Rancher Desktop\u3002\u4ece ",(0,r.kt)("inlineCode",{parentName:"li"},"Kubernetes Settings")," \u83dc\u5355\u4e2d\uff0c\u5c06 ",(0,r.kt)("strong",{parentName:"li"},"Container Runtime")," \u9009\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"dockerd (moby)"),"\uff1a")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1718).Z,width:"1155",height:"743"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u5b89\u88c5\u5e76\u542f\u52a8 Visual Studio Code \u6216 Visual Studio Code Insiders\u3002\u672c\u6559\u7a0b\u4f7f\u7528 Visual Studio Code\uff1a")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2332).Z,width:"1158",height:"741"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u5b89\u88c5 Remote Development \u6269\u5c55\u5305\uff1a")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3610).Z,width:"1155",height:"742"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"\u5b89\u88c5\u6269\u5c55\u540e\uff0c\u4f60\u5c06\u5728\u4fa7\u680f\u4e2d\u770b\u5230\u6269\u5c55\u9879\uff0c\u5de6\u4e0b\u89d2\u6709\u4e00\u4e2a\u663e\u793a\u547d\u4ee4\u9762\u677f\u7684\u7eff\u8272\u6309\u94ae\uff0c\u5176\u4e2d\u5305\u542b\u4e0e ",(0,r.kt)("inlineCode",{parentName:"li"},"Remote Development")," \u76f8\u5173\u7684\u5404\u79cd\u9009\u9879/\u547d\u4ee4\uff1a")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9472).Z,width:"1154",height:"742"})),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Microsoft \u5728\u6b64 GitHub \u4ed3\u5e93 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/microsoft/vscode-dev-containers.git"},"https://github.com/microsoft/vscode-dev-containers.git"),") \u4e2d\u63d0\u4f9b\u4e86\u8bb8\u591a\u793a\u4f8b\u5f00\u53d1\u5bb9\u5668\u3002\u5c06\u6b64\u4ed3\u5e93\u514b\u9686\u5230\u4f60\u7684\u672c\u5730\u4e3b\u673a\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/microsoft/vscode-dev-containers.git\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb\u7a97\u53e3\u5de6\u4e0b\u89d2\u7684 ",(0,r.kt)("img",{src:n(7720).Z,width:"42",height:"24"})," \u6309\u94ae\uff0c\u7136\u540e\u4ece\u547d\u4ee4\u9762\u677f\u4e2d\u9009\u62e9 ",(0,r.kt)("inlineCode",{parentName:"li"},"Open Folder in Container..."),"\u3002\u6d4f\u89c8\u514b\u9686\u4ed3\u5e93\u4e2d\u7684\u5176\u4e2d\u4e00\u4e2a\u793a\u4f8b\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"javascript-node"),"\uff1a")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9225).Z,width:"1157",height:"740"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9786).Z,width:"1157",height:"740"})),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9009\u62e9\u793a\u4f8b\u540e\uff0c\u4f60\u4f1a\u5728\u5bb9\u5668\u52a0\u8f7d\u65f6\u770b\u5230\u8fdb\u5ea6\u901a\u77e5 ",(0,r.kt)("img",{src:n(8849).Z,width:"280",height:"34"}),"\uff0c\u5bb9\u5668\u542f\u52a8\u6210\u529f\u540e\uff0c\u5de6\u4e0b\u89d2\u4f1a\u663e\u793a\u5bb9\u5668\u540d\u79f0 ",(0,r.kt)("img",{src:n(8589).Z,width:"198",height:"23"}),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5bb9\u5668\u542f\u52a8\u540e\uff0c\u5728 VS Code IDE \u4e2d\u6309 ",(0,r.kt)("inlineCode",{parentName:"p"},"F5")," \u542f\u52a8\u793a\u4f8b\u5e94\u7528\u7a0b\u5e8f\u3002\u4f60\u5c06\u770b\u5230\u5e94\u7528\u7a0b\u5e8f\u5df2\u542f\u52a8\u5e76\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:3000")," \u4e0a\u63d0\u4f9b\u670d\u52a1\uff1a"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(164).Z,width:"895",height:"519"})),(0,r.kt)("p",null,"\u606d\u559c\uff01\u4f60\u5df2\u7ecf\u4f7f\u7528 Rancher Desktop \u548c VS Code \u6210\u529f\u52a0\u8f7d\u5e76\u8fd0\u884c\u4e86\u4e00\u4e2a\u793a\u4f8b\u5f00\u53d1\u5bb9\u5668\u3002"),(0,r.kt)("h3",{id:"\u540e\u7eed\u6b65\u9aa4"},"\u540e\u7eed\u6b65\u9aa4"),(0,r.kt)("p",null,"Microsoft \u5728",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/remote/remote-overview"},"\u6b64\u5904"),"\u63d0\u4f9b\u4e86\u5728\u5404\u79cd\u573a\u666f\u4e2d\u4f7f\u7528\u5f00\u53d1\u5bb9\u5668\u7684\u5927\u91cf\u6587\u6863\u3002\u8bf7\u53c2\u9605\u4ee5\u4e0b\u6559\u7a0b\uff0c\u5c1d\u8bd5\u4f7f\u7528\u4e0e\u4f60\u7684\u9700\u6c42\u7c7b\u4f3c\u7684\u7528\u4f8b\u3002"),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u4f53\u9a8c\u4f7f\u7528 Rancher Desktop \u8fdb\u884c\u5bb9\u5668\u5316\u7684\u5feb\u4e50\u5427\uff01"))}d.isMDXComponent=!0},1718:function(e,t,n){t.Z=n.p+"assets/images/rd-main-682924ff059ac64a1aa2636e09ce2ef3.png"},2332:function(e,t,n){t.Z=n.p+"assets/images/vscode-main-f178361041b0f3168d8041a308fa00b1.png"},164:function(e,t,n){t.Z=n.p+"assets/images/vscode-remotedevelopment-appinbrowser-e9d44a0336fe517fe6ff131ad5a2a23a.png"},7720:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAYCAIAAAADE/iqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAD6SURBVEhLY9BrihlANGr9AKLhYr3f1jO3n+2LwxDHj6hjPdDuJ79/3TjfgSZOEFHBerLtBiJKrafEbiAizfrUddMckLgU2g1EJFhvOXf7he+/nt9cDHdB+91vfz+erJoSBVdDKiLN9zYr9lxDcoFBU++617+/vyXfBSTHPXVdQE7Sw+6Cj+caSXcBOdYDEcQF9y9OhnChLnh/srIpGq6GGESm9QG7L77+/fXUoRa4CNAF9du74VwiETnWQ+0+1okmTgYi2fqAPddf/6WO3UBEmvUQuy+eoo7dQESC9VYLDt39TU27gYg037tMKUQToRCRk/SoiEay9U0xANzHaTJUCunlAAAAAElFTkSuQmCC"},9225:function(e,t,n){t.Z=n.p+"assets/images/vscode-remotedevelopment-commandpalette-c10f319b632657e94a1cd84aa3c95578.png"},8849:function(e,t){t.Z="data:image/png;base64,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"},8589:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMYAAAAXCAYAAABQ+TDXAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAScSURBVHhe7ZixaxRBFMb9eyxE7RQLQSsLSSEWKnb+AZZqEY2CiqYy2AlilKRKJyEaIgYVEsRLUBNDiNccSXGopEgOEuJ47yZf5s3bN7t7t3tnAjPww9uZ2Xkz73vf7sZDRwaumEgkYjl8q9IiGiMSYfTEGOdffzbLq1PmqjIWiexHum4MMkVte8v8qDxQxyOR/UhXjRFNETmodM0YnZhirG6UtmHeT1xU55fNYHVzNyZa72JrHL87bX42d7FTn1LHe8GZN4tmPbCHYwOjZqZhmhpfSIy1g41RMy8GLqvjaVjNytepsDGujT01p0Vfp28KMsbv6rDXd25ujSo00V8mEPhv46vpZ+JQ7KKic2yh/1+ztQuMQU3mYj8Yo1sUMsaJZ+NmrrFl1paGPXPcX9k0O+sz5ubQJW9+FpoxCJu47hUUxe3FU/ngGqNmPrWezH7xRmOkcGp00iwIcxwdGGwW27Zp/GrPHCFjaGMQBQ1Pe81EmFvUdPJTi6+Hz56lyktvXygavPlcc4VAZ3PN7UXuOysGkLEw7tab2r1/w0xPvGr9Dj0YXNGOJOaFjOGfJzlu10TbMB8q3xPG8Ofo2hH2rO5e5Ait0wdeYWMQZZkjzRhUlDikVuh0L41rY07c5BOJEis/oTRofT4PAsii5YVtjSRF801IfctMPLoHcULGSIshC4UbH+vx+wnkDtccnju+Fo1JY+Car4UCxxx57fak75mucW5pMIKfV+aLrj9W3yXuyUMpxiBSzbH+xdzJYY4sY6BgtGLmAvK5uDckfNoYkEIBvg+Ix/cvjSCvNfg5pNBZMTBfFhDyivGs83L4fuia51bGk6YEPMeaCWUMrQ5COmnG0AzULqUZg4A5qvNP9vr2zPFnxtwQCZNkGQOJod96swXCCzkrWVxobZwICc4FRdHyOLIvZAy7Dm++0NIYoRj4rTXKnVwvD7JoEYMbDfsJ5RIPkNu7n2MyPo+BNbUWWptrg9rI0jSLUo3R93be1Lc3zOz0Pa+fzNE//sjr0wgZQwqaVcxcMCmsJFT0HAgr45VhDCuk69OKBOfOiqGNc+R6edDy53JmCx3x6Cyhpzo3htxf2pmzCOlHtUStnbNySjPGnik+PVTH8xAyhjx8KBkciET/piUnjxBWuOSTHoKTYbKK1l27dbiBcU8RY2Sdpd2iIzRjEKTVTv2bt/+QLtww9j7fPPI+bU6ItFoI7T0PpRijb3LR1HeKmYLQjCGfqAQE5smjAuF/xKII1xvJgpbYBOqCQXTaG39ryCLNKtrQHF4EOBeEbtcYdG0LxT/z4+pq6zpkjLRCDBUXckYNsTVd7Dy3H7k/7J8XN9bm55RaIAY3Bq3Fa4CPoS8vhY0BU8zPFjMFQQeWLSSYSyha0gCymNNwRemavFfuL61AQ33W6NScmO4c/n9ddmIMP4Zt0nhlGINAHB47mcekLrZg0WpmZGIhEcOf42sRMkYytr7vPBQyxsnn02al+flUhikikU4gY+R9+LVD4TfG2aHran8k0m1Cb8AyKGyMSKTX8M/P0CdgUaIxIhGFaIxIRCEaIxJRiMaIRBSsMSrmH0xonOubZb/0AAAAAElFTkSuQmCC"},9472:function(e,t,n){t.Z=n.p+"assets/images/vscode-remotedevelopment-installed-a9e4e95d1fdb6d6bdf1c384376e6a712.png"},3610:function(e,t,n){t.Z=n.p+"assets/images/vscode-remotedevelopment-marketplace-3c4d59014a6ebada6ca73a2282fd7803.png"},9786:function(e,t,n){t.Z=n.p+"assets/images/vscode-remotedevelopment-openfolder-a0bc5ec3a9afc6ddebd9085f710a7ae9.png"}}]);