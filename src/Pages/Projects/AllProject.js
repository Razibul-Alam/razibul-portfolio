import React, { useEffect, useState } from 'react';
import SingleProject from './SingleProject';
import { Card } from 'antd';
import { Row } from 'react-bootstrap';

const tabListNoTitle = [
    {
      key: 'Frontend',
      tab: 'Frontend',
    },
    {
      key: 'FullStack',
      tab: 'FullStack',
    },
    {
      key: 'Visualization',
      tab: 'Vizualization',
    }
  ];

const AllProject = () => {
    const [activeTabKey2, setActiveTabKey2] = useState('Fullstack');
    const onTab2Change = (key) => {
      setActiveTabKey2(key);
    };
    const[projects,setProjects]=useState([])
    useEffect(()=>{
        fetch('./Projects.json')
        .then(res=>res.json())
        .then(data=>setProjects(data))
          },[])
          // filter projects
          const filteredProject=projects.filter(project=>project.category==activeTabKey2.toLowerCase())
    return (
        <>
        <div className='my-5' id='portfolio'>
        <h2 className='text-center text-light'>My Portfolio</h2>
        <hr className='m-auto text-light w-25'/>
        </div>
          <Card
            style={{
              width: '100%',
            }}
            tabList={tabListNoTitle}
            activeTabKey={activeTabKey2}
            onTabChange={(key) => {
              onTab2Change(key);
            }}
          >
            <Row xs={12} md={2} className='g-4'>
             {filteredProject?.map(project=><SingleProject project={project}/>)}
          </Row>
          </Card>
        </>
    );
};

export default AllProject;