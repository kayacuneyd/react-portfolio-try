import Accordion from "react-bootstrap/Accordion";

function Comments() {
  return (
    <Accordion
      defaultActiveKey="0"
      flush
      className="vw-50"
      id="dark-bg light-color"
    >
      <Accordion.Item eventKey="0" className="dark-bg">
        <Accordion.Header>Hasret Uğuz - Ergo Thereapie Uğuz</Accordion.Header>
        <Accordion.Body>
          <p className="light-color">
            Excellent work, easy to get what you expect for the purpose of my
            bussiness. Many thanks to Cüneyt!
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className="dark-bg">
        <Accordion.Header>Fatih Kaya - KA Teknoloji</Accordion.Header>
        <Accordion.Body>
          <p className="light-color">
            He's a real professional in his job. Many thanks to him!
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className="dark-bg">
        <Accordion.Header>Nijat Guliyev - Olimpuav </Accordion.Header>
        <Accordion.Body>
          <p className="light-color">
            He's built us exactly what we need for our bussiness. The website
            helps to increase our bussiness income. Best cooperation ever done
            before. Appreciate it!{" "}
          </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Comments;
