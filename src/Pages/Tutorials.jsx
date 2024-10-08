import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Header from '../Components/Header/header';
import styles3 from "../Pages/ProgramDetails.module.css";

const Tutorials = () => {
  return (
    <>
     <Header/>
        <Navbar />
        <section className={styles3.header}>
        <br /><br />
            <h1>Coming <span>Soon !!</span></h1>
            <br /><br /><br /><br /><br />
        </section>
    </>
  );
};

export default Tutorials;




