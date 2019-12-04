import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { addPaymentAction } from "./../../../../../../../actions/Add-miscellaneous";
import { getRawMaterialAction } from "./../../../../../../../actions/RawMaterialsAction";
import TextField from "@material-ui/core/TextField";
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import "../index.css";
function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class FullScreenDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: undefined,
      itemMaterial: "",
      itemQuantity: "",
      itemPrice: "",
      open: false
    };
  }
  componentWillMount() {
    this.props.getRawMaterialAction();
  }
  handleSubmit = event => {
    event.preventDefault();
    const data = {
      title: "material",
      itemMaterial: this.state.itemMaterial,
      itemQuantity: this.state.itemQuantity,
      itemPrice: this.state.itemPrice,
      quotedId: this.props.project._id,
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
      this.props.addPaymentAction(data);
      this.setState({
        itemMaterial: "",
        itemQuantity: "",
        itemPrice: "",
        errorMessage: ""
      });
    }
  };

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
    this.setState({
      itemMaterial: "",
      itemQuantity: "",
      itemPrice: "",
      errorMessage: ""
    });
  };

  render() {
    const materialCall = () => {
      if (!this.props.material) {
        return <div></div>;
      } else {
        const materials = this.props.material.map(item => {
          return (
            <ListItem button>
              <ListItemText
                value={item.materialItem}
                onClick={() =>
                  this.setState({ itemMaterial: item.materialItem })
                }
                className="text-center"
              >
                {item.materialItem}
              </ListItemText>
            </ListItem>
          );
        });
        return <div>{materials}</div>;
      }
    };

    return (
      <div>
        <div className=" text-black" onClick={this.handleClickOpen}>
          Add Material
        </div>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleRequestClose}
          TransitionComponent={Transition}
        >
        <Toolbar>
        <IconButton onClick={this.handleRequestClose} aria-label="Close">
          <CloseIcon />
        </IconButton>
        <Typography
          variant="title"
          style={{
            flex: 1
          }}
        ></Typography>
        <Button onClick={this.handleSubmit}>save</Button>
      </Toolbar>
          <div className="form-container">
            <form
              onSubmit={e => this.handleSubmit(e)}
              noValidate
              autoComplete="off"
            >
              <p className="alertMessage">{this.state.errorMessage}</p>
              <TextField
                value={this.state.itemMaterial}
                onChange={this.handleOnChange}
                className="textInput"
                name="itemMaterial"
                label="Item"
                variant="outlined"
              />
              <TextField
                value={this.state.itemQuantity}
                onChange={this.handleOnChange}
                className="textInput"
                name="itemQuantity"
                label="Quantity"
                variant="outlined"
              />
              <TextField
                value={this.state.itemPrice}
                onChange={this.handleOnChange}
                className="textInput"
                name="itemPrice"
                label="$ Price"
                variant="outlined"
              />
              <InputLabel id="demo-mutiple-name-label">Select Material</InputLabel>
           
              
            </form>
          </div>

          <List className="material-list">
          {materialCall()}
          <Divider />
          </List>
        </Dialog>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    payment: state.activeProjects,
    material: state.rawMaterialsReducer.payload
  };
};

export default connect(mapStateToProps, {
  addPaymentAction,
  getRawMaterialAction
})(FullScreenDialog);
