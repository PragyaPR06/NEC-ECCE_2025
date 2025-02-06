import React, { Fragment } from 'react'
import Header from '../../Components/Header/header'
import Navbar from '../../Components/Navbar/Navbar'
import styles from './Awards.module.scss'

const StudentAwards = () =>{
  return(
      <>
      <Header/>
      <Navbar />
      

          <div className={styles.studentAwardSection}>
              <img src="/Awards/awards_flyer.jpeg" alt="Student Awards Flyer" ></img></div><br />
              <div className="text-center">
<h2 className="font-bold text-blue-500 md:text-2xl text-[clamp(10px,3vw,18px)] mb-4">
  For more information, download the docx file from button below:
</h2>
<a href="/Awards/StudentTravelAward.docx" download>
  <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
    Download
  </button>
</a>
</div>
<br></br>
      </>
  )
};

export default StudentAwards;