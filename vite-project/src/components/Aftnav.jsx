import React from 'react'
import './Aftnav2.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import image4 from '../assets/img1.jpg'
// import image5 from '../assets/img2.jpg'
// import image6 from '../assets/img3.jfif'
// import image7 from '../assets/img4.jpg'
import image from '../assets/aftnav-img.png'
const Aftnav = () => {
  return (
    <div>
      <div className='aftnav'>
        <div className='container-fluid'>
          <div className='row'>
            <div className=' col col-lg-6 col-sm-12 animate-charcter'>
              <h2>How To build An E-Commerce Organic Platform That Links Farmers Directly To The Buyers ?</h2>
            </div>
            <div className='col col-lg-6 col-sm-12 '>
              {/* <img src={image4} alt="" />
              <img src={image5} alt="" />
              <img src={image6} alt="" />
              <img src={image7} alt="" /> */}
              <img src="image" alt="" className='aftnav-img'/>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
    
  )
}


export default Aftnav;
