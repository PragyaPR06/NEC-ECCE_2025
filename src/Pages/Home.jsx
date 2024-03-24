import React from 'react'
import Tracks from '../Components/Tracks/Tracks'
import HomeSlider from '../Components/HomeComponents/HomeSlider';
import Navbar from "../Components/Navbar/Navbar"
import AboutUsComponent from '../Components/About/About';
import Timer from '../Components/Timer/Timer';
import Patrons from '../Components/Patrons/patrons';
const Home = () => {
  return (
    <div>
      <Navbar/>
      <HomeSlider />
      <AboutUsComponent/>
      <Tracks/>
      <Timer/>
      <Patrons/>
      
      

    </div>
  )
};
export default Home;
