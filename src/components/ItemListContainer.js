// src/components/ItemListContainer.js
import React from "react";
import { Container, Row, Col, Alert } from "react-bootstrap"; // Usa componentes de Bootstrap

const ItemListContainer = ({ greeting }) => {
  return (
    <Container className="my-4">
      <Row>
        <Col>
          <Alert variant="info">{greeting}</Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemListContainer;
