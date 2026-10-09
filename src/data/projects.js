export const projects = [
  {
    title: 'Liveability Scoring System',
    period: 'March 2026',
    bullets: [
      'Built a full-stack AI-powered platform integrating 6+ civic datasets (crime, AQI, transit, satellite data) using data pipelines and REST APIs, enabling real-time data processing and visualization.',
      'Designed and implemented a scalable backend with PostgreSQL + PostGIS, performing spatial queries and joins to generate ward-level insights for 100+ regions.',
      'Enabled machine learning insights by preparing feature-rich datasets for KMeans clustering, XGBoost prediction, and SHAP-based explainability, powering an interactive Streamlit dashboard.',
    ],
    links: {
      code: 'https://github.com/preetham-sgowda/liveability-scoring-system',
      demo: null,
    },
    tags: ['Apache Airflow', 'PostgreSQL', 'XGBoost', 'Streamlit', 'Python', 'PostGIS'],
  },
  {
    title: 'GenomeRAG',
    period: 'July 2026',
    bullets: [
      'Engineered an evolutionary memory framework for 500+ autonomous AI agents, optimizing 10 memory genome parameters across 100+ generations using genetic algorithms.',
      'Improved long-horizon reasoning accuracy by 18–25% and reduced memory retrieval latency by 35% compared with fixed-memory RAG baselines through adaptive memory evolution.',
    ],
    links: {
      code: 'https://github.com/Sanjana-SD/GenomeRAG',
      demo: null,
    },
    tags: ['LangGraph', 'PyTorch', 'DEAP', 'Qdrant'],
  },
  {
    title: 'Reddit InsightForge',
    period: 'February 2026',
    bullets: [
      'Built an end-to-end Reddit analytics pipeline (Bronze -> Silver -> Gold) using Python, Pandas, MinIO, and Docker to transform raw JSON into optimized Parquet datasets.',
      'Developed and deployed an interactive Streamlit dashboard with KPI metrics, filters, and dynamic visualizations integrated with cloud-based object storage.',
    ],
    links: {
      code: 'https://github.com/Sanjana-SD/Reddit-InsightForge',
      demo: 'https://v0-reddit-insightforge.vercel.app',
    },
    tags: ['MinIO(S3)', 'Docker', 'Streamlit', 'Python', 'Pandas'],
  },
];


