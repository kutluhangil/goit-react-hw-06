import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import styles from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <div className={styles.avatar}>
          <FaUser />
        </div>
        <div className={styles.details}>
          <span className={styles.name}>{name}</span>
          <span className={styles.number}>{number}</span>
        </div>
      </div>

      <div className={styles.actions}>
        <button className={styles.deleteBtn} onClick={() => dispatch(deleteContact(id))}>
          Delete
        </button>
        <button className={styles.callBtn}>
          <FaPhoneAlt size={14} />
        </button>
      </div>
    </div>
  );
}
