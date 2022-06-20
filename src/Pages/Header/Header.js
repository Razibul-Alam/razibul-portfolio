import React from 'react';
import { Navbar,Container,Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Header.css'

const Header = () => {
    return (
        <Navbar className='custom-nav' collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Md Razibul</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link as={Link} className='navCustom' to='/'>Home</Nav.Link>
      <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
      <Nav.Link as={Link} to='/blog'>Blogs</Nav.Link><Nav.Link as={Link} to='/about'>About</Nav.Link>
      <Nav.Link as={Link} to='/blog'>Blogs</Nav.Link>
      {/* <Nav.Link as={Link} to='/about'>About</Nav.Link> */}
      {/* <HashLink smooth to={'/home#about'}>About</HashLink> */}
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;