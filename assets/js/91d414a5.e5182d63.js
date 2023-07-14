"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[1395],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||l;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,i=new Array(l);i[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:o,i[1]=a;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7225:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const l={id:"re-enrollment",title:"Re-enrolled in the same experiment?",slug:"/re-enrollment"},i=void 0,a={unversionedId:"faq/unenrollment/re-enrollment",id:"faq/unenrollment/re-enrollment",title:"Re-enrolled in the same experiment?",description:"Question",source:"@site/docs/faq/unenrollment/re-enrollment.mdx",sourceDirName:"faq/unenrollment",slug:"/re-enrollment",permalink:"/re-enrollment",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/faq/unenrollment/re-enrollment.mdx",tags:[],version:"current",frontMatter:{id:"re-enrollment",title:"Re-enrolled in the same experiment?",slug:"/re-enrollment"},sidebar:"sidebar",previous:{title:"Targeting dot releases or specific betas",permalink:"/targeting"},next:{title:"Glossary",permalink:"/glossary"}},c={},s=[{value:"Question",id:"question",level:3},{value:"Answer",id:"answer",level:3}],p={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"question"},"Question"),(0,o.kt)("p",null,"If a client is unenrolled from an experiment (say they opt out of that experiment specifically) will they be able to enroll again if they meet the criteria?"),(0,o.kt)("h3",{id:"answer"},"Answer"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"No"),". Once a user is disqualified by opting out (or through targeting, etc.) the client keeps a record of that and won't enroll back into the same experiment."))}m.isMDXComponent=!0}}]);