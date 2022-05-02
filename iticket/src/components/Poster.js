import React from 'react'
import '../assets/sass/poster.scss'

function Poster() {
    return (
        <div className='mt-5'>
            <div class="content-container mt-5" >
                <div class="app-block"><div class="content">
                    <div class="title">NÖVBƏTİ VİZUAL SƏYAHƏTİNİZİ TAPIN</div>
                    <div class="text">
                        iTicket.AZ tətbiqi bütün növ tədbirlərə (teatr, idman, konsertlər, sərgilər və s.) biletləri əldə etməyi asan və sürətli edir.
                    </div>
                    <div class="links">
                        <a href="https://play.google.com/store/apps/details?id=az.iticket.iticket">
                            <img alt='' src={require('../assets/img/android.png')} srcset="images/android@2x.png 2x" /></a>
                        <span></span>
                        <a href="https://apps.apple.com/az/app/iticket-az/id1456260325">
                            <img alt='' src={require('../assets/img/ios.png')} srcset="images/ios@2x.png 2x" /></a>
                    </div>
                </div>
                    <div className="hidden lg:block lg:absolute lg:top-0 lg:left-0 lg:right-0 lg:bottom-0 lg:overflow-hidden lg:rounded-2xl">
                        <div className="download-text">
                            İNDİ YÜKLƏ İNDİ YÜKLƏ İNDİ YÜKLƏ İNDİ YÜKLƏ İNDİ YÜKLƏ
                        </div>
                    </div>
                    <img alt='' src={require('../assets/img/app.png')} srcset="images/app@2x.png 2x" class="hidden lg:block app-photo" />
                </div>
            </div>
        </div>

    )
}

export default Poster