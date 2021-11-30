import React from 'react';
import { Card,Button } from 'react-bootstrap';

const ProjectDetails = ({details}) => {
    return (
        <>
 <Card style={{ width: '18rem' }} className='border-0'>
  <Card.Body>
    <Card.Title className='mb-5'>{details?.title}</Card.Title>
    <hr/>
    <Card.Subtitle className="mb-2 text-muted">Features</Card.Subtitle>
    <Card.Text>
     {details?.features?.map(item=><li>{item}</li>)}
    </Card.Text>
    <Button variant="outline-dark" size="lg" className=""><a style={{ textDecoration: 'none', color: 'black' }} href={details?.live} target="_blank" className="home-left-aboutme">Live-Site</a></Button>
    {/* <Card.Link href="#">Card Link</Card.Link> */}
   <Button variant="outline-dark" className="ms-4" size="lg"><a style={{ textDecoration: 'none', color: 'black' }} href={details?.code} target="_blank" >Code</a></Button>
  </Card.Body>
</Card>
 
</>
    );
};

export default ProjectDetails;