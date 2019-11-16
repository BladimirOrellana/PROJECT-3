import React from 'react';
import ContactCell from "./ContactCell/index";

const ContactList = ({contactList, addFavourite, onContactSelect, onSaveContact, onDeleteContact}) => {
  contactList = [{
    name: "Alex",
   thumb: "https://images.unsplash.com/photo-1506919258185-6078bba55d2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
   email: "bladimirorellana@ymail.com",
   phone: 8322964721,
   designation: "Owner",
   starred: true


  },
  {
    name: "Alex",
   thumb: "https://images.unsplash.com/photo-1506919258185-6078bba55d2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
   email: "bladimirorellana@ymail.com",
   phone: 8322964721,
   designation: "Owner",
   starred: true


  },
  {
    name: "Alex",
   thumb: "https://images.unsplash.com/photo-1506919258185-6078bba55d2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
   email: "bladimirorellana@ymail.com",
   phone: 8322964721,
   designation: "Owner",
   starred: true


  }]
  return (
   
    <div className="contact-main-content">
      {contactList.map((contact, index) =>
        <ContactCell key={index} contact={contact} onDeleteContact={onDeleteContact}
                     onSaveContact={onSaveContact}
                     addFavourite={addFavourite} onContactSelect={onContactSelect}/>
      )}

    </div>
  )
};

export default ContactList;