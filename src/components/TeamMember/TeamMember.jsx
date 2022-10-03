import React from 'react';
import { Link } from 'react-router-dom';
import "./TeamMember.css";

const TeamMember = ({ teamMember }) => {
    const { id, username, phone, email, website } = teamMember;
    return (
        <div className='member_box'>
            <p><strong>User Name : </strong> <Link to={`/member/${id}`}>{username}</Link></p>
            <p><strong>Website : </strong> {website}</p>
        </div>
    );
};

export default TeamMember;