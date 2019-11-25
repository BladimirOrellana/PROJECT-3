import React from 'react';
import ContainerHeader from 'components/ContainerHeader';
import {connect} from 'react-redux';
import IntlMessages from 'util/IntlMessages';
import OrderTable from './../../../../../components/dashboard/eCommerce/OrderTable';
import {getAllActiveQuotesFromDatabaseAction} from './../../../../../actions/Add-miscellaneous';

class AddMiscellaneous extends React.Component {
  componentWillMount(){
    const getActiveProject = 'Active'
this.props.getAllActiveQuotesFromDatabaseAction(getActiveProject)
  }
      
  render() {
    console.log("ADD MISCELLANEOUS",this.props)
   return (
      <div className="app-wrapper">
      <ContainerHeader match={this.props.match} title={<IntlMessages id="Add Miscellaneous"/>}/>
       <div className="row mb-md-3 your-quotes-container">
      <div className="col-12">
        <div className="jr-card">
          <div className="jr-card-header d-flex align-items-center">
            <div className="ml-3">
                             
            </div>
          </div>

          <OrderTable />
        
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