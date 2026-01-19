import type { MovieInfo } from "../types";
import MovieCard from "../components/MovieCard";

interface MovieProps {
  movies: MovieInfo[];
}

function Movies({ movies }: MovieProps) {
  return (
    <div className="movies">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Movies;
