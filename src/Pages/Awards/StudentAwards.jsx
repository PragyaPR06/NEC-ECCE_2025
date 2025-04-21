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
                    <h2>NE-IECCE 2025 Student Travel Award for <span>North East India Students</span></h2>
                </header>
                <div className={styles.aboutUsInfo}>
                    <p className={styles.anekTamilAboutUsPara}>
                    Are you a student from North East India eager to showcase your research at the NE-IECCE 2025 Conference? This is your chance to attend this prestigious event with the Student Travel Award (STA)! <br/><br />
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
            <h2 className={styles.instructionsHeading}>Eligibility Criteria:</h2>
            <p className={styles.anekTamilAboutUsPara}><strong>To be shortlisted for the NE-IECCE 2025 Student Travel Award, applicants must :</strong></p>
            <ul className={styles.submissionGuidelinesText}>
                <li>
                <span className={styles.boldText}>Be enrolled as Full-time </span>from the engineering institutes/Universities in North-East India in the relevant fields (Engineering, Technology, etc.)
                </li>
                <li><strong>Only accepted, registered (under the category “Author: Indian (Academia/Industry)”) and physically presented papers </strong>at the NE-IECCE 2025 Conference are eligible for the travel grant.</li>
                <li>Be the <strong>first author </strong>of an accepted paper with the final version uploaded within the deadline.</li>
                <li>Hold an active <span className={styles.boldText}>IEEE</span> student membership <strong>(Required only when shortlisted for award)</strong>
                {/* <span className={styles.boldText}>Only accepted, registered and physically presented papers</span> at the NE-IECCE 2025 Conference are eligible for the travel grant. */}
                </li>
                <li>Hold an active <strong>IEEE</strong> Industry Application Society (IAS) Student Membership. <strong>(Required only when shortlisted for award)</strong></li>
                
                <li>Complete the registration on or before the <span className={styles.boldText}>specified deadline.</span></li>
                <li>Attend the conference <strong>in person to present the accepted paper</strong> and attend the valedictory ceremony.</li>
                {/* <li>
                You must provide a <span className={styles.boldText}>bonafide certificate issued by the competent authority (Head of the Department/Institute) </span>as proof of student status.
                </li> */}
                <li>You must provide a<strong> bonafide certificate issued by the competent authority (Head of the Department/Institute) </strong>as proof of student status along with other relevant documents required.</li>
            </ul>
            </section>
            <br /><hr /><br />
            <section className={styles.eligibility}>
            <h2 className={styles.instructionsHeading}>Note:</h2>
            <p className={styles.anekTamilAboutUsPara}>Before applying for the Student Travel Award, please note that it is mandatory to complete the following steps:</p>
            <ul className={styles.submissionGuidelinesText}>
                <li>
                <span className={styles.boldText}>Full paper registration under the category “Author: Indian (Academia/Industry)”</span>
                {/* Submit your digest via the <span className={styles.boldText}>NE-IECCE 2025 Submission Portal.</span> */}
                </li>
                <li>
                Upload the camera-ready paper submission & electronic IEEE Copyright Form (eCF)
                Please ensure that you have completed these requirements before submitting your Student Travel Award application. This will ensure that your application is considered eligible for review.
                {/* Complete the <span className={styles.boldText}>Student Travel Grant Application Form</span> available on the conference website. (Will be updated soon on website..) */}
                </li>
            </ul>
            </section>
            <section className={styles.eligibility}>
            <h2 className={styles.instructionsHeading}>The students are required to submit ONE PDF that include the following, in order:</h2>
            <p className={styles.anekTamilAboutUsPara}>Before applying for the Student Travel Award, please note that it is mandatory to complete the following steps:</p>
            <ul className={styles.submissionGuidelinesText}>
                <li>
                Cover Letter mentioning the need for the travel support.
                {/* Submit your digest via the <span className={styles.boldText}>NE-IECCE 2025 Submission Portal.</span> */}
                </li>
                <li>
                Letter on the institute/college/university letterhead endorsed by head of the Department/Dean/Supervisor with stamp endorsing your student status.
                </li>
                <li> CV (2-page max)</li>
                <li>PDF(s) of the final camera-ready paper(s) [IEEE PDF eXpress check].</li>
                <li>Full paper registration transaction details.</li>
                <li>Active IEEE Student Membership & IEEE Industry Application Society (IAS) Student Membership (Required only when shortlisted for award).</li>
                <li> Fill out the online Student Travel Award form by clicking link below:

                                        </li>
            </ul>
            <div className="flex items-center justify-center mt-9">
  <button className="relative overflow-hidden text-white font-bold py-3 px-6 rounded-full shadow-md transition-colors duration-500 ease-in-out bg-red-600 group w-100 h-12 flex items-center justify-center">
    <span className="relative z-10 text-center w-full whitespace-nowrap"><a href='https://docs.google.com/forms/d/e/1FAIpQLScuHNKJRwLB2RQcLg10vULu5Knnsh-6CAyBxWxoKU1m_cH1jg/viewform?usp=header' >Student Travel</a></span>
    <span className="absolute inset-0 bg-gradient-to-r from-green-400 via-green-600 to-green-800 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
  </button>
</div>
            </section>
            <section className={styles.lowerText}>
            <p> After submitting the student travel award google form Email one PDF containing items Sl 1 to 7 to: rathoreakshay@gmail.com & asharani@ee.nits.ac.in (in CC) with the subject line ‘IEEE NE-IECCE 2025 Student Travel Award’.</p><br />
            <p>&#128197; The <strong>deadline</strong> for submission of Student Travel Award application is 05 May 2025.</p><br />
              <p>&#128197;The shortlisted candidates for the award will be notified by 15th May 2025.</p><br />
              <p>&#128197;The certificate and the cash prize will be given on 6th  July 2025 during “Valedictory and Awards ceremony”.</p><br />
            <p>&#128205; The student must attend in-person and present the paper in-person to qualify for receiving the award.</p>
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