import { useState, useMemo } from "react";
import MovieList from "../components/MovieList";
import Search from "../components/Search";
import Rating from "../components/Rating";
import Genres from "../components/Genres";
import Loader from "../UI/Loader";
import type { MovieInfo } from "../types";

function Home({ data }: { data: MovieInfo[] }) {
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState({ min: 0, max: 10 });
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

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
    const allGenres = data.flatMap((m) =>
      m.genres.split(",").map((g) => g.trim()),
    );
    return [...new Set(allGenres)].sort();
  }, [data]);

  movies =
    selectedGenres.length === 0
      ? movies
      : movies.filter((m) => {
          return selectedGenres.some((g) => m.genres.includes(g));
        });

  return (
    <>
      <div className="sidebar">
        <Search setSearch={setSearch} />
        <Rating rating={rating} setRating={setRating} />
        <Genres
          genres={genres}
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
        />
      </div>
      <div className="main">
        {movies.length > 0 ? <MovieList movies={movies} /> : <Loader />}
      </div>
    </>
  );
}

export default Home;
