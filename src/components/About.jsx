import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass } from 'lucide-react';
import './Features.css'; // Reuse CSS for grid

const About = () => {
  return (
    <section id="about" className="features-section snap-section" style={{ minHeight: '100vh', padding: '100px 0', background: '#FFFFFF' }}>
      <div className="features-container">
        <motion.div 
          className="features-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Company <span className="gold-gradient-text">Overview</span></h2>
          <p className="section-subtitle" style={{ maxWidth: '800px', margin: '0 auto', marginBottom: '20px' }}>
            KATALYST (Pvt.) Ltd. is a professional business consultancy and facilitation firm, delivering integrated strategic solutions to organizations in Pakistan and across international markets. We specialize in enabling growth, resolving various operational challenges, facilitating trade, optimizing investments, and building reliable, sustainable business frameworks.
          </p>
          <p className="section-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Our strength lies in combining strategic intelligence with practical execution — ensuring measurable results for every client we serve.
          </p>
        </motion.div>

        {/* Vision & Mission Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '80px' }}>
          <motion.div className="feature-card glass-panel" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
             <div className="feature-icon-wrapper"><Compass size={32} color="var(--primary-gold)" /></div>
             <h3 className="feature-title">Our Vision</h3>
             <p className="feature-desc">To become a leading consultancy recognized for strategic excellence, integrity, and impactful business solutions.</p>
          </motion.div>
          <motion.div className="feature-card glass-panel" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
             <div className="feature-icon-wrapper"><Target size={32} color="var(--primary-gold)" /></div>
             <h3 className="feature-title">Our Mission</h3>
             <p className="feature-desc">Empower organizations with reliable, innovative, and result-driven consulting services that drive sustainable growth, market expansion, and long-term success.</p>
          </motion.div>
        </div>

        {/* Founder / CEO Dedicated Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '48px',
            background: 'var(--bg-darker)',
            borderRadius: '20px',
            padding: '48px',
            border: '1px solid rgba(0, 0, 0, 0.06)',
            marginBottom: '80px',
          }}
        >
          {/* Founder Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ flex: '0 0 auto' }}
          >
            <div style={{
              width: '280px',
              height: '340px',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '3px solid rgba(184, 134, 11, 0.2)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.10)',
            }}>
              <img
                src="/founder.jpeg"
                alt="Aasim Shah Kakaa'Khel — Founder & CEO"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                }}
              />
            </div>
          </motion.div>

          {/* Founder Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            style={{ flex: 1, minWidth: '280px' }}
          >
            <p style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--primary-gold)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '8px',
            }}>
              Founder & Chief Executive Officer
            </p>
            <h3 style={{
              fontSize: '2.2rem',
              fontWeight: 800,
              color: 'var(--text-white)',
              marginBottom: '20px',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
            }}>
              Aasim Shah Kakaa'Khel
            </h3>
            <p style={{
              fontSize: '1.05rem',
              color: 'var(--text-silver)',
              lineHeight: 1.8,
              marginBottom: '16px',
            }}>
              A visionary leader with deep expertise in strategic business consulting, trade facilitation, and corporate advisory. Aasim Shah founded KATALYST with the mission of bridging the gap between strategic intelligence and practical execution for businesses operating in complex markets.
            </p>
            <p style={{
              fontSize: '1.05rem',
              color: 'var(--text-silver)',
              lineHeight: 1.8,
              marginBottom: '24px',
            }}>
              With years of experience across diverse industries — from international trade and investment to government liaison and corporate restructuring — he brings a unique perspective that combines analytical rigor with hands-on operational capability. Under his leadership, KATALYST has grown to serve leading national and multinational organizations.
            </p>
            <div style={{
              display: 'flex',
              gap: '32px',
              flexWrap: 'wrap',
              paddingTop: '20px',
              borderTop: '1px solid rgba(0, 0, 0, 0.06)',
            }}>
              <div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--primary-gold)' }}>25+</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-silver)', marginTop: '4px' }}>Satisfied Clients</div>
              </div>
              <div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--primary-gold)' }}>10+</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-silver)', marginTop: '4px' }}>Industries Served</div>
              </div>
              <div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--primary-gold)' }}>Global</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-silver)', marginTop: '4px' }}>Market Reach</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Execution Framework */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', background: 'var(--bg-darker)', padding: '48px', borderRadius: '16px', border: '1px solid rgba(0, 0, 0, 0.06)' }}
        >
          <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>Execution <span className="gold-gradient-text">Framework</span></h3>
          <p style={{ color: 'var(--text-silver)', marginBottom: '30px' }}>At KATALYST, we follow a proven execution framework to identify opportunities, minimize risks, and implement high-impact strategies tailored for each client's business environment:</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            {['Observe', 'Analyze', 'Decide', 'Execute'].map((step, idx) => (
              <React.Fragment key={step}>
                <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--text-white)' }}>{step}</div>
                {idx < 3 && <div style={{ color: 'var(--primary-gold)', fontWeight: '700' }}>→</div>}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
