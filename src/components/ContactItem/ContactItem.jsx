import React, { Component } from 'react';

class ContactItem extends Component { 
    render() {
        return (
            <li key={this.props.id} className='contact-item'>
                {this.props.name}: {this.props.number}
                <button type='button' onClick={this.props.itemToDelete}>Delete</button>
            </li>
        );
    }
}

export default ContactItem;