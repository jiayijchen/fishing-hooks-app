import React from 'react';
import { useParams, useHistory } from 'react-router-dom'
import {
  Card,
  Row,
  Col,
  Button,
  Container
} from 'react-bootstrap';

export default function ProductPage(props) {
  const { id } = useParams();
  const history = useHistory();

  const currentProduct = props.products.find(product => product.id.toString() === id);
  console.log(currentProduct);

  const handleBack = () => {
    history.push('/products');
  }

  return (
    <Container fluid className="font-2 mx-0 bg-dark vh-100">
      <Button onClick={handleBack} variant="link" className="text-light">Back to Products</Button>
      <Card className="border border-dark mx-2">
        <Row>
          <Col>
            <Card.Img variant="top" src={currentProduct?.image} />
          </Col>
          <Col>
            <Card.Body className="pt-5">
              <div className="h1 fw-bold">{currentProduct?.name}</div>
              <Card.Title className="h1 text-success">${currentProduct?.price + 0.99}</Card.Title>
              <Card.Text>{currentProduct?.description}</Card.Text>
              <Button variant="success" className="position-absolute bottom-0 end-0 m-3" onClick={() => props.addToCart(currentProduct)}>Add to Cart</Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  )
}
