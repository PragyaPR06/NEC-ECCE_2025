import React, { Fragment } from 'react';
import styles3 from "../Pages/ProgramDetails.module.css";
import Header from "../Components/Header/header";
import Navbar from "../Components/Navbar/Navbar";

const ProgramDetails = () => {
    return(
        <Fragment>
        <Header/>
        <Navbar/>
         <div className={styles3.schedule}>
                        <img src="/schedule/Schedule_final-images-0.png" alt="brochure pdf" ></img></div>
                        <div className={styles3.schedule}>
                        <img src="/schedule/Schedule_final-images-1.png" alt="brochure pdf" ></img></div>
                        <div className={styles3.schedule}>
                        <img src="/schedule/Schedule_final-images-2.png" alt="brochure pdf" ></img></div>
                        <div className={styles3.schedule}>
                        <img src="/schedule/Schedule_final-images-3.png" alt="brochure pdf" ></img></div>

                        <div className="text-center">
  <h2 className="font-bold text-blue-500  md:text-2xl text-[clamp(10px,3vw,18px)] mb-4">
    You can download the complete program schedule from below:
  </h2>
  <a href="/pdfs/Schedule_final.pdf" download>
    <button className="bg-blue-500 text-white font-bold py-2 px-4 my-5 rounded hover:bg-blue-700">
      Download schedule
    </button>
  </a>
</div>
        </Fragment>
        );
};

export default ProgramDetails;