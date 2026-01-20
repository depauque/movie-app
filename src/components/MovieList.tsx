import type { MovieInfo } from "../types";
import MovieCard from "./MovieCard";

interface MovieProps {
  movies: MovieInfo[];
}

function MovieList({ movies }: MovieProps) {
  return (
    <div className="movies">
      {movies.length > 0 ? (
        movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
      ) : (
        <h2>Ничего не найдено</h2>
      )}
    </div>
  );
}

export default MovieList;
