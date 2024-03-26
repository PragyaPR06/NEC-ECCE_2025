import React from 'react'
import Tracks from '../Components/Tracks/Tracks'
import HomeSlider from '../Components/HomeComponents/HomeSlider';
import Navbar from "../Components/Navbar/Navbar"
import AboutUsComponent from '../Components/About/About';
import Timeline  from '../Components/Timeline/Timeline';
import Footer from '../Components/Footer/Footer';
import Timer from '../Components/Timer/Timer';
import Patrons from '../Components/Patrons/patrons';
import Header from '../Components/Header/header';
const Home = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <HomeSlider />
      <Patrons/>
      <AboutUsComponent/>
      <Tracks/>
      <Timeline />
      <Timer/>
      <Footer />
    </div>
  )
};
export default Home;
