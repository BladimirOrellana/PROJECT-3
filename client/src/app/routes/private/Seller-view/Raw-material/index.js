import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { setInitUrl } from "../../../../../actions/Auth";
import {
  addItemAction,
  setItemHandleForm,
  onBlurEmptying
} from "../../../../../actions/RawMaterialsAction";
import MaterialsTable from "./Components/MaterialsTable";
import "./Components/index.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class RawMaterials extends React.Component {
  //it will save the path in initURL state
  componentWillMount() {
    this.props.setInitUrl(this.props.history.location.pathname);
  }

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.addItemAction({ materialItem: this.props.rawMaterialtext });
  };

  handleInputChange = e => {
    this.props.setItemHandleForm(e.target.value);
  };

  render() {
    //if none is signed redirect it to Sigin page
    if (this.props.authUser === null) {
      return <Redirect to={"/signin"} />;
    }

    return (
      <div className="app-wrapper">
        <div className="row mb-md-3">
          <div className="offset-lg-3 col-lg-6 offset-md-2 col-md-8 col-sm-12">
            <div className="jr-card">
              <div className="jr-card-header row  d-flex align-items-center">
                <div className="col-md-4 col-xs-12">
                  <h1 className="mb-0" id="usersHeader">
                    Raw Materials
                  </h1>
                </div>

                <div className="offset-md-2 col-md-6 col-xs-12">
                  <form
                    onSubmit={e => {
                      e.preventDefault();
                      this.handleFormSubmit(e);
                    }}
                  >
                    <div className="row" id="addMat">
                      <div className="col-8">
                        <TextField
                          type="text"
                          label="Name"
                          onChange={this.handleInputChange}
                          fullWidth
                          value={this.props.rawMaterialtext}
                          margin="normal"
                          className="mt-0 mb-2"
                          required
                        />
                      </div>
                      <div className="col-4" id="addMatbtn">
                        <Button
                          color="primary"
                          variant="contained"
                          className="text-white"
                          type="submit"
                        >
                          Add
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <MaterialsTable
                onClick={e => {
                  e.preventDefault();
                  this.props.onBlurEmptying();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth, rawMaterials }) => {
  const { rawMaterialtext } = rawMaterials;
  const { authUser, initURL } = auth;
  return { authUser, initURL, rawMaterialtext };
};

export default connect(mapStateToProps, {
  setInitUrl,
  addItemAction,
  setItemHandleForm,
  onBlurEmptying
})(RawMaterials);
