import React from 'react';
import ContainerHeader from 'components/ContainerHeader';
import IntlMessages from 'util/IntlMessages';
import "./style.css";
import { connect } from 'react-redux';

class RawMaterial extends React.Component {
  
  /*
  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    // Alert the user their first and last name, clear `this.state.materialItem` clearing the inputs
    // alert(`Your material "${this.state.materialItem}" was created!`);
    // this.setState({
    //   materialItem: ""
    // });
  };
  */

  render() {
   return (
      <div className="app-wrapper">
        <ContainerHeader match={this.props.match} title={<IntlMessages id="Raw Material"/>}/>
        
        <div className="row">
          <div className="col-12">
            
            <div className="row justify-content-center">
            <div className="col-3 ItemFormContainer">
              <div className="form-group">
                <div>
                <label for="rawMaterialItem" className="ItemFormTitle">Material Item:</label>
                </div>
                <div>
                <input 
                  className="FormControl" 
                  id="rawMaterialItem" 
                  value={this.props.materialItem}
                  name="materialItem"
                  onChange={this.props.handleInputChange}
                  type="text"
                  placeholder="Type An Item"
                />
                </div>
                <div>
                <button type="submit" className="btn btn-primary ItemFormBtn" onClick={(event) => this.props.handleFormSubmit(event, this.props.materialItem)}>
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
              <div className="PostedItems">{this.props.materialItem}</div>
            </div>
            </div>

          </div>
        </div>

      </div>
    );

  }
}
const mapStateToProps = state => ({
  materialItem: state.rawMaterialsReducer.formInput.materialItem
});

// map actions to component function props
const mapDispatchToProps = dispatch => ({
  handleInputChange: event => {
    const { name, value } = event.target;
    console.log(name, value);
    dispatch({type:"RAW_MATERIAL_INPUT_CHANGE", name, value});
  },
  handleFormSubmit:  (event, materialItem) => {
    event.preventDefault();
    alert(`Your material "${materialItem}" was created!`);
    dispatch({type:"RAW_MATERIAL_FORM_SUBMIT", materialItem});
  }
});
// wraps the component with redux mappings
// this is called a high order component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RawMaterial);

