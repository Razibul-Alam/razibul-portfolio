import React from 'react';
import './ContactText.css';
import {Row, Col} from 'react-bootstrap';
import SocialIcon from '../Social-Icon/SocialIcon';
// import SocialIcons from '../social_icons';

const ContactText = () => {
    return (
        <div>
           <Row className="Contact-text">
              <Col xl={12}>
              <h1 className="p-heading1">Get In Touch</h1>
              <p className="p-heading2">
              Hello <strong>Visitor !!</strong><br />
              Thank you for visiting in. If you have any queries/ideas/projects, feel free to <strong>PING</strong> me.
              I am always open for discussion. You can contact me via the Contact Form <strong>OR</strong> simply click on the social
              media icon if you are more comfortable there.
              </p>
              </Col>
           </Row>
          
            <Row className="contact-left-footer" >
              <SocialIcon/>
            </Row>
    </div>
    );
};

export default ContactText;