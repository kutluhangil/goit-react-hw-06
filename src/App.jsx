import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

export default function App() {
  return (
    <div className='appContainer'>
      <h1>Phonebook</h1>

      {/* Kişi ekleme formu */}
      <ContactForm />

      {/* Arama kutusu */}
      <SearchBox />

      {/* Kişi listesi */}
      <ContactList />
    </div>
  );
}
