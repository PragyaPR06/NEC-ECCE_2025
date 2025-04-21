import React, { Fragment } from 'react'
import Header from '../../Components/Header/header'
import Navbar from '../../Components/Navbar/Navbar'
import styles from './Awards.module.scss'

const StudentAwards = () =>{
  return(
    <>
    <Header />
    <Navbar />
    <hr />
  
    <div className={`${styles.container} relative pt-[2rem]`}>
      <section className={styles.aboutUs}>
        <header className={styles.anekTamilAboutUs}>
          <h2>
            NE-IECCE 2025 Student Travel Grant for <span>North East India Students</span>
          </h2>
        </header>
        <div className={styles.aboutUsInfo}>
          <p className={styles.anekTamilAboutUsPara}>
            🌟 <strong>Apply Now for the NE-IECCE 2025 Student Travel Grant – Exclusively for North East India Students!</strong> 🌟
            <br /><br />
            Are you a student from North East India eager to showcase your research at the NE-IECCE 2025 Conference? This is your chance to attend this prestigious event with the Student Travel Grant!<br /><br />
            As we prepare for this prestigious conference, we are excited to announce the distinguished Student Travel Awards (STA) to cover registration and travel expenses of North East India students.
          </p>
          <ul className={styles.submissionGuidelinesText}>
            <li>Up to <span className={styles.boldText}>40 Awards</span> for students enrolled <span className={styles.boldText}>full-time</span> at engineering institutes/Universities in <span className={styles.boldText}>North East India</span> – don’t miss your chance!</li>
            <li>The award includes a certificate and <span className={styles.boldText}>cash award</span> for each selected student who presents an accepted and registered conference paper <span className={styles.boldText}>physically</span> to cover registration and travel expenses.</li>
            <li>For presenting latest research findings in the area of <span className={styles.boldText}>Power and Energy Systems, Energy Conversion, Control & Automation</span>.</li>
            <li>Network with industry experts, renowned academicians, and peers from around the world.</li>
            <li>Gain exposure for your work, receive feedback from leading professionals, and enhance your academic and career journey.</li>
          </ul>
        </div>
      </section>
  
      <br /><hr /><br />
  
      <section className={styles.eligibility}>
        <h2 className={styles.instructionsHeading}>Eligibility Criteria:</h2>
        <p className={styles.anekTamilAboutUsPara}>To be shortlisted for the NE-IECCE 2025 Student Travel Award, applicants must:</p>
        <ul className={styles.submissionGuidelinesText}>
          <li><span className={styles.boldText}>Be enrolled as Full-time</span> students from the engineering institutes/Universities in North-East India in the relevant fields (Engineering, Technology, etc.)</li>
          <li><span className={styles.boldText}>Only accepted, registered</span> (under category “Author: Indian (Academia/Industry)”) and <span className={styles.boldText}>physically presented</span> papers at the NE-IECCE 2025 Conference are eligible for the travel grant.</li>
          <li>Be the <span className={styles.boldText}>first author</span> of an accepted paper with the final camera ready version uploaded within the deadline.</li>
          <li><span className={styles.boldText}>Optional:</span> Hold an active IEEE Student Membership. (Required only when shortlisted for award)</li>
          <li><span className={styles.boldText}>Optional:</span> Hold an active IEEE Industry Application Society (IAS) Student Membership. (Required only when shortlisted for award)</li>
          <li>Complete the registration on or before the <span className={styles.boldText}>specified deadline</span>.</li>
          <li>Attend the conference <span className={styles.boldText}>in person</span> and present the accepted paper and attend the valedictory ceremony.</li>
          <li>You must provide a <span className={styles.boldText}>bonafide certificate</span> issued by the competent authority (Head of the Department/Institute) as proof of student status along with other relevant documents required (mentioned under how to apply).</li>
        </ul>
      </section>
  
      <br /><hr /><br />
  
      <section className={styles.eligibility}>
        <h2 className={styles.instructionsHeading}>Application Process:</h2>
        <p className={styles.anekTamilAboutUsPara}>
          1. Complete the Student Travel Grant Application Form via the Google form (link to be provided).<br />
          2. Provide the following necessary documents, with a brief statement on why you want to attend the conference and why you should be selected for this award:
        </p>
        <ul className={styles.submissionGuidelinesText}>
          <li>Endorsement Letter from the HoD (with seal) justifying the need for the travel award.</li>
          <li>A copy of CV.</li>
          <li>PDF(s) of the Final accepted paper(s).</li>
          <li>A copy of your College ID card.</li>
          <li>A copy of the IEEE & IAS Student membership proof. (Required only when shortlisted for award)</li>
          <li>A brief statement on why you want to attend the conference and why you should be selected for this award.</li>
        </ul>
      </section>
  
      <section className={styles.lowerText}>
        <p>📅📍 <span className={styles.boldText}>Conference Dates:</span> 4th – 6th July 2025</p>
      </section>
  
      <section className={styles.nearFooterText}>
        This is a fantastic opportunity to advance your research, broaden your academic network, and participate in one of the most exciting conferences in the field of <span className={styles.boldText}>Sustainable Energy Conversion and Transport Electrification</span>.
        <br /><br />
        <p>For More Information and to Apply: <br />
          Visit: <a href="https://ne-iecce2025.org/" className="text-blue-600 underline hover:text-blue-800" target="_blank" rel="noreferrer">https://ne-iecce2025.org/</a>
        </p>
        <br />
        <p>Don’t miss out on this chance to attend NE-IECCE 2025 and take your research journey to the next level!</p>
      </section>
  
      <section className={styles.studentAwardSection}>
        <img src="/Awards/awards_flyer.jpeg" alt="NE-IECCE 2025 Student Travel Grant Poster" />
      </section>
    </div>
    <br />
  </>
  
  )
};

export default StudentAwards;