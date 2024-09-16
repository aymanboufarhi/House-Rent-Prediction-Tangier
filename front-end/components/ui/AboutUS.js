import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div style={styles.container}>
      <div style={styles.textSection}>
        <h2 style={styles.heading}>Rental management of your residence in Tangier.</h2>
        <p style={styles.paragraph}>
          Airbnb Concierge Service in Tangier. Full or à la carte rental management service. MyDayf offers you a complete concierge service, A local partner on site.
        </p>
      </div>
      <div style={styles.imageSection}>
        <Image 
          src="/im.jpg"
          alt="A local partner on site"
          width={500} 
          height={300}
          style={styles.image}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '50px',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#fff',
  },
  textSection: {
    flex: 1,
    paddingRight: '20px',
  },
  heading: {
    color: '#E86A2A',
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  paragraph: {
    color: '#555',
    fontSize: '16px',
    lineHeight: '1.6',
  },
  imageSection: {
    flex: 1,
  },
  image: {
    borderRadius: '8px',
  },
};

export default AboutUs;