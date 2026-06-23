import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Background3D from './components/Background3D';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Clients from './components/Clients';
import WhyKatalyst from './components/WhyKatalyst';
import Contact from './components/Contact';
import { motion } from 'framer-motion';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <Background3D />
      
      {/* Custom Glowing Cursor */}
      <motion.div 
        className="custom-cursor"
        animate={{
          x: mousePosition.x - 150,
          y: mousePosition.y - 150,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
      />

      <Navbar />
      
      <main className="snap-container">
        <Hero />
        <About />
        <Features />
        <Clients />
        <WhyKatalyst />
        <Contact />
      </main>
    </>
  );
}

export default App;
