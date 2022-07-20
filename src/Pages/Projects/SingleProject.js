import React from 'react';
import {useParams} from 'react-router';
import {Button,Col,Carousel} from 'react-bootstrap'
import { Avatar, Card } from 'antd';
import { Link, NavLink } from 'react-router-dom';
import {GithubOutlined,EyeOutlined,ChromeOutlined } from '@ant-design/icons';
import './SingleProject.css'

const { Meta } = Card;
const SingleProject = ({project}) => {
    const{title,img,live,id,img1,img2,img3,code}=project;
    const{number}=useParams()
    
    return (
        <Col>
<Card className='custom-card'
    style={{
      width: 300,
    }}
    cover={
      <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    }
    actions={[
      <a className='text-dark' href={live} target="_blank" rel="noopener noreferrer"><ChromeOutlined /></a>,
      <a className='text-dark' href={code} target="_blank" rel="noopener noreferrer"><GithubOutlined/></a>,
      <Link to={`/project/${id}`} className='text-dark'><EyeOutlined/></Link>,
    ]}
  >
    <Meta
      title={title}
    />
  </Card>
      </Col>
    );
};

export default SingleProject;