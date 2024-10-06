

import React from 'react'
import Tracks from '../Components/Tracks/Tracks'
import Header from '../Components/Header/header'
import Navbar from '../Components/Navbar/Navbar'
import styles2 from "./CallForPaper.module.css";

const CallForPaper = () => {
  return (
    <div>
        <Header></Header>
        <Navbar></Navbar>
        <section className={styles2.guidelines}>  
          <section className={styles2.publicationHeader}>
          <h2 className={styles2.publicationHeader}>
            Publication
          </h2>
        </section>
        <section className={styles2.instructionsContent}>
        <p>

All the accepted and presented papers will be published in the form of e-proceedings and will be submitted to IEEE Xplore Digital Library (indexed in SCOPUS, Google Scholar and other major indexing) and <span style={{color: 'green', fontWeight: 700}}> 100% accepted and presented papers will be forwarded to IEEE Transactions on Industry Applications for further review. </span></p>
<p className={styles2.submissionLink}>
Submit manuscripts using <a href="https://cmt3.research.microsoft.com/NEIECCE2025" target="_blank" rel="noopener noreferrer" style={{color: 'blue'}}><strong> https://cmt3.research.microsoft.com/NEIECCE2025 </strong></a>
</p>
        </section>
        </section> 
        <Tracks></Tracks>
    </div>
  )
}

export default CallForPaper