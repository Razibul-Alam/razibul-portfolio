import React from 'react';
import { Navbar,Container,Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Header.css'

const Header = () => {
    return (
      <Container fluid>
        <Navbar className='custom-nav py-3' collapseOnSelect expand="lg" bg="transperent" variant="">
  <Container>
  <Navbar.Brand href="#home">Md Razibul</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <HashLink to='#home'>HOME</HashLink>
      <HashLink className='ms-3'  to='#about'>ABOUT</HashLink>
      <HashLink className='ms-3' to='#service'>SERVICE</HashLink>
      <HashLink className='ms-3' to='#portfolio'>PORTFOLIO</HashLink>
      <HashLink className='ms-3'  to='#blog'>BLOGS</HashLink>
      <HashLink className='ms-3' to='#contact'>CONTACT</HashLink>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</Container>
    );
};

export default Header;