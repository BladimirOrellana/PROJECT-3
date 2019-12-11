import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import './../../../../index.css';
class NestedList extends React.Component {
  state = {open: true};

  handleClick = () => {
    this.setState({open: !this.state.open});
  };

  render() {
    
   return (
      <List>
      <ListItem button  className="noPaddingTopBotton listItem">
         <ListItemText>{this.props.miscellaneousData.description}</ListItemText>
         <span className="align-right"> ${this.props.miscellaneousData.amount.$numberDecimal}</span>

         
        </ListItem>
      </List>
    );
  }
}

export default NestedList;