import React, { Component } from 'react';
import ContactItem from '../ContactItem/ContactItem';
import PropTypes from 'prop-types';

class ContactsList extends Component {
    render() {
    const { contacts, filter } = this.props;
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
      return (
        <ul>
          {filteredContacts.map((i) => (
            <ContactItem
              key={i.id}
              id={i.id}
              name={i.name}
              number={i.number}
              itemToDelete={this.props.onDeleteContact}
            />
          ))}
        </ul>);
       }
}
export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired
};