import { useState } from "react";
import "./hooks/useDebounce";
import Search from "./components/Search";
import Movies from "./components/Movies";
import Rating from "./components/Filters";
import Genres from "./components/Genres";
import data from "./data/movies.json";
import "./styles.css";
import useDebounce from "./hooks/useDebounce";

function App() {
  const [search, setSearch] = useState("");

  const movies =
    search.length === 0
      ? data
      : data.filter((m) =>
          m.title.toLowerCase().includes(search.toLowerCase()),
        );

  const handleSearch = useDebounce((value: string) => {
    setSearch(value);
  }, 800);

  return (
    <>
      <div className="container">
        <div className="sidebar">
          <Search handleSearch={handleSearch} />
          <Rating />
          <Genres />
        </div>
        <div className="main">
          <Movies movies={movies} />
        </div>
      </div>
    </>
  );
}

export default App;
