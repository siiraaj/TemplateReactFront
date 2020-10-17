import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import { useHistory } from "react-router-dom";

const URL_TIERS = `/api/test/admin/clientform`;

function GCompagnyCard() {
  const history = useHistory();
  const routeChange = () => {
    let path = URL_TIERS;
    history.push(path);
  };

  return (
    <Col md={3}>
      <div onClick={routeChange}>
        <Card>
          <CardBody className="card-border card-border--warning">
            <div className="card__title">
              <h4 className="bold-text">Gestion des company</h4>
              <h4 className="subhead">Description</h4>
              <p> content de compagny here</p>
            </div>
          </CardBody>
        </Card>
      </div>
    </Col>
  );
}

export default GCompagnyCard;
