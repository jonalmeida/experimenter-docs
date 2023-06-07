(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[2475],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=p(n),m=i,d=g["".concat(s,".").concat(m)]||g[m]||c[m]||o;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},442:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a={id:"getting-started-mobile-required-ui",title:"Required UI for Mobile Integration",slug:"getting-started-mobile-required-ui"},l="User Interface requirements",s={unversionedId:"getting-started/engineers/getting-started-mobile-required-ui",id:"getting-started/engineers/getting-started-mobile-required-ui",isDocsHomePage:!1,title:"Required UI for Mobile Integration",description:"Currently Nimbus provides no user-interface components of its own, though provides API to connect to existing settings screens.",source:"@site/docs/getting-started/engineers/mobile-ui-integration.md",sourceDirName:"getting-started/engineers",slug:"/getting-started/engineers/getting-started-mobile-required-ui",permalink:"/getting-started/engineers/getting-started-mobile-required-ui",editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/getting-started/engineers/mobile-ui-integration.md",tags:[],version:"current",frontMatter:{id:"getting-started-mobile-required-ui",title:"Required UI for Mobile Integration",slug:"getting-started-mobile-required-ui"},sidebar:"sidebar",previous:{title:"Desktop Migration Guide (JS)",permalink:"/desktop-migration-guide"},next:{title:"Product Managers",permalink:"/for-product"}},p=[{value:"Global opt-out/opt-in for experiments",id:"global-opt-outopt-in-for-experiments",children:[]},{value:"Resetting telemetry identifiers",id:"resetting-telemetry-identifiers",children:[]},{value:"QA tooling",id:"qa-tooling",children:[{value:"Preview Collection",id:"preview-collection",children:[]},{value:"Manual opt-in of experiments",id:"manual-opt-in-of-experiments",children:[]}]}],u={toc:p};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"user-interface-requirements"},"User Interface requirements"),(0,o.kt)("p",null,"Currently Nimbus provides no user-interface components of its own, though provides API to connect to existing settings screens."),(0,o.kt)("h2",{id:"global-opt-outopt-in-for-experiments"},"Global opt-out/opt-in for experiments"),(0,o.kt)("p",null,"The settings page should include a ",(0,o.kt)("inlineCode",{parentName:"p"},"Studies")," toggle, which allows users to opt-in or opt-out of experiments. The example from Firefox for iOS is shown:"),(0,o.kt)("img",{src:"/img/firefox-ios/studies-toggle.png",width:"300px"}),(0,o.kt)("p",null,"Toggling the ",(0,o.kt)("inlineCode",{parentName:"p"},"Studies")," flag should set the ",(0,o.kt)("inlineCode",{parentName:"p"},"Nimbus")," value for ",(0,o.kt)("inlineCode",{parentName:"p"},"globalUserParticipation"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"nimbus.globalUserParticipation = flag\n")),(0,o.kt)("h2",{id:"resetting-telemetry-identifiers"},"Resetting telemetry identifiers"),(0,o.kt)("p",null,"During experiment enrollment, telemetry is generated which can connect the user to the experiment enrollment."),(0,o.kt)("p",null,"When the user opts-in or opts-out of telemetry collection, the toggle should call:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"nimbus.resetTelemetryIdentifiers()\n")),(0,o.kt)("p",null,"This disqualifies existing enrollments. and breaks any connection with experiment enrollment and the enrollment telemetry."),(0,o.kt)("h2",{id:"qa-tooling"},"QA tooling"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The following are nice-to-haves, obviated by the use of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mozilla/application-services/tree/main/components/support/nimbus-cli"},(0,o.kt)("inlineCode",{parentName:"a"},"nimbus-cli")),".")),(0,o.kt)("h3",{id:"preview-collection"},"Preview Collection"),(0,o.kt)("p",null,"To allow testing of experiments before they are published, the client should allow configuring the Nimbus startup to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"preview-collection"),"."),(0,o.kt)("img",{src:"/img/fenix/preview-collection.png",width:"300px"}),(0,o.kt)("p",null,"The above shows a non-user visible settings screen in Fenix. The toggle sets a ",(0,o.kt)("inlineCode",{parentName:"p"},"Defaults"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"SharedPreferences")," flag which is ",(0,o.kt)("a",{parentName:"p",href:"/getting-started/engineers/getting-started-for-android-engineers#using-the-experiments-preview-collection"},"read at startup to configure ",(0,o.kt)("inlineCode",{parentName:"a"},"Nimbus")," startup"),"."),(0,o.kt)("p",null,"The preview collection is loaded on the next restart, and available to the app on the restart after that."),(0,o.kt)("h3",{id:"manual-opt-in-of-experiments"},"Manual opt-in of experiments"),(0,o.kt)("p",null,"To allow the manual opt-in of a particular branch, the app must provide a screen to list all available experiments:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val experiments: List<AvailableExperiment> = nimbus.getAvailableExperiments()\n")),(0,o.kt)("img",{src:"/img/fenix/experiments-screen.png",width:"300px"}),(0,o.kt)("img",{src:"/img/fenix/experiments-screen-branches.png",width:"300px"}),(0,o.kt)("p",null,"To get the list of branches from an available experiment; you can get the branch slug that the client is enrolled in with ",(0,o.kt)("inlineCode",{parentName:"p"},"getExperimentBranch"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val branches = experiment.branches\nval branchSlugs: List<String> = branches.map { it.slug }\nval enrolledBranchSlug = nimbus.getExperimentBranch(experiment.slug)\n")),(0,o.kt)("p",null,"You can opt-in and out of a given experiment."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"// opt in to a particular branch\nval newBranchSlug = branchSlugs.get(0)\nif (enrolledBranchSlug != newBranchSlug) {\n    nimbus.optIn(experiment.slug, newBranchSlug)\n} else {\n    nimbus.optOut(experiment.slug)\n}\n")))}c.isMDXComponent=!0}}]);