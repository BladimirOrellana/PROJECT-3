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
    console.log("YOUR STATE +++++++++++++ ",this.props)
    //if none is signed redirect it to Sigin page
    if (this.props.authUser === null) {
      return <Redirect to={"/signin"} />;
    }

    return (
      <div className="app-wrapper">
        <div className="d-flex justify-content-center">
          <h1 style={{ color: "white" }}>All Your Quotes</h1>
        </div>
        <div className="Order-table-container">
        <OrderTable />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { authUser, initURL } = auth;
  return { authUser, initURL };
};

export default connect(mapStateToProps, { setInitUrl })(GetQuote);
