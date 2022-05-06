import React from 'react'
import '../assets/sass/poster.scss'

function Poster() {
    return (
        <div className='poster'>
            <div class="content-container mt-5" >
                <div className="app-block"><div className="content">
                    <div className="title">NÖVBƏTİ VİZUAL SƏYAHƏTİNİZİ TAPIN</div>
                    <div className="text">
                        iTicket.AZ tətbiqi bütün növ tədbirlərə (teatr, idman, konsertlər, sərgilər və s.) biletləri əldə etməyi asan və sürətli edir.
                    </div>
                    <div className="links">
                        <a href="https://play.google.com/store/apps/details?id=az.iticket.iticket">
                            <img alt='' src={require('../assets/img/android.png')} srcset="images/android@2x.png 2x" /></a>
                        <span></span>
                        <a href="https://apps.apple.com/az/app/iticket-az/id1456260325">
                            <img alt='' src={require('../assets/img/ios.png')} srcset="images/ios@2x.png 2x" /></a>
                    </div>
                    <div className='logo'>
                        <a href="https://apps.apple.com/az/app/iticket-az/id1456260325">
                            <img alt='' src={require('../assets/img/logoiticket.png')} srcset="images/ios@2x.png 2x" /></a>
                    </div>
                </div>
                    <div className="hidden  d-none d-lg-block lg:block lg:absolute lg:top-0 lg:left-0 lg:right-0 lg:bottom-0 lg:overflow-hidden lg:rounded-2xl">
                        <div className="download-text">
                            İNDİ YÜKLƏ İNDİ YÜKLƏ İNDİ YÜKLƏ İNDİ YÜKLƏ İNDİ YÜKLƏ
                        </div>
                    </div>
                    <img alt='' src={require('../assets/img/app.png')} srcset="images/app@2x.png 2x" className="hidden lg:block app-photo d-none d-lg-block" />
                </div>
            </div>
        </div>

    )
}

export default Poster