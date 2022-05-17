import React from 'react'
import '../../assets/sass/details/detail.scss'

function Detail() {
    return (
        <div>
            <div className='event-image'>
                {/* <img className='imag' src="https://cdn.iticket.az/event/cover/XHVymjWZKrh7pMeNgCy7cqmukHya71ubiNkMhOeD.jpg" alt="" /> */}
                <img className='imag' src="https://cdn.iticket.az/event/cover/UkA52Bk9qk1pjNbfi8w5TiLVkpvHtAke4uCIcdpW.jpg" alt="" />
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-md-6 col-sm-12 mt-5'>

                        <div className='info-detail'>
                            <span className='icon-info'><i className="fas fa-calendar-alt ico"></i></span>
                            <div className='inf'>
                                <div className='title'>
                                    <b>Event Date</b>
                                </div>
                                <div className='text'>
                                    <p>19.05.2022</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12 mt-5'>

                        <div className='info-detail'>
                            <span className='icon-info'><i className="far fa-clock ico"></i></span>
                            <div className='inf'>
                                <div className='title'>
                                    <b>Event Time</b>
                                </div>
                                <div className='text'>
                                    <p>20:00 - 21:30</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12 mt-5'>

                        <div className='info-detail'>
                            <span className='icon-info'><i className="fas fa-map-marker-alt ico"></i></span>
                            <div className='inf'>
                                <div className='title'>
                                    <b>Venue</b>
                                </div>
                                <div className='text'>
                                    <p>Heydar Aliyev Palace</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='col-lg-12 col-md-12 col-sm-12'>
                        <div>
                            <div class="movie-container">
                                <label>
                                    Pick A Movie:
                                </label>
                                <select id="movie">
                                    <option value="10">Matrix ($10)</option>
                                    <option value="25">Avengers ($25)</option>
                                    <option value="16">Joker ($16)</option>
                                    <option value="9">Lion King ($9)</option>
                                </select>
                            </div>

                            <ul class="showcase">
                                <li>
                                    <div class="seat"></div>
                                    <small>N/A</small>
                                </li>
                                <li>
                                    <div class="seat occupied"></div>
                                    <small>Occupied</small>
                                </li>
                                <li>
                                    <div class="seat selected"></div>
                                    <small>Selected</small>
                                </li>
                            </ul>

                            <div class="container">
                                <div class="screen"></div>

                                <div class="row">
                                    <div class="seat"></div>
                                    <div class="seat"></div>
                                    <div class="seat"></div>
                                    <div class="seat occupied"></div>
                                    <div class="seat occupied"></div>
                                    <div class="seat"></div>
                                    <div class="seat"></div>
                                    <div class="seat"></div>
                                </div>
                                <div class="row">
                                    <div class="seat"></div>
                                    <div class="seat occupied"></div>
                                    <div class="seat occupied"></div>
                                    <div class="seat"></div>
                                    <div class="seat"></div>
                                    <div class="seat"></div>
                                    <div class="seat"></div>
                                    <div class="seat"></div>
                                </div>
                                <div class="row">
                                    <div class="seat occupied"></div>
                                    <div class="seat"></div>
                                    <div class="seat"></div>
                                    <div class="seat"></div>
                                    <div class="seat"></div>
                                    <div class="seat"></div>
                                    <div class="seat occupied"></div>
                                    <div class="seat occupied"></div>
                                </div>
                                <div class="row">
                                    <div class="seat"></div>
                                    <div class="seat"></div>
                                    <div class="seat"></div>
                                    <div class="seat occupied"></div>
                                    <div class="seat"></div>
                                    <div class="seat"></div>
                                    <div class="seat occupied"></div>
                                    <div class="seat"></div>
                                </div>
                                <div class="row">
                                    <div class="seat"></div>
                                    <div class="seat"></div>
                                    <div class="seat"></div>
                                    <div class="seat"></div>
                                    <div class="seat"></div>
                                    <div class="seat occupied"></div>
                                    <div class="seat occupied"></div>
                                    <div class="seat occupied"></div>
                                </div>
                            </div>
                            <p class="text">You have selected <span id="count">0</span>
                                seats for a price of $<span id="total">0</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Detail