import { useMemo, useState } from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Search from "./components/Search";
import Rating from "./components/Rating";
import Genres from "./components/Genres";
import data from "./data/movies.json";
import "./styles.css";

function App() {
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState({ min: 0, max: 10 });

  let movies =
    search.length === 0
      ? data
      : data.filter((m) =>
          m.title.toLowerCase().includes(search.toLowerCase()),
        );

  movies = movies.filter(
    (m) => m.rating >= rating.min && m.rating <= rating.max,
  );

  const genres = useMemo(() => {
    const allGenres = movies.flatMap((m) =>
      m.genres.split(",").map((g) => g.trim()),
    );
    return [...new Set(allGenres)].sort();
  }, [movies]);

  console.log(genres);

  return (
    <>
      <Header />
      <div className="container">
        <div className="sidebar">
          <Search setSearch={setSearch} />
          <Rating rating={rating} setRating={setRating} />
          <Genres genres={genres} />
        </div>
        <div className="main">
          <MovieList movies={movies} />
        </div>
      </div>
    </>
  );
}

export default App;
