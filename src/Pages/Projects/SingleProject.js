import React from 'react';
import {useParams} from 'react-router';
import {Button,Col} from 'react-bootstrap'
import { Avatar, Card } from 'antd';
import { Link, NavLink } from 'react-router-dom';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;
const SingleProject = ({project}) => {
    const{title,img,live,id}=project;
    const{number}=useParams()
    console.log(number)
    return (
        <Col>
        {/* <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <div className="d-flex justify-content-between align-items-center">
            <a style={{ color: 'red' }} href={live} target="_blank">Live-Site</a>
            <Link to={`/project/${id}`}>Details</Link>
            </div>
          </Card.Body>
          
        </Card> */}

<Card
    style={{
      width: 300,
    }}
    cover={
      <img
        alt="example"
        src={img}
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title={title}
    />
  </Card>
      </Col>
    );
};

export default SingleProject;