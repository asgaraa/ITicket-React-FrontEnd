import React from 'react'
import '../../assets/sass/header.scss'
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "350px",
  height: "500px",
  bgcolor: 'background.paper',
  border: 'px solid #000',
  boxShadow: 24,
  p: 4,
};

function Header() {



  const [searchOpen, setSearchOpen] = React.useState(false);
  const handleSearchOpen = () => setSearchOpen(true);
  const handleSearchClose = () => setSearchOpen(false);

  const [loginOpen, setLoginOpen] = React.useState(false);
  const handleLoginOpen = () => setLoginOpen(true);
  const [registerOpen, setRegisterOpen] = React.useState(false);
  const handleRegisterOpen = () => setRegisterOpen(true);
  const handleLoginClose = () => setLoginOpen(false);
  const handleRegisterClose = () => setRegisterOpen(false);


  return (
    <div >
      <div className='container-xxl' >

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
                <NavLink style={{ textDecoration: 'none', fontSize: '25px' }} className="nav-link navba" to="/allevents">Bütün Tədbirlər</NavLink>
                <NavLink style={{ textDecoration: 'none', fontSize: '25px' }} className="nav-link navba" to="/concerts">Konsertlər</NavLink>
                <NavLink style={{ textDecoration: 'none', fontSize: '25px' }} className="nav-link navba" to="/theatre"> Tamaşalar</NavLink>
                <NavLink style={{ textDecoration: 'none', fontSize: '25px' }} className="nav-link navba" to="/kids">Uşaqlar</NavLink>
                <NavLink style={{ textDecoration: 'none', fontSize: '25px' }} className="nav-link navba" to="/museums">Muzeylər</NavLink>
                <NavLink style={{ textDecoration: 'none', fontSize: '25px' }} className="nav-link navba" to="/films">Filmlər</NavLink>
              </Nav>
              <div className="basket d-flex justify-content-end">
                <NavLink style={{ textDecoration: 'none', fontSize: '25px' }} className="nav-link navba" to="/films"><i className="far fa-heart"></i></NavLink>
                <NavLink style={{ textDecoration: 'none', fontSize: '25px' }} className="nav-link navba" to="/films" onClick={handleSearchOpen}><i className="fas fa-search"></i></NavLink>
                <NavLink style={{ textDecoration: 'none', fontSize: '25px' }} className="nav-link navba" to="/films"><i className="fas fa-shopping-basket"></i> <span>0</span></NavLink>
                <NavLink style={{ textDecoration: 'none', fontSize: '25px' }} className="nav-link navba" to="/" onClick={handleLoginOpen}> <i className="far fa-user-circle"></i> </NavLink>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div>
          {/* Search Modal */}
          <Modal
            open={searchOpen}
            onClose={handleSearchClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Search
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
            <Box sx={style}>
              <div className='modal-size'>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  <span className='yellow'></span>
                  Login
                </Typography>
                <Typography component='span' id="modal-modal-body" sx={{ mt: 2 }}>
                  <Form>
                    <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">

                      <Form.Control type="email" placeholder="Enter email" />

                    </Form.Group>
                    <Form.Group className="mb-3 mt-5" controlId="formBasicPassword">

                      <Form.Control outline="yellow" type="password" placeholder="Password" />
                    </Form.Group>
                    <Button className="warning login" size="sm" type="submit"> Daxil Ol</Button>{' '}

                  </Form>
                  <p className='mt-5'>İTicket'də yenisiz?</p>
                  <Button className='regist' onClick={handleRegisterOpen}>Qeydiyyatdan Keçin</Button>
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
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal>
        </Container>



      </div>
    </div>

  )
}

export default Header