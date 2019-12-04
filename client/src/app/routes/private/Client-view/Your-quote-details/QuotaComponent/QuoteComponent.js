import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Scrollbars } from "react-custom-scrollbars";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import "./index.css";
import Logo from "./../../../../../../assets/images/logo-transparent2.png";
import Moment from "react-moment";
import "moment-timezone";

class QuoteComponent extends React.Component {
  printQuote(){
    document.getElementById('printButton').style.display = 'none';
    setTimeout(() =>{
      document.getElementById('printButton').style.display = 'block';
    },4000)
    window.print()
  }
  render() {
    const user = this.props.user;
    const project = this.props.project[0];
   

    let total = 0;
    const getArrayOfPrice = project.estimatedPrice.map(price => {
      return parseInt(price.$numberDecimal);
    });

    total = getArrayOfPrice.reduce((a, b) => a + b, 0);
    let ind = -1;
    let date = new Date()
      .toString()
      .split(" ")
      .splice(1, 3)
      .join(" ");
    return (
      <Fragment>
        <div className="row">
          <div className="col-md-3"></div>
          <div id="receipt" className="col-md-6">
            <div className="row">
              <div className="col-md-4 col-sm-5">
                <img className="card-img-top" src={Logo} alt="Card image cap" />

                <h2 id="cardT" className="card-title">
                  H&B Fencing
                </h2>
                <p className="text-muted">
                  15608 S Brentwood St, Channelview, TX 77530
                </p>
              </div>
              <div className="col-md-8 col-sm-7">
                <h1 className="alignRight title text-primary">
                  Installation   Quote
                </h1>
                <div className="row">
                  <div className="col-md-10 col-sm-11">
                  <span className="align-right">
                  <Moment format="YYYY/MM/DD">{project.createdAt}</Moment>
                    <h5 className="text-muted">{project.address}</h5>
                    <h6 className="text-muted">{user.name}</h6>
                     <h6 className="text-muted ">{user.phone}</h6>
                    <h6 className="text-muted ">{user.email}</h6>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <Scrollbars
              className="rct-scroll"
              autoHeight
              autoHeightMin={100}
              autoHeightMax={424}
              autoHide
            >
              <Table className="table-wrap">
                <TableHead>
                  <TableRow key="head">
                    {[
                      "Side",
                      "Length",
                      "Wood Type",
                      "Gates Number",
                      "Estimated Price"
                    ].map((th, index) => (
                      <TableCell key={index} className="fw-bold">
                        {th}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {project.sides.map((side, i) => {
                    ind += 1;
                    return (
                      <TableRow key={side._id}>
                        <TableCell>{side.description}</TableCell>
                        <TableCell>{side.length.$numberDecimal}</TableCell>
                        <TableCell>{side.woodType}</TableCell>
                        <TableCell>{side.gates.length}</TableCell>
                        <TableCell>
                          {"$ " + parseFloat(getArrayOfPrice[i]).toFixed(2)}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  <TableRow key="total" className="mainRow">
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell className="title text-primary">
                      <h4>Total</h4>
                    </TableCell>
                    <TableCell className="title text-primary">
                      <h4> {"$ " + parseFloat(total).toFixed(2)}</h4>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Scrollbars>
            <div className="row alignRight">
              <div className="col-md-12">
                <h1 className="alignRight title text-primary">
                  {"USD " + parseFloat(total).toFixed(2)}
                </h1>
              </div>
            </div>
            <div className="col-md-12">
            <span id="printButton" onClick={this.printQuote}>Print</span>
            </div>
         
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    address,
    estimatedPrice,
    estimatedPriceBySide,
    fenceSidesInfo
  } = state.project;

  const {user} = state.auth
  return {
    address,
    estimatedPrice,
    estimatedPriceBySide,
    fenceSidesInfo,
    user
  };
};

export default connect(mapStateToProps, null)(QuoteComponent);
