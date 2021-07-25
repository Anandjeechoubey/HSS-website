import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default function OverflowCard({ heading, content, indent, url, img }) {
  return (
    <Container
      className="d-flex justify-content-center align-items-center ofc--main"
      style={{ flexDirection: indent === "right" ? "row-reverse" : "row" }}
    >
      <img className="ofc--img" alt="" src={img} />
      <div
        className="ofc--card"
        style={
          indent === "right"
            ? { marginRight: "-80px" }
            : { marginLeft: "-80px" }
        }
      >
        <h1 className="ofc--heading">{heading}</h1>
        <p className="ofc--para">{content}</p>
        {url && (
          <Button variant="outline-primary" href={url}>
            Know More
          </Button>
        )}
      </div>
    </Container>
  );
}
