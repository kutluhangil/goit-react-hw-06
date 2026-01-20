import { useEffect, useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

// 🔑 localStorage anahtarı
const STORAGE_KEY = "contacts";

export default function App() {
  // 1️⃣ Kişiler state'i (localStorage'dan başlat)
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem(STORAGE_KEY);

    return savedContacts
      ? JSON.parse(savedContacts)
      : [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ];
  });

  // 2️⃣ Arama filtresi state'i
  const [filter, setFilter] = useState("");

  // 3️⃣ contacts değiştiğinde localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  // 4️⃣ Kişi ekleme
  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  // 5️⃣ Kişi silme
  const deleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  // 6️⃣ Filtrelenmiş kişiler (case-insensitive)
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className='appContainer'>
      <h1>Phonebook</h1>

      {/* Kişi ekleme formu */}
      <ContactForm onAddContact={addContact} />

      {/* Arama kutusu */}
      <SearchBox value={filter} onChange={setFilter} />

      {/* Kişi listesi */}
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}
