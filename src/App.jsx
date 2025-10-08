import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import MunicipalComplaintPortal from './Components/MunicipalComplaintPortal'
import Footer from './Components/Footer'
import ComplaintForm from './Pages/ComplaintSubmission'
import ComplaintStatus from './Pages/TrackComplaint'
import Login from './Pages/Login'
import Register from './Pages/Register'

import { Routes,Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <Routes>
      <Route path='/' element={<MunicipalComplaintPortal/>}/>
      <Route path='/complaint' element={<ComplaintForm/>}/>
      <Route path='/track-complaint' element={<ComplaintStatus/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
