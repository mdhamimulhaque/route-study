import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Post.css"

const Post = ({ blog }) => {
    const navigate = useNavigate()
    const handlePostDetails = () => {
        navigate(`/post-details/${blog.id}`)
    }
    return (
        <div className='post_wrapper'>
            <h4>{blog?.title}</h4>
            <button onClick={handlePostDetails}>Details</button>
        </div>
    );
};

export default Post;