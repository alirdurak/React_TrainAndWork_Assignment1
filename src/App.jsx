import "./App.css";
import Header from "./compponents/layout/header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";

// eslint-disable-next-line react/prop-types
function App({ children }) {
  return (
    <Container style={{ width: "100%", height: "100%" }} fluid>
      <Header></Header>
      {children}
    </Container>
  );
}

export default App;
