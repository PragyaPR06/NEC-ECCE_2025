import React from "react";
import styles from "./Brochure.module.scss";
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/header";


const Brochure = () =>{
    return(
        <>
        <Header/>
        <Navbar />
            <div className={styles.brochure}>
                <img src="/buttons/brochure.jpeg" alt="brochure pdf" ></img></div>
                <div className="text-center">
  <h2 className="font-bold text-blue-500  md:text-2xl text-[clamp(10px,3vw,18px)] mb-4">
    You can download the complete Brochure from below:
  </h2>
  <a href="/pdfs/Brochurefile.pdf" download>
    <button className="bg-blue-500 text-white font-bold py-2 px-4 my-5 rounded hover:bg-blue-700">
      Download Brochure
    </button>
  </a>
</div>
        </>
    )
};
export default Brochure;