import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Pages/Layout';
import Login from './Pages/Login';
import PatientRegistration from './Pages/PatientRegistration';
import About from './Pages/About';
import Service from './Pages/Service';
import LineChart from './Pages/LineChart';

function App() {
  return (
    <Routes>
      {/* Route for the login page (no sidebar here) */}
      <Route path="/" element={<Login />} />

      {/* Routes wrapped with Layout (sidebar will always show) */}
      <Route path="/" element={<Layout />}>
        <Route path="layout" element={<LineChart />} />
        <Route path="PatientRegistration" element={<PatientRegistration />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Service />} />
      </Route>
    </Routes>
  );
}

export default App;
