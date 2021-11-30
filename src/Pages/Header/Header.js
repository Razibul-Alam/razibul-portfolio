import React from 'react';
import { Navbar,Container,Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Md Razibul</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link as={Link} to='/'>Home</Nav.Link>
      <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
      <Nav.Link as={Link} to='/blog'>Blogs</Nav.Link><Nav.Link as={Link} to='/about'>About</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;