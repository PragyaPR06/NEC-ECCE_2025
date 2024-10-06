import React, { Fragment, useEffect } from 'react';
import styles2 from "../Pages/CallForPaper.module.css";

import Header from '../Components/Header/header';
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";



const CallForPaper = () => {
  useEffect(() => {
    // Check if the hash exists in the URL
    if (window.location.hash) {
      // Extract the hash value (e.g., #targetDiv)
      const hash = window.location.hash.substring(1);
      // Scroll to the target div
      const targetDiv = document.getElementById(hash);
      if (targetDiv) {
        targetDiv.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);
    return (
        <Fragment>
        <Header />
        <Navbar/>
        <br />  
    <section className={styles2.instructions}>
    <h2 className={styles2.instructionsHeading}>Instructions For <span>Authors </span></h2>
    <br />
    <ul className={styles2.instructionsContent}>
        <p>

         <strong> Authors, </strong>
         are invited to submit their full manuscripts (6 pages max) according to guidelines available on the conference website via Microsoft CMT. </p>

          
             <br />
             <p className={styles2.submissionTemplate}>

             <strong>Templates for Manuscript Submission : </strong>

            <button>MS Word</button>
            <span>   |   </span>
            <button >LaTeX</button>
        </p>
        <br />
        <p>

        After peer review, all accepted and presented papers of NE-IECCE 2025, will be submitted to IEEE Xplore Digital Library for inclusion and other major indexing.
        
        </p>
    </ul>
</section>
<br/>
<hr />
<br />

    <br/>
   
    <br />
<section className={styles2.importantDeadlines}>
    <h2 className={styles2.instructionsHeading} id="impDates">Important Deadlines <span>For Authors </span></h2>
    <br />
    <ul className={styles2.submissionGuidelinesText}>
        <p>
           1) Abstract Submission Date: <strong>30<sup>th</sup> August, 2024</strong>
        </p>
        <p>
           2) Full Paper Submission Date: <strong>20<sup>th</sup> February, 2025</strong>
        </p>
        <p>
           3) Notification of Acceptance: <strong>10<sup>th</sup> April, 2025</strong>
        </p>
        <p>
           4) Final Paper Submission Date : <strong>10<sup>th</sup> May, 2025</strong>
        </p>
    </ul>
    </section>
    <br/>
    <hr />
    <br />
<section className={styles2.importantNotice}>
    <h2 className={styles2.instructionsHeading}>Important <span>Notice </span></h2>
    <br />
    <ol className={styles2.submissionGuidelinesText}>
        <p>
           1) All papers submitted to <strong>NE-IECCE 2025</strong>  will undergo a plagiarism check. Papers with similarity scores of 30% or above may be rejected without further review.
        </p>
        <p>
           2) Acceptance of the paper does not guarantee acceptance of the final paper.
        </p>
    </ol>
    <ul className={styles2.submissionGuidelinesText}>
        <p> 3) The organizing committee of <strong>NE-IECCE 2025</strong> reserves the right to reject papers for the following reasons (one or more of):</p>
        <p className={styles2.submissionGuidelinesTextConditions}>
            i) With poor language.
        </p>
        <p className={styles2.submissionGuidelinesTextConditions}>
            ii) With poor technical content.
        </p>
        <p className={styles2.submissionGuidelinesTextConditions}>
            iii) Not Addressing Reviewer's remarks.
        </p>
        <p className={styles2.submissionGuidelinesTextConditions}>
            iv) Dissimilarity between contents of paper and final camera-ready version of accepted papers.  
        </p>
    </ul>
    </section>
    <br />
    <span className={styles2.submitButtonArea}>
        <button className={styles2.submitButton}>
            Submit Manuscript
        </button>
    </span>
    <br />
    </Fragment>
    );
};
export default CallForPaper;