import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { setInitUrl } from "../../../../../actions/Auth";
import OrderTable from './../../../../../components/dashboard/eCommerce/OrderTable';
import './index.css';

class GetQuote extends React.Component {
  //it will save the path in initURL state
  componentWillMount() {
    this.props.setInitUrl(this.props.history.location.pathname);
  
    
  }

  render() {

    //if none is signed redirect it to Sigin page
    if (this.props.authUser === null) {
      return <Redirect to={"/app/home"} />;
    }
    

    return (
      <div className="row mb-md-3 your-quotes-container">
      <div className="col-12">
        <div className="jr-card">
          <div className="jr-card-header d-flex align-items-center">
            <h3 className="mb-0">Your Quotes</h3>
          </div>
       
          <OrderTable />
        
        </div>
      </div>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { authUser, initURL, user } = state.auth;
  
 
 
  return { authUser, initURL, user};
};

export default connect(mapStateToProps, { setInitUrl})(GetQuote);
