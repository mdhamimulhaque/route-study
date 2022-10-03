import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MemberDetails = () => {
    const memberDetailsInfo = useLoaderData();
    const { name, email, phone, address, website, username } = memberDetailsInfo;
    return (
        <div className='member_info_box'>
            <p><strong>Name : </strong>{name} ({username})</p>
            <p><strong>Address : </strong>{address?.city}</p>
            <p><strong>Email : </strong>{email}</p>
            <p><strong>Phone : </strong>{phone}</p>
            <p><strong>Website : </strong> {website}</p>
        </div>
    );
};

export default MemberDetails;