import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import image1 from '../../assets/signin.png';
import image2 from '../../assets/logo.jpeg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>

            <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <div class="container-fluid">
                    {/* <div className='nav-logo'><img src={image2} alt=""  className='logo'/></div> */}
                    <Link class="navbar-brand" to='/'><b>Digital Farmer</b></Link>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-links">
                            <li class="nav-item">
                                <a class="nav-link p-3" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link p-3" to='/sell'>Sellers</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link p-3" to='/buy'>Buyers</Link>
                            </li>
                        </ul>
                        <div class='row login'>
                            <div className=' col-lg-6 '>
                                <img src={image1} alt="" className='signin' />
                            </div>
                            <div className=' col-lg-6 col-sm-12'>

                                <button type="button" class="btn btn-primary">LogIn</button>    Or   <button type="button" class="btn btn-primary">Create Account</button>


                            </div>
                        </div>
                    </div>
                </div>
            </nav>


        </div>


    )
}
export default Navbar;
