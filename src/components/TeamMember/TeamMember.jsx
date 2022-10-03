import React from 'react';
import { Link } from 'react-router-dom';
import "./TeamMember.css";

const TeamMember = ({ teamMember }) => {
    const { id, name, phone, email, website } = teamMember;
    return (
        <div className='member_box'>
            <p><strong>Name : </strong> <Link to={`/member/${id}`}>{name}</Link></p>
            <p><strong>Phone : </strong> {phone}</p>
            <p><strong>Email : </strong> {email}</p>
            <p><strong>Website : </strong> {website}</p>
        </div>
    );
};

export default TeamMember;