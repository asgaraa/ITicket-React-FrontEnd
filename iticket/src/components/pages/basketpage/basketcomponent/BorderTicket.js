import React from 'react'
import '../../../../assets/sass/basket/borderticket.scss'

function BorderTicket() {
    return (
        <div>
            <div className="col-lg-8 col-md-8 col-sm-12 war">
                <div>
                    <h2>Səbət</h2>
                </div>
                <div className='d-flex'>
                    <div>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <div>
                            <span>Azərsun Arena</span><span>21.05.2022</span><span>-19:30</span>
                        </div>
                    </div>
                    <div>
                        <button className='btn btn-primary'>5Azn</button>
                        <span className='delet'><i className="far fa-trash-alt"></i></span>
                    </div>
                </div>
            </div>
            <div className='col-lg-3 col-md-3 col-sm-12 war'>

            </div>

        </div>
    )
}

export default BorderTicket