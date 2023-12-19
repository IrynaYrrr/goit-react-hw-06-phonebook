import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../store/redux/contactSlice";
import css from "./ContactList.module.css";


export const ContactList = ({ filter }) => {

	const {contacts} = useSelector((store) => store.contacts)

  const dispatch = useDispatch();

  const handleDelete = (id) => dispatch(deleteContact(id));

  const getFilteredContacts = () => {
    console.log(contacts);
    return contacts.filter((el) =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filtered = getFilteredContacts();

  return (
    <div className={css.contactsWrap}>
      <ul>
        {filtered.map(({id, number, name}) =>
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
