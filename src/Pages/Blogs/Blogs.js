import React from 'react';
import { blogData } from '../../BlogsData';
import SingleBlog from './SingleBlog';
import {Row} from 'react-bootstrap'

const Blogs = () => {
    return (
        <>
        <div className='py-5'>
        <div className='mb-5'>
        <h2 className='text-center text-success'>Blogs</h2>
        <hr className='m-auto text-primary w-25'/>
        </div>
        <div className='row g-4'>
            {blogData?.map(blog=><SingleBlog key={blog.id} blog={blog} />)}
        </div>
        </div>
        </>
    );
};

export default Blogs;