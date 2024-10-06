import React, { Fragment } from 'react';
import styles2 from "./PaperSumbissionGuide.module.scss";

import Header from '../Header/header';
import Navbar from "../Navbar/Navbar";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// No need for toast.configure()

const PaperSumbissionGuide = () => {
    const notify = () => {
        toast.info("Link to be added soon!", {
            position: "bottom-center",
          autoClose: 2000,
          style: {
            color: 'black', // Change text color to black
        }
        });
    }

    const handleClick = () => {
        window.open("https://cmt3.research.microsoft.com/NEIECCE2025","_blank");
    };

    const handleWordClick = () => {
        window.open("https://www.ieee.org/content/dam/ieee-org/ieee/web/org/conferences/conference-template-a4.docx","_blank");
    };

    const handleLatexClick = () => {
        window.open("https://www.ieee.org/content/dam/ieee-org/ieee/web/org/conferences/conference-latex-template.zip","_blank");
    };
    

    return (
        <Fragment>
        <Header />
        <Navbar/>
        <br />  
        <section className={styles2.instructions}>
            <h2 className={styles2.instructionsHeading}>Paper Submission <span>Guidelines</span></h2>
            <br />
            <ul className={styles2.instructionsContent}>
                <p>
                <strong>All</strong> the accepted and presented papers will be published in the form of e-proceedings and will be submitted to IEEE Xplore Digital Library (indexed in SCOPUS, Google Scholar and other major indexing) and 100% accepted and presented papers will be forwarded to IEEE Transactions on Industry Applications for further review.
                </p>
                <br />
                <p className={styles2.submissionTemplate}>
                    <strong>Templates for Manuscript Submission : </strong>
                    <button onClick={handleWordClick}>MS Word</button>
                    <span>   |   </span>
                    <button onClick={handleLatexClick}>LaTeX</button>
                </p>
                <br />
                <p>
                After peer review, all accepted and presented papers of NE-IECCE 2025, will be submitted to IEEE Xplore Digital Library for inclusion and other major indexing.
                </p>
            </ul>
        </section>
        <br/>
        <hr />
        <section className={styles2.importantNotice}>
            <h2 className={styles2.instructionsHeading}>Important <span>Notice</span></h2>
            <br />
            <ol className={styles2.submissionGuidelinesText}>
                <li>
                    1) All papers submitted to <strong>NE-IECCE 2025</strong>  will undergo a plagiarism check. Papers with similarity scores of 30% or above may be rejected without further review.
                </li>
                <li>
                    2) Acceptance of the paper does not guarantee acceptance of the final paper.
                </li>
            </ol>
            <ul className={styles2.submissionGuidelinesText}>
                <p> 3) The organizing committee of <strong>NE-IECCE 2025</strong> reserves the right to reject papers for the following reasons (one or more of):</p>
                <p className={styles2.submissionGuidelinesTextConditions}>i) With poor language.</p>
                <p className={styles2.submissionGuidelinesTextConditions}>ii) With poor technical content.</p>
                <p className={styles2.submissionGuidelinesTextConditions}>iii) Not Addressing Reviewer's remarks.</p>
                <p className={styles2.submissionGuidelinesTextConditions}>iv) Dissimilarity between contents of paper and final camera-ready version of accepted papers.</p>
            </ul>
        </section>
        <br />
        <span className={styles2.submitButtonArea}>
            <button className={styles2.submitButton} onClick={handleClick}>
                Submit Manuscript
            </button>
        </span>
        <br />

        {/* Add ToastContainer */}
        <ToastContainer />
        </Fragment>
    );
};

export default PaperSumbissionGuide;
