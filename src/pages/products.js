import React from 'react';
import {
  Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap'
class products extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [{
        "id": "ec710e19-b67d-4557-a2a5-9ae6475b2707",
        "name": "Tomato - Peeled Italian Canned",
        "description": "nisl duis bibendum felis sed interdum venenatis turpis enim blandit",
        "imageURL": "http://dummyimage.com/200x150.jpg/5fa2dd/ffffff"
      }, {
        "id": "d4079024-c8e6-4189-903a-76f47a781222",
        "name": "Nestea - Iced Tea",
        "description": "turpis elementum ligula vehicula consequat morbi a ipsum integer a",
        "imageURL": "http://dummyimage.com/200x150.jpg/cc0000/ffffff"
      }, {
        "id": "3b1d61fd-b09f-4f3e-a452-3180f30ef275",
        "name": "Relish",
        "description": "posuere cubilia curae nulla dapibus dolor vel est donec odio",
        "imageURL": "http://dummyimage.com/200x150.jpg/dddddd/000000"
      }, {
        "id": "6bfa0d1e-fc41-4fe7-bde6-d893f7894655",
        "name": "Ham - Virginia",
        "description": "bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt",
        "imageURL": "http://dummyimage.com/200x150.jpg/5fa2dd/ffffff"
      }, {
        "id": "8aa237c1-3ee4-41b2-87c7-3fc8bef701d9",
        "name": "Food Colouring - Pink",
        "description": "sed vestibulum sit amet cursus id turpis integer aliquet massa",
        "imageURL": "http://dummyimage.com/200x150.jpg/5fa2dd/ffffff"
      }, {
        "id": "75cd2fc8-8c45-47ca-b0cf-58e7ad0dfc0f",
        "name": "Coke - Diet, 355 Ml",
        "description": "vel lectus in quam fringilla rhoncus mauris enim leo rhoncus",
        "imageURL": "http://dummyimage.com/200x150.jpg/cc0000/ffffff"
      }, {
        "id": "cef731c0-f77b-4cbf-9137-5b86d13a04f1",
        "name": "Napkin White - Starched",
        "description": "justo in blandit ultrices enim lorem ipsum dolor sit amet",
        "imageURL": "http://dummyimage.com/200x150.jpg/cc0000/ffffff"
      }, {
        "id": "bf0dc171-48aa-4cdc-887c-be813ae35e63",
        "name": "Pike - Frozen Fillet",
        "description": "eget tempus vel pede morbi porttitor lorem id ligula suspendisse",
        "imageURL": "http://dummyimage.com/200x150.jpg/dddddd/000000"
      }, {
        "id": "b7263f52-58a6-473b-a544-d36d380240ef",
        "name": "Rabbit - Legs",
        "description": "felis sed interdum venenatis turpis enim blandit mi in porttitor",
        "imageURL": "http://dummyimage.com/200x150.jpg/ff4444/ffffff"
      }, {
        "id": "d8bb6d1c-8314-43ce-a546-3468af1ccad7",
        "name": "Energy Drink - Franks Pineapple",
        "description": "morbi non quam nec dui luctus rutrum nulla tellus in",
        "imageURL": "http://dummyimage.com/200x150.jpg/cc0000/ffffff"
      }, {
        "id": "84c51517-38c5-4c30-aed4-b54f251ef762",
        "name": "Chocolate - Sugar Free Semi Choc",
        "description": "nulla ac enim in tempor turpis nec euismod scelerisque quam",
        "imageURL": "http://dummyimage.com/200x150.jpg/5fa2dd/ffffff"
      }, {
        "id": "fa035b3c-39bf-4ff2-a8b6-fe088bafd3c3",
        "name": "Pork Casing",
        "description": "hac habitasse platea dictumst maecenas ut massa quis augue luctus",
        "imageURL": "http://dummyimage.com/200x150.jpg/cc0000/ffffff"
      }, {
        "id": "a9e75d62-d764-4856-89dd-9d8d51ead3ba",
        "name": "The Pop Shoppe - Lime Rickey",
        "description": "ullamcorper augue a suscipit nulla elit ac nulla sed vel",
        "imageURL": "http://dummyimage.com/200x150.jpg/ff4444/ffffff"
      }, {
        "id": "f832fea5-6353-4054-ab33-41894755c66d",
        "name": "Bread - Italian Sesame Poly",
        "description": "donec dapibus duis at velit eu est congue elementum in",
        "imageURL": "http://dummyimage.com/200x150.jpg/dddddd/000000"
      }, {
        "id": "a706397c-3726-4001-b5a5-3a67ccf71f77",
        "name": "Sping Loaded Cup Dispenser",
        "description": "a odio in hac habitasse platea dictumst maecenas ut massa",
        "imageURL": "http://dummyimage.com/200x150.jpg/dddddd/000000"
      }]
    }
  }
  render() {
    const { products } = this.state;
    return (
      <Container>
        <Row >
          {
            products.map(product => (
              <Col className="col-4">
                <Card>
                <CardImg top width="100%" src={product.imageURL} alt="Card image cap" />
                <CardBody>
                <CardTitle>{product.name}</CardTitle>
                  <CardText>{product.description}</CardText>
                  <Button>Add to cart</Button>
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
