import React, { useEffect, useState } from 'react';
import SingleProject from './SingleProject';
import { Row } from 'react-bootstrap';

const AllProject = () => {
    const[projects,setProjects]=useState([])
    useEffect(()=>{
        fetch('./Projects.json')
        .then(res=>res.json())
        .then(data=>setProjects(data))
          },[])
          console.log(projects)
    return (
        <>
        <div className='my-5'>
        <h2 className='text-center text-success'>All Projects</h2>
        <hr className='m-auto text-primary w-25'/>
        </div>
        <div className='container'>
        <Row xs={1} md={3} className="g-4 mt-3">
            {projects?.map(project=><SingleProject key={project.id} project={project} />)}
            </Row>
        </div>
        </>
    );
};

export default AllProject;