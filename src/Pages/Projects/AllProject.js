import React, { useEffect, useState } from 'react';
import SingleProject from './SingleProject';
import { Card } from 'antd';
import { Row } from 'react-bootstrap';
import StyleCard from './StyleCard';

const tabListNoTitle = [
    {
      key: 'Design',
      tab: 'Design',
    },
    {
      key: 'FullStack',
      tab: 'FullStack',
    },
    {
      key: 'All',
      tab: 'All',
    }
  ];

const AllProject = () => {
    const [activeTabKey2, setActiveTabKey2] = useState('All');
    const onTab2Change = (key) => {
      setActiveTabKey2(key);
    };
    const[projects,setProjects]=useState([])
    useEffect(()=>{
        fetch('./Projects.json')
        .then(res=>res.json())
        .then(data=>setProjects(data))
          },[])
          console.log(projects)

          const contentListNoTitle = {
            All:<>
            <Row sx={4} className='g-4'>
            {projects.map(project=><SingleProject project={project}/>)}
            </Row>
            </>
            ,
            Design:<>
            <Row sx={4}>
            {projects.slice(3,6).map(project=><SingleProject project={project}/>)}
            </Row>
            </> ,
            FullStack:<>
            <Row sx={4}>
            {projects.slice(0,3).map(project=><SingleProject project={project}/>)}
            </Row>
            </>,
          };
    return (
        // <>
        // {projects.map(project=><SingleProject project={project}/>)}
        
        // </>
        <>
        <div className='my-5'>
        <h2 className='text-center text-success'>My Portfolio</h2>
        <hr className='m-auto text-primary w-25'/>
        </div>
          <Card
            style={{
              width: '100%',
            }}
            tabList={tabListNoTitle}
            activeTabKey={activeTabKey2}
            tabBarExtraContent={<a href="#">More</a>}
            onTabChange={(key) => {
              onTab2Change(key);
            }}
          >
            {contentListNoTitle[activeTabKey2]}
          </Card>
        </>
    );
};

export default AllProject;