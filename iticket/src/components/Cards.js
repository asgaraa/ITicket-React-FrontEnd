import React from 'react'
import '../assets/sass/cards.scss'

function Cards() {
    return (
        <div>
            {/* <a href={"kids/kid-s-master-class-cooking.html"} title="Uşaqlar üçün master-klas- Bişirmə" target="" className="event-list-item">
                <div className="relative">

                    <div className="image">
                       
                        <img src={require('../assets/img/mulat.jpg')} alt="Uşaqlar üçün master-klas- Bişirmə" className=" lazyloaded" />
                        <span className="btn">
                            <span className="price">15 ₼</span>
                        </span>

                        <div className="info">
                            <div className="event-name">
                                Uşaqlar üçün master-klas- Bişirmə
                            </div>
                            <div className="flex w-full items-center flex-1">
                                <div className="event-date">
                                    30 aprel 2022
                                </div> <span className="separator"> • </span>
                                <div className="venue-name">
                                    Free Children
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a> */}
            <div className='wrapper'>
                <div className='card'>
                    <img src={require('../assets/img/logoss.jpeg')} alt="" />
                    <div className='info'>
                        <h1>
                            mountain
                        </h1>
                        <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
                        <button>readmore</button>
                    </div>
                </div>
            </div>

         
        </div>
    )
}

export default Cards