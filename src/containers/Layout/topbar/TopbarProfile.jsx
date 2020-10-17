import React, { PureComponent } from "react";
import DownIcon from "mdi-react/ChevronDownIcon";
import { Collapse } from "reactstrap";
import TopbarMenuLink from "./TopbarMenuLink";
import AuthService from "../../LogIn/services/auth.service";

const Ava = `${process.env.PUBLIC_URL}/img/ava.png`;

export default class TopbarProfile extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      userReady: false,
      currentUser: { username: "" },
      redirect: null,
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/" });
    this.setState({ currentUser: currentUser, userReady: true });
  }

  logOut() {
    AuthService.logout();
  }

  toggle = () => {
    this.setState((prevState) => ({ collapse: !prevState.collapse }));
  };

  render() {
    const { collapse } = this.state;
    const { currentUser } = this.state;

    return (
      <div className="topbar__profile">
        <button type="button" className="topbar__avatar" onClick={this.toggle}>
          <img className="topbar__avatar-img" src={Ava} alt="avatar" />
          <p className="topbar__avatar-name">siraj@gmail.com</p>
          <DownIcon className="topbar__icon" />
        </button>
        {collapse && (
          <button
            type="button"
            className="topbar__back"
            onClick={this.toggle}
          />
        )}
        <Collapse isOpen={collapse} className="topbar__menu-wrap">
          <div className="topbar__menu">
            <TopbarMenuLink title="Page one" icon="list" path="/pages/one" />
            <TopbarMenuLink title="Page two" icon="inbox" path="/pages/two" />
            <div className="topbar__menu-divider" />
            <TopbarMenuLink
              title="Se deconnecter"
              icon="exit"
              path="/"
              onClick={this.logOut}
            />
          </div>
        </Collapse>
      </div>
    );
  }
}
