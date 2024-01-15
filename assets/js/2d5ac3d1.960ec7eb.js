"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8345],{9959:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>d});var i=r(5893),l=r(1151);const o={title:"MLflow 1.26.0",tags:["release"],authors:["mlflow-maintainers"]},s=void 0,t={permalink:"/mlflow-site-refresh/releases/2022/05/16/1.26.0-release",source:"@site/releases/2022-05-16-1.26.0-release.md",title:"MLflow 1.26.0",description:"We are happy to announce the availability of MLflow 1.26.0!",date:"2022-05-16T00:00:00.000Z",formattedDate:"May 16, 2022",tags:[{label:"release",permalink:"/mlflow-site-refresh/releases/tags/release"}],readingTime:2.57,hasTruncateMarker:!1,authors:[{name:"MLflow maintainers",title:"MLflow maintainers",url:"https://github.com/mlflow/mlflow.git",imageURL:"https://github.com/mlflow-automation.png",key:"mlflow-maintainers"}],frontMatter:{title:"MLflow 1.26.0",tags:["release"],authors:["mlflow-maintainers"]},unlisted:!1,prevItem:{title:"MLflow 1.26.1",permalink:"/mlflow-site-refresh/releases/2022/05/27/1.26.1-release"},nextItem:{title:"MLflow 1.24.0",permalink:"/mlflow-site-refresh/releases/2022/02/28/1.24.0-release"}},a={authorsImageUrls:[void 0]},d=[];function c(e){const n={a:"a",code:"code",li:"li",p:"p",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["We are happy to announce the availability of ",(0,i.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/releases/tag/v1.26.0",children:"MLflow 1.26.0"}),"!"]}),"\n",(0,i.jsx)(n.p,{children:"MLflow 1.26.0 includes several major features and improvements:"}),"\n",(0,i.jsx)(n.p,{children:"Features:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"[CLI] Add endpoint naming and options configuration to the deployment CLI (#5731, @trangevi)"}),"\n",(0,i.jsx)(n.li,{children:"[Build,Doc] Add development environment setup script for Linux and MacOS x86 Operating Systems (#5717, @BenWilson2)"}),"\n",(0,i.jsxs)(n.li,{children:["[Tracking] Update ",(0,i.jsx)(n.code,{children:"mlflow.set_tracking_uri"})," to add support for paths defined as ",(0,i.jsx)(n.code,{children:"pathlib.Path"})," in addition to existing ",(0,i.jsx)(n.code,{children:"str"})," path declarations (#5824, @cacharle)"]}),"\n",(0,i.jsx)(n.li,{children:"[Scoring] Add custom timeout override option to the scoring server CLI to support high latency models (#5663, @sniafas)"}),"\n",(0,i.jsx)(n.li,{children:"[UI] Add sticky header to experiment run list table to support column name visibility when scrolling beyond page fold (#5818, @hubertzub-db)"}),"\n",(0,i.jsx)(n.li,{children:"[Artifacts] Add GCS support for MLflow garbage collection (#5811, @aditya-iyengar-rtl-de)"}),"\n",(0,i.jsxs)(n.li,{children:["[Evaluate] Add ",(0,i.jsx)(n.code,{children:"pos_label"})," argument for ",(0,i.jsx)(n.code,{children:"eval_and_log_metrics"})," API to support accurate binary classifier evaluation metrics (#5807, @yxiong)"]}),"\n",(0,i.jsx)(n.li,{children:"[UI] Add fields for latest, minimum and maximum metric values on metric display page (#5574, @adamreeve)"}),"\n",(0,i.jsxs)(n.li,{children:["[Models] Add support for ",(0,i.jsx)(n.code,{children:"input_example"})," and ",(0,i.jsx)(n.code,{children:"signature"})," logging for pyspark ml flavor when using autologging (#5719, @bali0019)"]}),"\n",(0,i.jsxs)(n.li,{children:["[Models] Add ",(0,i.jsx)(n.code,{children:"virtualenv"})," environment manager support for ",(0,i.jsx)(n.code,{children:"mlflow models docker-build"})," CLI (#5728, @harupy)"]}),"\n",(0,i.jsx)(n.li,{children:"[Models] Add support for wildcard module matching in log_model_allowlist for PySpark models (#5723, @serena-ruan)"}),"\n",(0,i.jsxs)(n.li,{children:["[Projects] Add ",(0,i.jsx)(n.code,{children:"virtualenv"})," environment manager support for MLflow projects (#5631, @harupy)"]}),"\n",(0,i.jsxs)(n.li,{children:["[Models] Add ",(0,i.jsx)(n.code,{children:"virtualenv"})," environment manager support for MLflow Models (#5380, @harupy)"]}),"\n",(0,i.jsxs)(n.li,{children:["[Models] Add ",(0,i.jsx)(n.code,{children:"virtualenv"})," environment manager support for ",(0,i.jsx)(n.code,{children:"mlflow.pyfunc.spark_udf"})," (#5676, @WeichenXu123)"]}),"\n",(0,i.jsxs)(n.li,{children:["[Models] Add support for ",(0,i.jsx)(n.code,{children:"input_example"})," and ",(0,i.jsx)(n.code,{children:"signature"})," logging for ",(0,i.jsx)(n.code,{children:"tensorflow"})," flavor when using autologging (#5510, @bali0019)"]}),"\n",(0,i.jsx)(n.li,{children:"[Server-infra] Add JSON Schema Type Validation to enable raising 400 errors on malformed requests to REST API endpoints (#5458, @mrkaye97)"}),"\n",(0,i.jsxs)(n.li,{children:["[Scoring] Introduce abstract ",(0,i.jsx)(n.code,{children:"endpoint"})," interface for mlflow deployments (#5378, @trangevi)"]}),"\n",(0,i.jsxs)(n.li,{children:["[UI] Add ",(0,i.jsx)(n.code,{children:"End Time"})," and ",(0,i.jsx)(n.code,{children:"Duration"})," fields to run comparison page (#3378, @RealArpanBhattacharya)"]}),"\n",(0,i.jsx)(n.li,{children:"[Serving] Add schema validation support when parsing input csv data for model serving (#5531, @vvijay-bolt)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Bug fixes and documentation updates:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"[Models] Fix REPL ID propagation from datasource listener to publisher for Spark data sources (#5826, @dbczumar)"}),"\n",(0,i.jsxs)(n.li,{children:["[UI] Update ",(0,i.jsx)(n.code,{children:"ag-grid"})," and implement ",(0,i.jsx)(n.code,{children:"getRowId"})," to improve performance in the runs table visualization (#5725, @adamreeve)"]}),"\n",(0,i.jsxs)(n.li,{children:["[Serving] Fix ",(0,i.jsx)(n.code,{children:"tf-serving"})," parsing to support columnar-based formatting (#5825, @arjundc-db)"]}),"\n",(0,i.jsxs)(n.li,{children:["[Artifacts] Update ",(0,i.jsx)(n.code,{children:"log_artifact"})," to support models larger than 2GB in HDFS (#5812, @hitchhicker)"]}),"\n",(0,i.jsxs)(n.li,{children:["[Models] Fix autologging to support ",(0,i.jsx)(n.code,{children:"lightgbm"}),' metric names with "@" symbols within their names (#5785, @mengchendd)']}),"\n",(0,i.jsx)(n.li,{children:"[Models] Pyfunc: Fix code directory resolution of subdirectories (#5806, @dbczumar)"}),"\n",(0,i.jsx)(n.li,{children:"[Server-Infra] Fix mlflow-R server starting failure on windows (#5767, @serena-ruan)"}),"\n",(0,i.jsxs)(n.li,{children:["[Docs] Add documentation for ",(0,i.jsx)(n.code,{children:"virtualenv"})," environment manager support for MLflow projects (#5727, @harupy)"]}),"\n",(0,i.jsx)(n.li,{children:"[UI] Fix artifacts display sizing to support full width rendering in preview pane (#5606, @szczeles)"}),"\n",(0,i.jsx)(n.li,{children:"[Models] Fix local hostname issues when loading spark model by binding driver address to localhost (#5753, @WeichenXu123)"}),"\n",(0,i.jsxs)(n.li,{children:["[Models] Fix autologging validation and batch_size calculations for ",(0,i.jsx)(n.code,{children:"tensorflow"})," flavor (#5683, @MarkYHZhang)"]}),"\n",(0,i.jsxs)(n.li,{children:["[Artifacts] Fix ",(0,i.jsx)(n.code,{children:"SqlAlchemyStore.log_batch"})," implementation to make it log data in batches (#5460, @erensahin)"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For a comprehensive list of changes, see the ",(0,i.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/releases/tag/v1.26.0",children:"release change log"}),", and check out the latest documentation on ",(0,i.jsx)(n.a,{href:"http://mlflow.org/",children:"mlflow.org"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>t,a:()=>s});var i=r(7294);const l={},o=i.createContext(l);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);