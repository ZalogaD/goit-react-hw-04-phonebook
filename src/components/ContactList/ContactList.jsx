import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, DeleteButton } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map((contact) => (
        <ListItem key={contact.id}>
          {contact.name} - {contact.number}
          <DeleteButton onClick={() => onDeleteContact(contact.id)}>Delete</DeleteButton>
        </ListItem>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;