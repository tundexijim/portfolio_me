import React, {useLayoutEffect} from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { Routes, Route, useLocation } from 'react-router-dom'
const App = () => {
  const {pathname} = useLocation();
  useLayoutEffect(() => {
    window.scrollTo({
        top: 0,
        bottom: -window.innerHeight,
        behavior: 'smooth'
    })
}, [pathname]);
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App