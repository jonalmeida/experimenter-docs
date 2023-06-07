(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[6201],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(n),c=r,h=u["".concat(p,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},828:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),l={id:"nimbus-cli-getting-started",title:"Getting Started",slug:"/nimbus-cli/getting-started"},o=void 0,p={unversionedId:"deep-dives/mobile/nimbus-cli/nimbus-cli-getting-started",id:"deep-dives/mobile/nimbus-cli/nimbus-cli-getting-started",isDocsHomePage:!1,title:"Getting Started",description:"All nimbus-cli commands need an --app and --channel parameter. These should correspond to the app as it is installed on the simulator or emulator.",source:"@site/docs/deep-dives/mobile/nimbus-cli/20-getting-started.mdx",sourceDirName:"deep-dives/mobile/nimbus-cli",slug:"/nimbus-cli/getting-started",permalink:"/nimbus-cli/getting-started",editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/deep-dives/mobile/nimbus-cli/20-getting-started.mdx",tags:[],version:"current",sidebarPosition:20,frontMatter:{id:"nimbus-cli-getting-started",title:"Getting Started",slug:"/nimbus-cli/getting-started"},sidebar:"sidebar",previous:{title:"Installation Guide",permalink:"/nimbus-cli/install"},next:{title:"Opening and resetting the app",permalink:"/nimbus-cli/opening-and-resetting"}},s=[{value:"<code>list</code>",id:"list",children:[]},{value:"<code>enroll</code>",id:"enroll",children:[{value:"Validating experiments",id:"validating-experiments",children:[]},{value:"Testing interactions between experiments and rollouts",id:"testing-interactions-between-experiments-and-rollouts",children:[]},{value:"Console output",id:"console-output",children:[]}]},{value:"<code>reset-app</code>",id:"reset-app",children:[]},{value:"<code>unenroll</code>",id:"unenroll",children:[]}],d={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"All ",(0,i.kt)("inlineCode",{parentName:"p"},"nimbus-cli")," commands need an ",(0,i.kt)("inlineCode",{parentName:"p"},"--app")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"--channel")," parameter. These should correspond to the app as it is installed on the simulator or emulator."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"App Name"),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"th"},"--app")," value"),(0,i.kt)("th",{parentName:"tr",align:null},"Available values for ",(0,i.kt)("inlineCode",{parentName:"th"},"--channel")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Firefox for Android"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"fenix")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"developer"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"nightly"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"beta"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"release"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Firefox for iOS"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"firefox_ios")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"developer"),",",(0,i.kt)("inlineCode",{parentName:"td"},"beta"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"release"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Focus for Android"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"focus_android")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"developer"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"nightly"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"beta"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"release"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Focus for iOS"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"focus_ios")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"developer"),",",(0,i.kt)("inlineCode",{parentName:"td"},"beta"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"release"))))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"app")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"channel")," are how they are known to Nimbus. The ",(0,i.kt)("inlineCode",{parentName:"p"},"channel")," corresponds to the build type: e.g."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fenix")," ",(0,i.kt)("inlineCode",{parentName:"li"},"developer")," is the Debug build variant of Firefox for Android."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"firefox_ios")," ",(0,i.kt)("inlineCode",{parentName:"li"},"developer")," is the ",(0,i.kt)("inlineCode",{parentName:"li"},"Fennec")," build configuration of Firefox for iOS.")),(0,i.kt)("p",null,"You can also specify a ",(0,i.kt)("inlineCode",{parentName:"p"},"--device-id")," for working with multiple simulator/emulator/device at the same time."),(0,i.kt)("h2",{id:"list"},(0,i.kt)("inlineCode",{parentName:"h2"},"list")),(0,i.kt)("p",null,"You can find experiments you want to use by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"list")," command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"nimbus-cli --app fenix --channel developer list\n")),(0,i.kt)("p",null,"The above command gives a formatted table of experiments, with the targeted channel, the affected features and names of the branches; here is an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Experiment slug                                                   | Channel   | Features                      | Branches\n------------------------------------------------------------------+-----------+-------------------------------+-------------------\n android-research-surface-validation                              | release   | messaging                     | control, treatment\n viewpoint-rolling-week-2-expansion-android                       | release   | messaging                     | treatment\n release-android-onboarding-redesign                              | release   | juno-onboarding               | control, treatment-a\n fx-release-android-re-engagement-notifications-114-rollout       | release   | re-engagement-notification    | control\n")),(0,i.kt)("p",null,"You can see the preview collection, by adding a ",(0,i.kt)("inlineCode",{parentName:"p"},"preview")," parameter."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"nimbus-cli --app fenix --channel developer list preview\n")),(0,i.kt)("p",null,"You can also use:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"production")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"release"),", or nothing to specify the production server."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"preview")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"production/preview")," to specify the ",(0,i.kt)("inlineCode",{parentName:"li"},"preview")," collection"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stage")," to specify the staging server"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stage/preview")," to see the staging server and the preview collection of the staging server.")),(0,i.kt)("h2",{id:"enroll"},(0,i.kt)("inlineCode",{parentName:"h2"},"enroll")),(0,i.kt)("p",null,"You can start the app enrolled in a branch of a given experiment."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"nimbus-cli --app fenix --channel developer \\\n    enroll $EXPERIMENT --branch $BRANCH\n")),(0,i.kt)("p",null,"This will download the experiment from Remote Settings, and then make changes to it to make it inevitable that the Nimbus SDK will enroll the experiment with that branch:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"changes the channel of the experiment to that of the installed app"),(0,i.kt)("li",{parentName:"ul"},"set the targeting ",(0,i.kt)("inlineCode",{parentName:"li"},'"true"')),(0,i.kt)("li",{parentName:"ul"},"the bucketing for the particular branch as 100%"),(0,i.kt)("li",{parentName:"ul"},"set the enrollment paused flag to ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,i.kt)("p",null,"Once these changes have been made, the app is launched, and the experiment is injected into the SDK."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"nimbus-cli --app fenix --channel developer \\\n    enroll android-research-surface-validation --branch treatment\n")),(0,i.kt)("p",null,"If you're downloading the experiment from ",(0,i.kt)("inlineCode",{parentName:"p"},"preview"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"stage")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"stage/preview"),", you should prepend the server slug to the experiment slug:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"nimbus-cli --app fenix --channel developer \\\n    enroll preview/mobile-default-browser-homepage-banner-copy-test --branch treatment-c\n")),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--preserve-targeting")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"--preserve-bucketing")," options to preserve the targeting and bucketing."),(0,i.kt)("p",null,"Enrolled experiments should persist across restarts of the app, and fetching of new experiments is disabled."),(0,i.kt)("h3",{id:"validating-experiments"},"Validating experiments"),(0,i.kt)("p",null,"By default, the experiment branches will be validated against the feature manifest. This ",(0,i.kt)("a",{parentName:"p",href:"/nimbus-cli/fml"},"can be configured with ",(0,i.kt)("inlineCode",{parentName:"a"},"--version VERSION"),", ",(0,i.kt)("inlineCode",{parentName:"a"},"--ref REF")," and ",(0,i.kt)("inlineCode",{parentName:"a"},"--manifest FILE")," parameters"),", or disabled with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--no-validate")," parameter."),(0,i.kt)("h3",{id:"testing-interactions-between-experiments-and-rollouts"},"Testing interactions between experiments and rollouts"),(0,i.kt)("p",null,"In addition to an experiment slug and branch, zero or more experiment slugs can be specified."),(0,i.kt)("p",null,"These ",(0,i.kt)("em",{parentName:"p"},"must")," be rollouts. This is to test the interactions between rollouts and experiments acting upon the same feature."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"nimbus-cli --app fenix --channel developer enroll mobile-default-browser-cta-copy-test --branch treatment viewpoint-rolling-week-2-expansion-android\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--preserve-targeting")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"--preserve-bucketing")," acts on these rollouts too."),(0,i.kt)("h3",{id:"console-output"},"Console output"),(0,i.kt)("p",null,"The corresponding ",(0,i.kt)("inlineCode",{parentName:"p"},"adb")," commands and ",(0,i.kt)("inlineCode",{parentName:"p"},"xcrun")," commands are shown in yellow. These can be useful for attaching to bug reports as part of the Steps To Reproduce (STR). The ",(0,i.kt)("inlineCode",{parentName:"p"},"nimbus-cli")," command used will also be useful for STR."),(0,i.kt)("h2",{id:"reset-app"},(0,i.kt)("inlineCode",{parentName:"h2"},"reset-app")),(0,i.kt)("p",null,"The app can be put back into the just installed state. On Android, there is an ",(0,i.kt)("inlineCode",{parentName:"p"},"adb")," command to do this, but not in iOS. For iOS:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the app container for the given simulator is deleted."),(0,i.kt)("li",{parentName:"ul"},"the app's group containers for the given simulator are all deleted.")),(0,i.kt)("p",null,"For both the command is the same:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"nimbus-cli --app fenix --channel developer reset-app\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"nimbus-cli --app firefox_ios --channel developer reset-app\n")),(0,i.kt)("h2",{id:"unenroll"},(0,i.kt)("inlineCode",{parentName:"h2"},"unenroll")),(0,i.kt)("p",null,"From time to time you may need to test how the app responds to unenrolling from an experiment. You can force the unenrollment from all previously enrolled experiments with this command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"nimbus-cli --app fenix --channel developer \\\n    unenroll\n")))}m.isMDXComponent=!0}}]);