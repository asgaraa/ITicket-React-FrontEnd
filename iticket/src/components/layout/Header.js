import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Swal from 'sweetalert2';
import '../../assets/sass/layout/header.scss';
import {useSelector} from 'react-redux'






const style = {
  search: {
    position: 'absolute',
    top: '10%',

    // transform: 'translate(-50%, -50%)',
    width: "100%",
    height: "60px",
    bgcolor: 'background.paper',
    borderradius: '20px',
    boxShadow: 24,
    p: 4,
  },
  login: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "350px",
    height: "500px",
    bgcolor: 'background.paper',
    borderradius: '20px',
    boxShadow: 24,
    p: 4,
  },

  forgotstyle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "350px",
    height: "270px",
    bgcolor: 'background.paper',
    border: 'px solid #000',
    boxShadow: 24,
    p: 4,
  },
  registerstyle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "350px",
    height: "560px",
    bgcolor: 'background.paper',
    border: 'px solid #000',
    boxShadow: 24,
    p: 4,
  },
}




function Header() {
  //Prop for api start
  const [fullname, setFullname] = useState();
  const [username, setUsername] = useState();
  const [number, setNumber] = useState();
  const [mail, setMail] = useState();
  const [password, setPassword] = useState();
  //Prop for Api End
  const [email, setEmail] = useState();
  const [logpassword, setLogpassword] = useState();
  const [searchdata, setSearchdata] = useState([]);
  const [forgotmail, setForgotmail] = useState();

  async function register(e) {
    e.preventDefault();
    await axios.post('/api/account/register', {
      Email: mail,
      Password: password,
      FullName: fullname,
      UserName: username,
      PhoneNumber: number,
    }, { 'Content-Type': 'multipart/form-data' })
      .then(function (response) {
        setRegisterOpen(false)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Z??hm??t olmasa emailinizi yoxlay??n',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch(function (error) {


      });
  }

  async function login(e) {
    e.preventDefault();
    await axios.post(`/api/Account/Login`, {
      Email: email,
      Password: logpassword
    }, { 'Content-Type': 'multipart/form-data' })
      .then(function (response) {
        localStorage.setItem("token", response.data);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Ugurla giris etdiz',
          showConfirmButton: false,
          timer: 1500
        })
        setLoginOpen(false)
      })
      .catch(function (error) {
      })
  }

  async function search(e) {
    if (e.target.value == null) {
      e.target.value = ""
    }
    await axios.get(`/api/Event/GetAllByName/${e.target.value}`, {

    }, { 'Content-Type': 'multipart/form-data' })
      .then(function (response) {
        setSearchdata(response.data)
        console.log(searchdata);
      })
      .catch(function (error) {
      })
  }

  async function resetpassword(e) {
    e.preventDefault();
    await axios.post('/api/Account/ForgotPassword', {
      Email: forgotmail,

    }, { 'Content-Type': 'multipart/form-data' })
      .then(function (response) {
        setRegisterOpen(false)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Z??hm??t olmasa emailinizi yoxlay??n',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch(function (error) {


      });
  }


  const [searchOpen, setSearchOpen] = React.useState(false);
  const handleSearchOpen = () => {
    setSearchdata([])
    setSearchOpen(true);
  };
  const handleSearchClose = () => setSearchOpen(false);

  const [forgotOpen, setForgotOpen] = React.useState(false);
  const handleForgotOpen = () => {
    setForgotOpen(true)
    setLoginOpen(false)
  }

  const handleForgotClose = () => setForgotOpen(false);
  const [loginOpen, setLoginOpen] = React.useState(false);
  const handleLoginOpen = () => {
    setLoginOpen(true)
  setRegisterOpen(false)
  setForgotOpen(false)
  };
  const [registerOpen, setRegisterOpen] = React.useState(false);
  const handleRegisterOpen = () => {
    setRegisterOpen(true)
    setLoginOpen(false)
  }
  const handleLoginClose = () => setLoginOpen(false);
  const handleRegisterClose = () => setRegisterOpen(false);
  function closeSearch() {
    setSearchOpen(false)
    setSearchdata([])
  }
  const [basketnum, setBasketnum] = useState(0);

  useEffect(() => {
    //BasketResult();

  })


  // function BasketResult() {
  //   let count = 0;

  //   let sead = JSON.parse(localStorage.getItem('seats'))


  //   if (sead === null) {


  //     setBasketnum(count)

  //   }
  //   else {

  //     for (let i = 0; i <= sead.seats.length; i++) {

  //       count++

  //     }
  //     setBasketnum(count-1)
      

  //   }


  // }

  const data = useSelector(state=> state.state.localCount);
  console.log(data)

  return (
    <div >
      <div className='' >
        <Navbar expand="lg">
          <Container fluid>
            <NavLink className="nav-link navba" to="/"><img className='logo' src={require('../../assets/img/logoiticket.png')} alt="logo" /></NavLink>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <NavLink style={{ textDecoration: 'none', fontSize: '25px' }} className="nav-link px-3 navba" to="/allevents">T??dbirl??r</NavLink>
                <NavLink style={{ textDecoration: 'none', fontSize: '25px' }} className="nav-link px-3 navba" to="/concerts">Konsertl??r</NavLink>
                <NavLink style={{ textDecoration: 'none', fontSize: '25px' }} className="nav-link px-3 navba" to="/theatre"> Tama??alar</NavLink>
                <NavLink style={{ textDecoration: 'none', fontSize: '25px' }} className="nav-link px-3 navba" to="/kids">U??aqlar</NavLink>
                <NavLink style={{ textDecoration: 'none', fontSize: '25px' }} className="nav-link px-3 navba" to="/museums">Muzeyl??r</NavLink>
                <NavLink style={{ textDecoration: 'none', fontSize: '25px' }} className="nav-link px-3 navba" to="/films">Filml??r</NavLink>
                <NavLink style={{ textDecoration: 'none', fontSize: '25px' }} className="nav-link px-3 navba" to="/tourism">Turizm</NavLink>
              </Nav>
              <div className="basket d-flex justify-content-end">
                <NavLink style={{ textDecoration: 'none', fontSize: '25px' }} className="nav-link navba" to="/favorites"><i className="far fa-heart"></i></NavLink>
                <NavLink style={{ textDecoration: 'none', fontSize: '25px' }} className="nav-link navba" to="/" onClick={handleSearchOpen}><i className="fas fa-search"></i></NavLink>
                <NavLink style={{ textDecoration: 'none', fontSize: '25px' }} className="nav-link navba" to="/basket"><i className="fas fa-shopping-basket"></i> <span>{data}</span></NavLink>
                <NavLink style={{ textDecoration: 'none', fontSize: '25px' }} className="nav-link navba" to="/" onClick={handleLoginOpen}> <i className="far fa-user-circle"></i> </NavLink>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className='col-12'>
          {/* Search Modal */}
          <Modal
            open={searchOpen}
            onClose={handleSearchClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style.search} style={{ backgroundColor: 'white' }}>
              <Typography id="modal-modal-title" variant="h6" >
                <input type="text" className='searchbar' onChange={(e) => search(e)} />
                {searchdata.map(search => (
                  <table className='tabe'>
                    <tr className='tre'>
                      <Link to={`/detail/${search.id}`} className='linko' onClick={() => closeSearch()}>
                        <td className='tabde' >
                          {search.name}
                        </td>
                      </Link>
                    </tr>
                  </table>
                )
                )}
              </Typography>
            </Box>

          </Modal>
        </div>
        <Container>
          {/* Login Modal */}
          <Modal
            open={loginOpen}
            onClose={handleLoginClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style.login} className='overflow-hidden'>
              <div className='modal-size'>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  <span className='yellow'></span>
                  Login
                </Typography>
                <Typography component='span' id="modal-modal-body" sx={{ mt: 2 }}>
                  <Form onSubmit={(e) => login(e)}>
                    <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
                      <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3 mt-3" controlId="formBasicPassword">
                      <Form.Control outline="yellow" type="password" onChange={(e) => setLogpassword(e.target.value)} placeholder="Password" />
                    </Form.Group>
                    <Button className='login' onClick={handleForgotOpen}>Unutmusunuz?</Button>
                    <Button className="warning login mt-3" size="sm" type="submit"> Daxil Ol</Button>{' '}
                  </Form>
                  <p className='mt-5'>??Ticket'd?? yenisiz?</p>
                  <Button className='regist' onClick={handleRegisterOpen}>Qeydiyyatdan Ke??in</Button>
                </Typography>
              </div>
            </Box>
          </Modal>
          {/* Forgot Pass Modal */}
          <Modal
            open={forgotOpen}
            onClose={handleForgotClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >

            <Box sx={style.forgotstyle} className='overflow-hidden'>

              <div className='modal-size'>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  <span className='yellow'></span>
                  ??ifr??ni S??f??rla
                </Typography>
                <Typography component='span' id="modal-modal-description" sx={{ mt: 2 }}>
                  <Form onSubmit={(e) => resetpassword(e)}>
                    <Form.Group className="mb-3 mt-5" controlId="formBasicForgotEmail">

                      <Form.Control type="email" onChange={(e) => setForgotmail(e.target.value)} placeholder="Enter email" />

                    </Form.Group>

                    <Button className="warning login" size="sm" type="submit"> S??f??rla</Button>{' '}
                    <Button className='regist' onClick={handleLoginOpen}>Geriy??</Button>

                  </Form>
                </Typography>
              </div>

            </Box>
          </Modal>
          {/* Register Modal */}
          <Modal
            open={registerOpen}
            onClose={handleRegisterClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style.registerstyle} className='overflow-hidden'>
              <div className='modal-size'>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  <span className='yellow'></span>
                  Register
                </Typography>
                <Typography component='span' id="modal-modal-body" sx={{ mt: 2 }}>
                  <Form onSubmit={(e) => register(e)}>

                    <Form.Group className="mb-3 mt-4" controlId="formBasicName">
                      <Form.Control type="text" onChange={(e) => setFullname(e.target.value)} placeholder="Ad / Soyad" />
                    </Form.Group>

                    <Form.Group className="mb-3 mt-4" controlId="formBasicSurname">
                      <Form.Control type="text" placeholder="??stifad????i Ad??" onChange={(e) => setUsername(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3 mt-4" controlId="formBasicMobilr">
                      <Form.Control type="string" placeholder="Mobile" onChange={(e) => setNumber(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3 mt-4" controlId="formBasicRegistEmail">
                      <Form.Control type="email" placeholder="Enter email" onChange={(e) => setMail(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3 mt-4" controlId="formBasicPassword">
                      <Form.Control outline="yellow" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Button className="warning regist mt-4" size="sm" type="submit"> Qeydiyyat</Button>
                    <Button className='regist' onClick={handleLoginOpen}>Geriy??</Button>
                  </Form>
                </Typography>
              </div>
            </Box>
          </Modal>
        </Container>
      </div>
    </div>

  )
}

export default Header