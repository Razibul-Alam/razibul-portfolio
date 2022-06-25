import React from 'react';
import { Container,Row,Col,Button } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';

const AboutMain = () => {
    return (
        <div>
             <Container className='my-5'>
      <Row>
        <Col>
        <div>
            <img src="https://th.bing.com/th/id/OIP.Xq-LG79iLNZLSCt6RmT6OwHaE8?pid=ImgDet&rs=1" alt="not found" srcset="" className='img-fluid' />
        </div>
        </Col>
        <Col>
        <div>
            <h4>About Me</h4>
            <h2 className='bolder'>Creative Independent Web Developer based in Bangladesh</h2>
            <Zoom left>
            <small className='mt-4'>I'm web designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</small></Zoom>
            <Button variant="secondary" className='mt-5' size="lg">
          Download Resume
        </Button>
        </div>
        </Col>
      </Row>
    </Container>
        </div>
    );
};

export default AboutMain;