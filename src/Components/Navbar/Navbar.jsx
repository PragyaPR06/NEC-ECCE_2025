import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import logo1 from "../Navbar/images/logo1.png"
import logo2 from "../Navbar/images/logo2.jpg"
import logo3 from "../Navbar/images/logo3.jpg"
import logo4 from "../Navbar/images/logo4.jpg"

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
        <li className={styles.navItem}>Home</li>
        <li className={styles.navItem}>About Us</li>
        <li className={`${styles.navItem} ${styles.dropdown}`}>
          For Authors
          <ul className={styles.dropdownContent}>
            <li>Important Dates</li>
            <li>Important Links</li>
          </ul>
        </li>
        <li className={styles.navItem}>Committee</li>
        <li className={styles.navItem}>Students</li>
        <li className={styles.navItem}>Awards</li>
        <li className={styles.navItem}>Photos</li>
        <li className={styles.navItem}>Photos</li>
        <li className={styles.navItem}>Photos</li>
      </ul>
    </nav>
  );
};

export default Navbar;
