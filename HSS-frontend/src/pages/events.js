import React from "react";
import HeroSection from "components/hero";
import history from "assets/images/history.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Events() {
  return (
    <>
      <HeroSection>
        <h1 className="section-heading">Events</h1>
        <p className="section-content">
          The Department regularly holds various events including conferences,
          talks, summer courses, technical workshops, etc. Soon, the department
          will also be holding visiting fellowships/professorships and monthly
          seminars from distinguished people in relevant fields. The
          department’s faculty research presentation has also been revamped.
        </p>
      </HeroSection>

      <section className="padded-container d-flex align-items-center flex-wrap flex-md-nowrap grey-section">
        <img className="home--hist-img" src={history} />
        <div>
          <h1 className="section-heading">Conferences-workshops</h1>
          <p className="section-content">
            Department of Humanities and Social Sciences maintains the
            collection of several economic databases as an attempt to render its
            dedicated support to the students, researchers and faculties. This
            endeavour provides cutting- edge information for research and
            teaching in Economics.
          </p>
          <Link to="/events/workshops">
            <Button variant="outline-primary">View More</Button>
          </Link>
        </div>
      </section>

      <section className="padded-container d-flex align-items-center flex-wrap flex-md-nowrap">
        <div>
          <h1 className="section-heading">Honors and Awards</h1>
          <p className="section-content">
            In a globalized world where high proficiency of English is a
            pre-requisite for professional success, the state-of-the-art
            Language Laboratory at the department of Humanities & Social
            Sciences helps the undergraduate and post-graduate students of IIT
            acquire advanced levels of spoken English language skills.
          </p>
          <Link to="/events/awards-and-honors">
            <Button variant="outline-primary">View More</Button>
          </Link>
        </div>
        <img className="home--hist-img mr-0 ml-5" src={history} />
      </section>

      <section className="padded-container d-flex align-items-center flex-wrap flex-md-nowrap grey-section">
        <img className="home--hist-img" src={history} />
        <div>
          <h1 className="section-heading">Activities</h1>
          <p className="section-content">
            Department of Humanities and Social Sciences maintains the
            collection of several economic databases as an attempt to render its
            dedicated support to the students, researchers and faculties. This
            endeavour provides cutting- edge information for research and
            teaching in Economics.
          </p>
          <Button variant="outline-primary" href="#">
            View More
          </Button>
        </div>
      </section>

      <section className="padded-container d-flex align-items-center flex-wrap flex-md-nowrap">
        <div>
          <h1 className="section-heading">Talks</h1>
          <p className="section-content">
            In a globalized world where high proficiency of English is a
            pre-requisite for professional success, the state-of-the-art
            Language Laboratory at the department of Humanities & Social
            Sciences helps the undergraduate and post-graduate students of IIT
            acquire advanced levels of spoken English language skills.
          </p>
          <Link to="/events/talks">
            <Button variant="outline-primary">View More</Button>
          </Link>
        </div>
        <img className="home--hist-img mr-0 ml-5" src={history} />
      </section>
    </>
  );
}

export default Events;
