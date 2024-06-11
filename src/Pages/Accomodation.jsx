import React, { Fragment, useEffect } from 'react';
import styles3 from "../Pages/Accomodation.module.css";
import Header from "../Components/Header/header";
import Navbar from "../Components/Navbar/Navbar";

const Accomodation = () => {
    return(
        <Fragment>
        <Header/>
        <Navbar/>
        <section className={styles3.header}>
            <br /><br />
                <h1>Coming <span>Soon !!</span></h1>
                <br /><br /><br /><br /><br />
            </section>
        </Fragment>
        );
};

export default Accomodation;