import type { MovieInfo } from "../types";

interface MovieCardType {
  movie: MovieInfo;
}

function MovieCard({ movie }: MovieCardType) {
  return (
    <div className="movie-card">
      <div className="movie-card-info">
        <img src={movie.img} className="movie-card-img" />
        <h2>{movie.title}</h2>
        <p className="card-genres">{movie.genres}</p>
      </div>
      <div className="movie-card-rating">
        <h3>⭐{movie.rating}</h3>
      </div>
    </div>
  );
}

export default MovieCard;
