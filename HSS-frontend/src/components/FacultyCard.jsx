import React from "react";

const FacultyCard = ({ img, name, email, phone, interests, faculty_profile }) => (
  <div className="ppl--card d-flex align-items-center my-3">
    <img src={img} alt={name} className="ppl--img" />
    <div className="ppl--card-content">
      <h2 className="name_">
        <a href={faculty_profile}>{name}</a>
      </h2>
      <p className="mt-3 mb-2">
        <span>Interests</span>
      </p>
      <p>{interests}</p>
      <p>
        <i className="fas fa-envelope"></i> {email}{" "}
        {phone && (
          <>
            <span className="mx-3" style={{ color: "#cecece" }}>
              |
            </span>
            <i className="fas fa-phone-alt"></i> {phone}
          </>
        )}
      </p>
    </div>
  </div>
);

export default FacultyCard;
