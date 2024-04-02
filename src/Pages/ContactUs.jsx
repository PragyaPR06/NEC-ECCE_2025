import React, { Fragment, useEffect } from 'react';
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
                    <br />
                    <p className={styles4.contactEmail}><strong>Email : </strong>amritesh@ee.nits.ac.in </p>
                </section>
                <section className={styles4.mainContact}>
                    <p className={styles4.contactName}><strong>Dr. Asha Rani M A</strong> </p>
                    <br />
                    <p className={styles4.contactEmail}><strong>Email : </strong>asharani@ee.nits.ac.in </p>
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
                        For general queries, please contact the Conference Organiser through <a href="mailto:neiecce.ieee@gmail.com">neiecce.ieee@gmail.com </a> 
                    </p>
                    <br />
                    <p className={styles4.generalQueriesInnerText}>
                        For specific enquiry regarding conference, please email to <span> Dr. Amritesh Kumar - </span> <a href="amritesh@ee.nits.ac.in">amritesh@ee.nits.ac.in </a> 
                    </p>
                    <br />  
            </section>
            </section>
            <br /><br /><br /><br />    
        </Fragment>
    );
};

export default ContactUs;