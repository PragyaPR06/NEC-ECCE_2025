import React, { Fragment } from 'react'
import Header from '../../Components/Header/header'
import Navbar from '../../Components/Navbar/Navbar'
import styles from './Awards.module.scss'

const StudentAwards = () =>{
  return(
      <>
      <Header/>
      <Navbar />
      <hr />

      <div className={`${styles.container} relative pt-[2rem]`}>
            <section className={styles.aboutUs}>
                <header className={styles.anekTamilAboutUs}>
                    <h2>NE-IECCE 2025 Student Travel Grant for <span>North East India Students</span></h2>
                </header>
                <div className={styles.aboutUsInfo}>
                    <p className={styles.anekTamilAboutUsPara}>
                    Are you a student from North East India eager to showcase your research at the NE-IECCE 2025 Conference? This is your chance to attend this prestigious event with the Student Travel Grant! <br/><br />
                    As we prepare for this prestigious conference, we are excited to announce the distinguished Student Travel Awards (STA) to cover registration and travel expenses of North East India students.
                    </p>
                    <ul className={styles.submissionGuidelinesText}>
                <li>
                <span className={styles.boldText}>Up to 40 Awards </span>for students enrolled <span className={styles.boldText}>full-time</span> at engineering institutes/Universities in <span className={styles.boldText}>North East India</span> – don’t miss your chance!
                </li>
                <li>
                The award includes a certificate and <span className={styles.boldText}>20,000 INR</span> for each selected student who presents an accepted and registered conference paper <span className={styles.boldText}>physically</span> to cover registration and travel expenses.
                </li>
                <li>
                For presenting latest research findings in the area of Power and Energy Systems, Energy Conversion, Control & Automation.
                </li>
                <li>
                Network with industry experts, renowned academicians, and peers from around the world.
                </li>
                <li>
                Gain exposure for your work, receive feedback from leading professionals, and enhance your academic and career journey.
                </li>
            </ul>
                </div>
            </section><br /><hr /><br />
            <section className={styles.eligibility}>
            <h2 className={styles.instructionsHeading}>Eligibility</h2>
            <ul className={styles.submissionGuidelinesText}>
                <li>
                Enrolled Full-time students from the engineering institutes/Universities in North-East India in the relevant fields (Engineering, Technology, etc.)
                </li>
                <li>
                <span className={styles.boldText}>Only accepted, registered and physically presented papers</span> at the NE-IECCE 2025 Conference are eligible for the travel grant.
                </li>
                <li>
                You must provide a <span className={styles.boldText}>bonafide certificate issued by the competent authority (Head of the Department/Institute) </span>as proof of student status.
                </li>
            </ul>
            </section>
            <br /><hr /><br />
            <section className={styles.eligibility}>
            <h2 className={styles.instructionsHeading}>How to Apply:</h2>
            <ul className={styles.submissionGuidelinesText}>
                <li>
                Submit your digest via the <span className={styles.boldText}>NE-IECCE 2025 Submission Portal.</span>
                </li>
                <li>
                Complete the <span className={styles.boldText}>Student Travel Grant Application Form</span> available on the conference website. (Will be updated soon on website..)
                </li>
                <li>
                Provide necessary documents, including your <span className={styles.boldText}>college ID card  </span>and a brief statement on why you want to attend the conference and why you should be selected for this award. (Will be updated soon on website..)
                </li>
            </ul>
            </section>
            <section className={styles.lowerText}>
            <p>&#128197; Submit Your Digest by: 10th March 2025</p><br />
            <p>&#128205; Conference Dates: 4th – 6th July 2025</p>
            </section>
            <section className={styles.nearFooterText}>
            This is a fantastic opportunity to advance your research, broaden your academic network, and participate in one of the most exciting conferences in the field of Sustainable Energy Conversion and Transport Electrification. <br /><br />
            <p>Don’t miss out on this chance to attend NE-IECCE 2025 and take your research journey to the next level!</p><br />
           

            </section>
            <section className={styles.studentAwardSection}>
            <img src="/Awards/awards_flyer.jpeg" alt="Students Award" ></img>
            </section>
            </div>
<br></br>
      </>
  )
};

export default StudentAwards;