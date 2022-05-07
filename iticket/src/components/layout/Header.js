import React from 'react'
import '../../assets/sass/header.scss'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
function Header() {
  return (
    <div >
      <div className='container-xxl' >

        <Navbar expand="lg">
          <Container fluid>
            <NavLink className="nav-link" to="/"><Navbar.Brand href="#"><img className='logo' src={require('../../assets/img/logoiticket.png')} alt="logo" /></Navbar.Brand></NavLink>

            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <NavLink className="nav-link" to="/allevents"><NavDropdown.Item className='navo' href="#action1">Bütün Tədbirlər</NavDropdown.Item></NavLink>
                <NavLink className="nav-link" to="/concerts"> <NavDropdown.Item className='navo' href="#action2">Konsertlər</NavDropdown.Item></NavLink>
                <NavLink className="nav-link" to="/theatre">  <NavDropdown.Item className='navo' href="#action3">Tamaşalar</NavDropdown.Item></NavLink>
                <NavLink className="nav-link" to="/kids">    <NavDropdown.Item className='navo' href="#action4">Uşaqlar</NavDropdown.Item></NavLink>
                <NavLink className="nav-link" to="/museums">   <NavDropdown.Item className='navo' href="#action5">Muzeylər</NavDropdown.Item></NavLink>
                <NavLink className="nav-link" to="/films">   <NavDropdown.Item className='navo' href="#action6">Filmlər</NavDropdown.Item></NavLink>
               
               
              
               
               
              </Nav>
              
            </Navbar.Collapse>
          </Container>
        </Navbar>





      </div>
    </div>

  )
}

export default Header