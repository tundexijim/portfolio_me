import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import {BrowserRouter} from 'react-router-dom'
const App = () => {

  return (
    <BrowserRouter>
    <div>
      <Navbar />
      <Projects />
      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App