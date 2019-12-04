import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { setInitUrl } from "../../../../../actions/Auth";
import HorizontalLabelPositionBelowStepper from "components/QuoteStepper/HorizontalLabelPositionBelowStepper";
import CardBox from "components/CardBox";
import "./index.css";

class GetQuote extends React.Component {
  //it will save the path in initURL state
  componentWillMount() {
    this.props.setInitUrl(this.props.history.location.pathname);
  }

  render() {
    //if none is signed redirect it to Sigin page
    if (this.props.authUser === null) {
      return <Redirect to={"/signin"} />;
    }else{
    if (
      this.props.user.role === "Seller" &&
      !this.props.client.name &&
      this.props.estimatedPrice === 0
    ) {
      return <Redirect to={"/app/add-users"} />;
    }}

    return (
      <div className="row homemaindiv mb-md-3">
        {(this.props.user.role === "Client" ||
          this.props.client.name ||
          this.props.estimatedPrice !== 0) && (
          <CardBox
            styleName="col-lg-12"
            childrenStyle="d-flex justify-content-center"
            headerOutside
          >
            <HorizontalLabelPositionBelowStepper />
          </CardBox>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ auth, project }) => {
  const { client, estimatedPrice } = project;
  const { authUser, user, initURL } = auth;
  return { authUser, user, initURL, client, estimatedPrice };
};

export default connect(mapStateToProps, {
  setInitUrl
})(GetQuote);
