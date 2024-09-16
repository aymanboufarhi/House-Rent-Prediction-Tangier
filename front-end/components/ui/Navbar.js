"use client";
import React from 'react';
import Image from 'next/image';

const Navbar = ({ onServicesClick, onAboutUsClick, onContactClick }) => {
  return (
    <nav style={styles.navbar}>
      <Image src="/logo.png" width={150} height={150} alt='logo' />
      <ul style={styles.navLinks}>
        <li><a href="#" style={styles.navLink} onClick={() => window.scrollTo(0, 0)}>Home</a></li>
        <li><a href="#" style={styles.navLink} onClick={onAboutUsClick}>About Us</a></li>
        <li><a href="#" style={styles.navLink} onClick={onServicesClick}>Services</a></li>
        <li><a href="#" style={styles.navLink} onClick={onContactClick}>Contact</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: '1000',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: 'white',
    color: '#E86A2A',
    width: '100%',
    boxSizing: 'border-box',
  },
  navLinks: {
    display: 'flex',
    gap: '15px',
    listStyleType: 'none',
  },
  navLink: {
    textDecoration: 'none',
    color: '#E86A2A',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

export default Navbar;