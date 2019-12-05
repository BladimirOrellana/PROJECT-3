import React, { Component } from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Moment from "react-moment";
import "moment-timezone";
import Button from "@material-ui/core/Button";
import "./../index.css";

import Dialog from "./../fullScreen/FullScreenDialog";

import { loadUsersP } from "../../../../../../actions/User";
import { connect } from "react-redux";
import { updateProjectP } from "../../../../../../actions/Project";
class BasicTable extends React.Component {
  componentWillMount() {
    this.props.loadUsersP();
  }
  updateState(quoteId, changeState) {
    this.props.updateProjectP({
      _id: quoteId,
      data: { state: changeState }
    });
  }

  totalPrice = Pricearray => {
    let total = 0;
    if (Pricearray) {
      const getArrayOfPrice = Pricearray.map(price => {
        return parseInt(price.$numberDecimal);
      });
      total = getArrayOfPrice.reduce((a, b) => a + b, 0);
    }
    return total;
  };

  projectsArray = users => {
    const projects = [];
    if (users) {
      users.map(user => {
        if (user.project) {
          user.project.map(project => {
            if (project.state === "Active") {
              projects.push({
                _id: project._id,
                name: user.name,
                phone: user.phone,
                user_id: user._id,
                address: project.address,
                estimatedPrice: project.estimatedPrice,
                createdAt: project.createdAt
              });
            }
          });
        }
      });
    }
    return projects;
  };

  render() {
    const data = this.projectsArray(this.props.users);

    return (
      <div className="table-responsive-material">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Phone</TableCell>
              <TableCell align="left">Adress</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Cost</TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              ? data.map(n => {
                  return (
                    <TableRow key={n._id}>
                      <TableCell>{n.name}</TableCell>
                      <TableCell align="left">{n.phone}</TableCell>
                      <TableCell align="left">{n.address}</TableCell>
                      <TableCell align="left">
                        <Moment format="YYYY/MM/DD">{n.createdAt}</Moment>
                      </TableCell>
                      <TableCell align="left">
                        ${this.totalPrice(n.estimatedPrice)}
                      </TableCell>
                      <TableCell align="left">
                        <Button
                          color="primary"
                          variant="contained"
                          className="text-white"
                          onClick={() => this.updateState(n._id, "Done")}
                        >
                          Done
                        </Button>
                      </TableCell>
                      <TableCell align="left">
                        <Button
                          color="primary"
                          variant="contained"
                          className="text-white"
                          onClick={() => this.updateState(n._id, "Estimated")}
                        >
                          Cancel
                        </Button>
                      </TableCell>

                      <TableCell>
                        <Dialog
                          user={{
                            name: n.name,
                            phone: n.phone,
                            email: n.email,
                            id: n.user_id
                          }}
                          projectInfo={{
                            userId: n.user_id,
                            projectId: n._id
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })
              : ""}
          </TableBody>
        </Table>
      </div>
    );
  }
}
const mapStateToProps = ({ user }) => {
  const { users } = user;
  return { users };
};
export default connect(mapStateToProps, { loadUsersP, updateProjectP })(
  BasicTable
);
