import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router';
import { Card } from 'react-bootstrap';
import DetailsImage from './DetailsImage';
import ProjectDetails from './ProjectDetails';
const IndividualDetails = () => {
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
        <div className='d-flex justify-content-center mt-5'>
        <div className='row justify-content-center align-items-center my-5'>
        <div className='col-lg-6 '>
          <div className='d-flex justify-content-center'>
         <DetailsImage details={singleProject}/>
          </div>
        </div>
        <div className='col-lg-6'>
<ProjectDetails details={singleProject}/>
        </div>
        </div>
        </div>
    );
};

export default IndividualDetails;