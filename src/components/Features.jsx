import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Briefcase, Scale, Users } from 'lucide-react';
import './Features.css';

const featuresData = [
  {
    icon: <Globe size={40} color="var(--primary-gold)" />,
    title: 'Business & Trade Facilitation',
    description: 'Market research, competitive analysis, and network expansion for competitive markets.',
  },
  {
    icon: <Briefcase size={40} color="var(--primary-gold)" />,
    title: 'Advisory & Investment Services',
    description: 'Strategic guidance for business growth, investment structuring, and real estate.',
  },
  {
    icon: <Scale size={40} color="var(--primary-gold)" />,
    title: 'Legal & Recovery Support',
    description: 'Risk management, asset recovery, dispute resolution, and legal advisory.',
  },
  {
    icon: <Users size={40} color="var(--primary-gold)" />,
    title: 'Business Networking & Alliances',
    description: 'International liaison, strategic partnerships, and business restructuring.',
  }
];

const FeatureCard = ({ feature, index }) => {
  return (
    <motion.div
      className="feature-card glass-panel"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ 
        scale: 1.05, 
        rotateX: 10, 
        rotateY: -10,
        boxShadow: "0 20px 40px rgba(0,0,0,0.4), var(--neon-glow)"
      }}
      style={{ transformPerspective: 1000 }}
    >
      <div className="feature-icon-wrapper">
        {feature.icon}
      </div>
      <h3 className="feature-title">{feature.title}</h3>
      <p className="feature-desc">{feature.description}</p>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section id="services" className="features-section snap-section">
      <div className="features-container">
        <motion.div 
          className="features-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Core <span className="gold-gradient-text">Services Portfolio</span></h2>
          <p className="section-subtitle">Integrated strategic solutions for organizations in Pakistan and internationally.</p>
        </motion.div>
        
        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
