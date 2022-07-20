import React from 'react';
import './Contact.css'
import Footer from './../Footer/Footer';
import { Row,Col,Container } from 'react-bootstrap';
import { EmailSender } from './EmailSender';
import ContactText from './ContactText';
// import { Animate } from 'react-smooth';
import { Helmet } from 'react-helmet';

const ContactMain = () => {
    return (
        <div id='contact'>
        {/* <Animate to="1" from="0" attributeName="opacity"> */}
          {/* <Particles
            params={particles}
            className="particle"
          /> */}
          <Container className="Contact-header" fluid={true}>
            <Row className="Contact-main">
            <Col  xl={6}  className="Contact-left">
            <ContactText />
            </Col>
            <Col  xl={6}  className="Contact-right">
           <EmailSender />
            </Col>
            </Row>
            <Row className="Contact-footer">
              <Footer />
            </Row>
          </Container>
       {/* </Animate> */}
      </div>
    );
};

export default ContactMain;