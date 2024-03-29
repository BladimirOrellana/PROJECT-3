import React from "react";
import { connect } from "react-redux";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { userSignOut } from "actions/Auth";
import IntlMessages from "util/IntlMessages";
import "./index.css";
import SignIn from "containers/SignIn";
import { NavLink, Link } from "react-router-dom";

class UserInfo extends React.Component {
  state = {
    anchorEl: null,
    open: false
  };

  // componentDidMount() {  }

  handleClick = event => {
    if (this.props.authUser) {
      this.setState({ open: true, anchorEl: event.currentTarget });
    }
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {
    console.log("USER INFO HB ", this.props);
    return (
      <div className="user-profile d-flex flex-row align-items-center">
        <div className="user-detail">
          <h4 className="user-name" onClick={this.handleClick}>
            {!this.props.authUser ? (
              <Link to="/signin"> SignIn </Link>
            ) : this.props.user ? (
              this.props.user.name
            ) : (
              "Robert B"
            )}
            {this.props.authUser ? (
              <i className="zmdi zmdi-caret-down zmdi-hc-fw align-middle" />
            ) : (
              <Link to="/signup"> SignUp </Link>
            )}
          </h4>
        </div>
        <Menu
          className="user-info"
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onClose={this.handleRequestClose}
          PaperProps={{
            style: {
              minWidth: 120,
              paddingTop: 0,
              paddingBottom: 0
            }
          }}
        >
          {/*  <MenuItem onClick={this.handleRequestClose}>
           
         
              <NavLink to="/app/profile">
              <i className="zmdi zmdi-account zmdi-hc-fw mr-2" />
                <span className="nav-text  side-nav-icons">
                  Profile
                </span>
              </NavLink>
           
          </MenuItem>
          <MenuItem onClick={this.handleRequestClose}>
            <i className="zmdi zmdi-settings zmdi-hc-fw mr-2" />
            <IntlMessages id="popup.setting" />
          </MenuItem> */}
          <MenuItem
            onClick={() => {
              this.handleRequestClose();
              this.props.userSignOut();
            }}
          >
            <i className="zmdi zmdi-sign-in zmdi-hc-fw mr-2" />

            <IntlMessages id="popup.logout" />
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = ({ settings, auth }) => {
  const { locale } = settings;
  const { authUser, initURL, user } = auth;
  return { locale, authUser, initURL, user };
};
export default connect(mapStateToProps, { userSignOut })(UserInfo);
