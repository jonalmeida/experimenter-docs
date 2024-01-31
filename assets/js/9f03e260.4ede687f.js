"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[5296],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>f});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},g=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),p=m(n),u=s,f=p["".concat(l,".").concat(u)]||p[u]||c[u]||i;return n?r.createElement(f,a(a({ref:t},g),{},{components:n})):r.createElement(f,a({ref:t},g))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,a=new Array(i);a[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:s,a[1]=o;for(var m=2;m<i;m++)a[m]=n[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2856:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var r=n(7462),s=(n(7294),n(3905));const i={id:"experiments-and-user-messaging",title:"Experiments & User Messaging",slug:"/messaging/experiments-and-user-messaging",sidebar_position:1},a=void 0,o={unversionedId:"workflow/implementing/messaging/experiments-and-user-messaging",id:"workflow/implementing/messaging/experiments-and-user-messaging",title:"Experiments & User Messaging",description:"Experiments enforce the rule that a user cannot enroll in multiple experiments of the same type (feature). Each messaging surface corresponds to a feature so we can only run a single experiment for any given messaging surface per cohort of users.",source:"@site/docs/workflow/implementing/messaging/experiments-and-user-messaging.md",sourceDirName:"workflow/implementing/messaging",slug:"/messaging/experiments-and-user-messaging",permalink:"/messaging/experiments-and-user-messaging",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/workflow/implementing/messaging/experiments-and-user-messaging.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"experiments-and-user-messaging",title:"Experiments & User Messaging",slug:"/messaging/experiments-and-user-messaging",sidebar_position:1},sidebar:"sidebar",previous:{title:"Risk Mitigation",permalink:"/risk-mitigation"},next:{title:"Messaging Display Logic",permalink:"/messaging/display-logic"}},l={},m=[],g={toc:m},p="wrapper";function c(e){let{components:t,...n}=e;return(0,s.kt)(p,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Experiments enforce the rule that a user cannot enroll in multiple experiments of the same type (feature). Each messaging surface corresponds to a feature so we can only run a single experiment for any given messaging surface per cohort of users."),(0,s.kt)("p",null,"There is no practical limitation of Messaging System for how many messages of the same type can exist. If deployed directly through Remote Settings multiple messages targeting the same surface can co-exist."),(0,s.kt)("p",null,"Messaging System will select a single message to show based on targeting condition and trigger. If multiple messages match, the first one is selected. Through frequency and lifetime settings eventually all messages will be given an opportunity to be shown."),(0,s.kt)("p",null,"For messages deployed outside of experiments we can use ",(0,s.kt)("strong",{parentName:"p"},"Priority")," (see ",(0,s.kt)("a",{parentName:"p",href:"/messaging/how-a-message-gets-shown"},"How a Message Gets Shown"),") to rank the order in which they are evaluated."))}c.isMDXComponent=!0}}]);