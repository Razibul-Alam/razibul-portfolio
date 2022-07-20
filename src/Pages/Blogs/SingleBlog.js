import React from 'react';
import {Card,Col} from 'react-bootstrap'

const SingleBlog = ({blog}) => {
    const{title,img,author}=blog;
    return (
        <div className='col-md-4'>
              <Card>
        <Card.Header>
            <div>
                <img src={img} alt="" className='img-fluid'/>
            </div>
        </Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {' '}
              {title}{' '}
            </p>
            <footer className="blockquote-footer">
              <cite title="Source Title">{author}</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
        </div>
    );
};

export default SingleBlog;