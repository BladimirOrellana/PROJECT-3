import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
class CardMenu extends React.Component {
  render() {
    const userId = this.props.user._id;
    const { menuState, anchorEl, updateStateorCancel, id, state } = this.props;
    return (
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={menuState}
        MenuListProps={{
          style: {
            width: 150,
            paddingTop: 0,
            paddingBottom: 0
          }
        }}
      >
        {state === "Estimated" && (
          <MenuItem
            value={"Confirm"}
            key={"Confirm"}
            onClick={() => updateStateorCancel("Confirmed", id, userId)}
          >
            {"Confirm"}
          </MenuItem>
        )}
        <MenuItem
          value={"Cancel"}
          key={"Cancel"}
          onClick={() => updateStateorCancel("Canceled", id, userId)}
        >
          {"Cancel"}
        </MenuItem>
        <MenuItem onClick={() => this.props.menuStateHandler()}>Close</MenuItem>
      </Menu>
    );
  }
}
export default CardMenu;