"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1796],{9505:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=t(5893),r=t(1151);const i={title:"MLflow 2.10.0",slug:"2.10.0",authors:["mlflow-maintainers"]},s=void 0,a={permalink:"/mlflow-website/releases/2.10.0",source:"@site/releases/2024-01-26-2.10.0-release.md",title:"MLflow 2.10.0",description:"MLflow 2.10.0 includes several major features and improvements",date:"2024-01-26T00:00:00.000Z",formattedDate:"January 26, 2024",tags:[],readingTime:4.54,hasTruncateMarker:!1,authors:[{name:"MLflow maintainers",title:"MLflow maintainers",url:"https://github.com/mlflow/mlflow.git",imageURL:"https://github.com/mlflow-automation.png",key:"mlflow-maintainers"}],frontMatter:{title:"MLflow 2.10.0",slug:"2.10.0",authors:["mlflow-maintainers"]},unlisted:!1,prevItem:{title:"MLflow 2.10.1",permalink:"/mlflow-website/releases/2.10.1"},nextItem:{title:"MLflow 2.9.2",permalink:"/mlflow-website/releases/2.9.2"}},l={authorsImageUrls:[void 0]},d=[{value:"New MLflow Website",id:"new-mlflow-website",level:3},{value:"Model Signature Supports Objects and Arrays (#9936, @serena-ruan)",id:"model-signature-supports-objects-and-arrays-9936-serena-ruan",level:3},{value:"Langchain Autologging (#10801, @serena-ruan)",id:"langchain-autologging-10801-serena-ruan",level:3},{value:"Prompt Templating for Transformers Models",id:"prompt-templating-for-transformers-models",level:3},{value:"MLflow Deployments Server Enhancement",id:"mlflow-deployments-server-enhancement",level:3},{value:"Further Document Improvements",id:"further-document-improvements",level:3},{value:"Other Features:",id:"other-features",level:3},{value:"Bug fixes",id:"bug-fixes",level:3},{value:"Documentation updates:",id:"documentation-updates",level:3}];function c(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"MLflow 2.10.0 includes several major features and improvements"}),"\n",(0,o.jsx)(n.p,{children:"In MLflow 2.10, we're introducing a number of significant new features that are preparing the way for current and future enhanced support for Deep Learning use cases, new features to support a broadened support for GenAI applications, and some quality of life improvements for the MLflow Deployments Server (formerly the AI Gateway)."}),"\n",(0,o.jsx)(n.h3,{id:"new-mlflow-website",children:"New MLflow Website"}),"\n",(0,o.jsxs)(n.p,{children:["We have a new ",(0,o.jsx)(n.a,{href:"https://mlflow.org",children:"home"}),". The new site landing page is fresh, modern, and contains more content than ever. We're adding new content and blogs all of the time."]}),"\n",(0,o.jsx)(n.h3,{id:"model-signature-supports-objects-and-arrays-9936-serena-ruan",children:"Model Signature Supports Objects and Arrays (#9936, @serena-ruan)"}),"\n",(0,o.jsxs)(n.p,{children:["Objects and Arrays are now available as configurable input and output schema elements. These new types are particularly useful for GenAI-focused flavors that can have complex input and output types. See the new ",(0,o.jsx)(n.a,{href:"https://mlflow.org/docs/latest/model/signatures.html",children:"Signature and Input Example documentation"})," to learn more about how to use these new signature types."]}),"\n",(0,o.jsx)(n.h3,{id:"langchain-autologging-10801-serena-ruan",children:"Langchain Autologging (#10801, @serena-ruan)"}),"\n",(0,o.jsxs)(n.p,{children:["LangChain has autologging support now! When you invoke a chain, with autologging enabled, we will automatically log most chain implementations, recording and storing your configured LLM application for you. See the new ",(0,o.jsx)(n.a,{href:"https://mlflow.org/docs/latest/llms/langchain/index.html#mlflow-langchain-autologging",children:"Langchain documentation"})," to learn more about how to use this feature."]}),"\n",(0,o.jsx)(n.h3,{id:"prompt-templating-for-transformers-models",children:"Prompt Templating for Transformers Models"}),"\n",(0,o.jsxs)(n.p,{children:["The MLflow ",(0,o.jsx)(n.code,{children:"transformers"})," flavor now supports prompt templates. You can now specify an application-specific set of instructions to submit to your GenAI pipeline in order to simplify, streamline, and integrate sets of system prompts to be supplied with each input request. Check out the updated ",(0,o.jsx)(n.a,{href:"https://www.mlflow.org/docs/latest/llms/transformers/index.html",children:"guide to transformers"})," to learn more and see examples!"]}),"\n",(0,o.jsx)(n.h3,{id:"mlflow-deployments-server-enhancement",children:"MLflow Deployments Server Enhancement"}),"\n",(0,o.jsx)(n.p,{children:"The MLflow Deployments Server now supports two new requested features: (1) OpenAI endpoints that support streaming responses. You can now configure an endpoint to return realtime responses for Chat and Completions instead of waiting for the entire text contents to be completed. (2) Rate limits can now be set per endpoint in order to help control cost overrun when using SaaS models."}),"\n",(0,o.jsx)(n.h3,{id:"further-document-improvements",children:"Further Document Improvements"}),"\n",(0,o.jsx)(n.p,{children:"Continued the push for enhanced documentation, guides, tutorials, and examples by expanding on core MLflow functionality (Deployments, Signatures, and Model Dependency management), as well as entirely new pages for GenAI flavors. Check them out today!"}),"\n",(0,o.jsx)(n.h3,{id:"other-features",children:"Other Features:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["[Models] Enhance the MLflow Models ",(0,o.jsx)(n.code,{children:"predict"})," API to serve as a pre-logging validator of environment compatibility. (#10759, @B-Step62)"]}),"\n",(0,o.jsx)(n.li,{children:"[Models] Add support for Image Classification pipelines within the transformers flavor (#10538, @KonakanchiSwathi)"}),"\n",(0,o.jsx)(n.li,{children:"[Models] Add support for retrieving and storing license files for transformers models (#10871, @BenWilson2)"}),"\n",(0,o.jsx)(n.li,{children:"[Models] Add support for model serialization in the Visual NLP format for JohnSnowLabs flavor (#10603, @C-K-Loan)"}),"\n",(0,o.jsxs)(n.li,{children:["[Models] Automatically convert OpenAI input messages to LangChain chat messages for ",(0,o.jsx)(n.code,{children:"pyfunc"})," predict (#10758, @dbczumar)"]}),"\n",(0,o.jsxs)(n.li,{children:["[Tracking] Enhance async logging functionality by ensuring flush is called on ",(0,o.jsx)(n.code,{children:"Futures"})," objects (#10715, @chenmoneygithub)"]}),"\n",(0,o.jsxs)(n.li,{children:["[Tracking] Add support for a non-interactive mode for the ",(0,o.jsx)(n.code,{children:"login()"})," API (#10623, @henxing)"]}),"\n",(0,o.jsxs)(n.li,{children:["[Scoring] Allow MLflow model serving to support direct ",(0,o.jsx)(n.code,{children:"dict"})," inputs with the ",(0,o.jsx)(n.code,{children:"messages"})," key (#10742, @daniellok-db, @B-Step62)"]}),"\n",(0,o.jsx)(n.li,{children:"[Deployments] Add streaming support to the MLflow Deployments Server for OpenAI streaming return compatible routes (#10765, @gabrielfu)"}),"\n",(0,o.jsx)(n.li,{children:"[Deployments] Add support for directly interfacing with OpenAI via the MLflow Deployments server (#10473, @prithvikannan)"}),"\n",(0,o.jsx)(n.li,{children:"[UI] Introduce a number of new features for the MLflow UI (#10864, @daniellok-db)"}),"\n",(0,o.jsx)(n.li,{children:"[Server-infra] Add an environment variable that can disallow HTTP redirects (#10655, @daniellok-db)"}),"\n",(0,o.jsx)(n.li,{children:"[Artifacts] Add support for Multipart Upload for Azure Blob Storage (#10531, @gabrielfu)"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"bug-fixes",children:"Bug fixes"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"[Models] Add deduplication logic for pip requirements and extras handling for MLflow models (#10778, @BenWilson2)"}),"\n",(0,o.jsx)(n.li,{children:"[Models] Add support for paddle 2.6.0 release (#10757, @WeichenXu123)"}),"\n",(0,o.jsx)(n.li,{children:"[Tracking] Fix an issue with an incorrect retry default timeout for urllib3 1.x (#10839, @BenWilson2)"}),"\n",(0,o.jsx)(n.li,{children:"[Recipes] Fix an issue with MLflow Recipes card display format (#10893, @WeichenXu123)"}),"\n",(0,o.jsx)(n.li,{children:"[Java] Fix an issue with metadata collection when using Streaming Sources on certain versions of Spark where Delta is the source (#10729, @daniellok-db)"}),"\n",(0,o.jsx)(n.li,{children:"[Scoring] Fix an issue where SageMaker tags were not propagating correctly (#9310, @clarkh-ncino)"}),"\n",(0,o.jsx)(n.li,{children:"[Windows / Databricks] Fix an issue with executing Databricks run commands from within a Window environment (#10811, @wolpl)"}),"\n",(0,o.jsxs)(n.li,{children:["[Models / Databricks] Disable ",(0,o.jsx)(n.code,{children:"mlflowdbfs"})," mounts for JohnSnowLabs flavor due to flakiness (#9872, @C-K-Loan)"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"documentation-updates",children:"Documentation updates:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["[Docs] Fixed the ",(0,o.jsx)(n.code,{children:"KeyError: 'loss'"})," bug for the Quickstart guideline (#10886, @yanmxa)"]}),"\n",(0,o.jsx)(n.li,{children:"[Docs] Relocate and supplement Model Signature and Input Example docs (#10838, @BenWilson2)"}),"\n",(0,o.jsx)(n.li,{children:"[Docs] Add the HuggingFace Model Evaluation Notebook to the website (#10789, @BenWilson2)"}),"\n",(0,o.jsx)(n.li,{children:"[Docs] Rewrite the search run documentation (#10863, @chenmoneygithub)"}),"\n",(0,o.jsx)(n.li,{children:"[Docs] Create documentation for transformers prompt templates (#10836, @daniellok-db)"}),"\n",(0,o.jsx)(n.li,{children:"[Docs] Refactoring of the Getting Started page (#10798, @BenWilson2)"}),"\n",(0,o.jsx)(n.li,{children:"[Docs] Add a guide for model dependency management (#10807, @B-Step62)"}),"\n",(0,o.jsx)(n.li,{children:"[Docs] Add tutorials and guides for LangChain (#10770, @BenWilson2)"}),"\n",(0,o.jsx)(n.li,{children:"[Docs] Refactor portions of the Deep Learning documentation landing page (#10736, @chenmoneygithub)"}),"\n",(0,o.jsx)(n.li,{children:"[Docs] Refactor and overhaul the Deployment documentation and add new tutorials (#10726, @B-Step62)"}),"\n",(0,o.jsx)(n.li,{children:"[Docs] Add a PyTorch landing page, quick start, and guide (#10687, #10737 @chenmoneygithub)"}),"\n",(0,o.jsx)(n.li,{children:"[Docs] Add additional tutorials to OpenAI flavor docs (#10700, @BenWilson2)"}),"\n",(0,o.jsx)(n.li,{children:"[Docs] Enhance the guides on quickly getting started with MLflow by demonstrating how to use Databricks Community Edition (#10663, @BenWilson2)"}),"\n",(0,o.jsx)(n.li,{children:"[Docs] Create the OpenAI Flavor landing page and intro notebooks (#10622, @BenWilson2)"}),"\n",(0,o.jsx)(n.li,{children:"[Docs] Refactor the Tensorflow flavor API docs (#10662, @chenmoneygithub)"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["For a comprehensive list of changes, see the ",(0,o.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/releases/tag/v2.10.0",children:"release change log"}),", and check out the latest documentation on ",(0,o.jsx)(n.a,{href:"http://mlflow.org/",children:"mlflow.org"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var o=t(7294);const r={},i=o.createContext(r);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);