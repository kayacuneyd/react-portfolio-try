import React from "react";
import Row from "react-bootstrap/Row";
import Footer from "../components/footer";
import Header from "../components/header";

const NoPage = () => {
  return (
    <>
      <Header />

      <Row>
        <h2>Eror 404 Page Not Found</h2>
      </Row>

      <Footer />
    </>
  );
};

export default NoPage;
