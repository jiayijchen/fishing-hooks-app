import { useState, useEffect } from 'react';
import axios from 'axios';
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
import HomePage from "./pages/HomePage.js";
import ProductsPage from "./pages/ProductsPage.js";

function App() {
  const [productsData, setProductsData] = useState({});

  async function getProducts() {
    const productsURL = "https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/store/products";

    try {
      const response = await axios.get(productsURL);
      console.log(response.data);
      setProductsData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container className="mx-0">
          {/* <Navbar.Brand as={Link} to="/">
            <img
              alt=""
              src="./fishing.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
                        a<span style={{ color: "#41e0fd" }}>fishing</span>store
                    </Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Switch>
        <Route path="/products">
          <ProductsPage products={productsData}/>
        </Route>
        <Route path="/contact">
          {/* <Users /> */}
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
