import React, { Fragment } from 'react';
import styles2 from "./ImportantDates.module.scss";

import Header from '../Header/header';
import Navbar from "../Navbar/Navbar";
// import Footer from "../Components/Footer/Footer";



const ImportantDates = () => {
//   useEffect(() => {
//     // Check if the hash exists in the URL
//     if (window.location.hash) {
//       // Extract the hash value (e.g., #targetDiv)
//       const hash = window.location.hash.substring(1);
//       // Scroll to the target div
//       const targetDiv = document.getElementById(hash);
//       if (targetDiv) {
//         targetDiv.scrollIntoView({ behavior: 'smooth' });
//       }
//     }
//   }, []);
    return (
        <Fragment>
        <Header />
        <Navbar/>
        <br />  
    {/* <section className={styles2.instructions}>
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
            <button >Latex</button>
        </p>
        <br />
        <p>

        After peer review, all accepted and presented papers of NE-IECCE 2025, will be submitted to IEEE Xplore Digital Library for inclusion and other major indexing.
        
        </p>
    </ul>
</section> */}


   
   
    
<section className={styles2.importantDeadlines}>
    <h2 className={styles2.instructionsHeading} id="impDates">Important Dates <span>For Authors </span></h2>
    <br />
    <div>
      <div className={styles2.container}>
        <div className={styles2.left}>
          <div className={styles2.lcard}>
            <h3 className=" font-semibold">Digest Submission Portal Opens:</h3>
            <h2>October 07, 2024</h2>
          </div>
          <div className={styles2.lcard}>
            <h3 className=" font-semibold">Digest Submission Portal Closes:</h3>
            <h2><span className="line-through"> February 28, 2025</span> March 10,2025</h2>
          </div>
          <div className={styles2.lcard}>
            <h3 className=" font-semibold">Notification of Acceptance of Digest:</h3>
            <h2><span className="line-through"> April 07, 2025</span> April 10,2025</h2>
          </div>
          <div className={styles2.lcard}>
            <h3 className=" font-semibold">Deadline for submission of Camera Ready Paper and Copyright form:</h3>
            <h2>May 12, 2025</h2>
          </div>
          
         
        </div>
        <div className={styles2.right}>
        <div className={styles2.lcard}>
            <h3 className=" font-semibold">Early Bird Registration Ends:</h3>
            <h2>May 12, 2025</h2>
          </div>   
          <div className={styles2.lcard}>
            <h3 className=" font-semibold">Standard Registration Starts:</h3>
            <h2>May 13, 2025</h2>
          </div>
          <div className={styles2.lcard}>
            <h3 className=" font-semibold">Registration Deadline: </h3>
            <h2>June 2, 2025</h2>
          </div>
        </div>
      </div>
    </div>
    </section>
{/* <section className={styles2.importantNotice}>
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
    </section> */} 
    {/* <br />
    <span className={styles2.submitButtonArea}>
        <button className={styles2.submitButton}>
            Submit Manuscript
        </button>
    </span>
    <br /> */}
    </Fragment>
    );
};
export default ImportantDates;