import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import TiersCard from "./component/Tiers";
import GClientCard from "./component/gestion_clients";
import GCompagnyCard from "./component/gestion_compagny";
import GEntiteCard from "./component/gestion_entites";
import GExpressCard from "./component/gestion_express";
import GGarageCard from "./component/gestion_garages";
import UserService from "../../../LogIn/services/user.service";
import Alert from "../../../../shared/Alert";

const authorization = ["Forbidden", "Error: Unauthorized"];
export default class TiersPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
    };
  }

  componentDidMount() {
    UserService.getAdminBoard().then(
      (response) => {
        this.setState({
          content: response.data,
        });
      },
      (error) => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString(),
        });
      }
    );
  }

  render() {
    let isAdmin = this.state.content;
    console.log("--------------------------------------->" + isAdmin);
    if (!authorization.includes(isAdmin)) {
      return (
        <Container className="dashboard">
          <div className="container">
            <Alert color="success">
              <p>
                <span className="bold-text">Information:</span>{" "}
                {this.state.content}
              </p>
            </Alert>
          </div>
          <Row>
            <Col md={12}>
              <h3 className="page-title">Tiers</h3>
            </Col>
          </Row>
          <Row>
            <GClientCard />
            <GCompagnyCard />
            <GEntiteCard />
            <GExpressCard />
            <GGarageCard />
          </Row>
        </Container>
      );
    } else {
      return (
        <Container className="dashboard">
          <div className="container">
            <Alert color="danger">
              <p>
                <span className="bold-text">Accès au dashboard:</span>{" "}
                {this.state.content}
              </p>
            </Alert>
          </div>
        </Container>
      );
    }
  }
}
