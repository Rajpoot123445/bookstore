import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Freebook from './Components/Freebook'
import Home from './Pages/Home'
import { Route, Routes, useLocation } from 'react-router-dom';
import Courses from './Pages/Courses'
import SignUp from './Components/SignUp'
import Contact from './Components/Contact'


function App() {
  const loc = useLocation()
  const showNavbar = !(loc.pathname.includes('signup') || loc.pathname.includes('login'))
  console.log(showNavbar)

  return (
    <div>
      <div className='dark:bg-slate-600 dark:text-white'>
     {showNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path='/course' element={ <Courses /> } />
        <Route path="/signup" element={ <SignUp /> } />
        <Route path='/contact' element={ <Contact /> } />

      </Routes>
      {showNavbar && <Footer />}
      </div>
    </div>
  )
}

export default App
