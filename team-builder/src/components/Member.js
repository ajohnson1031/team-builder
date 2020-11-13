import React from "react";

const Member = ({ details }) => {
  return (
    <div className='member'>
      <p>{details.name}</p>
      <p>{details.role}</p>
    </div>
  );
};

export default Member;
