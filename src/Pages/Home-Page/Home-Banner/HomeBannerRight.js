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
            <Image src='https://th.bing.com/th/id/OIP.Xq-LG79iLNZLSCt6RmT6OwHaE8?pid=ImgDet&rs=1' className="img-fluid" alt="Image of Razibul"/>
          {/* <Row className="home-right-footer" >
            <SocialIcons />
          </Row> */}
        </div>
      </Container>
    );
};

export default HomeBannerRight;