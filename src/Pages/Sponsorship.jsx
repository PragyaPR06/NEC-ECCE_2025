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
        </>
    )
};
export default Sponsorship;