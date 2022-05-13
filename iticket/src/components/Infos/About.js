import React from 'react'
import '../../assets/sass/infos/about.scss'

function About() {
  return (
    <div>
      <h2 className='mt-5'>Haqqımızda</h2>
      <div className='about mt-5'>

        <div className='about-title'>
          <img src={require('../../assets/img/info/about-title.png')} alt="about-title" />
        </div>
        <div className='image mt-4'>
          <img className='about-photo' src={require('../../assets/img/info/theatre.jpg')} alt="about-title" />
        </div>
        <div className='mt-4 d-flex'>
          <p className='abouttext'>
            <b>ITicket.az</b>- 2016-cı ildən etibarən öz fəaliyyətinə başlamışdır. iTicket.az həm onlayn həm də offlayn olaraq konsertlərə, teatrlara, idman və əyləncə tədbirlərinə bilet satışını reallaşdırır. Bakı şəhərində 20-yə yaxın satış nöqtəsi iTicket.az idarəçiliyi altında fəaliyyət göstərir. iTicket.az IV İslam Həmrəyliyi Oyunları, 2017, 2018 və 2019 Formula 1 Azərbaycan Qran-Pri yarışları, 2017 Voleybol üzrə qadınlararası Avropa Çempionatı, UEFA Çempionlar Liqasının qrup mərhələsi, Bakıda velosiped idmanının “BMX Racing” növü üzrə 2018-ci il dünya çempionatı, ЖАРА'18 və 19 musiqi festivalı və AFFA kimi tədbirlərin rəsmi əməkdaşı və bilet satışı üzrə təchizatçısıdır. iTicket.az bilet alışı prosessinin daha səmərəli və rahat etmək üçün öz məhsul və xidmətlərini təkmilləşdirmək üçün çalışır.
          </p>
         
        </div>
      </div>
    </div>


  )
}

export default About