import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export default function Footer() {
  return (
    <Container fluid className="footer--main">
      <Row className="justify-content-between">
        <Col lg={4}>
          <p className="footer--dept">DEPARTMENT OF</p>
          <h2 className="footer--hss">
            Humanities and <br />
            Social Science
          </h2>
          <p className="footer--insti">For Institute related details visit</p>
          <a className="footer--insti" href="https://www.iitr.ac.in/">
            www.iitr.ac.in
          </a>
        </Col>
        <Col lg={3}>
          <h3 className="footer--label">Contact</h3>
          <div className="footer--hr" />
          <a className="footer--link" href="#">
            <i className="fas fa-envelope"></i>hums@iitr.ernet .in
          </a>
          <a className="footer--link" href="#">
            <i className="fas fa-phone-alt"></i>01332-285234
          </a>
          <a className="footer--link" href="#">
            <i className="fab fa-linkedin-in"></i>Linkedin
          </a>
          <a className="footer--link" href="#">
            <i className="fab fa-facebook-f"></i>Facebook
          </a>
        </Col>
        <Col lg={3}>
          <h3 className="footer--label">Visit</h3>
          <div className="footer--hr" />
          <p className="footer--link">
            Humanities and Social Science Department,
            <br />
            Indian Institute of Technology,
            <br />
            Roorkee, Haridwar District,
            <br />
            Uttarakhand, India
            <br />
            PIN - 247667
          </p>
        </Col>
      </Row>
      <div className="footer--hr mt-5" />
      <div className="d-flex justify-content-between mt-5">
        <span className="footer--insti">Copyright &copy; 2020</span>
        <span className="footer--insti">
          Designed with ❤️ by Design Studio, IIT Roorkee
        </span>
      </div>
    </Container>
  );
}
