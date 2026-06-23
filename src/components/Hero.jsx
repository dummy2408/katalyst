import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section snap-section">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="hero-title">
            Observe. <span className="gold-gradient-text">Analyze.</span>
            <br />
            Decide. Execute.
          </h1>
          <p className="hero-subtitle">
            Professional business consultancy delivering integrated strategic solutions in Pakistan and across international markets.
          </p>
          <div className="hero-cta">
            <button className="primary-btn glass-panel neon-hover" onClick={() => document.getElementById('services').scrollIntoView()}>
              Our Services
            </button>
            <button className="secondary-btn" onClick={() => document.getElementById('why-katalyst').scrollIntoView()}>
              Why KATALYST?
            </button>
          </div>
        </motion.div>
        
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Removed LevitatingSphere as requested */}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
