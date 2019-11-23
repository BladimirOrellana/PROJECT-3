import React from "react";
import "./index.css";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { setInitUrl } from "../../../../actions/Auth";
import About from "../About";
import Contact from "../Contact";
import { NavLink } from "react-router-dom";

class Home extends React.Component {
  //it will save the path in initURL state
  componentWillMount() {
    this.props.setInitUrl(this.props.history.location.pathname);
  }
  render() {
    
    return (
      <div>
        <div className="header">
          <NavLink to="/app/get-a-free-quote">
            <Button variant="outlined" size="large" className="homebuttons">
              Get A Quote
            </Button>
          </NavLink>
          <a href="#contact-us">
            <Button variant="outlined" size="large" className="homebuttons">
              Contact Us
            </Button>
          </a>

          <div>
            <h1 id="companyName">\|/H&B-Fencing\|/</h1>
          </div>
        </div>
        <div className="about-container">
          <About />
        </div>
        <div className="contact-container">
          <Contact />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { initURL } = auth;
  return { initURL };
};

export default connect(mapStateToProps, { setInitUrl })(Home);
