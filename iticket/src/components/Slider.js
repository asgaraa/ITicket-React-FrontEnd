import React from 'react';
import '../assets/sass/slider.scss'

function Slider() {
    return (
        <div className='slide'>

            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src={require('../assets/img/slider/Slider1.jpeg')} alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={require('../assets/img/slider/Slider2.jpeg')} alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={require('../assets/img/slider/Slider3.jpeg')} alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev lefticon" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>

                </a>
                <a className="carousel-control-next righticon" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </a>
            </div>
        </div>
    )
}

export default Slider