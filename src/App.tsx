import { useRef, useState } from "react";
import data from "./data/movies.json";
import "./styles.css";
import Search from "./components/Search";
import Movies from "./components/Movies";
import Rating from "./components/Filters";
import Genres from "./components/Genres";

function App() {
  const [search, setSearch] = useState("");
  const timerRef = useRef(0);

  const movies =
    search.length === 0
      ? data
      : data.filter((m) =>
          m.title.toLowerCase().includes(search.toLowerCase()),
        );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.target.value;
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setSearch(currentValue);
    }, 800);
  };

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
