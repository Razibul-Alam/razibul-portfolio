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
        <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Contact | Razibul</title>
                <link rel="canonical" href="/" />
                <meta name="description" content="Motasim Foad | Contact - Product Manager | Project Manager | Software Engineer" />
        </Helmet>
        {/* <Animate to="1" from="0" attributeName="opacity"> */}
          {/* <Particles
            params={particles}
            className="particle"
          /> */}
          <Container className="Contact-header className='mt-5'" fluid={true}>
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