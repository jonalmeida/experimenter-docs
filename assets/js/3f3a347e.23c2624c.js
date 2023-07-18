"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[6082],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=i.createContext({}),p=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=p(e.components);return i.createElement(c.Provider,{value:n},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(t),d=r,u=s["".concat(c,".").concat(d)]||s[d]||f[d]||a;return t?i.createElement(u,l(l({ref:n},m),{},{components:t})):i.createElement(u,l({ref:n},m))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<a;p++)l[p]=t[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2132:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var i=t(7462),r=(t(7294),t(3905));const a={id:"fml-cli",title:"Nimbus FML command line interface",slug:"/fml/fml-cli",sidebar_position:4},l="Commands",o={unversionedId:"deep-dives/specifications/fml/fml-cli",id:"deep-dives/specifications/fml/fml-cli",title:"Nimbus FML command line interface",description:"Generating code for an mobile application",source:"@site/docs/deep-dives/specifications/fml/fml-cli.mdx",sourceDirName:"deep-dives/specifications/fml",slug:"/fml/fml-cli",permalink:"/fml/fml-cli",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/deep-dives/specifications/fml/fml-cli.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"fml-cli",title:"Nimbus FML command line interface",slug:"/fml/fml-cli",sidebar_position:4},sidebar:"sidebar",previous:{title:"Componentizing the Nimbus Feature Manifest",permalink:"/fml/fml-imports-and-includes"},next:{title:"Feature Manifest Language Front-end Format As YAML",permalink:"/fml/fml-front-end-format"}},c={},p=[{value:"Generating code for an mobile application",id:"generating-code-for-an-mobile-application",level:2},{value:"Adding <code>repo-file</code>s",id:"adding-repo-files",level:3},{value:"Caching remote files",id:"caching-remote-files",level:3},{value:"Generating a manifest file for experimenter",id:"generating-a-manifest-file-for-experimenter",level:2}],m={toc:p},s="wrapper";function f(e){let{components:n,...t}=e;return(0,r.kt)(s,(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"commands"},"Commands"),(0,r.kt)("h2",{id:"generating-code-for-an-mobile-application"},"Generating code for an mobile application"),(0,r.kt)("p",null,"The simplest invocation is in this form:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"% nimbus-fml generate --language <LANGUAGE> --channel <CHANNEL> <INPUT> <OUTPUT>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LANGUAGE")," can be ",(0,r.kt)("inlineCode",{parentName:"li"},"kotlin")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"swift"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CHANNEL")," is one of the channels specified in the FML file."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"INPUT")," may be a local file or directory."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OUTPUT")," should be a local file or directory.")),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"INPUT")," is a directory, it is recursively searches for any files with names ending in ",(0,r.kt)("inlineCode",{parentName:"p"},".fml.yaml"),"."),(0,r.kt)("p",null,"This command should be called at build time of components and the build time of the application."),(0,r.kt)("h3",{id:"adding-repo-files"},"Adding ",(0,r.kt)("inlineCode",{parentName:"h3"},"repo-file"),"s"),(0,r.kt)("p",null,"Adding ",(0,r.kt)("a",{parentName:"p",href:"/fml/fml-paths"},"repo files")," can be done with one or more ",(0,r.kt)("inlineCode",{parentName:"p"},"--repo-file")," argument."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"% nimbus-fml generate --language <LANGUAGE> --repo-file ./app-structure.json <INPUT> <OUTPUT>\n")),(0,r.kt)("h3",{id:"caching-remote-files"},"Caching remote files"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"% nimbus-fml generate --language <LANGUAGE> --channel CHANNEL --cache-dir ./build/cache-dir <INPUT> <OUTPUT>\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/fml/fml-imports-and-includes"},"For ",(0,r.kt)("inlineCode",{parentName:"a"},"include")," and ",(0,r.kt)("inlineCode",{parentName:"a"},"import")," directives in the FML"),", a remote file may be referenced. The cache directory is a local cache of these remote files."),(0,r.kt)("h2",{id:"generating-a-manifest-file-for-experimenter"},"Generating a manifest file for experimenter"),(0,r.kt)("p",null,"The reason to use a custom manifest format a language specific JSON serialization library is to do with keeping the code in sync with the experimenter web server."),(0,r.kt)("p",null,"For legacy reasons, this is a different format of yaml file, which should be checked in to version control and is periodically pulled in by experimenter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"% nimbus-fml generate-experimenter <INPUT> <OUTPUT>\n")),(0,r.kt)("p",null,"This should only be called at the application level, with the one main fml file as an input."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--cache-dir")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--repo-file")," arguments are also supported."))}f.isMDXComponent=!0}}]);