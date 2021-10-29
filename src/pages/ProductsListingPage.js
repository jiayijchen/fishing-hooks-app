import {
  Container,
  Row,
} from 'react-bootstrap';
import ProductCard from '../components/ProductCard.js';

export default function ProductsListingPage(props) {

  return (
    <Container fluid className="p-0 font-1 bg-dark">
      <h5 className="text-center pb-2 pt-3 fw-bold text-light">
        Products ({props.products.length > 0 ? props.products.length : 0})
      </h5>
      <Row className="mx-3">
        {props.products.length > 0
          ? props.products.map((product) => {
            return (
              <ProductCard key={product.id} product={product} addToCart={props.addToCart}/>
            )
          })
          : console.log("Loading data...")
        }
      </Row>
    </Container>
  )
}