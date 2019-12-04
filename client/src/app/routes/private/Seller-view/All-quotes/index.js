import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { setInitUrl } from "../../../../../actions/Auth";
import ProjectsTable from "./Components/ProjectsTable";
import "./index.css";

class EstimatedProjects extends React.Component {
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
        <div className="row mb-md-3">
          <div className="offset-lg-1 col-lg-10 col-md-12">
            <div className="jr-card">
              <div className="jr-card-header mBH d-flex align-items-center">
                <h1 className="mb-0" id="usersHeader">
                  Quotes
                </h1>
              </div>
              <ProjectsTable />
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

export default connect(mapStateToProps, {
  setInitUrl
})(EstimatedProjects);
