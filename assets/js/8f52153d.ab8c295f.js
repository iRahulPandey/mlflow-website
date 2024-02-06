"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6517],{6072:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=t(5893),o=t(1151);const s={title:"MLflow 2.10.1",slug:"2.10.1",authors:["mlflow-maintainers"]},r=void 0,l={permalink:"/mlflow-website/releases/2.10.1",source:"@site/releases/2024-02-06-2.10.1-release.md",title:"MLflow 2.10.1",description:"MLflow 2.10.1 is a patch release, containing fixes for various bugs in the transformers and langchain flavors, the MLflow UI, and the S3 artifact store. More details can be found in the patch notes below.",date:"2024-02-06T00:00:00.000Z",formattedDate:"February 6, 2024",tags:[],readingTime:1.095,hasTruncateMarker:!1,authors:[{name:"MLflow maintainers",title:"MLflow maintainers",url:"https://github.com/mlflow/mlflow.git",imageURL:"https://github.com/mlflow-automation.png",key:"mlflow-maintainers"}],frontMatter:{title:"MLflow 2.10.1",slug:"2.10.1",authors:["mlflow-maintainers"]},unlisted:!1,nextItem:{title:"MLflow 2.10.0",permalink:"/mlflow-website/releases/2.10.0"}},a={authorsImageUrls:[void 0]},c=[];function d(e){const n={a:"a",code:"code",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["MLflow 2.10.1 is a patch release, containing fixes for various bugs in the ",(0,i.jsx)(n.code,{children:"transformers"})," and ",(0,i.jsx)(n.code,{children:"langchain"})," flavors, the MLflow UI, and the S3 artifact store. More details can be found in the patch notes below."]}),"\n",(0,i.jsx)(n.p,{children:"Bug fixes:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"[UI] Fixed a bug that prevented datasets from showing up in the MLflow UI (#10992, @daniellok-db)"}),"\n",(0,i.jsx)(n.li,{children:"[Artifact Store] Fixed directory bucket region name retrieval (#10967, @kriscon-db)"}),"\n",(0,i.jsxs)(n.li,{children:["Bug fixes for Transformers flavor","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"[Models] Fix an issue with transformer pipelines not inheriting the torch dtype specified on the model, causing pipeline inference to consume more resources than expected. (#10979, @B-Step62)"}),"\n",(0,i.jsx)(n.li,{children:"[Models] Fix non-idempotent prediction due to in-place update to model-config (#11014, @B-Step62)"}),"\n",(0,i.jsxs)(n.li,{children:["[Models] Fixed a bug affecting prompt templating with Text2TextGeneration pipelines. Previously, calling ",(0,i.jsx)(n.code,{children:"predict()"})," on a pyfunc-loaded Text2TextGeneration pipeline would fail for ",(0,i.jsx)(n.code,{children:"string"})," and ",(0,i.jsx)(n.code,{children:"List[string]"})," inputs. (#10960, @B-Step62)"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Bug fixes for Langchain flavor","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Fixed errors that occur when logging inputs and outputs with different lengths (#10952, @serena-ruan)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Documentation updates:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"[Docs] Add indications of DL UI capabilities to the DL landing page (#10991, @BenWilson2)"}),"\n",(0,i.jsx)(n.li,{children:"[Docs] Fix incorrect logo on LLMs landing page (#11017, @BenWilson2)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Small bug fixes and documentation updates:"}),"\n",(0,i.jsx)(n.p,{children:"#10930, #11005, @serena-ruan; #10927, @harupy"}),"\n",(0,i.jsxs)(n.p,{children:["For a comprehensive list of changes, see the ",(0,i.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/releases/tag/v2.10.1",children:"release change log"}),", and check out the latest documentation on ",(0,i.jsx)(n.a,{href:"http://mlflow.org/",children:"mlflow.org"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var i=t(7294);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);