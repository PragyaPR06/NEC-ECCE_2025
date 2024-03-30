import React, { Fragment } from 'react';
import styles2 from "./CallForPaper.module.css";
import Footer from "./Footer/Footer.jsx";
import Header from "./Header/header.jsx";

const CallForPaper = () => {
    return (
        <Fragment>
        <Header />
    <section classNameName={styles2.instructions}>
    <h2 classNameName={styles2.instructions-heading}>Instructions For <span>Authors </span></h2>
    <ul classNameName={styles2.instructions-content}>
        <li>
            <strong> NEI-ECCE 2025,</strong>
             the first Flagship Annual International Conference of IEEE Kolkata Section & Silchar Subsection Industry Applications Society Chapter aims to provide a unique platform to researchers, practitioners, industry delegates, technocrats, and policymakers from academia and industry to share and promote recent research accomplishments and innovations for the sustainable development of industry and society. </li>
             <li classNameName={styles2.submission-template}>
            <strong>Templates for Digest Submission : </strong>
            <button role="button">MS Word</button>
            <span>   |   </span>
            <button role="button">Latex</button>
        </li>
        <li>
            Please note that the submission site does not send automatic emails of acknowledgment. Authors may, however, use the icon named <span className="submit-digest-text">"Submit Digest"</span> available towards the end of the submission process near the top right side corner of the screen to get the submission site to send a confirmation email to themselves.
        </li>
    </ul>
</section>
<br/>
<section className={styles2.submission-guidelines}>
    <h2 className={styles2.instructions-heading}>Digest Submission <span>Guidelines </span></h2>
    <ul className={styles2.submission-guidelines-text}>
        <li>
            Initial submission of digest <strong>(4 pages max.)</strong> including figures and references are allowed in PDF format.
        </li>
        <li>
            Total file size of the digest must not exceed  <strong>2 MB.</strong>
        </li>
        <li>
            Accepted papers after the initial review will get the opportunity to submit a full paper (6 pages max.).
        </li>
        <li>
            Up to two (2) extra pages are permissible with an additional fee to be paid at the time of registration.
        </li>
    </ul>
    </section>
    <br/>
<section className={styles2.important-deadlines}>
    <h2 className={styles2.instructions-heading}>Important Deadlines <span>For Authors </span></h2>
    <ul className={styles2.submission-guidelines-text}>
        <li>
            Opening date of Submission of Digest: <strong>30<sup>th</sup> September, 2024</strong>
        </li>
        <li>
            Deadline for Submission of Digest: <strong>20<sup>th</sup> February, 2025</strong>
        </li>
        <li>
            Acceptance / Rejection Notification of Digest: <strong>10<sup>th</sup> April, 2025</strong>
        </li>
        <li>
            Deadline for submitting the final camera-ready version of accepted papers : <strong>10<sup>th</sup> May, 2025</strong>
        </li>
    </ul>
    </section>
    <br/>
<section className={styles2.important-notice}>
    <h2 className={styles2.instructions-heading}>Important <span>Notice </span></h2>
    <ol className={styles2.submission-guidelines-text}>
        <li>
            All papers submitted to <strong>NEI-ECCE 2025</strong>  will undergo a plagiarism check. Papers with similarity scores of 30% or above may be rejected without further review.
        </li>
        <li>
            Acceptance of the paper does not guarantee acceptance of the final paper.
        </li>
    </ol>
    <ul className={styles2.submission-guidelines-text}>
        <p>The organizing committee of <strong>NEI-ECCE 2025</strong> reserves the right to reject papers for the following reasons (one or more of):</p>
        <li>
            With poor language.
        </li>
        <li>
            With poor technical content.
        </li>
        <li>
            Not Addressing Reviewer's remarks.
        </li>
        <li>
            Dissimilarity between contents of paper and final camera-ready version of accepted papers.  
        </li>
    </ul>
    </section>
    <span className={styles2.submit-button-area}>
        <button className={styles2.submit-button}>
            Submit paper
        </button>
    </span>
    <Footer />
    </Fragment>
    );
};
export default CallForPaper;