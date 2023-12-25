"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[743],{1989:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2023/12/01/ai-gateway-rename","metadata":{"permalink":"/mlflow-site-refresh/blog/2023/12/01/ai-gateway-rename","source":"@site/blog/2023-12-01-ai-gateway-rename.md","title":"MLflow AI Gateway renamed to MLflow Deployments for LLMs","description":"If you are currently using the MLflow AI Gateway, please read this in full to get critically important information about this feature!","date":"2023-12-01T00:00:00.000Z","formattedDate":"December 1, 2023","tags":[{"label":"gateway","permalink":"/mlflow-site-refresh/blog/tags/gateway"}],"readingTime":1.87,"hasTruncateMarker":false,"authors":[{"name":"MLflow maintainers","title":"MLflow maintainers","url":"https://github.com/mlflow/mlflow.git","imageURL":"https://github.com/mlflow-automation.png","key":"mlflow-maintainers"}],"frontMatter":{"title":"MLflow AI Gateway renamed to MLflow Deployments for LLMs","tags":["gateway"],"authors":["mlflow-maintainers"]},"unlisted":false,"nextItem":{"title":"Automatic Metric, Parameter, and Artifact Logging with mlflow.autolog","permalink":"/mlflow-site-refresh/blog/2023/11/30/using-autolog"}},"content":"If you are currently using the MLflow AI Gateway, please read this in full to get critically important information about this feature!\\n\\n# \ud83d\udd14 Important Update Regarding the MLflow AI Gateway\\n\\nPlease note that the feature previously known as the `MLflow AI Gateway`, which was in an experimental phase, has undergone significant updates and improvements.\\n\\n## Introducing \\"MLflow Deployments for LLMs\\"\\n\\nThis feature, while still in experimental status, has been renamed and migrated to utilize the `deployments` API.\\n\\n## \ud83d\udd11 Key Changes\\n\\n**New Name, Enhanced Features**: The transition from \\"MLflow AI Gateway\\" to \\"MLflow Deployments for LLMs\\" reflects not only a change in name but also substantial enhancements in usability and **standardization** for API endpoints for Large Language Models.\\n\\n**API Changes**: With this move, there are changes to the API endpoints and configurations. Users are encouraged to review the updated API documentation to familiarize themselves with the new structure.\\n\\n**Migration Path**: For existing projects using \\"MLflow AI Gateway\\", a migration guide is available to assist with the transition to \\"MLflow Deployments for LLMs\\". This guide provides step-by-step instructions and best practices to ensure a smooth migration.\\n\\n\u26a0\ufe0f **Action Required**: Users who have been utilizing the experimental \\"MLflow AI Gateway\\" should plan to migrate to \\"MLflow Deployments for LLMs\\". While we aim to make this transition as seamless as possible, manual changes to your code and deployment configurations will be necessary. This new namespace for deploying the previously-known-as AI Gateway will be released in version 2.9.0. The old AI Gateway references will remain active but will enter a deprecated state. _We will be removing the entire AI Gateway namespace in a future release_.\\n\\n## \ud83d\udcda Resources and Support\\n\\n**Updated Documentation**: Detailed documentation for \\"MLflow Deployments for LLMs\\" is available [here](pathname:///docs/latest/llms/deployments/index.html). It includes comprehensive information about the modifications to API interfaces, updates to the input and output structures for queries and responses, API utilization, and the updated configuration options.\\n\\n**Community and Support**: If you have any questions or need assistance, please reach out to the maintainers [on GitHub](https://github.com/mlflow/mlflow/issues).\\n\\nWe are excited about these advancements and strongly believe that leveraging the deployments API will offer a more robust, efficient, and scalable solution for managing your Large Language Model deployments. Thank you for your continued support and collaboration!"},{"id":"/2023/11/30/using-autolog","metadata":{"permalink":"/mlflow-site-refresh/blog/2023/11/30/using-autolog","source":"@site/blog/2023-11-30-using-autolog/index.md","title":"Automatic Metric, Parameter, and Artifact Logging with mlflow.autolog","description":"Looking to learn more about the autologging functionality included in MLflow? Look no further than this primer on the basics of using this powerful and time-saving feature!","date":"2023-11-30T00:00:00.000Z","formattedDate":"November 30, 2023","tags":[{"label":"autolog","permalink":"/mlflow-site-refresh/blog/tags/autolog"}],"readingTime":5.89,"hasTruncateMarker":false,"authors":[{"name":"Daniel Liden","title":"Developer Advocate at Databricks","url":"https://www.linkedin.com/in/danielliden","imageURL":"https://github.com/djliden.png","key":"daniel-liden"}],"frontMatter":{"title":"Automatic Metric, Parameter, and Artifact Logging with mlflow.autolog","tags":["autolog"],"authors":["daniel-liden"]},"unlisted":false,"prevItem":{"title":"MLflow AI Gateway renamed to MLflow Deployments for LLMs","permalink":"/mlflow-site-refresh/blog/2023/12/01/ai-gateway-rename"},"nextItem":{"title":"MLflow Docs Overhaul","permalink":"/mlflow-site-refresh/blog/2023/10/31/mlflow-docs-overhaul"}},"content":"Looking to learn more about the autologging functionality included in MLflow? Look no further than this primer on the basics of using this powerful and time-saving feature!\\n\\n# Introduction to [mlflow.autolog](https://www.mlflow.org/docs/latest/tracking/autolog.html)\\n\\nRobust logging practices are central to the iterative development and improvement of machine learning models. Carefully tracking metrics, parameters, and artifacts can be challenging when working with complex machine learning libraries or when experimenting with multiple different frameworks with varying APIs and selections of different objects and values to track.\\n\\nMLflow\u2019s **automatic logging functionality** offers a simple solution that is compatible with many widely-used machine learning libraries, such as [PyTorch](https://mlflow.org/docs/latest/python_api/mlflow.pytorch.html), [Scikit-learn](https://mlflow.org/docs/latest/python_api/mlflow.sklearn.html#mlflow.sklearn.autolog), and [XGBoost](https://mlflow.org/docs/latest/python_api/mlflow.xgboost.html#mlflow.xgboost.autolog). Using `mlflow.autolog()` instructs MLflow to capture essential data without requiring the user to specify what to capture manually. It is an accessible and powerful entrypoint for MLflow\u2019s logging capabilities.\\n\\nTo enable automatic logging, simply add the following line to your machine learning scripts/notebooks, before initiating activities like model training or evaluation that may include information or artifacts you would like to log:\\n\\n```python\\nimport mlflow\\n\\n\\nmlflow.autolog()\\n```\\n\\n## Autolog features\\n\\nWhen a data science workflow includes `mlflow.autolog()`, MLflow will automatically log:\\n\\n- **Metrics**: standard training and evaluation measures such as accuracy and F1 score;\\n- **Parameters**: hyperparameters, such as learning rate and number of estimators; and\\n- **Artifacts**: important files, such as trained models.\\n\\nMLflow\u2019s automatic logging captures details tailored to the specific activities of the library being used: different libraries will result in different logged objects and data. In addition, MLflow logs key metadata such as software versions, a git commit hash, and the file name from which the run was initiated. By documenting the system\'s state during model training, MLflow aims to facilitate environment reproducibility and provide audit lineage, minimizing the possibility of inference issues that could arise from package regressions or deprecations in newer library versions.\\n\\nThe specifics of what is captured through automatic logging depend on the libraries used. Additionally, MLflow captures contextual metadata such as software versions, git commit hash, and the name of the file from which the run was launched. By logging as much detail as possible about the state of the system that trained the model, MLflow can offer environment reproducibility and audit lineage, minimizing the possibility of inference issues resulting from, for example, package regressions or deprecations.\\n\\n## Basic Usage of `mlflow.autolog`\\n\\nYou can access auto logging functionality in two different ways:\\n\\n1. Via the `mlflow.autolog()` function, which enables and configures automatic logging across all supported libraries. This provides a broad, one-size-fits-all approach when working with multiple libraries and is ideal for prototyping and exploratory analysis of a machine learning pipeline.\\n2. Via the library-specific autolog functions, such as `mlflow.sklearn.autolog()`, which enable finer-grained logging configuration for individual libraries. For example, `mlflow.pytorch.autolog()` includes the `log_every_n_epoch` and `log_every_n_step` arguments for specifying how often to log metrics.\\n\\nRegardless of which of these two approaches you use, you do not need to manually initialize an MLflow run with [start_run()](https://www.mlflow.org/docs/latest/python_api/mlflow.html#mlflow.start_run) in order to have a run created and for your model, parameters, and metrics to be captured in MLflow.\\n\\n### Example\\n\\n```python\\nimport mlflow\\nfrom sklearn import datasets\\nfrom sklearn.ensemble import RandomForestClassifier\\nfrom sklearn.model_selection import train_test_split\\n\\n# Generate a 3-class classification problem\\nX, y = datasets.make_classification(\\n    n_samples=1000,\\n    class_sep=0.5,\\n    random_state=42,\\n    n_classes=3,\\n    n_informative=3,\\n)\\n\\n# Split the data into training and validation sets\\nX_train, X_val, y_train, y_val = train_test_split(X, y, test_size=0.2, random_state=42)\\n\\n# Enable autolog\\nmlflow.autolog()  # or mlflow.sklearn.autolog()\\n\\n# Initialize the classifier with n_estimators=200 and max_depth=10\\nclf = RandomForestClassifier(n_estimators=200, max_depth=10)\\n\\n# Fit the classifier to the data.\\n# The `fit` method is patched to perform autologging. When engaged in training, a\\n# run is created and the parameters are logged.\\n# After the fit is complete, the model artifact is logged to the run.\\nclf.fit(X_train, y_train)\\n\\n# Score the model on the data\\n# The current active run is retrieved during calling `score` and the loss metrics are logged\\n# to the active MLflow run.\\nclf.score(X_val, y_val)\\n\\n# Visualize the automatically logged run results to validate what we recorded\\nmlflow.last_active_run()\\n```\\n\\nThe above logs model parameters, metrics, and the model to an MLflow run. The output result of the final statement ([mlflow.last_active_run()](https://www.mlflow.org/docs/latest/python_api/mlflow.html#mlflow.last_active_run)) in the above example, which will return data from the run on model metrics, parameters, and logged artifacts (results truncated) is as shown below:\\n\\n```text\\n<Run: data=<RunData:\\nmetrics={\'RandomForestClassifier_score_X_val\': 0.72,\\n         \'training_accuracy_score\': 0.99625,\\n         \'training_f1_score\': 0.9962547564333545,\\n         \'training_log_loss\': 0.3354604497935824,\\n         \'training_precision_score\': 0.9962921348314606,\\n         \'training_recall_score\': 0.99625,\\n         \'training_roc_auc\': 0.9998943433719795,\\n         \'training_score\': 0.99625\\n         },\\n params={\'bootstrap\': \'True\',\\n         \'ccp_alpha\': \'0.0\',\\n         \'class_weight\': \'None\',\\n         \'criterion\': \'gini\',\\n         \'max_depth\': \'10\',\\n         \'max_features\': \'sqrt\',\\n         \'max_leaf_nodes\': \'None\',\\n         [...],\\n         },\\ntags={\'estimator_class\': \'sklearn.ensemble._forest.RandomForestClassifier\',\\n      \'estimator_name\': \'RandomForestClassifier\',\\n      \'mlflow.autologging\': \'sklearn\',\\n      [...]\\n}, [...]>>\\n```\\n\\nYou can also access these in the mlflow ui by executing [mlflow ui](https://www.mlflow.org/docs/latest/tracking.html#tracking-ui) on a command line terminal.\\n\\n![The MLflow Tracking UI](./autolog_in_ui.png)\\n\\nThe MLflow UI also allows you to graphically compare different metrics and parameters across multiple runs, including those generated via `mlflow.autolog`.\\n\\n![Run comparison of autologged runs in the MLflow UI](./autolog_compare_runs.png)\\n\\n## Configuration and Customization\\n\\nThe automatic logging functions take many arguments that give the user greater control over logging behavior. For example, `mlflow.autolog()` includes `log_models` and `log_datasets` arguments (both `True` by default) that specify whether models and dataset information should be saved to the MLflow run, enabling you to specify what is actually logged. To disable automatic logging of datasets while continuing to log all the usual elements, simply disable the autologging of datasets feature by setting `mlflow.autolog(log_datasets=False)` before fitting a model. You can also adjust the behavior of library-specific autolog functions: for example, the `mlflow.sklearn.autolog()` function includes a `max_tuning_runs` argument that specifies how many nested runs to capture when performing hyperparameter searches.\\n\\n`mlflow.autolog()` can be used in combination with the library-specific autolog functions to control the logging behavior for specific libraries. The library-specific autolog call will always supersede `mlflow.autolog()`, regardless of the order in which they are called. For example, combining `mlflow.autolog()` with `mlflow.sklearn.autolog(disable=True)` will result in automatic logging for all supported libraries except for `scikit-learn`.\\n\\nIt is important to consult the documentation for the specific framework(s) you are using in order to understand what is logged automatically and what configuration options are available. See the [further reading section below](#further-reading) for links.\\n\\n## Conclusion and Next Steps\\n\\nMLflow\'s autologging capabilities and library-specific automatic logging functions provide a straightforward starting point for MLflow tracking with little or no required configuration. They log key metrics, parameters, and artifacts from many popular machine learning libraries, allowing users to track their machine learning workflows without writing custom tracking code.\\n\\nThey are not, however, the right solution for all use cases. If you only need to track a handful of specific metrics, enabling automatic logging may be inefficient, resulting in much more generated data and stored artifacts than needed. Furthermore, automatic logging is not available for every possible framework and custom values one might want to track. In such cases, it might be necessary to [manually specify what to track](https://mlflow.org/docs/latest/tracking/tracking-api.html#logging-functions).\\n\\n## Further Reading\\n\\n- [MLflow Documentation on Automatic Logging](https://mlflow.org/docs/latest/tracking/autolog.html)\\n- [Python API reference for mlflow.autolog](https://mlflow.org/docs/latest/python_api/mlflow.html#mlflow.autolog)\\n- Python API references for library-specific autolog functions\\n  - [PyTorch](https://mlflow.org/docs/latest/python_api/mlflow.pytorch.html)\\n  - [Tensorflow](https://mlflow.org/docs/latest/python_api/mlflow.tensorflow.html#mlflow.tensorflow.autolog)\\n  - [Scikit-learn](https://mlflow.org/docs/latest/python_api/mlflow.sklearn.html#mlflow.sklearn.autolog)\\n  - [XGBoost](https://mlflow.org/docs/latest/python_api/mlflow.xgboost.html#mlflow.xgboost.autolog)\\n  - [PySpark](https://mlflow.org/docs/latest/python_api/mlflow.pyspark.ml.html#mlflow.pyspark.ml.autolog)\\n  - [Statsmodels](https://mlflow.org/docs/latest/python_api/mlflow.statsmodels.html#mlflow.statsmodels.autolog)\\n  - [LightGBM](https://mlflow.org/docs/latest/python_api/mlflow.lightgbm.html#mlflow.lightgbm.autolog)\\n  - [Paddle](https://mlflow.org/docs/latest/python_api/mlflow.paddle.html#mlflow.paddle.autolog)\\n  - [Fastai](https://mlflow.org/docs/latest/python_api/mlflow.fastai.html#mlflow.fastai.autolog)"},{"id":"/2023/10/31/mlflow-docs-overhaul","metadata":{"permalink":"/mlflow-site-refresh/blog/2023/10/31/mlflow-docs-overhaul","source":"@site/blog/2023-10-31-mlflow-docs-overhaul.md","title":"MLflow Docs Overhaul","description":"The MLflow Documentation is getting an upgrade.","date":"2023-10-31T00:00:00.000Z","formattedDate":"October 31, 2023","tags":[{"label":"docs","permalink":"/mlflow-site-refresh/blog/tags/docs"}],"readingTime":5.095,"hasTruncateMarker":false,"authors":[{"name":"MLflow maintainers","title":"MLflow maintainers","url":"https://github.com/mlflow/mlflow.git","imageURL":"https://github.com/mlflow-automation.png","key":"mlflow-maintainers"}],"frontMatter":{"title":"MLflow Docs Overhaul","tags":["docs"],"authors":["mlflow-maintainers"]},"unlisted":false,"prevItem":{"title":"Automatic Metric, Parameter, and Artifact Logging with mlflow.autolog","permalink":"/mlflow-site-refresh/blog/2023/11/30/using-autolog"}},"content":"The MLflow Documentation is getting an upgrade.\\n\\n## Overhauling the MLflow Docs\\n\\nWe\'re thrilled to announce a comprehensive overhaul of the MLflow Docs. This initiative is not just about refreshing the look and feel but about reimagining how our users interact with our content. Our primary goal is to enhance clarity, improve navigation, and provide more in-depth resources for our community.\\n\\n## A Renewed Focus on User Experience\\n\\nThe MLflow documentation has always been an essential resource for our users. Over time, we\'ve received invaluable feedback, and we\'ve listened. The modernization effort is a direct response to the needs and preferences of our community.\\n\\nAlong with working on covering new cutting-edge features as part of this documentation overhaul, we\'re working on addressing the complexity of getting started. As the first part of a series of tutorials and guides focusing on the initial learning phase, we\'ve created a new [getting started guide](https://www.mlflow.org/docs/latest/getting-started/logging-first-model/index.html), the first of many in a new series we\'re working on in an effort to teach the fundamentals of using MLflow. We feel that more in-depth instructional tutorials for learning the concepts and tools of MLflow will help to enhance the user experience for not only new users, but experienced users who need a refresher of how to do certain tasks.\\n\\nThere are more of these coming in the future!\\n\\n### **Easier Navigation**\\n\\nOur first order of business is to declutter and reorganize. This is going to be a process, though. With some of the monolithic pages ([Mlflow Models](https://www.mlflow.org/docs/2.7.1/models.html)), this will be more of a marathon than a sprint.\\n\\nWe\'ve introduced a [new main navigation page](https://www.mlflow.org/docs/latest/index.html) in an effort to help steer you to the content that you\'re looking for based on end-use domain, rather than component of MLflow. We\'re hoping that this helps to bring new feature content and useful examples to your awareness, limiting the amount of exploratory discovery needed to understand how to use these new features.\\n\\nAnother priority for us was to make major new features easier to discover. While the [release notes](https://github.com/mlflow/mlflow/blob/master/CHANGELOG.md) are useful, particularly for Engineers who are maintaining integrations with, or are managing a deployment of, MLflow, they\'re not particularly user-friendly for an end-user of MLflow. We felt that a curated list of major new features would help to distill the information in our release notes, so we built the [new features](https://www.mlflow.org/docs/latest/new-features/index.html) page. We sincerely hope it helps to reduce the amount of effort needed to know what new major features have been released.\\n\\n### **Interactive Learning with Notebooks**\\n\\nIn today\'s fast-paced tech world, interactive learning is becoming the norm. Recognizing this trend, we\'re embedding viewable notebooks directly within the docs. But we\'re not stopping there. These notebooks are downloadable, allowing you to run, modify, and experiment with them locally. It\'s a hands-on approach to learning, bridging the gap between theory and practice.\\n\\n### **In-depth Tutorials and Guides**\\n\\nWhile our previous documentation provided a solid foundation, we felt there was room for more detailed explorations. We\'re introducing comprehensive [tutorials](https://www.mlflow.org/docs/latest/traditional-ml/creating-custom-pyfunc/index.html) and [guides](https://www.mlflow.org/docs/latest/llms/llm-evaluate/index.html) that delve deep into MLflow\'s features, showing how to solve actual problems. These first new tutorials and guides are just the start. We\'re going to be spending a lot of time and effort on making much more of MLflow documented in this way, helping to dramatically reduce the amount of time you have to spend figuring out how to leverage features in MLflow.\\n\\n## Diving Deeper: Expanding on Guides and Tutorials\\n\\nOur dedication to simplifying the usage of MLflow shines through in our revamped tutorials and guides. We\'re not just providing instructions; we\'re offering [deep dives](https://www.mlflow.org/docs/latest/llms/custom-pyfunc-for-llms/notebooks/index.html), [best practices](https://www.mlflow.org/docs/latest/traditional-ml/hyperparameter-tuning-with-child-runs/index.html), and real-world applications. What you see in the MLflow 2.8.0 release is just the beginning. We\'re going to be heavily focusing on creating more content, showing the best way to leverage the many features and services within MLflow, all the while endeavoring to make it easier than ever to manage any ML project you\'re working on.\\n\\n- **LLMs**: With all of the [new LLM-focused features](https://www.mlflow.org/docs/latest/llms/llm-evaluate/notebooks/rag-evaluation.html) we\'ve been releasing in the past year, we feel the need to create easier getting started guides,\\n  [in-depth tutorials](https://www.mlflow.org/docs/latest/llms/llm-evaluate/notebooks/question-answering-evaluation.html), runnable examples, and more teaching-oriented step-by-step introductions to these features.\\n\\n- **Tracking and the MLflow UI**: Our expanded section on tracking will cover everything from setting up your first experiment to advanced tracking techniques. The MLflow UI, an integral part of the platform, will also get its spotlight, ensuring you can make the most of its features.\\n\\n- **Model Registry**: The model registry is where MLflow truly shines, and our new guides will ensure you can harness its full power. From organizing models to version control, we\'ll cover it all.\\n\\n- **Recipes and LLM-focused Features**: MLflow\'s versatility is one of its strengths. Our new content will explore the breadth of features available, from recipes to LLM-focused tools like the AI Gateway, LLM Evaluation, and the PromptLab UI.\\n\\n## The Transformative Power of Interactive Notebooks\\n\\nInteractive notebooks have revolutionized data science and machine learning. By integrating them into our documentation, we aim to provide a holistic learning experience. You can see code in action, understand its impact, and then experiment on their own. It\'s a dynamic way to grasp complex concepts, ensuring that you not only understand but can also apply your knowledge in your actual project code.\\n\\n## Join Us on This Journey\\n\\nThe overhaul of the MLflow documentation is a significant milestone, but it\'s just the beginning. We have a roadmap full of exciting updates, new content, and features. And for those in our community with a passion for sharing knowledge, we have a message: We\'d love to [collaborate](https://github.com/mlflow/mlflow/blob/master/CONTRIBUTING.md)! Whether it\'s writing tutorials, sharing use-cases, or providing feedback, every contribution enriches the MLflow community.\\n\\nIn conclusion, our commitment to providing top-notch documentation is a new primary focus of the maintainer group. We believe that well-documented features, combined with interactive learning tools, can significantly enhance the experience of using any tool. We want to put in the effort and time to make sure that your journey with using MLflow is as simple and powerful as it can be.\\n\\nStay tuned for more updates, and as always, happy coding!"}]}')}}]);