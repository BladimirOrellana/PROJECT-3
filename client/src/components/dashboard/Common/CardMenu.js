import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from "@material-ui/core/IconButton";

class CardMenu extends React.Component {

  render() {
    const userId = this.props.user._id;
    const options = [
      "Confirm",
     "Cancel"
    ];
    const {menuState, anchorEl,updateStateorCancel, id } = this.props;
    return (
      <Menu id="long-menu"
            anchorEl={anchorEl}
            open={menuState}
            

            MenuListProps={{
              style: {
                width: 150,
                paddingTop: 0,
                paddingBottom: 0
              },
            }}>
        {options.map(option =>
          <MenuItem value={option} key={option} onClick={() => updateStateorCancel(option,id,userId)}>
            {option}
           
          </MenuItem>
        )}
        <MenuItem onClick={() => this.props.menuStateHandler()}>
        Close
      </MenuItem>
      </Menu>
    );
  }

}

export default CardMenu;