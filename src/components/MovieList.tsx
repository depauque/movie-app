import { Link } from "react-router-dom";
import type { MovieInfo } from "../types";
import MovieCard from "./MovieCard";
import LikeButton from "./LikeButton";

interface MovieProps {
  moviesToRender: MovieInfo[];
}

function MovieList({ moviesToRender }: MovieProps) {
  return (
    <div className="movies">
      {moviesToRender.map((movie) => (
        <div className="parent-container">
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <MovieCard movie={movie} />
          </Link>
          <LikeButton className="like-button--card" movieId={movie.id} />
        </div>
      ))}
    </div>
  );
}

export default MovieList;
