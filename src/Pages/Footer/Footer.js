import React from 'react';
import './Footer.css'
import {
    Container,
    Row,
    Col,
  } from 'react-bootstrap';
const Footer = () => {
    return (
        <Container className="footer" fluid={true}>
      <Row >
        <Col xl={12}>
        Copyright © 2021-{(new Date().getFullYear())} <strong>Md Razibul</strong>
        </Col>
      </Row>
    </Container>
    );
};

export default Footer;