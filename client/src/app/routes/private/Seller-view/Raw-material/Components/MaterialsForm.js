import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { NotificationContainer } from "react-notifications";
import { connect } from "react-redux";
import {
  deleteItemAction,
  rawMaterialEditItem
} from "../../../../../../actions/RawMaterialsAction";

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      materialItem: this.props.edit ? this.props.edit.material.materialItem : ""
    };
  }

  onSubmitForm = event => {
    event.preventDefault();

    if (this.props.edit) {
      this.props.rawMaterialEditItem({
        ...this.state,
        _id: this.props.edit.material._id
      });
    } else {
      this.props.deleteItemAction({
        _id: this.props.delete.material._id
      });
    }

    this.props.closing();
  };
  render() {
    const { materialItem, email, phone, role, activateAccount } = this.state;

    return (
      <div className="login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
        <div className="login-content text-center">
          {!this.props.add && (
            <h2>
              {this.props.edit
                ? "Edit the Raw Material"
                : `Are you sure to remove the Raw Material?`}
            </h2>
          )}

          <div className="login-form">
            <form
            // onSubmit={e => {
            //   e.preventDefault();
            //   this.onSubmitForm(e);
            //   console.log("YYYYYYYYYYYYYY ");
            // }}
            >
              {!this.props.delete && (
                <div>
                  <TextField
                    type="text"
                    id="signUpName"
                    label="Name"
                    onChange={event => {
                      event.preventDefault();

                      this.setState({ materialItem: event.target.value });
                    }}
                    fullWidth
                    defaultValue={materialItem}
                    margin="normal"
                    className="mt-0 mb-2"
                    required
                  />
                </div>
              )}

              <div className="mb-3  margin-20">
                <Button
                  color="primary"
                  variant="contained"
                  className="text-white"
                  type="submit"
                  onClick={e => {
                    e.preventDefault();
                    this.onSubmitForm(e);
                  }}
                >
                  {this.props.edit ? "Edit" : "Remove"}
                </Button>

                <Button
                  color="primary"
                  variant="contained"
                  className="text-white"
                  onClick={this.props.closing}
                  id="cancelButtonClose"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>

        <NotificationContainer />
      </div>
    );
  }
}

export default connect(null, {
  deleteItemAction,
  rawMaterialEditItem
})(UserForm);
