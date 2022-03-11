import "./assets/sass/splash.scss";
import {Container} from "react-bootstrap";
import {Outlet} from "react-router-dom";
// import axios from "axios";

function App() {
  return (
    <>

      <Container>
        <Outlet/>
      </Container>
    </>
  );
}

export default App;
