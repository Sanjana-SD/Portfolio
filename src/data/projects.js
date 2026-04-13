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
    title: 'StockSense AI Engine',
    period: 'March 2026',
    bullets: [
      'Architected a real-time investment intelligence platform processing multi-source financial data using Kafka, Spark Streaming, and Airflow, enabling continuous data ingestion and analysis.',
      'Developed and deployed machine learning models (XGBoost, LSTM, FinBERT) with MLflow tracking and FastAPI endpoints for stock prediction, forecasting, and sentiment analysis.',
    ],
    links: {
      code: 'https://github.com/Sanjana-SD/StockSense',
      demo: null,
    },
    tags: ['FastAPI', 'PostgreSQL', 'MLflow', 'FinBERT', 'Kafka', 'Spark'],
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


