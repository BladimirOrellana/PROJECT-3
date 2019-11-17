import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import fireBaseCredentials from "./../firebase/firebasekey";

import Header from "components/Header/index";
import Sidebar from "containers/SideNav/index";
import Footer from "components/Footer";
import Tour from "../components/Tour/index";
import {
  ABOVE_THE_HEADER,
  BELOW_THE_HEADER,
  COLLAPSED_DRAWER,
  FIXED_DRAWER,
  HORIZONTAL_NAVIGATION
} from "constants/ActionTypes";
import { isIOS, isMobile } from "react-device-detect";
import asyncComponent from "../util/asyncComponent";
import TopNav from "components/TopNav";

class App extends React.Component {
  render() {
    const {
      match,
      drawerType,
      navigationStyle,
      horizontalNavPosition
    } = this.props;
    const drawerStyle = drawerType.includes(FIXED_DRAWER)
      ? "fixed-drawer"
      : drawerType.includes(COLLAPSED_DRAWER)
      ? "collapsible-drawer"
      : "mini-drawer";

    //set default height and overflow for iOS mobile Safari 10+ support.
    if (isIOS && isMobile) {
      document.body.classList.add("ios-mobile-view-height");
    } else if (document.body.classList.contains("ios-mobile-view-height")) {
      document.body.classList.remove("ios-mobile-view-height");
    }

    return (
      <div className={`app-container ${drawerStyle}`}>
        <Tour />

        <Sidebar />
        <div className="app-main-container">
          <div
            className={`app-header ${
              navigationStyle === HORIZONTAL_NAVIGATION
                ? "app-header-horizontal"
                : ""
            }`}
          >
            {navigationStyle === HORIZONTAL_NAVIGATION &&
              horizontalNavPosition === ABOVE_THE_HEADER && (
                <TopNav styleName="app-top-header" />
              )}
            <Header />
            {navigationStyle === HORIZONTAL_NAVIGATION &&
              horizontalNavPosition === BELOW_THE_HEADER && <TopNav />}
          </div>

          <main className="app-main-content-wrapper">
            <div className="app-main-content">
              <Switch>
                <Route
                  path={`${match.url}/home`}
                  component={asyncComponent(() =>
                    import("./routes/public/Home")
                  )}
                />
                
                <Route
                  path={`${match.url}/contact`}
                  component={asyncComponent(() =>
                    import("./routes/public/Contact")
                  )}
                />
                <Route
                  path={`${match.url}/get-a-free-quote`}
                  component={asyncComponent(() =>
                    import("./routes/public/Get-a-free-quote")
                  )}
                />
                <Route
                  path={`${match.url}/about`}
                  component={asyncComponent(() =>
                    import("./routes/public/About")
                  )}
                />
                <Route
                  path={`${match.url}/reviews`}
                  component={asyncComponent(() =>
                    import("./routes/public/Reviews")
                  )}
                />
                <Route
                  path={`${match.url}/your-quote`}
                  component={asyncComponent(() =>
                    import("./routes/private/Client-view/your-quotes")
                  )}
                />

                <Route
                  path={`${match.url}/add-seller`}
                  component={asyncComponent(() =>
                    import("./routes/private/admin-view/Add-seller")
                  )}
                />
                <Route
                  path={`${match.url}/active-projects`}
                  component={asyncComponent(() =>
                    import("./routes/private/Seller-view/Active-projects")
                  )}
                />
                <Route
                  path={`${match.url}/add-material-to-project`}
                  component={asyncComponent(() =>
                    import(
                      "./routes/private/Seller-view/Add-material-to-project"
                    )
                  )}
                />
                <Route
                  path={`${match.url}/add-miscellanious`}
                  component={asyncComponent(() =>
                    import("./routes/private/Seller-view/Add-miscellaneous")
                  )}
                />
                <Route
                  path={`${match.url}/all-quotes`}
                  component={asyncComponent(() =>
                    import("./routes/private/Seller-view/All-quotes")
                  )}
                />
                <Route
                  path={`${match.url}/confirmed-project`}
                  component={asyncComponent(() =>
                    import("./routes/private/Seller-view/Confirmed-proyects")
                  )}
                />
                <Route
                  path={`${match.url}/finished-project`}
                  component={asyncComponent(() =>
                    import("./routes/private/Seller-view/Finished-projects")
                  )}
                />
                <Route
                  path={`${match.url}/raw-material`}
                  component={asyncComponent(() =>
                    import("./routes/private/Seller-view/Raw-material")
                  )}
                />

                <Route
                  component={asyncComponent(() =>
                    import("components/Error404")
                  )}
                />
              </Switch>
            </div>
            <Footer />
          </main>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ settings }) => {
  const { drawerType, navigationStyle, horizontalNavPosition } = settings;
  return { drawerType, navigationStyle, horizontalNavPosition };
};
export default withRouter(connect(mapStateToProps)(App));
