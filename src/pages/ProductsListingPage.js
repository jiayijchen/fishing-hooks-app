import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import ProductCard from '../components/ProductCard.js';

export default function ProductsListingPage(props) {

  return (
    <Container className="text-center px-0">
      <h3 className="pb-2 pt-3">Products ({props.products.length > 0 ? props.products.length : 0})</h3>
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