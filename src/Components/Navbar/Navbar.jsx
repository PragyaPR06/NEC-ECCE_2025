import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.topBar}>
        <button className={styles.hamburger} onClick={toggleHamburger}>
          &#9776;
        </button>
      </div>
      <ul className={`${styles.navItems} ${isOpen ? styles.showMenu : ''}`}>
        <li className={styles.navItem}>
        <Link to="/">
        Home
        </Link></li>
        <li className={styles.navItem}><Link to="/Aboutus">About Us</Link> 
        {/* <ul className={styles.dropdownContent}>
            <li>Message From Genereal Chair</li>
            <li>Conference Host & Partners</li>
            <li>NIT Silchar</li>
            <li>EE Department</li>
            <li>Conference Sponsors</li>
            
          </ul> */}
        </li>
        <li className={`${styles.navItem} ${styles.dropdown}`}>
          For Authors
          <ul className={styles.dropdownContent}>
            <li><Link to="/callforpaper">Call for Papers</Link> </li>
            <li>Important Dates</li>

            <li>Paper submission guidelines</li>
            <li>Important Dates</li>
            <li>Camera-Ready submission guidelines </li>
          </ul>
        </li>
        <li className={styles.navItem}>
          <Link to="/committee">
            Committee
          </Link>
        </li>
        <li className={styles.navItem}>Registrations</li>
        <li className={styles.navItem}>Student Awards</li>
        <li className={styles.navItem}>Sponsors</li>
        <li className={`${styles.navItem} ${styles.dropdown}`}>
          Contact Us
          <ul className={styles.dropdownContent}>
            <li>Travels</li>
            <li>Accomodations</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
