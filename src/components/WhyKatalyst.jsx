import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const reasons = [
  'One-Window Integrated Business Solutions',
  'Strategic Intelligence',
  'Practical Execution',
  'Strong Trade & Market Networks',
  'Customized Client-Centric Strategies',
  'Proven Operational Methodologies'
];

const WhyKatalyst = () => {
  return (
    <section id="why-katalyst" className="snap-section" style={{ padding: '100px 0', minHeight: '100vh', display: 'flex', alignItems: 'center', background: 'var(--bg-darker)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', padding: '0 24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '64px' }}>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ flex: 1, minWidth: '300px' }}
        >
          <h2 style={{ fontSize: '3rem', marginBottom: '24px', fontWeight: 800, letterSpacing: '-0.02em' }}>Why <span className="gold-gradient-text">KATALYST?</span></h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-silver)', marginBottom: '40px', lineHeight: 1.7 }}>
            We don't just provide advice; we partner with you to execute. Our unique combination of intelligence and operational capability sets us apart.
          </p>
        </motion.div>

        <div style={{ flex: 1, minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                padding: '20px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                background: '#FFFFFF',
                borderRadius: '12px',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.03)',
                transition: 'all 0.3s ease',
              }}
              whileHover={{
                x: -8,
                borderColor: 'rgba(184, 134, 11, 0.3)',
                boxShadow: '0 4px 16px rgba(184, 134, 11, 0.10)'
              }}
            >
              <CheckCircle size={22} color="var(--primary-gold)" style={{ flexShrink: 0 }} />
              <span style={{ fontSize: '1.05rem', color: 'var(--text-white)', fontWeight: 500 }}>{reason}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyKatalyst;
