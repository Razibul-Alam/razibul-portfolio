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
             {/* <h3 className="mt-4">
               Hello! 
             </h3> */}
             <h2 className="second_line">
              <strong>Md Razibul</strong>
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
               <Button variant="outline-dark" className='bg-dark home-left-aboutmme-btn' size="lg"><Link to="/projects" style={{ textDecoration: 'none', color: 'black' }} className="">Projects</Link></Button>  
             </Col>
         </Row>
       </Container>
    );
};

export default HomeBannerLeft;