import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <input
      type="text"
      placeholder="Find contacts by name"
      value={filter}
      onChange={(e) => dispatch(changeFilter(e.target.value))}
    />
  );
}
