// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import styles from './Navbar.module.scss';


// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
  
//   const toggleHamburger = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.topBar}>
//         <button className={styles.hamburger} onClick={toggleHamburger}>
//           &#9776;
//         </button>
//       </div>
//       <ul className={`${styles.navItems} ${isOpen ? styles.showMenu : ''}`}>
//         <li className={styles.navItem}>
//         <Link to="/">
//         Home
//         </Link></li>
//         <li className={styles.navItem}><Link to="/Aboutus">About Us</Link> 
//         {/* <ul className={styles.dropdownContent}>
//             <li>Message From Genereal Chair</li>
//             <li>Conference Host & Partners</li>
//             <li>NIT Silchar</li>
//             <li>EE Department</li>
//             <li>Conference Sponsors</li>
            
//           </ul> */}
//         </li>
//         <li className={styles.navItem}>
//           <Link to="/committee">
//             Committee
//           </Link>
//         </li>
//         <li className={`${styles.navItem} ${styles.dropdown}`}>
//           For Authors<span className=' font-extrabold ' >&#9662;</span>
//           <ul className={styles.dropdownContent}>
//           <Link to="/TracksPage">
//             <li>Conference Tracks</li>
//           </Link>
//           <Link to="/ImportantDates">
//             <li>Important Dates</li>
//             </Link>
//             <Link to="/CallForPapers">
//             <li> Call for Papers</li>      
//             </Link>
            
            
//             <Link to="/CameraReadySumb">
//             <li>Camera-Ready submission guidelines </li>
//             </Link>
//           </ul>
//         </li>

//         <li className={styles.navItem}>
//           <Link to="/Specialsession">
//             Special Session
//           </Link>
//         </li>

//         <li className={`${styles.navItem} ${styles.dropdown}`}>
//           Speakers<span className=' font-extrabold ' >&#9662;</span>
//           <ul className={styles.dropdownContent}>
//             <Link to="/keynoteSpeakers">
//             <li> Keynote Speakers</li>      
//             </Link>
//             <Link to="/tutorial">
//             <li>Tutorial</li>
//             </Link>
//           </ul>
//         </li>
//         <li className={`${styles.navItem} ${styles.dropdown}`}>
//           Awards<span className=' font-extrabold ' >&#9662;</span>
//           <ul className={styles.dropdownContent}>
//             <Link to="/studentAwards">
//             <li> Student Awards</li>      
//             </Link>
//           </ul>
//         </li>
      
         
         
//        <li className={`${styles.navItem} ${styles.dropdown}`}>
//           Event Details<span className=' font-extrabold ' >&#9662;</span>
//           <ul className={styles.dropdownContent}>
//             <Link to="/programDetails">
//             <li> Program Schedule</li>      
//             </Link>
//             <Link to="/WIE">
//             <li>WIE Events</li>
//             </Link>
//             <Link to="/SYP">
//             <li>SYP Events</li>
//             </Link>
//           </ul>
//         </li>
        
//         <Link to="/Registrations">
//         <li className={styles.navItem}>
//           Registrations</li>
//           </Link>


//           <li className={`${styles.navItem} ${styles.dropdown}`}>
//           Travel/Accomodation<span className=' font-extrabold ' >&#9662;</span>
//           <ul className={styles.dropdownContent}>
//             <Link to="/Travel">
//             <li> Travel</li>      
//             </Link>
//             <Link to="/Accomodation">
//             <li>Accomodation</li>
//             </Link>
//           </ul>
//         </li>
        
//         <Link to="/Sponsorship">
//         <li className={styles.navItem}>
//           Sponsorship</li>
//           </Link>
//         <li className={`${styles.navItem} ${styles.dropdown}`}>
//           <Link to="/ContactUs">
//           Contact Us
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
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
        <li className={styles.navItem}><Link to="/">Home</Link></li>

        <li className={styles.navItem}>
          <Link to="/Aboutus">About Us</Link>
        </li>

        <li className={styles.navItem}><Link to="/committee">Committee</Link></li>

        <li className={`${styles.navItem} ${styles.dropdown}`}>
          For Authors <span className="font-extrabold">&#9662;</span>
          <ul className={styles.dropdownContent}>
            <Link to="/TracksPage"><li>Conference Tracks</li></Link>
            <Link to="/ImportantDates"><li>Important Dates</li></Link>
            <Link to="/CallForPapers"><li>Call for Papers</li></Link>
            <Link to="/CameraReadySumb"><li>Camera-Ready Submission Guidelines</li></Link>
          </ul>
        </li>

        <li className={styles.navItem}><Link to="/Specialsession">Special Session</Link></li>

        <li className={`${styles.navItem} ${styles.dropdown}`}>
          Speakers <span className="font-extrabold">&#9662;</span>
          <ul className={styles.dropdownContent}>
            <Link to="/keynoteSpeakers"><li>Keynote Speakers</li></Link>
            <Link to="/tutorial"><li>Tutorial</li></Link>
          </ul>
        </li>

        <li className={`${styles.navItem} ${styles.dropdown}`}>
          Awards <span className="font-extrabold">&#9662;</span>
          <ul className={styles.dropdownContent}>
            <Link to="/studentAwards"><li>Student Awards</li></Link>
          </ul>
        </li>

        <li className={`${styles.navItem} ${styles.dropdown}`}>
          Event Details <span className="font-extrabold">&#9662;</span>
          <ul className={styles.dropdownContent}>
            <Link to="/programDetails"><li>Program Schedule</li></Link>
            <Link to="/WIE"><li>WIE Events</li></Link>
            <Link to="/SYP"><li>SYP Events</li></Link>
          </ul>
        </li>

        <Link to="/Registrations"><li className={styles.navItem}>Registrations</li></Link>

        <li className={`${styles.navItem} ${styles.dropdown}`}>
          Travel/Accommodation <span className="font-extrabold">&#9662;</span>
          <ul className={styles.dropdownContent}>
            <Link to="/Travel"><li>Travel</li></Link>
            <Link to="/Accomodation"><li>Accommodation</li></Link>
          </ul>
        </li>

        <Link to="/Sponsorship"><li className={styles.navItem}>Sponsorship</li></Link>

        <li className={styles.navItem}><Link to="/ContactUs">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
