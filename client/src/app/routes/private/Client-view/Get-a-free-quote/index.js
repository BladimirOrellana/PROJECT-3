import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { setInitUrl } from "../../../../../actions/Auth";
import {
  sidesNumberP,
  gatesNumberP,
  getQuoteP
} from "../../../../../actions/Project";
import HorizontalLabelPositionBelowStepper from "components/QuoteStepper/HorizontalLabelPositionBelowStepper";
import CardBox from "components/CardBox";
import  "./index.css";


class GetQuote extends React.Component {
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
      <div className="row homemaindiv mb-md-3">
        <CardBox
          styleName="col-lg-12"
          childrenStyle="d-flex justify-content-center"
          headerOutside
        >
          <HorizontalLabelPositionBelowStepper />
        </CardBox>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { authUser, initURL } = auth;
  return { authUser, initURL };
};

export default connect(mapStateToProps, {
  setInitUrl,
  sidesNumberP,
  gatesNumberP,
  getQuoteP
})(GetQuote);
