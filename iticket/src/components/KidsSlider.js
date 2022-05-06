import React from 'react';

import Slider from 'react-slick/lib/slider';
import '../assets/sass/kidsslider.scss'

function SliderCard() {
   
    const cards = [
        {
            bgimg: "https://cdn.iticket.az/event/poster_bg/BTlzxK9BDAGN6c7aU3PavCgAiV485WD6QY4bCpS6.jpg",
            img: "https://cdn.iticket.az/event/poster/S2B19912lKPMAoivVwJjBZTw9Z3mcya3jJn8o4Un.png",
            price: "5",
            name: "Sagopa Kajmer",
            date: "10 iyun 2022",
            hall: "Elektra Events Hall"
        },
        {
            bgimg: "https://cdn.iticket.az/event/poster_bg/BTlzxK9BDAGN6c7aU3PavCgAiV485WD6QY4bCpS6.jpg",
            img: "https://cdn.iticket.az/event/poster/S2B19912lKPMAoivVwJjBZTw9Z3mcya3jJn8o4Un.png",
            price: "5",
            name: "Sagopa Kajmer",
            date: "10 iyun 2022",
            hall: "Elektra Events Hall"
        },
        {
            bgimg: "https://cdn.iticket.az/event/poster_bg/BTlzxK9BDAGN6c7aU3PavCgAiV485WD6QY4bCpS6.jpg",
            img: "https://cdn.iticket.az/event/poster/S2B19912lKPMAoivVwJjBZTw9Z3mcya3jJn8o4Un.png",
            price: "5",
            name: "Sagopa Kajmer",
            date: "10 iyun 2022",
            hall: "Elektra Events Hall"
        },
        {
            bgimg: "https://cdn.iticket.az/event/poster_bg/BTlzxK9BDAGN6c7aU3PavCgAiV485WD6QY4bCpS6.jpg",
            img: "https://cdn.iticket.az/event/poster/S2B19912lKPMAoivVwJjBZTw9Z3mcya3jJn8o4Un.png",
            price: "5",
            name: "Sagopa Kajmer",
            date: "10 iyun 2022",
            hall: "Elektra Events Hall"
        },
        {
            bgimg: "https://cdn.iticket.az/event/poster_bg/BTlzxK9BDAGN6c7aU3PavCgAiV485WD6QY4bCpS6.jpg",
            img: "https://cdn.iticket.az/event/poster/S2B19912lKPMAoivVwJjBZTw9Z3mcya3jJn8o4Un.png",
            price: "5",
            name: "Sagopa Kajmer",
            date: "10 iyun 2022",
            hall: "Elektra Events Hall"
        },

    ]
    var settings = {
        dots: true,
        infinite: true,
        arrows: true,
      
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: true,
        autoplay: true,
        cssEase: "linear",

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (

        <div className='container kids'>
        <div className="row mt-5">
            <h1 className='mt-5'>Uşaqlar</h1>


            <Slider {...settings}>
                {cards.map(card =>
                    <div>
                        <a href="/events/concerts/sagopa-kajmer" class="event-list-item tns-item" target="" aria-hidden="true" tabindex="-1">
                            <div class="relative h-full">
                                <div class="image">
                                    <img src={`${card.bgimg}`} data-src="https://cdn.iticket.az/event/poster_bg/BTlzxK9BDAGN6c7aU3PavCgAiV485WD6QY4bCpS6.jpg" alt="SAGOPA KAJMER" class="bg ls-is-cached lazyloaded" />
                                    <img src={`${card.img}`} data-src="https://cdn.iticket.az/event/poster/S2B19912lKPMAoivVwJjBZTw9Z3mcya3jJn8o4Un.png" alt="SAGOPA KAJMER" class=" ls-is-cached lazyloaded" />
                                    <span class="btn"><span class="price">{card.price} ₼</span>-dan</span>
                                </div>
                                <div class="info">
                                    <div class="event-name">
                                        {card.name}
                                    </div>
                                    <div class="flex w-full items-center flex-1">
                                        <div class="event-date">
                                            {card.date}
                                        </div>
                                        <span class="separator">
                                            •
                                        </span>
                                        <div class="venue-name">
                                            {card.hall}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                )}

            </Slider>
            
        </div>
    </div>




    )
}

export default SliderCard