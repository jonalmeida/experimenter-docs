(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[6321],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2040:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o={id:"nimbus-cli-working-with-features",title:"Working with Features",slug:"/nimbus-cli/working-with-features"},l=void 0,s={unversionedId:"deep-dives/mobile/nimbus-cli/nimbus-cli-working-with-features",id:"deep-dives/mobile/nimbus-cli/nimbus-cli-working-with-features",isDocsHomePage:!1,title:"Working with Features",description:"The nimbus-cli provides features to download experiments from Remote Settings. However, sometimes you wish to do some exploratory testing of a feature without going through the experimenter interface.",source:"@site/docs/deep-dives/mobile/nimbus-cli/40-testing-features.mdx",sourceDirName:"deep-dives/mobile/nimbus-cli",slug:"/nimbus-cli/working-with-features",permalink:"/nimbus-cli/working-with-features",editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/deep-dives/mobile/nimbus-cli/40-testing-features.mdx",tags:[],version:"current",sidebarPosition:40,frontMatter:{id:"nimbus-cli-working-with-features",title:"Working with Features",slug:"/nimbus-cli/working-with-features"},sidebar:"sidebar",previous:{title:"Opening and resetting the app",permalink:"/nimbus-cli/opening-and-resetting"},next:{title:"Working with Files",permalink:"/nimbus-cli/working-with-files"}},u=[{value:"<code>test-feature</code>",id:"test-feature",children:[]},{value:"<code>features</code>",id:"features",children:[]}],p={toc:u};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"nimbus-cli")," provides features to download experiments from Remote Settings. However, sometimes you wish to do some exploratory testing of a feature without going through the experimenter interface."),(0,i.kt)("h2",{id:"test-feature"},(0,i.kt)("inlineCode",{parentName:"h2"},"test-feature")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"test-feature")," command allows you to specify a ",(0,i.kt)("inlineCode",{parentName:"p"},"feature-id")," and one or more JSON files that correspond to the feature configuration for that feature: i.e. to exercise a feature."),(0,i.kt)("p",null,"e.g."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"nimbus-cli --app firefox_ios --channel developer test-feature messaging my-treatment.json my-control.json\n")),(0,i.kt)("p",null,"For the above ",(0,i.kt)("inlineCode",{parentName:"p"},"nimbus-cli")," will generate an experiment which will enroll in to the given app and channel for the ",(0,i.kt)("inlineCode",{parentName:"p"},"messaging"),", with two branches: ",(0,i.kt)("inlineCode",{parentName:"p"},"my-treatment")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"my-control"),". It will enroll in the first of the branches, i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"my-treatment"),"."),(0,i.kt)("p",null,"The other branches are available to enroll using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Experiments")," screen available through the app's UI."),(0,i.kt)("p",null,"By default, the app's feature manifest will be downloaded and used to validate each feature configuration. This can be overridden with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--no-validate")," option."),(0,i.kt)("h2",{id:"features"},(0,i.kt)("inlineCode",{parentName:"h2"},"features")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"features")," command accepts an experiment and branch, and outputs the feature configuration from that branch."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"nimbus-cli --app fenix --channel developer features release-android-onboarding-redesign --branch treatment-a\n")),(0,i.kt)("p",null,"will output the JSON as specified by the branch:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'{\n  "enabled": true\n}\n')),(0,i.kt)("p",null,"You can specify an optional  ",(0,i.kt)("inlineCode",{parentName:"p"},"--output FILE")," to write it to disk."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"nimbus-cli --app fenix --channel developer features release-android-onboarding-redesign --branch treatment-a --output new-onboarding.json\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Wherever a JSON file is specified, you can use JSON or YAML, just by changing the file name."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"nimbus-cli --app fenix --channel developer features release-android-onboarding-redesign --branch treatment-a --output new-onboarding.yaml\n")),(0,i.kt)("p",{parentName:"div"},"This can be useful to add the winning branch configuration to ",(0,i.kt)("a",{parentName:"p",href:"https://experimenter.info/fml-spec/#feature-defaults"},"the feature defaults in the feature manifest")," in the app's codebase, to make the change permanent."))),(0,i.kt)("p",null,"By default, the ",(0,i.kt)("inlineCode",{parentName:"p"},"features")," command outputs the experimental feature configurations for all features involved in the experiment. At the moment, this is always one."),(0,i.kt)("p",null,"When more than one feature per branch is available, the output will be of the format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$feature1_id": {},\n  "$feature2_id": {},\n}\n')),(0,i.kt)("p",null,"You can force a single feature experiment to use this format with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--multi")," flag:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"nimbus-cli --app fenix --channel developer features release-android-onboarding-redesign --branch treatment-a --multi\n")),(0,i.kt)("p",null,"gives this output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "juno-onboarding": {\n    "enabled": true\n  }\n}\n')),(0,i.kt)("p",null,"Alternatively, if you only want one feature of many, you can specify the feature id with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--feature")," parameter."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"nimbus-cli --app fenix --channel developer features release-android-onboarding-redesign --branch treatment-a --feature juno-onboarding\n")),(0,i.kt)("p",null,"If you are writing automated tooling on top of the ",(0,i.kt)("inlineCode",{parentName:"p"},"features")," command, it is strongly recommended you use one of these options to get consistent output."))}c.isMDXComponent=!0}}]);