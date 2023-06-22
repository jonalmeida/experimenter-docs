(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[2996],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),f=r,d=m["".concat(s,".").concat(f)]||m[f]||c[f]||i;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6378:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o={id:"nimbus-cli-working-with-fml",title:"Working with Feature Manifests",slug:"/nimbus-cli/fml"},l=void 0,s={unversionedId:"deep-dives/mobile/nimbus-cli/nimbus-cli-working-with-fml",id:"deep-dives/mobile/nimbus-cli/nimbus-cli-working-with-fml",isDocsHomePage:!1,title:"Working with Feature Manifests",description:"The Feature Manifest Language is a powerful way of specify the shape of the feature configurations that each branch is made up of.",source:"@site/docs/deep-dives/mobile/nimbus-cli/70-working-with-manifests.mdx",sourceDirName:"deep-dives/mobile/nimbus-cli",slug:"/nimbus-cli/fml",permalink:"/nimbus-cli/fml",editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/deep-dives/mobile/nimbus-cli/70-working-with-manifests.mdx",tags:[],version:"current",sidebarPosition:70,frontMatter:{id:"nimbus-cli-working-with-fml",title:"Working with Feature Manifests",slug:"/nimbus-cli/fml"},sidebar:"sidebar",previous:{title:"Working with Logs",permalink:"/nimbus-cli/working-with-logs"},next:{title:"Using Environment variables",permalink:"/nimbus-cli/environment-variables"}},p=[{value:"<code>validate</code>",id:"validate",children:[]},{value:"<code>defaults</code>",id:"defaults",children:[]},{value:"<code>features</code>",id:"features",children:[]},{value:"Other commands",id:"other-commands",children:[{value:"<code>enroll</code>",id:"enroll",children:[]}]}],u={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Feature Manifest Language is a powerful way of specify the shape of the feature configurations that each branch is made up of."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"nimbus-cli")," knows about the feature manifests for each of the apps, and can validate experiments before they launch."),(0,i.kt)("h2",{id:"validate"},(0,i.kt)("inlineCode",{parentName:"h2"},"validate")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"nimbus-cli --app firefox_ios --channel release validate ios-sync-manager-integration\n")),(0,i.kt)("p",null,"This downloads the feature manifest (the fml file), and checks each of the features in each of the branches."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"\u2705 Loaded manifest from https://raw.githubusercontent.com/mozilla-mobile/firefox-ios/main/nimbus.fml.yaml\n\u2705 control           rust-sync-manager-component\n\u2705 rust-sync-manager rust-sync-manager-component\n")),(0,i.kt)("p",null,"By default, this will download the version from ",(0,i.kt)("inlineCode",{parentName:"p"},"main"),", however you can specify a version of the FML."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"nimbus-cli --app firefox_ios --channel release validate preview/release-ios-re-engagement-notifications-ab-experiment-114 --version 114\n")),(0,i.kt)("p",null,"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"--version")," parameter, we can specify ",(0,i.kt)("inlineCode",{parentName:"p"},"114")," which for ",(0,i.kt)("inlineCode",{parentName:"p"},"firefox_ios"),", this currently translates to the ",(0,i.kt)("inlineCode",{parentName:"p"},"release/v114")," tag."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"\u2705 Loaded manifest from https://raw.githubusercontent.com/mozilla-mobile/firefox-ios/release/v114/nimbus.fml.yaml\n\u2705 control         messaging\n\u2705 treatment-a     messaging\n\u2705 treatment-b     messaging\n\u2705 treatment-c     messaging\n")),(0,i.kt)("p",null,"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"--ref")," parameter, we can a tag, a different branch or a commit hash."),(0,i.kt)("p",null,"Alternatively, we can specify a local manifest file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"nimbus-cli --app firefox_ios --channel release validate preview/release-ios-re-engagement-notifications-ab-experiment-114 --manifest ./my-manifest.fml.yaml\n")),(0,i.kt)("h2",{id:"defaults"},(0,i.kt)("inlineCode",{parentName:"h2"},"defaults")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"defaults")," commands outputs the default configuration, for all features of the app configured by Nimbus."),(0,i.kt)("p",null,"An optional ",(0,i.kt)("inlineCode",{parentName:"p"},"--feature")," parameter can be specified to only output the default configuration for that particular feature."),(0,i.kt)("p",null,"For example,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"nimbus-cli --app firefox_ios --channel release defaults --feature homescreenFeature\n")),(0,i.kt)("p",null,"currently outputs the following JSON:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'{\n  "jump-back-in-synced-tab": true,\n  "pocket-sponsored-stories": false,\n  "sections-enabled": {\n    "jump-back-in": true,\n    "pocket": true,\n    "recent-explorations": true,\n    "recently-saved": true,\n    "top-sites": true\n  },\n  "sponsored-tiles": {\n    "max-number-of-tiles": 2,\n    "status": true\n  }\n}\n')),(0,i.kt)("h2",{id:"features"},(0,i.kt)("inlineCode",{parentName:"h2"},"features")),(0,i.kt)("p",null,"A manifest can be used to change the behavior of the ",(0,i.kt)("inlineCode",{parentName:"p"},"features")," command."),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"--validate")," flag is set, then the branch feature configuration is merged with the defaults from the manifest."),(0,i.kt)("p",null,"For example, without ",(0,i.kt)("inlineCode",{parentName:"p"},"--validate"),", the command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"nimbus-cli --app firefox_ios --channel developer features ios-search-bar-placement-v2-treatment-a-rollout --branch treatment-a\n")),(0,i.kt)("p",null,"outputs the following JSON, extracted from the experiment:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'{\n  "awesome-bar": {\n    "position": {\n      "is-bottom": false,\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Using ",(0,i.kt)("inlineCode",{parentName:"p"},"--validate"),", the defaults from the feature manifest are also shown: this gives an accurate picture of the complete configuration that the app will use for this feature."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"nimbus-cli --app firefox_ios --channel developer features ios-search-bar-placement-v2-treatment-a-rollout --branch treatment-a --validate\n")),(0,i.kt)("p",null,"Gives the above output merged with the defaults from the manifest:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'{\n  "awesome-bar": {\n    "position": {\n      "is-bottom": false,\n      "is-position-feature-enabled": true,\n      "is-toolbar-cfr-on": false\n    },\n    "search-highlights": false,\n    "use-page-content": false\n  }\n}\n')),(0,i.kt)("h2",{id:"other-commands"},"Other commands"),(0,i.kt)("p",null,"By default, the ",(0,i.kt)("inlineCode",{parentName:"p"},"enroll")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"test-feature")," validates the experiments before sending them to the device."),(0,i.kt)("p",null,"This can be overridden with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--no-validate")," option."),(0,i.kt)("h3",{id:"enroll"},(0,i.kt)("inlineCode",{parentName:"h3"},"enroll")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"nimbus-cli --app firefox_ios --channel release enroll ios-sync-manager-integration --branch rust-sync-manager\n")),(0,i.kt)("p",null,"The manifest itself is validated on load, so if there is a problem with that feature, you can skip validation with ",(0,i.kt)("inlineCode",{parentName:"p"},"--no-validate"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"nimbus-cli --app firefox_ios --channel developer enroll ios-set-to-default-in-onboarding-final --branch control --no-validate\n")),(0,i.kt)("p",null,"Each of the ",(0,i.kt)("inlineCode",{parentName:"p"},"--manifest"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"--version")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"--ref")," options work with ",(0,i.kt)("inlineCode",{parentName:"p"},"enroll"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"test-feature"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"features")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"defaults"),"."))}c.isMDXComponent=!0}}]);