import React, { useEffect, useState } from 'react';
import SingleProject from './SingleProject';
import { Row } from 'react-bootstrap';
import StyleCard from './StyleCard';


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
        <StyleCard/>
        
        </>
    );
};

export default AllProject;