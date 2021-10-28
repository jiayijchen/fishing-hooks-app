import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import ProductCard from '../components/ProductCard.js';

export default function ProductsPage(props) {

  return (
    <Container className="text-center">
      <h1>Products ({props.products.length})</h1>
      <Row className="mx-3">
        {props.products.length > 0
          ? props.products.map((product) => {
            return (
              <ProductCard key={product.id} data={product} />
            )
          })
          : console.log("Loading data...")
        }
      </Row>
    </Container>
  )
}