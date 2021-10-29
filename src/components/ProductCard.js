import {
  Card,
  Col,
  Button
} from 'react-bootstrap';
import {
  Link
} from "react-router-dom";

// Image Choices
// "https://source.unsplash.com/random/200x200?sig=" + props.data.id
// props.data.image
// 
export default function ProductCard(props) {
  return (
    <Col sm={6} className="px-3 mb-4">
      <Card border="dark" className="h-100 rounded-3">
        <Card.Img variant="top" src={props.product.image.slice(0,52) + props.product.name.split(' ').join('+')} />
        <Card.Body className="p-2">
          <Col xs={12}>
            <Card.Title 
              as={Link} 
              className="h4 text-dark fw-bold"
              to={"/products/" + props.product.id} 
              style={{ textDecoration: 'none' }}
            >
              {props.product.name}
            </Card.Title>
            <Card.Subtitle className="text-success mt-1 mb-2">
              ${props.product.price + 0.99}
            </Card.Subtitle>
            <Button variant="success" className="px-2 py-0" onClick={() => props.addToCart(props.product)}>Add to Cart</Button>
          </Col>
        </Card.Body>
      </Card>
    </Col>
  )
}
