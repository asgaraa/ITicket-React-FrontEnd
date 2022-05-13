import React from 'react'
import '../../assets/sass/infos/eticket.scss'

function ETicket() {
  return (
    <div>
      <h2 className='mt-5'>Elektron Bilet</h2>
      <div className='eticket mt-5'>
        <div>
          <p className='etickettext'>Bu xidmət növündən istifadə etməklə, siz vaxtınıza qənaət edə və biletlərin alınma prosessini maksimum rahat və sadə şəkildə həyata keçirə bilərsiniz.</p>
        </div>
        <div>
          <h5 className='etickettext'>Bu xidmət növü nəyə görə rahatdır?</h5>
          <p className='etickettext'>Elektron bilet istifadəçinin şəxsi kabinetində elektron şəkildə saxlanılır və bu o deməkdir ki, siz onu unuda yaxud itirə bilməzsiniz. Elektron biletin oğurlanması mümkün deyil. Dünyanın istənilən yerində sadəcə internetə daxil olmaqla, elektron bileti əldə edə bilərsiniz. Vaxta qənaət: kassaya getmək, kuryer xidmətlərindən istifadə etmək, biletin çatdırılmasını gözləməyə ehtiyac yoxdur.</p>
        </div>
        <div>
          <h5 className='etickettext'>Elektron bileti necə sifariş etmək olar?</h5>
          <p className='etickettext'>Biletin ödənişini istənilən bank kartı vasitəsi ilə həyata keçirə bilərsiniz. Onlayn ödənişdən sonra biletiniz avtomatik olaraq, qeydiyyat zamanı istifadə etdiyiniz elektron ünvanınıza göndəriləcək. Bundan əlavə, siz “Mənim sifarişlərim” bölməsinə daxil olub bileti çap edə bilərsiniz.</p>
        </div>

        <div>
          <h5 className='etickettext'>Elektron bileti necə dəyişmək və ya qaytarmaq olar?</h5>
          <p className='etickettext'>Elektron biletin qaytarılması və ya dəyişdirilməsi həm onlayn, həm də 28 Mall və Gənclik Mall ticarət mərkəzlərində yerləşən satış məntəqəsində “Biletin qaytarılması və dəyişdirilməsi” bölümündə qeyd olunan qaydalara əsasən geri qaytarıla bilər.</p>
        </div>


      </div>
    </div>
  )
}

export default ETicket