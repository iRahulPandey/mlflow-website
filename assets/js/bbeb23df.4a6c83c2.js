"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7068],{7744:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=t(5893),r=t(1151);const a={title:"MLflow 1.21.0",tags:["release"],authors:["mlflow-maintainers"]},l=void 0,s={permalink:"/mlflow-site-refresh/releases/2021/10/25/1.21.0-release",source:"@site/releases/2021-10-25-1.21.0-release.md",title:"MLflow 1.21.0",description:"We are happy to announce the availability of MLflow 1.21.0!",date:"2021-10-25T00:00:00.000Z",formattedDate:"October 25, 2021",tags:[{label:"release",permalink:"/mlflow-site-refresh/releases/tags/release"}],readingTime:2.15,hasTruncateMarker:!1,authors:[{name:"MLflow maintainers",title:"MLflow maintainers",url:"https://github.com/mlflow/mlflow.git",imageURL:"https://github.com/mlflow-automation.png",key:"mlflow-maintainers"}],frontMatter:{title:"MLflow 1.21.0",tags:["release"],authors:["mlflow-maintainers"]},unlisted:!1,prevItem:{title:"MLflow 1.22.0",permalink:"/mlflow-site-refresh/releases/2021/11/29/1.22.0-release"},nextItem:{title:"MLflow 1.20.2",permalink:"/mlflow-site-refresh/releases/2021/09/03/1.20.2-release"}},o={authorsImageUrls:[void 0]},c=[];function d(e){const n={a:"a",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["We are happy to announce the availability of ",(0,i.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/releases/tag/v1.21.0",children:"MLflow 1.21.0"}),"!"]}),"\n",(0,i.jsx)(n.p,{children:"MLflow 1.21.0 includes several major features and improvements:"}),"\n",(0,i.jsx)(n.p,{children:"Features:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"[UI] Add a diff-only toggle to the runs table for filtering out columns with constant values (#4862, @marijncv)"}),"\n",(0,i.jsx)(n.li,{children:"[UI] Add a duration column to the runs table (#4840, @marijncv)"}),"\n",(0,i.jsx)(n.li,{children:"[UI] Display the default column sorting order in the runs table (#4847, @marijncv)"}),"\n",(0,i.jsx)(n.li,{children:"[UI] Add start_time and duration information to exported runs CSV (#4851, @marijncv)"}),"\n",(0,i.jsx)(n.li,{children:"[UI] Add lifecycle stage information to the run page (#4848, @marijncv)"}),"\n",(0,i.jsx)(n.li,{children:"[UI] Collapse run page sections by default for space efficiency, limit artifact previews to 50MB (#4917, @dbczumar)"}),"\n",(0,i.jsx)(n.li,{children:"[Tracking] Introduce autologging capabilities for PaddlePaddle model training (#4751, @jinminhao)"}),"\n",(0,i.jsx)(n.li,{children:"[Tracking] Add an optional tags field to the CreateExperiment API (#4788, @dbczumar; #4795, @apurva-koti)"}),"\n",(0,i.jsx)(n.li,{children:"[Tracking] Add support for deleting artifacts from SFTP stores via the mlflow gc CLI (#4670, @afaul)"}),"\n",(0,i.jsx)(n.li,{children:"[Tracking] Support AzureDefaultCredential for authenticating with Azure artifact storage backends (#4002, @marijncv)"}),"\n",(0,i.jsx)(n.li,{children:"[Models] Upgrade the fastai model flavor to support fastai V2 (>=2.4.1) (#4715, @jinzhang21)"}),"\n",(0,i.jsx)(n.li,{children:"[Models] Introduce an mlflow.prophet model flavor for Prophet time series models (#4773, @BenWilson2)"}),"\n",(0,i.jsx)(n.li,{children:"[Models] Introduce a CLI for publishing MLflow Models to the SageMaker Model Registry (#4669, @jinnig)"}),"\n",(0,i.jsx)(n.li,{children:"[Models] Print a warning when inferred model dependencies are not available on PyPI (#4891, @dbczumar)"}),"\n",(0,i.jsx)(n.li,{children:"[Models, Projects] Add MLFLOW_CONDA_CREATE_ENV_CMD for customizing Conda environment creation (#4746, @giacomov)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Bug fixes and documentation updates:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"[UI] Fix an issue where column selections made in the runs table were persisted across experiments (#4926, @sunishsheth2009)"}),"\n",(0,i.jsx)(n.li,{children:"[UI] Fix an issue where the text null was displayed in the runs table column ordering dropdown (#4924, @harupy)"}),"\n",(0,i.jsx)(n.li,{children:"[UI] Fix a bug causing the metric plot view to display NaN values upon click (#4858, @arpitjasa-db)"}),"\n",(0,i.jsx)(n.li,{children:"[Tracking] Fix a model load failure for paths containing spaces or special characters on UNIX systems (#4890, @BenWilson2)"}),"\n",(0,i.jsx)(n.li,{children:"[Tracking] Correct a migration issue that impacted usage of MLflow Tracking with SQL Server (#4880, @marijncv)"}),"\n",(0,i.jsx)(n.li,{children:"[Tracking] Spark datasource autologging tags now respect the maximum allowable size for MLflow Tracking (#4809, @dbczumar)"}),"\n",(0,i.jsx)(n.li,{children:"[Model Registry] Add previously-missing certificate sources for Model Registry REST API requests (#4731, @ericgosno91)"}),"\n",(0,i.jsx)(n.li,{children:"[Model Registry] Throw an exception when users supply invalid Model Registry URIs for Databricks (#4877, @yunpark93)"}),"\n",(0,i.jsx)(n.li,{children:"[Scoring] Fix a schema enforcement error that incorrectly cast date-like strings to datetime objects (#4902, @wentinghu)"}),"\n",(0,i.jsx)(n.li,{children:"[Docs] Expand the documentation for the MLflow Skinny Client (#4113, @eedeleon)"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For a comprehensive list of changes, see the ",(0,i.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/releases/tag/v1.21.0",children:"release change log"}),", and check out the latest documentation on ",(0,i.jsx)(n.a,{href:"http://mlflow.org/",children:"mlflow.org"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>l});var i=t(7294);const r={},a=i.createContext(r);function l(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);