import React from 'react'
import '../../../assets/sass/basket/basket.scss'
import BorderTicket from './basketcomponent/BorderTicket'
// import NotTicket from './basketcomponent/NotTicket'

function Basket() {
    return (
        <div className='container'>
            <div className="row mt-5">
            {/* <NotTicket/> */}
            <BorderTicket />
              
            </div>
        </div>
    )
}

export default Basket