import { useState, useMemo, useEffect } from "react";
import MovieList from "../components/MovieList";
import Search from "../components/Search";
import Rating from "../components/Rating";
import Genres from "../components/Genres";
import SortButton from "../components/SortButton";
import Loader from "../UI/Loader";
import Pagination from "../components/Pagination";
import Login from "../components/Login";
import type { MovieInfo } from "../types";

const ITEMS_PER_PAGE = 8;

function Home({ data }: { data: MovieInfo[] }) {
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState({ min: 0, max: 10 });
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [sortType, setSortType] = useState<"" | "ASC" | "DSC">("");
  const [currentPage, setCurrentPage] = useState(1);

  const sortMovies = () => {
    setSortType((prev) => {
      if (prev === "") return "ASC";
      if (prev === "ASC") return "DSC";
      return "";
    });
  };

  const filteredMovies = useMemo(() => {
    let result = data;

    if (search.length > 0) {
      result = result.filter((m) =>
        m.title.toLowerCase().includes(search.toLowerCase()),
      );
    }

    result = result.filter(
      (m) => m.rating >= rating.min && m.rating <= rating.max,
    );

    if (selectedGenres.length > 0) {
      result = result.filter((m) => {
        return selectedGenres.some((g) => m.genres.includes(g));
      });
    }

    if (sortType === "ASC") {
      result = [...result].sort((a, b) => a.rating - b.rating);
    } else if (sortType === "DSC") {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [data, search, rating, selectedGenres, sortType]);

  const moviesToRender = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = currentPage * ITEMS_PER_PAGE;
    return filteredMovies.slice(start, end);
  }, [currentPage, filteredMovies]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentPage(1);
  }, [filteredMovies]);

  const pagesArray = useMemo(() => {
    const pages = [];
    const count = Math.ceil(filteredMovies.length / ITEMS_PER_PAGE);
    for (let i = 1; i <= count; i++) {
      pages.push(i);
    }
    return pages;
  }, [filteredMovies]);

  const genres = useMemo(() => {
    const allGenres = data.flatMap((m) =>
      m.genres.split(",").map((g) => g.trim()),
    );
    return [...new Set(allGenres)].sort();
  }, [data]);

  return (
    <>
      <div className="sidebar">
        <Login />
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
