import React from "react";

const ScholarCard = ({ img, name, email, joined, thesis, discipline, research }) => (
  <div className="ppl--card d-flex align-items-center my-3">
    <img src={img} alt={name} className="ppl--img" />
    <div className="ppl--card-content">
      <h2>{name}</h2>
      <div className="d-flex justify-content-between">
        <p>
          Joined on <span>{joined}</span>
        </p>
        <span className="ml-auto">
          <i className="fas fa-envelope"></i> {email}
        </span>
      </div>
      <p className="p-2" style={{ background: "#ECF1FB", borderRadius: "4px" }}>
        Discipline <span>{discipline}</span> | Research Area <span>{research}</span>
      </p>
      <h3>Thesis Topic</h3>
      <p>{thesis}</p>
    </div>
  </div>
);

export default ScholarCard;
