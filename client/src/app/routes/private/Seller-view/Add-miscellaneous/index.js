import React from 'react';
import {connect} from 'react-redux';
import OrderTable from './OrderTable/OrderTable';
import {getAllActiveQuotesFromDatabaseAction} from './../../../../../actions/Add-miscellaneous';

class AddMiscellaneous extends React.Component {
  componentWillMount(){
    const getActiveProject = 'Active'
this.props.getAllActiveQuotesFromDatabaseAction(getActiveProject)
  }
      
  render() {
  console.log("ALL QUOTES", this.props)
   return (
      <div className="app-wrapper">
       <div className="row mb-md-3 your-quotes-container">
      <div className="col-12">
        <div className="jr-card">
          <div className="jr-card-header d-flex align-items-center">
            <div className="ml-3">
                             
            </div>
          </div>

          <OrderTable project={this.props.activeProjects.data} />
   
        </div>
      </div>
    </div>
   </div>
   
    );

  }
}
const  mapStateToProps = (state) => {
  return {
    activeProjects: state.activeProjects
  }
}


export default connect(mapStateToProps,{getAllActiveQuotesFromDatabaseAction})(AddMiscellaneous);