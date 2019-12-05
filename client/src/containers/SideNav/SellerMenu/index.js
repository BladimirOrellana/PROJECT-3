import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import IntlMessages from "util/IntlMessages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faIdCardAlt,
  faStar,
  faFolderMinus,
  faUserPlus,
  faCartPlus,
  faPlusSquare,
  faFileArchive,
  faCheckCircle,
  faListAlt,
  faWarehouse,
  faBullseye
} from "@fortawesome/free-solid-svg-icons";
import CustomScrollbars from "util/CustomScrollbars";
import { connect } from "react-redux";
import * as action from "./../../../actions";

class SellerMenu extends Component {
  componentDidMount() {
    const { history } = this.props;
    const that = this;
    const pathname = `${history.location.pathname}`; // get current path

    const menuLi = document.getElementsByClassName("menu");
    for (let i = 0; i < menuLi.length; i++) {
      menuLi[i].onclick = function(event) {
        const parentLiEle = that.closest(this, "li");
        if (menuLi[i].classList.contains("menu") && parentLiEle !== null) {
          event.stopPropagation();

          if (menuLi[i].classList.contains("open")) {
            menuLi[i].classList.remove("open", "active");
          } else {
            menuLi[i].classList.add("open", "active");
          }
        } else {
          for (let j = 0; j < menuLi.length; j++) {
            const parentLi = that.closest(this, "li");
            if (
              menuLi[j] !== this &&
              (parentLi === null || !parentLi.classList.contains("open"))
            ) {
              menuLi[j].classList.remove("open");
            } else {
              if (menuLi[j].classList.contains("open")) {
                menuLi[j].classList.remove("open");
              } else {
                menuLi[j].classList.add("open");
              }
            }
          }
        }
      };
    }

    const activeLi = document.querySelector('a[href="' + pathname + '"]'); // select current a element
    try {
      const activeNav = this.closest(activeLi, "ul"); // select closest ul
      if (activeNav.classList.contains("sub-menu")) {
        this.closest(activeNav, "li").classList.add("open");
      } else {
        this.closest(activeLi, "li").classList.add("open");
      }
    } catch (error) {}
  }

  componentWillReceiveProps(nextProps) {
    const { history } = nextProps;
    const pathname = `${history.location.pathname}`; // get current path

    const activeLi = document.querySelector('a[href="' + pathname + '"]'); // select current a element
    try {
      const activeNav = this.closest(activeLi, "ul"); // select closest ul
      if (activeNav.classList.contains("sub-menu")) {
        this.closest(activeNav, "li").classList.add("open");
      } else {
        this.closest(activeLi, "li").classList.add("open");
      }
    } catch (error) {}
  }

  closest(el, selector) {
    try {
      let matchesFn;
      // find vendor prefix
      [
        "matches",
        "webkitMatchesSelector",
        "mozMatchesSelector",
        "msMatchesSelector",
        "oMatchesSelector"
      ].some(function(fn) {
        if (typeof document.body[fn] === "function") {
          matchesFn = fn;
          return true;
        }
        return false;
      });

      let parent;

      // traverse parents
      while (el) {
        parent = el.parentElement;
        if (parent && parent[matchesFn](selector)) {
          return parent;
        }
        el = parent;
      }
    } catch (e) {}

    return null;
  }

  render() {
    if (
      this.props.userLogged &&
      this.props.userLogged._id &&
      this.props.userLogged.role === "Seller"
    ) {
      return (
        <CustomScrollbars className=" scrollbar">
          <ul className="nav-menu">
            <li className="nav-header"></li>
            <li className="menu no-arrow">
              <NavLink to="/app/home">
                <FontAwesomeIcon icon={faHome} />
                <span className="nav-text  side-nav-icons">Home</span>
              </NavLink>
            </li>
            <li className="menu no-arrow">
              <NavLink to="/app/add-users">
                <FontAwesomeIcon icon={faUserPlus} />
                <span className="nav-text side-nav-icons">
                  <IntlMessages id="Users" />{" "}
                </span>
              </NavLink>
            </li>
            <li className="menu no-arrow">
              <NavLink to="/app/all-quotes">
                <FontAwesomeIcon icon={faFileArchive} />
                <span className="nav-text side-nav-icons">
                  <IntlMessages id=" All Quotes" />{" "}
                </span>
              </NavLink>
            </li>
            <li className="menu no-arrow">
              <NavLink to="/app/confirmed-project">
                <FontAwesomeIcon icon={faCheckCircle} />
                <span className="nav-text side-nav-icons">
                  <IntlMessages id=" Confirmed Projects" />{" "}
                </span>
              </NavLink>
            </li>

            <li className="menu no-arrow">
              <NavLink to="/app/active-projects">
                <FontAwesomeIcon icon={faBullseye} />
                <span className="nav-text side-nav-icons">
                  <IntlMessages id=" Active Projects" />{" "}
                </span>
              </NavLink>
            </li>
            <li className="menu no-arrow">
              <NavLink to="/app/finished-project">
                <FontAwesomeIcon icon={faListAlt} />
                <span className="nav-text side-nav-icons">
                  <IntlMessages id=" Finished Projects" />{" "}
                </span>
              </NavLink>
            </li>
            <li className="menu no-arrow">
              <NavLink to="/app/raw-material">
                <FontAwesomeIcon icon={faWarehouse} />
                <span className="nav-text side-nav-icons">
                  <IntlMessages id="Raw Material" />{" "}
                </span>
              </NavLink>
            </li>
          </ul>
        </CustomScrollbars>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    userLogged: state.auth.user
  };
};

export default withRouter(connect(mapStateToProps, action)(SellerMenu));
