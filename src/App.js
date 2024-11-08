import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom"
import SideBar from './Pages/LineChart';
import Layout from './Pages/Layout';
import LineChart from './Pages/LineChart';
import Register from './Pages/Register'
import PatientRegistration from './Pages/PatientRegistration'
function App() {
  return (

    <>
    
    <Routes>
      <Route path='/' element={<SideBar />}/>
      <Route path='man' element={<LineChart />}/>
      
      <Route path='layout' element={<Layout />}/>
      <Route path='login' element={<Register />}/>
      <Route path='PatientRegistration' element={<PatientRegistration />}/>
    </Routes>
    </>
    
  );
}

export default App;
