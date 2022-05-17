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
                    <div className='col-lg-4 col-md-16 col-sm-12 mt-5'>

                        <div className='info-detail'></div>
                    </div>
                    <div className='col-lg-4 col-md-16 col-sm-12 mt-5'>

                        <div className='info-detail'></div>
                    </div>
                    <div className='col-lg-4 col-md-16 col-sm-12 mt-5'>

                        <div className='info-detail'></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Detail