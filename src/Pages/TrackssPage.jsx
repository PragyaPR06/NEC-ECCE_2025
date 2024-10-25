

import React from 'react'
import Tracks from '../Components/Tracks/Tracks'
import Header from '../Components/Header/header'
import Navbar from '../Components/Navbar/Navbar'
import styles2 from "./CallForPaper.module.css";

const TracksPage = () => {
  return (
    <div>
        <Header></Header>
        <Navbar></Navbar>
       <br></br>
        <Tracks></Tracks>
    </div>
  )
}

export default TracksPage;