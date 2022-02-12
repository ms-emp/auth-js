"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[165],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7462),r=a(7294),i=a(2389),o=a(9548),l=a(6010),s="tabItem_LplD";function p(e){var t,a,i,p=e.lazy,u=e.block,m=e.defaultValue,c=e.values,d=e.groupId,h=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=c?c:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,o.lx)(g,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===m?m:null!=(t=null!=m?m:null==(a=v.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(i=v[0])?void 0:i.props.value;if(null!==N&&!g.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,o.UB)(),b=k.tabGroupChoices,y=k.setTabGroupChoices,w=(0,r.useState)(N),x=w[0],j=w[1],M=[],A=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var T=b[d];null!=T&&T!==x&&g.some((function(e){return e.value===T}))&&j(T)}var O=function(e){var t=e.currentTarget,a=M.indexOf(t),n=g[a].value;n!==x&&(A(t),j(n),null!=d&&y(d,n))},C=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=M.indexOf(e.currentTarget)+1;a=M[n]||M[0];break;case"ArrowLeft":var r=M.indexOf(e.currentTarget)-1;a=M[r]||M[M.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},h)},g.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return M.push(e)},onKeyDown:C,onFocus:O,onClick:O},i,{className:(0,l.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":x===t})}),null!=a?a:t)}))),p?(0,r.cloneElement)(v.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function u(e){var t=(0,i.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},3572:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return m},toc:function(){return c},default:function(){return h}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=a(9877),l=a(8215),s=["components"],p={title:"Angular"},u=void 0,m={unversionedId:"docs/getting-started/angular",id:"docs/getting-started/angular",title:"Angular",description:"This guide explains how to set up your Angular project to begin using @badisi/ngx-auth.",source:"@site/docs/docs/getting-started/angular.mdx",sourceDirName:"docs/getting-started",slug:"/docs/getting-started/angular",permalink:"/auth-js/docs/docs/getting-started/angular",editUrl:"https://github.com/Badisi/auth-js/edit/main/projects/docs/docs/docs/getting-started/angular.mdx",tags:[],version:"current",frontMatter:{title:"Angular"},sidebar:"docsSidebar",previous:{title:"VanillaJS",permalink:"/auth-js/docs/docs/getting-started/vanilla-js"},next:{title:"Mobile",permalink:"/auth-js/docs/docs/getting-started/mobile"}},c=[{value:"Schematic",id:"schematic",children:[],level:3},{value:"Manual installation",id:"manual-installation",children:[],level:3}],d={toc:c};function h(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide explains how to set up your ",(0,i.kt)("strong",{parentName:"p"},"Angular project")," to begin using ",(0,i.kt)("inlineCode",{parentName:"p"},"@badisi/ngx-auth"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\ud83d\ude80 The fastest, simplest and preferred way is the ",(0,i.kt)("a",{parentName:"p",href:"#schematic"},"schematic")," way but you can also install this library ",(0,i.kt)("a",{parentName:"p",href:"#manual-installation"},"manually"),".")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you are new to ",(0,i.kt)("a",{parentName:"p",href:"https://angular.io"},(0,i.kt)("strong",{parentName:"a"},"Angular"))," or getting started with a new Angular application, see Angular's full ",(0,i.kt)("a",{parentName:"p",href:"https://angular.io/start"},"Getting Started Guide")," and ",(0,i.kt)("a",{parentName:"p",href:"https://angular.io/guide/setup-local"},"Setting up your environment"),"."))),(0,i.kt)("h3",{id:"schematic"},"Schematic"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Not yet available.."))),(0,i.kt)("p",null,"Use the Angular CLI's installation ",(0,i.kt)("a",{parentName:"p",href:"https://material.angular.io/guide/schematics"},"schematic")," to automagically set up your Angular project with this library:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"ng add @badisi/ngx-auth\n")),(0,i.kt)("h3",{id:"manual-installation"},"Manual installation"),(0,i.kt)("p",null,"If you wish to install this library manually, please follow the steps below:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install the library from the ",(0,i.kt)("strong",{parentName:"p"},"NPM repository")),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"npm",label:"npm",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @badisi/ngx-auth --save\n"))),(0,i.kt)(l.Z,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @badisi/ngx-auth\n"))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Modify your ",(0,i.kt)("strong",{parentName:"p"},"angular.json")," file"),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This library depends on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/authts/oidc-client-ts/issues/275"},(0,i.kt)("inlineCode",{parentName:"a"},"oidc-client-ts"))," which itself depends on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/brix/crypto-js"},(0,i.kt)("inlineCode",{parentName:"a"},"crypto-js"))," which is a ",(0,i.kt)("strong",{parentName:"p"},"commonjs")," dependency."),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Assets")," needs to be copy over to your application because some html web pages are used and required when navigating back from the Authorization server."))),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="angular.json" {5-7,9-11}',title:'"angular.json"',"{5-7,9-11}":!0},'{\n  "targets": {\n    "build": {\n      "options": {\n        "allowedCommonJsDependencies": [\n          "oidc-client-ts"\n        ],\n        "assets": [{\n          "glob": "**/*",\n          "input": "node_modules/@badisi/ngx-auth/oidc/assets",\n          "output": "oidc/callback"\n        }]\n      }\n    }\n  }\n}\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Modify your ",(0,i.kt)("strong",{parentName:"p"},"main.ts")," file"),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Initializing the library prior to your Angular application bootstrapping ensures that all the security checks are made upstream (if needed) and avoid the whole Angular application to be loaded twice when using redirects."))),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For more info on how to ",(0,i.kt)("strong",{parentName:"p"},"configure")," the library please have a look at the ",(0,i.kt)("a",{parentName:"p",href:"../configuration"},"configuration")," page."))),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="main.ts" {3,12-15,19}',title:'"main.ts"',"{3,12-15,19}":!0},"import { enableProdMode } from '@angular/core';\nimport { platformBrowserDynamic } from '@angular/platform-browser-dynamic';\nimport { initAuth } from '@badisi/ngx-auth';\n\nimport { AppModule } from './app/app.module';\nimport { environment } from './environments/environment';\n\nif (environment.production) {\n  enableProdMode();\n}\n\ninitAuth({\n  authorityUrl: 'https://dev-fijd1e9x.us.auth0.com',\n  clientId: 'kRVVEnAWKMpxxpcodl0TqLXfIHgQvmmt'\n}).then(authProvider => {\n  platformBrowserDynamic([\n    authProvider\n  ]).bootstrapModule(AppModule).catch(err => console.error(err));\n}).catch(error => console.error(error));\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Modify your ",(0,i.kt)("strong",{parentName:"p"},"app.module.ts")," file"),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Importing the ",(0,i.kt)("strong",{parentName:"p"},"AuthModule")," is required so an ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthService"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthInterceptor")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthGuard")," are provided to your application."))),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="app.module.ts" {2,6}',title:'"app.module.ts"',"{2,6}":!0},"import { NgModule } from '@angular/core';\nimport { AuthModule } from '@badisi/ngx-auth';\n\n@NgModule({\n  imports: [\n    AuthModule\n  ]\n})\nexport class AppModule {}\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You're done! \ud83d\ude80"))))}h.isMDXComponent=!0}}]);