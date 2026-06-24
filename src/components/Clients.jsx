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
    <section id="clients" className="snap-section" style={{ padding: '100px 0', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#FFFFFF' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', padding: '0 24px', textAlign: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: '64px' }}
        >
          <h2 style={{ fontSize: '2.75rem', marginBottom: '16px', fontWeight: 800, letterSpacing: '-0.02em' }}>Satisfied <span className="gold-gradient-text">Clients</span></h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-silver)' }}>Trusted by leading organizations globally.</p>
        </motion.div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: (index % 10) * 0.05 }}
              viewport={{ once: true }}
              style={{
                padding: '10px 22px',
                fontSize: '0.95rem',
                fontWeight: '500',
                color: 'var(--text-white)',
                cursor: 'default',
                background: 'var(--bg-darker)',
                borderRadius: '10px',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s ease',
              }}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: 'rgba(184, 134, 11, 0.08)',
                borderColor: 'rgba(184, 134, 11, 0.25)',
                boxShadow: '0 4px 16px rgba(184, 134, 11, 0.12)'
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
