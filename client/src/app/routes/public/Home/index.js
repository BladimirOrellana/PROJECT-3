import React from "react";
// import "./../../public/Home/";
import "./index.css";
import Button from "@material-ui/core/Button";

class Home extends React.Component {
  render() {
    return (
      <div>
        {/* <ContainerHeader match={this.props.match} title={<IntlMessages id="Dash Board"/>}/> */}
        <div className="app-wrapper">
          <Button variant="outlined" size="large" className="homebuttons">
            Get A Quote
          </Button>
          <Button variant="outlined" size="large" className="homebuttons">
            Contact Us
          </Button>
        </div>
        <div>
          <h1 id="companyName">\|/H&B-Fencing\|/</h1>
        </div>
      </div>
    );
  }
}

export default Home;
