import React, { Fragment } from 'react';
import styles2 from "./Specialsess.module.scss";

import Header from '../Components/Header/header';
import Navbar from "../Components/Navbar/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Specialsession =()=>{
    
    

    return (
        <Fragment>
        <Header />
        <Navbar/>
        <br />  
        <section className={styles2.instructions}>
            <h2 className={styles2.instructionsHeading}>Call for <span>Special Session</span></h2>
            <br />
            <ul className={styles2.instructionsContent}>
                <p>
                The Organizing Committee of NE- IECCE 2025 invites proposals for special sessions to be presented at the conference.
                Sessions focused on reporting innovations and breakthroughs in highly specialized topic areas (within the conference’s scope) will be organized. Please get in touch with the Special Session Chair Dr. S. Mansani <a href='swapna@ee.nits.ac.in'>(swapna@ee.nits.ac.in)</a> with cc to neiecce.ieee@gmail.com to discuss the inclusion of your ‘special session’ in the NE-IECCE-2025 programme.
                </p>
                <br />
                <p className={styles2.submissionTemplate}>
                <a href="/specialsess/Call-for-Special-Session-NEIECCE2025.docx" download>
                    <button >Documents to be filled for organising Special Session</button>
                   </a>
    
                </p>
                <br />
                
            </ul>
        </section>
        <br/>
        <hr />
        <section className={styles2.importantNotice}>
            <h2 className={styles2.instructionsHeading}>Important <span>Dates</span></h2>
            <br />
            <ol className={styles2.submissionGuidelinesText}>
                <li>
                Last date to submit proposal:  <strong>October 31, 2024</strong>  
                </li>
                <li>
                Last date to submit papers in Special Session: <strong>November 30, 2024</strong>
                </li>
            </ol>
            
        </section>
        <br />
        <br />
        <hr/>
        <section className={styles2.importantNotice}>
            <h2 className={styles2.instructionsHeading}>Call for <span>Special Session</span></h2>
            <br />
            
            <ul className={styles2.submissionGuidelinesText}>
            <p>
           <strong>The NE- IECCE 2025 invites special sessions (SSs) proposals on emerging topics which are not listed in conference tracks.  A proposal for SS should include following information</strong> 
            </p>
                <li>
                Title of the Special Session
                </li>
                <li>
                Brief description of the area of concern (approx. 100 words), with special focus on why this is an interesting and significant topic
                </li>
                <li>
                The name and contact information of 2 or 3 special session chairs, who are willing to promote and organize a sufficient amount of quality submissions to the special session.
                </li>
                <li>
                Short IEEE style CV of the organizers
                </li>
                <li>
                A list of potential authors and their affiliations (minimum 10)
                </li>
                <li>
                A list of potential reviewers and their affiliations (minimum 10)
                </li>
            </ul>
            
        </section>
    
        {/* Add ToastContainer */}
        <ToastContainer />
        </Fragment>
    );
    
}

export default Specialsession;
