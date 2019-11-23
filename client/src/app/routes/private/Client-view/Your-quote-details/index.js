import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { setInitUrl } from "../../../../../actions/Auth";
import { getQuoteDetailsFromDatabaseAction } from "./../../../../../actions/Quote-details";
import "./index.css";
import QuoteComponent from './../../../../../components/QuotaComponent/QuoteComponent';

class QuoteDetails extends React.Component {
  //it will save the path in initURL state
  componentWillMount() {
    this.props.setInitUrl(this.props.history.location.pathname);
    const quoteId = this.props.match.params.quoteId;
    this.props.getQuoteDetailsFromDatabaseAction(quoteId);
  }

  render() {
    //if none is signed redirect it to Sigin page
    if (this.props.authUser === null) {
      return <Redirect to={"/signin"} />;
    }

    const data = this.props.data;

    if (data) {
      const quote = data[0];

      return (
        <div className="row quote-details-container">
          <div className="col-12">
            <div className="jr-card">
              <div className="jr-card-header d-flex align-items-center">
                <h3 className="mb-0">Status {quote.state}</h3>
              </div>
            </div>
            <QuoteComponent project={this.props.data}  />

         </div>
        </div>
      );
    } else {
      return (
        <div className="row mb-md-3 your-quotes-container">
          <div className="col-12">
            <div className="jr-card">
              <div className="jr-card-header d-flex align-items-center">
                <h3 className="mb-0">You have No Quotes</h3>
                <div className="ml-3"></div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  const { authUser, initURL } = state.auth;
  return {
    authUser,
    initURL,
    data: state.quoteDetails.data
  };
};

export default connect(mapStateToProps, {
  setInitUrl,
  getQuoteDetailsFromDatabaseAction
})(QuoteDetails);
