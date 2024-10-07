import React, { Fragment } from 'react';
import styles4 from "../Pages/ContactUs.module.css";
import Header from "../Components/Header/header";
import Navbar from "../Components/Navbar/Navbar";

const ContactUs = () => {
    return(
        <Fragment>
            <Header/>
            <Navbar/>
            <br />
            <header className={styles4.header}>
                    <h1> Contact <span>Us</span></h1>
            </header>
            <br /><br />

            <section className={styles4.primaryContacts}>
                <section className={styles4.mainContact}>
                    <p className={styles4.contactName}><strong>Dr. Amritesh Kumar</strong> </p>
                   <h3> <p>Assistant Professor</p><p>
NIT Silchar, Assam, India</p></h3>
                    <br />
                    <a href='mailto:amritesh@ee.nits.ac.in' className={styles4.contactEmail}><strong>Email : </strong>amritesh@ee.nits.ac.in </a>
                </section>
                <section className={styles4.mainContact}>
                    <p className={styles4.contactName}><strong>Dr. Asha Rani M A</strong> </p>
                    <p>Assistant Professor</p><p>
                    NIT Silchar, Assam, India</p>
                    <br />
                    <a href='mailto:asharani@ee.nits.ac.in' className={styles4.contactEmail}><strong>Email : </strong>asharani@ee.nits.ac.in  </a>
                </section>
            </section>
            <br /><br />
            <section className={styles4.generalQueries}>
            <section className={styles4.generalQueriesText}>
                <br />  
                    <strong>Note :</strong>
                    <br />
                    <br />
                    <p className={styles4.generalQueriesInnerText}>
                        For general queries, please contact the Conference Organiser through <a href="mailto:neiecce.ieee@ee.nits.ac.in">neiecce.ieee@ee.nits.ac.in </a> 
                    </p>
                    <br />
                    
            </section>
            </section>
            <br /><br /><br /><br />    
        </Fragment>
    );
};

export default ContactUs;
