import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Moment from "react-moment";
import "moment-timezone";
import Button from "@material-ui/core/Button";
import '../index.css';
import Dialog from '../fullScreen/FullScreenDialog';
function BasicTable(props) {

  const usersarray = props.users.usersWithQuotes;

  if (usersarray.length === 0) {
    return <div></div>;
  } else {
 const users = usersarray.data.map(user => {
      if (user.project.length > 0) {
        const proyects = user.project.map(project => {
         if(project.state === "Done"){
           
          const getArrayOfPrice = project.estimatedPrice.map(price => {
            return parseInt(price.$numberDecimal);
          });
        let  total = getArrayOfPrice.reduce((a, b) => a + b, 0);
       const projectInfo = {
         userId: user._id,
         projectId:project._id

       }

       const userInfo = {
         name: user.name,
         phone: user.phone,
         email: user.email,
         id: user._id


       }
          return (
           
            <TableRow key={user._id} >
            <TableCell>{user.name}</TableCell>
              <TableCell align="right">{user.phone}</TableCell>
              <TableCell align="right">{project.address}</TableCell>
              <TableCell align="right"><Moment format="YYYY/MM/DD">{project.createdAt}</Moment></TableCell>
              <TableCell align="right">${total}</TableCell>
              <TableCell> <Dialog user={userInfo} projectInfo={projectInfo}/>
              </TableCell>
              
            </TableRow>
           
          );
         }
        });
        return proyects;
      }
    });
    return (
      <div className="table-responsive-material">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Adress</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Cost</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{users}</TableBody>
          
        </Table>
      </div>
    );
  }
}

export default BasicTable;
