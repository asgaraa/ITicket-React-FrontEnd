import React from 'react';

import '../assets/sass/concertsslider.scss'

function SliderCard() {


    return (

        <div class="mt-5">
            <h1>Filmlər</h1>
            <a className="event-list-item tns-item tns-slide-active" id="tns24-item0" href="/">
                <div className='relative h-full'>
                        <div className="image">
                            <img src={require('../assets/img/asgar.png')} alt="event" />
                        </div>
                        <div className='info'>
                            <div className="event-name">fashion baku festival</div>
                            <div className="flex w-full items-center flex-1">
                                <div className="event-date">07 aprel 2022</div>
                                <span class="separator">•</span>
                                <div class="venue-name">baku electro hall</div>
                            </div>
                        </div>


                </div>
            </a>



        </div>



    )
}

export default SliderCard