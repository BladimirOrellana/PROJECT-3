import React from "react";
import ContainerHeader from "components/ContainerHeader";
import IntlMessages from "util/IntlMessages";
import {
  addItemAction,
  deleteItemAction,
  setItemHandleForm
} from "./../../../../../actions/RawMaterialsAction";
import "./style.css";
import { connect } from "react-redux";

class RawMaterial extends React.Component {
  constructor(props) {
    super(props);
  }

  handleInputChange = e => {
    this.props.setItemHandleForm(e.target.value);
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.dispatchAddItem(this.props.materialItem.rawMaterialtext);
  };

  render() {
    return (
      <div className="app-wrapper">
        <ContainerHeader
          match={this.props.match}
          title={<IntlMessages id="Raw Material" />}
        />

        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-3 ItemFormContainer">
              <div className="form-group">
                <div>
                  <label for="rawMaterialItem" className="ItemFormTitle">
                    Material Item:
                  </label>
                </div>
                <div>
                  <input
                    className="FormControl"
                    id="rawMaterialItem"
                    value={this.props.materialItem.rawMaterialtext}
                    name="materialItem"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Type An Item"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn btn-primary ItemFormCreateBtn"
                    onClick={this.handleFormSubmit}
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>

            <div className="col-4 PostedItemFormContainer">
              <div className="PostedItemFormTitle">Your Material Items:</div>
              {this.props.materialItemList.map((item, RawMaterialItemKey) => {
                return (
                  <div key={RawMaterialItemKey}>
                    <div className="PostedItems d-inline">
                      {item.rawMaterialtext}
                    </div>
                    <button
                      type="delete"
                      className="btn btn-danger d-inline"
                      onClick={() =>
                        this.props.deleteItemAction(item.rawMaterialkey)
                      }
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="row PostedFormContainer">
          <div className="col-12"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  materialItem: state.rawMaterialsReducer.materialItem,
  materialItemList: state.rawMaterialsReducer.materialItemList
});

const mapDispatchToProps = dispatch => ({
  setItemHandleForm: rawMaterialtext => {
    dispatch(setItemHandleForm(rawMaterialtext));
  },
  dispatchAddItem: rawMaterialAddText => {
    dispatch(addItemAction(rawMaterialAddText));
  },
  deleteItemAction: rawMaterialDeleteText => {
    dispatch(deleteItemAction(rawMaterialDeleteText));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(RawMaterial);
