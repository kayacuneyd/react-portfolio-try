import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Footer = () => {
  return (
    <Container className="text-center dark-bg fistik-color" fluid>
      <Row className="py-5">
        <Col>
          <h3 className="text-decoration-underline">
            Freelance Web Development
          </h3>
          <img
            src="https://kayacuneyt.com/img/logo-haki.png"
            alt="logo"
            style={{ maxWidth: "100px", marginTop: "10px" }}
          />
        </Col>
        <Col>
          <div>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          </div>
        </Col>
        <Col>
          <ul className="list-unstyled">
            <h3 className="text-decoration-underline">Pages</h3>
            <li>
              <a
                href="/"
                target="_blank"
                className="text-decoration-none fistik-color fs-5"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-decoration-none fistik-color fs-5"
                href="/contact"
                target="_blank"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                className="text-decoration-none fistik-color fs-5"
                href="/about-us"
                target="_blank"
              >
                Contact
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <div>
          <p>
            {" "}
            Developed by{" "}
            <a href="https://kayacuneyt.com" target="_blank" rel="noreferrer">
              Cüneyt Kaya
            </a>{" "}
            - 2023{" "}
          </p>
        </div>
      </Row>
    </Container>
  );
};

export default Footer;
