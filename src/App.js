import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"; 
import Home from './Pages/Home';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Committee from './Pages/Committee';
import Aboutus from './Pages/Aboutus';
import CallForPaper from './Pages/CallForPaper';
import StudentAwards from './Pages/StudentAwards';
import Registrations from './Pages/Registration';
// import AboutUsComponent from './Components/About/About'

export const App = () => {
  return (
    <div>
       
       <BrowserRouter>
            
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/committee" element={<Committee/>}/>
              <Route exact path="/Aboutus" element={<Aboutus/>}/>
              <Route exact path="/CallForPapers" element={<CallForPaper/>}/>
              <Route exact path="/StudentAwards" element={<StudentAwards/>}/>
              <Route exact path="/Registrations" element={< Registrations/>}/>
              
            </Routes>
            <Footer/>
      </BrowserRouter>
    </div>

  );
}
export default App;