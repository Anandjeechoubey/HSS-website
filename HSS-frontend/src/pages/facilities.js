import React from "react";
import HeroSection from "components/hero";
import history from "assets/images/history.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Facilities() {
  return (
    <>
      <HeroSection>
        <h1 className="section-heading">Facilities</h1>
        <p className="section-content">
          The department is invested in doing cutting-edge research in several of its disciplines. Currently, the focussed areas for Economics are labour economics, climate change and disaster,
          conservation, cleaning the Ganges, etc. The English discipline has expertise in modern and contemporary British literature, Indian writings, postcolonial literature, ecocriticism, and
          linguistics.
        </p>
      </HeroSection>

      <section className="padded-container d-flex align-items-center flex-wrap flex-md-nowrap grey-section">
        <img className="home--hist-img" src={history} />
        <div>
          <h1 className="section-heading">Economic Database</h1>
          <p className="section-content">
            Department of Humanities and Social Sciences maintains the collection of several economic databases as an attempt to render its dedicated support to the students, researchers and
            faculties. This endeavour provides cutting- edge information for research and teaching in Economics.
          </p>
          <Link to="/facilities/economic-database">
            <Button variant="outline-primary">View More</Button>
          </Link>
        </div>
      </section>

      <section className="padded-container d-flex align-items-center flex-wrap flex-md-nowrap">
        <div>
          <h1 className="section-heading">Language Lab</h1>
          <p className="section-content">
            In a globalized world where high proficiency of English is a pre-requisite for professional success, the state-of-the-art Language Laboratory at the department of Humanities & Social
            Sciences helps the undergraduate and post-graduate students of IIT acquire advanced levels of spoken English language skills.
          </p>
          <Button variant="outline-primary" href="#">
            View More
          </Button>
        </div>
        <img className="home--hist-img mr-0 ml-5" src={history} />
      </section>

      <section className="padded-container d-flex align-items-center flex-wrap flex-md-nowrap grey-section">
        <img className="home--hist-img" src={history} />
        <div>
          <h1 className="section-heading">Dedicated Library, Computer Lab</h1>
          <p className="section-content">
            In a globalized world where high proficiency of English is a pre-requisite for professional success, the state-of-the-art Language Laboratory at the department of Humanities & Social
            Sciences helps the undergraduate and post-graduate students of IIT acquire advanced levels of spoken English language skills.
          </p>
          <Link to="/facilities/departmental-library">
            <Button variant="outline-primary">View More</Button>
          </Link>
        </div>
      </section>

      <section className="padded-container d-flex align-items-center flex-wrap flex-md-nowrap">
        <div>
          <h1 className="section-heading">Psychology Lab</h1>
          <p className="section-content">
            This laboratory has been created at the Department of HSS as a modest facility to conduct research and give training to the students and faculty. It was established in the year 1971 with
            the objective of providing theoretical and practical understanding of behavioral aspects of an individual as well as of the group.
          </p>
          <Button variant="outline-primary" href="#">
            View More
          </Button>
        </div>
        <img className="home--hist-img mr-0 ml-5" src={history} />
      </section>
    </>
  );
}

export default Facilities;
