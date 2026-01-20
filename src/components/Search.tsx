interface SearchProps {
  handleSearch: (value: string) => void;
}

function Search({ handleSearch }: SearchProps) {
  return (
    <div className="search">
      <h3 className="h3-sidebar">Поиск</h3>
      <input type="text" onChange={(e) => handleSearch(e.target.value)} />
    </div>
  );
}

export default Search;
