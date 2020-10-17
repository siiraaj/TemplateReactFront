import React, { Component } from "react";
import {
  Card,
  CardBody,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Button,
  ButtonToolbar,
} from "reactstrap";
import classnames from "classnames";
import { Field, reduxForm } from "redux-form";

import { withTranslation } from "react-i18next";
import PropTypes from "prop-types";
import renderRadioButtonField from "../../../../../../shared/components/form/RadioButton";
import renderSelectField from "../../../../../../shared/components/form/Select";
import OnlyForm from "./OnlyForm";

class ClientForm extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      activeTab: "1",
    };
  }

  toggle = (tab) => {
    const { activeTab } = this.state;
    if (activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  };

  render() {
    const { t } = this.props;
    const { activeTab } = this.state;

    return (
      <Col md={12}>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">Formulaire de gestion des clients</h5>
              <h5 className="subhead">Description du formulaire</h5>
            </div>
            <div className="tabs tabs--vertical">
              <div className="tabs__wrap">
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === "1" })}
                      onClick={() => {
                        this.toggle("1");
                      }}
                    >
                      Coordonnées
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === "2" })}
                      onClick={() => {
                        this.toggle("2");
                      }}
                    >
                      Contacts
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === "3" })}
                      onClick={() => {
                        this.toggle("3");
                      }}
                    >
                      RIB/IBAN
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === "4" })}
                      onClick={() => {
                        this.toggle("4");
                      }}
                    >
                      Bloc notes
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <p>
                      Direction has strangers now believing. Respect enjoyed gay
                      far exposed parlors towards. Enjoyment use tolerably
                      dependent listening men. No peculiar in handsome together
                      unlocked do by.
                    </p>
                    <row>
                      <OnlyForm></OnlyForm>
                    </row>
                  </TabPane>
                  <TabPane tabId="2">
                    <p>
                      Direction has strangers now believing. Respect enjoyed gay
                      far exposed parlors towards. Enjoyment use tolerably
                      dependent listening men. No peculiar in handsome together
                      unlocked do by.
                    </p>
                  </TabPane>
                  <TabPane tabId="3">
                    <p>
                      Direction has strangers now believing. Respect enjoyed gay
                      far exposed parlors towards. Enjoyment use tolerably
                      dependent listening men. No peculiar in handsome together
                      unlocked do by.
                    </p>
                  </TabPane>
                  <TabPane tabId="4">
                    <p>
                      Direction has strangers now believing. Respect enjoyed gay
                      far exposed parlors towards. Enjoyment use tolerably
                      dependent listening men. No peculiar in handsome together
                      unlocked do by. Article concern joy anxious did picture
                      sir her.
                    </p>
                  </TabPane>
                </TabContent>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default withTranslation("common")(ClientForm);
