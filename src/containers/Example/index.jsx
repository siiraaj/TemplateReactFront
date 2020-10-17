import React from "react";
import { Col, Container, Row } from "reactstrap";
import ClientForm from "../Pages/Parametrage/Tiers/Forms/component/clientForm";

const ExamplePage = () => (
  <Container className="dashboard">
    <Row>
      <Col md={12}>
        <h3 className="page-title">Gestion des clients</h3>
      </Col>
    </Row>
    <Row>
      <ClientForm />
    </Row>
  </Container>
);

export default ExamplePage;
