import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class CardMenu extends React.Component {

  render() {
    const userId = this.props.user._id;
    const options = [
      "Confirm",
      "Active",
      "Done",
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
          </MenuItem>,
        )}
      </Menu>
    );
  }

}

export default CardMenu;