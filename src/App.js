import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Navbar,
  Nav
} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import ProductsListingPage from "./pages/ProductsListingPage.js";
import ProductPage from "./pages/ProductPage.js";
import Cart from "./components/Cart.js"

function App() {
  const [productsData, setProductsData] = useState({});
  const [cart, setCart] = useState([]);

  async function getProducts() {
    // const productsURL = "https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/store/products";

    try {
      // const response = await axios.get(productsURL);
      const response = await axios.get('products.json');
      setProductsData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProducts();
    console.log(cart);
  }, []);

  useEffect(() => {
    console.log(cart);
  });

  function addToCart(product) {
    setCart([...cart, product]);
  }

  function removeFromCart(product) {
    let foundIndex = cart.findIndex(productInCart =>  productInCart.id === product.id);
    let newArr = cart;
    newArr.splice(foundIndex, 1);

    setCart(newArr);
  }

  return (
    <Router>
      <Navbar bg="dark" variant="dark">
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
        <Nav className="me-auto font-2">
          <Nav.Link as={Link} to="/" exact>Home</Nav.Link>
          <Nav.Link as={Link} to="/products" exact>Products</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
        <Cart cart={cart} removeFromCart={removeFromCart} />
        {/* <Button variant="info" onClick={handleShow} className="me-2">
          <i class="bi-cart" />{' '}
          <Badge bg="danger" className="py-0 px-1">{cart.length > 0 && cart.length}</Badge>
        </Button> */}
      </Navbar>
      <Switch>
        <Route path="/products/:id">
          <ProductPage products={productsData} cart={cart} addToCart={addToCart} />
        </Route>
        <Route path="/products">
          <ProductsListingPage products={productsData} cart={cart} addToCart={addToCart} />
        </Route>
        <Route path="/contact">
          {/* <Users /> */}
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
