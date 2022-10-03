import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TeamMember from '../TeamMember/TeamMember';

const Team = () => {
    const teamMembers = useLoaderData()

    const teamWrapper = {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    }
    return (
        <div>
            <h2>Team Member : {teamMembers.length}</h2>
            <div className="team_member_wrapper" style={teamWrapper} >
                {
                    teamMembers.map(teamMember =>
                        <TeamMember teamMember={teamMember} key={teamMember.id} />
                    )
                }
            </div>
        </div>
    );
};

export default Team;