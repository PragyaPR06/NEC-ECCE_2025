import React from 'react'
import Tracks from '../Components/Tracks/Tracks'
import Header from '../Components/Header/header'
import Navbar from '../Components/Navbar/Navbar'
import styles2 from "./CallForPaper.module.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CallForPaper = () => {

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
    <div>
        <Header></Header>
        <Navbar></Navbar>
        <section className={styles2.guidelines}>  
        <br />
            <header className={styles2.header}>
                    <p> Instruction For <span>Authors</span></p>
            </header>
            <section className={styles2.instructionsContent}>
            <p>NE-IECCE 2025 invites researchers, practitioners, and students worldwide to submit previously unpublished original papers for consideration to be presented at the conference. All submissions will be peer-reviewed.
            </p>
            <br></br>
            <p className={styles2.submissionTemplate}>
                    <strong>Templates for Digest Submission : </strong>
                    <button onClick={handleWordClick}>MS Word</button>
                    <span>   |   </span>
                    <button onClick={handleLatexClick}>LaTeX</button>
                </p>
            <p className={styles2.submissionLink}>
            Please submit your Digest using the following link :
            <a href="https://cmt3.research.microsoft.com/NEIECCE2025" target="_blank" rel="noopener noreferrer" style={{color: 'blue'}}><strong> https://cmt3.research.microsoft.com/NEIECCE2025 </strong></a>
            </p>
            </section>
            <br /><br />
            <section className={styles2.instructions}>
            <h2 className={styles2.instructionsHeading}>Digest Submission <span>Guidelines</span></h2>
            <br />
            <ul className={styles2.instructionsContent}>
                <p>* Initial submission of digest (5 pages max. in double column format) including figures and references are allowed in PDF format.</p>
                <p>* Total file size of the digest must not exceed 2 MB.</p>
                <p>* Accepted papers after the initial review will get the opportunity to submit a full paper (6 pages max.).</p>
                <p>* Up to two (2) extra pages are permissible with an additional fee to be paid at the time of registration.</p>
            </ul>
        </section>
        <section className={styles2.importantNotice}>
            <h2 className={styles2.instructionsHeading}>Important <span>Notice</span></h2>
            <br />
            <ol className={styles2.submissionGuidelinesText}>
                <li>1) All papers submitted to <strong>NE-IECCE 2025</strong> will undergo a plagiarism check. Papers with similarity scores of 30% or above may be rejected without further review, and no single source should exceed 10% similarity.</li>
                <li>2) Acceptance of the digest does not guarantee acceptance of the final paper.</li>
                <li>3) Paper title and authors order should not be changed while submitting the final manuscript.</li>
            </ol>
            <ul className={styles2.submissionGuidelinesText}>
                <p> 4) The organizing committee of NE-IECCE 2025 reserves the right to reject papers for the following reasons (one or more of):</p>
                <p className={styles2.submissionGuidelinesTextConditions}>i) With poor language.</p>
                <p className={styles2.submissionGuidelinesTextConditions}>ii) With poor technical content.</p>
                <p className={styles2.submissionGuidelinesTextConditions}>iii) Not Addressing Reviewer's remarks.</p>
                <p className={styles2.submissionGuidelinesTextConditions}>iv) Dissimilarity between contents of digest and final camera-ready version of accepted papers.</p>
            </ul>
        </section>
        <br></br>
        <span className={styles2.submitButtonArea}>
            <button className={styles2.submitButton} onClick={handleClick}>
                Submit Digest
            </button>
        </span>
        </section> 
    </div>
  )
}

export default CallForPaper;
