import React from "react";
import ProjectFinishedComponents from "./ProjectFinishedComponents";

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
      <div className="app-wrapper">
        <div className="d-flex justify-content-center">Finished Project</div>
        <ProjectFinishedComponents />
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { authUser, initURL } = auth;
  return { authUser, initURL };
};

export default connect(mapStateToProps, { setInitUrl })(GetQuote);
