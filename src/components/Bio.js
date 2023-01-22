import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as Icon from "react-bootstrap-icons";

function Bio() {
  return (
    <Container className="pt-5 pb-5 dark-bg light-color" fluid>
      <Row className="mt-3 mb-3">
        <Col>
          <div>
            <img
              className="rounded"
              src="https://kayacuneyt.com/img/ckfoto-5.png"
              alt="ck foto"
            />
          </div>
        </Col>
        <Col>
          <div>
            <h2>A little about me</h2>
            <p>
              Hi! I'm Cüneyt, a Frontend & WordPress Developer. I've been
              developing websites and webapps for more than 3 years using
              different technologies and tools. I help people to manage people's
              digital presences as well. Here what I can serve & solve the best:
              <br />
              <ul className="list-unstyled">
                <li>
                  {" "}
                  <Icon.Signpost size={20} /> Building all type of website i.e.
                  corporate website, personal/portfolio pages, event/langing
                  pages.{" "}
                </li>
                <li>
                  {" "}
                  <Icon.Signpost size={20} /> Daily and weekly backup services,
                  content production and sharing them.
                </li>
                <li>
                  {" "}
                  <Icon.Signpost size={20} /> Any problem that occurs from your
                  website.
                </li>
              </ul>
            </p>
            <h2>Skills & Education</h2>
            <p>
              I come from social sciences as a profession in general. After the
              graduation from YTU - Political Science and International
              Relations, I started MA Europen Union - Russia Studies at the
              University of Tartu, Estonia in 2018. A few years later, I've
              changed my direction to Germany! Currently I'm doing master in
              History and Culture of the Baltic Sea Region MA program. During my
              education in Estonia, I've started to develop my tech skills by
              the help of my close friends. Since then, I've been building and
              developing my career path in the field of Web Development.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Bio;
