"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[2118],{3905:(e,o,t)=>{t.d(o,{Zo:()=>p,kt:()=>k});var n=t(7294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function l(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),s=function(e){var o=n.useContext(c),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},p=function(e){var o=s(e.components);return n.createElement(c.Provider,{value:o},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},u=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(t),u=r,k=f["".concat(c,".").concat(u)]||f[u]||m[u]||a;return t?n.createElement(k,i(i({ref:o},p),{},{components:t})):n.createElement(k,i({ref:o},p))}));function k(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var c in o)hasOwnProperty.call(o,c)&&(l[c]=o[c]);l.originalType=e,l[f]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5348:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=t(7462),r=(t(7294),t(3905));const a={id:"fml-cookbook",title:"Feature Manifest Cookbook",slug:"/cookbook/fml/fml-cookbook",sidebar_position:1},i="Feature Manifest Cookbook",l={unversionedId:"cookbook/fml/fml-cookbook",id:"cookbook/fml/fml-cookbook",title:"Feature Manifest Cookbook",description:"The Feature Manifest Language is a tool and specification designed to help application developers manage tooling to interact with Nimbus. It sits on top of the Feature Variables API, and eliminates many of the weaknesses of that API:",source:"@site/docs/cookbook/fml/fml-cookbook.mdx",sourceDirName:"cookbook/fml",slug:"/cookbook/fml/fml-cookbook",permalink:"/cookbook/fml/fml-cookbook",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/cookbook/fml/fml-cookbook.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"fml-cookbook",title:"Feature Manifest Cookbook",slug:"/cookbook/fml/fml-cookbook",sidebar_position:1},sidebar:"sidebar",previous:{title:"Co-enrolling Features",permalink:"/fml/coenrolling-features"},next:{title:"Managing collections not known before release",permalink:"/cookbook/fml/growable-collections"}},c={},s=[],p={toc:s},f="wrapper";function m(e){let{components:o,...t}=e;return(0,r.kt)(f,(0,n.Z)({},p,t,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"feature-manifest-cookbook"},"Feature Manifest Cookbook"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/fml-spec"},"Feature Manifest Language")," is a tool and specification designed to help application developers manage tooling to interact with Nimbus. It sits on top of the ",(0,r.kt)("a",{parentName:"p",href:"/mobile-feature-api"},"Feature Variables API"),", and eliminates many of the weaknesses of that API:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"No magic strings: application code now accesses configuration through generated data classes."),(0,r.kt)("li",{parentName:"ul"},"Default values are specified away from the code."),(0,r.kt)("li",{parentName:"ul"},"Channel specific configuration."),(0,r.kt)("li",{parentName:"ul"},"Decreasing interaction with ",(0,r.kt)("inlineCode",{parentName:"li"},"experimenter")," for application developers. Experimenter picks up changes in the manifest each day.")),(0,r.kt)("p",null,"This is the start of a collection of recipes and patterns that we're discovering."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/cookbook/fml/growable-collections"},"Managing collections not known before release"))))}m.isMDXComponent=!0}}]);