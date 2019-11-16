import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import {
  BELOW_THE_HEADER,
  COLLAPSED_DRAWER,
  FIXED_DRAWER,
  HORIZONTAL_NAVIGATION,
  INSIDE_THE_HEADER
} from "constants/ActionTypes";
import SearchBox from "components/SearchBox";
import MailNotification from "../MailNotification/index";
import AppNotification from "../AppNotification/index";
import CardHeader from "components/dashboard/Common/CardHeader/index";
import { switchLanguage, toggleCollapsedNav } from "actions/Setting";
import IntlMessages from "util/IntlMessages";
import LanguageSwitcher from "components/LanguageSwitcher/index";
import Menu from "components/TopNav/Menu";
import UserInfoPopup from "components/UserInfo/UserInfoPopup";
import UserInfo from 'components/UserInfo';

class Header extends React.Component {
  onAppNotificationSelect = () => {
    this.setState({
      appNotification: !this.state.appNotification
    });
  };
  onMailNotificationSelect = () => {
    this.setState({
      mailNotification: !this.state.mailNotification
    });
  };
  onLangSwitcherSelect = event => {
    this.setState({
      langSwitcher: !this.state.langSwitcher,
      anchorEl: event.currentTarget
    });
  };
  onSearchBoxSelect = () => {
    this.setState({
      searchBox: !this.state.searchBox
    });
  };
  onAppsSelect = () => {
    this.setState({
      apps: !this.state.apps
    });
  };
  onUserInfoSelect = () => {
    this.setState({
      userInfo: !this.state.userInfo
    });
  };
  handleRequestClose = () => {
    this.setState({
      langSwitcher: false,
      userInfo: false,
      mailNotification: false,
      appNotification: false,
      searchBox: false,
      apps: false
    });
  };
  onToggleCollapsedNav = e => {
    const val = !this.props.navCollapsed;
    this.props.toggleCollapsedNav(val);
  };

  constructor() {
    super();
    this.state = {
      anchorEl: undefined,
      searchBox: false,
      searchText: "",
      mailNotification: false,
      userInfo: false,
      langSwitcher: false,
      appNotification: false
    };
  }

  updateSearchText(evt) {
    this.setState({
      searchText: evt.target.value
    });
  }

  render() {
    console.log("State ", this.state);
    const {
      drawerType,
      locale,
      navigationStyle,
      horizontalNavPosition
    } = this.props;
    const drawerStyle = drawerType.includes(FIXED_DRAWER)
      ? "d-block d-xl-none"
      : drawerType.includes(COLLAPSED_DRAWER)
      ? "d-block"
      : "d-none";

    return (
      <AppBar
        className={`app-main-header ${
          navigationStyle === HORIZONTAL_NAVIGATION &&
          horizontalNavPosition === BELOW_THE_HEADER
            ? "app-main-header-top"
            : ""
        }`}
      >
        <Toolbar className="app-toolbar" disableGutters={false}>
          {navigationStyle === HORIZONTAL_NAVIGATION ? (
            <div
              className="d-block d-md-none pointer mr-3"
              onClick={this.onToggleCollapsedNav}
            >
              <span className="jr-menu-icon">
                <span className="menu-icon" />
              </span>
            </div>
          ) : (
            <IconButton
              className={`jr-menu-icon mr-3 ${drawerStyle}`}
              aria-label="Menu"
              onClick={this.onToggleCollapsedNav}
            >
              <span className="menu-icon" />
            </IconButton>
          )}

          {/* <Link className="app-logo mr-2 d-none d-sm-block" to="/">
            <img
              src={require("assets/images/logo-transparent2.png")}
              alt="Jambo"
              title="Jambo"
            />
          </Link> */}

          {navigationStyle === HORIZONTAL_NAVIGATION &&
            horizontalNavPosition === INSIDE_THE_HEADER && <Menu />}
          
          <ul className="header-notifications list-inline ml-auto">
            <li className="list-inline-item">
            <UserInfo/>
            </li>
          </ul>

          <div className="ellipse-shape"></div>
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = ({ settings }) => {
  const {
    drawerType,
    locale,
    navigationStyle,
    horizontalNavPosition
  } = settings;
  return { drawerType, locale, navigationStyle, horizontalNavPosition };
};

export default withRouter(
  connect(mapStateToProps, { toggleCollapsedNav, switchLanguage })(Header)
);
