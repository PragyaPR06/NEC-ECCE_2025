import React from 'react';
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.header_content}>
        <div className={styles.header_main}>
          <div className={styles.main_conference_logo}>
            <a href="https://ne-iecce2025.org">
              <img src={require("./ne-iecce-2025_main_logo.jpg")} alt="ne-iecce-2025_logo" />
            </a>
          </div>
          <div className={styles.header_text}>
            <div className={styles.pathway_extreme_header_info}>
              <h2>2025 IEEE North East India International Energy Conversion Conference and Exhibition</h2>
              <div className={styles.pathway_extreme_header_subinfo}>
                <h5>(NE-IECCE 2025)</h5>
              </div>
              <hr className={styles.divider} />
              <div className={styles.where_when_section}>
                <div className={styles.info_item}>
                  <h3>WHERE</h3>
                  <p>NIT Silchar, Assam, India</p>
                </div>
                <div className={styles.separator}></div>
                <div className={styles.info_item}>
                  <h3>WHEN</h3>
                  <p>July 04-06, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.important_logos}>
          <div className={styles.nits_logo}>
            <a href="http://www.nits.ac.in/" target="_blank" rel="noreferrer">
              <img src={require("./nits-logo.png")} alt="nits-logo" />
            </a>
          </div>
          <div className={styles.location_ieee_logo}>
            <img src={require("./IEEE-main-logo.png")} alt="ieee-main-logo" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

