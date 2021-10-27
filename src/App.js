import './App.css';
import {
  Navbar,
  Container,
  Nav
} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from "./components/pages/HomePage.js"

function App() {
  return (
    <Router>
      <div className="">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img
                alt=""
                src="./fishing.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              a<span style={{ color: "#41e0fd" }}>fishing</span>store
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/products">Products</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/products">
            {/* <About /> */}
          </Route>
          <Route path="/contact">
            {/* <Users /> */}
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
