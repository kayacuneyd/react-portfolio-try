import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CallToAction = () => {
  return (
    <Container style={{ backgroundColor: "#243a4c", fontSize: "2rem" }} fluid>
      <Row className="vh-100">
        <Col className="d-flex justify-content-center align-items-center">
          <div className="text-center">
            <h1 style={{ color: "#e0e0e0", fontSize: "4rem" }}>
              Hi! My name is <span className="red-color">Cüneyt Kaya</span>
            </h1>
            <p className="light-color">I'm a Frontend & WordPress Developer.</p>
            <a
              href="#faq"
              className="fs-4 pb-2 pt-2 py-4 px-4 rounded light-bg text-decoration-none dark-color"
            >
              <i className="bi bi-play-circle"></i> SEE MY AD-VIDEO
            </a>
          </div>
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <img src="https://kayacuneyt.com/img/ckfoto-4-lacibg.png" alt="ck" />
        </Col>
      </Row>
    </Container>
  );
};

export default CallToAction;
