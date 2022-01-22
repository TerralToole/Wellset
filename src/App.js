import "./assets/sass/splash.scss";
import {Col, Container, Row} from "react-bootstrap";
import {
  Outlet
} from "react-router-dom";

function App() {
  return (
    <Container fluid className="bg-dark">
      <Outlet />
    </Container>
  );
}

export default App;
