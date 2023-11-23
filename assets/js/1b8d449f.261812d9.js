"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[1510],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||l;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var u=2;u<l;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2961:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(7462),o=(n(7294),n(4137));const l={id:"coenrolling-features",title:"Co-enrolling Features",slug:"/fml/coenrolling-features",sidebar_position:6},a=void 0,i={unversionedId:"deep-dives/specifications/fml/coenrolling-features",id:"deep-dives/specifications/fml/coenrolling-features",title:"Co-enrolling Features",description:"A feature which allows co-enrollment allows a client to be enrolled in any number of experiments/rollouts for that feature.",source:"@site/docs/deep-dives/specifications/fml/coenrolling-features.mdx",sourceDirName:"deep-dives/specifications/fml",slug:"/fml/coenrolling-features",permalink:"/fml/coenrolling-features",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/deep-dives/specifications/fml/coenrolling-features.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"coenrolling-features",title:"Co-enrolling Features",slug:"/fml/coenrolling-features",sidebar_position:6},sidebar:"sidebar",previous:{title:"Nimbus FML command line interface",permalink:"/fml/fml-cli"},next:{title:"Using string alias",permalink:"/fml/string-alias"}},s={},u=[{value:"How to define a co-enrolling feature",id:"how-to-define-a-co-enrolling-feature",level:2},{value:"Recording exposure",id:"recording-exposure",level:2},{value:"Other things to note about co-enrollment",id:"other-things-to-note-about-co-enrollment",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A feature which allows co-enrollment allows a client to be enrolled in any number of experiments/rollouts for that feature. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Features supporting co-enrollment")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/messaging/mobile-messaging"},"Messaging")," (Fenix, Firefox iOS, Focus for Android, Focus for iOS)")),(0,o.kt)("h2",{id:"how-to-define-a-co-enrolling-feature"},"How to define a co-enrolling feature"),(0,o.kt)("p",null,"A feature can be marked as allowing co-enrollment with a boolean flag in its feature definition in a Feature Manifest. For example, in your ",(0,o.kt)("inlineCode",{parentName:"p"},"messaging.fml.yaml")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"features:\n  messaging:\n    description: |\n      The in-app messaging system.\n    allow-coenrollment: true\n    variables:\n      messages:\n        description: A growable collection of messages\n        type: Map<String, MessageData>\n        default: {}\n")),(0,o.kt)("p",null,"Once your messaging feature is defined as a co-enrolling feature, a client can be enrolled in any number of messaging experiments/rollouts."),(0,o.kt)("h2",{id:"recording-exposure"},"Recording exposure"),(0,o.kt)("p",null,"In order to ",(0,o.kt)("a",{parentName:"p",href:"/cookbook/fml/growable-collections#exposure-events"},"record exposure")," for a co-enrolled feature, the string ",(0,o.kt)("inlineCode",{parentName:"p"},"{experiment}")," needs to exist in the feature config somewhere. In the case of messaging, this would be in the message object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"objects:\n  MessageData:\n    ...\n    fields:\n      experiment:\n        type: Option<String>\n        description: The slug of the experiment that this message came from.\n        default: null\n")),(0,o.kt)("p",null,"This string is then replaced with the experiment slug at enrollment time."),(0,o.kt)("p",null,"The feature code that the developer is writing needs to get the experiment slug from the feature config and record the exposure with ",(0,o.kt)("inlineCode",{parentName:"p"},"recordExperimentExposure(experimentSlug)"),". In Kotlin, this would look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val slug = message.data.experiment ?: return message\n\nmessagingFeature.recordExperimentExposure(slug)\n")),(0,o.kt)("h2",{id:"other-things-to-note-about-co-enrollment"},"Other things to note about co-enrollment"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Experiment feature values still take precedence over rollout feature values"),(0,o.kt)("li",{parentName:"ul"},"Enrollment/unenrollment is calculated independently for each experiment/rollout regardless of whether they target the same feature or not"),(0,o.kt)("li",{parentName:"ul"},"Enrollment/unenrollment telemetry is still sent for each experiment/rollout at the time each enrolls or unenrolls")))}m.isMDXComponent=!0}}]);