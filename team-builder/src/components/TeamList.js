import React from "react";
import Member from "./Member";

const TeamList = ({ members }) => {
  return (
    <div className='teamcontainer'>
      {members.map((member, i) => (
        <Member key={i} details={member} />
      ))}
    </div>
  );
};

export default TeamList;
