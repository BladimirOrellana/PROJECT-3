import React, {Component} from "react";

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
  updateState(quoteId,changeState){

    this.props.updateProjectP({
      _id: quoteId,
      data: { state: changeState }
    });

  }
  render() {
    const usersarray = this.props.users;
    if (usersarray.length === 0 || !usersarray) {
      return <div></div>;
  } else {
    
    const users = usersarray.map(user => {
      if (user.project.length > 0) {
        const proyects = user.project.map(project => {
          if (project.state === "Active") {
            const getArrayOfPrice = project.estimatedPrice.map(price => {
              return parseInt(price.$numberDecimal);
            });
            let total = getArrayOfPrice.reduce((a, b) => a + b, 0);
            const projectInfo = {
              userId: user._id,
              projectId: project._id
            };

            const userInfo = {
              name: user.name,
              phone: user.phone,
              email: user.email,
              id: user._id
            };
            return (
              <TableBody>
              <TableRow key={user._id}>
                <TableCell>{user.name}</TableCell>
                <TableCell align="left">{user.phone}</TableCell>
                <TableCell align="left">{project.address}</TableCell>
                <TableCell align="left">
                  <Moment format="YYYY/MM/DD">{project.createdAt}</Moment>
                </TableCell>
                <TableCell align="left">${total}</TableCell>
                <TableCell align="left">
                  {" "}
                  <Button
                    color="primary"
                    variant="contained"
                    className="text-white"
                    onClick={() => this.updateState(project._id,"Done")}

                  >
                    Done
                  </Button>
                </TableCell>
                <TableCell align="left">
                  {" "}
                  <Button
                    color="primary"
                    variant="contained"
                    className="text-white"
                    onClick={() => this.updateState(project._id,"Estimated")}
                  >
                    Cancel
                  </Button>
                </TableCell>

                <TableCell>
                  {" "}
                  <Dialog user={userInfo} projectInfo={projectInfo} />
                </TableCell>
              </TableRow>
              </TableBody>
            );
          }
        });
        return (
        
          <div>{proyects}</div>
          
        ) 
      }
    });
    return (
      <div className="table-responsive-material">
        <Table>
          {/*<TableHead>
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
          </TableHead>*/}
          {users}
        </Table>
      </div>
    );
  }
  }
}
const mapStateToProps = ({ user }) => {
  const { users } = user;
  return { users };
};
export default connect(mapStateToProps, { loadUsersP, updateProjectP })(
  BasicTable
);