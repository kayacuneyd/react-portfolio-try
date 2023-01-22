import React from "react";
import ContactForm from "../components/ContactForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Contact = () => {
  return (
    <>
      <Container>
        <Row
          className="bg-cover"
          style={{
            backgroundImage:
              "url(" +
              "https://images.pexels.com/photos/33999/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" +
              ")",
          }}
        >
          <Col md={{ span: 6, offset: 3 }}>
            <div className="vh-50 text-center d-flex flex-column align-items-center justify-content-center align-items-center dark-color">
              <h1 className="fs-55">Do you have questions?</h1>
              <h3>Try to use the form below to reach me!</h3>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
