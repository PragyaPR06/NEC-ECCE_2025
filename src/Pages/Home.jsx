import React  from 'react';
import Tracks from '../Components/Tracks/Tracks'
import HomeSlider from '../Components/HomeComponents/HomeSlider';
import Navbar from "../Components/Navbar/Navbar"
import AboutUsComponent from '../Components/About/About';
import Timeline  from '../Components/Timeline/Timeline';
import Timer from '../Components/Timer/Timer';
import Sponsor from '../Components/Sponsors/Sponsors';



import Header from '../Components/Header/header';
import Aboutus from './Aboutus';

const Home = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      
      <HomeSlider />
      <Sponsor/>
      <AboutUsComponent/>
      <Tracks/>
      <Timeline />
      <Timer/>
      
      
    </div>
  )
};
export default Home;
