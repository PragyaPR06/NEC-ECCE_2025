import React  from 'react';
import Tracks from '../Components/Tracks/Tracks'
import HomeSlider from '../Components/HomeComponents/HomeSlider';
import Navbar from "../Components/Navbar/Navbar"
import AboutUsComponent from '../Components/About/About';
import Timeline  from '../Components/Timeline/Timeline';
import Timer from '../Components/Timer/Timer';
import SubLineComponent from '../Components/SubLine/SubLine';
import Sponsor from '../Components/Sponsors/Sponsors';
import Header from '../Components/Header/header';
import Buttons from '../Components/ButtonsunderSlider/Buttons';
import Speaker from '../Components/Speaker/Speaker';
const Home = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <hr />
      <SubLineComponent />
      <HomeSlider />
      <Buttons/>
      <Sponsor/>
      <br></br>
      <br></br>
      <Speaker/>
      <AboutUsComponent/>
      <Tracks/>
      <Timeline />
      <Timer/>
      
    </div>
  )
};
export default Home;
