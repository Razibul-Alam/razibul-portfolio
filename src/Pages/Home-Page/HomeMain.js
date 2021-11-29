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


const HomeMain = () => {
    return (
        <div>
         <Helmet>
                  <meta charSet="utf-8" />
                  <title>Home | Motasim Foad</title>
                  <link rel="canonical" href="http://motasimfoad.com/home" />
                  <meta name="description" content="Motasim Foad | Home - Product Manager | Project Manager | Software Engineer" />
         </Helmet>
          <Animate to="1" from="0" attributeName="opacity">
            {/* <Particles
            params={particles}
            className="particle"
            /> */}
           
          <Container className="App-header" fluid={true}>
            <Row className="App-main">
              <Col  xl={12}  className="App-left">
                <HomeBannerLeft />
              </Col>
            </Row>
            <Row className="App-footer">
              <Footer />
            </Row>
        </Container>
        </Animate>
      </div>
    );
};

export default HomeMain;