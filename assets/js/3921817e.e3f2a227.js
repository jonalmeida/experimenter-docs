(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[1197],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return d}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return a?r.createElement(h,i(i({ref:t},u),{},{components:a})):r.createElement(h,i({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3993:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var r=a(2122),n=a(9756),l=(a(7294),a(3905)),i={id:"operations",title:"Jetstream Architecture and Operations"},o=void 0,s={unversionedId:"jetstream/operations",id:"jetstream/operations",isDocsHomePage:!1,title:"Jetstream Architecture and Operations",description:"[Jetstream] is part of the Cirrus ecosystem and depends on some external services.",source:"@site/docs/jetstream/operations.md",sourceDirName:"jetstream",slug:"/jetstream/operations",permalink:"/jetstream/operations",editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/jetstream/operations.md",tags:[],version:"current",frontMatter:{id:"operations",title:"Jetstream Architecture and Operations"},sidebar:"sidebar",previous:{title:"Jetstream Data Products",permalink:"/jetstream/data-products"},next:{title:"Troubleshooting Jetstream",permalink:"/jetstream/troubleshooting"}},p=[{value:"Architecture for Scaling Jetstream",id:"architecture-for-scaling-jetstream",children:[{value:"Parallelizing experiment analyses",id:"parallelizing-experiment-analyses",children:[]},{value:"Parallelizing lower-level calculations",id:"parallelizing-lower-level-calculations",children:[]}]},{value:"Installation",id:"installation",children:[]},{value:"Argo Workflow UI",id:"argo-workflow-ui",children:[{value:"Deleting Old Workflows",id:"deleting-old-workflows",children:[]}]},{value:"Cluster Updates",id:"cluster-updates",children:[]}],u={toc:p};function c(e){var t=e.components,i=(0,n.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/mozilla/jetstream"},"Jetstream"))," is part of the Cirrus ecosystem and depends on some external services."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Cirrus overview",src:a(5790).Z}),"\n",(0,l.kt)("em",{parentName:"p"},"High-level overview of Cirrus")),(0,l.kt)("p",null,"Jetstream is ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/mozilla/telemetry-airflow/blob/e5de501d8063cc366e9bb546135f3866136cb47d/dags/jetstream.py#L22"},"scheduled to run in Airflow")," daily. The daily runs will analyze all experiments that are currently active or just ended the day before and write metrics, statistics and errors for each experiment to BigQuery. Active V1 experiments and V6 experiments (Nimbus experiments) are retrieved from the ",(0,l.kt)("a",{parentName:"p",href:"https://experimenter.services.mozilla.com/api/v1/experiments/"},"Experimenter API"),"."),(0,l.kt)("p",null,"Jetstream also fetches custom experiment and outcome configs from the ",(0,l.kt)("inlineCode",{parentName:"p"},"jetstream/")," directory in ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/mozilla/metric-hub/tree/main/jetstream"},"metric-hub")," for analysis. When a new custom config gets merged into metric-hub, the CI will trigger Jetstream to re-run all analyses for the experiment affected by the config. CircleCI will report on the status of the analysis run and link to the Cloud Logging logs."),(0,l.kt)("p",null,"After writing analyses results to BigQuery, statistics data is exported to the ",(0,l.kt)("inlineCode",{parentName:"p"},"mozanalysis")," bucket in GCS as JSON. The JSON data is accessed by the analysis dashboard to display results."),(0,l.kt)("h2",{id:"architecture-for-scaling-jetstream"},"Architecture for Scaling Jetstream"),(0,l.kt)("p",null,"To ensure analysis results are available in a timely manner, Jetstream implements two approaches for reducing the time required to run experiment analyses:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Parallelization of experiment analyses using ",(0,l.kt)("a",{parentName:"li",href:"https://argoproj.github.io/"},"Argo")),(0,l.kt)("li",{parentName:"ul"},"Parallelization of lower-level calculations (statistics, segments, ...) using ",(0,l.kt)("a",{parentName:"li",href:"https://dask.org/"},"Dask"))),(0,l.kt)("h3",{id:"parallelizing-experiment-analyses"},"Parallelizing experiment analyses"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://argoproj.github.io/"},"Argo")," is a light-weight workflow engine for orchestrating parallel jobs on Kubernetes and is capable of creating tasks dynamically that will be executed in parallel. Using Argo, the analyses for different experiments and analysis dates are split into separate jobs that run in parallel on the ",(0,l.kt)("inlineCode",{parentName:"p"},"jetstream")," Kubernetes cluster in the ",(0,l.kt)("inlineCode",{parentName:"p"},"moz-fx-data-experiment-analysis")," GCP project."),(0,l.kt)("p",null,"Argo expects each step in the workflow to be a container. The existing Jetstream container, which has the Jetstream CLI installed, can be used for each of these steps.\nThe full workflow definition is defined in ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/mozilla/jetstream/blob/main/jetstream/workflows/run.yaml"},"the ",(0,l.kt)("inlineCode",{parentName:"a"},"workflows/run.yaml")," file"),"."),(0,l.kt)("p",null,"Depending on how Jetstream is invoked (",(0,l.kt)("inlineCode",{parentName:"p"},"rerun"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"run-argo"),", or ",(0,l.kt)("inlineCode",{parentName:"p"},"rerun_config_changed"),"), Jetstream will determine the dates and experiments that are to be analyzed and injects them as parameters into ",(0,l.kt)("inlineCode",{parentName:"p"},"run.yaml")," before launching the workflow. Argo will create separate jobs for each experiment and each analysis date. Once the analysis is complete, data gets exported as JSON to GCS."),(0,l.kt)("h3",{id:"parallelizing-lower-level-calculations"},"Parallelizing lower-level calculations"),(0,l.kt)("p",null,"In addition to running experiment analyses in parallel, ",(0,l.kt)("a",{parentName:"p",href:"https://dask.org/"},"Dask")," is used to parallelize lower-level calculations. The following steps could be executed in parallel:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Analyses for each analysis period (daily, 28day, weekly, overall)"),(0,l.kt)("li",{parentName:"ul"},"Analyses for different segments"),(0,l.kt)("li",{parentName:"ul"},"Calculating statistics defined for an experiment analysis")),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://docs.dask.org/en/latest/delayed.html"},(0,l.kt)("inlineCode",{parentName:"a"},"dask.delayed interface"))," is used to turn the functions executing these steps into tasks that are added to a task graph which executes these steps in parallel. Dask is configured to use as many cores as are available on the machine by default, with 1 worker for each core. ",(0,l.kt)("a",{parentName:"p",href:"https://docs.dask.org/en/latest/scheduling.html#local-threads"},"Multi-threading being avoided, instead processes are used")," since the code is dominated by Python code, otherwise there wouldn't be any speedup due Python's Global Interpreter Lock. To manually restrict the number of processes, the ",(0,l.kt)("inlineCode",{parentName:"p"},"JETSTREAM_PROCESSES")," environment variable can be used."),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"Jetstream is executed on the ",(0,l.kt)("inlineCode",{parentName:"p"},"jetstream")," Kubernetes cluster in the ",(0,l.kt)("inlineCode",{parentName:"p"},"moz-fx-data-experiments")," project which is set up following ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/argoproj/argo/blob/master/docs/quick-start.md"},"Argo's installation guide"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"When creating or re-creating the cluster, BigQuery and Compute Engine read/write permissions need to be enabled"),(0,l.kt)("li",{parentName:"ul"},"Installing Argo:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Create an ",(0,l.kt)("inlineCode",{parentName:"li"},"argo")," namespace: ",(0,l.kt)("inlineCode",{parentName:"li"},"kubectl create ns argo")),(0,l.kt)("li",{parentName:"ul"},"Install commonly used components: ",(0,l.kt)("inlineCode",{parentName:"li"},"kubectl apply -n argo -f https://github.com/argoproj/argo-workflows/releases/download/v3.4.5/install.yaml")),(0,l.kt)("li",{parentName:"ul"},"Create new ",(0,l.kt)("inlineCode",{parentName:"li"},"clusterrole"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"kubectl create rolebinding default-admin --clusterrole=admin --serviceaccount=argo:default --namespace=argo")))),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/mozilla/telemetry-airflow/blob/master/dags/jetstream.py"},(0,l.kt)("inlineCode",{parentName:"a"},"jetstream")," DAG in Airflow")," triggers the ",(0,l.kt)("inlineCode",{parentName:"li"},"run-argo")," job daily and either requires Compute Engine API access or the parameters ",(0,l.kt)("inlineCode",{parentName:"li"},"cluster_ip")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"cluster_cert")," need to be provided",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Currently the Airflow cluster does not have Compute Engine API access, so the cluster IP and certificate are stored as secrets and used for running Jetstream")))),(0,l.kt)("h2",{id:"argo-workflow-ui"},"Argo Workflow UI"),(0,l.kt)("p",null,"Argo provides a Web UI to access running workflows. Users need to authenticate using a Bearer token:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"set ",(0,l.kt)("inlineCode",{parentName:"li"},"export CLOUDSDK_CORE_PROJECT=moz-fx-data-experiments")),(0,l.kt)("li",{parentName:"ul"},"Get Bearer token and copy: ",(0,l.kt)("inlineCode",{parentName:"li"},"gcloud container clusters get-credentials jetstream --region=us-central1-a && kubectl -n argo exec $(kubectl get pod -n argo -l 'app=argo-server' -o jsonpath='{.items[0].metadata.name}') -- argo auth token")," "),(0,l.kt)("li",{parentName:"ul"},"Connect to the Workflow UI using port forwarding: ",(0,l.kt)("inlineCode",{parentName:"li"},"kubectl -n argo port-forward svc/argo-server 2746:2746")),(0,l.kt)("li",{parentName:"ul"},"Open ",(0,l.kt)("a",{parentName:"li",href:"https://localhost:2746"},"https://localhost:2746")),(0,l.kt)("li",{parentName:"ul"},"Use the generated Bearer token (including the word ",(0,l.kt)("inlineCode",{parentName:"li"},"Bearer"),") for authentication")),(0,l.kt)("h3",{id:"deleting-old-workflows"},"Deleting Old Workflows"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The Workflow UI might get less responsive the more workflows have been run in the past"),(0,l.kt)("li",{parentName:"ul"},"To delete workflows that are older than 4 days run:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl get wf -o go-template -n argo --template '{{range .items}}{{.metadata.name}} {{.metadata.creationTimestamp}}{{\"\\n\"}}{{end}}' | awk '$2 <= \"'$(gdate -d '30 days ago' -Ins --utc | sed 's/+0000/Z/')'\" { print $1 }' | gxargs --no-run-if-empty kubectl delete wf -n argo\n")),(0,l.kt)("h2",{id:"cluster-updates"},"Cluster Updates"),(0,l.kt)("p",null,"Argo updates should be tested on a separate cluster before applying them to production. Jetstream has some custom logic to connect to clusters and issue workflows that might be incompatible with future versions of Argo."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Setup a separate cluster, install most recent Argo version",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Optionally, push a custom docker image that should be tested",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"docker build -t jetstream-test .")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"docker tag jetstream-test gcr.io/moz-fx-data-experiments/jetstream-test:latest")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"gcloud auth configure-docker")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"docker push gcr.io/moz-fx-data-experiments/jetstream-test:latest")),(0,l.kt)("li",{parentName:"ul"},"Update ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/mozilla/jetstream/blob/main/jetstream/workflows/run.yaml"},"the workflow configuration file")," to point to the docker image to be tested"))))),(0,l.kt)("li",{parentName:"ul"},"To update Argo run:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Connect to cluster: ",(0,l.kt)("inlineCode",{parentName:"li"},"gcloud container clusters get-credentials jetstream --region=us-central1-a")),(0,l.kt)("li",{parentName:"ul"},"To install new release ",(0,l.kt)("inlineCode",{parentName:"li"},"kubectl apply -n argo -f https://github.com/argoproj/argo-workflows/releases/download/v3.4.5/install.yaml"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Change version number to most recent release"))))),(0,l.kt)("li",{parentName:"ul"},"The GKE cluster itself is updated automatically by GCP")))}c.isMDXComponent=!0},5790:function(e,t,a){"use strict";t.Z=a.p+"assets/images/cirrus-8bdea7b35470b1c920d0238d70ada0d2.png"}}]);