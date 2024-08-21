// This file is auto-generated by scripts/compile.ts. Do not edit this file directly.

export type Author = {
  name: string;
  title: string;
  url: string;
  image_url: string;
};

export type Blog = {
  title: string;
  tags?: string[];
  authors: Author[];
  path: string;
  date: string;
  thumbnail: string;
};

export type Release = {
  title: string;
  authors: Author[];
  path: string;
  date: string;
  version: string;
};

// Sort by date descending
export const BLOGS: Blog[] = [
  {
    title: "LangGraph with Custom PyFunc",
    path: "/blog/mlflow",
    tags: ["genai", "mlops"],
    authors: [
      {
        name: "Michael Berk",
        title: "Sr. Resident Solutions Architect at Databricks",
        url: "https://www.linkedin.com/in/-michael-berk/",
        image_url: "/img/authors/michael_berk.png",
      },
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2024-08-06",
    thumbnail: "img/blog/release-candidates.png",
  },
  {
    title: "PyFunc in Practice",
    path: "/blog/pyfunc-in-practice",
    tags: ["pyfunc", "mlflow", "ensemble-models"],
    authors: [
      {
        name: "Hugo Carvalho",
        title: "Machine Learning Analyst at adidas",
        url: "https://www.linkedin.com/in/hugodscarvalho/",
        image_url: "/img/authors/hugo_carvalho.png",
      },
      {
        name: "Joana Ferreira",
        title: "Machine Learning Engineer at adidas",
        url: "https://www.linkedin.com/in/joanaferreira96/",
        image_url: "/img/authors/joana_ferreira.png",
      },
      {
        name: "Rahul Pandey",
        title: "Sr. Solutions Architect at adidas",
        url: "https://www.linkedin.com/in/rahulpandey1901/",
        image_url: "/img/ambassadors/Rahul_Pandey.png",
      },
      {
        name: "Filipe Miranda",
        title: "Sr. Data Engineer at adidas",
        url: "https://www.linkedin.com/in/filipe-miranda-b576b186/",
        image_url: "/img/authors/filipe_miranda.png",
      },
    ],
    date: "2024-07-26",
    thumbnail: "img/blog/pyfunc-in-practice.png",
  },
  {
    title: "Introducing MLflow Tracing",
    path: "/blog/mlflow-tracing",
    tags: ["tracing", "genai", "mlops"],
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2024-06-10",
    thumbnail: "img/blog/trace-intro.gif",
  },
  {
    title: "Deep Learning with MLflow (Part 2)",
    path: "/blog/deep-learning-part-2",
    tags: ["Deep Learning"],
    authors: [
      {
        name: "Puneet Jain",
        title: "Sr. Specialist Solutions Architect at Databricks",
        url: "https://www.linkedin.com/in/puneetjain159/",
        image_url: "/img/authors/puneet.png",
      },
      {
        name: "Avinash Sooriyarachchi",
        title: "Sr. Solutions Architect at Databricks",
        url: "https://www.linkedin.com/in/avi-data-ml/",
        image_url: "/img/authors/avinash.png",
      },
      {
        name: "Abe Omorogbe",
        title: "Product Manager, ML at Databricks",
        url: "https://www.linkedin.com/in/abeomor/",
        image_url: "/img/authors/abe.png",
      },
      {
        name: "Ben Wilson",
        title: "Software Engineer at Databricks",
        url: "https://www.linkedin.com/in/benjamin-wilson-arch/",
        image_url: "/img/authors/ben.png",
      },
    ],
    date: "2024-04-26",
    thumbnail: "img/blog/dl-blog-2.png",
  },
  {
    title: "MLflow Release Candidates",
    path: "/blog/release-candidates",
    tags: ["mlflow"],
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2024-04-17",
    thumbnail: "img/blog/release-candidates.png",
  },
  {
    title:
      "Announcing MLflow Enhancements - Deep Learning with MLflow (Part 1)",
    path: "/blog/deep-learning-part-1",
    tags: ["Deep Learning"],
    authors: [
      {
        name: "Abe Omorogbe",
        title: "Product Manager, ML at Databricks",
        url: "https://www.linkedin.com/in/abeomor/",
        image_url: "/img/authors/abe.png",
      },
      {
        name: "Hubert Zub",
        title: "Software Engineer at Databricks",
        url: "https://www.linkedin.com/in/hubert-zub/",
        image_url: "/img/authors/hubert.png",
      },
      {
        name: "Yun Park",
        title: "Software Engineer at Databricks",
        url: "https://www.linkedin.com/in/yunpark93/",
        image_url: "/img/authors/yun.png",
      },
      {
        name: "Chen Qian",
        title: "Software Engineer at Databricks",
        url: "https://www.linkedin.com/in/thomas-chen-qian/",
        image_url: "/img/authors/chen.png",
      },
      {
        name: "Jesse Chan",
        title: "Software Engineer at Databricks",
      },
    ],
    date: "2024-03-05",
    thumbnail: "img/blog/dl-chart-grouping.gif",
  },
  {
    title: "2023 Year in Review",
    path: "/blog/mlflow-year-in-review",
    tags: ["MLflow", "2023", "Linux Foundation"],
    authors: [
      {
        name: "Carly Akerly",
        title: "OSS Marketing Consultant at The Linux Foundation",
        url: "https://www.linkedin.com/in/carlyakerly/",
        image_url: "/img/authors/carly.png",
      },
    ],
    date: "2024-01-26",
    thumbnail: "img/blog/2023-year-in-review.png",
  },
  {
    title: "Streamline your MLflow Projects with Free Hosted MLflow",
    path: "/blog/databricks-ce",
    tags: ["managed mlflow", "getting started"],
    authors: [
      {
        name: "Abe Omorogbe",
        title: "Product Manager, ML at Databricks",
        url: "https://www.linkedin.com/in/abeomor/",
        image_url: "/img/authors/abe.png",
      },
    ],
    date: "2024-01-25",
    thumbnail: "img/blog/databricks-ce.png",
  },
  {
    title: "Custom MLflow Models with mlflow.pyfunc",
    path: "/blog/custom-pyfunc",
    tags: ["pyfunc", "models"],
    authors: [
      {
        name: "Daniel Liden",
        title: "Developer Advocate at Databricks",
        url: "https://www.linkedin.com/in/danielliden",
        image_url: "/img/authors/daniel_liden.png",
      },
    ],
    date: "2024-01-23",
    thumbnail: "img/blog/custom-pyfunc.png",
  },
  {
    title: "MLflow AI Gateway renamed to MLflow Deployments for LLMs",
    path: "/blog/ai-gateway-rename",
    tags: ["ai"],
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2023-12-01",
    thumbnail: "img/blog/ai-gateway.png",
  },
  {
    title:
      "Automatic Metric, Parameter, and Artifact Logging with mlflow.autolog",
    path: "/blog/mlflow-autolog",
    tags: ["autolog"],
    authors: [
      {
        name: "Daniel Liden",
        title: "Developer Advocate at Databricks",
        url: "https://www.linkedin.com/in/danielliden",
        image_url: "/img/authors/daniel_liden.png",
      },
    ],
    date: "2023-11-30",
    thumbnail: "img/blog/mlflow-autolog.png",
  },
  {
    title: "MLflow Docs Overhaul",
    path: "/blog/mlflow-docs-overhaul",
    tags: ["docs"],
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2023-10-31",
    thumbnail: "img/blog/docs-overhaul.png",
  },
];

// Sort by date descending
export const RELEASES: Release[] = [
  {
    title: "MLflow 2.15.1",
    path: "/releases/2.15.1",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2024-08-06",
    version: "2.15.1",
  },
  {
    title: "MLflow 2.15.0",
    path: "/releases/2.15.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2024-07-29",
    version: "2.15.0",
  },
  {
    title: "MLflow 2.14.3",
    path: "/releases/2.14.3",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2024-07-12",
    version: "2.14.3",
  },
  {
    title: "MLflow 2.14.2",
    path: "/releases/2.14.2",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2024-07-03",
    version: "2.14.2",
  },
  {
    title: "MLflow 2.14.1",
    path: "/releases/2.14.1",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2024-06-20",
    version: "2.14.1",
  },
  {
    title: "MLflow 2.14.0",
    path: "/releases/2.14.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2024-06-17",
    version: "2.14.0",
  },
  {
    title: "MLflow 2.13.2",
    path: "/releases/2.13.2",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2024-06-06",
    version: "2.13.2",
  },
  {
    title: "MLflow 2.13.1",
    path: "/releases/2.13.1",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2024-05-30",
    version: "2.13.1",
  },
  {
    title: "MLflow 2.13.0",
    path: "/releases/2.13.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2024-05-20",
    version: "2.13.0",
  },
  {
    title: "MLflow 2.12.2",
    path: "/releases/2.12.2",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2024-05-08",
    version: "2.12.2",
  },
  {
    title: "MLflow 2.12.1",
    path: "/releases/2.12.1",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2024-04-17",
    version: "2.12.1",
  },
  {
    title: "MLflow 2.12.0",
    path: "/releases/2.12.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2024-04-16",
    version: "2.12.0",
  },
  {
    title: "MLflow 2.11.3",
    path: "/releases/2.11.3",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2024-03-21",
    version: "2.11.3",
  },
  {
    title: "MLflow 2.11.2",
    path: "/releases/2.11.2",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2024-03-19",
    version: "2.11.2",
  },
  {
    title: "MLflow 2.11.1",
    path: "/releases/2.11.1",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2024-03-06",
    version: "2.11.1",
  },
  {
    title: "MLflow 2.11.0",
    path: "/releases/2.11.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2024-03-01",
    version: "2.11.0",
  },
  {
    title: "MLflow 2.10.2",
    path: "/releases/2.10.2",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2024-02-09",
    version: "2.10.2",
  },
  {
    title: "MLflow 2.10.1",
    path: "/releases/2.10.1",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2024-02-06",
    version: "2.10.1",
  },
  {
    title: "MLflow 2.10.0",
    path: "/releases/2.10.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2024-01-26",
    version: "2.10.0",
  },
  {
    title: "MLflow 2.9.2",
    path: "/releases/2.9.2",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2023-12-14",
    version: "2.9.2",
  },
  {
    title: "MLflow 2.9.1",
    path: "/releases/2.9.1",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2023-12-07",
    version: "2.9.1",
  },
  {
    title: "MLflow 2.9.0",
    path: "/releases/2.9.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2023-12-06",
    version: "2.9.0",
  },
  {
    title: "MLflow 2.8.1",
    path: "/releases/2.8.1",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2023-11-15",
    version: "2.8.1",
  },
  {
    title: "MLflow 2.8.0",
    path: "/releases/2.8.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2023-10-29",
    version: "2.8.0",
  },
  {
    title: "MLflow 2.7.1",
    path: "/releases/2.7.1",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2023-09-17",
    version: "2.7.1",
  },
  {
    title: "MLflow 2.7.0",
    path: "/releases/2.7.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2023-09-12",
    version: "2.7.0",
  },
  {
    title: "MLflow 2.6.0",
    path: "/releases/2.6.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2023-08-15",
    version: "2.6.0",
  },
  {
    title: "MLflow 2.5.0",
    path: "/releases/2.5.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2023-07-17",
    version: "2.5.0",
  },
  {
    title: "MLflow 2.4.0",
    path: "/releases/2.4.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2023-06-06",
    version: "2.4.0",
  },
  {
    title: "MLflow 2.3.2",
    path: "/releases/2.3.2",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2023-05-12",
    version: "2.3.2",
  },
  {
    title: "MLflow 2.3.1",
    path: "/releases/2.3.1",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2023-04-28",
    version: "2.3.1",
  },
  {
    title: "MLflow 2.3.0",
    path: "/releases/2.3.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2023-04-18",
    version: "2.3.0",
  },
  {
    title: "MLflow 2.2.2",
    path: "/releases/2.2.2",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2023-03-14",
    version: "2.2.2",
  },
  {
    title: "MLflow 2.2.1",
    path: "/releases/2.2.1",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2023-03-02",
    version: "2.2.1",
  },
  {
    title: "MLflow 2.2.0",
    path: "/releases/2.2.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2023-03-01",
    version: "2.2.0",
  },
  {
    title: "MLflow 2.1.1",
    path: "/releases/2.1.1",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2022-12-26",
    version: "2.1.1",
  },
  {
    title: "MLflow 2.1.0",
    path: "/releases/2.1.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2022-12-21",
    version: "2.1.0",
  },
  {
    title: "MLflow 2.0.1",
    path: "/releases/2.0.1",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2022-11-14",
    version: "2.0.1",
  },
  {
    title: "MLflow 1.30.0",
    path: "/releases/1.30.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2022-10-19",
    version: "1.30.0",
  },
  {
    title: "MLflow 1.29.0",
    path: "/releases/1.29.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2022-09-19",
    version: "1.29.0",
  },
  {
    title: "MLflow 1.28.0",
    path: "/releases/1.28.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2022-08-11",
    version: "1.28.0",
  },
  {
    title: "MLflow 1.27.0",
    path: "/releases/1.27.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2022-06-28",
    version: "1.27.0",
  },
  {
    title: "MLflow 1.26.1",
    path: "/releases/1.26.1",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2022-05-27",
    version: "1.26.1",
  },
  {
    title: "MLflow 1.26.0",
    path: "/releases/1.26.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2022-05-16",
    version: "1.26.0",
  },
  {
    title: "MLflow 1.24.0",
    path: "/releases/1.24.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2022-02-28",
    version: "1.24.0",
  },
  {
    title: "MLflow 1.23.1",
    path: "/releases/1.23.1",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2022-01-27",
    version: "1.23.1",
  },
  {
    title: "MLflow 1.23.0",
    path: "/releases/1.23.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2022-01-17",
    version: "1.23.0",
  },
  {
    title: "MLflow 1.22.0",
    path: "/releases/1.22.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2021-11-29",
    version: "1.22.0",
  },
  {
    title: "MLflow 1.21.0",
    path: "/releases/1.21.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2021-10-25",
    version: "1.21.0",
  },
  {
    title: "MLflow 1.20.2",
    path: "/releases/1.20.2",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2021-09-03",
    version: "1.20.2",
  },
  {
    title: "MLflow 1.20.0",
    path: "/releases/1.20.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2021-08-26",
    version: "1.20.0",
  },
  {
    title: "MLflow 1.20.1",
    path: "/releases/1.20.1",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2021-08-26",
    version: "1.20.1",
  },
  {
    title: "MLflow 1.19.0",
    path: "/releases/1.19.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2021-07-14",
    version: "1.19.0",
  },
  {
    title: "MLflow 1.18.0",
    path: "/releases/1.18.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2021-06-18",
    version: "1.18.0",
  },
  {
    title: "MLflow 1.17.0",
    path: "/releases/1.17.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2021-05-08",
    version: "1.17.0",
  },
  {
    title: "MLflow 1.16.0",
    path: "/releases/1.16.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2021-04-24",
    version: "1.16.0",
  },
  {
    title: "MLflow 1.15.0",
    path: "/releases/1.15.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2021-03-26",
    version: "1.15.0",
  },
  {
    title: "MLflow 1.14.1",
    path: "/releases/1.14.1",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2021-03-01",
    version: "1.14.1",
  },
  {
    title: "MLflow 1.14.0",
    path: "/releases/1.14.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2021-02-20",
    version: "1.14.0",
  },
  {
    title: "MLflow 1.13.1",
    path: "/releases/1.13.1",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2020-12-31",
    version: "1.13.1",
  },
  {
    title: "MLflow 1.13.0",
    path: "/releases/1.13.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2020-12-24",
    version: "1.13.0",
  },
  {
    title: "MLflow 1.12.1",
    path: "/releases/1.12.1",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2020-11-19",
    version: "1.12.1",
  },
  {
    title: "MLflow 1.12.0",
    path: "/releases/1.12.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2020-11-11",
    version: "1.12.0",
  },
  {
    title: "MLflow 1.11.0",
    path: "/releases/1.11.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2020-08-31",
    version: "1.11.0",
  },
  {
    title: "MLflow 1.10.0",
    path: "/releases/1.10.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2020-07-20",
    version: "1.10.0",
  },
  {
    title: "MLflow 1.9.1",
    path: "/releases/1.9.1",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2020-06-25",
    version: "1.9.1",
  },
  {
    title: "MLflow 1.9.0",
    path: "/releases/1.9.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2020-06-19",
    version: "1.9.0",
  },
  {
    title: "MLflow 1.8.0",
    path: "/releases/1.8.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2020-04-21",
    version: "1.8.0",
  },
  {
    title: "MLflow 1.7.2",
    path: "/releases/1.7.2",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2020-03-20",
    version: "1.7.2",
  },
  {
    title: "MLflow 1.7.1",
    path: "/releases/1.7.1",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2020-03-17",
    version: "1.7.1",
  },
  {
    title: "MLflow 1.7.0",
    path: "/releases/1.7.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2020-03-02",
    version: "1.7.0",
  },
  {
    title: "MLflow 1.6.0",
    path: "/releases/1.6.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2020-01-29",
    version: "1.6.0",
  },
  {
    title: "MLflow 1.5.0",
    path: "/releases/1.5.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2019-12-19",
    version: "1.5.0",
  },
  {
    title: "MLflow 1.4.0",
    path: "/releases/1.4.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2019-10-30",
    version: "1.4.0",
  },
  {
    title: "MLflow 1.3.0",
    path: "/releases/1.3.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2019-09-30",
    version: "1.3.0",
  },
  {
    title: "MLflow 1.2.0",
    path: "/releases/1.2.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2019-08-12",
    version: "1.2.0",
  },
  {
    title: "MLflow 1.1.0",
    path: "/releases/1.1.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2019-07-22",
    version: "1.1.0",
  },
  {
    title: "MLflow 0.9.1",
    path: "/releases/0.9.1",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2019-04-21",
    version: "0.9.1",
  },
  {
    title: "MLflow 0.9.0",
    path: "/releases/0.9.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2019-03-28",
    version: "0.9.0",
  },
  {
    title: "MLflow 0.8.2",
    path: "/releases/0.8.2",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2019-01-28",
    version: "0.8.2",
  },
  {
    title: "MLflow 0.8.1",
    path: "/releases/0.8.1",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2018-12-21",
    version: "0.8.1",
  },
  {
    title: "MLflow 0.8.0",
    path: "/releases/0.8.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2018-11-12",
    version: "0.8.0",
  },
  {
    title: "MLflow 0.7.0",
    path: "/releases/0.7.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2018-10-01",
    version: "0.7.0",
  },
  {
    title: "MLflow 0.6.0",
    path: "/releases/0.6.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2018-09-10",
    version: "0.6.0",
  },
  {
    title: "MLflow 0.5.2",
    path: "/releases/0.5.2",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2018-08-24",
    version: "0.5.2",
  },
  {
    title: "MLflow 0.5.1",
    path: "/releases/0.5.1",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2018-08-23",
    version: "0.5.1",
  },
  {
    title: "MLflow 0.5.0",
    path: "/releases/0.5.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2018-08-17",
    version: "0.5.0",
  },
  {
    title: "MLflow 0.4.2",
    path: "/releases/0.4.2",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2018-08-07",
    version: "0.4.2",
  },
  {
    title: "MLflow 0.4.1",
    path: "/releases/0.4.1",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2018-08-03",
    version: "0.4.1",
  },
  {
    title: "MLflow 0.4.0",
    path: "/releases/0.4.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2018-08-01",
    version: "0.4.0",
  },
  {
    title: "MLflow 0.3.0",
    path: "/releases/0.3.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2018-07-18",
    version: "0.3.0",
  },
  {
    title: "MLflow 0.2.1",
    path: "/releases/0.2.1",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2018-06-28",
    version: "0.2.1",
  },
  {
    title: "MLflow 0.2.0",
    path: "/releases/0.2.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2018-06-27",
    version: "0.2.0",
  },
  {
    title: "MLflow 0.1.0",
    path: "/releases/0.1.0",
    authors: [
      {
        name: "MLflow maintainers",
        title: "MLflow maintainers",
        url: "https://github.com/mlflow/mlflow.git",
        image_url: "https://github.com/mlflow-automation.png",
      },
    ],
    date: "2018-06-05",
    version: "0.1.0",
  },
];
