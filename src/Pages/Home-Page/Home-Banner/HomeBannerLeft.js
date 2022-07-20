import React from 'react';
import { Container,Button,Col,Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomeBanner.css'
import ReactTypingEffect from 'react-typing-effect';
import Particles from "react-tsparticles";
import particles from './ParticleItem';
const HomeBannerLeft = () => {
    return (
        <div className="home-left bg-dark p-3" > 
        {/* <Particles
            params={particles}
            className="particle"
            /> */}
             <h4 className="mt-4 text-light">
               HELLO
             </h4>
             <h2 className="second_line">
              <strong>I'M Razibul</strong>
             </h2>
             <h3 className='text-light'>
             <ReactTypingEffect
               text="React-developer|fullstack-developer"
               className="typical"
               speed="100"
               eraseDelay="2000"
               />
             </h3>
               <Button variant="outline-light" className='home-left-aboutmme-btn' size="lg"><Link to="/projects" style={{ textDecoration: 'none', color: '' }} className="">Projects</Link></Button>  
       </div>
    );
};

export default HomeBannerLeft;