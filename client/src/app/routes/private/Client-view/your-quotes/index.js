import React from 'react';
import ContainerHeader from 'components/ContainerHeader';
import IntlMessages from 'util/IntlMessages';
import ContactList from 'components/contact/ContactList';
class YourQuote extends React.Component {

  render() {
    return (
      <div className="app-wrapper">
       <div className="d-flex justify-content-center">
          <h1>Your  Quote</h1>
        </div>
        <ContactList />

      </div>
    );
  }
}

export default YourQuote;