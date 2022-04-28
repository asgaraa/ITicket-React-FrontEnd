import React from 'react'
import '../assets/sass/header.scss'
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'
function Header() {
    return (
        <div >
            <div className='container-xxl' >
       
            <Navbar  expand="lg">
  <Container fluid>
    <Navbar.Brand href="#"><img className='logo' src={require('../assets/img/logoiticket.png')} alt="logo" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <NavDropdown.Item  className='navo' href="#action1">Bütün Tədbirlər</NavDropdown.Item>
        <NavDropdown.Item className='navo' href="#action2">Konsertlər</NavDropdown.Item>
        <NavDropdown.Item className='navo' href="#action3">Tamaşalar</NavDropdown.Item>
          <NavDropdown.Item className='navo' href="#action4">Uşaqlar</NavDropdown.Item>
          <NavDropdown.Item className='navo' href="#action5">Muzeylər</NavDropdown.Item>
          <NavDropdown.Item className='navo' href="#action6">Uşaqlar</NavDropdown.Item>
      </Nav>
      <Nav.Link className='navo' href="#action7"><i class="far fa-heart"></i></Nav.Link>
          <Nav.Link className='navo' href="#action8"><i class="fas fa-search"></i></Nav.Link>
          <Nav.Link className='navo' href="#action9"><i class="fas fa-shopping-cart"></i></Nav.Link>
          <Nav.Link className='navo' href="#action10"><i class="fas fa-user-circle"></i></Nav.Link>
    </Navbar.Collapse>
  </Container>
</Navbar>
                {/* <div className='col-xs-12 d-flex'>
                <a href=""><img className='logo' src={require('../assets/img/logofinal.png')} alt="logo" /></a>
                    <ul>
                       
                        <li><a href="">Bütün Tədbirlər</a></li>
                        <li><a href="">Konsertlər</a></li>
                        <li><a href="">Tamaşalar</a></li>
                        <li><a href="">Uşaqlar</a></li>
                        <li><a href="">Muzeylər</a></li>
                        <li><a href="">Turizm</a></li>
                        <li><a href=""><i class="far fa-heart"></i></a></li>
                        <li><a href=""><i class="fas fa-search"></i></a></li>
                        <li><a href=""><i class="fas fa-shopping-cart"></i></a></li>
                        <li><a href=""><i class="fas fa-user-circle"></i></a></li>
                    </ul>




                </div> */}




            </div>
        </div>

    )
}

export default Header