import React from 'react'
import './Carousal.css'



import picture3 from '../../assets/news2.jpg'
import picture2 from '../../assets/news1.jpg'
import picture5 from '../../assets/news5.avif'
import picture6 from '../../assets/news4.jfif'






const Carousal = () => {
    return (
        <div className='Carousal-main'>
            <div className='carousel-heading'>
                <h1><u>News    Of    The    Day</u></h1>
            </div>
            <div id="carouselExampleInterval" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="4600">
                        <img src={picture5} class="d-block w-100 h-30 news1" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="3600">
                        <img src={picture2} class="d-block w-100  news2" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="3600">
                        <img src={picture3} class="d-block w-100 news3" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="3600">
                        <img src={picture6} class="d-block w-100 news4" alt="..." />
                    </div>
                </div>
                 <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button> 
                
            </div>
        </div>
    )
}

export default Carousal
