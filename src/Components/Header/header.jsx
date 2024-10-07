import React from 'react';
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.header_content}>
        <div className={styles.header_main}>
          <div className={styles.main_conference_logo}>
            <img src={require("./ne-iecce-2025_main_logo.jpg")} alt="ne-iecce-2025_logo" />
          </div>
          <div className={styles.header_text}>
            <div className={styles.pathway_extreme_header_info}>
              <h3>2025 IEEE North East India International Conference on Energy Conversion Conference and Exhibition</h3>
              <div className={styles.pathway_extreme_header_subinfo}>
                <h5>(NE-IECCE 2025)</h5>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.important_logos}>
          <div className={styles.nits_logo}>
            <img src={require("./nits-logo.png")} alt="nits-logo" />
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