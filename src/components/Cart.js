import { useState } from 'react';
import {
  Offcanvas,
  Button,
  Badge
} from 'react-bootstrap';

export default function Cart(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let prices = props.cart.map(product => product.price + 0.99);

  return (
    <>
      <Button variant="info" onClick={handleShow} className="me-2">
        <i class="bi-cart" />{' '}
        <Badge bg="danger" className="py-0 px-1">{props.cart.length > 0 && props.cart.length}</Badge>
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <i class="bi-cart" />
            {' '}Your Cart
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {props.cart.length > 0
            ? props.cart.map((product) => {
              return (
                <div className="d-flex" key={product.id}>
                  <button
                    className="btn"
                    type="button"
                    onClick={() => props.removeFromCart(product)}
                  >
                    <i className="bi-x-lg" />
                  </button>
                  <div className="h3">{product.name}</div>
                  <div className="h3 ms-auto text-success">${product.price + 0.99}</div>
                </div>
              )
            }
            )
            : <h3>No Items in Cart</h3>}
          <div className="h3 mt-5 pt-5 text-end">
            Total:{' '}
            <span className="text-success">
              ${props.cart.length > 0 
                  ? prices.reduce((prev, curr) => prev + curr)
                  : "0.00"}
              </span>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
