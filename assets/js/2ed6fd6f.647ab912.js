"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[6605],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=p(a),g=r,k=u["".concat(d,".").concat(g)]||u[g]||s[g]||l;return a?n.createElement(k,i(i({ref:e},m),{},{components:a})):n.createElement(k,i({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},5644:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={id:"onboarding-feature-ios",title:"Onboarding Feature for iOS",slug:"/onboarding-feature-ios"},i="Introduction",o={unversionedId:"onboarding/onboarding-feature-ios",id:"onboarding/onboarding-feature-ios",title:"Onboarding Feature for iOS",description:"The onboarding feature enables experimentating with the 'new user onboarding flow'. The onboarding flow is presented to the user on each new install, and is made up of a series of full screen 'views', referred to as 'cards'. The purpose of the onboarding flow is to enable the user to configure a small number of app enhancing settings. Each card provides context for each setting and the ability to take an appropratie action, or skip to the next card.",source:"@site/docs/onboarding/onboarding-feature-ios.md",sourceDirName:"onboarding",slug:"/onboarding-feature-ios",permalink:"/onboarding-feature-ios",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/onboarding/onboarding-feature-ios.md",tags:[],version:"current",frontMatter:{id:"onboarding-feature-ios",title:"Onboarding Feature for iOS",slug:"/onboarding-feature-ios"},sidebar:"sidebar",previous:{title:"Onboarding Feature for Android",permalink:"/onboarding-feature-android"},next:{title:"Configuring",permalink:"/configuring"}},d={},p=[{value:"Existing default card",id:"existing-default-card",level:4},{value:"Experimenter card config",id:"experimenter-card-config",level:4},{value:"Output (the merged result of the existing card and experiment card)",id:"output-the-merged-result-of-the-existing-card-and-experiment-card",level:4},{value:"Conditions",id:"conditions",level:2},{value:"Card definition",id:"card-definition",level:2},{value:"Default cards",id:"default-cards",level:3},{value:"NimbusOnboardingLink",id:"nimbusonboardinglink",level:3},{value:"NimbusOnboardingButtons",id:"nimbusonboardingbuttons",level:3},{value:"NimbusOnboardingButton",id:"nimbusonboardingbutton",level:4},{value:"OnboardingActions",id:"onboardingactions",level:5},{value:"Dismissable",id:"dismissable",level:2},{value:"TextID",id:"textid",level:2},{value:"Image resources",id:"image-resources",level:2},{value:"Base Resources",id:"base-resources",level:3},{value:"Campaign - Challenge the Default",id:"campaign---challenge-the-default",level:3},{value:"Default cards overview",id:"default-cards-overview",level:2},{value:"Default Welcome Card",id:"default-welcome-card",level:3},{value:"Default Sync card",id:"default-sync-card",level:3},{value:"Default Notification card",id:"default-notification-card",level:3}],m={toc:p},u="wrapper";function s(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The onboarding feature enables experimentating with the 'new user onboarding flow'. The onboarding flow is presented to the user on each new install, and is made up of a series of full screen 'views', referred to as '",(0,r.kt)("strong",{parentName:"p"},"cards"),"'. The purpose of the onboarding flow is to enable the user to configure a small number of app enhancing settings. Each card provides context for each setting and the ability to take an appropratie action, or skip to the next card."),(0,r.kt)("p",null,"The onboarding feature enables customize each card's:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"title copy"),(0,r.kt)("li",{parentName:"ul"},"body copy"),(0,r.kt)("li",{parentName:"ul"},"imagery"),(0,r.kt)("li",{parentName:"ul"},"button copy"),(0,r.kt)("li",{parentName:"ul"},"button actions"),(0,r.kt)("li",{parentName:"ul"},"number of buttons (one or two)"),(0,r.kt)("li",{parentName:"ul"},"sequencing")),(0,r.kt)("h1",{id:"about-this-document"},"About this document"),(0,r.kt)("p",null,"This document is a guide for staff who wish to configure the new user onboarding flow through the experimenter interface."),(0,r.kt)("p",null,"It is also a living document:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the onboarding feature may be under active development"),(0,r.kt)("li",{parentName:"ul"},"card types may be added"),(0,r.kt)("li",{parentName:"ul"},"card attributes may be added")),(0,r.kt)("h1",{id:"scene-setting"},"Scene setting"),(0,r.kt)("p",null,"The onboarding feature is built on top of Nimbus, Mozilla's experimentation platform. Nimbus allows you to send bits of configuration to application features from Experimenter, the web-application staff use to launch and manage experiments and rollouts."),(0,r.kt)("p",null,"Using Experimenter in the general case is documented elsewhere, so this document is specifically concerned with configuring the onboarding feature."),(0,r.kt)("h1",{id:"references"},"References"),(0,r.kt)("p",null,"For the most up-to-date configurations, the main code base will always be the best place to check."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/mozilla-mobile/firefox-ios/blob/main/nimbus.fml.yaml"},"Nimbus manifest")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/mozilla-mobile/firefox-ios/blob/main/nimbus-features/onboardingFrameworkFeature.yaml"},"Onboarding feature manifest"))),(0,r.kt)("p",null,"\u26a0\ufe0f The onboarding feature is a ",(0,r.kt)("a",{parentName:"p",href:"https://experimenter.info/mobile-first-run-experiments"},"first run experiment")),(0,r.kt)("h1",{id:"creating-an-experiment"},"Creating an experiment"),(0,r.kt)("p",null,"Only ",(0,r.kt)("strong",{parentName:"p"},"values that differ")," from the card's default values need to be provided to Experimenter. E.g:"),(0,r.kt)("h4",{id:"existing-default-card"},"Existing default card"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "cards":{\n      "welcome": {\n         "title": "Onboarding/Onboarding.Welcome.Title.v114",\n         "body": "Onboarding/Onboarding.Welcome.Description.v114",\n         "order": 10,\n         "image": "welcome-globe",\n         "link": {\n            "title": "Onboarding/Onboarding.Welcome.Link.Action.v114",\n            "url": "https://www.mozilla.org/privacy/firefox/",\n         },\n          "buttons": {\n            "primary": {\n              "title": "Onboarding/Onboarding.Welcome.Action.v114",\n              "action": "next-card",\n            },\n          },\n          "type": "fresh-install",\n          "prerequisites": ["ALWAYS"]\n      }\n   }\n}\n\n')),(0,r.kt)("h4",{id:"experimenter-card-config"},"Experimenter card config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "cards":{\n      "welcome": {\n         "title": "A new title",\n      }\n   }\n}\n\n')),(0,r.kt)("h4",{id:"output-the-merged-result-of-the-existing-card-and-experiment-card"},"Output (the merged result of the existing card and experiment card)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'   "cards":{\n      "welcome": {\n         "title": "A new title",\n         "body": "Onboarding/Onboarding.Welcome.Description.v114",\n         "order": 10,\n         "image": "welcome-globe",\n         "link": {\n            "title": "Onboarding/Onboarding.Welcome.Link.Action.v114",\n            "url": "https://www.mozilla.org/privacy/firefox/",\n         },\n          "buttons": {\n            "primary": {\n              "title": "Onboarding/Onboarding.Welcome.Action.v114",\n              "action": "next-card",\n            },\n          },\n          "type": "fresh-install",\n          "prerequisites": ["ALWAYS"]\n      }\n   }\n')),(0,r.kt)("h1",{id:"feature-definition"},"Feature Definition"),(0,r.kt)("p",null,"The onboarding feature is split into several values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"conditions"),(0,r.kt)("li",{parentName:"ul"},"cards"),(0,r.kt)("li",{parentName:"ul"},"dismissable")),(0,r.kt)("h2",{id:"conditions"},"Conditions"),(0,r.kt)("p",null,"The conditions table is a set of triggers, like messaging, that can be used on cards to include or exclude them from appearing. The conditions list is a json of valid JEXL expressions. These expressions can be used in the ",(0,r.kt)("inlineCode",{parentName:"p"},"prerequisites")," or the ",(0,r.kt)("inlineCode",{parentName:"p"},"disqualifiers")," fields in cards. E.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"conditions": {\n    "ALWAYS": "true",\n    "NOT_INSTALLED_TODAY": "days_since_install > 0"\n}\n')),(0,r.kt)("h2",{id:"card-definition"},"Card definition"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"title"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Free text or TextID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The title text displayed to the user"),(0,r.kt)("td",{parentName:"tr",align:null},'""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"body"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Free text or TextID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The body text displayed to the user"),(0,r.kt)("td",{parentName:"tr",align:null},'""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"order"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Used for sequencing cards"),(0,r.kt)("td",{parentName:"tr",align:null},"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"image"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ImageID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The image to show for a particular card"),(0,r.kt)("td",{parentName:"tr",align:null},"welcome-globe")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"link"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NimbusOnboardingLink"),(0,r.kt)("td",{parentName:"tr",align:"left"},"An optional link. If available, it will appear on the card. If not, no link will be present."),(0,r.kt)("td",{parentName:"tr",align:null},"null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"buttons"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NimbusOnboardingButtons"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The configuartion for buttons."),(0,r.kt)("td",{parentName:"tr",align:null},"A Skip button with a default action of going to the next card.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"prerequisites"),(0,r.kt)("td",{parentName:"tr",align:"left"},"List of JEXL keys"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The list of JEXL keys guiding whether a card can show up for certain users. All prerequisites must be true for a card to show."),(0,r.kt)("td",{parentName:"tr",align:null},"[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"disqualifiers"),(0,r.kt)("td",{parentName:"tr",align:"left"},"List of JEXL keys"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The list of JEXL keys guiding a card should not show up for certain users. If any disqualifiers are met, then the card will not show."),(0,r.kt)("td",{parentName:"tr",align:null},"[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TypeID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The type of onboarding the user is seeing."),(0,r.kt)("td",{parentName:"tr",align:null},"fresh-install")))),(0,r.kt)("h3",{id:"default-cards"},"Default cards"),(0,r.kt)("p",null,"By default, the app is bundled with a collection of pre-defined cards which will be used if no other configuration is provided for the cards. See the ",(0,r.kt)("a",{parentName:"p",href:"#default-welcome-card"},"appendix")," for an overview of the default cards or the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mozilla-mobile/firefox-ios/blob/main/nimbus-features/onboardingFrameworkFeature.yaml"},"code")," the most up-to-date configuration."),(0,r.kt)("h3",{id:"nimbusonboardinglink"},"NimbusOnboardingLink"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"title"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Free text or StringID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The title of the link"),(0,r.kt)("td",{parentName:"tr",align:"left"},'"Learn more about our privacy policy"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"url"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The url to which the link would take the user."),(0,r.kt)("td",{parentName:"tr",align:"left"},'"',(0,r.kt)("a",{parentName:"td",href:"https://www.mozilla.org/privacy/firefox/%22"},'https://www.mozilla.org/privacy/firefox/"'))))),(0,r.kt)("h3",{id:"nimbusonboardingbuttons"},"NimbusOnboardingButtons"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"primary"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NimbusOnboardingButton"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The primary button on the card, coloured blue."),(0,r.kt)("td",{parentName:"tr",align:"left"},"A Skip button.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"secondary"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NimbusOnboardingButton"),(0,r.kt)("td",{parentName:"tr",align:"left"},"An optional second button. If defined, it will be in grey, below the primary button."),(0,r.kt)("td",{parentName:"tr",align:"left"},"null")))),(0,r.kt)("h4",{id:"nimbusonboardingbutton"},"NimbusOnboardingButton"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"title"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Free text or StringID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The title of the button"),(0,r.kt)("td",{parentName:"tr",align:"left"},'"Skip"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"action"),(0,r.kt)("td",{parentName:"tr",align:"left"},"OnboardingActions"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The action the button will take."),(0,r.kt)("td",{parentName:"tr",align:"left"},"next-card")))),(0,r.kt)("h5",{id:"onboardingactions"},"OnboardingActions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Action"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"next-card"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Will take the user to the next card")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"sync-sign-in"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Will take the user to the sync sign in flow")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"request-notifications"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Will request to allow notifications from the user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"set-default-browser"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Will send the user to settings to set Firefox as their default browser")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"open-default-browser-popup"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Will open up a popup with instructions for setting Firefox as their default browser")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"read-privacy-policy"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Will open a webview where the user can read the privacy policy")))),(0,r.kt)("h2",{id:"dismissable"},"Dismissable"),(0,r.kt)("p",null,"This is a property for the whole onboarding, and controls whether there is an ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," at the top of the screen or not. This is a simple boolean value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dismissable": true\n}\n')),(0,r.kt)("h1",{id:"available-resources"},"Available resources"),(0,r.kt)("h2",{id:"textid"},"TextID"),(0,r.kt)("p",null,"All existing app strings are available to Experimenter. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mozilla-mobile/firefox-ios/blob/main/Client/Frontend/Strings.swift"},"See the full list here"),". Note, that only strings with a ",(0,r.kt)("inlineCode",{parentName:"p"},"tableName")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," can be used.\nFree text may also be used instead of a string resource."),(0,r.kt)("p",null,"\u26a0\ufe0f Localization of ",(0,r.kt)("strong",{parentName:"p"},"Free Text")," is not currently supported."),(0,r.kt)("h2",{id:"image-resources"},"Image resources"),(0,r.kt)("h3",{id:"base-resources"},"Base Resources"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Resource ID"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"welcome-globe"),(0,r.kt)("td",{parentName:"tr",align:"left"},"An image of a person hugging the firefox logo")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"sync-devices"),(0,r.kt)("td",{parentName:"tr",align:"left"},"An image of a variety of devices")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"notifications"),(0,r.kt)("td",{parentName:"tr",align:"left"},"An image of notifications")))),(0,r.kt)("h3",{id:"campaign---challenge-the-default"},"Campaign - Challenge the Default"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Resource ID"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"welcome-ctd"),(0,r.kt)("td",{parentName:"tr",align:null},"The welcome image for CTD campaign.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sync-devices-ctd"),(0,r.kt)("td",{parentName:"tr",align:null},"The sync image for CTD campaign.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"notification-ctd"),(0,r.kt)("td",{parentName:"tr",align:null},"The notifications image for CTD campaign.")))),(0,r.kt)("h1",{id:"appendix"},"Appendix"),(0,r.kt)("h2",{id:"default-cards-overview"},"Default cards overview"),(0,r.kt)("h3",{id:"default-welcome-card"},"Default Welcome Card"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"fresh-install")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"title"),(0,r.kt)("td",{parentName:"tr",align:null},"Onboarding/Onboarding.Welcome.Title.v114")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},"Onboarding/Onboarding.Welcome.Description.v114")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"link"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"- title"),(0,r.kt)("td",{parentName:"tr",align:null},"Onboarding/Onboarding.Welcome.Link.Action.v114")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"- url"),(0,r.kt)("td",{parentName:"tr",align:null},'"',(0,r.kt)("a",{parentName:"td",href:"https://www.mozilla.org/privacy/firefox/%22"},'https://www.mozilla.org/privacy/firefox/"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"image"),(0,r.kt)("td",{parentName:"tr",align:null},"welcome-globe")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ordering"),(0,r.kt)("td",{parentName:"tr",align:null},"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"buttons"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"- primary"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-- title"),(0,r.kt)("td",{parentName:"tr",align:null},"Onboarding/Onboarding.Welcome.Action.v114")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-- action"),(0,r.kt)("td",{parentName:"tr",align:null},"next-card")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"prerequisites"),(0,r.kt)("td",{parentName:"tr",align:null},"ALWAYS")))),(0,r.kt)("h3",{id:"default-sync-card"},"Default Sync card"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"fresh-install")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"title"),(0,r.kt)("td",{parentName:"tr",align:null},"Onboarding/Onboarding.Sync.Title.v114")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},"Onboarding/Onboarding.Sync.Description.v114")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"image"),(0,r.kt)("td",{parentName:"tr",align:null},"sync-devices")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ordering"),(0,r.kt)("td",{parentName:"tr",align:null},"20")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"buttons"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"- primary"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-- title"),(0,r.kt)("td",{parentName:"tr",align:null},"Onboarding/Onboarding.Sync.SignIn.Action.v114")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-- action"),(0,r.kt)("td",{parentName:"tr",align:null},"sync-sign-in")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"- secondary"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-- title"),(0,r.kt)("td",{parentName:"tr",align:null},"Onboarding/Onboarding.Sync.Skip.Action.v114")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-- action"),(0,r.kt)("td",{parentName:"tr",align:null},"next-card")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"prerequisites"),(0,r.kt)("td",{parentName:"tr",align:null},"ALWAYS")))),(0,r.kt)("h3",{id:"default-notification-card"},"Default Notification card"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"fresh-install")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"title"),(0,r.kt)("td",{parentName:"tr",align:null},"Onboarding/Onboarding.Notification.Title.v114")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},"Onboarding/Onboarding.Notification.Description.v114")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"image"),(0,r.kt)("td",{parentName:"tr",align:null},"notifications")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ordering"),(0,r.kt)("td",{parentName:"tr",align:null},"30")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"buttons"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"- primary"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-- title"),(0,r.kt)("td",{parentName:"tr",align:null},"Onboarding/Onboarding.Notification.TurnOnNotifications.Action.v114")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-- action"),(0,r.kt)("td",{parentName:"tr",align:null},"request-notifications")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"- secondary"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-- title"),(0,r.kt)("td",{parentName:"tr",align:null},"Onboarding/Onboarding.Notification.Skip.Action.v115")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-- action"),(0,r.kt)("td",{parentName:"tr",align:null},"next-card")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"prerequisites"),(0,r.kt)("td",{parentName:"tr",align:null},"ALWAYS")))))}s.isMDXComponent=!0}}]);