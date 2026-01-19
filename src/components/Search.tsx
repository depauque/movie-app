import type { ChangeEventHandler } from "react";

interface SearchProps {
  handleSearch: ChangeEventHandler<HTMLInputElement>;
}

function Search({ handleSearch }: SearchProps) {
  return (
    <div className="search">
      <h3 className="h3-sidebar">Поиск</h3>
      <input type="text" onChange={handleSearch} />
    </div>
  );
}

export default Search;
