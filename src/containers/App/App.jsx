import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../../scss/app.scss";
import Router from "./Router";
import store from "./store";
import ScrollToTop from "./ScrollToTop";
import TiersPage from "../Pages/Parametrage/Tiers/index";
import AuthService from "../LogIn/services/auth.service";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showTiersPage: false,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();
    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
    window.addEventListener("load", () => {
      this.setState({ loading: false });
      setTimeout(() => this.setState({ loaded: true }), 500);
    });
  }

  logOut() {
    AuthService.logout();
  }
  render() {
    const { currentUser, showModeratorBoard, showTiersPage } = this.state;

    const { loaded, loading } = this.state;
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ScrollToTop>
            <Fragment>
              {!loaded && (
                <div className={`load${loading ? "" : " loaded"}`}>
                  <div className="load__icon-wrap">
                    <svg className="load__icon">
                      <path
                        fill="#4ce1b6"
                        d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"
                      />
                    </svg>
                  </div>
                </div>
              )}
              <div>
                <Router />
              </div>
            </Fragment>
          </ScrollToTop>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
