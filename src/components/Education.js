import React from 'react';
import { education } from '../data/education';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Education
          </h2>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, idx) => (
            <motion.div 
              key={idx}
              className="rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ 
                scale: 1.01,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                    {edu.degree}
                  </h3>
                  <h4 className="text-sm text-primary font-medium mt-1">{edu.institution}</h4>
                </div>
                <span className="text-xs text-muted-foreground bg-gradient-to-r from-muted/30 to-muted/50 px-3 py-1 rounded-full border border-border/50 self-start">
                  {edu.period}
                </span>
              </div>
              {edu.extra && (
                <p className="mt-3 text-sm text-muted-foreground bg-foreground/[0.02] p-2 rounded-md border border-border/30 inline-block font-medium">
                  {edu.extra}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;