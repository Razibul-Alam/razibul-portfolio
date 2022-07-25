import React from 'react';
import { Card,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleService = ({service}) => {
    console.log(service)
    const {title,img,desc,id}=service
    return (
        <div className='col-md-4'>
        <Card>
        <Card.Img variant="top" className='w-50 ms-2' src={img} data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-delay="60"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <div className="d-flex justify-content-between align-items-center">
          {/* <a style={{ color: 'red' }} href={live} target="_blank">Live-Site</a> */}
          {/* <Link to={`/project/${id}`}>Details</Link> */}
          </div>
          <small>{desc}</small>
        </Card.Body>
        
      </Card>
      </div>
    );
};

export default SingleService;