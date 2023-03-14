import React from 'react'
import './Aftnav2.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jfif'
const Aftnav = () => {
  return (
    <div>
      <div className='aftnav'>
        <div className='container-fluid'>
          <div className='row'>
            <div className=' col col-lg-7 animate-charcter'>
              <h2>How To Build And E-Commerce Organic Platform That Links Farmers Directly To The Buyers ?</h2>
            </div>
            <div className='col col-lg-5'>
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" />
              <img src={img4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Aftnav;
