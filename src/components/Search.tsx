import useDebounce from "../hooks/useDebounce";

interface SearchProps {
  setSearch: (value: string) => void;
}

const SEARCH_DELAY = 600;

function Search({ setSearch }: SearchProps) {
  const handleSearch = useDebounce((value: string) => {
    setSearch(value);
  }, SEARCH_DELAY);

  return (
    <div className="search">
      <h3 className="h3-sidebar">Поиск</h3>
      <input
        type="text"
        onChange={(e) => handleSearch(e.target.value)}
        className="text-inputs"
      />
    </div>
  );
}

export default Search;
