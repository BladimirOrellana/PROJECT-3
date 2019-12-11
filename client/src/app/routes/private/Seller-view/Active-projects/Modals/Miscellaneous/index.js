import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import { addPaymentAction } from "./../../../../../../../actions/Add-miscellaneous";
import "./../index.css";

class ModalDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: undefined,
      item: "",
      amount: "",
      errorMessage: ""
    };
  }

  handleCancel = () => {
    this.props.onClose(this.props.value);
  };
  handleSubmit = event => {
    event.preventDefault();
    const userId = this.props.projectInfo.userinfo.id;
    const data = {
      title: "miscellaneous",
      description: this.state.item,
      amount: this.state.amount,
      quotedId: this.props.projectInfo.project._id,
      userId: this.props.projectInfo.userinfo.id
    };
    if (this.state.item === "") {
      this.setState({
        errorMessage: "Please Add Item"
      });
    } else if (this.state.amount === "") {
      this.setState({
        errorMessage: "Please Add Amount"
      });
    } else {
      this.props.onClose(this.state.value);

      this.props.projectInfo.addPaymentAction(data);

      this.setState({
        item: "",
        amount: ""
      });
    }
  };
  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { payment } = this.state;

    const { value, ...other } = this.props;

    return (
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        maxWidth="xs"
        onEntering={this.handleEntering}
        {...other}
      >
        <div id="MiscellaneousModalMainDiv">
          <DialogTitle>Add Miscellaneous</DialogTitle>
          <p className="alertMessage">{this.state.errorMessage}</p>
          <DialogContent className="modalContainer">
            <form noValidate autoComplete="off">
              <TextField
                onChange={this.handleOnChange}
                className="textInput"
                name="item"
                label="description"
                variant="outlined"
              />
              <TextField
                onChange={this.handleOnChange}
                className="textInput"
                name="amount"
                label="$ Amount"
                variant="outlined"
                type="number"
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button
              color="primary"
              onClick={this.handleCancel}
              variant="contained"
              className="modalActionButtons"
            >
              Cancel
            </Button>
            <Button
              color="primary"
              variant="contained"
              type="submit"
              onClick={e => {
                e.preventDefault();
                this.handleSubmit(e);
              }}
              className="modalActionButtons"
            >
              Add
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    );
  }
}

ModalDialog.propTypes = {
  onClose: PropTypes.func,
  value: PropTypes.string
};

class MiscellaneousModal extends React.Component {
  state = {
    open: false
  };

  button = undefined;

  handleClickListItem = () => {
    this.setState({ open: true });
  };

  handleRequestClose = value => {
    this.setState({ value, open: false });
  };

  render() {
    return (
      <div className="d-inline-block w-70">
        <List>
          <ListItem
            className="ModalButtton"
            button
            onClick={this.handleClickListItem}
          >
            <ListItemText primary="Add" />
          </ListItem>
          <ModalDialog
            projectInfo={this.props}
            open={this.state.open}
            onClose={this.handleRequestClose}
          />
        </List>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    payment: state.activeProjects,

    project: state.usersWithQuotes.projectData
  };
};

export default connect(mapStateToProps, { addPaymentAction })(
  MiscellaneousModal
);
