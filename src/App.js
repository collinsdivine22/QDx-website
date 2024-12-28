import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom"
import SideBar from './Pages/LineChart';
import Layout from './Pages/Layout';
import LineChart from './Pages/LineChart';
import Register from './Pages/Register'
import About from './Pages/About'
import Service from './Pages/Service'
import Login from './Pages/Login'
import PatientRegistration from './Pages/PatientRegistration'
import LearningSide from './Pages/LearningSide'
function App() {
  return (

    <>
    
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='Sidebar' element={<SideBar />}/>
      <Route path='Login' element={<Login />}/>
      <Route path='man' element={<LineChart />}/>
      
      <Route path='layout' element={<Layout />}/>
      <Route path='login' element={<Register />}/>
      <Route path='PatientRegistration' element={<PatientRegistration />}/>
      <Route path="about" element={<About />} />.
      <Route path="Service" element={<Service/>} />.
      <Route path="LearningSide" element={<LearningSide/>} />.
    </Routes>
    </>
    
  );
}

export default App;
