"use client";
import React, { useRef } from 'react';
import PredictionForm from '@/components/ui/PredictionForm';
import Footer from '@/components/ui/Footer';
import Navbar from '@/components//ui/Navbar';
import Services from '@/components/ui/Services';
import AboutUs from '@/components/ui/AboutUS';
import Contact from '@/components/ui/Contact';

export default function Home() {
  const servicesRef = useRef(null);
  const aboutUsRef = useRef(null);
  const contactRef = useRef(null);

  const handleScrollToServices = () => {
    servicesRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToAboutUs = () => {
    aboutUsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App" style={styles.app}>
      <Navbar
        onServicesClick={handleScrollToServices}
        onAboutUsClick={handleScrollToAboutUs}
        onContactClick={handleScrollToContact}
      />
      <PredictionForm />
      <div ref={aboutUsRef} style={styles.section}>
        <AboutUs />
      </div>
      <div ref={servicesRef} style={styles.section}>
        <Services />
      </div>
      <div ref={contactRef} style={styles.section}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

const styles = {
  app: {
    margin: 0,
    padding: 0,
    width: '100%',
    height: '100%',
    overflowX: 'hidden',
  },
};