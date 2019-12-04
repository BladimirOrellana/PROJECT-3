import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { setInitUrl } from "../../../../actions/Auth";
import ProfileCard from './../../../../components/ProfileCard';
import './index.css';


class Profile extends React.Component {
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
      <div className="app-wrapper profile-header">
      <div className="">
      <ProfileCard user={this.props.user} />
      </div>
     </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { authUser, initURL,user } = auth;
  return { authUser, initURL, user};
};

export default connect(mapStateToProps, { setInitUrl })(Profile);
