import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Slide from "@material-ui/core/Slide";
import "./../index.css";
import HeaderCard from "./../components/routes/cards/headerCard/HeaderCard";
import NormalCard from "./../components/routes/cards/normalCard/NormalCard";
import SolidCard from "./../components/routes/cards/solidCards/SolidCards";
import MiscellaneousCard from "./../components/routes/cards/pillsTabCards/PillsTabCards";
import { getUserWithQuoteAction } from "./../../../../../../actions/GetUsersWithQuotes";
import Tooltip from "@material-ui/core/Tooltip";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class FullScreenDialog extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
    this.props.getUserWithQuoteAction(this.props.projectInfo);
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <div className="text-green" onClick={this.handleClickOpen}>
          <Tooltip title="Full View">
            <IconButton id="fullView" aria-label="add">
              <VisibilityIcon />
            </IconButton>
          </Tooltip>
        </div>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleRequestClose}
          TransitionComponent={Transition}
        >
          <Toolbar className="fullScreenDialogTollBar">
            <Typography
              variant="title"
              style={{
                flex: 1
              }}
            >
              <Button
                onClick={() => this.props.openDialog(this.handleClickOpen)}
              >
                {" "}
              </Button>
            </Typography>
            <IconButton onClick={this.handleRequestClose} aria-label="Close">
              <CloseIcon />
            </IconButton>
          </Toolbar>
          <List className="fullDialogList ">
            <HeaderCard allProjectInfo={this.props} />
            <NormalCard allProjectInfo={this.props} />
            <SolidCard allProjectInfo={this.props} />
            <MiscellaneousCard allProjectInfo={this.props} />
          </List>
        </Dialog>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    project: state.usersWithQuotes.projectData
  };
};
export default connect(mapStateToProps, { getUserWithQuoteAction })(
  FullScreenDialog
);
