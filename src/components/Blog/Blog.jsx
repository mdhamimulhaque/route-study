import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Blog = () => {
    const blogs = useLoaderData();

    const blogWrapper = {
        display: 'flex',
        justifyContent: "space-between",
        flexWrap: "wrap"
    }
    return (
        <div>
            <h2>Total Blogs : {blogs.length}</h2>
            <div className="blog_wrapper" style={blogWrapper}>
                {
                    blogs.map(blog => <Post blog={blog} key={blog.id} />)
                }
            </div>
        </div>
    );
};

export default Blog;