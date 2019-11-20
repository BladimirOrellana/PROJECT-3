import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PublicRoutes from "./PublicRoutes";
import LoggedClientRoutes from './LoggedClientRoutes';
import SellerRoutes from './SellerRoutes';

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

import TopNav from "components/TopNav";

class App extends React.Component {
  render() {
    console.log("SETINGS_______________", this.props.user);
    const { drawerType, navigationStyle, horizontalNavPosition } = this.props;
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
              {(() => {
                if (this.props.user === null) {
                  return <PublicRoutes />;
                } else if (this.props.user.role === "Seller") {
                  return <SellerRoutes />;
                } else if (this.props.user.role === "Client") {
                  return <LoggedClientRoutes />;
                }
              })()}
            </div>
            <Footer />
          </main>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ settings, auth }) => {
  const { user } = auth;
  const { drawerType, navigationStyle, horizontalNavPosition } = settings;
  return {
    drawerType,
    navigationStyle,
    horizontalNavPosition,
    user
  };
};
export default withRouter(connect(mapStateToProps)(App));
