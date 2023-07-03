import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
const App = () => {

  return (
    <BrowserRouter>
    <div>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App