import React from "react";
import Button from "@material-ui/core/Button";
import { NotificationContainer } from "react-notifications";
import { connect } from "react-redux";
import { updateProjectP } from "../../../../../../actions/Project";
import CloseTwoToneIcon from "@material-ui/icons/CloseTwoTone";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

class UserForm extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmitForm = event => {
    event.preventDefault();
    if (this.props.cancel) {
      this.props.updateProjectP({
        _id: this.props.cancel._id,
        data: { state: "Canceled" }
      });
    } else {
      this.props.updateProjectP({
        _id: this.props.confirm._id,
        data: { state: "Confirmed" }
      });
    }

    this.props.closing();
  };
  render() {
    return (
      <div className="login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
        <div className="login-content text-center">
          <h2>
            {this.props.confirm
              ? "Are you sure do you want to Confirm this Project"
              : "Are you sure do you want to Cancel this Project"}
          </h2>

          <div className="login-form">
            <form
              onSubmit={e => {
                this.onSubmitForm(e);
              }}
            >
              <div className="mb-3  margin-20">
                <Button
                  color="primary"
                  variant="contained"
                  className="text-white"
                  type="submit"
                >
                  {this.props.confirm ? "Confirm Project" : "Cancel Project"}
                </Button>
              </div>
            </form>
          </div>
        </div>
        <Tooltip className="closeB" title="Close">
          <IconButton
            className="closeButton"
            aria-label="add"
            onClick={this.props.closing}
          >
            <CloseTwoToneIcon />
          </IconButton>
        </Tooltip>

        <NotificationContainer />
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  const { selected } = user;
  return { selected };
};

export default connect(mapStateToProps, {
  updateProjectP
})(UserForm);
