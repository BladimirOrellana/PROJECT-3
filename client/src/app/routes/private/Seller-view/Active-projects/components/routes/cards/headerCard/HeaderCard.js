import React, { Fragment } from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import "./../../../../index.css";
import Moment from "react-moment";
import "moment-timezone";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Scrollbars } from "react-custom-scrollbars";
import "./index.css";

const TotalPrice = PricebySide => {
  let total = 0;
  PricebySide.map(price => {
    total += parseFloat(price.$numberDecimal);
  });
  return total;
};

const HeaderCard = props => {
  if (!props.allProjectInfo.project) {
    return <div></div>;
  } else {
    const projectData = props.allProjectInfo.project;
    const user = props.allProjectInfo.user;

    let ind = -1;

    return (
      <Card className="shadow border-0 cardComponent">
        <CardHeader className=" pb-2">
          <h1 className="cardComponentHeader">Project Information</h1>
        </CardHeader>
        <CardBody id="ProjectInfoCardBody">
          <table id="tableGeneralInfo">
            <tr>
              <td>Costumer: </td>{" "}
              <td className="SomeMarginLeft">{user.name}</td>
            </tr>
            <tr>
              <td>Email:</td> <td className="SomeMarginLeft">{user.email}</td>
            </tr>
            <tr>
              <td>Phone:</td> <td className="SomeMarginLeft">{user.phone}</td>
            </tr>
            <tr>
              <td>Address:</td>{" "}
              <td className="SomeMarginLeft">{projectData.address}</td>
            </tr>
            <tr>
              <td>Submited Date: </td>
              <td className="SomeMarginLeft">
                <Moment format="YYYY/MM/DD">{projectData.createdAt}</Moment>
              </td>
            </tr>
          </table>

          <Fragment>
            <div className="row">
              <div id="receiptInfo">
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
                      {projectData.sides.map(side => {
                        ind += 1;
                        return (
                          <TableRow key={side._id}>
                            <TableCell>{side.description}</TableCell>
                            <TableCell>{`${side.length.$numberDecimal} ft`}</TableCell>
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
                                  projectData.estimatedPrice[ind].$numberDecimal
                                ).toFixed(2)}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                      <TableRow key="total" className="mainRow">
                        <TableCell>
                          <h2>To Pay</h2>
                        </TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell className="title">
                          <h3>
                            {"$ " +
                              parseFloat(
                                TotalPrice(projectData.estimatedPrice)
                              ).toFixed(2)}
                          </h3>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Scrollbars>
              </div>
            </div>
          </Fragment>
        </CardBody>
      </Card>
    );
  }
};
export default HeaderCard;
