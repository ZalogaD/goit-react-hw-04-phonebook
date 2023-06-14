import React, { useState } from 'react';
import {Form, Input, Btn} from './ContactForm.styled';
import PropTypes from 'prop-types';

const ContactForm = ({ addNewContact, contacts }) => {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const isContactExists = contacts.some(
      (contact) => contact.name.toLowerCase() === newName.toLowerCase()
    );

    if (isContactExists) {
      alert(`${newName} is already in contacts. Please enter a different name.`);
      return;
    }
    
    addNewContact(newName, newNumber);
    setNewName('');
    setNewNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={newNumber}
        onChange={(e) => setNewNumber(e.target.value)}
      />
      <Btn type="submit">Add Contact</Btn>
    </Form>
  );
};

ContactForm.propTypes = {
    addNewContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

export default ContactForm;