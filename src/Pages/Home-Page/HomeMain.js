import React from 'react';
import './HomeMain.css'
import Fade from 'react-reveal/Fade';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import Animate from 'react-smooth';
import Particles from "react-tsparticles";

import {Helmet} from 'react-helmet'
import Footer from './../Footer/Footer';
import HomeBannerLeft from './Home-Banner/HomeBannerLeft';
import particles from './Home-Banner/ParticleItem';
import SocialIcon from './../Social-Icon/SocialIcon';
import AllProject from './../Projects/AllProject';
import ContactMain from './../Contact/ContactMain';
import { HashLink } from 'react-router-hash-link';
import AboutMain from '../About-Section/AboutMain';
import StyleCard from './../Projects/StyleCard';


const HomeMain = () => {
    return (
        <div>
         <Helmet>
                  <meta charSet="utf-8" />
                  <title>Home | Razibul</title>
                  <link rel="canonical" href="/" />
                  <meta name="description" content="Motasim Foad | Home - Product Manager | Project Manager | Software Engineer" />
         </Helmet>
          {/* <Animate to="1" from="0" attributeName="opacity"> */}
            {/* <Particles
            params={particles}
            className="particle"
            /> */}
             {/* <Row className="App-main"> */}
              {/* <Col  xl={12}  className="App-left"> */}
                
              {/* </Col> */}
              {/* </Row>  */}
              <HomeBannerLeft/>
          <Container className="App-header" fluid={false}>
            <AboutMain/>   
                <AllProject/>
               <HashLink smooth to={'/home#about'}>
               {/* <AboutMain/> */}
               </HashLink>
              
              
                
             
              {/* <SocialIcon/>   */}
           
            {/* <Row className="App-footer">
              <Footer />
            </Row> */}
        </Container>
        <Fade left>
        <ContactMain/>
        </Fade>
        {/* </Animate> */}
      </div>
    );
};

export default HomeMain;