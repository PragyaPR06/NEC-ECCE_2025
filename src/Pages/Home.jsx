import React from 'react'
import Tracks from '../Components/Tracks/Tracks'
import HomeSlider from '../Components/HomeComponents/HomeSlider';
import Navbar from "../Components/Navbar/Navbar"
import AboutUsComponent from '../Components/About/About';
const Home = () => {
  return (
    <div>
      <Navbar/>
      <HomeSlider />
      <AboutUsComponent/>
      <Tracks/>

    </div>
  )
};
export default Home;
