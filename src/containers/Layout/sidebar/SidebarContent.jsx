import React, { Component } from "react";
import PropTypes from "prop-types";
import SidebarLink from "./SidebarLink";
import SidebarCategory from "./SidebarCategory";

class SidebarContent extends Component {
  static propTypes = {
    changeToDark: PropTypes.func.isRequired,
    changeToLight: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  hideSidebar = () => {
    const { onClick } = this.props;
    onClick();
  };

  render() {
    const { changeToDark, changeToLight } = this.props;
    return (
      <div className="sidebar__content">
        <ul className="sidebar__block">
          <SidebarLink
            title="Se connecter"
            icon="exit"
            route="/log_in"
            onClick={this.hideSidebar}
          />
          <SidebarCategory title="Theme" icon="layers">
            <button
              type="button"
              className="sidebar__link"
              onClick={changeToLight}
            >
              <p className="sidebar__link-title">Light Theme</p>
            </button>
            <button
              type="button"
              className="sidebar__link"
              onClick={changeToDark}
            >
              <p className="sidebar__link-title">Dark Theme</p>
            </button>
          </SidebarCategory>
        </ul>
        <ul className="sidebar__block">
          <SidebarCategory title="Paramétrage" icon="cog">
            <SidebarLink
              title="Tiers"
              route="/api/test/admin"
              onClick={this.hideSidebar}
            />
            <SidebarLink
              title="Sinistre"
              route="/pages/two"
              onClick={this.hideSidebar}
            />
            <SidebarLink
              title="Production"
              route="/pages/two"
              onClick={this.hideSidebar}
            />
            <SidebarLink
              title="Comptabilité"
              route="/pages/two"
              onClick={this.hideSidebar}
            />
          </SidebarCategory>

          <SidebarCategory title="Production" icon="menu-circle">
            <SidebarLink
              title="Gestion des clients"
              route="/pages/two"
              onClick={this.hideSidebar}
            />
            <SidebarLink
              title="Gestion des contrats"
              route="/pages/two"
              onClick={this.hideSidebar}
            />
            <SidebarLink
              title="Gestion des documents"
              route="/pages/two"
              onClick={this.hideSidebar}
            />
          </SidebarCategory>

          <SidebarCategory title="Comptabilité" icon="dice">
            <SidebarLink
              title="Encaissement"
              route="/pages/two"
              onClick={this.hideSidebar}
            />
            <SidebarLink
              title="Prélèvement"
              route="/pages/two"
              onClick={this.hideSidebar}
            />
            <SidebarLink
              title="Relance"
              route="/pages/two"
              onClick={this.hideSidebar}
            />
            <SidebarLink
              title="Réglement"
              route="/pages/two"
              onClick={this.hideSidebar}
            />
            <SidebarLink
              title="Company"
              route="/pages/two"
              onClick={this.hideSidebar}
            />
            <SidebarLink
              title="Virement"
              route="/pages/two"
              onClick={this.hideSidebar}
            />
          </SidebarCategory>
        </ul>
      </div>
    );
  }
}

export default SidebarContent;
