import React from 'react';
import profileAvatar from './../../assets/images/Profile/profile-avatar.png';

const ProfileCard = (props) => {
  
  const {user} = props;
  
  return (
    <div className="profile-intro card shadow  border-0 text-center">

      <div className="pi-header">
        <div className="card-image layer">
          <img className="avatar-circle" src={profileAvatar} alt="Team Member"/>
        </div>
      </div>
      <div className="pi-content">
        <h4>{user.name}</h4>
        <p>{user.email}</p>
        <p className="card-text"></p>
      </div>
      <div className="pi-footer">
          {/*<div className="icons-wrapper">
            <span className="icon facebook-icon jr-link">
              <i className="zmdi zmdi-facebook zmdi-hc-fw zmdi-hc-lg"/>
            </span>

            <span className="icon twitter-icon jr-link">
              <i className="zmdi zmdi-twitter zmdi-hc-fw zmdi-hc-lg"/>
            </span>

            <span className="icon linkedin-icon jr-link">
              <i className="zmdi zmdi-linkedin zmdi-hc-fw zmdi-hc-lg"/>
            </span>
  </div>*/}
        </div>
    </div>
  )
};

export default ProfileCard;

