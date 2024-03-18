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
        <div className={styles.logos}>
          <img src={logo1} alt="Logo 1" className={styles.logo} />
          <img src={logo3} alt="Logo 3" className={styles.logo} />
        </div>
        <button className={styles.hamburger} onClick={toggleHamburger}>
          &#9776;
        </button>
        <div className={styles.rightLogos}>
          <img src={logo4} alt="Logo 2" className={styles.logo} />
          <img src={logo2} alt="Logo 4" className={styles.logo} />
        </div>
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
