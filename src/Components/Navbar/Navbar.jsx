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
          For Authors<span className=' font-extrabold ' >&#9662;</span>
          <ul className={styles.dropdownContent}>
            <Link to="/CallForPapers">
            <li> Call for Papers</li>      
            </Link>
            <Link to="/CallForPapers/#impDates">
            <li>Important Dates</li>
            </Link>
            <Link to="/CallForPapers/#subGuide">
            <li>Paper submission guidelines</li>
            </Link>
            <li>Camera-Ready submission guidelines </li>
          </ul>
        </li>
        <li className={styles.navItem}>
          <Link to="/committee">
            Committee
          </Link>
        </li>
        <li className={`${styles.navItem} ${styles.dropdown}`}>
          Speakers<span className=' font-extrabold ' >&#9662;</span>
          <ul className={styles.dropdownContent}>
            <Link to="/keynoteSpeakers">
            <li> Keynote Speakers</li>      
            </Link>
            <Link to="/tutorial">
            <li>Tutorial</li>
            </Link>
          </ul>
        </li>
        <Link to="/ProgramDetails">
        <li className={styles.navItem}>
          Program Details</li>
        </Link>
        <Link to="/Registrations">
        <li className={styles.navItem}>
          Registrations</li>
          </Link>
        <Link to ="/StudentAwards">
        <li className={styles.navItem}>Student Awards</li>
        </Link>
        <Link to="/Sponsorship">
        <li className={styles.navItem}>
          Sponsorship</li>
          </Link>
          <Link to="/Accomodation">
        <li className={styles.navItem}>
          Accomodation</li>
          </Link>
        <li className={`${styles.navItem} ${styles.dropdown}`}>
          <Link to="/ContactUs">
          Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
