import React from 'react';

const Contact = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Contact Us</h2>
      <p style={styles.text}>For more information, please reach out to us.</p>
      <a href="https://mydayf.com/contact/" target="_blank" rel="noopener noreferrer">
        <button style={styles.button}>Contact</button>
      </a>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px 0',
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: '32px',
    marginBottom: '20px',
    color: '#333',
  },
  text: {
    fontSize: '16px',
    marginBottom: '20px',
    color: '#666',
  },
  button: {
    backgroundColor: '#E86A2A',
    color: 'white',
    border: 'none',
    padding: '15px 30px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
    textDecoration: 'none',
  },
};

export default Contact;