import React from 'react';
import ContainerHeader from 'components/ContainerHeader';
import IntlMessages from 'util/IntlMessages';

class FinishedProject extends React.Component {

  render() {
   return (
      <div className="app-wrapper">
        <ContainerHeader match={this.props.match} title={<IntlMessages id="Dash Board"/>}/>
        <div className="d-flex justify-content-center">
        Finished Project
       </div>
   </div>
    );

  }
}

export default FinishedProject;