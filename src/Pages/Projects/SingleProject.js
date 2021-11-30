import React from 'react';
import {useParams} from 'react-router';
import {Button,Card,Col} from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom';
const SingleProject = ({project}) => {
    const{title,img,live,id}=project;
    const{number}=useParams()
    console.log(number)
    return (
        <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <div className="d-flex justify-content-between align-items-center">
            <a style={{ color: 'black' }} href={live} target="_blank">Live-Site</a>
            <Link to={`/project/${id}`}>Details</Link>
            </div>
          </Card.Body>
          
        </Card>
      </Col>
    );
};

export default SingleProject;