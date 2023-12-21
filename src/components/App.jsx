import React, { useState } from "react";
import { ContactForm } from './contactForm/ContactForm';
import { Filter } from './filter/Filter';
import { ContactList } from './contactList/ContactList';

const headersStyles = {
  margin: 8,
  padding: "12px 16px",
  borderRadius: 4,
  backgroundColor: "orange",
  color: "white",
  textAlign: 'center',
};

export const App = () => {

  return (
    <div>
      <h1 style={headersStyles}>Phonebook</h1>
      <ContactForm/>
      <h2 style={headersStyles}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  )
}
