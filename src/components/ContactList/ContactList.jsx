import { useSelector } from 'react-redux';
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList() {
    //отримуємо список завдань із стану Redux
    const contacts = useSelector((state) => state.contacts.items);
    // Використовується useSelector для отримання значення фільтра з Redux-стану.
    const filterName = useSelector((state) => state.filters.name);
    //При кожному оновленні двох станів(contacts or search) буде відфільтровуватись значення
    const visibleContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filterName.toLowerCase())
    );
    //Для кожного контакту перевіряється, чи містить його ім'я підрядок, який зберігається в filterName.
  return (
      <ul className={css.contactslist}>
          {visibleContacts.length ? (
              visibleContacts.map((contact) => (
                  <li className={css.item} key={contact.id}>
                      <Contact data={contact} />

                  </li>
              ))
          ) : (<p  className={css.nocontacts}>No contacts found</p>
          )}
    </ul>
  );
};