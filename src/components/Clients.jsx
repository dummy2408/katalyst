import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  'Samsung', 'Eighteen', 'Hashoo Group', 'Golden Palms Gwadar', 'Emaar',
  'Telenor', 'Djuice', 'MZ', 'Coca-Cola', 'Levi\'s', 'Pakistan Tobacco Company',
  'Red Bull', 'Ufone', 'Huawei', 'Tecno Mobile', 'Denizen', 'BMW',
  'United States Institute of Peace', 'Sindh Police', 'Zong 4G',
  'Manchester United', 'USAID', 'Population Council',
  'Ministry of Commerce & Textile Industry', 'Trade Development Authority of Pakistan'
];

const Clients = () => {
  return (
    <section id="clients" className="snap-section" style={{ padding: '100px 0', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', padding: '0 24px', textAlign: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: '64px' }}
        >
          <h2 style={{ fontSize: '3rem', marginBottom: '16px' }}>Satisfied <span className="gold-gradient-text">Clients</span></h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-silver)' }}>Trusted by leading organizations globally.</p>
        </motion.div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="glass-panel"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: (index % 10) * 0.1 }}
              viewport={{ once: true }}
              style={{
                padding: '12px 24px',
                fontSize: '1rem',
                fontWeight: '500',
                color: 'var(--text-white)',
                cursor: 'default',
              }}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: 'rgba(212, 175, 55, 0.2)',
                boxShadow: 'var(--neon-glow)'
              }}
            >
              {client}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
