import React from "react";
import sanjanaPic from "../Assets/sanjana-professional.jpg";

export const profile = {
  name: "Sanjana S D",
  titles: [
    "Data Engineer",
    "Software Developer",
    "Full Stack Developer",
    "AI Engineer",
  ],
  bio: [
    <React.Fragment key="bio-1">
      I'm a final-year <strong className="font-semibold text-foreground">B.E. Computer Science</strong> student with a strong foundation in <strong className="font-semibold text-foreground">software engineering</strong>, <strong className="font-semibold text-foreground">scalable data pipelines</strong>, <strong className="font-semibold text-foreground">AI-driven solutions</strong>, and <strong className="font-semibold text-foreground">modern web application development</strong>.
    </React.Fragment>,
    <React.Fragment key="bio-2">
      Currently working as a <strong className="font-semibold text-foreground">Frontend Design & Developer Intern</strong> at <strong className="font-semibold text-foreground">Croevo AI</strong>, where I transform ideas into polished, responsive, and user-centric digital experiences through thoughtful UI/UX design and performance-driven development.
    </React.Fragment>,
    <React.Fragment key="bio-3">
      My project experience spans <strong className="font-semibold text-foreground">AI agents</strong>, <strong className="font-semibold text-foreground">RAG architectures</strong>, <strong className="font-semibold text-foreground">intelligent applications</strong>, and <strong className="font-semibold text-foreground">end-to-end data engineering</strong>, with a focus on building practical solutions using emerging technologies.
    </React.Fragment>,
    <React.Fragment key="bio-4">
      I'm passionate about exploring <strong className="font-semibold text-foreground">Generative AI</strong>, <strong className="font-semibold text-foreground">LLMs</strong>, <strong className="font-semibold text-foreground">Apache Spark</strong>, <strong className="font-semibold text-foreground">Kafka</strong>, <strong className="font-semibold text-foreground">React.js</strong>, and <strong className="font-semibold text-foreground">Node.js</strong>, while continuously strengthening my problem-solving abilities and engineering expertise.
    </React.Fragment>,
    <React.Fragment key="bio-5">
      I don't just explore technology — I build with it, experiment with it, and turn ideas into working solutions.
    </React.Fragment>,
  ],
  image: sanjanaPic,
  social: {
    email: "sanjudineshsm@gmail.com",
    linkedin: "https://www.linkedin.com/in/sanjana-s-d/",
    github: "https://github.com/Sanjana-SD",
    phone: "+91 9945387929",
  },
};

