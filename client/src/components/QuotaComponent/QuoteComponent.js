import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Scrollbars } from "react-custom-scrollbars";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import "./index.css";
import Logo from "./../../assets/images/logo-transparent2.png";

class QuoteComponent extends React.Component {
  render() {
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
                  Installation Bid
                </h1>
                <div className="row">
                  <div className="col-md-2 col-sm-1"></div>
                  <div className="col-md-10 col-sm-11">
                    <h4 id="rigth">{date}</h4>
                    <h4 id="rigth">{this.props.address}</h4>{" "}
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
                      "Gates",
                      "Estimated Price"
                    ].map((th, index) => (
                      <TableCell key={index} className="fw-bold">
                        {th}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.props.fenceSidesInfo.map(side => {
                    ind += 1;
                    return (
                      <TableRow key={side._id}>
                        <TableCell>{side.description}</TableCell>
                        <TableCell>{`${side.length} ft`}</TableCell>
                        <TableCell>{side.woodType}</TableCell>

                        {side.gates.length === 0 ? (
                          <TableCell> 0</TableCell>
                        ) : (
                          <TableCell>
                            {side.gates.map(gate => {
                              return (
                                <p className="gatesP">{`${gate.type} ${gate.size}ft`}</p>
                              );
                            })}
                          </TableCell>
                        )}

                        <TableCell>
                          {"$ " +
                            parseFloat(
                              this.props.estimatedPriceBySide[ind]
                            ).toFixed(2)}
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
                      <h4>
                        {" "}
                        {"$ " +
                          parseFloat(this.props.estimatedPrice).toFixed(2)}
                      </h4>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Scrollbars>
            <div className="row alignRight">
              <div className="col-md-12">
                <h1 className="alignRight title text-primary">
                  {"USD " + parseFloat(this.props.estimatedPrice).toFixed(2)}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ project }) => {
  const {
    address,
    estimatedPrice,
    estimatedPriceBySide,
    fenceSidesInfo
  } = project;
  return {
    address,
    estimatedPrice,
    estimatedPriceBySide,
    fenceSidesInfo
  };
};

export default connect(mapStateToProps, null)(QuoteComponent);
