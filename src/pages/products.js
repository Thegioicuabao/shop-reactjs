import React from 'react';
import axios from 'axios';
import {
  Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle,  Button
} from 'reactstrap'
import { CartContext } from '../contexts/cart'
class products extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    axios.get('https://c03wq.sse.codesandbox.io/products')
    .then( res => {
      this.setState({
        products: res.data
      })
    })
  }
  render() {
    const { products } = this.state;
    return (
      <Container>
        <Row >
          {
            products.map((product) => (
              <Col className="col-4">
                <Card>
                <CardImg top width="100%" src={product.imageURL} />
                <CardBody>
                <CardTitle>{product.name}</CardTitle>
                  <CardText>{product.description}</CardText>
                  <CartContext.Consumer>
                    {({ addToCart }) => (
                      <Button onClick={() => addToCart(product)}>Add to cart</Button> 
                    )}
                  </CartContext.Consumer>
                </CardBody>
                </Card>
              </Col>
            ))
          }
        </Row>
      </Container>
    );
  }
}

export default products;
