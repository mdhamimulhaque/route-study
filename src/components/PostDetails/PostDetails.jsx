import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const postData = useLoaderData();
    const { id, title, body, userId } = postData;

    const postDetails = {
        width: '300px',
        padding: '20px',
        margin: "0 auto",
        background: 'coral',
        marginTop: '50px'
    }
    return (
        <div style={postDetails}>
            <strong>ID NO : {id}</strong> || <strong>USER ID : {userId}</strong>
            <h5>{title}</h5>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;