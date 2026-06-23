import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Compass, UserCheck } from 'lucide-react';
import './Features.css'; // Reuse CSS for grid

const About = () => {
  return (
    <section id="about" className="features-section snap-section" style={{ minHeight: '100vh', padding: '100px 0' }}>
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

        <div className="features-grid" style={{ marginBottom: '60px' }}>
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
          <motion.div className="feature-card glass-panel" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
             <div className="feature-icon-wrapper" style={{ padding: 0, overflow: 'hidden', borderRadius: '50%', width: '80px', height: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="/ceo.jpeg" alt="Aasim Shah Kakaa’Khel" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
             </div>
             <h3 className="feature-title">Leadership</h3>
             <p className="feature-desc">Led by <strong>Aasim Shah Kakaa’Khel</strong>, Founder & CEO, guiding our strategic intelligence.</p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', background: 'rgba(10, 14, 23, 0.4)', padding: '40px', borderRadius: '16px', border: '1px solid var(--glass-gold-border)' }}
        >
          <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>Execution <span className="gold-gradient-text">Framework</span></h3>
          <p style={{ color: 'var(--text-silver)', marginBottom: '30px' }}>At KATALYST, we follow a proven execution framework to identify opportunities, minimize risks, and implement high-impact strategies tailored for each client’s business environment:</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            {['Observe', 'Analyze', 'Decide', 'Execute'].map((step, idx) => (
              <React.Fragment key={step}>
                <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--text-white)' }}>{step}</div>
                {idx < 3 && <div style={{ color: 'var(--primary-gold)' }}>→</div>}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
