import React from "react";
import {
  Card,
  CardBody,
  Col,
  ButtonToolbar,
  Button,
  ButtonGroup,
} from "reactstrap";

const GEntiteCard = () => (
  <Col md={3}>
    <Card>
      <CardBody className="card-border card-border--info">
        <div className="card__title">
          <h4 className="bold-text">Gestion des entités</h4>
          <h4 className="subhead">Description</h4>
          <p> content de Tiers here</p>
        </div>
      </CardBody>
    </Card>
  </Col>
);

export default GEntiteCard;
