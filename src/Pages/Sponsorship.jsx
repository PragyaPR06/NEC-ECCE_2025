import React from "react";
import styles from "./Sponsorship.module.scss";
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/header";


const Sponsorship = () =>{
    return(
        <>
        <Header/>
        <Navbar />
        

            <div className={styles.sponsorship}>
                <img src="/sponsors/Sponsor.jpg" alt="sponsorship pdf" ></img></div>
                <div className="text-center">
  <h2 className="font-bold text-blue-500 text-2xl mb-4">
    You can download the complete sponsorship brochure from below:
  </h2>
  <a href="/pdfs/sponsorship-3.pdf" download>
    <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
      Download
    </button>
  </a>
</div>
<br></br>
<div className="text-center">
  <h2 className="font-bold text-blue-500 text-2xl mb-4">
  Interested sponsors can fill the google form:
  </h2>
  <a href="/" >
    <button className="bg-blue-500 text-white font-bold py-2 px-4 my-6 rounded hover:bg-blue-700">
      Fill the Form
    </button>
  </a>
 
</div>

 
        </>
    )
};
export default Sponsorship;