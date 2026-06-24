import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="snap-section" style={{ padding: '100px 0', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%', padding: '0 24px', textAlign: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            padding: '64px 48px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            alignItems: 'center',
            background: 'var(--bg-darker)',
            borderRadius: '20px',
            border: '1px solid rgba(0, 0, 0, 0.06)',
          }}
        >
          <h2 style={{ fontSize: '3rem', fontWeight: 800, letterSpacing: '-0.02em' }}>Our <span className="gold-gradient-text">Commitment</span></h2>
          <p style={{ fontSize: '1.8rem', color: 'var(--text-white)', fontWeight: 700 }}>
            Your success is our mission.
          </p>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-silver)', lineHeight: 1.7, maxWidth: '550px' }}>
            We focus on building long-term partnerships based on trust, transparency, and results. Let's work together to drive your business forward.
          </p>
          
          <motion.a 
            href="mailto:contact@katalystconsultant.com"
            style={{ 
              marginTop: '16px', 
              textDecoration: 'none', 
              display: 'inline-block',
              padding: '14px 36px',
              borderRadius: '10px',
              background: 'var(--primary-gold)',
              color: '#FFFFFF',
              fontFamily: 'var(--font-heading)',
              fontWeight: 600,
              fontSize: '0.95rem',
              boxShadow: '0 2px 8px rgba(184, 134, 11, 0.25)',
              transition: 'all 0.3s ease',
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 4px 20px rgba(184, 134, 11, 0.35)' }}
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
