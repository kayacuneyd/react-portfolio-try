import React from "react";
import Bio from "../components/Bio";
import Comments from "../components/Comments";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AboutUs = () => {
  return (
    <>
      <Container fluid>
        <Row className="fistik-bg vh-50 dark-color">
          <div className="d-flex justify-content-flex-start align-items-center">
            <h1 className="fs-8">Who is Cüneyt?</h1>
          </div>
          <div className="border-bottom border-5 border-opacity-25 vw-50 d-flex justify-content-flex-start align-items-center"></div>
          <div className="d-flex justify-content-flex-start align-items-center">
            <p className="fs-2">
              I create websites and their designs with effetive strategies to
              appeal to your audience.
            </p>
          </div>
        </Row>
        <Row>
          <Bio />
        </Row>
        <Row className=" fistik-bg dark-color pt-3 pb-3">
          <Col className="text-center vh-50 d-flex justify-content-center align-items-center">
            <div>
              <h1>What people are saying</h1>
              <p>Here you can find comments from some of my older customers.</p>
            </div>
          </Col>
          <Col className="text-center vh-50 d-flex justify-content-center align-items-center">
            <Comments />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutUs;
