import React from 'react';
import { Container,Button,Col,Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomeBanner.css'
import ReactTypingEffect from 'react-typing-effect';
import Particles from "react-tsparticles";
import particles from './ParticleItem';
import { HashLink } from 'react-router-hash-link';
const HomeBannerLeft = () => {
    return (
        <div className="home-left p-3" > 
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
             <Button class='banner-btn' style={{padding:'10px 40px'}} variant="outline-light">
             <HashLink className='ms-3  text-decoration-none' to='#portfolio'>PORTFOLIO</HashLink>
             </Button>{' '} 
       </div>
    );
};

export default HomeBannerLeft;