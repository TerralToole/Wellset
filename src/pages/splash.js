import "@assets/sass/splash.scss";
import splashImage from './assets/images/splash_1.png';
import {Col, Container, Row} from "react-bootstrap";

function App() {
  return (
    <Container fluid className="bg-dark">
      <Row>
        <Col>
          <img src={splashImage} alt="Splash Logo" className="mx-auto d-block splash-image" />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
