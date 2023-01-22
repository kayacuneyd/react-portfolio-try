import { Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./pages/about-us";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Header />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="about-us" element={<About />}></Route>
              <Route path="contact" element={<Contact />}></Route>
            </Routes>
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
