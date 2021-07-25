import React from "react";
import { Card } from "react-bootstrap";
import cardImage from "assets/images/news.png";

const Events = [
  {
    img: cardImage,
    title: "Quality improvement and general workshops",
    desc: "The Department of Architecture and Planning imparts high-quality education in the professional fields of Architecture and Planni...",
    link: "#",
  },
  {
    img: cardImage,
    title: "Conferences",
    desc: " The Department of Architecture and Planning imparts high-quality education in the professional fields of Architecture and Planni... ",
    link: "#",
  },
  {
    img: cardImage,
    title: "Talks hosted at the department",
    desc: "The Department of Architecture and Planning imparts high-quality education in the professional fields of Architecture and Planni...",
    link: "#",
  },
];

function EventList() {
  return (
    <div className="d-flex align-items-stretch justify-content-around flex-wrap flex-md-nowrap mt-5">
      {Events.map((event, index) => (
        <Card key={index} className="event-list--card">
          <Card.Img variant="top" src={event.img} />
          <Card.Body>
            <p className="event-list--date">23 July 2000</p>
            <Card.Title className="event-list--title">{event.title}</Card.Title>
            <Card.Text className="event-list--desc">{event.desc}</Card.Text>
          </Card.Body>
          <Card.Footer className="event-list--footer d-flex justify-content-center">
            <a href={event.link}>Read More →</a>
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
}

export default EventList;
