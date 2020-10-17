import React from "react";
import {
  Card,
  CardBody,
  Col,
  ButtonToolbar,
  Button,
  ButtonGroup,
} from "reactstrap";

const TiersCard = () => (
  <Col md={3}>
    <Card>
      <CardBody className="dashboard__card-widget">
        <div className="card__title">
          <h4 className="bold-text">Gestion des compagny</h4>
          <h4 className="subhead">Description</h4>
          <p> content de compagny here</p>
          <ButtonToolbar>
            <ButtonGroup className="btn-group--justified">
              <Button color="primary" href="#">
                Accéder
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div>
      </CardBody>
    </Card>
  </Col>
);

export default TiersCard;
