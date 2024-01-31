"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[7902],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=r,d=c["".concat(l,".").concat(h)]||c[h]||m[h]||i;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9260:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={id:"2023-Q3",sidebar_position:2,title:"What's New in Nimbus - Q3 2023",slug:"2023-Q3",sidebar_label:"What's Newsletter Q3 2023"},o=void 0,s={unversionedId:"whats-news/2023/2023-Q3",id:"whats-news/2023/2023-Q3",title:"What's New in Nimbus - Q3 2023",description:"Mobile",source:"@site/docs/whats-news/2023/2023-q3.mdx",sourceDirName:"whats-news/2023",slug:"/whats-news/2023/2023-Q3",permalink:"/whats-news/2023/2023-Q3",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/whats-news/2023/2023-q3.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"2023-Q3",sidebar_position:2,title:"What's New in Nimbus - Q3 2023",slug:"2023-Q3",sidebar_label:"What's Newsletter Q3 2023"},sidebar:"sidebar",previous:{title:"What's Newsletter Q4 2023",permalink:"/whats-news/2023-Q4"},next:{title:"What's Newsletter Q2 2023",permalink:"/whats-news/2023-Q2"}},l={},p=[{value:"Mobile",id:"mobile",level:2},{value:"Desktop",id:"desktop",level:2},{value:"Jetstream &amp; Results Analysis",id:"jetstream--results-analysis",level:2},{value:"Cirrus",id:"cirrus",level:2},{value:"Experimenter",id:"experimenter",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"mobile"},"Mobile"),(0,r.kt)("p",null,"\ud83e\udd16\ud83c\udf4f\u2601\ufe0f ",(0,r.kt)("a",{parentName:"p",href:"https://mozilla-hub.atlassian.net/browse/EXP-3786"},"Pre-built nimbus-cli")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"We can now use pre-built ",(0,r.kt)("inlineCode",{parentName:"p"},"nimbus-cli")," for FML transformations. This change installs the nimbus-cli as part of deployment and uses this to fetch and transform FML files from the Firefox Mobile, Focus, and Monitor apps. This means faster deploy times and we can remove the ",(0,r.kt)("inlineCode",{parentName:"p"},".experimenter.yaml")," files from the apps' repos and build scripts. (jhugman)")),(0,r.kt)("p",null,"\ud83c\udf4f ",(0,r.kt)("a",{parentName:"p",href:"https://mozilla-hub.atlassian.net/browse/EXP-3613"},"Support for testing on iOS devices to nimbus-cli")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Previously, we had been restricted to tested on iOS ",(0,r.kt)("em",{parentName:"p"},"simulators")," only, which meant a tester needed to have Xcode installed on a Mac, and certain OS integrations were not testable. This new capability opens up testing experiments and features to many more people, and on AppStore released apps and on real devices. The QA team have said that ",(0,r.kt)("inlineCode",{parentName:"p"},"nimbus-cli"),' has made "testing ',"[on mobile]",' a cakewalk", and on device testing as "mind-blowing". (jhugman)')),(0,r.kt)("h2",{id:"desktop"},"Desktop"),(0,r.kt)("p",null,"\ud83d\udcbb ",(0,r.kt)("a",{parentName:"p",href:"https://mozilla-hub.atlassian.net/browse/EXP-3708"},"Rich JSON editing")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The Branches page now has a new editor for entering branch value! The new editor supports auto-completion of most features on Desktop and Mobile, as well as syntax hilighting and JSON linting. It finds errors in your values live as you type them and highlight them for easy correction! (brennie)")),(0,r.kt)("img",{style:{border:"1px solid grey"},title:"json-editing-1",src:"/img/whats-news/json-editing-1.png"}),(0,r.kt)("br",null),(0,r.kt)("img",{style:{border:"1px solid grey"},title:"json-editing-2",src:"/img/whats-news/json-editing-2.png"}),(0,r.kt)("h2",{id:"jetstream--results-analysis"},"Jetstream & Results Analysis"),(0,r.kt)("p",null,"\ud83d\udcc8 ",(0,r.kt)("a",{parentName:"p",href:"https://mozilla-hub.atlassian.net/browse/EXP-3345"},"Automated population sizing")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Population sizing tool results are now available (for certain applications/locales/countries) in Experimenter during sizing configuration. (mwilliams)")),(0,r.kt)("p",null,"\ud83d\udcc8 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mozilla/jetstream/issues/1867"},"Support for downsampling")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Previously, if a job failed due to memory issues, a Data Scientist would have to manually override the enrollments query to do downsampling. This is complex, time-consuming, and error-prone. Jetstream now has the ",(0,r.kt)("inlineCode",{parentName:"p"},"sample_size")," (an integer 1-100 representing the sample rate) as a config option.")),(0,r.kt)("h2",{id:"cirrus"},"Cirrus"),(0,r.kt)("p",null,"\u2601\ufe0f  ",(0,r.kt)("a",{parentName:"p",href:"https://mozilla-hub.atlassian.net/browse/EXP-3549"},"Glean integration for Cirrus")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In order to get enrollment telemetry for Cirrus, we hooked up the Glean Python SDK. (ykhurana)")),(0,r.kt)("p",null,"\u2601\ufe0f  ",(0,r.kt)("a",{parentName:"p",href:"https://mozilla-hub.atlassian.net/browse/EXP-3572"},"Record enrollment metrics")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Add the ability to record enrollment metrics for Cirrus clients. (chumphreys)")),(0,r.kt)("p",null,"\u2601\ufe0f  ",(0,r.kt)("a",{parentName:"p",href:"https://mozilla-hub.atlassian.net/browse/EXP-3664"},"Demo app")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A simple test app with the node backend and react frontend that integrates cirrus that we can use for local testing and integration. (ykhurana)")),(0,r.kt)("p",null,"\u2601\ufe0f  ",(0,r.kt)("a",{parentName:"p",href:"https://mozilla-hub.atlassian.net/browse/EXP-3383"},"Configurations for integrating Monitor")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Adding new application options, configurations, and collections to allow Monitor to be hooked up with Cirrus. (ykhurana)")),(0,r.kt)("h2",{id:"experimenter"},"Experimenter"),(0,r.kt)("p",null,"\ud83d\ude4c ",(0,r.kt)("a",{parentName:"p",href:"https://mozilla-hub.atlassian.net/browse/EXP-3601"},"Inclusion and exclusion targeting")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Experiments now have an extra dimension of targeting: participation in other experiments and rollouts! This allows experiment owners to easily launch follow-up studies to the same cohort of users. Additionally, exclusion can be used to prevent enrolling in one experiment if they're already in a conflicting experiment on a different feature. This capability enables experiment owners to launch more experiments -- and especially mobile messaging campaigns -- without worrying that users will have conflicting experiences. (brennie)")),(0,r.kt)("p",null,"\ud83d\ude4c ",(0,r.kt)("a",{parentName:"p",href:"https://mozilla-hub.atlassian.net/browse/EXP-4022"},"New fields in Takeaways section")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'Three new fields have been added to the Takeaways section for completed experiments: a checkbox for "QBR notable learnings", a checkbox for "Promising metric gains" (a.k.a. "Statistically Significant DaU Gain"), and a free-form text area for "Gain amount" that allows the user to dig deeper into what metrics changed and the significance. In addition to that, the two checkbox fields have been added as a filter on the homepage to allow easy access to impactful experiments. (erichards)')),(0,r.kt)("img",{style:{border:"1px solid grey"},title:"new-fields-filter",src:"/img/whats-news/takeaways_new_fields_filters.png",className:"img-sm-left"}),(0,r.kt)("br",null),(0,r.kt)("img",{style:{border:"1px solid grey"},title:"takeaways-new-fields",src:"/img/whats-news/takeaways_new_fields.png"}),(0,r.kt)("p",null,"\ud83d\ude4c   ",(0,r.kt)("a",{parentName:"p",href:"https://mozilla-hub.atlassian.net/browse/EXP-3222"},"Outreachy History Tracker Project")," "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'This work was completed by our Outreachy intern. This introduces a new page which show the changelogs of a particualr experiment within the existing project. The link to this page is now available underneath "Summary" on the left sidebar of an experiment\'s detail view. (ykhurana, avi-88)')),(0,r.kt)("img",{style:{border:"1px solid grey"},title:"history-sidebar-draft",src:"/img/whats-news/history-draft.png",className:"img-sm-left"})," ",(0,r.kt)("img",{style:{border:"1px solid grey"},title:"history-sidebar-live",src:"/img/whats-news/history-live.png",className:"img-sm-left"}))}m.isMDXComponent=!0}}]);