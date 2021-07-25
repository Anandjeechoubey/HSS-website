import React from "react";
import heroImage from "assets/images/mainbuilding.png";
import arrow from "assets/icons/arrow-down.svg";
import Container from "react-bootstrap/Container";

function HeroSection(props) {
  return (
    <section className="padded-container d-flex align-items-center flex-wrap">
      <span className="hero--bg-dec" />
      <div className="hero--content">{props.children}</div>
      <img className="hero--img" alt="iitr" src={heroImage} />
      <Container className="d-flex align-items-center justify-content-center pt-5">
        <img alt="" src={arrow} />
        <p className="hero--arrow-text">Scroll to know more</p>
      </Container>
    </section>
  );
}

export default HeroSection;
