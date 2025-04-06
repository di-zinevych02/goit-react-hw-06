import { useSelector } from 'react-redux';
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList() {
    //отримуємо список завдань із стану Redux
    const contacts = useSelector((state) => state.contacts.items);
  return (
    <ul className={css.contactslist}>
      {contacts.map(contact => (
        <li className={css.item} key={contact.id}>
          <Contact data={contact}/>
        </li>
      ))}
    </ul>
  );
};