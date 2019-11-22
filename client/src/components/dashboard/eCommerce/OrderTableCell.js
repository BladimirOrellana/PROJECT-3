import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import {NavLink, Link} from 'react-router-dom';
import CardMenu from '../Common/CardMenu';


class OrderTableCell extends React.Component {

  onOptionMenuSelect = event => {
    this.setState({menuState: true, anchorEl: event.currentTarget});
  };
  handleRequestClose = () => {
    this.setState({menuState: false});
  };

  constructor() {
    super();
    this.state = {
      anchorEl: undefined,
      menuState: false,
    }
  }

  showSingleQuote(quoteId){
   
  }

  render() {
    const quoteId = 23455688990;
    const addresStyle ={
      color: 'black'
  
    }
    const {anchorEl, menuState} = this.state;
    const {_id, address,startDate,finalPrice,  state} = this.props.data;
    const stateStyle = state.includes("Completed") ? "text-white bg-success" : state.includes("On Hold") ? "bg-amber" : state.includes("Delayed") ? "text-white bg-danger" : "text-white bg-grey";
    return (
      
      <tr
        tabIndex={-1}
        key={_id}
       

      >
      <NavLink to={`/app/your-quote/details/${_id}`}>
       <td  >
          <div className="user-profile d-flex flex-row align-items-center">
         <div className="user-detail"   
         >
              <h5 className="user-name" style={addresStyle}>{address} </h5>
            </div>
          </div>
        </td>
        </NavLink>
        <td>{startDate}</td>
        <td>${parseFloat(finalPrice)}</td>
        <td className="status-cell text-right">
          <div className={` badge text-uppercase ${stateStyle}`}>{state}</div>
        </td>
        
        <td className="text-right">
          <IconButton onClick={this.onOptionMenuSelect.bind(this)}>
            <i className="zmdi zmdi-more-vert"/></IconButton>
          <CardMenu menuState={menuState} anchorEl={anchorEl}
                    handleRequestClose={this.handleRequestClose.bind(this)}/>
        </td>
      </tr>
      

    );
  }
}

export default OrderTableCell;
