import React from 'react';
import './Contact.css'
import Footer from './../Footer/Footer';
import { Row,Col,Container,Button } from 'react-bootstrap';
import { EmailSender } from './EmailSender';
import ContactText from './ContactText';
import ScrollToTop from "react-scroll-to-top";


const ContactMain = () => {
  
    return (
      <>
       <div>
      <ScrollToTop smooth top={300} />
    </div>
        <div id='contact'>
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
      </div>
      </>
    );
};

export default ContactMain;