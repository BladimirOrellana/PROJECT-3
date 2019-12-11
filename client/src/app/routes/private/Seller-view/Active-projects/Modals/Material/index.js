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
      itemMaterial: "",
      itemQuantity: "",
      itemPrice: ""
    };
  }

  handleCancel = () => {
    this.props.onClose(this.props.value);
  };
  handleSubmit = event => {
    event.preventDefault();
    const data = {
      title: "material",
      itemMaterial: this.state.itemMaterial,
      itemQuantity: this.state.itemQuantity,
      itemPrice: this.state.itemPrice,
      quotedId: this.props.quoteInfo.quoteId,
      errorMessage: ""
    };
    if (this.state.itemMaterial === "") {
      this.setState({
        errorMessage: "Please enter Material"
      });
    } else if (this.state.itemQuantity === "") {
      this.setState({
        errorMessage: "Please enter Quantity"
      });
    } else if (this.state.itemPrice === "") {
      this.setState({
        errorMessage: "Please enter Price"
      });
    } else {
      this.props.onClose(this.state.value);
      this.props.quoteInfo.addPaymentAction(data);
      this.setState({
        itemMaterial: "",
        itemQuantity: "",
        itemPrice: ""
      });
    }
  };

  handleOnChange = event => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value, ...other } = this.props;

    return (
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        maxWidth="xs"
        onEntering={this.handleEntering}
        {...other}
      >
        <DialogTitle>Add Material</DialogTitle>
        <p className="alertMessage">{this.state.errorMessage}</p>
        <DialogContent className="modalContainer">
          <form
            onSubmit={e => {
              e.preventDefault();
              this.handleSubmit(e);
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              onChange={this.handleOnChange}
              className="textInput"
              name="itemMaterial"
              label="Item"
              variant="outlined"
            />
            <TextField
              onChange={this.handleOnChange}
              className="textInput"
              name="itemQuantity"
              label="Quantity"
              variant="outlined"
              type="number"
            />
            <TextField
              onChange={this.handleOnChange}
              className="textInput"
              name="itemPrice"
              label="$ Price"
              variant="outlined"
              type="number"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleCancel} className="modalActionButtons">
            Cancel
          </Button>
          <Button type="submit" className="modalActionButtons">
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

class MaterialModal extends React.Component {
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
            <ListItemText primary="Material" />
          </ListItem>
          <ModalDialog
            quoteInfo={this.props}
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

export default connect(mapStateToProps, { addPaymentAction })(MaterialModal);
