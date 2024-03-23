import React from 'react'
import Tracks from '../Components/Tracks/Tracks'
import HomeSlider from '../Components/HomeComponents/HomeSlider';
import Navbar from "../Components/Navbar/Navbar"
import AboutUsComponent from '../Components/About/About';
import Timeline  from '../Components/Timeline/Timeline';
import Footer from '../Components/Footer/Footer';
const Home = () => {
  return (
    <div>
      <Navbar/>
      <HomeSlider />
      <AboutUsComponent/>
      <Tracks/>
      <Timeline/>
      <Footer/>
    </div>
  )
};
export default Home;
