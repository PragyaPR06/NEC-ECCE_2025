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
                <img src="/buttons/brochure.jpg" alt="brochure pdf" ></img></div>
        </>
    )
};
export default Brochure;