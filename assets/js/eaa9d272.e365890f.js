(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[7837],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(n),p=a,f=m["".concat(c,".").concat(p)]||m[p]||g[p]||s;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3873:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return g}});var r=n(2122),a=n(9756),s=(n(7294),n(3905)),o={id:"messaging-surfaces",title:"Available Messaging Surfaces",slug:"/messaging-surfaces"},i=void 0,c={unversionedId:"messaging/messaging-surfaces",id:"messaging/messaging-surfaces",isDocsHomePage:!1,title:"Available Messaging Surfaces",description:"Doorhangers",source:"@site/docs/messaging/messaging-surfaces.md",sourceDirName:"messaging",slug:"/messaging-surfaces",permalink:"/messaging-surfaces",editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/messaging/messaging-surfaces.md",tags:[],version:"current",frontMatter:{id:"messaging-surfaces",title:"Available Messaging Surfaces",slug:"/messaging-surfaces"},sidebar:"sidebar",previous:{title:"Client SDK States & Lifecycle",permalink:"/client-sdk-states-and-lifecycle"}},l=[{value:"Doorhangers",id:"doorhangers",children:[]},{value:"Infobars",id:"infobars",children:[]},{value:"Spotlight",id:"spotlight",children:[]}],u={toc:l};function g(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"doorhangers"},"Doorhangers"),(0,s.kt)("img",{src:"/img/messaging/doorhanger.png",alt:"Exxample of doorhanger component",className:"img-sm"}),(0,s.kt)("br",null),"The doorhanger has to be anchored to a UI element such as the application menu, the identity panel, and so on.",(0,s.kt)("h2",{id:"infobars"},"Infobars"),(0,s.kt)("img",{src:"/img/messaging/infobar.png",alt:"Exxample of infobar component",className:"img-sm"}),(0,s.kt)("br",null),"Shown at the top of browser content area, these can be per tab (switching tabs hides it) or global (persistent across tabs).",(0,s.kt)("h2",{id:"spotlight"},"Spotlight"),(0,s.kt)("img",{src:"/img/messaging/spotlight.png",alt:"Exxample of spotlight component",className:"img-sm"}),(0,s.kt)("br",null),"This is a window level modal, all other interactions are prevented. The user is given a primary and a secondary button to interact with the modal.")}g.isMDXComponent=!0}}]);