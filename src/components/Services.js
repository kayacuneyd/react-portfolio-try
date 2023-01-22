import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as Icon from "react-bootstrap-icons";

function Services() {
  return (
    <Container className="pt-5 pb-5 fistik-bg dark-color" fluid>
      <Row className="text-center mt-3 mb-3">
        <Col>
          <h1>What I do the best</h1>
          <p>Here is a quick list of services I can give you!</p>
        </Col>
      </Row>
      <Row className="text-center mt-3 mb-3">
        <Col>
          <div>
            <Icon.CodeSquare className="red-color m-3" size={60} />
            <h2>Website Development</h2>
            <p>
              If you need a website for your profession or bussiness from
              scratch or re-develop your existing one, I make it happen!
            </p>
          </div>
        </Col>
        <Col>
          <div>
            <Icon.Gear className="red-color m-3" size={60} />
            <h2>Maintenance</h2>
            <p>
              If your website need a fixation, just drop me a message. Then we
              arrange the time and conditions to solve it!
            </p>
          </div>
        </Col>
        <Col>
          <div>
            <Icon.Award className="red-color m-3" size={60} />
            <h2>Management</h2>
            <p>
              No matter blog websites or an ordinary company webpages always
              need constantly check & backup job. Here to help you!
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;
