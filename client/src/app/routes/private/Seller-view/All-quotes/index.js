import React from 'react';
import ContainerHeader from 'components/ContainerHeader';
import IntlMessages from 'util/IntlMessages';

class AllQuotes extends React.Component {

  render() {
   return (
      <div className="app-wrapper">
        <ContainerHeader match={this.props.match} title={<IntlMessages id="Dash Board"/>}/>
        <div className="d-flex justify-content-center">
        All Quotes
       </div>
   </div>
    );

  }
}

export default AllQuotes;