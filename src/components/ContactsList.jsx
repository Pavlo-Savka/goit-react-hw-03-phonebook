import React, { Component } from 'react';
import ContactItem from './ContactItem/ContactItem';

class ContactsList extends Component {
    render() {
    const { contacts, filter } = this.props;
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
        return (
           filteredContacts.map((i) => {
               return (
        <ul>     
         <ContactItem 
         id={i.id}
         name={i.name}
         number={i.number}
         itemToDelete={this.props.handleDelete}               
        />
        </ul>)

             }   
    )      
           )
       }
}
export default ContactsList;