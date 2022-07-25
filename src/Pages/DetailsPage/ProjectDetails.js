import React,{useState,useEffect} from 'react';
import {Row,Button,Badge,Col,Container} from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ProjectDetails = () => {
  const[projects,setProjects]=useState([])
    const{number}=useParams()
    console.log(number)
    useEffect(()=>{
        fetch('/Projects.json')
        .then(res=>res.json())
        .then(data=>setProjects(data))
          },[])
          const singleProject=projects.find(project=>project.id==number)
    console.log(projects)
    console.log(singleProject)
    return (
        <>
<div id='about' className='about-custom' data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out">
             <Container className='py-5'>
      <Row>
        <Col sm={12} md={6}>
        <div className='' data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out">
            <img src={singleProject?.img1} alt="not found" srcset="" className='img-fluid' />
        </div>
        </Col>
        <Col sm={12} md={6}>
        <div data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out">
           <div>
            <h3>{singleProject?.title}</h3>
            <hr className='text-dark w-50'/>
           </div>
           <div>
            {singleProject?.features?.map(feature=><li>{feature}</li>)}
           </div>
            <br/>
            <div>
              <h4>Technology</h4>
              {singleProject?.technology?.map(tech=><Badge bg="primary" className='ms-3'>{tech}</Badge>)}
            </div>
            <Link to ='/home'>
            <Button variant="dark" className='mt-4' size="lg" data-aos="fade-up"
          data-aos-offset="150"
          data-aos-delay="60"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out">
          Back to Home
        </Button>
        </Link>
        </div>
        </Col>
      </Row>
    </Container>
        </div>
</>
    );
};

export default ProjectDetails;