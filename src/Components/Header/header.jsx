import React, { Fragment } from 'react';
import styles from "./header.module.css";
import HeaderTimer from "../HeaderTimer/HeaderTimer";

const Header =() => {
  return (
    <Fragment>
    <section className={styles.container}>
     
      <div className={styles.header_content}>
      <div className={styles.header_main}>
      <div className={styles.main_conference_logo}>
          <img src={require("./ne-iecce-2025_main_logo.jpg")} alt="ne-iecce-2025_logo" width="150rem" height="100rem"/>
        </div>
        <section className={styles.header_text}>
        <div className={styles.pathway_extreme_header_info}>
          <h2>IEEE <span> NE-IECCE 2025</span></h2>
          <section className={styles.pathway_extreme_header_subinfo}>
          <h5>Energy Conversion Conference and Exhibition</h5>
          </section>
        </div>
        </section>
        </div>
        <section className={styles.important_logos}>
        
        <div className={styles.nits_logo}>
          <img src={require("./nits-logo.png")} alt="nits-logo" width="100rem" height="75rem"/> 

        </div>
        <div className={styles.location_ieee_logo}>
            <img src={require("./IEEE-main-logo.png")} alt="ieee-main-logo"/>
          </div>
          </section>
          </div>
        </section>
    </Fragment>
  );
}

export default Header ;