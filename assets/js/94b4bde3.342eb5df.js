(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[7455],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=m(n),f=i,g=u["".concat(p,".").concat(f)]||u[f]||c[f]||a;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var m=2;m<a;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5425:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return m},default:function(){return c}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o={id:"fenix-experiments-getting-started",title:"Implementing an experiment",slug:"/fenix-engineers"},l=void 0,p={unversionedId:"fenix-experiments-getting-started",id:"fenix-experiments-getting-started",isDocsHomePage:!1,title:"Implementing an experiment",description:"Client configuration prechecks",source:"@site/docs/fenix-experiments-getting-started.md",sourceDirName:".",slug:"/fenix-engineers",permalink:"/fenix-engineers",editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/fenix-experiments-getting-started.md",tags:[],version:"current",frontMatter:{id:"fenix-experiments-getting-started",title:"Implementing an experiment",slug:"/fenix-engineers"},sidebar:"sidebar",previous:{title:"Validating Experiments",permalink:"/validating-experiments"},next:{title:"Testing on mobile",permalink:"/android-frontend-testing"}},m=[{value:"Client configuration prechecks",id:"client-configuration-prechecks",children:[]},{value:"Fenix setup",id:"fenix-setup",children:[{value:"Example",id:"example",children:[]}]},{value:"Local Testing",id:"local-testing",children:[]}],s={toc:m};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"client-configuration-prechecks"},"Client configuration prechecks"),(0,a.kt)("p",null,"\u2705 Get a copy of the experiment brief for your experiment from the ",(0,a.kt)("a",{parentName:"p",href:"https://mana.mozilla.org/wiki/x/FaXNBw"},"Experiments Repository")," mana page."),(0,a.kt)("p",null,"\u2705 Assure that your experiment brief contains values for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"experiment name"),(0,a.kt)("li",{parentName:"ul"},"featureID"),(0,a.kt)("li",{parentName:"ul"},"branch names (for a basic a/b experiment, prefer ",(0,a.kt)("em",{parentName:"li"},"control")," and ",(0,a.kt)("em",{parentName:"li"},"treatment"),")")),(0,a.kt)("p",null,"\u2705 Confirm the ",(0,a.kt)("strong",{parentName:"p"},"featureID")," is added to the experimenter list of console values."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"NOTE: featureID setup access is controlled via experimenter Django admin."),(0,a.kt)("p",{parentName:"blockquote"},"Please ask for help in the ",(0,a.kt)("inlineCode",{parentName:"p"},"#ask-experimenter")," channel")),(0,a.kt)("h2",{id:"fenix-setup"},"Fenix setup"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Update ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mozilla-mobile/fenix/blob/master/app/src/main/java/org/mozilla/fenix/experiments/Experiments.kt"},"experiments.kt")," ",(0,a.kt)("strong",{parentName:"li"},"Experiment")," to include the featureID string as your experiment constant."),(0,a.kt)("li",{parentName:"ol"},"Confirm ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mozilla-mobile/fenix/blob/master/app/src/main/java/org/mozilla/fenix/experiments/Experiments.kt"},"experiments.kt")," ",(0,a.kt)("strong",{parentName:"li"},"ExperimentBranch")," contains the branch names you intend to use or add them if you are using something other than the ",(0,a.kt)("em",{parentName:"li"},"control")," and ",(0,a.kt)("em",{parentName:"li"},"treatment")," default values."),(0,a.kt)("li",{parentName:"ol"},"Initialize your experiment in the appropriate location and call ",(0,a.kt)("strong",{parentName:"li"},"getExperimentBranch")," to get your experiment.")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"This is an example of the configuration of a Fenix ",(0,a.kt)("strong",{parentName:"p"},"Bookmarks A/B")," experiment on the \u201c",(0,a.kt)("strong",{parentName:"p"},"Bookmarks Icon"),"\u201d (bookmark-icon) featureID using the ",(0,a.kt)("strong",{parentName:"p"},"treatment")," and ",(0,a.kt)("strong",{parentName:"p"},"control")," branches."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Experiments.kt"',title:'"Experiments.kt"'},'class Experiments {\n    companion object {\n        const val BOOKMARK_ICON = "bookmark-icon"\n    }\n}\n\nclass ExperimentBranch {\n    companion object {\n        const val TREATMENT = "treatment"\n        const val CONTROL = "control"\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="HomeMenu.kt"',title:'"HomeMenu.kt"'},"\nval experiments = context.components.analytics.experiments\n        val bookmarksIcon = experiments.getExperimentBranch(Experiments.BOOKMARK_ICON)\n            .let {\n                when (it) {\n                    ExperimentBranch.TREATMENT -> R.drawable.ic_bookmark_list\n                    else -> R.drawable.ic_bookmark_filled\n                }\n            }\n")),(0,a.kt)("h2",{id:"local-testing"},"Local Testing"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Setup your local Fenix build to point to the experimenter\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mozilla-mobile/fenix#using-nimbus-servers-during-local-development"},"staging url"),"."),(0,a.kt)("li",{parentName:"ol"},"Build Fenix with the updated remote-settings configuration."),(0,a.kt)("li",{parentName:"ol"},"Configure your experiment in the ",(0,a.kt)("a",{parentName:"li",href:"https://stage.experimenter.nonprod.dataops.mozgcp.net/nimbus/"},"experimenter nimbus staging site"),"."),(0,a.kt)("li",{parentName:"ol"},"Run Fenix and check you are able to see your expected behavior.")))}c.isMDXComponent=!0}}]);