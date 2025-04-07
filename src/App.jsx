// import { useState, useEffect } from "react";
import ContactList from "./components/ContactList/ContactList";
import css from "./App.module.css";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";


export default function App() {
//   //Стан зберігається у памяті вкладці браузера
//   const [contacts, setContacts] = useState(() => {
//     // Зчитуємо значення за ключем
//     const savedContacts = localStorage.getItem("contacts");
//     // якщо там щось є, парсимо та повертаємо значення стану або повертаємо значення за замовч
//     return savedContacts ? JSON.parse(savedContacts) : initialContacts;
//   });

// // Зберігаємо в локальне сховище контакти між перезавантаженнями сторінки, при умові якщо масив не порожній (Це зроблено, щоб уникнути збереження порожнього масиву при першому завантаженні)
//   useEffect(()=> {
//     if (contacts.length > 0) {
//     localStorage.setItem("contacts", JSON.stringify(contacts));
//   }
//   // Ефект буде виконуватись вище кожного разу тільки тоді, коли змінюється стан контакс
//  }, [contacts]);

//   const [search, setSearch] = useState("");
// //Функція зміни стану
//   const addContacts = (newContacts) => {
//     //Буде викликана реактом під капотом і отримає обовґязковий один аргумент, обявляємо параметр, що буде поточне значення стану contacts на момент оновлення
//     setContacts((prevContacts) => {
//     //Розпилюємо попередні контакти і додаємо нові контакти
//       return [...prevContacts, newContacts];
//     });
//   };
// //
//   const deleteContacts = (contactId) => {
//     //Використовуємо функіональну форму сетеру, повертає новий стан,
//     setContacts(prevContacts => {
//       //Відфільтрує масив, якщо індентифікатор співпаде це означатиме що той елемент, котрий потрібно видалити і не піде в новий масив
//       return prevContacts.filter((contact) => contact.id !== contactId);
//     });
//   };
//   //При кожному оновленні двох станів(contacts or search) буде відфільтровуватись значення
//   const visibleContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(search.toLowerCase())
// );
  return (
    <div className={css.maincontainer}>
      <h1 className={css.headtitile}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

