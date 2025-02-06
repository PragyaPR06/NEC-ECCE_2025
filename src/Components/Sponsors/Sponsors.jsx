import React from "react";
import styles from "./Sponsors.module.scss";
const Sponsor = () =>{
    return(
        <>
            <div className={styles.TechnicalSponsors}>
            <h1 className={styles.header}>
                <b>
                Technical Co-Sponsors
                </b>
            </h1>
            <hr></hr>
            <div className={styles.icons}>
            <div className={styles.logo1}>
          <img src={require("./logo1.png")} alt="ias_logo" width="200rem" height="200rem"/>
        </div>
        <div className={styles.logo2}>
        <img src={require("./logo2.png")} alt="ne-iecce-2025_logo" width="200rem" height="200rem"/>
        </div>
        <div className={styles.logo3}>
        <img src={require("./logo3.png")} alt="ne-iecce-2025_logo" width="190rem" height="190rem"/>
        </div>
        <div className={styles.logo4}>
        <img src={require("./logo4.png")} alt="ne-iecce-2025_logo" />
        </div>
        <div className={styles.logo5}>
        <img src={require("./logo5.png")} alt="ne-iecce-2025_logo" width="200rem" height="200rem"/>
        </div>
        <div className={styles.logo6}>
        <img src={require("./logo6.png")} alt="ne-iecce-2025_logo" width="200rem" height="200rem"/>
        </div>
      
            </div>
            </div>

            <div className={styles.FinancialSponsors}>
            <h1 className={styles.header}>
                <b>
                Financial Co-Sponsors
                </b>
            </h1>  <hr></hr>
            <div className={styles.icons}>
            <div className={styles.logo1}>
          <img src={require("./logo1.png")} alt="ne-iecce-2025_logo" width="250rem" height="250rem"/>
        </div>
        <div className={styles.logo2}>
        <img src={require("./logo5.png")} alt="ne-iecce-2025_logo" width="250rem" height="250rem"/>
        </div>
        </div>
            </div>
        </>
    )
}

export default Sponsor;