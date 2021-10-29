import {
  Button
} from 'react-bootstrap';
import {
  Link
} from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="bg-dark vh-100 vw-100 text-center alight-items-center">
      <div className="display-1 text-light centered">
        <img
          alt=""
          src="./fishing.svg"
          width="100"
          height="100"
          className="d-inline-block"
        />
        {' '}a<span style={{ color: "#41e0fd" }}>fishing</span>store
        <Button as={Link} to='/products' variant="info" className="text-light">Go to Products</Button>
      </div>
    </div>
  )
}