import React from 'react';
import { certifications } from '../data/certifications';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt, FaCode, FaChartBar, FaTerminal } from 'react-icons/fa';

const getIcon = (iconName) => {
  switch (iconName) {
    case 'code': return <FaCode />;
    case 'analytics': return <FaChartBar />;
    case 'terminal': return <FaTerminal />;
    default: return <FaCertificate />;
  }
};

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-foreground/[0.02]">
      <div className="container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">Recognized achievements and credentials.</p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {certifications.map((cert, idx) => (
            <motion.div 
              key={idx}
              className="group relative rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.12)"
              }}
            >
              {/* Floating icon accent */}
              <motion.div 
                className="absolute -top-3 -right-3 w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-purple-500 text-white text-xs shadow-lg"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.5 }}
              >
                {getIcon(cert.icon)}
              </motion.div>

              <div>
                <h3 className="text-lg font-semibold leading-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent group-hover:text-primary transition-colors">
                  {cert.name}
                </h3>
                <p className="mt-2 text-sm font-medium text-primary/80">{cert.issuer}</p>
                <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="bg-muted px-2 py-0.5 rounded-full">{cert.period}</span>
                </div>
              </div>

              {cert.link && (
                <div className="mt-6 pt-4 border-t border-border/30">
                  <motion.a 
                    href={cert.link} 
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                  >
                    View Credential <FaExternalLinkAlt className="text-[10px]" />
                  </motion.a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
