import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="snap-section" style={{ padding: '100px 0', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%', padding: '0 24px', textAlign: 'center' }}>
        <motion.div 
          className="glass-panel"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ padding: '60px 40px', display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center' }}
        >
          <h2 style={{ fontSize: '3.5rem' }}>Our <span className="gold-gradient-text">Commitment</span></h2>
          <p style={{ fontSize: '2rem', color: 'var(--text-white)', fontWeight: 'bold' }}>
            Your success is our mission.
          </p>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-silver)', lineHeight: 1.6, maxWidth: '600px' }}>
            We focus on building long-term partnerships based on trust, transparency, and results. Let's work together to drive your business forward.
          </p>
          
          <motion.a 
            href="mailto:contact@katalystconsultant.com"
            className="primary-btn neon-hover"
            style={{ 
              marginTop: '20px', 
              textDecoration: 'none', 
              display: 'inline-block',
              borderRadius: '30px',
              border: '2px solid var(--primary-gold)'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            contact@katalystconsultant.com
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
