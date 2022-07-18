import React from 'react';
import { blogData } from '../../BlogsData';
import SingleBlog from './SingleBlog';
import {Row} from 'react-bootstrap'

const Blogs = () => {
    return (
        <>
        <div className='my-5'>
        <h2 className='text-center text-success'>What Tourist says</h2>
        <hr className='m-auto text-primary w-25'/>
        </div>
        <Row sx={4}>
            {blogData?.map(blog=><SingleBlog key={blog.id} blog={blog} />)}
        </Row>
        </>
    );
};

export default Blogs;