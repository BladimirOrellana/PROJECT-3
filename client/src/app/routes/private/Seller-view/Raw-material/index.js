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

  handleInputChange = event => {
    this.props.setItemHandleForm(event.target.value);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.addItemAction(this.props.materialItem.rawMaterialtext);
  };

  render() {
    return (
      <div className="app-wrapper">
        <ContainerHeader
          match={this.props.match}
          title={<IntlMessages id="Raw Material" />}
        />

        <div className="row">
          <div className="col-12">
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
            </div>
          </div>
        </div>

        <div className="row PostedFormContainer">
          <div className="col-12">
            <div className="row justify-content-center">
              <div className="col-4 PostedItemFormContainer">
                <div className="PostedItemFormTitle">Your Material Items:</div>
                {this.props.materialItemList.map((item, RawMaterialItemKey) => {
                  // console.log(item);
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
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  materialItem: state.rawMaterialsReducer.materialItem,
  materialItemList: state.rawMaterialsReducer.materialItemList
});

// map actions to component function props
const mapDispatchToProps = dispatch => ({
  setItemHandleForm: rawMaterialtext => {
    dispatch(setItemHandleForm(rawMaterialtext));
  },
  addItemAction: rawMaterialAddText => {
    dispatch(addItemAction(rawMaterialAddText));
  },
  deleteItemAction: rawMaterialDeleteText => {
    dispatch(deleteItemAction(rawMaterialDeleteText));
  },
  sendRawMaterialToDatabase: () => dispatch(addItemAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(RawMaterial);
