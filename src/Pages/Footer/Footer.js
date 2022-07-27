import React from 'react';
import './Footer.css'
import {
    Container,
    Row,
    Col,
  } from 'react-bootstrap';
const Footer = () => {
    return (
        <Container className="footer py-4" fluid={true}>
      <Row >
        <Col xl={12}>
        All rights reserve <strong>Md Razibul</strong>
        </Col>
      </Row>
    </Container>
    );
};

export default Footer;