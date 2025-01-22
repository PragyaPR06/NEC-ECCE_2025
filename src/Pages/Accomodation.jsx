import React, { Fragment } from 'react';
import styles2 from "./Accomodation.module.scss";

import Header from '../Components/Header/header';
import Navbar from "../Components/Navbar/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Accomodation =()=>{
    
    

    return (
        <Fragment>
        <Header />
        <Navbar/>
        <br />  
        <section className={styles2.instructions}>
            <h1 className={styles2.instructionsHeading}>Accomodation <span></span></h1>
            <br />
            <div className={styles2.instructionsContent}>
                <p>
                Please book your accommodation for the NE-IECCE 2025 conference in advance, as June- July is the peak tourist season in Silchar and hotels fill up quickly.
                </p></div>
                <br></br>

                </section>
                <section className={styles2.importantNotice}>
            
            
            <h2 className={styles2.headd}>
           <strong>Hostel Accommodation for Students (Male/ Female) :</strong> 
            </h2>
            
        </section><br></br>

                <p className={styles2.submissionTemplate}>
                <a href="/specialsess/Call-for-Special-Session-NEIECCE2025.docx">
                    <button >Google Form Link</button>
                   </a>
    
                </p>
                <br />
        <br/>
        <section className={styles2.importantNotice}>
            
            
            <h2 className={styles2.headd}>
           <strong>Institute Guest House Accommodation (Limited room available):</strong> 
            </h2>
            
        </section><br></br>

                <p className={styles2.submissionTemplate}>
                <a href="/specialsess/Call-for-Special-Session-NEIECCE2025.docx">
                    <button >Google Form Link</button>
                   </a>
    
                </p>
                <br />
        <br/>
        <hr />
       
       
        <br></br> <hr></hr>
        <section className={styles2.importantNotice}>
            <h2 className={styles2.instructionsHeading}>Hotel Accommodation for <span> NE-IECCE 2025</span></h2>
            <br />
            
            <ul className={styles2.submissionGuidelinesText}>
            
                
                <strong>4- Star Hotels:</strong> 
                <h2>Borail View Regency</h2>
                <h3>Distance from NITS Campus:<span> 9.1 kms</span> </h3>
                <h3>Contact Person:<span style={{ color: 'blue' }}> Krishna (7099093388)</span> </h3>
                <h3>Website:
                <a href='https://borailviewregency.com/'style={{ color: 'blue' }}>  https://borailviewregency.com/</a> </h3>
                <br></br>
                <h2>Hotel Cachar Club</h2>
                <h3>Distance from NITS Campus:<span> 9.2 kms</span> </h3>
                <h3>Contact Person: <span style={{ color: 'blue' }}> Bishu (7092308219)</span> </h3>
                <h3>Website:
                <a href='https://hotelcacharclub.com/'style={{ color: 'blue' }}> https://hotelcacharclub.com/</a> </h3>
                <br></br>
                <h2>Sagarika Resort</h2>
                <h3>Distance from NITS Campus:<span> 11.4 kms</span> </h3>
                <h3>Location: <span> Rongpur Part III, Rongpur, Silchar, Assam 788009</span></h3>
                <h3>Contact Person: <span style={{ color: 'blue' }}> 8812063645</span> </h3>
                <br></br>
                <strong>3- Star Hotels:</strong>   
                <h2>Grand Regency</h2>
                <h3>Distance from NITS Campus:<span> 6.1 kms</span> </h3>
                <h3>Contact Person: <span style={{ color: 'blue' }}> : Pinak Das (6001411667)</span> </h3>
                <br></br>
                <h2>Sagarika Regency</h2>
                <h3>Distance from NITS Campus:<span> 8.6 kms</span> </h3>
                <h3>Contact Person: <span style={{ color: 'blue' }}> Chandra Mohan Singha (7002704736)</span> </h3>
                <br></br><br></br>
                <strong>Budget Hotels:</strong>  
                <h2>Apurva Hotel</h2>
                <h3>Distance from NITS Campus:<span> 6.5 kms</span> </h3>
                <h3>Contact Person: <span style={{ color: 'blue' }}> Rajesh Debnath, Pritesh Chakraborty (8811981017, 6001091731)
</span> </h3>
                <br></br><h2>Hotel JC International</h2>
                <h3>Distance from NITS Campus:<span> 9.2 kms</span> </h3>
                <h3>Contact Person: <span style={{ color: 'blue' }}> 03842- 354091/ 8453349836 (M)</span> </h3>
                <br></br><h2>Barak View Residency</h2>
                <h3>Distance from NITS Campus:<span> 10 kms</span> </h3>
                <h3>Contact Person: <span style={{ color: 'blue' }}> Chandra Mohan Singha (7002704736)</span> </h3>
                
            </ul>
            <br></br>
            
          
            <br></br>
            
        </section>
    
        {/* Add ToastContainer */}
        <ToastContainer />
        <p className={styles2.helpsec}>
        For any query related to accommodation, please contact Dr. C. Bhattacharya (+91-9435730356)
         </p>
        </Fragment>
    );
   
}

export default Accomodation;
