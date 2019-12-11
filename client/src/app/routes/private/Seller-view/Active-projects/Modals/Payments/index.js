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
      payment: 0,
      errorMessage: ""
    };
  }

  handleCancel = () => {
    this.props.onClose(this.props.value);
  };
  handleSubmit = event => {
    event.preventDefault();

    const data = {
      title: "payment",
      payment: this.state.payment,
      quotedId: this.props.paymentInfo.project._id,
      userId: this.props.paymentInfo.userinfo.id
    };

    if (this.state.payment === 0) {
      this.setState({
        errorMessage: "Please Enter Amount"
      });
    } else {
      this.refs.alert.remove();
      this.props.onClose(this.state.value);
      this.props.paymentInfo.addPaymentAction(data);
      this.setState({
        payment: 0,
        errorMessage: ""
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
        <DialogTitle>Add A Payment</DialogTitle>
        <p ref="alert" className="alertMessage">
          {this.state.errorMessage}
        </p>
        <DialogContent className="modalContainer">
          <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
            <TextField
              onChange={this.handleOnChange}
              className="textInput"
              name="payment"
              label="$ Amount"
              variant="outlined"
              type="number"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleCancel} className="modalActionButtons">
            Cancel
          </Button>
          <Button onClick={this.handleSubmit} className="modalActionButtons">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

ModalDialog.propTypes = {
  onClose: PropTypes.func,
  value: PropTypes.string
};

class PaymentModal extends React.Component {
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
      <div className="d-inline-block w-100">
        <List>
          <ListItem
            className="ModalButtton"
            button
            onClick={this.handleClickListItem}
          >
            <ListItemText primary="Add" />
          </ListItem>
          <ModalDialog
            paymentInfo={this.props}
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
    payment: state.activeProjects
  };
};

export default connect(mapStateToProps, { addPaymentAction })(PaymentModal);
