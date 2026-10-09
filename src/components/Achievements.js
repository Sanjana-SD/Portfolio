import React from 'react';
import { achievements } from '../data/achievements';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaAward, FaTrophy } from 'react-icons/fa';

const getAchievementIcon = (iconName) => {
  switch (iconName) {
    case 'shield':
      return <FaShieldAlt />;
    case 'award':
      return <FaAward />;
    default:
      return <FaTrophy />;
  }
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          className="absolute top-1/3 left-10 w-44 h-44 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-2xl"
          animate={{ 
            x: [0, 20, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Achievements
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">Key honors, programs, and recognitions.</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              className="group relative rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.12)"
              }}
            >
              {/* Floating icon accent */}
              <motion.div 
                className="absolute -top-3 -right-3 w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-white text-sm shadow-lg"
                whileHover={{ rotate: 360, scale: 1.15 }}
                transition={{ duration: 0.5 }}
              >
                {getAchievementIcon(item.icon)}
              </motion.div>

              <div>
                <div className="flex items-center justify-between gap-4 mb-3 pr-6">
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block text-xs text-primary font-medium bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                    {item.date}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
