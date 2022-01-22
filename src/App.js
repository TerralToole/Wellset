import "./assets/sass/splash.scss";
import {Container} from "react-bootstrap";
import {
  Outlet
} from "react-router-dom";
import MainNav from "./components/MainNav";

function App() {
  return (
    <>
      <MainNav/>
      <Container>
        <Outlet/>
      </Container>
    </>
  );
}

export default App;
