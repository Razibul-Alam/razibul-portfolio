import React from 'react';
import {Button,Card,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom';
const SingleProject = ({project}) => {
    const{title,img,desc,id}=project;
    return (
        <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
             {desc}
            </Card.Text>
            <div className="d-flex justify-content-between align-items-center">
            <Link to={`/booking/${id}`}><Button>Book Ticket</Button></Link>
            </div>
          </Card.Body>
          
        </Card>
      </Col>
    );
};

export default SingleProject;