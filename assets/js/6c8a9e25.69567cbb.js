"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[3444],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),c=i,h=d["".concat(o,".").concat(c)]||d[c]||m[c]||a;return r?n.createElement(h,l(l({ref:t},u),{},{components:r})):n.createElement(h,l({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:i,l[1]=s;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8956:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const a={id:"2023-Q2",title:"What's New in Nimbus - Q2 2023",slug:"/whats-news/2023-Q2",sidebar_label:"What's Newsletter Q2 2023"},l=void 0,s={unversionedId:"whats-news/2023/2023-Q2",id:"whats-news/2023/2023-Q2",title:"What's New in Nimbus - Q2 2023",description:"The nimbus-cli",source:"@site/docs/whats-news/2023/2023-q2.mdx",sourceDirName:"whats-news/2023",slug:"/whats-news/2023-Q2",permalink:"/whats-news/2023-Q2",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/whats-news/2023/2023-q2.mdx",tags:[],version:"current",sidebarPosition:2023,frontMatter:{id:"2023-Q2",title:"What's New in Nimbus - Q2 2023",slug:"/whats-news/2023-Q2",sidebar_label:"What's Newsletter Q2 2023"},sidebar:"sidebar",previous:{title:"Features",permalink:"/capabilities"},next:{title:"What's Newsletter March 2023",permalink:"/2023-03"}},o={},p=[{value:"The <code>nimbus-cli</code>",id:"the-nimbus-cli",level:2},{value:"Jetstream",id:"jetstream",level:2},{value:"Computing the date for expected results",id:"computing-the-date-for-expected-results",level:3},{value:"Experimenter",id:"experimenter",level:2},{value:"Release date for First Run experiments",id:"release-date-for-first-run-experiments",level:3},{value:"Desktop Rollout re-enrollment and resizing",id:"desktop-rollout-re-enrollment-and-resizing",level:2}],u={toc:p},d="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"the-nimbus-cli"},"The ",(0,i.kt)("inlineCode",{parentName:"h2"},"nimbus-cli")),(0,i.kt)("p",null,"\ud83d\udd25 The ",(0,i.kt)("inlineCode",{parentName:"p"},"nimbus-cli")," was conceived at the team's Q2 workweek. It is designed to help QA engineers test mobile first run experiments, but has become a tool useful for interacting, inspecting and testing all experiments running on the supported mobile apps, and any feature that those apps configure via Nimbus."),(0,i.kt)("p",null,"Installation is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"curl --proto '=https' --tlsv1.2 -sSf https://raw.githubusercontent.com/mozilla/application-services/main/install-nimbus-cli.sh | bash\n")),(0,i.kt)("p",null,"Further details are at ",(0,i.kt)("a",{parentName:"p",href:"/nimbus-cli"},"https://experimenter.info/nimbus-cli"),"."),(0,i.kt)("h2",{id:"jetstream"},"Jetstream"),(0,i.kt)("h3",{id:"computing-the-date-for-expected-results"},"Computing the date for expected results"),(0,i.kt)("p",null,"\ud83d\udd27 We are now computing the date that the Jetstream results will be available for a given experiment. This new value is based on enrollment end date (or proposed enrollment end date if enrollment is not yet ended)."),(0,i.kt)("img",{style:{border:"1px solid grey"},title:"expected-results",src:"/img/whats-news/expected-results.png"}),(0,i.kt)("h2",{id:"experimenter"},"Experimenter"),(0,i.kt)("h3",{id:"release-date-for-first-run-experiments"},"Release date for First Run experiments"),(0,i.kt)("p",null,"Our approach for calculating dates and duration for experiments did not previously take the release trains into account. For example, a first run experiment targeting Firefox desktop v123 might be launched (status=Live) on 1/2/2023. However, v123 might not be released until 1/15/2023. The start_date for this experiment will therefore be 1/2/2023, but users will not start seeing it until 1/15 when the version is released. "),(0,i.kt)("p",null,'We added another date, "proposed release date" or "first run release date", for first-run mobile experiments which will represent the ',(0,i.kt)("a",{parentName:"p",href:"http://whattrainisitnow.com/"},"release date of the browser version")," that is being targeted by the user. "),(0,i.kt)("p",null,"This date gives us the ability to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\udcc8 Correctly compute enrollment and proposed end dates based on when users will actually start getting the release version"),(0,i.kt)("li",{parentName:"ul"},"\u23f0 Send reminder emails to experiment owners at the right time so that they can end enrollment/end experiments")),(0,i.kt)("p",null,"This new field shows up on the Audience page of the experiment, and is also viewable on the Summary page and on the timeline:"),(0,i.kt)("img",{style:{border:"1px solid grey"},title:"release_date_audience",src:"/img/whats-news/release_date_audience.png"}),(0,i.kt)("p",{align:"center"}," ",(0,i.kt)("em",null,'"First Run Release Date" field on the Audience page')," "),(0,i.kt)("br",null),(0,i.kt)("img",{style:{border:"1px solid grey"},title:"release_date_timeline",src:"/img/whats-news/release_date_timeline.png"}),(0,i.kt)("p",{align:"center"}," ",(0,i.kt)("em",null,'"Release Date" field on the Summary page timeline')," "),(0,i.kt)("br",null),(0,i.kt)("img",{style:{border:"1px solid grey"},title:"release_date_summary",src:"/img/whats-news/release_date_summary.png"}),(0,i.kt)("p",{align:"center"}," ",(0,i.kt)("em",null,'"Release Date" field in the Audience section of the Summary page')," "),(0,i.kt)("h2",{id:"desktop-rollout-re-enrollment-and-resizing"},"Desktop Rollout re-enrollment and resizing"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\udcc8 You can now re-enroll in rollouts that have increased in size (",(0,i.kt)("a",{parentName:"li",href:"https://bugzilla.mozilla.org/show_bug.cgi?id=1833248"},"Bug 1833248"),")"),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udcaa When force-enrolling you can add ",(0,i.kt)("inlineCode",{parentName:"li"},"&apply_targeting")," to the URL to check the targeting instead of skipping it (",(0,i.kt)("a",{parentName:"li",href:"https://bugzilla.mozilla.org/show_bug.cgi?id=1736587"},"Bug 1736587"),")")))}m.isMDXComponent=!0}}]);