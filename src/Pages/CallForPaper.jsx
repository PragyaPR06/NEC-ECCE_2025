import React, { Fragment } from 'react';
import styles2 from "../Pages/CallForPaper.module.css";
import Header from "../Components/Header/header";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const CallForPaper = () => {
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
            1) <strong> NEI-ECCE 2025,</strong>
             the first Flagship Annual International Conference of IEEE Kolkata Section & Silchar Subsection Industry Applications Society Chapter aims to provide a unique platform to researchers, practitioners, industry delegates, technocrats, and policymakers from academia and industry to share and promote recent research accomplishments and innovations for the sustainable development of industry and society. </p>
             <br />
             <p className={styles2.submissionTemplate}>
            2) <strong>Templates for Digest Submission : </strong>
            <button>MS Word</button>
            <span>   |   </span>
            <button >Latex</button>
        </p>
        <br />
        <p>
            3) Please note that the submission site does not send automatic emails of acknowledgment. Authors may, however, use the icon named <span className={styles2.submitDigestText}>"Submit Digest"</span> available towards the end of the submission process near the top right side corner of the screen to get the submission site to send a confirmation email to themselves.
        </p>
    </ul>
</section>
<br/>
<hr />
<br />
<section className={styles2.submissionGuidelines}>
    <h2 className={styles2.instructionsHeading}>Digest Submission <span>Guidelines </span></h2>
    <br />
    <ul className={styles2.submissionGuidelinesText}>
        <p>
           1) Initial submission of digest <strong>(4 pages max.)</strong> including figures and references are allowed in PDF format.
        </p>
        <p>
           2) Total file size of the digest must not exceed  <strong>2 MB.</strong>
        </p>
        <p>
           3) Accepted papers after the initial review will get the opportunity to submit a full paper (6 pages max.).
        </p>
        <p>
           4) Up to two (2) extra pages are permissible with an additional fee to be paid at the time of registration.
        </p>
    </ul>
    </section>
    <br/>
    <hr />
    <br />
<section className={styles2.importantDeadlines}>
    <h2 className={styles2.instructionsHeading}>Important Deadlines <span>For Authors </span></h2>
    <ul className={styles2.submissionGuidelinesText}>
        <p>
           1) Opening date of Submission of Digest: <strong>30<sup>th</sup> September, 2024</strong>
        </p>
        <p>
           2) Deadline for Submission of Digest: <strong>20<sup>th</sup> February, 2025</strong>
        </p>
        <p>
           3) Acceptance / Rejection Notification of Digest: <strong>10<sup>th</sup> April, 2025</strong>
        </p>
        <p>
           4) Deadline for submitting the final camera-ready version of accepted papers : <strong>10<sup>th</sup> May, 2025</strong>
        </p>
    </ul>
    </section>
    <br/>
    <hr />
    <br />
<section className={styles2.importantNotice}>
    <h2 className={styles2.instructionsHeading}>Important <span>Notice </span></h2>
    <ol className={styles2.submissionGuidelinesText}>
        <p>
           1) All papers submitted to <strong>NEI-ECCE 2025</strong>  will undergo a plagiarism check. Papers with similarity scores of 30% or above may be rejected without further review.
        </p>
        <p>
           2) Acceptance of the paper does not guarantee acceptance of the final paper.
        </p>
    </ol>
    <ul className={styles2.submissionGuidelinesText}>
        <p> 3) The organizing committee of <strong>NEI-ECCE 2025</strong> reserves the right to reject papers for the following reasons (one or more of):</p>
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
            Submit paper
        </button>
    </span>
    <br />
    </Fragment>
    );
};
export default CallForPaper;