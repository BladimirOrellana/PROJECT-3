import React from 'react';
import ContainerHeader from 'components/ContainerHeader';
import IntlMessages from 'util/IntlMessages';
import "./style.css";

class RawMaterial extends React.Component {
  // Setting the component's initial state
  state = {
    materialItem: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    // Alert the user their first and last name, clear `this.state.materialItem` clearing the inputs
    alert(`Your material "${this.state.materialItem}" was created!`);
    this.setState({
      materialItem: ""
    });
  };


  render() {
   return (
      <div className="app-wrapper">
        <ContainerHeader match={this.props.match} title={<IntlMessages id="Raw Material"/>}/>
        
        <div className="row">
          <div className="col-12">
            
            <div className="row">
            <div className="col-5">
              <div className="form-group">
                <label for="rawMaterialItem">Material Item:</label>
                <input 
                  className="form-control" 
                  id="rawMaterialItem" 
                  value={this.state.materialItem}
                  name="materialItem"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="Material Item"
                  
                />
                <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>
                  Create
                </button>
              </div>
            </div>
            </div>

          </div>
        </div>

        <div className="row">
          <div className="col-12">

            <div className="row">
            <div className="col-12">
              <div>{this.state.materialItem}</div>
            </div>
            </div>

          </div>
        </div>

      </div>
    );

  }
}

export default RawMaterial;