import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className='footer'>
      <section className='copyright-text'>
        <h2>
          Copyright &copy; 2025 NE-IECCE
        </h2>
      </section>
      <section className='footer-links'>
        <Link to='/' className='footer-link' onClick={handleScrollToTop}>Home</Link>
        <Link to='/ContactUs' className='footer-link' onClick={handleScrollToTop}>Contact Us</Link>
      </section>
    </footer>
  );
};

export default Footer;
