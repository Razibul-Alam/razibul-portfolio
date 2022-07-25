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
import Blogs from './../Blogs/Blogs';
import Services from './../Services/Services';
import HomeBannerRight from './Home-Banner/HomeBannerRight';
import Header from '../Header/Header';
import Feedback from '../Feedback/Feedback'


const HomeMain = () => {
    return (
        <div id='home' style={{backgroundColor:''}} className=''>
          {/* <Animate to="1" from="0" attributeName="opacity"> */}
            <Particles
            params={particles}
            className="particle"
            />
            <div className='App-main'>
              <Header/>
              <div className='banner-holder container'>
             <div className="row">
              <div className="App-left col-md-7 col-sm-12"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out">
              <HomeBannerLeft/>
              </div>
              <div className="App-left col-md-5 col-sm-12" data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out">
              <HomeBannerRight/>
              </div>
               </div> 
               </div> 
               </div> 

              
          <Container className="App-header" fluid={false}>
            <AboutMain/>   
            
            <Services/>
            <div data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
                <AllProject/>
                </div>
                <Feedback/>
                <Blogs/>
        </Container>
        <ContactMain/>
      </div>
    );
};

export default HomeMain;