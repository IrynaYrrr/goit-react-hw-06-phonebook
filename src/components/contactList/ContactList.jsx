import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../store/redux/contactSlice";
import css from "./ContactList.module.css";


export const ContactList = ({ contacts, contact }) => {

  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div className={css.contactsWrap}>
      <ul>
        {contacts.map(({id, number, name}) =>
            <li className={css.contactItem} key={id}>
              <div>{name}: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{number}</div>
              <div>
                <button className={css.btnDelete}
                  onClick={() => handleDelete(id)}>
                  Delete
                </button>
              </div>
            </li>
        )}
      </ul>
    </div>
  )
}
