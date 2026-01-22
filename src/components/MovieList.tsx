import { Link } from "react-router-dom";
import type { MovieInfo } from "../types";
import MovieCard from "./MovieCard";
import LikeButton from "./LikeButton";

interface MovieProps {
  movies: MovieInfo[];
}

function MovieList({ movies }: MovieProps) {
  return (
    <div className="movies">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <div className="parent-container">
            <Link key={movie.id} to={`/movie/${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
            <LikeButton className="like-button--card" movieId={movie.id} />
          </div>
        ))
      ) : (
        <h2>Ничего не найдено</h2>
      )}
    </div>
  );
}

export default MovieList;
