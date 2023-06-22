(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[6402],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return d}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(l,".").concat(d)]||u[d]||c[d]||r;return n?i.createElement(h,o(o({ref:t},m),{},{components:n})):i.createElement(h,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3263:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var i=n(2122),a=n(9756),r=(n(7294),n(3905)),o={id:"data-scientists-root",title:"Experimentation for data scientists",slug:"/data-scientists"},s=void 0,l={unversionedId:"getting-started/data-scientists/data-scientists-root",id:"getting-started/data-scientists/data-scientists-root",isDocsHomePage:!1,title:"Experimentation for data scientists",description:"This page describes the roles data scientists play in experimentation at Mozilla.",source:"@site/docs/getting-started/data-scientists/data-scientists-root.md",sourceDirName:"getting-started/data-scientists",slug:"/data-scientists",permalink:"/data-scientists",editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/getting-started/data-scientists/data-scientists-root.md",tags:[],version:"current",frontMatter:{id:"data-scientists-root",title:"Experimentation for data scientists",slug:"/data-scientists"},sidebar:"sidebar",previous:{title:"Experiment Sizing Command-line Interface",permalink:"/auto-sizing-cli"},next:{title:"Sizing Experiments Using Mozanalysis",permalink:"/experiment-sizing"}},p=[{value:"What is the role of experimentation at Mozilla?",id:"what-is-the-role-of-experimentation-at-mozilla",children:[]},{value:"Collaborating with experiment owners",id:"collaborating-with-experiment-owners",children:[]},{value:"Sampling framework",id:"sampling-framework",children:[]},{value:"Sample size recommendations",id:"sample-size-recommendations",children:[{value:"Filtering",id:"filtering",children:[]},{value:"Multiple experiments on the same feature",id:"multiple-experiments-on-the-same-feature",children:[]},{value:"Non-normal distributions",id:"non-normal-distributions",children:[]}]},{value:"Metrics and statistics",id:"metrics-and-statistics",children:[]},{value:"Watch out for",id:"watch-out-for",children:[]}],m={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page describes the roles data scientists play in experimentation at Mozilla."),(0,r.kt)("p",null,"Some other things you may be looking for are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Documentation about using ",(0,r.kt)("a",{parentName:"li",href:"/jetstream/jetstream"},"Jetstream"),", Mozilla's experiment analysis tool"),(0,r.kt)("li",{parentName:"ul"},"Technical documentation about ",(0,r.kt)("a",{parentName:"li",href:"https://docs.telemetry.mozilla.org/tools/experiments.html"},"datasets used in experimentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://mozilla-hub.atlassian.net/wiki/spaces/DATA/overview"},"Process documentation")," for the Mozilla data science organization\n(internal link)")),(0,r.kt)("h2",{id:"what-is-the-role-of-experimentation-at-mozilla"},"What is the role of experimentation at Mozilla?"),(0,r.kt)("p",null,"Experimentation informs product decision-making at Mozilla.\nThis suite of experimentation tools is designed for product managers and other investigation owners to A/B test hypotheses they have about new and existing products and features.\n",(0,r.kt)("a",{parentName:"p",href:"https://experimenter.services.mozilla.com/nimbus/"},"Experimenter")," (internal link)\nand the ",(0,r.kt)("a",{parentName:"p",href:"https://mozilla-hub.atlassian.net/wiki/spaces/FIREFOX/pages/11043456/Experiments+Previously+Reviewed"},"experiment review repository")," (internal link)\ncontain examples of completed and active experiments."),(0,r.kt)("h2",{id:"collaborating-with-experiment-owners"},"Collaborating with experiment owners"),(0,r.kt)("p",null,"Data scientists support experiment owners in setting up and interpreting their experiments.\n",(0,r.kt)("a",{parentName:"p",href:"https://mozilla-hub.atlassian.net/wiki/spaces/FIREFOX/pages/11043391/Experiment+Design+Process"},"The Firefox experiment design process")," (internal link)\ndescribes the process for both data scientists and stakeholders."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/155EUgzn22VTX8mFwesSROT3Z6JORSfb5VyoMoLra7ws/edit#"},"The Nimbus onboarding guide"),"\nexplains how to set up an experiment in the experiment console."),(0,r.kt)("p",null,"The support that experiment owners need from data scientists during experiment set-up includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"validating that the experimental design will answer their questions"),(0,r.kt)("li",{parentName:"ul"},"consulting on telemetry specifications"),(0,r.kt)("li",{parentName:"ul"},"sample size recommendations"),(0,r.kt)("li",{parentName:"ul"},"writing ",(0,r.kt)("a",{parentName:"li",href:"/jetstream/metrics"},"custom metrics")," if needed"),(0,r.kt)("li",{parentName:"ul"},"guidance about interpretation")),(0,r.kt)("h2",{id:"sampling-framework"},"Sampling framework"),(0,r.kt)("p",null,"Each experiment begins with an enrollment period with fixed start and end dates during which clients can enroll in the experiment. After the declared enrollment period ends, we modify the recipe to instruct clients to stop enrolling, and ignore clients that report enrollment anyway. Because enrollment depends on the client checking for software updates, samples will be skewed towards active users at the beginning of the enrollment period. We typically leave enrollment open for a week to account for weekly seasonality (e.g. weekday vs. weekend users) and to give clients who are active less often a chance to enroll. This makes our experiment population essentially a sample of the weekly active users (WAU)."),(0,r.kt)("p",null,"For each client, experiment metrics are analyzed over a defined period of time from enrollment. We report results for an analysis period (e.g. the first day after enrollment) after all clients have had a chance to experience the treatment for that duration. The ",(0,r.kt)("a",{parentName:"p",href:"/jetstream/jetstream#analysis-paradigm"},"Jetstream overview")," describes the analysis paradigm in more depth and how it relates to the length of an experiment."),(0,r.kt)("p",null,"For more nuances about sampling, enrollment and exposure (whether or not the client actually saw the treatment or control), see ",(0,r.kt)("a",{parentName:"p",href:"/client-sdk-states-and-lifecycle"},"the experiment lifecycle overview"),"."),(0,r.kt)("h2",{id:"sample-size-recommendations"},"Sample size recommendations"),(0,r.kt)("p",null,"Sample size recommendations are operationalized as the fraction of the Firefox population that should consider enrolling in your recipe.  This is determined by discussing your ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1_bWn_1y5x1zf6zl7Loj4O1qKnVdxzIMXOawIpf32CsM/edit"},"experiment design document")," at either ",(0,r.kt)("a",{parentName:"p",href:"https://mozilla-hub.atlassian.net/wiki/spaces/DATA/pages/6849684/Office+Hours"},"desktop or mobile data science office hours"),"."),(0,r.kt)("h3",{id:"filtering"},"Filtering"),(0,r.kt)("p",null,"Nimbus can filter on several factors, including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"channel"),(0,r.kt)("li",{parentName:"ul"},"minimum version"),(0,r.kt)("li",{parentName:"ul"},"country"),(0,r.kt)("li",{parentName:"ul"},"locale"),(0,r.kt)("li",{parentName:"ul"},"OS"),(0,r.kt)("li",{parentName:"ul"},"client preference values (on desktop)"),(0,r.kt)("li",{parentName:"ul"},"other factors")),(0,r.kt)("p",null,"This additional filtering always happens logically ",(0,r.kt)("em",{parentName:"p"},"after")," a client passes the sizing filter.\nYou must inflate your population fraction to account for filtering."),(0,r.kt)("p",null,"For a concrete example, imagine that Firefox WAU is 1,000 clients. 20% of WAU is from Canada. You wish to deploy an experiment to Canadian users. Your power analysis says that you need 50 clients in total to enroll. You should specify a population fraction of at least 25%, because 1,000 ","*"," 0.2 (from Canada) ","*"," 0.25 (your filter) = 50."),(0,r.kt)("h3",{id:"multiple-experiments-on-the-same-feature"},"Multiple experiments on the same feature"),(0,r.kt)("p",null,"If there are already Live experiments on the same feature as your experiment, you ",(0,r.kt)("strong",{parentName:"p"},"sometimes")," need to inflate the sample size to account for clients enrolled in the existing Live experiments that the Nimbus front-end is not aware of. Instructions below."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Find the most recent experiment that launched for your feature on your channel."),(0,r.kt)("li",{parentName:"ol"},"Go to the recipe JSON for that experiment. You'll see something like:\n",(0,r.kt)("inlineCode",{parentName:"li"},' "bucketConfig": {\n    "count": 3478,\n    "namespace": "firefox-desktop-urlbar-release-2",\n    "randomizationUnit": "normandy_id",\n    "start": 3678,\n    "total": 10000\n  },')),(0,r.kt)("li",{parentName:"ol"},"The example JSON above shows that the most recent experiment used buckets 3678 to 7156 (= 3678 + 3478). If your new experiment needs less than 28.44% (= (10,000 - 7156)/100) of the clients, then you do not need to inflate the percentage to account for Nimbus being unaware of clients enrolled in previous experiments."),(0,r.kt)("li",{parentName:"ol"},'If your new experiment needs more than 28.44% of the clients, then you must inflate the percentage to account for 71.56% of the clients already being enrolled in experiments. For example, if your new experiment needs 30% of the clients, then you must input 41.92% (= 30% / 71.56%) into "Population %" in the Nimbus front-end.')),(0,r.kt)("h3",{id:"non-normal-distributions"},"Non-normal distributions"),(0,r.kt)("p",null,"Most of our telemetry metrics are not normally distributed. A couple approaches that you may find helpful are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"powering a Mann-Whitney U-test. ",(0,r.kt)("a",{parentName:"li",href:"https://www.psychologie.hhu.de/arbeitsgruppen/allgemeine-psychologie-und-arbeitspsychologie/gpower"},"Gpower")," implements the Mann-Whitney U-test."),(0,r.kt)("li",{parentName:"ul"},"log-transforming the data and the expected difference and powering a ",(0,r.kt)("em",{parentName:"li"},"t")," test in log space.")),(0,r.kt)("h2",{id:"metrics-and-statistics"},"Metrics and statistics"),(0,r.kt)("p",null,"Two weeks after the beginning of the enrollment period, Jetstream will begin to produce auto-generated reports summarizing the results of the experiment. ",(0,r.kt)("a",{parentName:"p",href:"https://experimenter.services.mozilla.com/nimbus/custom-messaging-in-aboutwelcome-for-chrome-users-to-import/results"},"Here is one such report")," (internal link)."),(0,r.kt)("p",null,"To see which metrics are included by default to this auto-generated report as well as information on adding custom and default metrics, statistics and confidence, see the ",(0,r.kt)("a",{parentName:"p",href:"/jetstream/jetstream"},"Jetstream documentation"),"."),(0,r.kt)("p",null,"If you want to perform some analysis by hand, ",(0,r.kt)("a",{parentName:"p",href:"https://docs.telemetry.mozilla.org/datasets/jetstream.html"},"Jetstream datasets")," are also available in BigQuery. Many telemetry datasets also include an ",(0,r.kt)("inlineCode",{parentName:"p"},"experiments")," field, which when filtered on the experiment slug, can identify rows in the dataset enrolled in the experiment."),(0,r.kt)("p",null,"For certain experiments, data scientists may need to construct confidence intervals for relative or percent differences. Example implementations can be found in ",(0,r.kt)("a",{parentName:"p",href:"https://colab.research.google.com/drive/1sVOdVdraPwec_Hit4OiaDDH4TJGzaIcc?usp=sharing"},"this notebook"),"."),(0,r.kt)("h2",{id:"watch-out-for"},"Watch out for"),(0,r.kt)("p",null,"Here are other things to watch out for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Are there other experiments taking place at the same time as yours? How might that affect the interpretation of your results, or limit your sample sizes?"),(0,r.kt)("li",{parentName:"ul"},"Are there multiple implementation phases to this new feature? Does Product want to compare results from one phase to another?"),(0,r.kt)("li",{parentName:"ul"},"...")))}c.isMDXComponent=!0}}]);