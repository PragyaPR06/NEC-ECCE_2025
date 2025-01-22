import React, { Fragment } from 'react'
import Header from '../../Components/Header/header'
import Navbar from '../../Components/Navbar/Navbar'
import styles from './Awards.module.css'

const StudentAwards = () => {
  return (
    <Fragment>
 <Header/>
 <Navbar/>
 <section className={styles.header}>
            <br /><br />
                <h1>Coming <span>Soon !!</span></h1>
                <br /><br /><br />
            </section>
    </Fragment>
  )
}

export default StudentAwards