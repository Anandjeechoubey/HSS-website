import React from "react";

function MemberCard({ name, desg, image }) {
  return (
    <div className="fac--card">
      <img className="fac--img" alt={name} src={image} />
      <p className="fac--name">{name}</p>
      <p className="fac--desg">{desg}</p>
    </div>
  );
}

export default MemberCard;
