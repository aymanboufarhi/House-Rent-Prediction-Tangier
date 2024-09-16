import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2024 MyDayf. All rights reserved.</p>
    </footer>
  );
};

const styles = {
    footer: {
      textAlign: 'center',
      padding: '20px',
      backgroundColor: '#E86A2A',
      color: '#fff',
      width: '100%',
      boxSizing: 'border-box',
    },
  };
    

export default Footer;