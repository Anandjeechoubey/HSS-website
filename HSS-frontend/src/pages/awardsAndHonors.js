import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const list = [
  {
    name: "Prof. Renu Rastogi",
    award: "bestowed with the title of Emeritus Professor since 2018",
  },
  {
    name: "Prof. Renu Rastogi",
    award: "bestowed with the title of Emeritus Professor since 2018",
  },
  {
    name: "Prof. Renu Rastogi",
    award: "bestowed with the title of Emeritus Professor since 2018",
  },
  {
    name: "Prof. Renu Rastogi",
    award: "bestowed with the title of Emeritus Professor since 2018",
  },
  {
    name: "Prof. Renu Rastogi",
    award: "bestowed with the title of Emeritus Professor since 2018",
  },
  {
    name: "Prof. Renu Rastogi",
    award: "bestowed with the title of Emeritus Professor since 2018",
  },
];

const AwardsAndHonors = () => {
  return (
    <section className="padded-container">
      <Container fluid className="mx-0 px-0">
        <p className="breadcrump">
          <Link to="/events">{`Events >`}</Link> Awards and Honors
        </p>
      </Container>
      <h1 className="section-heading mb-3">Awards and Honors</h1>
      <p className="section-content max-width-800">
        Department of Humanities and Social Sciences maintains the collection of
        several economic databases as an attempt to render its dedicated support
        to the students, researchers and faculties. This endeavour provides
        cutting- edge information for research and teaching in Economics.
      </p>
      <Container fluid className="mx-0 mt-5 px-0">
        <ol className="pl-0">
          {list.map((item, key) => (
            <li className="awardee-names" key={key}>
              {item.name}
              <p
                className="mb-0"
                style={{ color: "#435579", fontSize: "1rem" }}
              >
                {item.award}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
};

export default AwardsAndHonors;
