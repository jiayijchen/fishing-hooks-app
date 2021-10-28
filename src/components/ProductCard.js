import {
  Card,
  Col,
  Row,
  Button
} from 'react-bootstrap';

// "https://source.unsplash.com/random/200x200?sig=" + props.data.id
export default function ProductCard(props) {
  return (
    <Col sm={6} className="px-2 mb-3">
      <Card border="dark" className="h-100">
        <Card.Img variant="top" src={props.data.image} />
        <Card.Body className="p-2">
          <Col xs={12}>
            <Card.Title>{props.data.name}</Card.Title>
            <Card.Subtitle className="text-success mt-1 mb-2">${props.data.price + 0.99}</Card.Subtitle>
            {/* <Card.Text>{props.data.description}</Card.Text> */}
            <Button variant="dark">Add to Cart</Button>
          </Col>
        </Card.Body>
      </Card>
    </Col>
  )
}
