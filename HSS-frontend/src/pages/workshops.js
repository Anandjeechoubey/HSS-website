import React from "react";
import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Link } from "react-router-dom";
import WsCard from "components/wsCard";

const ConfList = [
  {
    title: `National Conference on “Revisiting Development Paradigms for Uttarakhand”`,
    venue: "IIT Roorkee",
    date: "15-16 February, 2014",
    body: "Convener: D. K. Nauriyal , Co-Convener: Rashmi Gaur, Organizing Secretary: S. P. Singh ",
  },
  {
    title: `National Conference on “Revisiting Development Paradigms for Uttarakhand”`,
    venue: "IIT Roorkee",
    date: "15-16 February, 2014",
    body: "Convener: D. K. Nauriyal , Co-Convener: Rashmi Gaur, Organizing Secretary: S. P. Singh ",
  },
];

const WSList = [
  {
    title: `A Two-Day Workshop on Elder Abuse and Crime Against the Elderly`,
    venue: "IIT Roorkee",
    date: "15-16 February, 2014",
    body: "Challenges and Preventive Measures was organized in association with National Institute of Social Defence (NISD), Ministry of Social Justice & Empowerment. Convenor: Prof. Nagendra Kumar and Prof. Binod Mishra",
  },
  {
    title: `A Two-Day Workshop on Elder Abuse and Crime Against the Elderly`,
    venue: "IIT Roorkee",
    date: "15-16 February, 2014",
    body: "Challenges and Preventive Measures was organized in association with National Institute of Social Defence (NISD), Ministry of Social Justice & Empowerment. Convenor: Prof. Nagendra Kumar and Prof. Binod Mishra",
  },
  {
    title: `A Two-Day Workshop on Elder Abuse and Crime Against the Elderly`,
    venue: "IIT Roorkee",
    date: "15-16 February, 2014",
    body: "Challenges and Preventive Measures was organized in association with National Institute of Social Defence (NISD), Ministry of Social Justice & Empowerment. Convenor: Prof. Nagendra Kumar and Prof. Binod Mishra",
  },
  {
    title: `A Two-Day Workshop on Elder Abuse and Crime Against the Elderly`,
    venue: "IIT Roorkee",
    date: "15-16 February, 2014",
    body: "Challenges and Preventive Measures was organized in association with National Institute of Social Defence (NISD), Ministry of Social Justice & Empowerment. Convenor: Prof. Nagendra Kumar and Prof. Binod Mishra",
  },
  {
    title: `A Two-Day Workshop on Elder Abuse and Crime Against the Elderly`,
    venue: "IIT Roorkee",
    date: "15-16 February, 2014",
    body: "Challenges and Preventive Measures was organized in association with National Institute of Social Defence (NISD), Ministry of Social Justice & Empowerment. Convenor: Prof. Nagendra Kumar and Prof. Binod Mishra",
  },
  {
    title: `A Two-Day Workshop on Elder Abuse and Crime Against the Elderly`,
    venue: "IIT Roorkee",
    date: "15-16 February, 2014",
    body: "Challenges and Preventive Measures was organized in association with National Institute of Social Defence (NISD), Ministry of Social Justice & Empowerment. Convenor: Prof. Nagendra Kumar and Prof. Binod Mishra",
  },
];

const PptList = [
  {
    title: `How Significant is India's Demographic Dividend?`,
    venue: "IIT Roorkee",
    date: "15-16 February, 2014",
    body: "By: Mr. Manzoor Ahmad [Economics]",
  },
  {
    title: `How Significant is India's Demographic Dividend?`,
    venue: "IIT Roorkee",
    date: "15-16 February, 2014",
    body: "By: Mr. Manzoor Ahmad [Economics]",
  },
  {
    title: `How Significant is India's Demographic Dividend?`,
    venue: "IIT Roorkee",
    date: "15-16 February, 2014",
    body: "By: Mr. Manzoor Ahmad [Economics]",
  },
  {
    title: `How Significant is India's Demographic Dividend?`,
    venue: "IIT Roorkee",
    date: "15-16 February, 2014",
    body: "By: Mr. Manzoor Ahmad [Economics]",
  },
  {
    title: `How Significant is India's Demographic Dividend?`,
    venue: "IIT Roorkee",
    date: "15-16 February, 2014",
    body: "By: Mr. Manzoor Ahmad [Economics]",
  },
];

function Workshops() {
  return (
    <section className="padded-container mb-5">
      <Container fluid className="mx-0 px-0">
        <p className="breadcrump">
          <Link to="/events">{`Events >`}</Link> Conferences-workshops
        </p>
      </Container>
      <h1 className="section-heading mb-3">Conferences-workshops</h1>
      <p className="ws--subtitle">
        Department of Humanities and Social Sciences maintains the collection of
        several economic databases as an attempt to render its dedicated support
        to the students, researchers and faculties. This endeavour provides
        cutting- edge information for research and teaching in Economics.{" "}
      </p>
      <Tabs defaultActiveKey="conf" className="ws--tabs mb-4">
        <Tab eventKey="conf" title="Conferences">
          <div className="ws--grid">
            {ConfList.map((ws, key) => (
              <WsCard
                key={key}
                title={ws.title}
                date={ws.date}
                venue={ws.venue}
                content={ws.body}
              />
            ))}
          </div>
        </Tab>
        <Tab eventKey="ws" title="Workshops">
          <div className="ws--grid">
            {WSList.map((ws, key) => (
              <WsCard
                key={key}
                title={ws.title}
                date={ws.date}
                venue={ws.venue}
                content={ws.body}
              />
            ))}
          </div>
        </Tab>
        <Tab eventKey="ppt" title="Presentations">
          <div className="ws--grid">
            {PptList.map((ws, key) => (
              <WsCard
                key={key}
                title={ws.title}
                date={ws.date}
                venue={ws.venue}
                content={ws.body}
              />
            ))}
          </div>
        </Tab>
      </Tabs>
    </section>
  );
}

export default Workshops;
