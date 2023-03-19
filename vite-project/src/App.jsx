import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar'

import Home from './components/Home/Home';
import Buy from './components/Buy/Buy';
import Sell from './components/Sell/Sell';
import Footer from './components/AfterCrousal/Footer/Footer';



const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/buy' element={<Buy/>} />
        <Route path='/sell' element={<Sell/>} />

      </Routes>
      <Footer/>

     
    </BrowserRouter>

  )
}

export default App



