import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import CloseIcon from '@material-ui/icons/Close';
class CardMenu extends React.Component {
  render() {
    const userId = this.props.user._id;
    const options = [ "Done", "Cancel","X"];
    const { menuState, anchorEl, id } = this.props;
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
        {options.map(option => (
          <MenuItem
            value={option}
            key={option}
            onClick={() => this.props.updateStateorCancel(option, id, userId)}
          >
            {option}
            
          </MenuItem>
        ))}
      </Menu>
    );
  }
}

export default CardMenu;
