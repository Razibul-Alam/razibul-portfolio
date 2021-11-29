import React from 'react';
import { Container,Button,Col,Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomeBanner.css'
import ReactTypingEffect from 'react-typing-effect';

const HomeBannerLeft = () => {
    return (
        <Container className="home-left" >
        <Row className="home-left-main">
           <Col xl={12} className="home-left-main-col">
             <h1 className="first-line">
               Hello! 
             </h1>
             <h2 className="second_line">
               I am <strong>Md Razibul</strong>
             </h2>
             <h3>
             <ReactTypingEffect
               text="React-developer || Junior-fullstack-developer ... "
               className="typical"
               speed="100"
               eraseDelay="2000"
               />
             </h3>
              
               <br />
               <Button variant="outline-light" size="lg" className="home-left-aboutmme-btn"><Link to="/" style={{ textDecoration: 'none', color: 'white' }} className="home-left-aboutme">About Me</Link></Button> &nbsp;
               <Button variant="outline-light" size="lg" className="home-left-aboutmme-btn"><a style={{ textDecoration: 'none', color: 'white' }} href="https://drive.google.com/file/d/1NP-3YCLaxZaV5eNOVAEsH_k8KglsoIFL/view?ts=61a2f133" target="_blank" className="home-left-aboutme">Resume</a></Button> &nbsp;
               <Button variant="outline-light" size="lg" className="home-left-aboutmme-btn"><Link style={{ textDecoration: 'none', color: 'white' }} to="/contact" className="home-left-aboutme">Contact Me</Link></Button> 
             </Col>
         </Row>
       </Container>
    );
};

export default HomeBannerLeft;