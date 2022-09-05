import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Individual from './routes/Individual';
import Teams from './routes/Teams';
import Home from './routes/Home';
import Navbar from './routes/Navbar';
import Login from './routes/Login';
import Enterprise from './routes/Enterprise';
import GetStarted from './routes/GetStarted';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './routes/Footer';
function Routing() {
  return (
     <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/individual" element={<Individual/>} />
        <Route path="/teams" element={<Teams/>} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/login" element={<Login />} /> 
        <Route path='/getstared' element={<GetStarted/>}></Route>
      </Routes>
      <Footer/>
   </BrowserRouter>
  );
}

export default Routing;
