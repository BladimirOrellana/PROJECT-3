import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Form from "./Form";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div id={props.edit || props.delete ? "modalDiv" : ""}>
      {props.cancel && (
        <Button
          color="primary"
          variant="contained"
          className="text-white"
          onClick={handleOpen}
        >
          Cancel
        </Button>
      )}

      {props.activate && (
        <Button
          color="primary"
          variant="contained"
          className="text-white"
          onClick={handleOpen}
        >
          Activate
        </Button>
      )}

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <Form
            cancel={props.cancel}
            activate={props.activate}
            closing={() => {
              handleClose();
            }}
          />
        </Fade>
      </Modal>
    </div>
  );
}
