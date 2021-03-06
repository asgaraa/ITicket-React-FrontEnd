import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'

import '../../../../assets/sass/profile/updatepassword.scss'

function UpdatePassword() {
  return (
    <div className='row justify-content-between container'>
      <div className='col-lg-8 col-md-9 col-sm-12  mt-4'>
        <h2 className='mt-5'>Şifrəni Yenilə</h2>
        <div className='passwords mt-5'>
          <Form>
            <div className='mt-4 updatepassw'>
              <Form.Group className="mb-3" controlId="formBasicOldPassword">
                <Form.Label className='labtext'>Cari Şifrə</Form.Label>
                <Form.Control type="password" placeholder="" />

              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='labtext'>Yeni Şifrə</Form.Label>
                <Form.Control type="password" placeholder="" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label className='labtext'>Yeni Şifrəni Təsdiqlə </Form.Label>
                <Form.Control type="password" placeholder="" />
              </Form.Group>


            </div>
            <div className='mt-4 '>
              <div className='passbut'>
                <Button className='passbutton' type="submit">
                  Dəyişiklikləri Yadda Saxla
                </Button>
              </div>

            </div>
          </Form>








        </div>
      </div>
      <div className='col-lg-3 col-md-6 col-sm-12 mt-4 UpdatePasssidebar'>
        <ul>
          <li className='p-2' >
            <Link to={"/profile"}  >Profil</Link>
          </li>
          <li className='p-2' >
            <Link to={"/myorders"} >Mənim Sifarişlərim</Link>
          </li>
          <li className='p-2' style={{ backgroundColor: 'black', borderRadius: '20px' }}>
            <Link to={"/updatepass"} style={{ color: 'white' }}>Şifrəni Yenilə</Link>
          </li>
          <li className='p-2'>
            <Link to={"/logout"}>Çıxış</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default UpdatePassword