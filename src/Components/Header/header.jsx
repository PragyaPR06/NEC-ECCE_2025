import React, { Fragment } from 'react';
import styles from "./header.module.css";
import HeaderTimer from "../HeaderTimer/HeaderTimer";

const Header =() => {
  return (
    <Fragment>
    <section className={styles.container}>
      <section className={styles.header_links}>
        <div className={styles.header_links_section}>            
          <h3>
            <a id="ieee-main-link" href="https://www.ieee.org/">IEEE.org | </a> 
            <a href="http://ieeexplore.ieee.org/">IEEE | <span id="header-xplore">Xplore | </span>Digital Library | </a> 
            <a href="http://standards.ieee.org/">IEEE Standards | </a> 
            <a href="http://spectrum.ieee.org/">IEEE Spectrum | </a> 
            <a href="https://www.ieee.org/sitemap.html">More Sites </a> 
          </h3>
        </div>
      </section>
      <div className={styles.header_content}>
        <div className={styles.pathway_extreme_header_info}>
          <h2>IEEE North-East India</h2>
          <h2>International Energy Conversion Conference and Exhibition</h2>
          <h2>(NEI-ECCE 2025)</h2>
        </div>
        <div className={styles.main_conference_logo}>
          <img src={require("./ne-iecce-2025_main_logo.jpg")} alt="ne-iecce-2025_logo" width="150rem" height="100rem"/>
        </div>
        <div className={styles.nits_logo}>
          <img src={require("./nits-logo.png")} alt="nits-logo" width="100rem" height="75rem"/> 
        </div>
        <div className={styles.header_counter}/>
        <HeaderTimer className={styles.header_counter}/>
      </div>
      <div className={styles.header_location}>
        <div className={styles.location_icon}>
          <img src={require("./location-icon.png")} alt="location-icon"/>
        </div>
        <div className={styles.header_location_data}>
          <h3 className={styles.pathway_extreme_header_location_data}> National Institute of Technology Silchar, Assam | INDIA</h3>
          <h3 className={styles.pathway_extreme_header_location_dates}> 4-6 July 2025</h3>
        </div>
        <div className={styles.header_logos}>
          <div className={styles.location_ieee_silchar_subsection_logo}>
            <img src={require("./ieee-silchar-subsection-logo.jpeg")} alt="ieee-silchar-subsection-logo"/>
          </div>
          <div className={styles.location_ieee_kolkata_section_logo}>
            <img src={require("./ieee-kolkata-section.jpeg")} alt="ieee-kolkata-section-logo"/>
          </div>
          {/* <div className={styles.location_ias_logo}>
            <img src={require("./ias-logo.jpeg")} alt="ias-logo"/>
          </div> */}
          <div className={styles.location_ieee_logo}>
            <img src={require("./IEEE-main-logo.png")} alt="ieee-main-logo"/>
          </div>
        </div>
      </div>
    </section> 
    </Fragment>
  );
}

export default Header ;
