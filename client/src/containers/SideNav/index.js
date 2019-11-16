import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import SidenavContent from "./SidenavContent";
import {
  COLLAPSED_DRAWER,
  FIXED_DRAWER,
  HORIZONTAL_NAVIGATION
} from "constants/ActionTypes";
import { toggleCollapsedNav, updateWindowWidth } from "actions/Setting";
import "./index.css";

class SideNav extends React.PureComponent {
  onToggleCollapsedNav = e => {
    const val = !this.props.navCollapsed;
    this.props.toggleCollapsedNav(val);
  };

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.props.updateWindowWidth(window.innerWidth);
    });
  }

  render() {
    const { navCollapsed, drawerType, width, navigationStyle } = this.props;
    let drawerStyle = drawerType.includes(FIXED_DRAWER)
      ? "d-xl-flex"
      : drawerType.includes(COLLAPSED_DRAWER)
      ? ""
      : "d-flex";
    let type = "permanent";
    if (
      drawerType.includes(COLLAPSED_DRAWER) ||
      (drawerType.includes(FIXED_DRAWER) && width < 1200)
    ) {
      type = "temporary";
    }

    if (navigationStyle === HORIZONTAL_NAVIGATION) {
      drawerStyle = "";
      type = "temporary";
    }
    return (
      <div className={`app-sidebar d-none ${drawerStyle}`}>
        <Drawer
          className="app-sidebar-content"
          variant={type}
          open={type.includes("temporary") ? navCollapsed : true}
          onClose={this.onToggleCollapsedNav}
          classes={{
            paper: "side-nav"
          }}
        >
          <div className="user-profile d-flex flex-row align-items-center">
            <Link
              id="lNameNavbar"
              className="app-logo mr-2 d-none d-sm-block"
              to="/"
            >
              <img
                src={require("assets/images/logo-transparent2.png")}
                alt="Jambo"
                title="Jambo"
              />
              <span>{" "}H&B Fencing</span>
            </Link>
          </div>
          <SidenavContent />
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = ({ settings }) => {
  const { navCollapsed, drawerType, width, navigationStyle } = settings;
  return { navCollapsed, drawerType, width, navigationStyle };
};

export default withRouter(
  connect(mapStateToProps, { toggleCollapsedNav, updateWindowWidth })(SideNav)
);
