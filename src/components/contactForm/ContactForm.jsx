import React, { useState } from 'react';
import css from "./ContactForm.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from "../../store/redux/contactSlice";

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { contacts } = useSelector((store) => store.contacts)

  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    if (contacts.find(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    )) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact({ name, number }))
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.formDiv}>
        <label className={css.label}>
          Name
          <input
            className={css.inputName}
            type="text"
            name="name"
            placeholder="Enter name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={((evt) => {
              setName(evt.target.value)
            })}
            required
          />
        </label>
        <label className={css.label}>
          Number
          <input
            className={css.inputNumber}
            type="tel"
            name="number"
            placeholder="Enter number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={((evt) => {
              setNumber(evt.target.value)
            })}
            required
          />
        </label>
      </div>
      <button className={css.buttonAdd} type="submit">add contact</button>
    </form>
  );
}
