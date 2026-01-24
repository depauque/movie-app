import { useState, useMemo, useEffect } from "react";
import MovieList from "../components/MovieList";
import Search from "../components/Search";
import Rating from "../components/Rating";
import Genres from "../components/Genres";
import SortButton from "../components/SortButton";
import Loader from "../UI/Loader";
import Pagination from "../components/Pagination";
import type { MovieInfo } from "../types";

const ITEMS_PER_PAGE = 8;

function Home() {
  const [data, setData] = useState<MovieInfo[]>([]);
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState({ min: 0, max: 10 });
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [sortType, setSortType] = useState<"" | "ASC" | "DSC">("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://6972842532c6bacb12c72734.mockapi.io/api/movies").then(
        (res) =>
          res
            .json()
            .then((data) => setData(data))
            .catch((err) => console.log("Не грузится!:", err)),
      );
    }, 500);
  }, []);

  const sortMovies = () => {
    setSortType((prev) => {
      if (prev === "") return "ASC";
      if (prev === "ASC") return "DSC";
      return "";
    });
  };

  let movies =
    search.length === 0
      ? data
      : data.filter((m) =>
          m.title.toLowerCase().includes(search.toLowerCase()),
        );

  movies = movies.filter(
    (m) => m.rating >= rating.min && m.rating <= rating.max,
  );

  movies =
    selectedGenres.length === 0
      ? movies
      : [...movies].filter((m) => {
          return selectedGenres.some((g) => m.genres.includes(g));
        });

  movies =
    sortType === ""
      ? movies
      : sortType === "ASC"
        ? [...movies].sort((a, b) => a.rating - b.rating)
        : [...movies].sort((a, b) => b.rating - a.rating);

  const moviesToRender = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = currentPage * ITEMS_PER_PAGE;
    return [...movies].slice(start, end);
  }, [currentPage, movies]);

  const pagesArray = useMemo(() => {
    const pages = [];
    const count = Math.ceil(movies.length / ITEMS_PER_PAGE);
    for (let i = 1; i <= count; i++) {
      pages.push(i);
    }
    return pages;
  }, [movies]);

  const genres = useMemo(() => {
    const allGenres = data.flatMap((m) =>
      m.genres.split(",").map((g) => g.trim()),
    );
    return [...new Set(allGenres)].sort();
  }, [data]);

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
        <SortButton sortType={sortType} sortMovies={sortMovies} />
      </div>
      <div className="main">
        {moviesToRender.length > 0 ? (
          <MovieList moviesToRender={moviesToRender} />
        ) : (
          <Loader />
        )}
        <Pagination
          setCurrentPage={setCurrentPage}
          pagesArray={pagesArray}
          currentPage={currentPage}
        />
      </div>
    </>
  );
}

export default Home;
