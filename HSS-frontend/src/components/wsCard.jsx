import React from "react";

function WsCard({ title, venue, date, content }) {
  return (
    <div className="wsc--card">
      <h3 className="wsc--title pb-2 mb-3">{title}</h3>
      <p className="wsc--light">
        <span>{venue} </span> {date}
      </p>
      <div className="wsc--body">{content}</div>
    </div>
  );
}

export default WsCard;
