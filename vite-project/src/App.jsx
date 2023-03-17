import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Aftnav from './components/Aftnav'
import Middlesection from './components/Middlesection'
import Carousal from './components/Carousal'



const App = () => {
  return (
    <div className='test-class'>
      <Navbar></Navbar>
      <br/><br/><br/>
      <br/><br/><br/>
    

      <Aftnav></Aftnav>
      <Middlesection></Middlesection>
      
      <Carousal></Carousal>

    </div>

  )
}

export default App



