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
            <h2 className={styles2.instructionsHeading}>Call for <span>Special Session (SS)</span></h2>
            <br />
            <div className={styles2.instructionsContent}>
                <p>
                The Organizing Committee of NE- IECCE 2025 invites special sessions proposals on emerging, innovations and breakthroughs in highly specialized areas (within the conference’s scope) and which are not reflected in the regular conference tracks. The special session topic should be of sufficient significance and importance to attract the potential researchers and practitioners from both academia and industry. 

                </p></div>
                <br></br>

                </section>
                <section className={styles2.importantNotice}>
            
            
            <h2 className={styles2.headd}>
           <strong>Each proposal for Special Session should include following information :</strong> 
            </h2>
            
            <ul className={styles2.submissionGuidelinesText}>
                <li>
                Title of the proposed Special Session
                </li>
                <li>
                Brief description of interested and significant topic(s) of special session (approx. 100 words)
                </li>
                <li>
                The name and contact information of 2 or 3 special session chairs, who are willing to promote and organize sufficient number of quality submissions to the special session.

                </li>
                <li>
                Short IEEE style CV of the organizers
                </li>
                <li>
                A list of potential authors and their affiliations (minimum 5)
                </li>
                <li>
                A list of potential reviewers and their affiliations (minimum 5)
                </li>
            </ul>
            
        </section><br></br>

                <p className={styles2.submissionTemplate}>
                <a href="/specialsess/Call-for-Special-Session-NEIECCE2025.docx" download>
                    <button >Template for Special Session NE-IECCE 2025</button>
                   </a>
    
                </p>
                <br />
                
            
       
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
                Last date to submit papers in Special Session: <strong>January 31, 2025</strong>
                </li>
            </ol>
            
        </section>
        <br />
        <br />
        <hr/>
        
       
        <br></br> <hr></hr>
        <section className={styles2.importantNotice}>
            <h2 className={styles2.instructionsHeading}>Special Session<span> Organisation</span></h2>
            <br />
            
            <ul className={styles2.submissionGuidelinesText}>
            
                <li>
                <strong>Advertising:</strong> Once approved, it is the duty of the organizers to publicize the Special Session among researchers and practitioners in the field and attract a sufficient number of papers.
                </li>
                <li>
                <strong>Review Process:</strong> Papers submitted to special sessions will undergo the same review process as regular papers. The special session chairs of the respective special session are responsible for organizing the review process, assuring at least three reviews per paper. This includes a selection of reviewers from their peers.

                </li>
                <li>
                <strong>Conflict of Interest:</strong> Before starting the review process, SS organizers must explicitly declare papers which present a conflict of interest for them. A conflict of interest arises where the judgement of a paper quality can be influenced by the organizers being authors or knowing some of the authors. To ensure independent reviews, this conflict must be marked as such in the submission system and the SS Co-Chairs notified so that they can arrange the review process.

                </li>
                <li>
                <strong>Restrictions:</strong> During the review process, Special Session Organizers must take into account that an individual cannot be (co‐) author of more than two papers submitted to the same Special Session

                </li>
                <li>
                <strong>Well-Executed Special Session:</strong> Selection of a special session proposal does not guarantee final acceptance of the special session. The acceptance of a special session depends upon the quality of the papers submitted to the special session and a minimum of 6 accepted articles from at least 4 independent institutions is required for each session. If a session has too few papers, accepted papers will be allocated to regular sessions wherever possible. In case of indication of weakly organized special sessions, the conference organizers will support the organizers with advice but reserve measures including cancellation of the respective special session.
                </li>
                <li>
                <strong>Complimentary Conference Registration:</strong> <span>One Complimentary  (Author: Indian or Foreign (Academia/Industry Registration))</span>  will be provided to successful Special Sessions with at least 6 papers. The successful SS organizers must register for and attend the conference, and chair the corresponding sessions.
                </li>
            </ul>
            <br></br>
            
          
            <br></br>
            
        </section>
    
        {/* Add ToastContainer */}
        <ToastContainer />
        <p className={styles2.helpsec}>
         Please get in touch with the Special Session Chair <a href="https://mail.google.com/mail/?view=cm&fs=1&to=swapna@ee.nits.ac.in" style={{ color: 'blue' }}>
   swapna@ee.nits.ac.in / </a><a href="https://mail.google.com/mail/?view=cm&fs=1&to=mallikarjuna@ee.nits.ac.in" style={{ color: 'blue' }}>
  mallikarjuna@ee.nits.ac.in</a> with cc to <a href="https://mail.google.com/mail/?view=cm&fs=1&to=neiecce.ieee@ee.nits.ac.in" style={{ color: 'blue' }}>
  neiecce.ieee@ee.nits.ac.in</a> to discuss the inclusion of your ‘special session’ in the NE-IECCE-2025 programme.
         </p>
        </Fragment>
    );
   
}

export default Specialsession;
