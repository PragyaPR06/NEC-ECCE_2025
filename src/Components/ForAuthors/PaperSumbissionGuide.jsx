import React, { Fragment,  } from 'react';
import styles2 from "./PaperSumbissionGuide.module.scss";

import Header from '../Header/header';
import Navbar from "../Navbar/Navbar";
// import Footer from "../Components/Footer/Footer";



const PaperSumbissionGuide = () => {

    return (
        <Fragment>
        <Header />
        <Navbar/>
        <br />  
    <section className={styles2.instructions}>
    <h2 className={styles2.instructionsHeading}>Paper Submission <span>Guidelines </span></h2>
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
</section>
<br/>
<hr />
<br />


    </Fragment>
    );
};
export default PaperSumbissionGuide;