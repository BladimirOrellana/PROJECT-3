import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { setInitUrl } from "../../../../../actions/Auth";
import './index.css';


class QuoteDetails extends React.Component {
  //it will save the path in initURL state
  componentWillMount() {
    this.props.setInitUrl(this.props.history.location.pathname);
  }

  render() {
  
    //if none is signed redirect it to Sigin page
    if (this.props.authUser === null) {
      return <Redirect to={"/signin"} />;
    }

    return (
      <div className="row mb-md-3 your-quotes-container">
      <div className="col-12">
        <div className="jr-card">
          <div className="jr-card-header d-flex align-items-center">
            <h3 className="mb-0">Quote Details</h3>
            <div className="ml-3">
                             
            </div>
          </div>
          
        </div>
      </div>
    </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { authUser, initURL } = auth;
  return { authUser, initURL };
};

export default connect(mapStateToProps, { setInitUrl })(QuoteDetails);
