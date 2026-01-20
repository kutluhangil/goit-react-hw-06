import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <li className={css.card}>
      <div>
        <p className={css.name}>{contact.name}</p>
        <p className={css.number}>{contact.number}</p>
      </div>
      <button className={css.deleteButton} onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </button>
    </li>
  );
}
