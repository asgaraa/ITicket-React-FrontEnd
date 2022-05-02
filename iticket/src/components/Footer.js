import React from 'react'
import '../assets/sass/footer.scss'

function Footer() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-4 mt-5'>
              <div className='mt-3'> 
              <img src={require('../assets/img/logoiticket.png')} alt="" />
              </div>
              <div>
                <p>Dəstək Xidməti</p>
                <h3><a  href="/">+994514555007</a></h3>
              </div>
               
            </div>
        </div>
    </div>
  )
}

export default Footer