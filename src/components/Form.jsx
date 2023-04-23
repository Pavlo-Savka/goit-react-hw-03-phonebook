import React, { Component } from 'react';
class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => 
    this.setState({
    name: '',
    number: '',
  })
  
  render() {
    return (
      <form
        action="addContact"
        name="addContact"
        onSubmit={this.handleSubmit}
      >
        <label className="phonebook__label">
          <span className="phonebook__name">Name</span>
          <input
            className="phonebook__input-name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </label>

        <label className="phonebook__label-name">
          <span className="phonebook__number">Number</span>
          <input
            className="phonebook__input-number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
export default Form;
