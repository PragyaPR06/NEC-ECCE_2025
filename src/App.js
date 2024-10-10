import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"; 
import Home from './Pages/Home';
// import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Committee from './Pages/Committee';
// import CallForPaper from './Components/CallForPaper/CallForPaper';
import Aboutus from './Pages/Aboutus';
import CallForPaper from './Pages/CallForPaper';
import StudentAwards from './Pages/StudentAwards';
import Registrations from './Pages/Registration';
import ContactUs from './Pages/ContactUs';
import Sponsorship from './Pages/Sponsorship';
import Brochure from './Pages/Brochure';
import ProgramDetails from './Pages/programDetails';
import KeynoteSpeakers from './Pages/KeynoteSpeakers';
import Accomodation from './Pages/Accomodation';
import PaperSumbissionGuide from './Components/ForAuthors/PaperSumbissionGuide';
import ImportantDates from './Components/ForAuthors/ImportantDates';
import CameraReadySumb from './Components/ForAuthors/CameraReadySumb';
import Specialsession from './Pages/Specialsession';


export const App = () => {
  return (
    <div>
       
       <BrowserRouter>
            
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/Aboutus" element={<Aboutus/>}/>
              <Route exact path="/Brochure" element={<Brochure/>}/>
              <Route exact path="/CallForPapers" element={<CallForPaper/>}/> 
              <Route exact path="/ImportantDates" element={<ImportantDates/>}/> 
              <Route exact path="/PaperSumbissionGuide" element={<PaperSumbissionGuide/>}/> 
              <Route exact path="/CameraReadySumb" element={<CameraReadySumb/>}/>  
              <Route exact path="/committee" element={<Committee/>}/>
              <Route exact path="/KeynoteSpeakers" element={<KeynoteSpeakers/>}/>
              <Route exact path="/ProgramDetails" element={<ProgramDetails/>}/>
              <Route exact path="/Travel" element={<StudentAwards/>}/>
              <Route exact path="/Registrations" element={< Registrations/>}/>
              <Route exact path="/Sponsorship" element={<Sponsorship/>}/>
              <Route exact path="/Specialsession" element={<Specialsession/>}/>
              <Route exact path="/accomodation" element={<Accomodation/>}/>
              <Route exact path="/ContactUs" element={<ContactUs/>}/>
            </Routes>
            <Footer/>
      </BrowserRouter>
    </div>

  );
}
export default App;