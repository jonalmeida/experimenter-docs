"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[6710],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?i.createElement(h,a(a({ref:t},c),{},{components:n})):i.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6717:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=n(7462),r=(n(7294),n(3905));const o={id:"nimbus-cli-working-with-devices",title:"Working with Devices",slug:"/nimbus-cli/on-devices"},a=void 0,s={unversionedId:"deep-dives/mobile/nimbus-cli/nimbus-cli-working-with-devices",id:"deep-dives/mobile/nimbus-cli/nimbus-cli-working-with-devices",title:"Working with Devices",description:"nimbus-cli works best with iOS when working directly with the simulator, via xcrun simctl.",source:"@site/docs/deep-dives/mobile/nimbus-cli/80-working-with-devices.mdx",sourceDirName:"deep-dives/mobile/nimbus-cli",slug:"/nimbus-cli/on-devices",permalink:"/nimbus-cli/on-devices",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/deep-dives/mobile/nimbus-cli/80-working-with-devices.mdx",tags:[],version:"current",sidebarPosition:80,frontMatter:{id:"nimbus-cli-working-with-devices",title:"Working with Devices",slug:"/nimbus-cli/on-devices"},sidebar:"sidebar",previous:{title:"Working with Feature Manifests",permalink:"/nimbus-cli/fml"},next:{title:"Using Environment variables",permalink:"/nimbus-cli/environment-variables"}},l={},p=[],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"nimbus-cli")," works best with iOS when working directly with the simulator, via ",(0,r.kt)("inlineCode",{parentName:"p"},"xcrun simctl"),"."),(0,r.kt)("p",null,"However, there are times when limitations in the simulator mean that it is not possible to use. These are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"working on iOS devices"),(0,r.kt)("li",{parentName:"ul"},"opening deeplinks ",(0,r.kt)("em",{parentName:"li"},"and")," enrolling in experiments.")),(0,r.kt)("p",null,"For these important use-cases, the ",(0,r.kt)("inlineCode",{parentName:"p"},"nimbus-cli")," and associated tooling supports experiment enrollment via URL."),(0,r.kt)("p",null,"You can see the URL used with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--pbcopy")," option for any command that sends experiments to the app; for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"nimbus-cli --app firefox_ios --channel release enroll viewpoint-survey-2023-april-ios --branch treatment --pbcopy\n")),(0,r.kt)("p",null,"gives this output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u2705 Loaded manifest from https://raw.githubusercontent.com/mozilla-mobile/firefox-ios/main/nimbus.fml.yaml\n\u2705 treatment       messaging\n$ # Enrolling in the 'treatment' branch of 'viewpoint-survey-2023-april-ios'\n$ # Copied a deeplink URL (7609 characters) in to the clipboard\n")),(0,r.kt)("p",null,"Note the size of the URL which has been copied to the clipboard."),(0,r.kt)("p",null,"Once on your clipboard, this must be sent to the device; users have reported success with third-party chat apps."),(0,r.kt)("p",null,"However, this is error prone, and a URL of that length may easily be truncated, corrupting the experiment that is encoded within it."),(0,r.kt)("p",null,"Instead, we can start a server embedded with ",(0,r.kt)("inlineCode",{parentName:"p"},"nimbus-cli"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"nimbus-cli start-server\n")),(0,r.kt)("p",null,"gives the following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Copy the address http://192.168.1.199:8080/ into your mobile browser\n")),(0,r.kt)("p",null,"Once you open the webpage at the specified URL in Safari or Chrome, any command used to send experiments to the app (",(0,r.kt)("inlineCode",{parentName:"p"},"apply-file"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"enroll"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"log-state"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"open"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"test-feature"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"unenroll"),") can have the ",(0,r.kt)("inlineCode",{parentName:"p"},"--pbpaste")," option, which will encode the experiments as URLs, update the server, and then the webpage will open the URL on the device."),(0,r.kt)("p",null,"The webpage is one button: if you issued a command while the browser was in the background, then you can hit the button when you return."),(0,r.kt)("p",null,"If the webpage is in the foreground when the command is issued, then you should get a dialog asking you if you want to open the app."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The protocol to talk to the device is very limited; we can only work with what we can encode in a URL and send to the app."),(0,r.kt)("p",{parentName:"admonition"},"Resetting the app, terminating the app, working with passthrough args, getting logs out of the app: none of this is possible on iOS devices from the command line.")))}m.isMDXComponent=!0}}]);