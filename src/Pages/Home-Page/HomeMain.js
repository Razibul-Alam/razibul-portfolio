import React from 'react';
import './HomeMain.css'
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
           
          <Container className="App-header" fluid={false}>
            <Row className="App-main">
              <Col  xl={12}  className="App-left">
                <HomeBannerLeft />
              </Col>
              </Row>   
              
                <AllProject/>
              
             
               <HashLink smooth to={'/home#about'}>
               {/* <AboutMain/> */}
               </HashLink>
              
              
                <ContactMain/>
             
              {/* <SocialIcon/>   */}
           
            {/* <Row className="App-footer">
              <Footer />
            </Row> */}
        </Container>
        {/* </Animate> */}
      </div>
    );
};

export default HomeMain;