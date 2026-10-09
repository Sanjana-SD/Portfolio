// src/App.js
import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import { SkeletonGrid } from './components/ui/skeleton';
import './index.css';
const Experience = React.lazy(() => import('./components/Experience'));
const Projects = React.lazy(() => import('./components/Projects'));
const Skills = React.lazy(() => import('./components/Skills'));
const Education = React.lazy(() => import('./components/Education'));
const Certifications = React.lazy(() => import('./components/Certifications'));
const Achievements = React.lazy(() => import('./components/Achievements'));
const Contact = React.lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Sanjana S D - Data Engineer | Full Stack Developer</title>
        <meta
          name="description"
          content="Sanjana S D — Data Engineer and Full Stack Developer. Expert in building scalable data pipelines, machine learning platforms, and responsive web applications using Python, Spark, React.js, and Node.js."
        />
        <meta
          name="keywords"
          content="Sanjana S D, Sanjana SD, Sanjana SD Portfolio, Data Engineer, Full Stack Developer, Python Developer, React.js Developer, Apache Spark, Kafka, Machine Learning, Croevo AI Intern, GenomeRAG"
        />
        <meta name="author" content="Sanjana S D" />
        <meta
          property="og:title"
          content="Sanjana S D — Data Engineer | Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Data Engineer and Full Stack Developer specializing in data pipelines, Spark, and React. Explore my projects including Liveability Scoring System and GenomeRAG."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sanjana-sd.github.io/Portfolio/" />
        <meta
          property="og:site_name"
          content="Sanjana S D Portfolio"
        />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Sanjana S D — Data Engineer | Full Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Data Engineer and Full Stack Developer. View my portfolio."
        />
        <link rel="canonical" href="https://sanjana-sd.github.io/Portfolio/" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Sanjana S D",
            "url": "https://sanjana-sd.github.io/Portfolio/",
            "sameAs": [
              "https://github.com/Sanjana-SD",
              "https://www.linkedin.com/in/sanjana-s-d/"
            ],
            "jobTitle": "Data Engineer | Full Stack Developer",
            "knowsAbout": ["Python", "JavaScript", "React.js", "Apache Spark", "Kafka", "PostgreSQL", "Data Pipelines", "Machine Learning", "Docker", "LangGraph", "PyTorch"],
            "alumniOf": {
              "@type": "CollegeOrUniversity",
              "name": "Kalpataru Institute of Technology"
            },
            "description": "Data Engineer and Full Stack Developer with experience in building scalable data systems and modern web applications.",
            "email": "sanjudineshsm@gmail.com"
          }
        `}</script>
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Sanjana S D Portfolio",
            "url": "https://sanjana-sd.github.io/Portfolio/",
            "description": "Portfolio of Sanjana S D — Data Engineer and Full Stack Developer."
          }
        `}</script>
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
      </Helmet>
      <Header />
      <div className="main-content">
        <About />
        <Suspense
          fallback={
            <div className="container py-16">
              <SkeletonGrid count={6} />
            </div>
          }>
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Certifications />
          <Achievements />
          <Contact />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;