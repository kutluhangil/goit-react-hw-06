import styles from "./SearchBox.module.css";

export default function SearchBox({ value, onChange }) {
  return (
    <div className={styles.container}>
      <p className={styles.label}>Find contacts by name</p>
      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Find contacts by name"
      />
    </div>
  );
}
