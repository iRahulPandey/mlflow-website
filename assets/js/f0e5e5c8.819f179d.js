"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9520],{3271:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=n(5893),l=n(1151);const r={title:"MLflow 2.2.0",tags:["release"],authors:["mlflow-maintainers"]},t=void 0,o={permalink:"/mlflow-site-refresh/releases/2023/03/01/2.2.0-release",source:"@site/releases/2023-03-01-2.2.0-release.md",title:"MLflow 2.2.0",description:"We are happy to announce the availability of MLflow 2.2.0!",date:"2023-03-01T00:00:00.000Z",formattedDate:"March 1, 2023",tags:[{label:"release",permalink:"/mlflow-site-refresh/releases/tags/release"}],readingTime:3.11,hasTruncateMarker:!1,authors:[{name:"MLflow maintainers",title:"MLflow maintainers",url:"https://github.com/mlflow/mlflow.git",imageURL:"https://github.com/mlflow-automation.png",key:"mlflow-maintainers"}],frontMatter:{title:"MLflow 2.2.0",tags:["release"],authors:["mlflow-maintainers"]},unlisted:!1,prevItem:{title:"MLflow 2.2.1",permalink:"/mlflow-site-refresh/releases/2023/03/02/2.2.1-release"},nextItem:{title:"MLflow 2.1.1",permalink:"/mlflow-site-refresh/releases/2022/12/26/2.1.1-release"}},a={authorsImageUrls:[void 0]},c=[];function d(e){const i={a:"a",code:"code",li:"li",p:"p",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:["We are happy to announce the availability of ",(0,s.jsx)(i.a,{href:"https://github.com/mlflow/mlflow/releases/tag/v2.2.0",children:"MLflow 2.2.0"}),"!"]}),"\n",(0,s.jsx)(i.p,{children:"MLflow 2.2.0 includes several major features and improvements"}),"\n",(0,s.jsx)(i.p,{children:"Features:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"[Recipes] Add support for score calibration to the classification recipe (#7744, @sunishsheth2009)"}),"\n",(0,s.jsx)(i.li,{children:"[Recipes] Add automatic label encoding to the classification recipe (#7711, @sunishsheth2009)"}),"\n",(0,s.jsx)(i.li,{children:"[Recipes] Support custom data splitting logic in the classification and regression recipes (#7815, #7588, @sunishsheth2009)"}),"\n",(0,s.jsx)(i.li,{children:"[Recipes] Introduce customizable MLflow Run name prefixes to the classification and regression recipes (#7746, @kamalesh0406; #7763, @sunishsheth2009)"}),"\n",(0,s.jsx)(i.li,{children:"[UI] Add a new Chart View to the MLflow Experiment Page for model performance insights (#7864, @hubertzub-db, @apurva-koti, @prithvikannan, @ridhimag11, @sunishseth2009, @dbczumar)"}),"\n",(0,s.jsx)(i.li,{children:"[UI] Modernize and improve parallel coordinates chart for model tuning (#7864, @hubertzub-db, @apurva-koti, @prithvikannan, @ridhimag11, @sunishseth2009, @dbczumar)"}),"\n",(0,s.jsx)(i.li,{children:"[UI] Add typeahead suggestions to the MLflow Experiment Page search bar (#7864, @hubertzub-db, @apurva-koti, @prithvikannan, @ridhimag11, @sunishseth2009, @dbczumar)"}),"\n",(0,s.jsx)(i.li,{children:"[UI] Improve performance of Experiments Sidebar for large numbers of experiments (#7804, @jmahlik)"}),"\n",(0,s.jsx)(i.li,{children:"[Tracking] Introduce autologging support for native PyTorch models (#7627, @temporaer)"}),"\n",(0,s.jsxs)(i.li,{children:["[Tracking] Allow specifying ",(0,s.jsx)(i.code,{children:"model_format"})," when autologging XGBoost models (#7781, @guyrosin)"]}),"\n",(0,s.jsxs)(i.li,{children:["[Tracking] Add ",(0,s.jsx)(i.code,{children:"MLFLOW_ARTIFACT_UPLOAD_DOWNLOAD_TIMEOUT"})," environment variable to configure artifact operation timeouts (#7783, @wamartin-aml)"]}),"\n",(0,s.jsxs)(i.li,{children:["[Artifacts] Include ",(0,s.jsx)(i.code,{children:"Content-Type"})," response headers for artifacts downloaded from ",(0,s.jsx)(i.code,{children:"mlflow server"})," (#7827, @bali0019)"]}),"\n",(0,s.jsxs)(i.li,{children:["[Model Registry] Introduce the ",(0,s.jsx)(i.code,{children:"searchModelVersions()"})," API to the Java client (#7880, @gabrielfu)"]}),"\n",(0,s.jsxs)(i.li,{children:["[Model Registry] Introduce ",(0,s.jsx)(i.code,{children:"max_results"}),", ",(0,s.jsx)(i.code,{children:"order_by"})," and ",(0,s.jsx)(i.code,{children:"page_token"})," arguments to ",(0,s.jsx)(i.code,{children:"MlflowClient.search_model_versions()"})," (#7623, @serena-ruan)"]}),"\n",(0,s.jsx)(i.li,{children:"[Models] Support logging large ONNX models by using external data (#7808, @dogeplusplus)"}),"\n",(0,s.jsx)(i.li,{children:"[Models] Add support for logging Diviner models fit in Spark (#7800, @BenWilson2)"}),"\n",(0,s.jsxs)(i.li,{children:["[Models] Introduce ",(0,s.jsx)(i.code,{children:"MLFLOW_DEFAULT_PREDICTION_DEVICE"})," environment variable to set the device for pyfunc model inference (#7922, @ankit-db)"]}),"\n",(0,s.jsx)(i.li,{children:"[Scoring] Publish official Docker images for the MLflow Model scoring server at github.com/mlflow/mlflow/pkgs (#7759, @dbczumar)"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Bug fixes:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"[Recipes] Fix dataset format validation in the ingest step for custom dataset sources (#7638, @sunishsheth2009)"}),"\n",(0,s.jsx)(i.li,{children:"[Recipes] Fix bug in identification of worst performing examples during training (#7658, @sunishsheth2009)"}),"\n",(0,s.jsxs)(i.li,{children:["[Recipes] Ensure consistent rendering of the recipe graph when ",(0,s.jsx)(i.code,{children:"inspect()"})," is called (#7852, @sunishsheth2009)"]}),"\n",(0,s.jsxs)(i.li,{children:["[Recipes] Correctly respect ",(0,s.jsx)(i.code,{children:"positive_class"})," configuration in the transform step (#7626, @sunishsheth2009)"]}),"\n",(0,s.jsxs)(i.li,{children:["[Recipes] Make logged metric names consistent with ",(0,s.jsx)(i.code,{children:"mlflow.evaluate()"})," (#7613, @sunishsheth2009)"]}),"\n",(0,s.jsxs)(i.li,{children:["[Recipes] Add ",(0,s.jsx)(i.code,{children:"run_id"})," and ",(0,s.jsx)(i.code,{children:"artifact_path"})," keys to logged MLmodel files (#7651, @sunishsheth2009)"]}),"\n",(0,s.jsx)(i.li,{children:"[UI] Fix bugs in UI validation of experiment names, model names, and tag keys (#7818, @subramaniam02)"}),"\n",(0,s.jsx)(i.li,{children:"[Tracking] Resolve artifact locations to absolute paths when creating experiments (#7670, @bali0019)"}),"\n",(0,s.jsx)(i.li,{children:"[Tracking] Exclude Delta checkpoints from Spark datasource autologging (#7902, @harupy)"}),"\n",(0,s.jsx)(i.li,{children:"[Tracking] Consistently return an empty list from GetMetricHistory when a metric does not exist (#7589, @bali0019; #7659, @harupy)"}),"\n",(0,s.jsx)(i.li,{children:"[Artifacts] Fix support for artifact operations on Windows paths in UNC format (#7750, @bali0019)"}),"\n",(0,s.jsx)(i.li,{children:"[Artifacts] Fix bug in HDFS artifact listing (#7581, @pwnywiz)"}),"\n",(0,s.jsxs)(i.li,{children:["[Model Registry] Disallow creation of model versions with local filesystem sources in ",(0,s.jsx)(i.code,{children:"mlflow server"})," (#7908, @harupy)"]}),"\n",(0,s.jsx)(i.li,{children:"[Model Registry] Fix handling of deleted model versions in FileStore (#7716, @harupy)"}),"\n",(0,s.jsx)(i.li,{children:"[Model Registry] Correctly initialize Model Registry SQL tables independently of MLflow Tracking (#7704, @harupy)"}),"\n",(0,s.jsx)(i.li,{children:"[Models] Correctly move PyTorch model outputs from GPUs to CPUs during inference with pyfunc (#7885, @ankit-db)"}),"\n",(0,s.jsxs)(i.li,{children:["[Build] Fix compatiblility issues with Python installations compiled using ",(0,s.jsx)(i.code,{children:"PYTHONOPTIMIZE=2"})," (#7791, @dbczumar)"]}),"\n",(0,s.jsx)(i.li,{children:"[Build] Fix compatibility issues with the upcoming pandas 2.0 release (#7899, @harupy; #7910, @dbczumar)"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Documentation updates:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"[Docs] Add an example of saving and loading Spark MLlib models with MLflow (#7706, @dipanjank)"}),"\n",(0,s.jsxs)(i.li,{children:["[Docs] Add usage examples for ",(0,s.jsx)(i.code,{children:"mlflow.lightgbm"})," APIs (#7565, @canerturkseven)"]}),"\n",(0,s.jsxs)(i.li,{children:["[Docs] Add an example of custom model flavor creation with ",(0,s.jsx)(i.code,{children:"sktime"})," (#7624, @benjaminbluhm)"]}),"\n",(0,s.jsxs)(i.li,{children:["[Docs] Clarify ",(0,s.jsx)(i.code,{children:"precision_recall_auc"})," metric calculation in ",(0,s.jsx)(i.code,{children:"mlflow.evaluate()"})," (#7701, @BenWilson2)"]}),"\n",(0,s.jsx)(i.li,{children:"[Docs] Remove outdated example links (#7587, @asloan7)"}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["For a comprehensive list of changes, see the ",(0,s.jsx)(i.a,{href:"https://github.com/mlflow/mlflow/releases/tag/v2.2.0",children:"release change log"}),", and check out the latest documentation on ",(0,s.jsx)(i.a,{href:"http://mlflow.org/",children:"mlflow.org"}),"."]})]})}function h(e={}){const{wrapper:i}={...(0,l.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>o,a:()=>t});var s=n(7294);const l={},r=s.createContext(l);function t(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);