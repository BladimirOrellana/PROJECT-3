import React, {Component} from 'react';
import {connect} from 'react-redux';
import OrderTableCell from './OrderTableCell';
import {NavLink} from 'react-router-dom';
import {getAllYourQuotesAction} from './../../../actions/index';


import Button from "@material-ui/core/Button";





class OrderTable extends Component {
  
  UNSAFE_componentWillMount(){
    this.props.getAllYourQuotesAction(this.props.user)
   
  }

  

  render() {
    
    console.log("ALL QUOTES", this.props.data)
    const {data} = this.props.data ;

    if(data){
    
      return (
        <div className="table-responsive-material">
          <table className="default-table table-unbordered table table-sm table-hover">
            <thead className="th-border-b">
            <tr>
              <th>Address</th>
              <th>Order Date</th>
              <th>Cost</th>
              <th className="status-cell text-right">Status</th>
              <th/>
            </tr>
            </thead>
            <tbody>
            {data.project.map(data => {
              return (
                <OrderTableCell key={data._id} data={data}/>
              );
            })}
            </tbody>
          </table>
        </div>
      );
          }else{
  
        return (
          <div>
          <div>
          <div className="text-center">You Haven request a quote yet</div>
            <NavLink to='/app/get-a-free-quote'><Button variant="outlined" size="large" className="homebuttons btn-block">
            Get A Quote
          </Button>
           </NavLink>
             </div>
           </div>
        )
  
      
          }
  
  
   }
   
  }

const  mapStateToProps = (state) => {
  
  return {
  data: state.quotes,
  user: state.auth.user

  }
}

// const  mapDispatchToProps = (dispatch) => {
//   return {
//     getAllQuotesFromDatabase: () =>  dispatch( getAllYourQuotesAction())
    
//   }
// }

export default connect(mapStateToProps,{getAllYourQuotesAction})(OrderTable);