import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as Icon from "react-bootstrap-icons";

function Facts() {
  return (
    <Container className="pt-5 pb-5 dark-bg light-color" fluid>
      <Row className="text-center mt-3 mb-3">
        <Col>
          <h1>Fun facts about my works</h1>
        </Col>
      </Row>
      <Row className="text-center mt-3 mb-3">
        <Col>
          <div>
            <Icon.Gem className="red-color m-3" size={60} />

            <h4>3+ Experiences</h4>
          </div>
        </Col>
        <Col>
          <div>
            <Icon.BalloonHeart className="red-color m-3" size={60} />
            <h4>70+ Happy Customer</h4>
          </div>
        </Col>
        <Col>
          <div>
            <Icon.CheckCircle className="red-color m-3" size={60} />
            <h4>50+ Project Completed!</h4>
          </div>
        </Col>
        <Col>
          <div>
            <Icon.Regex className="red-color m-3" size={60} />
            <h4>750+ Code Written!</h4>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Facts;
