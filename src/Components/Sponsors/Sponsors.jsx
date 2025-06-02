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
               Financial Sponsors
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
            <br></br><br></br>

             <div className={styles.our_sponsors}>
    <h1 className={styles.header}>
     <b>Our Sponsors</b>
    </h1>
    <hr/>

  
    <div className={styles.first_row}>
      <div className={styles.logo_item}>
        <img src={require("./images/image1.png")} alt="Sponsor 1" />
      </div>
      <div className={styles.logo_item2}>
      
        <img src={require("./images/image2.png")} alt="Sponsor 2" />
        </div>
     
      <div clasNameclassNames={styles.logo_item}>
        <img src={require("./images/image3.png")} alt="Sponsor 3" />
      </div>
      <div className={styles.logo_item}>
        <img src={require("./images/image4.png")} alt="Sponsor 4" />
      </div>
      <div className={styles.logo_item}>
        <img src={require("./images/image5.png")} alt="Sponsor 5" />
      </div>
     
    </div>

   
    <div className={styles.second_row}>
      <div className={styles.logo_item}>
        <img src={require("./images/image7.png")} alt="Sponsor 7" width="200" height="150"/>
      </div>
      <div className={styles.logo_item}>
        <img src={require("./images/image8.png")} alt="Sponsor 8" width="200" height="150"/>
      </div>
      <div className={styles.logo_item}>
        <img src={require("./images/image9.jpg")} alt="Sponsor 9" width="200" height="150"/>
      </div>
      <div className={styles.logo_item}>
        <img src={require("./images/image10.png")} alt="Sponsor 10" width="200" height="150"/>
      </div>
      <div className={styles.logo_item}>
        <img src={require("./images/image11.png")} alt="Sponsor 11" width="200" height="150"/>
      </div>
    </div>
  </div> 
            
        </>
    )
}

export default Sponsor;