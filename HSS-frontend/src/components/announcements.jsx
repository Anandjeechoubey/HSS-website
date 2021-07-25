import React from "react";

function Announcements({ list }) {
  return (
    <div>
      {list.map((item) => (
        <a className="ann--wrapper" href={item.attachments} key={item.id}>
          <p className="ann--spons">Sponsored by: IIT Roorkee</p>
          <h2 className="ann--title">{item.headline}</h2>
          <p className="ann--date">Posted On: {item.date}</p>
        </a>
      ))}
    </div>
  );
}

export default Announcements;
