import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';
import { Cont, TitlePh, TitleCont } from './App.styled';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
        { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
        { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
        { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
    };
  }

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addNewContact = (newName, newNumber) => {
    const { contacts } = this.state;
    const isContactExists = contacts.some(
      contact => contact.name.toLowerCase() === newName.toLowerCase()
    );

    if (isContactExists) {
      alert(
        `${newName} is already in contacts. Please enter a different name.`
      );
      return;
    }

    const newContact = {
      id: nanoid(),
      name: newName,
      number: newNumber,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <Cont>
        <TitlePh>Phonebook</TitlePh>
        <ContactForm addNewContact={this.addNewContact} contacts={contacts} />
        <TitleCont>Contacts:</TitleCont>
        <Filter filter={filter} onFilterChange={this.handleFilterChange} />
        <ContactList
          contacts={filterContacts}
          onDeleteContact={this.deleteContact}
        />
      </Cont>
    );
  }
}

export default App;
