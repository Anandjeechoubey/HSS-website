import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import WsCard from "components/wsCard";

const pastTalks = [
  {
    title: "Dr. Shahnawaj, Director (S & SE Asia)",
    venue: "",
    date: "Sept 16, 2019",
    body: `Associate Professor of English at Shivaji University Kolhapur, Maharashtra, India delivered a special lecture  on the topic "Shyam Benegal and New Wave Indian Cinema: Portrayal of the 'Voiceless' People in Early Benegal Films." in the conference room of the department. The talk was well attended by research scholars, international students and faculty members of the department.`,
  },
  {
    title: "Dr. Shahnawaj, Director (S & SE Asia)",
    venue: "",
    date: "Sept 16, 2019",
    body: `Associate Professor of English at Shivaji University Kolhapur, Maharashtra, India delivered a special lecture  on the topic "Shyam Benegal and New Wave Indian Cinema: Portrayal of the 'Voiceless' People in Early Benegal Films." in the conference room of the department. The talk was well attended by research scholars, international students and faculty members of the department.`,
  },
  {
    title: "Dr. Shahnawaj, Director (S & SE Asia)",
    venue: "",
    date: "Sept 16, 2019",
    body: `Associate Professor of English at Shivaji University Kolhapur, Maharashtra, India delivered a special lecture  on the topic "Shyam Benegal and New Wave Indian Cinema: Portrayal of the 'Voiceless' People in Early Benegal Films." in the conference room of the department. The talk was well attended by research scholars, international students and faculty members of the department.`,
  },
  {
    title: "Dr. Shahnawaj, Director (S & SE Asia)",
    venue: "",
    date: "Sept 16, 2019",
    body: `Associate Professor of English at Shivaji University Kolhapur, Maharashtra, India delivered a special lecture  on the topic "Shyam Benegal and New Wave Indian Cinema: Portrayal of the 'Voiceless' People in Early Benegal Films." in the conference room of the department. The talk was well attended by research scholars, international students and faculty members of the department.`,
  },
];

const Talks = () => {
  return (
    <>
      <section className="padded-container">
        <Container fluid className="mx-0 px-0">
          <p className="breadcrump">
            <Link to="/events">{`Events >`}</Link> Talks
          </p>
        </Container>
        <h1 className="section-heading mb-3">Talks</h1>
        <p className="section-content max-width-800">
          In a globalized world where high proficiency of English is a pre-requisite for professional success, the state-of-the-art Language Laboratory at the department of Humanities & Social
          Sciences helps the undergraduate and post-graduate students of IIT acquire advanced levels of spoken English language skills.
        </p>
      </section>

      <section className="padded-container">
        <h2 className="phd--name">Special Talks</h2>
        <p className="section-content mb-2 mt-4">Dr. Shahnawaj, Director (S & SE Asia)</p>
        <p className="ws--subtitle my-2" style={{ opacity: 0.6 }}>
          Sept 16, 2019
        </p>
        <p className="max-width-800" style={{ color: "#435579" }}>
          Associate Professor of English at Shivaji University Kolhapur, Maharashtra, India delivered a special lecture on the topic "Shyam Benegal and New Wave Indian Cinema: Portrayal of the
          'Voiceless' People in Early Benegal Films." in the conference room of the department. The talk was well attended by research scholars, international students and faculty members of the
          department.
        </p>
      </section>

      <section className="padded-container">
        <h2 className="phd--name">Past talks</h2>
        <div className="ws--grid mt-4">
          {pastTalks.map((ws, key) => (
            <WsCard key={key} title={ws.title} date={ws.date} venue={ws.venue} content={ws.body} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Talks;
