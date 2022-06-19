import React from 'react';
import { Container,Button,Col,Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomeBanner.css'
import ReactTypingEffect from 'react-typing-effect';
import Particles from "react-tsparticles";
import particles from './ParticleItem';
const HomeBannerLeft = () => {
    return (
        <Container className="home-left" >
         
        <Row className="home-left-main">
        {/* <Particles
            params={particles}
            className="particle"
            /> */}
           <Col xl={12} className="home-left-main-col">
             <h3 className="mt-4">
               Hello! 
             </h3>
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
               <Button variant="outline-light" size="lg" className="home-left-aboutmme-btn"><Link to="/projects" style={{ textDecoration: 'none', color: 'white' }} className="home-left-aboutme">Projects</Link></Button> &nbsp;
               <Button variant="outline-light" size="lg" className="home-left-aboutmme-btn"><a style={{ textDecoration: 'none', color: 'white' }} href="" target="_blank" className="home-left-aboutme">Resume</a></Button> &nbsp;
               <Button variant="outline-light" size="lg" className="home-left-aboutmme-btn">
               <a style={{ textDecoration: 'none', color: 'white' }} href="https://www.linkedin.com/in/md-razibul-alam-a6b238212/" target="_blank" className="home-left-aboutme">Hire me</a></Button> 
             </Col>
         </Row>
       </Container>
    );
};

export default HomeBannerLeft;