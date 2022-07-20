import React from 'react';
import {useParams} from 'react-router';
import {Button,Col} from 'react-bootstrap'
import { Avatar, Card } from 'antd';
import { Link, NavLink } from 'react-router-dom';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import './SingleProject.css'

const { Meta } = Card;
const SingleProject = ({project}) => {
    const{title,img,live,id}=project;
    const{number}=useParams()
    console.log(number)
    return (
        <Col>
<Card className='custom-card'
    style={{
      width: 300,
    }}
    cover={
      <img
        alt="example"
        src={img}
      />
    }
    // actions={[
    //   <SettingOutlined key="setting" />,
    //   <EditOutlined key="edit" />,
    //   <EllipsisOutlined key="ellipsis" />,
    // ]}
  >
    <Meta
      // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      // title={title}
    />
  </Card>
      </Col>
    );
};

export default SingleProject;