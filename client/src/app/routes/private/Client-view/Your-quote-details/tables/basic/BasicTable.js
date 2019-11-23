import React, {Component} from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import "./../../index.css";



class BasicTable extends Component {

   printQuote = () =>{
    document.getElementById('printButton').style.display = 'none';
    document.getElementById('sendEmailButton').style.display = 'none';
    
    setTimeout(() =>{
      document.getElementById('printButton').style.display = 'block';
      document.getElementById('sendEmailButton').style.display = 'block';
    },3000)
    window.print();
  }

   sendEmailQuote = () =>{
alert("email")
  }
 
    render(){
      const quote = this.props.quoteDetails;
      const backSide = 1500;
      const rigthSide = 1500;
      const rightFrontSide = 1500;
      const leftSide = 1500;
      const leftFrontSide = 1500;
      const finalPrice =
        backSide + rigthSide + rightFrontSide + leftSide + leftFrontSide;
      const stateStyle = quote.state.includes("Done")
        ? "text-white bg-primary"
        : quote.state.includes("Confirm")
        ? "bg-amber"
        : quote.state.includes("Active")
        ? "text-white bg-success"
        : "text-white bg-grey";
  return (
    <div className="table-responsive-material">
  <Table>
        <TableHead>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Length</TableCell>
            <TableCell align="right">Gates</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Back Side</TableCell>
            <TableCell align="right">Cedar</TableCell>
            <TableCell align="right">87</TableCell>
            <TableCell align="right">1</TableCell>
            <TableCell align="right">${backSide}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Right Side</TableCell>
            <TableCell align="right">Cedar</TableCell>
            <TableCell align="right">66</TableCell>
            <TableCell align="right">0</TableCell>
            <TableCell align="right">${rigthSide}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Right Front Side</TableCell>
            <TableCell align="right">Cedar</TableCell>
            <TableCell align="right">99</TableCell>
            <TableCell align="right">0</TableCell>
            <TableCell align="right">${rightFrontSide}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Left Side</TableCell>
            <TableCell align="right">Cedar</TableCell>
            <TableCell align="right">78</TableCell>
            <TableCell align="right">0</TableCell>
            <TableCell align="right">${leftSide}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Left Front Side</TableCell>
            <TableCell align="right">Cedar</TableCell>
            <TableCell align="right">55</TableCell>
            <TableCell align="right">1</TableCell>
            <TableCell align="right">${leftFrontSide}</TableCell>
          </TableRow>

          <TableRow></TableRow>
        </TableBody>
      </Table>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right">
              <span className="final-price">Total</span>
            </TableCell>
            <TableCell align="right">${finalPrice}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <span className={` badge text-uppercase ${stateStyle}`}>
                {quote.state}
              </span>
            </TableCell>
            <TableCell>
              <span id="printButton" onClick={this.printQuote} className=" text-uppercase optionsButton">
                Print
              </span>
            </TableCell>
            <TableCell>
            <span id="sendEmailButton" onClick={this.sendEmailQuote} className=" text-uppercase optionsButton">
              Send to email
            </span>
          </TableCell>
       
          </TableRow>
        </TableHead>
      </Table>
    </div>
  );
    }
}

export default BasicTable;
