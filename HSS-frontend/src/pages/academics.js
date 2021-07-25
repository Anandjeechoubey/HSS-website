import React from "react";
import HeroSection from "components/hero";
import talks from "assets/images/talks.png";
import history from "assets/images/history.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Academics() {
  return (
    <>
      <HeroSection>
        <h1 className="section-heading">Academics</h1>
        <p className="section-content">
          The department teaches on a number of core and optional UG/PG courses
          including courses such as technical communication and other ‘Basic’
          core courses in all of its disciplines. The department has PhD
          programme in all of its disciplines. The programme is divided into
          coursework and dissertation writing. The coursework part is composed
          of four Pre-PhD courses of four credits each. Students will have to
          complete these courses in the first year of their joining the PhD
          programme.
        </p>
      </HeroSection>

      <section className="padded-container">
        <h1 className="section-heading ">Programs Offered</h1>
        <p className="section-content max-width-800">
          The Department welcomes students who are interested to pursue a PhD in
          any of the area of humanities and social sciences. The Economics
          discipline now admits a limited set of students in the M.Sc. programme
          in Economics. Start exploring the areas/disciplines to explore your
          interests and plan on joining us.
        </p>
      </section>

      <section className="padded-container d-flex align-items-center flex-wrap flex-md-nowrap acad--progs-section">
        <img className="dp-shadow acad--progs-img" src={talks} />
        <div className="ofc--card acad--progs-card row">
          <div className="col-9 pr-5">
            <h2 className="section-heading mb-4">
              M.Sc. Programmes in Economics
            </h2>
            <p className="section-content">
              This programme will be of particular interest if one envisages a
              career which calls for advanced analytical skills, draws on
              advanced knowledge of economics, and shall ensure exposure to
              contemporary and emerging economic policy issues at the national
              and international levels. The programme is unique as it would help
              the students to apply various economic principles, theories and
              models, and understand the technical foundations behind them.
              <br /> This would enable students to alter, amend, empirically
              test and adapt them to the changing economic environment.
              Programme Features The M.Sc. (Economics) programme will open a
              wide range of career options for students.
            </p>
          </div>
          <div className="col-3 acad--links-col pl-5">
            <p>Important Links</p>
            <a>Programme Details</a>
            <a>Programme Structure</a>
            <div className="acad--hr" />
            <a>Programme Details</a>
            <a>Programme Structure</a>
            <div className="acad--hr" />
            <a>Programme Details</a>
            <a>Programme Structure</a>
          </div>
        </div>
      </section>

      <section className="padded-container d-flex align-items-center flex-wrap flex-md-nowrap acad--progs-section">
        <img className="dp-shadow acad--progs-img" src={talks} />
        <div className="ofc--card acad--progs-card row">
          <div className="col-9 pr-5">
            <h2 className="section-heading mb-4">
              M.Sc. Programmes in Economics
            </h2>
            <p className="section-content">
              This programme will be of particular interest if one envisages a
              career which calls for advanced analytical skills, draws on
              advanced knowledge of economics, and shall ensure exposure to
              contemporary and emerging economic policy issues at the national
              and international levels. The programme is unique as it would help
              the students to apply various economic principles, theories and
              models, and understand the technical foundations behind them.
              <br /> This would enable students to alter, amend, empirically
              test and adapt them to the changing economic environment.
              Programme Features The M.Sc. (Economics) programme will open a
              wide range of career options for students.
            </p>
          </div>
          <div className="col-3 acad--links-col pl-5">
            <p>Important Links</p>
            <a>Programme Details</a>
            <a>Programme Structure</a>
            <div className="acad--hr" />
            <a>Programme Details</a>
            <a>Programme Structure</a>
            <div className="acad--hr" />
            <a>Programme Details</a>
            <a>Programme Structure</a>
          </div>
        </div>
      </section>

      <section className="padded-container d-flex align-items-center flex-wrap flex-md-nowrap">
        <div>
          <h1 className="section-heading">Courses offered by HSS Department</h1>
          <p className="section-content">
            The department teaches on a number of core and optional UG/PG
            courses. For UG programmes, the department offers ‘Basic’ core
            courses in all of its disciplines. For PG programmes, the department
            has specialized courses such as Technical Communication. <br />
            The department has PhD programme in all of its disciplines. The
            programme is divided into two parts: <br />
            1. Coursework <br />
            2. Dissertation writing <br />
            The coursework part is composed of four Pre-PhD courses of four
            credits each. Students will have to complete these courses in the
            first year of their joining the PhD programme.
          </p>
        </div>
        <img className="home--hist-img mr-0 ml-5" src={history} />
      </section>

      <section className="padded-container grey-section">
        <h1 className="section-heading mb-4">Admissions</h1>
        <p className="section-content max-width-800">
          The department offers a post-graduate M.Sc. course in Economics and a
          PhD course in the disciplines of English, Economics, Sociology,
          Psychology and Fine Arts.
        </p>
        <Row className="mt-5">
          <Col>
            <h1 className="section-heading mb-4">Ph.D. Admission</h1>
            <ol className="section-content">
              <li>
                Notification for Ph.D. Admission for Autumn Semester 2019 will
                be uploaded soon.
              </li>
              <li>
                Click here for the proforma for Claim to Travel for Travel
                Expenditure on account of PhD.
              </li>
            </ol>
          </Col>
          <Col md={1}>
            <div
              className="m-auto"
              style={{
                borderLeft: "1px solid #e8ebef",
                height: "100%",
                width: "1px",
              }}
            />
          </Col>
          <Col>
            <h1 className="section-heading mb-4">M.Sc. Admission</h1>
            <p className="section-content">
              To apply for admission to M.Sc. Programme, a candidate is required
              to qualify in the JAM (Joint Admission Test) for M.Sc. conducted
              by IITs. Admission will be based on the merit of the candidate in
              the written examination followed by an interview. The written test
              will focus on analytical, verbal and mathematical abilities.
              <br />
              Candidates appearing for their final degree examination shall also
              be eligible to appear for the admission tests. However, their
              admission will be provisional and 2 subject to securing first
              division in their bachelor’s degree examination. Reservation of
              seats will be as per the Government of India norms.
              <br />
              Please follow the link for JAM 2019:
              <br />
              <a href="http://jam.iitkgp.ac.in/">http://jam.iitkgp.ac.in/</a>
            </p>
          </Col>
        </Row>
      </section>
    </>
  );
}

export default Academics;
