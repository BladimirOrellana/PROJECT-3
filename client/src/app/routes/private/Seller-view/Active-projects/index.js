
import React from 'react';
import {connect} from 'react-redux';
import {getUsersWithQuotesAction} from './../../../../../actions/GetUsersWithQuotes';
import Table from './table';
class Activeusers extends React.Component {


  componentWillMount(){
this.props.getUsersWithQuotesAction('')

  }

 
      
  render() {
   
   
   
 


   
return (
      <div className="app-wrapper">
       <div className="row mb-md-3 your-quotes-container">
      <div className="col-12">
        <div className="jr-card">
          <div className="jr-card-header d-flex align-items-center">
            <div className="ml-3">
                             
            </div>
          </div>
          
<Table users={this.props}/>
        </div>
      </div>
    </div>
   </div>
   
    );

  }
}
const  mapStateToProps = (state) => {
  return {
    activeusers: state.activeusers,
    usersWithQuotes: state.usersWithQuotes
  }
}


export default connect(mapStateToProps,{getUsersWithQuotesAction})(Activeusers);