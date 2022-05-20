import "bootstrap/dist/css/bootstrap.min.css";

import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";

const Header = () => {
  return (
    <div>
      {/* <Container>
        <Row>
          <Col>1 of 1</Col>
        </Row>
      </Container> */}
      {/* <Container> */}
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Getting Started</Nav.Link>
          <Nav.Link href="#pricing">Components</Nav.Link>
        </Nav>
        <Form inline>

          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
      {/* </Container> */}
    </div>
  );
};
export default Header;
