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

      
  return (
    <div className="table-responsive-material">
 

    </div>
  );
    }
}

export default BasicTable;
