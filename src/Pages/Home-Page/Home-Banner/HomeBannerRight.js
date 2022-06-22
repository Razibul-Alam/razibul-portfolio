import React from 'react';
import {
    Container,
    Row,
    Col,
    Image,
  } from 'react-bootstrap';
const HomeBannerRight = () => {
    return (
        <Container className="home-right">
        <Row className="home-right-main">
          <Col xl={12}>
            <br />
            <Image src={''} className="home-right-main-img" alt="Image of Razibul"/>
          </Col>
          {/* <Row className="home-right-footer" >
            <SocialIcons />
          </Row> */}
        </Row>
      </Container>
    );
};

export default HomeBannerRight;