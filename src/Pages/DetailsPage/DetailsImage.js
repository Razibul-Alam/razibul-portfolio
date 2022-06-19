import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const DetailsImage = ({details}) => {
    return (
        <div>
             <Row xs={1} md={2}>
    <Col>
    <Card className='border-0' style={{ width: '12rem' }}>
  <Card.Img variant="top" src={details?.img} />
</Card>
  
    </Col>
   
  </Row>
            
        </div>
    );
};

export default DetailsImage;