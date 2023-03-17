import React from 'react'
import './Aftnav2.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import image8 from '../assets/main.png'


const Aftnav = () => {
  return (
    <div style={{ height: '85vh' }}>
      <div className='aftnav' style={{ height: '80vh'}}>
        <div className='container-fluid'>
          <div className='row aftnav-section'>
            <div className=' col col-lg-6 col-sm-12 animate-charcter p-2' >
              <h2 style={{ paddingLeft: '4%' }}>How To build An E-Commerce Organic Platform That Links Farmers Directly To The Buyers ?</h2>
            </div>
            <div className='col col-lg-6 col-sm-12  '>
              <img src={image8} alt="" className='aftnav-img'/>
            </div>
            
          </div>
        </div>
      </div>
      <hr />
    </div>

  )
}


export default Aftnav;
