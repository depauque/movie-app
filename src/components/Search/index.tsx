import useDebounce from "../../hooks/useDebounce";
import { SEARCH_DELAY } from "../../constants";
import styles from "./Search.module.css";

interface SearchProps {
  setSearch: (value: string) => void;
}

function Search({ setSearch }: SearchProps) {
  const handleSearch = useDebounce((value: string) => {
    setSearch(value);
  }, SEARCH_DELAY);

  return (
    <div>
      <h4 className={styles.h4Sidebar}>Поиск по названию</h4>
      <input
        type="text"
        onChange={(e) => handleSearch(e.target.value)}
        className={styles.textInputs}
      />
    </div>
  );
}

export default Search;
