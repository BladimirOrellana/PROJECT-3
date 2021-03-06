import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { NavLink, Link } from "react-router-dom";
import CardMenu from "./../OrderTable/CardMenu";
import { connect } from "react-redux";
import { updateStateAction } from "./../../../../../../actions/Your-quotes";
import Moment from "react-moment";
import "moment-timezone";
import PaymentModal from './../Modals/Payments';
import MiscellaneousModal from './../Modals/Miscellaneous';
import MaterialModal from './../Modals/Material';
import './index.css';
class OrderTableCell extends React.Component {
  onOptionMenuSelect = event => {
    this.setState({ menuState: true, anchorEl: event.currentTarget });
  };

  constructor() {
    super();
    this.state = {
      anchorEl: undefined,
      menuState: false
    };
  }

  updateStateorCancel(state, quoteId, userId) {
    this.setState({ menuState: false });
    const stateOptions = {
      state,
      quoteId,
      userId
    };
    switch (state) {
      case "Done":
        this.props.updateStateAction(stateOptions);
        break;
   
      case "Cancel":
        this.props.updateStateAction(stateOptions);
        break;
      
    }
  }

  render() {
   const options = ['PAYMENTS','MISCELLLANEOUS','MATERIAL'];
    const addresStyle = {
      color: "black"
    };
    const { anchorEl, menuState } = this.state;

    const { _id, address, estimatedPrice, state, createdAt } = this.props.data;
    let total = 0;
    const getArrayOfPrice = estimatedPrice.map(price => {
      return parseInt(price.$numberDecimal);
    });

    total = getArrayOfPrice.reduce((a, b) => a + b, 0);
    const stateStyle = state.includes("Done")
      ? "text-white bg-primary"
      : state.includes("Confirm")
      ? "bg-amber"
      : state.includes("Active")
      ? "text-white bg-success"
      : "text-white bg-grey";
    return (
      <tr tabIndex={-1} key={_id}>
        <NavLink to={`/app/your-quote/details/${_id}`}>
          <td>
            <div className="user-profile d-flex flex-row align-items-center">
              <div className="user-detail">
                <p className="" style={addresStyle}>
                  {address}{" "}
                </p>
              </div>
            </div>
          </td>
        </NavLink>
        <td>
          {" "}
          <Moment format="YYYY/MM/DD">{createdAt}</Moment>
        </td>
        <td>${total}</td>
        <td className="status-cell text-right">
       {/*<PaymentModal user={this.props.user} quoteId={_id} />*}
        </td>
        <td className="status-cell text-right">
      {/*<MiscellaneousModal user={this.props.user} quoteId={_id} />*/}
        </td>
        <td className="status-cell text-right">
      {/* <MaterialModal user={this.props.user} quoteId={_id} />*/}
        </td>
      

        <td className="text-right">
          <IconButton onClick={this.onOptionMenuSelect.bind(this)}>
            <i className="zmdi zmdi-more-vert" />
          </IconButton>
         <CardMenu
            id={_id}
            user={this.props.user}
            updateStateorCancel={this.updateStateorCancel.bind(this)}
            menuState={menuState}
            anchorEl={anchorEl}
          />
        </td>
      </tr>
    );
  }
}
const mapStateToProps = state => {
  return {
    stateValue: state.quotes.stateValue,
    user: state.auth.user
  };
};
export default connect(mapStateToProps, { updateStateAction })(OrderTableCell);
