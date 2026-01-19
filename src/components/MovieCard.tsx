import type { MovieInfo } from "../types";

interface MovieCardType {
  movie: MovieInfo;
}

function MovieCard({ movie }: MovieCardType) {
  return (
    <div className="movie-card">
      <div>
        <img src={movie.img} className="moviecard-img" />
        <h3>{movie.title}</h3>
        <p>⭐{movie.rating}</p>
      </div>
      <div>
        <i>{movie.genres}</i>
      </div>
    </div>
  );
}

export default MovieCard;
