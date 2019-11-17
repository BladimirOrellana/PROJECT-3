import React from "react";
// import "./../../public/Home/";
import "./index.css";
import About from "../About";
import Contact from "../Contact";
import Button from "@material-ui/core/Button";
import {NavLink} from 'react-router-dom';

class Home extends React.Component {
  render() {
    console.log("HOME_____",this.props.auth)
    return (
      <div>
        {/* <ContainerHeader match={this.props.match} title={<IntlMessages id="Dash Board"/>}/> */}
        <div className="header">
        
          <NavLink to='/app/get-a-free-quote'><Button variant="outlined" size="large" className="homebuttons">
            Get A Quote
          </Button>
          </NavLink>
          <a href="#contact-us"><Button variant="outlined" size="large" className="homebuttons">
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

export default Home;
