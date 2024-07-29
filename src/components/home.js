import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap"; // Usa componentes de Bootstrap
import ItemListContainer from "./ItemListContainer"; // Importa el contenedor de lista de elementos

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="hero-section text-center text-light py-5"
        style={{ backgroundColor: "#333", padding: "4rem 0" }}
      >
        <Container>
          <h1 className="display-3">Welcome to My Protein Pro</h1>
          <p className="lead">
            The best place for premium fitness supplements.
          </p>
          <Button variant="warning" size="lg" href="/products">
            Shop Now
          </Button>
        </Container>
      </div>

      {/* Product Highlights */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Featured Products</h2>
        <Row>
          {/* Product 1 */}
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/300"
                alt="Product 1"
              />
              <Card.Body>
                <Card.Title>Product 1</Card.Title>
                <Card.Text>
                  A high-quality supplement to boost your performance.
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
          {/* Product 2 */}
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/300"
                alt="Product 2"
              />
              <Card.Body>
                <Card.Title>Product 2</Card.Title>
                <Card.Text>
                  Enhance your workout with our premium product.
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
          {/* Product 3 */}
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/300"
                alt="Product 3"
              />
              <Card.Body>
                <Card.Title>Product 3</Card.Title>
                <Card.Text>
                  The ultimate choice for your fitness goals.
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* About Us Section */}
      <Container className="my-5">
        <Row>
          <Col md={6}>
            <h2>About Us</h2>
            <p>
              At My Protein Pro, we are dedicated to providing the highest
              quality fitness supplements to help you achieve your goals. Our
              products are carefully selected to ensure that you get the best
              results.
            </p>
          </Col>
          <Col md={6}>
            <img
              src="https://via.placeholder.com/500x300"
              alt="About Us"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>

      {/* Contact Us Section */}
      <Container className="my-5">
        <Row>
          <Col className="text-center">
            <h2>Contact Us</h2>
            <p>
              Have questions? Feel free to reach out to us at{" "}
              <a href="mailto:contact@myproteinpro.com">
                contact@myproteinpro.com
              </a>
              .
            </p>
            <Button variant="warning" href="/contact">
              Contact Us
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;

import './Home.css'; // Importa los estilos personalizados para Home
