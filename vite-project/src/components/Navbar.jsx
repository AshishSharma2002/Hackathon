import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import image1 from '../assets/signin.png';

const Navbar = () => {
    return (
        <div>

            <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Digital farmers</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-links">
                            <li class="nav-item">
                                <a class="nav-link p-3" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link p-3" href="#">Sellers</a>
                            </li>
                            
                            <li class="nav-item">
                                <a class="nav-link p-3" href="#">Buyers</a>
                            </li>
                        </ul>
                        <div class='row login'>
                            <div className=' col-lg-6 col-sm-12'>
                                <img src={image1} alt="" className='logo' />
                            </div>
                            <div className=' col-lg-6 col-sm-12'>

                                <a href="">Login/Sign Up</a>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </nav>


        </div>


    )
}
export default Navbar;
