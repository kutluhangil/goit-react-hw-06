import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import styles from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div className={styles.container}>
      <p className={styles.label}>Find contacts by name</p>
      <input
        type="text"
        className={styles.input}
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        placeholder="Find contacts by name"
      />
    </div>
  );
}
