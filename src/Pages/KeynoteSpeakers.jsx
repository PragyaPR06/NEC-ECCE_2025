import React, { Fragment } from 'react';
import styles3 from "../Pages/KeynoteSpeakers.module.css";
import Header from "../Components/Header/header";
import Navbar from "../Components/Navbar/Navbar";

const KeynoteSpeakers = () => {
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

export default KeynoteSpeakers;