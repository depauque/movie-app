import type { MovieInfo } from "../types";

interface MovieCardType {
  movie: MovieInfo;
}

function MovieCard({ movie }: MovieCardType) {
  return (
    <div className="movie-card">
      <img src={movie.img} className="movie-card-img" />
      <div className="movie-card-info-container">
        <div className="movie-card-info">
          <h3>{movie.title}</h3>
          <p className="card-genres">{movie.genres}</p>
        </div>
        <div className="movie-card-rating">
          <h3>
            {movie.rating >= 7.5 ? "🔥" : movie.rating < 6 ? "🍌" : "⭐"}
            {movie.rating}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
