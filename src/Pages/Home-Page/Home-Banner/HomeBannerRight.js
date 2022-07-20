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
        <div className="home-right-main">

            <br />
            <Image src='https://st.depositphotos.com/1246892/2354/i/450/depositphotos_23547827-stock-photo-portrait-of-young-businessman.jpg' className="img-fluid" alt="Image of Razibul"/>
          {/* <Row className="home-right-footer" >
            <SocialIcons />
          </Row> */}
        </div>
      </Container>
    );
};

export default HomeBannerRight;