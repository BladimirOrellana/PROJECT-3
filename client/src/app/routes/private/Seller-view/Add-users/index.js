import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { setInitUrl } from "../../../../../actions/Auth";
import { loadUsersP } from "../../../../../actions/User";
import UsersTable from "./Components/UsersTable";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import UsersModal from "./Components/UsersModal";
import "./Components/index.css";

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
        <div className="row mb-md-3">
          <div className="offset-lg-2 col-lg-8 col-md-12">
            <div className="jr-card">
              <div className="jr-card-header mBH d-flex align-items-center">
                <h1 className="mb-0" id="usersHeader">
                  Users
                </h1>
                <div id="roleUsers">
                  <FormControl
                    component="fieldset"
                    id="usersRadioForm"
                    required
                  >
                    <RadioGroup
                      id="roleRadio"
                      className="d-flex flex-row"
                      aria-label="usersrole"
                      name="role"
                      value={this.props.selected}
                      onChange={e => {
                        this.props.loadUsersP(e.target.value);
                      }}
                    >
                      <FormControlLabel
                        value="Client"
                        control={<Radio />}
                        label="Clients"
                      />
                      <FormControlLabel
                        value="Seller"
                        control={<Radio />}
                        label="Sellers"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>

                <UsersModal add={true} />
              </div>
              <UsersTable />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth, user }) => {
  const { selected } = user;
  const { authUser, initURL } = auth;
  return { authUser, initURL, selected };
};

export default connect(mapStateToProps, {
  setInitUrl,
  loadUsersP
})(GetQuote);
