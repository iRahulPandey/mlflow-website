"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5500],{2371:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var l=s(5893),t=s(1151);const o={title:"MLflow 1.27.0",tags:["release"],authors:["mlflow-maintainers"]},i=void 0,r={permalink:"/mlflow-site-refresh/releases/2022/06/28/1.27.0-release",source:"@site/releases/2022-06-28-1.27.0-release.md",title:"MLflow 1.27.0",description:"We are happy to announce the availability of MLflow 1.27.0!",date:"2022-06-28T00:00:00.000Z",formattedDate:"June 28, 2022",tags:[{label:"release",permalink:"/mlflow-site-refresh/releases/tags/release"}],readingTime:2.595,hasTruncateMarker:!1,authors:[{name:"MLflow maintainers",title:"MLflow maintainers",url:"https://github.com/mlflow/mlflow.git",imageURL:"https://github.com/mlflow-automation.png",key:"mlflow-maintainers"}],frontMatter:{title:"MLflow 1.27.0",tags:["release"],authors:["mlflow-maintainers"]},unlisted:!1,prevItem:{title:"MLflow 1.28.0",permalink:"/mlflow-site-refresh/releases/2022/08/11/1.28.0-release"},nextItem:{title:"MLflow 1.26.1",permalink:"/mlflow-site-refresh/releases/2022/05/27/1.26.1-release"}},a={authorsImageUrls:[void 0]},c=[];function d(e){const n={a:"a",code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["We are happy to announce the availability of ",(0,l.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/releases/tag/v1.27.0",children:"MLflow 1.27.0"}),"!"]}),"\n",(0,l.jsx)(n.p,{children:"MLflow 1.27.0 includes several major features and improvements:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["[",(0,l.jsx)(n.strong,{children:"Pipelines"}),"] With MLflow 1.27.0, we are excited to announce the release of\n",(0,l.jsx)(n.a,{href:"https://mlflow.org/docs/latest/pipelines.html",children:(0,l.jsx)(n.strong,{children:"MLflow Pipelines"})}),", an opinionated framework for\nstructuring MLOps workflows that simplifies and standardizes machine learning application development\nand productionization. MLflow Pipelines makes it easy for data scientists to follow best practices\nfor creating production-ready ML deliverables, allowing them to focus on developing excellent models.\nMLflow Pipelines also enables ML engineers and DevOps teams to seamlessly deploy models to production\nand incorporate them into applications. To get started with MLflow Pipelines, check out the docs at\n",(0,l.jsx)(n.a,{href:"https://mlflow.org/docs/latest/pipelines.html",children:"https://mlflow.org/docs/latest/pipelines.html"}),". (#6115)"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"[UI] Introduce UI support for searching and comparing runs across multiple Experiments (#5971, @r3stl355)"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"More features:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"[Tracking] When using batch logging APIs, automatically split large sets of metrics, tags, and params into multiple requests (#6052, @nzw0301)"}),"\n",(0,l.jsx)(n.li,{children:'[Tracking] When an Experiment is deleted, SQL-based backends also move the associate Runs to the "deleted" lifecycle stage (#6064, @AdityaIyengar27)'}),"\n",(0,l.jsxs)(n.li,{children:["[Tracking] Add support for logging single-element ",(0,l.jsx)(n.code,{children:"ndarray"})," and tensor instances as metrics via the ",(0,l.jsx)(n.code,{children:"mlflow.log_metric()"})," API (#5756, @ntakouris)"]}),"\n",(0,l.jsxs)(n.li,{children:["[Models] Add support for ",(0,l.jsx)(n.code,{children:"CatBoostRanker"})," models to the ",(0,l.jsx)(n.code,{children:"mlflow.catboost"})," flavor (#6032, @danielgafni)"]}),"\n",(0,l.jsxs)(n.li,{children:["[Models] Integrate SHAP's ",(0,l.jsx)(n.code,{children:"KernelExplainer"})," with ",(0,l.jsx)(n.code,{children:"mlflow.evaluate()"}),", enabling model explanations on categorical data (#6044, #5920, @WeichenXu123)"]}),"\n",(0,l.jsxs)(n.li,{children:["[Models] Extend ",(0,l.jsx)(n.code,{children:"mlflow.evaluate()"})," to automatically log the ",(0,l.jsx)(n.code,{children:"score()"})," outputs of scikit-learn models as metrics (#5935, #5903, @WeichenXu123)"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Bug fixes and documentation updates:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"[UI] Fix broken model links in the Runs table on the MLflow Experiment Page (#6014, @hctpbl)"}),"\n",(0,l.jsxs)(n.li,{children:["[Tracking/Installation] Require ",(0,l.jsx)(n.code,{children:"sqlalchemy>=1.4.0"})," upon MLflow installation, which is necessary for usage of SQL-based MLflow Tracking backends (#6024, @sniafas)"]}),"\n",(0,l.jsxs)(n.li,{children:["[Tracking] Fix a regression that caused ",(0,l.jsx)(n.code,{children:"mlflow server"})," to reject ",(0,l.jsx)(n.code,{children:"LogParam"})," API requests containing empty string values (#6031, @harupy)"]}),"\n",(0,l.jsxs)(n.li,{children:["[Tracking] Fix a failure in scikit-learn autologging that occurred when ",(0,l.jsx)(n.code,{children:"matplotlib"})," was not installed on the host system (#5995, @fa9r)"]}),"\n",(0,l.jsxs)(n.li,{children:["[Tracking] Fix a failure in TensorFlow autologging that occurred when training models on ",(0,l.jsx)(n.code,{children:"tf.data.Dataset"})," inputs (#6061, @dbczumar)"]}),"\n",(0,l.jsx)(n.li,{children:"[Artifacts] Address artifact download failures from SFTP locations that occurred due to mismanaged concurrency (#5840, @rsundqvist)"}),"\n",(0,l.jsx)(n.li,{children:"[Models] Fix a bug where MLflow Models did not restore bundled code properly if multiple models use the same code module name (#5926, @BFAnas)"}),"\n",(0,l.jsxs)(n.li,{children:["[Models] Address an issue where ",(0,l.jsx)(n.code,{children:"mlflow.sklearn.model()"})," did not properly restore bundled model code (#6037, @WeichenXu123)"]}),"\n",(0,l.jsxs)(n.li,{children:["[Models] Fix a bug in ",(0,l.jsx)(n.code,{children:"mlflow.evaluate()"})," that caused input data objects to be mutated when evaluating certain scikit-learn models (#6141, @dbczumar)"]}),"\n",(0,l.jsxs)(n.li,{children:["[Models] Fix a failure in ",(0,l.jsx)(n.code,{children:"mlflow.pyfunc.spark_udf"})," that occurred when the UDF was invoked on an empty RDD partition (#6063, @WeichenXu123)"]}),"\n",(0,l.jsxs)(n.li,{children:["[Models] Fix a failure in ",(0,l.jsx)(n.code,{children:"mlflow models build-docker"})," that occurred when ",(0,l.jsx)(n.code,{children:"env-manager=local"})," was specified (#6046, @bneijt)"]}),"\n",(0,l.jsx)(n.li,{children:"[Projects] Improve robustness of the git repository check that occurs prior to MLflow Project execution (#6000, @dkapur17)"}),"\n",(0,l.jsxs)(n.li,{children:["[Projects] Address a failure that arose when running a Project that does not have a ",(0,l.jsx)(n.code,{children:"master"})," branch (#5889, @harupy)"]}),"\n",(0,l.jsx)(n.li,{children:"[Docs] Correct several typos throughout the MLflow docs (#5959, @ryanrussell)"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["For a comprehensive list of changes, see the ",(0,l.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/releases/tag/v1.27.0",children:"release change log"}),", and check out the latest documentation on ",(0,l.jsx)(n.a,{href:"http://mlflow.org/",children:"mlflow.org"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>i});var l=s(7294);const t={},o=l.createContext(t);function i(e){const n=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),l.createElement(o.Provider,{value:n},e.children)}}}]);